import { useState } from "react";
import React,  {useState} from 'react';

const PersonalInfo =()=> {
    const[info,setInfo] = useState({
        name: '',
        email: '',
        phone: ''

    });

    const handlechange =(e) =>{
        const {name,value} = e.target;
        setInfo({...info,[name]:value});
    };

    return(
        <div>
            <h2>PersonalInformation</h2>
            <form>
                <label>
                    Name:
                    <input type="text"name="name" value={info.name} onChange={handlechange}/>
                </label>
                <label>
                    Email:
                    <input type="email"name="email"value={info.email} onChange={handlechange} />
                </label>
                <label>
                    phone:
                    <input type="tell"name="phone"value={info.phone} onChange={handlechange} />
                </label>
            </form>
        </div>
    );

};
export default PersonalInfo;