export default {
  async user(info, args, context) {
    console.log(info);
    return await context.db.query.user({
      where: {...args}
    }, info);
  },
  async users(info, args, context) {
    return await context.db.query.users();
  }
}