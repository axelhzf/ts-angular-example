class UserController {
  counter: number;
  error: string;

  constructor(public $scope: ng.IScope, public userRepository: UserRepository) {
    this.counter = 0;

    this.$scope.$watch("ctrl.counter", () => {
      console.log("change counter");
    });
  }

  increment() {
    this.counter++;

    this.userRepository.findAll().then(function (users: User[]) {
      console.log("users", users);
    });

    this.userRepository.find(1).then(function (user: User) {
      console.log("user", user);
    })

  }

}


app.controller("UserController", UserController);
