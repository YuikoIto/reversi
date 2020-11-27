<template>
  <v-container>
    <v-layout justify-center>
      <BoardView
        :board="board"
      />
    </v-layout>
    <v-layout justify-center>
      <h2>{{ currentUser }}</h2>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import BoardView from '@/components/game/BoardView.vue';
import { Board, CellState } from '@/models/reversi';
@Component({
  components: {
    BoardView,
  },
})

export default class Game extends Vue {
  board: Board = new Board();
  
  get currentUser() {
    if (this.board.turn === CellState.Black) {
      return "黒のターンです"
    } 
    if (this.board.turn === CellState.White)  {
      return "白のターンです"
    }
  }
}
</script>