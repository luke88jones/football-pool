import { StorageService } from "../services";

export class PeopleCtrl {
    static $inject = [
        "storageService"
    ];

    people: string[];

    constructor(
        private storageService: StorageService
    ) {}

    $onInit() {
        this.people = this.storageService.get("people") || [];
    }

    updatePeople(people: string[]) {
        this.people = people;
        this.storageService.set("people", this.people);
        console.log("People updated!");
    }
}