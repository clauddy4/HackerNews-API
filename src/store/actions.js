import axios from "axios";

export default {
    fetch_top_stories: ({ commit }) => {
        axios.get("https://hacker-news.firebaseio.com/v0/topstories.json")
            .then(resp => {
                let results = resp.data.slice(0, 20);
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
    fetch_new_stories: ({ commit }) => {
        axios.get("https://hacker-news.firebaseio.com/v0/newstories.json")
            .then(resp => {
                let results = resp.data.slice(0, 20);
                results.forEach(element => {
                    axios
                        .get("https://hacker-news.firebaseio.com/v0/item/" + element + ".json"
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
    // FETCH_USER: ({ commit }, { id }) => {
    //     axios
    //         .get("https://hacker-news.firebaseio.com/v0/user.json")
    //         .then(resp => {
    //             let user = resp.data;
    //             user.axios.get("https://hacker-news.firebaseio.com/v0/user/" + id + ".json")
    //                 .then(users => {
    //                     commit("SET_USER", users);
    //                 })
    //                 .catch(err => {
    //                     console.log(err);
    //                 });
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // },

};