import React,{useState} from 'react';

const skills=() => {
    const[skills,setSkills] = useState('');

    const handlechange =(e) =>{
        setSkills(e.target.value);
    };
    return(
        <div>
            <h2>skills</h2>
            <form>
                <label>
                    skills:
                    <input type='text'value={skills} onChange={handlechange}/>
                </label>
            </form>
        </div>
    );
};
export default skills;