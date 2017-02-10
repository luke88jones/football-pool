export class AppConfig {
    static $inject = [
        "$stateProvider",
        "$urlRouterProvider"
    ];

    constructor(
        $stateProvider,
        $urlRouterProvider
    ) {
        $stateProvider
            .state("draw", {
                url: "/draw",
                template: "<draw></draw>"
            })
            .state("people", {
                url: "/people",
                template: "<people></people>"
            })
            .state("teams", {
                url: "/teams",
                template: "<teams></teams>"
            });

        $urlRouterProvider.otherwise("/draw");
    }
}