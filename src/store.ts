import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

export enum Possessions {
  None,
  Home = 'home',
  Away = 'away',
}

export type State = {
  score: {
    home: number;
    away: number;
  },
  fouls: {
    home: number;
    away: number;
  },
  period: number;
  possession: Possessions;
  clock: {
    time: number;
    running: boolean;
  }
}

// TODO ablity to configure time & max fouls
const defaultState: State = {
  score: {
    home: 0,
    away: 0
  },
  fouls: {
    home: 0,
    away: 0
  },
  period: 1,
  possession: Possessions.None,
  clock: {
    time: 10*60,
    running: false
  }
}

let intervalID: any;

const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage
})

// load audio so it's ready when needed
const audio = new Audio('/buzzer.mp3');

export default new Vuex.Store<State>({
  plugins: [vuexLocal.plugin],
  state: defaultState,
  getters: {
    minutes: state => Math.floor(state.clock.time / 60),
    seconds: state => state.clock.time % 60
  },
  mutations: {
    incrementHome: (state) => state.score.home++,
    decrementHome: (state) => state.score.home && state.score.home--,
    incrementAway: (state) => state.score.away++,
    decrementAway: (state) => state.score.away && state.score.away--,
    incrementHomeFouls: (state) => state.fouls.home++,
    decrementHomeFouls: (state) => state.fouls.home && state.fouls.home--,
    incrementAwayFouls: (state) => state.fouls.away++,
    decrementAwayFouls: (state) => state.fouls.away && state.fouls.away--,
    incrementPeriod: (state) => state.period++,
    decrementPeriod: (state) => state.period && state.period--,
    setClock: (state, running: boolean) => state.clock.running = running,
    setTime: (state, time: number) => state.clock.time = time,
    setPossession: (state, value: Possessions) => state.possession = value,
  },
  actions: {
    startClock ({ commit, dispatch }) {
      commit('setClock', true)

      intervalID = setInterval(() => dispatch('updateClock', -1), 1000)
    },
    stopClock ({ commit }) {
      commit('setClock', false)

      clearInterval(intervalID)
    },
    toggleClock ({ state, dispatch }) {
      if (state.clock.running) {
        dispatch('stopClock')
      } else {
        dispatch('startClock')
      }
    },
    updateClock ({ state, commit, dispatch }, amount: number) {
      const time = state.clock.time + amount;

      if (time < 0) {
        commit('setTime', 0)
        dispatch('playBuzzer')
        return dispatch('stopClock')
      }

      commit('setTime', time)
    },
    playBuzzer() {
      audio.play();
    }
  }
})
