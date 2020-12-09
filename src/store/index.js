import { createStore } from "vuex";
import courses from "./modules/courses";
import students from "./modules/students";

export default createStore({
  modules: {
    courses,
    students
  }
});
