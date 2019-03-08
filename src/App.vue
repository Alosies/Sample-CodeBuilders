<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="primary--text">{{ title.first }}</span>
        <span class="font-weight-light">{{ title.last }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      title: {
        first: 'Code',
        last: 'Builders'
      }
    }
  }
}
</script>
