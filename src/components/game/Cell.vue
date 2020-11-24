<template>
  <div class="wrapper" @click="click">
    <div class="cell"></div>
    <div class="othello-stone" :class="stoneClass"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { ChangeCell } from '@/models/reversi';
@Component

export default class Cell extends Vue {
  @Prop({required: true})
  //nullを許容する
  cell!: ChangeCell

  //cellの状態に応じて動的にクラス名を変える
  get stoneClass() {
    return {
      'white-stone': this.cell.isWhite,
      'black-stone': this.cell.isBlack
    }
  }

  @Emit('put')
  put(x: number, y: number) {}
  click() {
    this.put(this.cell.x, this.cell.y)
  }
}
</script>

<style scoped>
  .wrapper {
    position: relative;
  }
  .cell {
    height: 64px;
    width: 64px;
    background-color: darkgreen;
    border: 1px solid black;
  }
  .othello-stone {
    position: absolute;
    top: 2px;
    left: 2px;
    height: 60px;
    width: 60px;
    border-radius: 50%;
  }

  .black-stone {
    background-color: black;
  }

  .white-stone {
    background-color: white;
  }
</style>>