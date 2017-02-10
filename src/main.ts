import * as app from "./app";

angular
    .module("electronTest", [
        "ui.router"
    ])
    .run(function($rootScope) {
        $rootScope.$on("$stateChangeError", console.log.bind(console));
    })
    .config(app.AppConfig)
    .component("appMain", new app.AppCmp())
    .component("draw", new app.DrawCmp())
    .component("itemList", new app.ItemListCmp())
    .component("people", new app.PeopleCmp())
    .component("teams", new app.TeamsCmp())
    .service("drawService", app.DrawService)
    .service("storageService", app.StorageService)
    .service("teamsService", app.TeamsService);

// Include CSS with Bundle
require("./index.scss");