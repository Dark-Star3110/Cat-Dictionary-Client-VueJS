import axios from "axios";
import { createStore } from "vuex";

const catApi = "http://localhost:8000";

export const store = createStore({
    state: {
        user: undefined,
    },
    actions: {
        async getUser(context) {
            try {
                const res = await axios.get(catApi + "/user", {
                    withCredentials: true,
                });
                if (res.data.success) {
                    context.commit("SET_USER", res.data.data);
                } else {
                    console.log(res.data);
                }
            } catch (error) {
                console.log(error);
            }
        },
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        },
    },
});
