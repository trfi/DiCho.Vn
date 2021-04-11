import jwt from 'jsonwebtoken';
import { combineResolvers, skip } from 'graphql-resolvers';
const crypto = require('../../libs/crypto')

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
        signIn: async (parent, { phone, password }, { prisma }) => {
            try {
                const user = await prisma.user({ phone });
                if (!user) {
                    throw new Error('Invalid credentials');
                }
                const passwordMatch = crypto.compare(password, user.password, process.env.CRYPTO_SECRET_KEY);
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
        signUp: async (parent, { password, ...data }, { prisma }) => {
            try {
                console.log(data);
                const hashedPassword = crypto.encrypt(password, process.env.CRYPTO_SECRET_KEY);
                const user = await prisma.createUser({ ...data, password: hashedPassword });
                console.log(user);
                const token = jwt.sign({ user }, process.env.JWT_SECRET_KEY, { expiresIn: 36000 });
                return { token };
            } catch (error) {
                throw new Error(error);
            }
        }
    }
}