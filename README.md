# E-commerce API

## Description

This project was designed to showcase my ability to create an API with Node.js, Express and a database PostGreSQL for a Codecademy curriculum.
The goal was also to deploy it using Heroku. You can find it on this URL: [https://e-commerce-jeremy.herokuapp.com](https://e-commerce-jeremy.herokuapp.com).

## Project Overview

For this project, I will build an e-commerce application REST API using my knowledge of server-side web development. E-commerce applications are ubiquitous online and make up the back-bone of online business, making the skills used to build them invaluable for any budding entrepreneur or developer. This project requires that I build a fully-functioning e-commerce application REST API that allows users to perform various CRUD operations such as registering an account, browsing products for sale, etc.

## How to Begin

Once you have the project downloaded, you'll need to run some terminal commands to get the application started. First, open the root project directory in your terminal. Run `npm install` to install the dependencies of this project and build the front-end application. Once it has finished installing, you can run `npm run start` to begin your server. You'll see `Server listening on port 5000` in the terminal. The `npm run start:dev` script will automatically restart your server whenever you make changes to the **index.js** file or **/.js** files. If you want to turn this off, simply start your server with the `node index.js` command. You can kill either process with the `Ctrl + C` command.

### API Routes

- The routes live inside the **routes** folder. 
- The database connection lives in **db/index.js**. For the first run, you can use the command `psql -U <YOUR_USER> -d <YOUR_DB_NAME> -a -f init.sql` to create the database locally and seed it. Don't forget to change the **.env** file for your local connection.

#### Existing routes

- `/users`
  - GET /users to get an array of all users.
  - POST /users/registration to register a new user in the database.
  - POST /users/login to login an existing user.
  - GET /users/:id to get a single user by id.
  - PUT /users/:id to update a single user by id.
  - DELETE /users/:id to delete a single user by id.
- `/products`
  - GET /products to get an array of all products.
  - POST /products to create a new product.
  - GET /products/:id to get a single product by id.
  - PUT /products/:id to update a single product by id.
  - DELETE /products/:id to delete a single product by id.

This app is a work in progress and will continue to grow.

#### Schemas

- Users:
  - id: int
  - first_name: string
  - last_name: string
  - email: string
  - password: string
- Products:
  - id: int
  - name: string
  - description: string
  - price: number

## Testing

No testing suite has been implemented **yet**.
