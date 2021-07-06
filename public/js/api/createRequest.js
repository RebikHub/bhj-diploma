/**
 * Основная функция для совершения запросов
 * на сервер.
 * */

const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest;
    options = {
        callback: (err, response) => {
            if (response.success) {
                console.log('Данные, если нет ошибки', response.user);
                callback;
            } else {
                console.log('Ошибка, если есть', err);
            }
        }
    };
    try {
        if (options.method === 'GET') {
            xhr.open(`${options.method}`, `${options.url}?mail=${options.email}&password=${options.password}`);
            console.log(options);
            xhr.send();
        } else {
            let formData = new FormData();
            formData.append('email', options.data[email]);
            formData.append('password', options.data[password]);
            console.log(options);
            xhr.open(`${options.method}`, `${options.url}`);
            xhr.send(formData);
        };
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => options.callback(xhr.response.error, xhr.response));
    } catch (e) {
        console.log(e);
    }
};