<template>
  <router-link class="card" :to="link">
    <img v-if="image" :src="image" :alt="text" />
    <span v-if="text">{{ text }}</span>
  </router-link>
</template>

<script>
export default {
  name: "CustomCard",
  props: {
    image: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    link: {
      type: String,
      default: "#"
    }
  }
};
</script>

<style scoped>
.card {
  box-sizing: border-box;
  width: 21rem;
  padding: 1rem;
  margin: 1rem;
  border-radius: 0.5rem;
  background: white;
  transition: all 0.3s ease;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  border: 2px solid white;
  filter: grayscale(1);
  text-decoration: none !important;
  text-align: center;
}

.card:hover {
  box-shadow: 0 7px 16px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  border: 2px solid var(--primary);
  filter: grayscale(0);
}

.card img {
  width: 100%;
}

.card span {
  display: block;
  padding: 0.5rem;
  border-radius: 10px;
  background: var(--primary);
  font-weight: bold;
  letter-spacing: 1.5pt;
  text-transform: uppercase;
  color: white;
}
</style>
