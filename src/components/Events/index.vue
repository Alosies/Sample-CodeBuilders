<template>
  <div>
    <!-- heading -->
    <div class="heading">
      <v-icon size="3rem">
        event_available
      </v-icon>
      <h1 class="primary--text">
        Events
      </h1>
    </div>
    <!-- list of events -->
    <div v-if="allEvents">
      <template v-for="(event, index) in allEvents">
        <v-card :key="index">
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">
                {{ event.title }}
              </h3>
              <div>{{ event.description }}</div>
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
    ...mapGetters(['allEvents'])
  },
  created() {
    this.$store.dispatch('fetchEvents')
  }
}
</script>

<style lang="stylus" scoped>
.heading {
  display: flex;
  align-items: center;
}

h1 {
  padding: 1rem;
}
</style>
