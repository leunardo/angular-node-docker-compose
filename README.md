# angular-node-docker-compose

Simple application running on docker for case-study only. You can take it as example for build your own containers or to see how docker works.

The front-end app is built with Angular which runs at `localhost:4200`.

The back-end server is built with Node.js at `localhost:3000`.

While running at release mode, the Angular app is hosted using NGINX. In development it uses the `ng serve` command.


### APP

* GET `localhost:4200`

### API

* GET `localhost:3000/payments`
* GET `localhost:3000/payments/checkout`


### Executing 

In order start containers, run `docker-compose build --up`. This will build both containers and start them in `release` mode.


### Development

For development mode and hot reload, run `docker-compose -f docker-compose.dev.yml build --up` 