export default class UserModel {
    constructor({ id, username, email, password, isAdmin }) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.isAdmin = isAdmin ?? false;
    }
}
