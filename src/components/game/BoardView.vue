<template>
  <div>
    <RowView
      v-for="row in board.rows"
      :key="row.number"
      :row="row"
      @put="onPutEvent"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import RowView from '@/components/game/RowView.vue';
import { Board, Point } from '@/models/reversi';
@Component({
  components: {
    RowView,
  },
})

export default class BoardView extends Vue {
  @Prop({required: true})
  //nullを許容する
  board!: Board;

  onPutEvent(p: Point) {
    this.board.put(p)
  }
}
</script>