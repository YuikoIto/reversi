<template>
  <v-container>
    <v-layout justify-center>
      <Board
        :board="board"
      />
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Board from '@/components/game/Board.vue';
import { ChangeBoard } from '@/models/reversi';
@Component({
  components: {
    Board,
  },
})

export default class Game extends Vue {
  public board: ChangeBoard = new ChangeBoard();
}
</script>