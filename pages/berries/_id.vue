<template>
  <v-container>
    <v-progress-circular v-if="loader" indeterminate />
    <div v-else-if="berry">
      <h1 class="mb-3">
        Detalle de la mora
      </h1>
      <v-row>
        <v-col cols="4">
          <h3>Nombre</h3>
          <p>{{ berry.name }}</p>
        </v-col>
        <v-col cols="4">
          <h3>Firmeza</h3>
          <p>{{ berry.firmness.name }}</p>
        </v-col>
        <v-col cols="4">
          <h3>Tamaño</h3>
          <p>{{ berry.size }}</p>
        </v-col>
        <v-col cols="4">
          <h3>Regalo</h3>
          <p>{{ berry.natural_gift_type.name }}</p>
        </v-col>
        <v-col cols="4">
          <h3>Tiempo de crecimiento</h3>
          <p>{{ berry.growth_time }}</p>
        </v-col>
      </v-row>
      <FlavorsTable :flavors="berry.flavors" />
    </div>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import FlavorsTable from '@/components/FlavorsTable.vue'

export default {
  name: 'BerryDetailPage',
  components: {
    FlavorsTable
  },
  computed: {
    ...mapState('pokemon', {
      berry: state => state.berry,
      loader: state => state.loader
    })
  },
  created () {
    this.fetchBerry(this.$route.params.id)
  },
  methods: {
    ...mapActions('pokemon', ['fetchBerry'])
  }
}
</script>
