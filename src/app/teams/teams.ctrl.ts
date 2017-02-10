import { StorageService } from "../services";
import { TeamsService } from "./services/teams.service";

export class TeamsCtrl {
    static $inject = [
        "storageService",
        "teamsService"
    ];

    teams: string[];

    constructor(
        private storageService: StorageService,
        private teamsService: TeamsService
    ) {}

    $onInit() {
        this.teams = this.storageService.get("teams") || [];
    }

    updateTeams(teams: string[]) {
        this.teams = teams;
        this.storageService.set("teams", this.teams);
        console.log("Teams updated!");
    }

    importTeams() {
        this.teamsService.getTeams()
            .then(teams => {
                this.updateTeams(teams);
            });
    }
}