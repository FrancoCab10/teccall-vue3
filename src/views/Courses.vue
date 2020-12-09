<template>
  <div class="courses-view">
    <app-navbar></app-navbar>
    <app-container>
      <h1 class="title">Courses</h1>
      <custom-filters @change="handleFilter" />
      <custom-table :headers="headers" :data="courseList">
        <template v-slot:cell-status="{ value }">
          <span :class="value ? 'active' : 'inactive'">
            {{ value ? "Active" : "Inactive" }}
          </span>
        </template>
      </custom-table>

      <input :type="text" />
    </app-container>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import AppContainer from "@/components/AppContainer.vue";
import AppNavbar from "@/components/AppNavbar.vue";
import CustomFilters from "@/components/CustomFilters.vue";
import CustomTable from "@/components/CustomTable.vue";
import useFilter from "@/hooks/useFilter";
import courses from "@/data/courses.json";

export default {
  name: "Courses",
  components: {
    AppContainer,
    AppNavbar,
    CustomFilters,
    CustomTable
  },
  setup() {
    // call hooks
    const { getters, dispatch } = useStore();
    const { filteredData, handleFilter } = useFilter(courses, "course");

    // define local component data
    const headers = ref([
      { name: "id", title: "ID", width: "5%" },
      { name: "course", title: "Course" },
      { name: "description", title: "Description" },
      { name: "status", title: "Status", width: "10%" }
    ]);

    // saving and getting from the store
    dispatch("courses/setCourses", filteredData);
    const courseList = computed(() => getters["courses/courses"]);

    // expose to the template the necesary data and functions
    return {
      headers,
      courseList,
      handleFilter
    };
  }
};
</script>

<style scoped>
.title {
  color: var(--secondary);
  text-align: left;
}
span.active {
  color: green;
}
span.inactive {
  color: red;
}
</style>
