<template>
  <select
    class="input-select"
    :name="name"
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
  >
    <option v-for="{ label, value } in options" :key="value" :value="value">
      {{ label }}
    </option>
  </select>
</template>

<script>
export default {
  name: "InputSelect",
  props: {
    name: {
      type: String,
      default: ""
    },
    modelValue: {
      type: String,
      default: ""
    },
    options: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
.input-select {
  padding: 8px;
  width: 100%;
  background: rgb(248, 248, 248);
  border: 2px solid lightgray;
  border-radius: 4px;
  outline: none !important;
  margin: 2px 10px;
}
.input-select:focus {
  border-color: var(--secondary);
}
</style>
