<template>
  <v-layout>
    <Cell
      v-for="cell in row.cells"
      :key="`${cell.x}-${cell.y}`"
      :cell="cell"
      @put="onPutEvent"
    />
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
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

  @Emit('put')
  public put(x: number, y: number) {}

  public onPutEvent(x: number, y: number) {
    this.put(x, y);
  }
}
</script>