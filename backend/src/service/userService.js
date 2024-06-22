import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import db from "../models/index";

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (password) => {
    let hashPassword = bcrypt.hashSync(password, salt);
    return hashPassword;
};

const createNewUser = async (email, password, username) => {
    let hashPassword = hashUserPassword(password);

    try {
        await db.User.create({
            email: email,
            username: username,
            password: hashPassword,
        });
    } catch (err) {
        console.log(err);
    }
};

const getUserList = async () => {
    let users = [];
    users = await db.User.findAll();
    return users;
};

const deleteUser = async (id) => {
    await db.User.destroy({
        where: {
            id: id,
        },
    });
};

const getUserById = async (id) => {
    let user = {};
    user = await db.User.findOne({
        where: {
            id: id,
        },
    });
    return user;
};

const updateUser = async (id, email, username) => {
    await db.User.update(
        { email: email, username: username },
        {
            where: { id: id },
        }
    );
};

module.exports = {
    createNewUser,
    getUserList,
    deleteUser,
    getUserById,
    updateUser,
};
