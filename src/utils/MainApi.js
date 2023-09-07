const apiParams = {
    // link: 'https://api.nomoreparties.co/beatfilm-movies/',
    link: 'http://localhost:3001/',
    headers: {
        'Content-Type': 'application/json'
    }
}

class MainApi{
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

    //Сбор информации о пользователе
    getUserDataFromServer() {
        return this._request(
            `${this._link}users/me`,
            {
                method: 'GET',
                headers: this._headers,
                credentials: 'include',
            }
        );
    }

    //Изменить данные о пользователе на сервере
    setUserInfo(data) {
        return this._request(
            `${this._link}users/me`,
            {
                method: 'PATCH',
                body: JSON.stringify({
                    name: data.name,
                    about: data.about,
                }),
                headers: this._headers,
                credentials: 'include',
            }
        );
    }

    handleChangeAvatar(newAvatarLink) {
        return this._request(
            `${this._link}users/me/avatar`,
            {
                method: 'PATCH',
                body: JSON.stringify(newAvatarLink),
                headers: this._headers,
                credentials: 'include',
            }
        );
    }

    //Сбор информации о фильмах
    getMoviesFromServer() {
        return this._request(
            `${this._link}movies`,
            {
                method: 'GET',
                headers: this._headers,
                credentials: 'include',
            }
        );
    }

    //Добавление фильма на сервер
    //ДОДЕЛАТЬ!!!!!!
    //ДОДЕЛАТЬ!!!!!!
    //ДОДЕЛАТЬ!!!!!!
    //ДОДЕЛАТЬ!!!!!!
    //ДОДЕЛАТЬ!!!!!!
    //ДОДЕЛАТЬ!!!!!!
    //ДОДЕЛАТЬ!!!!!!
    addNewMovieToServer({filmData, userId}) {
        const data = {
            ...filmData,
            owner: userId,
          };
        return this._request(
            `${this._link}movies`,
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: this._headers,
                credentials: 'include',
            }
        );
    }

    //Удаление фильма с сервера
    deleteMovieFromServer(movieId) {
        return this._request(
            `${this._link}movies/${movieId}`,
            {
                method: 'DELETE',
                headers: this._headers,
                credentials: 'include',
            }
        );
    }
}

export const mainApi = new MainApi(apiParams);