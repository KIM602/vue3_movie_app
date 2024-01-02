import axios from 'axios'

export default {
    // module!
    namespaced: true,
    // data!
    state: () => ({
        movies: [],
        message: '',
        loading: false
    }),
    // computed!
    getters: {},
    // methods!
    // 변이
    mutations: {
        updateState(state, payload) {
            // ['movies', 'message', 'loading']
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        },
        resetMovies(state) {
            state.movies = []
        }
    },
    // 비동기
    actions: {
        async searchMovies({ commit }, payload) {
            const { title, type, number, year } = payload
            const OMDB_API_KEY = '9a95f3a2'

            const res = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
            const { Search, totalResults } = res.data
            console.log(res.data)
            commit('updateState', {
                movies: Search,
                message: 'Hello world!',
                loading: true
            })
        }
    }
}