import userService from "#root/adapters/userService";
const UserResolver = async() => {
    return await userService.fetchAllUsers();
}
export default UserResolver;