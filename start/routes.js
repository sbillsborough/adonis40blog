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

// standard route
Route.get("/test", () => "Hello World!");

// If you want parameters in your url, localhost:3333/test/1 2 3 etc
Route.get("/test/:id", function ({ params }) {
  return `This is the id ${params.id}`;
});

// Function Declaration or arrow syntax, either format works.
