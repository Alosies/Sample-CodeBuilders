<template>
  <div class="container">
    <Events />
    <Posts />
  </div>
</template>

<script>
import Events from '../components/Events'
import Posts from '../components/BlogPosts'

export default {
  components: {
    Events,
    Posts
  }
}
</script>

<style lang="stylus" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 2rem;
}
</style>
