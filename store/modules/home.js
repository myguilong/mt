const state = () => ({
  menu:[],
  hotplace:[],
  })
  const mutations = {
    setMenu(state, val) {
      state.menu = val
    },
    setHotplace(state,val){
      state.hotplace=val
    }
  }
  const actions = {
    setMenu({
      commit
    }, menu) {
      commit('setMenu', menu)
    },
    setHotplace({commit},hotplace){
      commit('setHotplace',hotplace)
    }
  
  
  }
  export default {
    namespaced: true,
    state,
    mutations,
    actions 
  }
  