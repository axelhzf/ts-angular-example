interface FadeInScope extends ng.IScope {
  fadeOut: string;
}

app.directive("fadeOut", () => {
  return {
    restrict: "A",
    scope: {
      fadeOut: "@"
    },
    link: function (scope: FadeInScope, element: ng.IAugmentedJQuery) {
      console.log("link directive", scope.fadeOut);
      element.fadeOut(parseInt(scope.fadeOut))
    }
  }
});