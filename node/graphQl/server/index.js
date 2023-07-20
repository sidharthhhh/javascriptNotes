const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const {USERS} = require("./user")
const {TODOS} = require("./todo")

async function startserver() {
    const app = express();
    const server = new ApolloServer({

        // yaha schema bnaate haii
        typeDefs: `
        type User {
            id: ID!
            name: String!
            username: String!
            email: String!
            phone: String!
            website: String!
          }
          
          type Todo {
            id: ID!
            title: String!
            completed: Boolean
            user: User
          }
          
          type Query {
            getTodos: [Todo]
            getAllUsers: [User]
            getUser(id: ID!): User
          }
          
        `,

        // yaha login likhe haii
        resolvers: {
            Todo: {
                user: async (todo) => USERS.find((e)=> e.id === todo.id),
            },
            Query: {
                getTodos: () => TODOS,



                    // usually yaha database operation hote haiii
                    // (await axios.get('https://jsonplaceholder.typicode.com/todos')).data,


                getAllUsers: () => USERS,


                    // (await axios.get('https://jsonplaceholder.typicode.com/users')).data,

                getUser: (parent, { id }) => USERS.find(e = e.id === id),


                    // (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data,

            }

        }
    });

    app.use(bodyParser.json());
    app.use(cors());

    await server.start();

    app.use("/graphql", expressMiddleware(server));

    app.listen(8000, () => console.log("server start at port 8000"))
}

startserver();