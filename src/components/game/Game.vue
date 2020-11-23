<template>
  <v-container>
    <v-layout justify-center>
      <Board/>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Board from '@/components/game/Board.vue';
@Component({
  components: {
    Board,
  },
})

export default class Game extends Vue {
  
}
</script>