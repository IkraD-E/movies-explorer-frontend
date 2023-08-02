const apiParams = {
    link: 'https://api.ikrad-movies-explorer.nomoredomains.xyz/',
    // link: 'http://localhost:3001/',
    headers: {
        'Content-Type': 'application/json'
    }
}

class Auth{
    constructor({link, headers}){
        this._link = link;
        this._headers = headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        }
            return Promise.reject(res)
    }

    _request(url, options) {
        return fetch(url, options).then(this._checkResponse)
    }

    //Добавление пользователя на сервер
    addNewUserToServer(email, password, name) {
        return this._request(
            `${this._link}signup`, 
            {
                method: 'POST',
                body: JSON.stringify({
                    "email": email,
                    "password": password,
                    "name": name,
                }),
                headers: this._headers,
                credentials: "include"
            }
        );
    }

    //Аутентификация пользователя на сервере
    handleUserAuthorization(email, password) {
        return this._request(
            `${this._link}signin`, 
            {
                method: 'POST',
                body: JSON.stringify({
                    "email": email,
                    "password": password,
                }),
                headers: this._headers,
                credentials: "include"
            }
        );
    }

    //Сбор информации о пользователе
    checkToken() {
        return this._request(
            `${this._link}users/me`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: "include"
            }
        );
    }

    //Удалить куку
    logout() {
        return this._request(
            `${this._link}users/me`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: "include"
            }
        );
    }
}

export const auth = new Auth(apiParams);