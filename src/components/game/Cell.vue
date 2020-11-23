<template>
  <div class="wrapper">
    <div class="cell"></div>
    <div class="othello-stone"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component

export default class Cell extends Vue {
  @Prop({required: true})
  public ChangeCell
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
    top: 1px;
    left: 1px;
    height: 62px;
    width: 62px;
    border-radius: 50%;
  }

  .black-stone {
    background-color: white;
  }

  .white-stone {
    background-color: black;
  }
</style>>