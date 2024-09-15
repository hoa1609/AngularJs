/* controller subject */
app.controller('myCtrl', function ($scope, $routeParams, $rootScope, $http) {

    $scope.Subjects = [];
    $http.get('db/Subjects.js').then(
        function (res) {
            $scope.Subjects = res.data;
            console.log(res.data)
        },
        function (res) {
            alert('Lỗi nè');
            console.log(res);
        }
    )
    /* trang danh mục */
    $scope.Category = $routeParams.Category;
    $scope.Categorys = [];
    $http.get('db/Categorys.js').then(
        function (res) {
            $scope.Categorys = res.data;
            console.log(res.data)
        },
        function (res) {
            alert('Lỗi nè');
            console.log(res);
        }
    )

    /* lưu trữ biến chỉ value of category */
    // Trước hết, kiểm tra xem liệu đã có giá trị trong localStorage chưa
    // Nếu có, gán giá trị đó cho selectedCategoryValue
    // Tiếp theo, khi chọn một danh mục mới, lưu giá trị vào localStorage
    $rootScope.selectCategoryValue = function (value) {

        $rootScope.selectedCategoryValue = value;
        localStorage.setItem('selectedCategoryValue', value);
    };  
    if (localStorage.getItem('selectedCategoryValue')) {
        $rootScope.selectedCategoryValue = localStorage.getItem('selectedCategoryValue');
    } else {
        $rootScope.selectedCategoryValue = '';
    }
    
});