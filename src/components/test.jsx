import React from 'react';
import { Button, Table } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import '../Styles/test.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Test(data) {
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get('https://642daabcbf8cbecdb40c17e8.mockapi.io/api/fakeData').then((response) => {
            setAPIData(response.data);
        });
    }, []);

    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox);
    };

    const onDelete = (id) => {
        axios.delete(`https://642daabcbf8cbecdb40c17e8.mockapi.io/api/fakeData/${id}`).then(() => {
            getData();
        });
    };

    const getData = () => {
        axios.get(`https://642daabcbf8cbecdb40c17e8.mockapi.io/api/fakeData`).then((getData) => {
            setAPIData(getData.data);
        });
    };

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>UserName</Table.HeaderCell>
                        <Table.HeaderCell>PassWord</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                <Link to="/update">
                                    <Table.Cell>
                                        <Button onClick={() => setData(data)}>Update</Button>
                                    </Table.Cell>
                                </Link>

                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        );
                    })}
                </Table.Body>
            </Table>
        </div>
    );
}

export default Test;
