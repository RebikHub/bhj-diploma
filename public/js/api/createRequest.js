/**
 * Основная функция для совершения запросов
 * на сервер.
 * */

const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest;
    console.log(options.method === 'GET');
    try {
        if (options.method === 'GET') {
            xhr.open(`${options.method}`, `${options.url}?mail=${options.mail}&password=${options.password}`);
            xhr.send();
        } else {
            let formData = new FormData;
            formData.append('mail', optins.data.mail);
            formData.append('password', options.data.password);
            console.log(formData);
            xhr.open(`${optins.method}`, `${options.url}`);
            xhr.send(formData);
        };
    } catch (e) {
        // console.log(e);
    }
    xhr.responseType = 'json';
    xhr.addEventListener('load', (err, response) => {
        console.log('Ошибка, если есть', err);
        console.log('Данные, если нет ошибки', response);
        console.log(xhr.response);
    });
};