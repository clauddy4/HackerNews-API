import axios from "axios";

export default {
    FETCH_TOP_STORIES: ({ commit }) => {
        axios.get("https://hacker-news.firebaseio.com/v0/topstories.json")
            .then(resp => {
                let results = resp.data;
                results.forEach(element => {
                    axios.get(
                            "https://hacker-news.firebaseio.com/v0/item/" + element + ".json"
                        )
                        .then(result => {
                            commit("APPEND_TOP_STORY", result);
                        })
                        .catch(err => {
                            console.log(err);
                        });
                });
            })
            .catch(err => {
                console.log(err);
            });
    },
    FETCH_NEW_STORIES: ({ commit }) => {
        axios.get("https://hacker-news.firebaseio.com/v0/newstories.json")
            .then(resp => {
                let results = resp.data.slice(1, 100);
                results.forEach(element => {
                    axios.get(
                        "https://hacker-news.firebaseio.com/v0/item/" + element + ".json"
                        )
                        .then(result => {
                            commit("APPEND_NEW_STORY", result);
                        })
                        .catch(err => {
                            console.log(err);
                        });
                });
            })
            .catch(err => {
                console.log(err);
            });
    },
};