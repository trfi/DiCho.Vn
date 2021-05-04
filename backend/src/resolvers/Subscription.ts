import { withFilter } from "apollo-server";


export const newVote = {
  subscribe: (_, __, { pubsub }) => 
   pubsub.asyncIterator('NEW_VOTE'),
  resolve: payload => payload 
}

export const newPost = {
  subscribe: (_, __, { pubsub }) => 
    pubsub.asyncIterator('NEW_POST'),
  resolve: payload => payload
}

export const newComment = {
  subscribe: withFilter(
    (_, __, { pubsub }) => 
      pubsub.asyncIterator('NEW_COMMENT'),
    (payload, variables) => 
      (payload.post.id === variables.postId),
  ),
  resolve: payload =>  payload
}