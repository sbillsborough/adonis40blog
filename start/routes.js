"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.on("/").render("home");

Route.get("/posts", "PostController.index");

Route.get("/posts/:id", "PostController.details");

// Route.on("/contact").render("contact");

// standard route
// Route.get("/test", () => "Hello World!");

// Route.get("/test2", function () {
//   return "Hello there!";
// });

// //If you want parameters in your url, localhost:3333/test/1 2 3 etc
// Route.get("/test/:id", function ({ params }) {
//   return `This is the id ${params.id}`;
// });

// Function Declaration or arrow syntax, either format works.
