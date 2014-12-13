class UserRepository extends Repository<User> {
  constructor($http: ng.IHttpService) {
    super($http);
  }

  url() {
    return "/api/users"
  }
}
app.service("userRepository", UserRepository);