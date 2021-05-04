export const state = () => ({
  list: [],
})

export const mutations = {
  add(state, text) {
    state.list.push(text)
  },
  clear(state) {
    state.list.clear()
  },
  remove(state, todo) {
    state.list = state.list.filter((item) => item.id !== todo.id)
  },
  toggle(_, todo) {
    todo.done = !todo.done
  },
}
