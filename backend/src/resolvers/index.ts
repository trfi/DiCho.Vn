export * as Query from './Query'
export * as Mutation from './Mutation'
export * as Subscription from './Subscription'
export * as Vote from './Vote'
export * as User from "./User"
export * as Post from "./Post"
export * as Comment from "./Comment"
export * as Like from "./Like"
export * as Message from "./Message"
export * as Chat from "./Chat"
export * as Category from "./Category"

// Union Resolver
export const MessageResult = {
  __resolveType: (obj, context, info) => {
    if(obj.content){
      return 'Message';
    }
    if(obj.senderId){
      return 'Chat';
    }
    return null;
  }
}