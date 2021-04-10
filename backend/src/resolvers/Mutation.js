export default {
  async createUser(info, args, context) {
    return await context.db.mutation.createUser({
      data: {...args} // destructure argument
    }, info);
  }
}