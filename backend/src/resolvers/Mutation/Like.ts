import { objectId } from "../../utils";


export async function like(_, { postId }, { prisma, user }) {
  console.log(user.id);
  const liked = await prisma.like.findUnique({
    where: {
      belongToPostId: postId
    }
  });
  const isLiked = !!liked.likes.find(x => x.userId === user.id);

  // {userId: "0623212132d2ad3123", content: "Bai viet hay lam"}
  // let newLike = null
  // const input = {
  //   id: objectId(),
  //   userId: user.id
  // }
  // console.log(input);

  // newLike = await prisma.like.upsert({
  //   where: {
  //     belongToPostId: postId
  //   },
  //   create: {
  //     id: objectId(),
  //     belongToPost: { connect: { id: postId } },
  //     likes: [input]
  //   },
  //   update: {
  //     likes: {
  //       push: input
  //     }
  //   }
  // });
  // return newLike;
}
