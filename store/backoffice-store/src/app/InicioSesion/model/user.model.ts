export class User {
    id: number | undefined;
    nick: string;
    name: string;
    lastName: string;
    email: string;
    phone: number;
    password: string;

    constructor(
        id: number | undefined,
        nick: string,
        name: string,
        lastName: string,
        email: string,
        phone: number,
        password: string,
    ) {
        this.id = id
        this.nick = nick
        this.name = name
        this.lastName = lastName
        this.email = email
        this.phone = phone
        this.password = password
    }
}