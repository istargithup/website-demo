import React,{useState} from 'react';

const Experience =() =>{
    const[experince,setExperience] = useState({
        company: '',
        position: '',
        startDate: '',
        endDate: '',
    });
    const handlechange =(e) =>{
        const {name,value} = e.target;
        setExperience({...experince,[name]:value});
    };
    return(
        <div>
            <h2>Work Experience</h2>
            <form>
                <label>
                    company:
                    <input type='text'name='company'value={experince.company} onChange={handlechange}/>
                </label>
                <label>
                    position:
                    <input type='text'name='position'value={experince.position} onChange={handlechange}/>
                </label>
                <label>
                    startDate:
                    <input type='text'name='startDate'value={experince.startDate} onChange={handlechange}/>
                </label>
                <label>
                    EndDate:
                    <input type='text'name='endDate'value={experince.endDate} onChange={handlechange}/>
                </label>
            </form>
        </div>
    );
};
export default Experience;
