<template>
  <div>
    <!-- heading -->
    <div class="heading">
      <div style="display: flex">
        <v-icon size="3rem">
          event_available
        </v-icon>
        <h1 class="primary--text">
          Events
        </h1>
      </div>
      <v-btn @click="showModal = true"
             class="addNewEvent"
             color="primary">Add Event</v-btn>
    </div>
    <!-- list of events -->
    <div v-if="allEvents">
      <template v-for="(event, index) in allEvents">
        <v-card :key="index">
          <v-card-title primary-title
                        class="event">
            <div>
              <h3 class="headline mb-0">
                {{ event.title }}
              </h3>
              <div>{{ event.description }}</div>
            </div>
            <div>
              <div class="headline primary--text">
                {{ event.schedule.date}}
              </div>
              <div class="subheading">
                {{ event.schedule.month}}
              </div>
            </div>
          </v-card-title>
        </v-card>
      </template>
    </div>

    <!-- Modal for adding events -->
    <v-dialog v-model="showModal"
              width="600">
      <add-event @closeModal="showModal = false" />
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AddEvent from './ChildComponents/AddEvent'

export default {
  components: {
    AddEvent
  },
  data() {
    return {
      showModal: false
    }
  },
  computed: {
    ...mapGetters(['allEvents'])
  },
  created() {
    this.$store.dispatch('fetchEvents')
  }
}
</script>

<style lang="stylus" scoped>
.heading, .event {
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  justify-content: space-between;
}

// .event {
// display: grid;
// grid-auto-flow: column;
// justify-content: space-between;
// }
h1 {
  padding: 1rem;
}
</style>
