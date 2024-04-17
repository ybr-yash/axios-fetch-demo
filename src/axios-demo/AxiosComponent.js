import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const AxiosComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => {
        setData(response.data);
        
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  console.log("=======", data)
  return (
    <>
    <h1>To Dos by Axios</h1>
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>User Id</th>
          <th>Title</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
      {data.map((message, index) => (
        <tr>
        <td>{message.id}</td>
        <td>{message.userId}</td>
        <td>{message.title}</td>
        <td>{message.completed ? "Yes" : "No"}</td>
        
      </tr>
      ))}
        
      </tbody>
    </Table>
    </div>
    </>
  )
}

export default AxiosComponent