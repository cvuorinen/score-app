<template>
  <div id="app"
    v-bind:class="{ editable: $store.state.editable }">
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

      <div class="home-fouls-container">
        <HomeFouls />
      </div>

      <div class="away-fouls-container">
        <AwayFouls />
      </div>

      <div class="buzzer-container">
        <Buzzer />
      </div>

      <div class="edit-toggle-container">
        <EditToggle />
      </div>

      <div class="footer-container">
        <Footer />
      </div>

      <div class="made-by-container">
        <MadeBy />
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
import HomeFouls from './components/HomeFouls.vue';
import AwayFouls from './components/AwayFouls.vue';
import Buzzer from './components/Buzzer.vue';
import Footer from './components/Footer.vue';
import EditToggle from './components/EditToggle.vue';
import MadeBy from './components/MadeBy.vue';

@Component({
  store,
  components: {
    HomeScore,
    AwayScore,
    Clock,
    HomePossession,
    AwayPossession,
    Period,
    HomeFouls,
    AwayFouls,
    Buzzer,
    Footer,
    EditToggle,
    MadeBy,
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
.button {
  visibility: hidden;
  font-size: 1.1rem;
  line-height: 0.7rem;
  padding: 0 0 0 0;
  color: gray;
  border: .08rem solid rgba(155, 155, 155, .8);
  border-radius: 0.1rem;
  background: none;
  outline: none;
  cursor: pointer;
}
.editable .button {
  visibility: visible;
}

/* Layout grid */
.container {
  display: grid;
  grid-template-columns: 30% 40% 30%;
  grid-template-rows: auto;
  grid-template-areas:
    "top-left      top     top-right"
    "left        middle        right"
    "bottom-left bottom bottom-right"
    "footer-left footer footer-right";
}
.clock-container {
  grid-area: middle;
  margin-top: 10%;
}
.home-score-container {
  grid-area: left;
  margin-top: 20%;
}
.away-score-container {
  grid-area: right;
  margin-top: 20%;
}
.middle-container {
  margin-top: 10%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.home-fouls-container {
  grid-area: bottom-left;
}
.away-fouls-container {
  grid-area: bottom-right;
}
.buzzer-container {
  grid-area: bottom;
  margin-top: 10%;
}
.edit-toggle-container {
  grid-area: footer-left;
}

.footer-container {
  grid-area: footer;
}

.made-by-container {
  grid-area: footer-right;
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
