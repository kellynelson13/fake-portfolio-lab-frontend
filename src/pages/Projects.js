import React, { useState, useEffect } from "react";

const Projects = (props) => {
  const [projects, setProjects] = useState(null);

  const getProjects = async () => {
    const response = await fetch(props.URL + "projects");
    const data = await response.json();
    setProjects(data);
  };

  useEffect(() => {
    getProjects()
  }, [])

  const loaded = () => {
    return projects.map((proj) => {
      const { name, live, git, image } = proj;
      return (
        <div>
          <h1>{name}</h1>
          <a href={git}>
          <button>Github</button>
        </a>
        <a href={live}>
          <button>Live Site</button>
        </a>
          <img style={{width:"90%"}}src={image} alt={name}/>
        </div>
      );
    });
  };

  return projects ? loaded() : <h1>Loading . . .</h1>
};

export default Projects;
