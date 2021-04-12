<template>
<div>
    <h2 class="link">News</h2>
    <div class="news-container">
        <div>
        <p>News №1</p>
    </div>
    <div>
        <p>News №2</p>
    </div>
    <div>
        <p>News №3</p>
    </div>
    </div>
</div>
</template>

<script>
export default {
   name: 'NewsViews'
}
</script>

<style scoped>
.news-container div {
    border: 1px solid #000000;
    border-radius: 5px;
    margin: 60px 150px;
}

.link {
  opacity: 0;
  transition: opacity .5s;
}
</style>