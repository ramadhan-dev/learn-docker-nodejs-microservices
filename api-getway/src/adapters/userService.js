import got from "got";

const BASE_URL = "http://user-service:7100";

export default class UserService {
    static async fetchAllUsers() {
        try {
            const body = await got.get(`${BASE_URL}/users`).json();
            return body;
        } catch (error) {
            console.log(error);
        }
    }

    static async register(data) {
        try {
            const body = await got
                .post(`${BASE_URL}/user`, {
                    json: data
                })
                .json();
            return body;
        } catch (error) {
            console.log(error);
        }
    }
}