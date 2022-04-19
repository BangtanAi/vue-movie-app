import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state(){
    return{
      movies: [],
      page: 1,
      last_page: 1,
      sort: "popularity.desc",
    }
  },
  actions: {
    async loadAllMovies({state}){
      await axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=dc7f375d88a62637385b4eb0dc3727bd&language=en-US&sort_by=" +
          state.sort +
          `&page=${state.page}`
      )
      .then((resp) => {
        state.movies.push(...resp.data.results);
        state.last_page = resp.data.total_pages;
      });
    },
    async sortByFunc({state}) {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=dc7f375d88a62637385b4eb0dc3727bd&language=en-US&sort_by=" +
          state.sort +
          "&page=1"
      );
      state.movies = data.results;
    },
    loadMoreFilms({state, dispatch}) {
      if (state.page < state.last_page) {
        state.page++;
        dispatch('loadAllMovies');
      }
    },
  },
  modules: {
  }
})
