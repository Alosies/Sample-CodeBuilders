<template>
  <div>
    <!-- heading -->
    <div class="heading">
      <v-icon size="3rem">
        ballot
      </v-icon>
      <h1 class="primary--text">
        Blog Posts
      </h1>
    </div>
    <!-- list of events -->
    <v-card v-if="allPosts"
            class="postsContainer">
      <template v-for="(post, index) in allPosts">
        <v-card :key="index">
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">
                {{ post.title }}
              </h3>
              <div>{{ post.body }}</div>
            </div>
          </v-card-title>
        </v-card>
      </template>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  // data() {
  //   return {
  //     allPosts: []
  //   }
  // },
  computed: {
    ...mapGetters(['allPosts'])
  },
  created() {
    this.$store.dispatch('fetchPosts')
  }
}
</script>

<style lang="stylus" scoped>
.heading {
  display: flex;
  align-items: center;
}

.postsContainer {
  height: 575px;
  overflow: auto;
}

h1 {
  padding: 1rem;
}
</style>
