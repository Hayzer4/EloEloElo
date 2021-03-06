define(["require", "exports", '../datamodels/gameData', '../services/security', 'plugins/router'], function (require, exports, gameData, SecurityService, router) {
    "use strict";
    var IndexViewModel = (function () {
        /**
         *
         */
        function IndexViewModel() {
            this.canActivate = function () {
                if (!this.security.IsAuthenticated()) {
                    return { redirect: 'login' };
                }
                return true;
            };
            this.attached = function () {
            };
            this.security = new SecurityService();
            this.HasQueue = ko.computed(function () {
                return gameData.Games().length > 1;
            });
            this.HasWaiting = ko.computed(function () {
                return gameData.PlayersWaiting().length > 1;
            });
            this.PlayerName = this.security.PlayerName;
        }
        IndexViewModel.prototype.SignOut = function () {
            router.navigate("signout");
        };
        return IndexViewModel;
    }());
    return IndexViewModel;
});
//# sourceMappingURL=index.js.map