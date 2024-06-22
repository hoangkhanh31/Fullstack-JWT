import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";

const salt = bcrypt.genSaltSync(10);

// const connection = mysql.createConnection({
//     host: "localhost",
//     database: "fullstack_jwt",
//     user: "root",
//     password: "",
// });

const hashUserPassword = (password) => {
    let hashPassword = bcrypt.hashSync(password, salt);
    return hashPassword;
};

const createNewUser = async (email, password, username) => {
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "fullstack_jwt",
        password: "",
    });

    let hashPassword = hashUserPassword(password);

    try {
        let sql = "INSERT INTO users (email,password,username) VALUES (?,?,?)";
        let values = [email, hashPassword, username];
        const [result, fields] = await connection.execute(sql, values);
        return;
    } catch (err) {
        console.log(err);
    }
};

const getUserList = async () => {
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "fullstack_jwt",
        password: "",
    });

    try {
        let sql = "SELECT * FROM users";
        const values = [];
        const [rows, fields] = await connection.execute(sql, values);
        return rows;
    } catch (err) {
        console.log(err);
    }
};

const deleteUser = async (id) => {
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "fullstack_jwt",
        password: "",
    });

    try {
        let sql = "DELETE FROM users WHERE id = ?";
        let values = [id];
        const [result, fields] = await connection.execute(sql, values);
        return;
    } catch (err) {
        console.log(err);
    }
};

const getUserById = async (id) => {
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "fullstack_jwt",
        password: "",
    });

    try {
        let sql = "SELECT * FROM users WHERE id = ?";
        let values = [id];
        const [result, fields] = await connection.execute(sql, values);
        return result;
    } catch (err) {
        console.log(err);
    }
};

const updateUser = async (id, email, username) => {
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "fullstack_jwt",
        password: "",
    });

    try {
        let sql = "UPDATE users SET email = ?, username = ? WHERE id = ?";
        let values = [email, username, id];
        const [result, fields] = await connection.execute(sql, values);
        return;
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    createNewUser,
    getUserList,
    deleteUser,
    getUserById,
    updateUser,
};
