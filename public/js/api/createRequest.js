/**
 * Основная функция для совершения запросов
 * на сервер.
 * */

const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest;
    options.callback = (err, response) => {
        try {
            xhr.onload = function() {
                callback(null, xhr.response);
            };
        } catch (err) {
            console.log(err);
        }
    }
    xhr.addEventListener('load', options.callback);
    if (options.method === 'GET') {
        xhr.open(options.method, options.url);
        xhr.send();
    } else {
        let formData = new FormData;
        formData.append('mail', optins.data.mail);
        formData.append('password', options.data.password);
        xhr.open(optins.method, options.url);
        xhr.send(formData);
    };
    xhr.responseType = 'json';
};