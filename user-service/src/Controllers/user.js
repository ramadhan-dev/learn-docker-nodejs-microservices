import { Users } from "#root/db/models/user";
import generateUUID from "#root/helpers/generateUUID";
import hashPassword from "#root/helpers/hashPassword";

exports.registerController = async(req, res, next) => {
    const form = req.body;
    if (!form.email || !form.username) {
        return next(new Error("invalid form"));
    }
    try {
        const user = await Users.create({
            id: generateUUID(),
            email: form.email,
            password: hashPassword(form.password),
            username: form.username,
            first_name: form.first_name
        });
        return res.json(user);
    } catch (error) {
        console.log(error);

        return next(error);
    }
}