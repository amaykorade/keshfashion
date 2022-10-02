


import React, { useState, useEffect } from 'react';

import Axios from "axios";

// function Form() {
//     // const url = "http://127.0.0.1:8000/api/addstyle"
//     const [data, setData] = useState({
//         style: "",

//     })
//     const [isSubmit, setIsSubmit] = useState(false);



//     useEffect(() => {
//         Axios.post('http://127.0.0.1:8000/api/addstyle', {
//             style: data.style
//         }).then((res) => {
//             console.log(res.data)
//         })
//     })
//     const handle = (e) => {
//         setData({
//             ...data,
//             [e.target.name]: e.target.value
//         }
//         )



//     }
//     const handleSubmit = (event) => {
//         event.preventDefault()
//         setIsSubmit(true)
//     }

//     return (
//         <div>
//             <form onSubmit={(e) => handleSubmit(e)} >
//                 <input onChange={handle} id="style" value={data.style} name="style" placeholder='style' type="text" ></input>
//                 <button onClick={handleSubmit} >Submit</button>
//             </form>
//         </div>
//     );
// }



function Form() {
    const [style, setName] = useState("");

    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://127.0.0.1:8000/api/addstyle", {
                method: "POST",
                body: JSON.stringify({
                    style: style,
                }),
                headers: {
                    Accept: "application/json",
                    "content-type": "application/json"
                }
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setName("");
                // setEmail("");
                setMessage("User created successfully");
            } else {
                setMessage("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={style}
                    placeholder="style"
                    onChange={(e) => setName(e.target.value)}
                />

                <button type="submit">Create</button>

                <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
        </div>
    );
}


export default Form;