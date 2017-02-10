interface ITeamsResponse {
    data: IFullResponse
}

interface IFullResponse {
    teams: ITeam[]
}

interface ITeam {
    identifier: string;
    team_slug: string;
    name: string;
    flag: string;
    notes: string;
}

export class TeamsService {
    static $inject = [
        "$http"
    ];

    private apiKey: string;
    private baseUrl: string;
    private headers: angular.IHttpRequestConfigHeaders;

    constructor(
        private $http: angular.IHttpService
    ) {
        this.apiKey = "4XbCMOTQ9Tmsh8kS89UmoDhBGaDVp1RJt8QjsnKZroywZnw3pt";
        this.baseUrl = "https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1";
        this.headers = {
            "Accept": "application/json",
            "X-Mashape-Authorization": this.apiKey
        };
    }

    getTeams(): angular.IPromise<string[]> {
        return this.$http.get(`${this.baseUrl}/leagues/premier-league/seasons/16-17/teams`, {
            headers: this.headers
        })
        .then((res: angular.IHttpPromiseCallbackArg<ITeamsResponse>) => res.data.data.teams.map(t => t.name));
    }
}