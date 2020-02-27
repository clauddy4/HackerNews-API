export default {
    APPEND_STORY: (state, articles) => {
        state.results = articles;
    },

    APPEND_COMMENT: (state, comments) => {
        state.comments = comments;
    },

    APPEND_USER: (state, user) => {
        state.user = user;
    },

    APPEND_SEARCH_RESULTS: (state, results) => {
        state.results = results;
    },
};
