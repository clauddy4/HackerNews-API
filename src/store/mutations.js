// import Vue from 'vue'

export default {
    APPEND_TOP_STORY: (state, article) => {
        state.topStories.push(article);
    },
    APPEND_NEW_STORY: (state, article) => {
        state.newStories.push(article);
    },
    APPEND_COMMENT: (state, article) => {
        state.newStories.push(article);
    },
};
