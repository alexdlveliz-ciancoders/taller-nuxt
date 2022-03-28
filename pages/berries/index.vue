<template>
  <v-container>
    <v-progress-circular v-if="loader" indeterminate />
    <div v-else>
      <h1>Lista de Moras</h1>
      <v-data-table
        :headers="headers"
        :items="berries"
      >
        <template #[`item.id`]="{ item }">
          <NuxtLink
            :to="{
              name: 'berries-id',
              params: {id: item.id}
            }"
            style="text-decoration: none;"
          >
            <v-icon :key="item.id">
              mdi-eye
            </v-icon>
          </NuxtLink>
        </template>
      </v-data-table>
    </div>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'BerriesPage',
  data () {
    return {
      headers: [
        {
          text: 'Nombre',
          align: 'start',
          value: 'name'
        },
        {
          text: 'Acciones',
          align: 'center',
          value: 'id'
        }
      ]
    }
  },
  computed: {
    ...mapState('pokemon', {
      loader: state => state.loader,
      berries: state => state.data
    })
  },
  mounted () {
    this.fetchBerries()
  },
  methods: {
    ...mapActions('pokemon', ['fetchBerries'])
  }
}
</script>
