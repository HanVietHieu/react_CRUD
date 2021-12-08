import React from 'react';
import { Table } from 'semantic-ui-react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Read() {

   
    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
}
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://61a843ef387ab200171d3075.mockapi.io/hanhieu`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const onDelete = (id) => {
        axios.delete(`https://61a843ef387ab200171d3075.mockapi.io/hanhieu/${id}`)
        .then(() => {
            getData();
        })
      }
      const getData = () => {
        axios.get(`https://61a843ef387ab200171d3075.mockapi.io/hanhieu`)
            .then((getData) => {
                 setAPIData(getData.data);
                 
             })
    }
    
    return (
        <div>

            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                    return (
                        <Table.Row>
                            <Table.Cell>{data.firstName}</Table.Cell>
                            <Table.Cell>{data.lastName}</Table.Cell>
                            <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                            {/* tạo nút button liên kết */}
                            <Link to='/update'>
                                <Table.Cell> 
                                     <button onClick={() => setData(data)}>Update</button>
                                </Table.Cell>
                            </Link>
                            {/* tha thu */}
                            <Table.Cell>
   <button onClick={() => onDelete(data.id)}>Delete</button>
</Table.Cell>
                        </Table.Row>
                            )})}
                </Table.Body>

    



                
            </Table>

            
        </div>
    )
}