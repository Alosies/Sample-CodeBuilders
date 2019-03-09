<template>
  <v-card>
    <v-form v-model="valid">
      <!-- ToDo:  form Validation -->
      <v-container>
        <v-layout class="wrapper">

          <v-text-field v-model="category"
                        label="Category"
                        required></v-text-field>

          <v-text-field v-model="title"
                        label="Title"
                        required></v-text-field>

          <v-textarea v-model="description"
                      solo
                      label="Description"
                      required></v-textarea>
          <div class="datePicker">
            <v-date-picker v-model="date"
                           reactive></v-date-picker>
          </div>
          <v-btn dark
                 bottom
                 @click="addEvent"
                 class="my-5"
                 color="primary">
            <v-icon>add</v-icon>
            Add Event
          </v-btn>

        </v-layout>
      </v-container>
    </v-form>
  </v-card>

</template>
<script>
export default {
  data() {
    return {
      category: 'Programming',
      title: 'Code Challenge',
      description:
        'Participate in the code challenege and compete with 100s of coders',
      date: '',
      valid: true
    }
  },
  methods: {
    getMonth(code) {
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
      return months[code-1]
    },
    addEvent() {
      const event = {
        category: this.category,
        title: this.title,
        description: this.description,
        schedule: {
          year: parseInt(this.date.split('-')[0]),
          month: this.getMonth(parseInt(this.date.split('-')[1])),
          date: parseInt(this.date.split('-')[2])
        }
      }
      this.$store.dispatch('addEvent', event)
      console.log(event)
      this.$emit('closeModal')
    }
  }
}
</script>

<style lang="stylus">
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  padding: 2rem;
  grid-gap: 1rem;
}

.datePicker {
  display: grid;
  justify-items: center;
}
</style>

