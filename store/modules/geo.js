const state = () => ({
  position:''
})
const mutations = {
  setPosition(state, val) {
   
    state.position =val
  }
}
const actions = {
//   commitPosition({
//     commit
//   }, position) {
//     commit('setPosition', position)
//   },
commitPosition: ({
    commit
  }, position) => {
    commit('setPosition', position)
  }


}
export default {
  namespaced: true,
  state,
  mutations,
  actions 
}
