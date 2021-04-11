function newVoteSubscribe(parent, args, { pubsub }, info) {
  return pubsub.asyncIterator('NEW_VOTE')
}

const newVote = {
  subscribe: newVoteSubscribe,
  resolve: payload => {
    return payload
  }
}

function newPostSubcribe(parent, args, { pubsub }, info) {
  return pubsub.asyncIterator('NEW_POST')
}

const newPost = {
  subscribe: newPostSubcribe,
  resolve: payload => {
    return payload
  }
}

module.exports = {
  newVote,
  newPost
}