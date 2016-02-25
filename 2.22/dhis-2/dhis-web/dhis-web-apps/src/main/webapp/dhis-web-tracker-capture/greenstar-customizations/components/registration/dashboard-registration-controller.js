/* global trackerCapture, angular */

trackerCapture.controller('DashboardRegistrationController',
        function($rootScope,
                 $scope,
                 $location,
                 $timeout,
                 CurrentSelection) {

            $scope.selectedTeiId = ($location.search()).tei;
            $scope.editingDisabled = false;


            if (!$scope.selectedTeiId){
                CurrentSelection.set({tei:null})
                $timeout(function() {
                $rootScope.$broadcast('registrationWidget', {registrationMode: 'REGISTRATION'});
            }, 200);
                hideWidgets();
                $scope.dashboardReady = true;
            }else {
                $scope.dashboardReady = false;

            }

            $scope.register = function(){
                $timeout(function() {
                    $rootScope.$broadcast('registrationWidget', {registrationMode: 'REGISTRATION'});
                }, 200);

                hideWidgets()

                $scope.dashboardReady = true;
            }

            function hideWidgets(){
                $timeout(function() {
                    $rootScope.$broadcast('hideAllWidgets');
                }, 200);
            }
        });