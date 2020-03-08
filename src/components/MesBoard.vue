<template>
  <div id="m-board">
    <b-card>
      <b-media
          v-for="(v, k) in li"
          :key="k"
      >
        <template v-slot:aside>
          <b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
        </template>
        <h5 class="mt-0">{{ v.title }}</h5>
        <p>{{ v.content }}</p>
      </b-media>
    </b-card>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "MesBoard",
    computed: {
      ...mapGetters('mes', {
        li: 'getMesList'
      })
    }
  }
</script>

<style scoped>
</style>
