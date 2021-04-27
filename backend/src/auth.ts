import { mapSchema, getDirectives, MapperKind } from "@graphql-tools/utils";
import { getUserId, getTokenPayload } from './utils';
import { AuthenticationError } from "apollo-server";


function getUser(userRole: string) {
  const roles = ['USER', 'MODERATOR', 'ADMIN'];
  return {
    hasRole: (role) => {
      const tokenIndex = roles.indexOf(userRole);
      const roleIndex = roles.indexOf(role);
      console.log('role: ', role);
      console.log('tokenIndex: ' + tokenIndex);
      console.log('roleIndex: '+ roleIndex);
      console.log(roleIndex >= 0 && tokenIndex >= roleIndex);
      return roleIndex >= 0 && tokenIndex >= roleIndex;
    },
  };
}


export function authDirective(directiveName: string) {
  const typeDirectiveArgumentMaps: Record<string, any> = {};
  return {
    authDirectiveTypeDefs: `directive @${directiveName}(
      requires: Role = ADMIN,
    ) on OBJECT | FIELD_DEFINITION

    enum Role {
      USER
      ADMIN
      MODERATOR
    }`,
    authDirectiveTransformer: (schema) => mapSchema(schema, {
      [MapperKind.TYPE]: (type) => {
        const typeDirectives = getDirectives(schema, type);
        typeDirectiveArgumentMaps[type.name] = typeDirectives[directiveName];
        return undefined;
      },
      [MapperKind.OBJECT_FIELD]: (fieldConfig, _fieldName, typeName) => {
        const fieldDirectives = getDirectives(schema, fieldConfig);
        const directiveArgumentMap = fieldDirectives[directiveName] ?? typeDirectiveArgumentMaps[typeName];
        if (directiveArgumentMap) {
          const { requires } = directiveArgumentMap;
          if (requires) {
            const { resolve } = fieldConfig;
            fieldConfig.resolve = function (source, args, context, info) {
              if (!context.user) throw new AuthenticationError('Not authorized');
              const user = getUser(context.user.role);
              if (!user.hasRole(requires)) {
                throw new AuthenticationError('Not authorized');
              }
              return resolve(source, args, context, info);
            }
            return fieldConfig;
          }
        }
      }
    })
  };
};