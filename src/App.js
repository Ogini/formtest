import React, {Component} from 'react'
import UserForm from './Forms/UserForm'

const fields = [
    {
        id: 'username',
        label: 'Username',
        placeholder: 'Please enter your username',
        type: 'text',
        validation: ['minlength:8','maxlength:20']
    },
    {
        id: 'name',
        label: 'Full Name',
        placeholder: 'Please enter your name',
        type: 'text',
        validation: ['minlength:8']

    },
    {
        id: 'password',
        label: 'Password',
        type: 'password',
        placeholder: 'Enter a password',
        validation: ['minlength:8', 'password']
    },
    {
        id: 'number',
        label: 'Number',
        type: 'text',
        subtype: 'number',
        placeholder: 'Enter a number',
        validation: ['number']
    }
]

class App extends Component {
    render() {
        return (
            <UserForm fields={fields}/>
        );
    }
}

export default App
