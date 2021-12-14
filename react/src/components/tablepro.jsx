import React from "react";
import { useQuery, gql } from "@apollo/client";

const PROJECTS_QUERY = gql`
  {
    getProjects {
      _id
      name
    }
  }
`;

function Tablepro() {
  const { data, loading, error } = useQuery(PROJECTS_QUERY);
  if (loading) return "Loading ...";
  if (error) return <pre>{error.message}</pre>;
  console.log(data);
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {data.getProjects.map((project) => (
          <li key={project._id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default Tablepro;
