(function () {

  (function (window) {

    var helloSpeaker = {};
    helloSpeaker.speak = function speak(name) {
      console.log(speakWord + " " + name);
    }

    window.helloSpeaker = helloSpeaker;

  })(window);

  var speakWord = "Hello";

})();