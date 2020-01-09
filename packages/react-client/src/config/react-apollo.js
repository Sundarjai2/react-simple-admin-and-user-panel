import ApolloClient from 'apollo-boost';
import { SERVICE_URL } from '.';

// Creating Apollo client instance 
export const apolloClient = new ApolloClient({
    uri: SERVICE_URL
})