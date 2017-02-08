function Storage(storageName) {
    var name = name;
    var data = {};
    var storages = ['Cookies', 'sessionStorage', 'localStorage'];

    var localStorage = window.localStorage;
    var sessionStorage = window.sessionStorage;
    var Cookies = window.Cookies;

    this.COOKIE = 'cookie';
    this.SESSION_STORAGE = 'sessionStorage';
    this.LOCAL_STORAGE = 'localStorage';

    this.add = function (name, value, storage) {
        data[name] = {value: value, storage: storage};
    };

    this.get = function (name, defaultVal) {

    };

    this.set = function (name, value) {

    };

    this.setStorage = function (name, storage) {

    };
}
