<template>
  <v-layout>
    <CellView
      v-for="cell in row.columns"
      :key="`${cell.x}-${cell.y}`"
      :cell="cell"
      @put="onPutEvent"
    />
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import CellView from '@/components/game/CellView.vue';
import { Row } from '@/models/reversi';
@Component({
  components: {
    CellView
  },
})

export default class RowView extends Vue {
  @Prop({required: true})
  row!: Row

  @Emit('put')
  put(x: number, y: number) {}

  onPutEvent(x: number, y: number) {
    this.put(x, y);
  }
}
</script>