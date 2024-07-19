import React from 'react';
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import skills from './components/skills';
import ResumePreview from './components/ResumePreview';


FunctionApp() 
{
    return(
        <div className='App'>
            <Header/>
            <PersonalInfo/>
            <Education/>
            <Experience/>
            <skills/>
            <ResumePreview/>
        </div>
    );
}