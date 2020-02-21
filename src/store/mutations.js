export default {
    APPEND_STORY: (state, article) => {
        state.stories.push(article);
    },

    APPEND_STORY_COMMENT: (state, comment) => {
        state.storyComments.push(comment);
    },

    APPEND_USERS_COMMENT: (state, comment) => {
        state.usersComments.push(comment);
    },
};
