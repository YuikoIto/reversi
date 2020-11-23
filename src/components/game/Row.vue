<template>
  <v-layout>
    <Cell
      v-for="cell in row.cells"
      :key="`${cell.x}-${cell.y}`"
      :cell="cell"
    />
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Cell from '@/components/game/Cell.vue';
import { ChangeRow } from '@/models/reversi';
@Component({
  components: {
    Cell
  },
})

export default class Row extends Vue {
  @Prop({required: true})
  public row!: ChangeRow
}
</script>