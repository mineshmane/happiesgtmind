import { useState } from "react";

export default function ChildComponent(props) {

    const [fullData, setData] = useState({  firstName: "minesh mane",
        message: 'i got data from parent this recipets'})

    console.log(props);
    console.log(fullData);
    const sendUpdateToParent = () => {
        console.log(" its woking");
        let dta = {
            firstName: "minesh mane",
            message: 'i got data from parent this recipets'
        }

        setData(dta)

        props.dataFromChild(fullData)

    }
    return (
        <div>
            {props.UserData.firstName}

            <div>
                <h1>Data in child componet</h1>

                <button onClick={sendUpdateToParent}>SEND Datato parent from child </button>
            </div>

        </div>
    )
}