const axios = require('axios');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');


// User Type
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        _id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        role: { type: GraphQLString },
        isAuth: { type: GraphQLString }
    })
});



// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {
                id: {
                    name: '_id',
                    type: GraphQLString
                }
            },
            resolve(parentValue, args) {
                return axios.get('http://localhost:1430/users/' + args.id)
                    .then(res => res.data);

            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parentValue, args) {
                return axios.get('http://localhost:1430/users').then(result => { return result.data; })
            }
        }
    }
});

// Mutations
const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        userSignUp: {
            type: UserType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                role: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parentValue, args) {
                return axios.post('http://localhost:1430/adduser', {
                    name: args.name,
                    role: args.role,
                    email: args.email,
                    password: args.password
                })
                    .then(res => res.data);
            }
        },
        deleteUser: {
            type: UserType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parentValue, args) {
                return axios.post('http://localhost:1430/deleteuser/' + args.id)
                    .then(res => res.data);
            }
        },
        editUser: {
            type: UserType,
            args: {
                id: {
                    name: '_id',
                    type: new GraphQLNonNull(GraphQLString)
                },
                // id:{type: new GraphQLNonNull(GraphQLString)},
                name: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) },
                role: { type: new GraphQLNonNull(GraphQLString) },
                isAuth: { type: new GraphQLNonNull(GraphQLString) }
            },

            resolve(parentValue, args) {
                return axios.post('http://localhost:1430/updateuser/' + args.id, args)
                    .then(res => res.data);
            }
        },
        userLogin: {
            type: UserType,
            args: {
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parentValue, args) {
                return axios.post('http://localhost:1430/login', {
                    email: args.email,
                    password: args.password,
                }).then(res => {
                    if (res.data == "Wrong password") {
                        return false;
                    } else if (res.data == "This Email Is not regestered") {
                        return false;
                    } else {
                        return res.data;
                    }
                });
            }
        },
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
});