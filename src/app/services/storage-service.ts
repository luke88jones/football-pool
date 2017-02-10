export class StorageService {
    static $inject = [
        "$window"
    ];

    constructor(
        private $window: angular.IWindowService
    ) { }

    get(key: string) {
        return JSON.parse(this.$window.localStorage.getItem(key));
    }

    set(key: string, data: any) {
        this.$window.localStorage.setItem(key, JSON.stringify(data));
    }

    delete(key: string) {
        this.$window.localStorage.removeItem(key);
    }
}