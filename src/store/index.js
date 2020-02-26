import Vuex from "vuex";
import Vue from "vue";
import actions from "./actions.js";
import mutations from "./mutations.js";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        stories: [],
        storyComments: [],
        usersComments: [],
        user: [/* [id: string]: User */],
        searchResults: {/* [id: string]: Item */},
    },
    mutations,
    actions,
});