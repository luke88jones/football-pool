import { StorageService } from "../../services"
import { DrawnEntry } from "./drawnEntry.model";

export class DrawService {
    static $inject = [
        "storageService"
    ];

    constructor(
        private storageService: StorageService
    ) { 

    }

    draw(): DrawnEntry[] {
        let teams = this.storageService.get("teams");
        let people = this.storageService.get("people");

        let drawnEntries = [];
        for (var i = people.length -1;  i >= 0; i--) {
          var randIndex = Math.floor(Math.random() * teams.length);
          var selectedTeam = teams[randIndex];
          
          drawnEntries.push(new DrawnEntry(selectedTeam, people[i]));
          
          people.splice(i, 1);
          teams.splice(randIndex, 1);
        }

        return drawnEntries;
    }
}