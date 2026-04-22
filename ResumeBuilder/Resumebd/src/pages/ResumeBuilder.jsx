import React, { useEffect, useState } from 'react'

const ResumeBuilder = () => {

    const [personal, setPersonal] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        linkedin: "",
        github: "",
    });

    const [skills,setSkills] = useState([]);

    const [education,setEduction] = useState([]);

    const [experience,setExperience] = useState([]);

    const [projects,setProjects] = useState([]);

    useEffect(()=>{
        const data = { personal, skills, education, experience, projects };
        localStorage.setItem("resumeData", JSON.stringify(data))
    },[personal, skills, education, experience, projects]);

  return (
    <div>
        hiiii
    </div>
  )
}

export default ResumeBuilder