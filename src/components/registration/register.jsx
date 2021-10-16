import React from 'react';
import TextField from '@mui/material/TextField';
import './register.css'
import UserService from '../../service/userService/user';
import ChildComponent from '../dashboard/childComp'
export default class Register extends React.Component {
    constructor() {
        super()

        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        }
    }
    //data event binding

    handleChnage = (e) => {
        console.log(e.target.value);

        this.setState({
            [e.target.name]: e.target.value
        })

    }





    formSubmit = (e) => {

        console.log(this.state);
        let reqPayload = {
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,

            "empId": "8",
            "password": "123123",
            "address": "pune",
            "company": 'new bridge',
            "dob": '12345'

        }

        UserService.RegisterSerivce(reqPayload).then((data) => {
            console.log(data);

        }).catch((error) => {
            console.log(error);
        })


    }

childDataRecivedHandler=(e)=>{
    console.log(" data i parent ");
    console.log(e);
    //next getAllemployee

}

    componentDidMount() {
        console.log(" it is calling after render on laodinf broser");
    }

    render() {

        return (
            <div>
                <h1>Register page</h1>

                <div className="container">
                    <div className="mainbox">
                        <TextField id="outlined-basic" name="firstName" type="text" placeholder="firstName" value={this.state.firstName} onChange={this.handleChnage} label="firstName" variant="outlined" />
                        <TextField id="outlined-basic" name="lastName" type="text" placeholder="lastName" value={this.state.lastName} onChange={this.handleChnage} label="lastName" variant="outlined" />
                    </div>
                    <div>
                        <TextField id="outlined-basic" name="email" type="text" placeholder="email" value={this.state.email} onChange={this.handleChnage} label="email" variant="outlined" />
                    </div>
                </div>
                <div>
                    <button onClick={this.formSubmit}> submit

                    </button>

                </div>
                <ChildComponent dataFromChild={this.childDataRecivedHandler} UserData={this.state}></ChildComponent>

            </div>


        )
    }

}