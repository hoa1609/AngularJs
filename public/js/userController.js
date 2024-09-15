app.controller('userController', function ($scope, $rootScope, $http, $location) {

    // Đăng ký
    $scope.Students = [];
    $scope.Students = JSON.parse(localStorage.getItem('students'));
    if ($scope.Students == null) $http.get("db/Students.js").then(
        function (res) {
            $scope.Students = res.data;
            localStorage.setItem('students', JSON.stringify(res.data))
        },
        function (res) { alert("Lỗi khi lấy students"); }
    );
    console.log("Students=", $scope.Students);
    $scope.register = function () {
        $scope.Students.push($scope.Student);
        localStorage.setItem('students', JSON.stringify($scope.Students));
        alert("Đã đăng ký thành công tài khoản" + $scope.Student.username);
        $location.path('/');
    };

    // Đăng nhập
    $rootScope.username = sessionStorage.getItem('username');
    $scope.logIn = function () {
        $rootScope.username = "";
        u = $scope.u;
        p = $scope.p;
        index = $scope.Students.findIndex(st => st.username == u && st.password == p)
        if (index >= 0) {
            $rootScope.username = u;
            sessionStorage.setItem('username', u);
            $location.path('/');
        }
        else { console.log("Không thành công") }
    }

    // Quên pass
    $scope.forgetpass = function () {
        const user = $scope.Students.find(s => s.email === $scope.email);
        if (user) {
            alert("Mật khẩu bạn là : " + user.password);
        } else alert("Email không tồn tại" + $scope.email)
    }

    /*  change pass  */
    $scope.changepass = function () {
        user = $scope.Students.find(s => s.username == $rootScope.username);
        if (user == null) { alert("Không có username trong db"); return; }
        if (user.password != $scope.pass_old) { alert("Pass cũ không đúng"); return; }
        if ($scope.pass_new1 != $scope.pass_new2) { alert("2 Pass mới không giống"); return; }
        user.password = $scope.pass_new1;
        localStorage.setItem('students', JSON.stringify($scope.Students)); alert(" Đổi mật khẩu thành công");
        $location.path('/');
    };

    /*exit user*/
    $scope.exit = function () {
        $rootScope.isLoggedIn = false;
        $rootScope.username = "";
        sessionStorage.removeItem('username');
        $location.path('home');
    }

    /*  hide password  */
    $scope.passwordType = 'password';
    $scope.showPassword = false;

    $scope.togglePassword = function () {
        $scope.showPassword = !$scope.showPassword;
        $scope.passwordType = $scope.showPassword ? 'text' : 'password';
    };
});