import storageKeys from "./storageKeys";

export const account = {
    login
}


function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify({ email, password })
    };

    return fetch('$https://gearzone.herokuapp.com/auth/login', requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem(storageKeys.USER , JSON.stringify(user));
            localStorage.setItem(storageKeys.TOKEN , JSON.stringify(user.jwt));

            return user;
        });
}


function handleResponse(response) {
    return response.text()
        .then(text => {
            const data = text && JSON.stringify(text);
        if (!response.ok) {

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}



