import React,{useState} from 'react';

const Education =()=>{
    const[education, setEducation] = useState({
        school: '',
        degree: '',
        graduationYear: ''

    });

    const handlechange =(e) =>{
        const { name,value} = e.target;
        setEducation({...education,[name]:value});
    };
    return (
        <div>
            <h2>Education</h2>
            <form>
                <label>
                    School:
                    <input type="text" name="school" value={education.school} onChange={handlechange}/>
                 </label>
                 <label>
                 Degree:
                 <input type='text'name='degree'value={education.degree.degree} onChange={handlechange}/>
                 </label>
                 <label>
                    GraduationYear:
                    <input type='text'name='graduationYear'value={education.graduationYear} onChange={handlechange}/>
                 </label>
            </form>
        </div>
    );
};
export default Education;