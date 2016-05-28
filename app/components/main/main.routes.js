import '../main/main.html';
import '../main/main.scss';
import mainCtrl from '../main/main-controller';

export default /*@ngInject*/ function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('main', {
        url: '/',
        views: {
            '@': {
                templateUrl: '/components/main/main.html',
                controller: mainCtrl,
                controllerAs: 'mainCtrl'
            }
        }
    });
}
