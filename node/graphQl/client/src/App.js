import { gql, useQuery } from '@apollo/client';

const GET_TODOS_WITH_USER = gql`
  query GetTodoswithUser {
    getTodos {
      id
      title
      completed
      user {
        id
        name
      }
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(GET_TODOS_WITH_USER);

  if (loading) return <h1>Loading..............</h1>;
  if (error) return <h1>Error: {error.message}</h1>;



  return (
    <div className="App">
      {JSON.stringify(data)}
    </div>
  );
}

export default App;
