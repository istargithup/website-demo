import React,{useState} from "react";
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import skills from './components/skills';
import ResumePreview from './components/ResumePreview';

function App() {
    const[PersonalInfo,setPersonalInfo] =useState({});
    const[education,setEducation] = useState({});
    const[experience,setExperience] = useState({});
    const[skills,setSkills] = useState('');
    return(
        <div className="App">
            <Header/>
            <PersonalInfo setPersonalInfo={setPersonalInfo}/>
            <Education setEducation={setEducation}/>
            <Experience setExperience={setExperience}/>
            <skills setSkills={setSkills}/>
            < ResumePreview
            PersonalInfo={PersonalInfo}
            education={education}
            experience={experience}
            skills={skills}
                />
                </div>
            );
            
            }
            export default App;
            
    
