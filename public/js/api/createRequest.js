/**
 * Основная функция для совершения запросов
 * на сервер.
 * */

const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest;
    const response = (err, response) => {};
    this.options = {
        callback: response
    }
    try {
        if (options.method === 'GET') {
            xhr.open(`${options.method}`, `${options.url}?mail=${options.email}&password=${options.password}`);
            // console.log(options);
            xhr.send();
        } else {
            let formData = new FormData();
            formData.append('name', options.data.name);
            formData.append('email', options.data.email);
            formData.append('password', options.data.password);
            // console.log(options);
            xhr.open(`${options.method}`, `${options.url}`);
            xhr.send(formData);
        };
        xhr.responseType = 'json';
        xhr.onload = function() {
            options.callback(null, xhr.response);
        };
    } catch (e) {
        console.log(e);
        options.callback(e, xhr.response);
    }
};