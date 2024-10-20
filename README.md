# **🏥 Pharmacy React Node API**
Pharmacy React Node API is a comprehensive backend solution built using Node.js, Express, and MySQL (with Sequelize ORM). This API provides all the essential functionalities required for managing a pharmacy’s online platform, including user registration, product management, category management, shopping cart, and order handling.

With a clean, modular architecture and focus on performance, Pharmacy React Node API is scalable and efficient, making it a robust backend for modern pharmacy management systems.

### 📦 **Setup**

Clone the repository and install the necessary dependencies:

````
$ git clone https://github.com/kennytruong06/backend-api-family-pharmacy-node-project

$ npm install
````

### Create a new '.env' file in the root directory
````
DB_NAME='ecommerce_db'

DB_USER='root'

DB_PASSWORD=''
````

 ### 🚀 Run the Service

Start the backend using nodemon or node:
````
$ npm run dev  # with nodemon serve.js

$ npm start    # with nodemon serve.js
````

###  Create Models 
````
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
````

###  Create migrations
````
npx sequelize-cli migration:generate --name create-users-table
````

### Run update database
``````
npx sequelize-cli db:migrate
``````

### Create seed
````
npx sequelize-cli seed:generate --name demo-user
````

### Run seed
````
npm run seed
````

### 📚 API Endpoints

#### User Routes

**👤 Create User**

`POST | /api/v1/users/register`

| Key           | 	Value                   |           
|---------------|--------------------------|
| name	         |John Doe                  |
| email         | 	john@example.com        |
| password      | password                 |
| phone         | +1234567890              |
| role	         | 0                        |

### 🔑 Login User

`POST | /api/v1/users/login`

| Key       | Value         |
| --------- |---------------|
| name      | abc           |
| email     | abc@admin.com |
| password  | password      |
| phone     | +947187520    |
| isAdmin   | 0             |

### 🧑‍🤝‍🧑 Get Users

`GET | /api/v1/users`

### 🧑‍🦱 Get Single User

`GET | /api/v1/users/{id}`

### 🗑️ Delete User

`DELETE | /api/v1/users/{id}`

### Products Routes

`POST |  /api/v1/products`

| Key            | Value          |
|----------------|----------------|
| name           | Product 1      |
| description    | Description    |
| price          | price          |
| productionDate | productionDate |
| expirationDate | expirationDate |
| category       | {category_id}  |
| countInStock   | 100            |
| rating         | 4.5            |
| numReviews     | 40             |

### *Get Products*
`GET /api/products `

###  *Get Single Product*
`GET |  /api/v1/products/{id}`

###  *Update Product by ID*
`PUT /api/products/:id `

| Key            | Value          |
|----------------|----------------|
| name           | Product 1      |
| description    | Description    |
| price          | price          |
| productionDate | productionDate |
| expirationDate | expirationDate |
| category       | {category_id}  |
| countInStock   | 100            |
| rating         | 4.5            |

###  *Deletes a product by ID*
`DELETE /api/products/:id `

### *Categories Routes*

### *Get Category*
`GET /api/categories `

### *Creates a new category*
`POST /api/categories `

| Key       | Value         |
|-----------|---------------|
| name      | category_name |
| parent_id | 1             |

### *GET category by ID*
`GET /api/categories/:id `

### *Updates a category by ID.*
`PUT /api/categories/:id `

| Key       | Value         |
|-----------|---------------|
| name      | category_name |
| parent_id | 1             |

### *Delete Category*
`DELETE /api/categories/:id `

## 👨‍💻 Author

[Kenny Truong](https://dinushchathurya.github.io/)

[Quoc Thinh]()

## 📄 License

Copyright (c) 2020


Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## 📝 Blog


Stay tuned for more updates!

[Your Blog URL] :  https://github.com/nhqt8720004


## ❤️ Happy Coding!

Adding icons to your README enhances its visual appeal and readability. Here are the icons used in this README:

📦: Setup
🚀: Run the Service
👤: User Routes
🗂️: Category Routes
🛍️: Product Routes
🛒: Order Routes
👨‍💼: Author
📄: License
📝: Blog
❤️: Happy Coding
