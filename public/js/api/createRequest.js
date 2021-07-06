/**
 * Основная функция для совершения запросов
 * на сервер.
 * */

const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest;

    try {
        if (options.method === 'GET') {
            xhr.open(`${options.method}`, `${options.url}?mail=${options.email}&password=${options.password}`);
            console.log(options);
            xhr.send();
        } else {
            let formData = new FormData();
            formData.append('email', options.data.email);
            formData.append('password', options.data.password);
            console.log(options);
            xhr.open(`${options.method}`, `${options.url}`);
            xhr.send(formData);
        };
    } catch (e) {
        console.log(e);
    }
    xhr.responseType = 'json';
    options.callback = (response) => {
        if (xhr.response.success) {
            console.log('Данные, если нет ошибки', xhr.response.user);
        } else {
            console.log('Ошибка, если есть', xhr.response.error);
        }
    };
    xhr.addEventListener('load', options.callback);
};