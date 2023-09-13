import { movieUrl } from "../consts/urls";

const apiParams = {
    link: movieUrl,
    headers: {
        'Content-Type': 'application/json'
    }
}

class MoviesApi{
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

     //Сбор информации о фильмах
     getMoviesFromServer() {
        return this._request(
            `${this._link}beatfilm-movies`,
            {
                method: 'GET',
                headers: this._headers,
            }
        );
    }

}

export const moviesApi = new MoviesApi(apiParams);