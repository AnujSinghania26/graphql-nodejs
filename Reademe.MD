# GraphQL User API

A Node.js (v22) project using TypeScript, Sequelize ORM, MySQL, and GraphQL.  
Provides API endpoints to create users, get user by ID, and retrieve all users.

## Features

- Node.js v22 with TypeScript
- Sequelize ORM with MySQL
- GraphQL API for user management
- Basic CRUD operations (Create, Read by ID, Read All)

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/graphql-user-api.git
cd graphql-user-api 
```



## Install dependencies:
    ```npm install```

## Configure environment variables:
    Create a .env file in the root with the following content:

        DB_HOST=localhost
        DB_PORT=3306
        DB_USER=root
        DB_PASSWORD=yourpassword
        DB_NAME=yourdbname

## Running the App
    ```npm run dev```

### This starts the GraphQL server (e.g., on http://localhost:4000/graphql).

### GraphQL API
    ## Create User
        mutation {
                    createUser(input: { name: "Alice", email: "alice@example.com" }) {
                        id
                        name
                        email
                    }
                }
            
    ## Get User by ID
                     query($getUserId: Int!) {
                        getUser(id: $getUserId)  {
                            message
                            success
                            data {
                            id
                            name
                            email
                            }
                        }
                    }



    ## Get All Users
        query {
                    getAllUsers {
                        id
                        name
                        email
                    }
               }


## Technologies

    Node.js v22
    TypeScript
    Sequelize ORM
    MySQL
    GraphQL



