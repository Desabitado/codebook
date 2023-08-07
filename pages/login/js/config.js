require(["../../../config"], function () {
  require(["jquery", "knockout", "text!../html.html"], function (
    $,
    ko,
    componentHTML
  ) {
    var ViewModel = function () {
      this.dynamicContent = ko.observable(componentHTML);
      this.siteSetting = ko.observable({
        info: "Codebook TEST",
      });

      this.options = ko.observable([
        "Meta",
      ]);

      var self = this;

      self.auth = ko.observable(false);
    };

    ko.applyBindings(new ViewModel());
  });
});
