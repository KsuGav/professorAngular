angular.module('Controllers',[])
    .controller('NavigationCtrl', [function () {
         this.arr = [
            {
                title: 'Home',
                link: '#/'
            },
            {
                title: 'Biography',
                link: '#/biography'
            },
            {
                title: 'Scientific activity',
                link: '#/activity'
            },
            {
                title: 'Betz cells',
                link: '#/cells'
            },
            {
                title: 'Gallery',
                link: '#/gallery'
            },
            {
                title: 'Bibliography',
                link: '#/bibliography'
            },
            {
                title: 'Miscellaneous',
                link: '#/miscellaneous'
            }
        ];
    }])
//.run(function($rootScope) {
//    $rootScope.$on('$routeChangeSuccess', function(e, current, previous) {
//    var page = current.$$route;
//    $rootScope.page = page;
//  });
//})