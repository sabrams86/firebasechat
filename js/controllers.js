app.controller('ChatController', ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {
  var conversation = new Firebase('https://sa-todolist.firebaseio.com/chat');
  $scope.editForm = false;
  $scope.messages = $firebaseArray(conversation);
  $scope.newMessage = function () {
    $scope.messages.$add({username: $scope.username, avatarUrl: $scope.avatarUrl, content: $scope.content}).then(function () {
      $scope.content = '';
    })
  }
  $scope.removeMessage = function (message) {
    $scope.messages.$remove(message);
  }
  $scope.editMessage = function () {
    this.editForm = !this.editForm;
  }
  $scope.updateMessage = function (message) {
    this.message.content = this.messageContent;
    $scope.messages.$save(this.message);
    this.editForm = false;
  }
}])
