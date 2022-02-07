import Vue from "vue";
import Vuex from "vuex";
import User from "./modules/user";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: User,
  },
  plugins: [createPersistedState()],
});
