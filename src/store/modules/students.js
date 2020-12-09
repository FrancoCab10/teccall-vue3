export default {
  namespaced: true,
  state: {
    students: []
  },
  getters: {
    students: ({ students }) => students
  },
  mutations: {
    SET_STUDENTS: (state, students) => (state.students = students)
  },
  actions: {
    setStudents: ({ commit }, students) => commit("SET_STUDENTS", students)
  }
};
