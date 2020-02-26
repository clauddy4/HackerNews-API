import axios from "axios";

export default {
    FETCH_STORIES: ({ commit }) => {
        axios.get("http://hn.algolia.com/api/v1/search?tags=front_page")
            .then(response => {
                let result = response.data.hits;
                commit("APPEND_STORY", result);
            })
        .catch(err => {
            console.log(err);
        });
    },

    FETCH_COMMENTS: ({ commit }, {id, tag}) => {
        axios.get("https://hn.algolia.com/api/v1/search?tags=" + tag + "_" + id + ",(comment)")
            .then(response => {
                let result = response.data.hits;
                commit("APPEND_COMMENT", result);
            })
            .catch(err => {
                console.log(err);
            });
    },

    FETCH_USER: ({ commit }, id) => {
        axios.get("http://hn.algolia.com/api/v1/users/" + id )
            .then(response => {
                let result = response.data;
                commit("APPEND_USER", result);
            })
            .catch(err => {
                console.log(err);
            });
    },
};