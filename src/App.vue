<template>
  <div id="app">
    <Clock />
    <HomeScore />
    <Period />
    <AwayScore />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from './store';
import HomeScore from './components/HomeScore.vue';
import AwayScore from './components/AwayScore.vue';
import Clock from './components/Clock.vue';
import Period from './components/Period.vue';

@Component({
  store,
  components: {
    HomeScore,
    AwayScore,
    Clock,
    Period
  },
})
export default class App extends Vue {}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: #111;
  color: #fefefe;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

@font-face {
  font-family: 'DSEG7ClassicMini';
  src: url('/fonts/DSEG7ClassicMini-Bold.woff2') format('woff2'),
       url('/fonts/DSEG7ClassicMini-Bold.woff') format('woff');
}
.lcd {
  font-family: 'DSEG7ClassicMini', monospace;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
