<template>
  <div id="app">
    <header>
      <MainMenu />
    </header>
    <main class="main-container">
      <v-if >
        <router-link to="/" class="nav-menu">Home</router-link>
      </v-if>
      <router-link to="/news" class="nav-menu">News</router-link>
      <router-link to="/history" class="nav-menu">History</router-link>
      <router-view></router-view>
    </main>
    <footer>
      <p>About Us</p>
    </footer>
  </div>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue'

export default {
  name: 'App',
  components: {
    MainMenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main-container {
 min-height: 300px;
 margin-top: 10px;
}

a {
  margin-left: 20px;
}

.links {
  pointer-events: none;
}

header {
  background: #d8fdce;
  min-height: 100px; 
  display: flex;
  justify-content: center;
  align-items: center; 
}

footer {
  background: #bdbdbd;
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center; 
}
</style>
