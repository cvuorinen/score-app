import { defineStore } from "pinia";
import { ref, computed } from "vue";

export enum Possessions {
  None,
  Home = "home",
  Away = "away",
}

export type State = {
  score: {
    home: number;
    away: number;
  };
  fouls: {
    home: number;
    away: number;
  };
  period: number;
  possession: Possessions;
  clock: {
    time: number;
    running: boolean;
  };
  editable: boolean;
};

// load audio so it's ready when needed
const audio = new Audio("/buzzer.mp3");

const DEFAULT_TIME = 10 * 60; // 10 minutes in seconds

let intervalID: any;

export const useScoreStore = defineStore(
  "score",
  () => {
    // Default state
    // TODO ablity to configure time & max fouls
    const score = ref({
      home: 0,
      away: 0,
    });

    const fouls = ref({
      home: 0,
      away: 0,
    });

    const period = ref(1);
    const possession = ref(Possessions.None);
    const clock = ref({
      time: DEFAULT_TIME,
      running: false,
    });
    const editable = ref(false);

    // Getters
    const minutes = computed(() => Math.floor(clock.value.time / 60));
    const seconds = computed(() => clock.value.time % 60);

    // Actions - Score
    function incrementHome() {
      score.value.home++;
    }

    function decrementHome() {
      if (score.value.home > 0) {
        score.value.home--;
      }
    }

    function incrementAway() {
      score.value.away++;
    }

    function decrementAway() {
      if (score.value.away > 0) {
        score.value.away--;
      }
    }

    // Actions - Fouls
    function incrementHomeFouls() {
      fouls.value.home++;
    }

    function decrementHomeFouls() {
      if (fouls.value.home > 0) {
        fouls.value.home--;
      }
    }

    function incrementAwayFouls() {
      fouls.value.away++;
    }

    function decrementAwayFouls() {
      if (fouls.value.away > 0) {
        fouls.value.away--;
      }
    }

    // Actions - Period
    function incrementPeriod() {
      period.value++;
    }

    function decrementPeriod() {
      if (period.value > 0) {
        period.value--;
      }
    }

    // Actions - Clock
    function setClock(running: boolean) {
      clock.value.running = running;
    }

    function setTime(time: number) {
      clock.value.time = time;
    }

    function startClock() {
      setClock(true);
      intervalID = setInterval(() => updateClock(-1), 1000);
    }

    function stopClock() {
      setClock(false);
      clearInterval(intervalID);
    }

    function toggleClock() {
      if (clock.value.running) {
        stopClock();
      } else {
        startClock();
      }
    }

    function updateClock(amount: number) {
      const time = clock.value.time + amount;

      if (time < 0) {
        setTime(0);
        playBuzzer();
        stopClock();
        return;
      }

      setTime(time);
    }

    function incrementClock() {
      const time = minutes.value + 1;
      setTime(time * 60);
    }

    function decrementClock() {
      const time = minutes.value - 1;
      setTime(time * 60);
    }

    function resetClock() {
      stopClock();
      setTime(DEFAULT_TIME);
    }

    // Actions - Other
    function setPossession(value: Possessions) {
      possession.value = value;
    }

    function toggleEditable() {
      editable.value = !editable.value;
    }

    function playBuzzer() {
      // Using cloneNode to overcome issue on iOS only playing the sound once
      (audio.cloneNode() as HTMLAudioElement).play();
    }

    return {
      // State
      score,
      fouls,
      period,
      possession,
      clock,
      editable,
      // Getters
      minutes,
      seconds,
      // Actions
      incrementHome,
      decrementHome,
      incrementAway,
      decrementAway,
      incrementHomeFouls,
      decrementHomeFouls,
      incrementAwayFouls,
      decrementAwayFouls,
      incrementPeriod,
      decrementPeriod,
      setClock,
      setTime,
      startClock,
      stopClock,
      toggleClock,
      updateClock,
      incrementClock,
      decrementClock,
      resetClock,
      setPossession,
      toggleEditable,
      playBuzzer,
    };
  },
  {
    persist: {
      storage: sessionStorage,
    },
  }
);
