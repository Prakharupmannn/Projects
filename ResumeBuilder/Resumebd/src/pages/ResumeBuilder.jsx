import React, { useState } from 'react'

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

    const [skills,setSkills] = useState([]);

    const [projects,setProjects] = useState([]);

  return (
    <div>

    </div>
  )
}

export default ResumeBuilder