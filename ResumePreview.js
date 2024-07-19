import React from "react";
import Experience from "./Experience";

const ResumePreview =({ PersonalInfo,education,experirnce,skills}) =>{
    return(
        <div>
            <h2>ResumePreview</h2>
            <div>
                <h3>PersonalInfo</h3>
                <p>Name: {PersonalInfo.name} </p>
                <p>Email: {PersonalInfo.email} </p>
                <p>phone: {PersonalInfo.phone} </p>
            </div>
            <div>
                <h3>Education</h3>
                <p>School: {education.school} </p>
                <P>Degree: {education.degree} </P>
                <p>GraduationYear: {education.graduationYear} </p>
            </div>
            <div>
                <h3>Work Experience</h3>
                <p>Company: {experirnce.company} </p>
                <p>Position:{experience.position} </p>
                <p>StartDate: {experirnce.startDate} </p>
                <p>EndDate: {experirnce.endDate} </p>
            </div>
            <div>
                <h3>skills</h3>
                <p>skills</p>
            </div>
        </div>   
    );    
};
export default ResumePreview;