<template>
  <div class="navbar">
    <h2 class="brand">School Manager</h2>
    <ul class="links">
      <li>
        <router-link to="/">
          <i class="material-icons">home</i> Home
        </router-link>
      </li>
      <li>
        <router-link to="/students">
          <i class="material-icons">person</i> Students
        </router-link>
      </li>
      <li>
        <router-link to="/courses">
          <i class="material-icons">school</i> Courses
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AppNavbar"
};
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 80px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  box-shadow: 0 3px 20px 2px rgba(0, 0, 0, 0.144);
}

.brand {
  color: var(--primary);
}

.links {
  margin: 0;
  display: flex;
}
.links li {
  list-style: none;
}
.links li a {
  color: rgba(0, 0, 0, 0.8);
  text-decoration: none !important;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  letter-spacing: 1pt;
  font-size: 0.8rem;
  padding-left: 20px;
  padding-right: 20px;
  height: 80px;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  box-sizing: border-box;
}
.links li a:hover {
  background: rgba(0, 0, 0, 0.02);
}
.links li a.router-link-active {
  color: var(--primary);
  border-bottom-color: var(--primary);
}
.links li a i.material-icons {
  margin-right: 5px;
  font-size: 1.2rem;
}
</style>
