<template>
  <v-container>
    <v-layout justify-center>
      <BoardView
        :board="board"
      />
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import BoardView from '@/components/game/BoardView.vue';
import { Board } from '@/models/reversi';
@Component({
  components: {
    BoardView,
  },
})

export default class Game extends Vue {
  board: Board = new Board();
}
</script>