<template>
  <div class="students-view">
    <app-navbar></app-navbar>
    <app-container>
      <h1 class="title">Students</h1>
      <custom-filters @change="handleFilter" />
      <custom-table :headers="headers" :data="studentList">
        <template v-slot:cell-status="{ value }">
          <span :class="value ? 'active' : 'inactive'">
            {{ value ? "Active" : "Inactive" }}
          </span>
        </template>
      </custom-table>
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
import students from "@/data/students.json";

export default {
  name: "Students",
  components: {
    AppContainer,
    AppNavbar,
    CustomFilters,
    CustomTable
  },
  setup() {
    // call hooks
    const { getters, dispatch } = useStore();
    const { filteredData, handleFilter } = useFilter(students, "name");

    // define local component data
    const headers = ref([
      { name: "id", title: "ID", width: "5%" },
      { name: "name", title: "Name" },
      { name: "file", title: "File", width: "10%" },
      { name: "status", title: "Status", width: "10%" }
    ]);

    // saving and getting from the store
    dispatch("students/setStudents", filteredData);
    const studentList = computed(() => getters["students/students"]);

    // expose to the template the necesary data and functions
    return {
      headers,
      studentList,
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
