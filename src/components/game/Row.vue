<template>
  <v-layout>
    <Cell/>
    <Cell/>
    <Cell/>
    <Cell/>
    <Cell/>
    <Cell/>
    <Cell/>
    <Cell/>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Cell from '@/components/game/Cell.vue';
@Component({
  components: {
    Cell
  },
})

export default class Row extends Vue {
}
</script>