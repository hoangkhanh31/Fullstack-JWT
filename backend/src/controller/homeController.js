import userService from "../service/userService";

const handle = (req, res) => {
    return res.render("home.ejs");
};

const handleUserPage = async (req, res) => {
    let userList = await userService.getUserList();

    return res.render("user.ejs", { users: userList });
};

const handleCreateNewUser = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    await userService.createNewUser(email, password, username);
    return res.redirect("/users");
};

const handleDeleteUser = async (req, res) => {
    let id = req.params.id;
    await userService.deleteUser(id);
    return res.redirect("/users");
};

const getUpdateUserPage = async (req, res) => {
    let id = req.params.id;
    let user = await userService.getUserById(id);
    let userData = {};
    if (user && user.length > 0) {
        userData = user[0];
    }
    return res.render("user-update.ejs", { user: userData });
};

const handleUpdateUser = async (req, res) => {
    let id = req.params.id;
    let email = req.body.email;
    let username = req.body.username;

    await userService.updateUser(id, email, username);
    return res.redirect("/users");
};

module.exports = {
    handle,
    handleUserPage,
    handleCreateNewUser,
    handleDeleteUser,
    getUpdateUserPage,
    handleUpdateUser,
};
