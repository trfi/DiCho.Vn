import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { combineResolvers, skip } from 'graphql-resolvers';
const crypto = require('../../libs/crypto')

const secretKey = process.env.CRYPTO_SECRET_KEY

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
                const passwordMatch = crypto.compare(password, user.password, secretKey);
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
                const { phone , password } = req;
                const hashedPassword = crypto.encrypt(password, secretKey);
                const user = await prisma.createUser({ phone, password: hashedPassword });
                const token = jwt.sign({ user }, process.env.JWT_SECRET_KEY, { expiresIn: 36000 });
                return { token };
            } catch (error) {
                throw new Error(error);
            }
        }
    }
}