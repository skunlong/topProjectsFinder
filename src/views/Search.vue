<template>
  <TrendingRepo :searchString="org"/>
</template>

<script>

import TrendingRepo from '../components/TrendingRepo'

export default {
  props: ['org'],
  components: {
    TrendingRepo
  }
}
</script>

<style>

</style>
