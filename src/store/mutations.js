// import Vue from 'vue'

export default {
    APPEND_TOP_STORY: (state, article) => {
        state.topStories.push(article);
    },
    APPEND_NEW_STORY: (state, article) => {
        state.newStories.push(article);
    },
    // SET_USER: (state, { id, user }) => {
    //     Vue.set(state.users, id, user || false) /* false means user not found */
    // }
};