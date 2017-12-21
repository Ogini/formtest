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
        validation: ['minlength:8'],
        default: 'Michael Wanush'

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
    },
    {
        id: 'country',
        label: 'Country',
        type: 'select',
        options: [
            {name: 'Select a Country', value: ''},
            {name: 'USA', value: 1},
            {name: 'Germany', value: 2},
            {name: 'Canada', value: 3},
            {name: 'Mexico', value: 4, selected: true},
            {name: 'Italy', value: 5},
        ]
    },
    {
        id: 'agree',
        label: 'I agree with the TOS',
        type: 'checkbox'
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
