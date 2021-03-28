import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { combineResolvers, skip } from 'graphql-resolvers';

const userIsAuthenticated = (parent, args, { me }) => {
    return me ? skip : new Error('Not authenticated');
}

export default {
    Query: {
        me: async (parent, { id }, { prisma, me }) => {
            const user = await prisma.user({ id: me.user.id });
            return user;
        },
        getUser: combineResolvers(
            userIsAuthenticated,
            async (parent, { id }, { prisma }) => {
                const user = await prisma.user({ id });
                return user;
            }
        ),
        signIn: async (parent, { email, password }, { prisma }) => {
            try {
                const user = await prisma.user({ email });
                if (!user) {
                    throw new Error('Invalid credentials');
                }
                const passwordMatch = bcrypt.compareSync(password, user.password);
                if (!passwordMatch) {
                    throw new Error('Invalid credentials');
                }
                const token = jwt.sign({ user }, process.env.JWT_SECRET_KEY, { expiresIn: 36000 });
                return { token };
            } catch (error) {
                throw new Error(error);
            }
        }
    },
    Mutation: {
        signUp: async (parent, req, { prisma }) => {
            try {
                const { phone , password, name } = req
                const hashedPassword = bcrypt.hashSync(password, 8);
                const user = await prisma.createUser({ phone, name, password: hashedPassword });
                const token = jwt.sign({ user }, process.env.JWT_SECRET_KEY, { expiresIn: 36000 });
                return { token };
            } catch (error) {
                throw new Error(error);
            }
        }
    }
}