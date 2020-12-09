import { ref } from "vue";

const useFilter = (data, filterField) => {
  let filteredData = ref([]);

  const handleFilter = ({ sortBy, filter }) => {
    filteredData.value = data
      .filter(row =>
        row[filterField].toLowerCase().includes(filter.toLowerCase())
      )
      .sort((a, b) => {
        const sortVal = a.id > b.id ? -1 : a.id < b.id ? 1 : 0;
        return sortBy === "asc" ? sortVal * -1 : sortVal;
      });
  };

  return {
    filteredData,
    handleFilter
  };
};

export default useFilter;
