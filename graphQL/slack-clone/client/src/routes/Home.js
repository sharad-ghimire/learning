import React from 'react';
import { gql, graphql } from 'react-apollo';

// data is given to us by graphql higher--order component
// getAllUsers should match our query below

const Home = ({ data: { loading, getAllUsers } }) =>
  loading ? (
    <h1>Loading...</h1>
  ) : (
    getAllUsers.map((user) => <h1 key='user.id'>{user.email}</h1>)
  );

const allUsersQuery = gql`
  {
    getAllUsers {
      id
      email
    }
  }
`;

export default graphql(allUsersQuery)(Home);
