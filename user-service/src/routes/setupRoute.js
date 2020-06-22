import { Users } from "#root/db/models/user";
import { registerController } from "#root/Controllers/user";
const setupRoute = (app) => {
    app.get('/users', async(req, res, next) => {
        const data = await Users.findAll();
        return res.json(data);
    })

    app.post("/user", registerController);

    app.post("/session", async(req, res, next) => {
        const form = req.body;
        if (!form.password || !form.username) {
            return next(new Error("invalid form"));
        }

        try {
            // get data by username
            const user = await Users.findOne({
                attributes: {},
                where: {
                    username: form.username
                }
            });

            if (!user) {
                return next(new Error("invalid credential"));
            }



            // compare password

            return res.json(user);
        } catch (error) {
            return next(error)
        }
        // save session user
    });
}

export default setupRoute