/**
 * Класс User управляет авторизацией, выходом и
 * регистрацией пользователя из приложения
 * Имеет свойство URL, равное '/user'.
 * */
class User {
    static URL = '/user';
    /**
     * Устанавливает текущего пользователя в
     * локальном хранилище.
     * */
    static setCurrent(user) {
        console.log(user);
        localStorage.setItem('user', user);
    }

    /**
     * Удаляет информацию об авторизованном
     * пользователе из локального хранилища.
     * */
    static unsetCurrent() {
        localStorage.removeItem('user');
    }

    /**
     * Возвращает текущего авторизованного пользователя
     * из локального хранилища
     * */
    static current() {
        console.log(this.setCurrent(user));
        // const current = this.current();
        // return current;
    }

    /**
     * Получает информацию о текущем
     * авторизованном пользователе.
     * */
    static fetch(callback) {
        createRequest({ method: 'GET', url: this.URL + '/current' }, response => {
            this.setCurrent(response.user);
            callback();
        });
    }

    /**
     * Производит попытку авторизации.
     * После успешной авторизации необходимо
     * сохранить пользователя через метод
     * User.setCurrent.
     * */
    static login(data, callback) {
        createRequest({ method: 'POST', url: this.URL + '/login', data }, (err, response) => {
            // if (response && response.user) {
            console.log(response);
            this.setCurrent(response.user);
            // }
        });
    }

    /**
     * Производит попытку регистрации пользователя.
     * После успешной авторизации необходимо
     * сохранить пользователя через метод
     * User.setCurrent.
     * */
    static register(data, callback) {
        console.log(data);
        createRequest({ method: 'POST', url: this.URL + '/register', data }, (err, response) => {
            if (response.success) {
                this.setCurrent(response.user);
            } else {
                console.log(err);
                console.log(response.error);
            }
        })
    }

    /**
     * Производит выход из приложения. После успешного
     * выхода необходимо вызвать метод User.unsetCurrent
     * */
    static logout(callback) {
        createRequest({ method: 'POST', url: this.URL + '/logout' }, () => {
            this.unsetCurrent();
        })
    }
}