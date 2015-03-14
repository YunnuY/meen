![MEEN.JS](/public/public/assets/images/meen.png)

## MEEN is deprecated, please see [sane](https://github.com/artificialio/sane) which has same goal but go further.

Mongo-Ember-Express-Node full-stack javascript open-source solution.

After being an ember and rails developer for some time, i find that pure javascript solutions is more and more attractive. 
Both frontend and backend follow the same philosophy, all things work perfect with json data, and most of all, the community is dynamic and creative. Pure javascritp solution must be good in the web world, it is the next generation LAMP(Linux+Apache+Mysql/MariaDB+Perl/PHP/Python).

After some search, i found there have been some similiar solutions like [meanjs](https://github.com/meanjs/mean) and 
[hackathon](https://github.com/sahat/hackathon-starter). However the first one using angularjs as frontend framwork while i prefer ember, and the latter one only focus on backend side.

The purpose of this project is to build a robust framework using best tools in js community, to support daily development needs, and help developers use better practices while working with popular javascript components.


## architecture overview

**[Emberjs](http://www.emberjs.com)** the frontend mvc framwork

- [ember-data](https://github.com/emberjs/data)
- [ember-cli](http://wwww.ember-cli.com)

**[express](http://expressjs.com)** the app server

the express app follow below folder structure  
* [server.js](#serverjs)
* app
  * [models](#models)
  * [views](#views)
  * [controllers](#controllers)
  * mailers
* config
  * [routes](#routes)
  * express
  * passport
  * environment
  * using middlewares
  * using route middlewares
* tests

**[mongoDB](http://www.mongodb.org/)** the database

- [mongoose](http://mongoosejs.com/) the ODM tool

**[Nodejs](http://nodejs.org/)** the platform

The folder structure are following the "nature" way, express app as the parent project, ember app in express's public folder.
let express serve complied ember static files. This solution is easy but have duplicated package.json(so node_modules as well), and cli commands works separated so no communication, for example 'ember build --wath' and can not notify express that
ember is rebuild. Need improment later. 

## Prerequisites
Make sure you have installed all prerequisites on your development machine.
* Node.js - [Download & Install Node.js](http://www.nodejs.org/download/) and the npm package manager, if you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.
* MongoDB - [Download & Install MongoDB](http://www.mongodb.org/downloads), and make sure it's running on the default port (27017).
* Bower - You're going to use the [Bower Package Manager](http://bower.io/) to manage your front-end packages, in order to install it make sure you've installed Node.js and npm, then install bower globally using npm:

```
$ npm install -g bower
```

## Quick Install
Clone this repo and install Node.js dependencies, in the application folder run this in the command-line:

```
$ npm install
```

## Running Your Application

After the install process is over, you'll be able to run your application.


```
# open terminal, at project root.
npm start
# open another terminal, at project root.
cd public
ember build --watch
```

Your application should run on the 3000 port so in your browser just go to [http://localhost:3000](http://localhost:3000)

That's it! your application should be running by now, If you encounter any problem try the issue tracker.


## Credits
Inspired by the great work of [meanjs](https://github.com/meanjs/mean) and [hackathon](https://github.com/sahat/hackathon-starter)


## License
The MIT License (MIT)

Copyright (c) 2014 YunnuY

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
