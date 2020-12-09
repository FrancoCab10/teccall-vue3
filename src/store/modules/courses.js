export default {
  namespaced: true,
  state: {
    courses: []
  },
  getters: {
    courses: ({ courses }) => courses
  },
  mutations: {
    SET_COURSES: (state, courses) => (state.courses = courses)
  },
  actions: {
    setCourses: ({ commit }, courses) => commit("SET_COURSES", courses)
  }
};
