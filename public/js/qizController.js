app.controller('qizController', function ($scope, $routeParams, $http, $interval, $rootScope) {
    $scope.idMH = $routeParams.idMH;
    $scope.nameMH = $routeParams.nameMH;
    $scope.logoMH = $routeParams.logoMH;
    $scope.Value = $routeParams.Value;

    $scope.allquestion = [];
    $http.get('db/Quizs/' + $scope.idMH + ".js").then(
        function (res) {
            $scope.allquestion = res.data;
            console.log(res.data);
        },
        function (res) {
            console.log(res.data)
        }
    );

    /* pagination qiz*/
    $scope.start = 0;
    $scope.pageSize = 1;

    $scope.next = function () {
        if ($scope.start < $scope.allquestion.length - $scope.pageSize)
            $scope.start += $scope.pageSize;
    }
    $scope.prev = function () {
        if ($scope.start > 0)
            $scope.start -= $scope.pageSize;
    }
    $scope.first = function () {
        $scope.start = 0;
    }
    $scope.last = function () {
        var sotrang = Math.ceil($scope.allquestion.length / $scope.pageSize)
        $scope.start = (sotrang - 1) * $scope.pageSize;
    }

    /* countdown time */
    $scope.totalSeconds = 3600;
    updateTimer();

    var countdownInterval = $interval(updateTimer, 1000);
    function updateTimer() {
        $scope.minutes = Math.floor($scope.totalSeconds / 60);
        $scope.seconds = $scope.totalSeconds % 60;

        if ($scope.totalSeconds > 0) {
            $scope.totalSeconds--;
        } else {
            $interval.cancel(countdownInterval);
        }
    }

    /* check đán án đúng*/
    $scope.point = 0;
    $scope.chonDungId = ''; 

    $scope.checkPoint = function(idPa, idPADung, point) {
        if (idPa == idPADung) {
            if ($scope.chonDungId != idPADung) {
                $scope.point += point;
                $scope.chonDungId = idPADung;
                $rootScope.point = $scope.point; 
            }
        }
        if(idPa != idPADung) {
            if ($scope.chonDungId == idPADung) {
                $scope.point -= point;
                $scope.chonDungId = '';
                $rootScope.point = $scope.point; 
            }
        }
    };
});


app.controller('ResultCtrl', function ($scope, $rootScope) {
    $scope.point = $rootScope.point;
});

