<template>
   <v-container grid-list-md text-xs-center>
    <div v-if="$apollo.loading">
      <v-progress-circular
      :size="70"
      :width="7"
      color="primary"
      indeterminate
    ></v-progress-circular>
   </div>
    <div v-if="search.edges">
      <v-avatar :size="100" class="org-header">
        <img :src="search.edges[0].node.owner.avatarUrl" alt="avatar">
      </v-avatar>
      <h2>Top 10 most starred projects from {{searchString}}</h2>
    </div>
    <div v-if="error">Oops, we couldn't find that organization. Please try to input a different name</div>

   <v-layout row wrap v-else-if="search.edges">
      <v-flex v-for="i in search.edges" :key="i.id">
        <v-card color="#E8E8E8" class="text-xs-left">
          <v-card-title class="cardColor white--text">
            <div style="width:70%" class="pl-5">
              <v-btn text color="secondary" :href="i.node.url" target="_blank">
                <h2 class="white--text text-uppercase">{{i.node.name}}</h2>
              </v-btn>
            </div>
            <span class= "d-inline-block">
              <h3>{{i.node.stargazers.totalCount}} <v-icon>star</v-icon></h3></span>
            <span>
              <h3 class="pl-5">{{i.node.watchers.totalCount}} <v-icon>visibility</v-icon></h3>
            </span>
            <div style="width:90%">
              <span class="text-xs-left">{{i.node.description}}</span>
            </div>
          </v-card-title>
          <v-card-actions class="text-xs-left">
          <a v-bind:href="i.node.owner.url" target="_blank">
            <v-flex v-for="j in i.node.defaultBranchRef.target.history.edges" :key="j.id">
           <a v-bind:href="j.node.url" target="_blank">
                <span class="font-italic font-weight-medium"> Committed {{ j.node.committedDate | moment("from", "now")}} : </span>
                <span class="d-inline text-truncate text-xs-left" style="max-width:90%">
                  {{j.node.messageHeadline}}
                </span>
              </a>
            </v-flex>
            <a v-bind:href="i.node.url" target="_blank">
              <span class="font-italic font-weight-medium">&nbsp;More...</span>
            </a>
          </a>
        </v-card-actions>
        </v-card>
        <v-spacer></v-spacer>
      </v-flex>
      <div v-if="search.edges" style="width:30%" class="d-inline">
        <v-btn text center :href="search.edges[0].node.owner.url" color="primary" target="_blank">See more {{searchString}} projects</v-btn>
      </div>
    </v-layout>
  </v-container>
</template>



<script>
import { TRENDING_REPO_DETAILS_QUERY } from '../queries/trendingRepoDetailsQuery'
export default {
  props: ['searchString'],
  data () {
    return {
      search: [],
      queryString: '',
      error: null
    }
  },
  apollo: {
    search: {
      query: TRENDING_REPO_DETAILS_QUERY,
      variables () {
        return {
          queryString: 'org:' + this.searchString
        }
      },
      error (error) {
        this.error = console.log(JSON.stringify(error.message))
      }
    }
  }
}
</script>

<style>
.cardHeight {
  height: 120px;
}
</style>
