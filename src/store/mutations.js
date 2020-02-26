export default {
    APPEND_STORY: (state, articles) => {
        state.stories = articles;
    },

    APPEND_STORY_COMMENT: (state, comments) => {
        state.storyComments = comments;
    },

    APPEND_USERS_COMMENT: (state, comments) => {
        state.usersComments = comments;
    },

    APPEND_USER: (state, user) => {
        state.user = user;
    },
};
