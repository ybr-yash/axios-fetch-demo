import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

const FetchComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>To Dos by Fetch Method</h1>
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
    </div>
  );
};

export default FetchComponent;
