<template>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

:root {
  --primary: #e54685;
  --secondary: #0081cc;
}

body {
  margin: 0;
  width: 100%;
  min-height: 100vh;
  background: #fafafa;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
}

div {
  box-sizing: border-box;
}
</style>
