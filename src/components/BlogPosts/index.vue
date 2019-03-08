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
    <div v-if="allPosts" class="postsContainer">
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
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
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
  height: 35rem;
  overflow: auto;
}

h1 {
  padding: 1rem;
}
</style>
