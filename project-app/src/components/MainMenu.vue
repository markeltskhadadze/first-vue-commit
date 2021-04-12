<template>
  <div>
    <h1>Welcome</h1>
    <!-- <ul class="nav-menu">
      <li class="nav-menu" v-for="(nav, index) of navs"
    :key="index">
    {{ nav.name }}
      </li>
    </ul> -->
  </div>
</template>

<script>

export default {
  name: 'MainMenu',
  props: ['home', 'news', 'history'],
  data () {
    return {
      navs: [
      { name: 'HOME' },
      { name: 'NEWS' },
      { name: 'HISTORY'}
    ]
   }
  }
}

</script>

<style scoped>
 .nav-menu {
   list-style-type: none;
   display: flex;
   justify-content: center;
 }

 .nav-menu li {
   margin-right: 30px;
 }
</style>