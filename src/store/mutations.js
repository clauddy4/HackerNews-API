// import Vue from 'vue'

export default {
    APPEND_STORY: (state, article) => {
        state.stories.push(article);
    },

    APPEND_COMMENT: (state, comment) => {
        state.comments.push(comment);
    },
};
