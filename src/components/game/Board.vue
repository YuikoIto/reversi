<template>
  <div>
    <Row/>
    <Row/>
    <Row/>
    <Row/>
    <Row/>
    <Row/>
    <Row/>
    <Row/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Row from '@/components/game/Row.vue';
@Component({
  components: {
    Row,
  },
})

export default class Board extends Vue {
}
</script>