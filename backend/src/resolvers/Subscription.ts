function newVoteSubscribe(parent, args, { pubsub }, info) {
  return pubsub.asyncIterator('NEW_VOTE')
}

export const newVote = {
  subscribe: newVoteSubscribe,
  resolve: payload => {
    return payload
  }
}

function newPostSubcribe(parent, args, { pubsub }, info) {
  return pubsub.asyncIterator('NEW_POST')
}

export const newPost = {
  subscribe: newPostSubcribe,
  resolve: payload => {
    return payload
  }
}
