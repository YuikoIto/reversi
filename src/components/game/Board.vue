<template>
  <div>
    <Row
      v-for="row in board.rows"
      :key="row.number"
      :row="row"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Row from '@/components/game/Row.vue';
import { ChangeBoard } from '@/models/reversi';
@Component({
  components: {
    Row,
  },
})

export default class Board extends Vue {
  @Prop({required: true})
  public board!: ChangeBoard;
}
</script>