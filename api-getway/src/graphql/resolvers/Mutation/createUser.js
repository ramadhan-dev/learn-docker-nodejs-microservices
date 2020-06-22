import userService from "#root/adapters/userService";

const createUserResolver = async(obj, { email, first_name, username, password }) => {
    const data = {
        email: email,
        first_name: first_name,
        username: username,
        password: password
    };
    return await userService.register(data);
}

export default createUserResolver;