export default {
    APPEND_STORY: (state, articles) => {
        state.stories = articles;
    },

    APPEND_STORY_COMMENT: (state, comments) => {
        state.storyComments = comments;
    },

    APPEND_USERS_COMMENT: (state, comment) => {
        state.usersComments.push(comment);
    },
};
