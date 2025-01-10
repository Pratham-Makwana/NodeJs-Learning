import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useQuery, gql } from "@apollo/client";

// const query = `
//   query GetTodos {
//     getTodos {
//       title
//       completed
//       user {
//         name
//       }
//     }
//   }
// `;

const query = gql`
  query GetTodosWithUser {
    getTodos {
      id
      title
      completed
      user {
        name
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(query);
  if (loading) return <h1>Loading...</h1>;
  return (
    <>
      <div>
        <table>
          <tbody>
            {data.getTodos.map((todo) => (
              <tr>
                <td>Title:{todo.title}</td>
                <td>Username: {todo.user?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
