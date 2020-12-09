<template>
  <teleport to="body">
    <app-banner />
  </teleport>
  <!-- eslint-disable-next-line -->
  <div class="container">
    <h1>
      Welcome to <br />
      <span>School Manager</span>
    </h1>
    <nav class="nav-container">
      <custom-card
        v-for="page in pages"
        :key="page.link"
        :image="page.image"
        :link="page.link"
        :text="page.text"
      />
    </nav>
  </div>
</template>

<script>
import { ref } from "vue";
import AppBanner from "../components/AppBanner.vue";
import CustomCard from "../components/CustomCard.vue";

export default {
  name: "Home",
  components: { AppBanner, CustomCard },
  setup() {
    const pages = ref([
      {
        image: "/assets/students.svg",
        link: "/students",
        text: "Students"
      },
      {
        image: "/assets/courses.svg",
        link: "/courses",
        text: "Courses"
      }
    ]);

    return { pages };
  }
};
</script>

<style scoped>
.container {
  background: #fef7ff;
  width: 70%;
  height: 100vh;
  padding-left: 4rem;
  padding-right: calc(20% + 4rem);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

h1 {
  margin-top: 0;
  margin-bottom: 2rem;
}

h1 span {
  color: var(--primary);
  font-size: 3.5rem;
  font-weight: 200;
}

.nav-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
