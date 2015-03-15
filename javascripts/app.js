(function() {
"use strict";

var DEFAULT_ROUTE = 'home';

var template = document.querySelector('#t');

template.pages = [
  {name: 'Home', hash: 'home', icon: "home"},
  {name: 'Blog', hash: 'blog', icon: "assignment"},
  {name: 'Projects', hash: 'projects', icon: "dashboard"},
  {name: 'About Me', hash: 'aboutme', icon: "account-box"},
];

})();