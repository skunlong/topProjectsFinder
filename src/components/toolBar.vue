<template>
  <v-toolbar dark color="primary">
    <v-toolbar-title class="white--text">
      <v-btn @click="redirectToHome" icon>
        <v-icon medium>home</v-icon>
      </v-btn>Find Trending Github Projects From:
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-text-field
      placeholder="Organization's Name" v-model="org" class="pt-3"></v-text-field>

   <v-btn color="#C0C0C0" @click="searchForData" small>
     <v-icon>search</v-icon>
   </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
      org: ''
    }
  },
  methods: {
    redirectToHome () {
      this.$router.push('/')
    },
    searchForData () {
      this.$router.push('/search/' + this.org)
      this.org = ''
    }
  }
}
</script>

<style>
</style>
