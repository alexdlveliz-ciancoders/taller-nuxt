<template>
  <v-row>
    <v-col cols="12">
      <h1>Tabla de sabores</h1>
    </v-col>
    <v-col cols="12">
      <v-data-table
        :headers="headers"
        :items="flavors"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'FlavorsTable',
  props: {
    flavors: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      headers: [
        {
          text: 'Nombre',
          value: 'name'
        },
        {
          text: 'Potencia',
          value: 'potency'
        }
      ]
    }
  }
}
</script>
