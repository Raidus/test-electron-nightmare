// We allow nightmare to wander in the global scope by defining it here,
// otherwise we would not be able to call it multiple times
var Nightmare = require('nightmare');
var nightmare;
var args = { show: true, alwaysOnTop: true, electronPath: require('./node_modules/electron') };


document.getElementById("start").addEventListener("click", function(){
  document.getElementById("status").innerHTML = "Searching for the gem";

  // Here we start the Nightmare Instance
  console.log('test')
  nightmare = Nightmare(args);
  nightmare
    .goto('http://yahoo.com')
    .type('form[action*="/search"] [name=p]', 'github nightmare')
    .click('form[action*="/search"] [type=submit]')
    .wait('#main')
    .evaluate(function () {
      return document.querySelector('#main .searchCenterMiddle li a').href
    })
    .then(function (result) {
      document.getElementById("results").innerHTML = result;
    })
    .catch(function (error) {
      document.getElementById("results"). innerHtml = "Search failed: " + error;
    });

})
document.getElementById("stop").addEventListener("click", function(){
  nightmare
  .end()
  .then(function (result) {
      document.getElementById("status").innerHTML = "Leaving Nightmare Speechless";
    })
})
