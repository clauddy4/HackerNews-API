import axios from "axios";

export default {
    FETCH_STORIES: ({ commit }) => {
        axios.get("http://hn.algolia.com/api/v1/search?tags=front_page")
            .then(response => {
                let result = response.data;
                commit("APPEND_STORY", result);
            })
        .catch(err => {
            console.log(err);
        });
    },

    FETCH_STORY_COMMENTS: ({ commit }, id) => {
        axios.get("https://hn.algolia.com/api/v1/search?tags=story_" + id + ",(comment)")
            .then(response => {
                let result = response.data;
                commit("APPEND_STORY_COMMENT", result);
            })
            .catch(err => {
                console.log(err);
            });
    },

    FETCH_USERS_COMMENTS: ({ commit }, id) => {
        axios.get("https://hn.algolia.com/api/v1/search?tags=author_" + id + ",(comment)")
            .then(response => {
                let result = response.data;
                commit("APPEND_USERS_COMMENT", result);
            })
            .catch(err => {
                console.log(err);
            });
    },
};