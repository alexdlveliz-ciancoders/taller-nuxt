const SET_LOADER = 'SET_LOADER'
const SET_BERRIES = 'SET_BERRIES'
const SET_BERRY = 'SET_BERRY'

export const state = () => ({
  loader: false,
  data: [],
  berry: {}
})

export const mutations = {
  SET_LOADER (state, value) {
    state.loader = value
  },
  SET_BERRIES (state, berries) {
    state.data = berries
  },
  SET_BERRY (state, berry) {
    state.berry = berry
  }
}

export const actions = {
  setLoader ({ commit }, value) {
    commit(SET_LOADER, value)
  },
  fetchBerries ({ commit }) {
    commit(SET_LOADER, true)
    this.$axios.get('berry', {
      params: {
        limit: 100
      }
    })
      .then(response => {
        const data = response.data.results.map(berry => {
          const newBerry = berry
          newBerry.id = berry.url.slice(32, berry.url.length - 1)
          return newBerry
        })
        commit(SET_BERRIES, data)
      })
      .finally(() => commit(SET_LOADER, false))
  },
  fetchBerry ({ commit }, id) {
    commit(SET_LOADER, true)
    this.$axios.get(`berry/${id}`)
      .then(response => {
        const berry = response.data
        berry.flavors = response.data.flavors.map(flavor => ({
          name: flavor.flavor.name,
          potency: flavor.potency
        }))
        commit(SET_BERRY, berry)
      })
      .finally(() => commit(SET_LOADER, false))
  }
}
