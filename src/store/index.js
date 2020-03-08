import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex);

import {mesStore} from "@/store/modules/mes_store";

export const store = new Vuex.Store({
  modules: {
    mes: mesStore
  }
});
