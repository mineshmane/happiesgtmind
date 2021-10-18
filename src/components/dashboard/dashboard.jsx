import React from 'react';
import data from './data'
import DateTimePicker from 'react-datetime-picker';

// import { useEffect } from "react"
// import TextField from '@mui/material/TextField';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DatePicker from '@mui/lab/DatePicker';
// import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
export default class Home extends React.Component {

    //data event binding
    constructor() {
        super()

        this.state = {
            Employees: [],
            value: ''
        }
    }

    componentDidMount() {
        console.log(data);
        this.setState({ Employees: data, value: new Date() })
    }

    onChange=()=>{

    }

    render() {
        return (
            <div>
                <h1>home page</h1>
                <div>

                    <DateTimePicker
                        onChange={this.onChange}
                        value={this.state.value}
                    />
                    {/* <DatePicker
                        disableFuture
                        label="Responsive"
                        openTo="year"
                        views={['year', 'month', 'day']}
                        value={this.state.value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    /> */}
                    {/* <DatePickerComponent placeholder="Enter Date here:"></DatePickerComponent> */}
                    <table>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>gender</th>
                            <th>email</th>
                        </tr>
                        <tbody>
                            {this.state.Employees.map((item, i) => (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.sallary}</td>
                                    <td>{item.gender}</td>



                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>

            </div>

        )
    }

}
// import * as React from 'react';

// export default function Home() {

//     useEffect(()=>{
//         console.log(" continues clling");
//     },[])
//     useEffect(()=>{
//         console.log(" continues clling");
//     },[])

//     return (
//         <div>
//             table 
//             new thing using functions

//         </div>
//     )
// }