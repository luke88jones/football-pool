import { DrawService, DrawnEntry } from "./shared";

export class DrawCtrl {
    static $inject = [
        "drawService"
    ];

    drawResult: DrawnEntry[];
    previousDraws: string[];

    constructor( 
        private drawService: DrawService
    ) { }

    $onInit() {
        this.drawResult = [];
        this.previousDraws = [];
    }

    drawTeams() {
        this.drawResult = this.drawService.draw();
    }
}