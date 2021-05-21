import React from 'react'
import {Table} from 'react-bootstrap';

const ReposCard = ({repos}) => {
    console.log(repos)
    return (
        <div className="container mt-5">
            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th colSpan="2">Repo </th>
      <th>Language</th>
    </tr>
  </thead>
  <tbody>
    {repos.map(repo => (
        <tr key={repo.name}>
            <td colSpan="2">
                <a href={repo.html_url} target="_blank">{repo.name}</a>
            </td>
            <td>{repo.language}</td>
      </tr>
    ))}
  </tbody>
</Table>
        </div>
    )
}

export default ReposCard
