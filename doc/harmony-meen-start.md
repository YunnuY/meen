# the harmony meen start command

meen using express as server and ember as client, the easiet way to let them work
together when develop is as below:

- under express path, `npm start` to run express on default port 3000.
- under ember path, `npm start --proxy http://localhost:3000` to run express on default
  port 4200, but proxy http request to 3000.

they are actually two projects but well organized.

since they have seperate start(build) processes, there are some problems.

   * express has an entry point `bin/www` to run itself.
   * in order to auto restart express, we added nodemon.
   * ember has ember-cli to compile js modules and other assets.
   * ember has livereload to auto reload browser.

it need open two terminal and switch between them to see output.

it is diffcult to add something to ember files directly, for example, add crsf token
to the generated index.html.


 - watch ember files change, build as soon as possible.
 - copy generated static ember assets to express serve folder.
 - update express view index page.
 - restart express server