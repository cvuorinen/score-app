<template>
  <div id="app">
    <div class="container">

      <div class="clock-container">
        <Clock />

        <div class="middle-container">
          <HomePossession />
          <Period />
          <AwayPossession />
        </div>
      </div>

      <div class="home-score-container">
        <HomeScore />
      </div>

      <div class="away-score-container">
        <AwayScore />
      </div>

      <div class="buzzer-container">
        <Buzzer />
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from './store';
import HomeScore from './components/HomeScore.vue';
import AwayScore from './components/AwayScore.vue';
import Clock from './components/Clock.vue';
import HomePossession from './components/HomePossession.vue';
import AwayPossession from './components/AwayPossession.vue';
import Period from './components/Period.vue';
import Buzzer from './components/Buzzer.vue';

@Component({
  store,
  components: {
    HomeScore,
    AwayScore,
    Clock,
    HomePossession,
    AwayPossession,
    Period,
    Buzzer,
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
}
.clickable {
  cursor: pointer;
}

/* Layout grid */
.container {
  display: grid;
  grid-template-columns: 30% 40% 30%;
  grid-template-rows: auto;
  grid-template-areas:
    "left  top   right"
    "left bottom right";
}
.clock-container {
  grid-area: top;
  margin-top: 5%;
}
.home-score-container {
  grid-area: left;
  margin-top: 15%;
}
.away-score-container {
  grid-area: right;
  margin-top: 15%;
}
.middle-container {
  margin-top: 10%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.buzzer-container {
  grid-area: bottom;
}

/* Fixed aspect ratio based on either width or height of the viewport */
.container {
  width: 100vw;
  height: calc(100vw * 9/16);
  font-size: calc(100vw * 9/16);
  margin: 0 auto;

}
@media (min-aspect-ratio: 16/9) {
  .container {
    width: calc(100vh * 16/9);
    height: 100vh;
    font-size: 100vh;
  }
}
/* Use em font sizes to scale them with container */
.container h1 { font-size: .1em; margin: .1em 0; }
.container h2 { font-size: .08em; margin: .1em 0; }
.container h3 { font-size: .07em; margin: .1em 0; }
.container h4 { font-size: .06em; margin: .1em 0; }
.container h5 { font-size: .05em; margin: .1em 0; }

/* 7 segment LCD font */
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

/* Blink effect */
.blink {
    -webkit-animation-name: blinker;
    -webkit-animation-duration: 1s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;

    -moz-animation-name: blinker;
    -moz-animation-duration: 1s;
    -moz-animation-timing-function: linear;
    -moz-animation-iteration-count: infinite;

    animation-name: blinker;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

@-moz-keyframes blinker {
    0% { opacity: 1.0; }
    50% { opacity: 0.0; }
    100% { opacity: 1.0; }
}

@-webkit-keyframes blinker {
    0% { opacity: 1.0; }
    50% { opacity: 0.0; }
    100% { opacity: 1.0; }
}

@keyframes blinker {
    0% { opacity: 1.0; }
    50% { opacity: 0.0; }
    100% { opacity: 1.0; }
}
</style>
