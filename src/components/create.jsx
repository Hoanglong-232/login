import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
import '../Styles/create.css';
import Test from './test';

function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const postData = () => {
        axios.post('https://642daabcbf8cbecdb40c17e8.mockapi.io/api/fakeData', {
            firstName,
            lastName,
            checkbox,
        });
    };

    // const postData = () => {
    //     console.log(firstName);
    //     console.log(lastName);
    //     console.log(checkbox);
    // }

    return (
        <div className="create">
            <Form className="create-form ">
                <Form.Field>
                    <label>Username</label>
                    <input placeholder="User Name" onChange={(e) => setFirstName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input type="password" placeholder="Pass word" onChange={(e) => setLastName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <Checkbox
                        className="tpx"
                        label="I agree to the Terms and Conditions"
                        onChange={(e) => setCheckbox(!checkbox)}
                    />
                </Form.Field>
                <Button onClick={postData} type="submit">
                    Create
                </Button>
            </Form>
            <div className="space"></div>
            <Test />
        </div>
    );
}

export default Create;
