import Vuex from "vuex";
import Vue from "vue";
import actions from "./actions.js";
import mutations from "./mutations.js";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        comments: [],
        user: [/* [id: string]: User */],
        results: {/* [id: string]: Item */},
    },
    mutations,
    actions,
});