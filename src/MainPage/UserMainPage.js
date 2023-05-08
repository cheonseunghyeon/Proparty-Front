/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import ProjectBox from "../../components/common/ProjectBox";
import { Mainpage,MainTitle,MainLink } from "../../components/MainPage/Component";
import data from './data.json'
import { Link } from "react-router-dom";
const UserMainPage = () => {
    const [components, setComponents] = useState([]);

    function handleAddComponent() {
        setComponents([...components, <ProjectBox key={components.length} />]);
        console.log(components)
      }

    const count = Object.keys(data.Project).length;

    return (
    <>
        <MainTitle> {count} 개의 프로젝트가 있어요. </MainTitle>
        <Mainpage>
        {data && data.Project.map(Project => (
            <Link key={Project.id} to={`/detail/${Project.id}`}>
              <ProjectBox 
                key={Project.id} 
                title={Project.ProjectTitle}
                explain={Project.TeamIntro}
                Git={Project.Git}
              />
            </Link>
        ))}
      </Mainpage>
        
    </>

    )
}
export default UserMainPage


