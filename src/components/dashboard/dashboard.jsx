// import React from 'react';

import { useEffect } from "react"

// export default class Home extends React.Component {

//     //data event binding

//     render() {
//         return (
//             <div>
//                 <h1>home page</h1>
//                 <div>
//                     <h4>display lsit of meployee</h4>
//                 </div>

//             </div>

//         )
//     }

// }
// import * as React from 'react';

export default function Home() {

    useEffect(()=>{
        console.log(" continues clling");
    },[])
    useEffect(()=>{
        console.log(" continues clling");
    },[])

    return (
        <div>
            table 
            new thing using functions
          
        </div>
    )
}