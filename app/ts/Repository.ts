class Repository<T> {
  constructor(public $http: ng.IHttpService) {

  }

  find(id: number) {
    return this.$http.get(this.url() + "/" + id)
      .then(function (response: ng.IHttpPromiseCallbackArg<T>) {
        return response.data;
      });
  }

  findAll() {
    return this.$http.get(this.url())
      .then(function (response: ng.IHttpPromiseCallbackArg<T[]>) {
        return response.data;
      });
  }

  url(): string {
    throw new Error("Url undefined");
  }

}