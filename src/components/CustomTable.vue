<template>
  <table class="custom-table">
    <thead>
      <tr>
        <th
          v-for="header in headers"
          :key="header.name"
          :width="header.width || 'auto'"
        >
          <slot :name="`header-${header.name}`" :header="header">
            {{ header.title }}
          </slot>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in data" :key="row.id">
        <td v-for="header in headers" :key="header.name">
          <slot :name="`cell-${header.name}`" :value="row[header.name]">
            {{ row[header.name] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "CustomTable",
  props: {
    headers: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
.custom-table {
  width: 100%;
  margin-top: 30px;
  box-shadow: 0 1px 1px rgba(189, 189, 189, 0.12),
    0 2px 2px rgba(189, 189, 189, 0.12), 0 4px 4px rgba(189, 189, 189, 0.12),
    0 8px 8px rgba(189, 189, 189, 0.12), 0 16px 16px rgba(189, 189, 189, 0.12);
  background: white;
  border: none;
  border-collapse: collapse;
  border-radius: 20px;
  overflow: hidden;
}
.custom-table thead {
  background: var(--secondary);
  color: white;
}
.custom-table td,
.custom-table th {
  padding: 10px 25px;
  margin: 0;
  text-align: left;
  border: 1px solid lightgray;
  vertical-align: middle;
}
</style>
