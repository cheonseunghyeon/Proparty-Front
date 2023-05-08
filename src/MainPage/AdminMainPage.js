import React, { useState } from "react";
import ProjectBox from "../../components/common/ProjectBox";
import { Mainpage,MainTitle } from "../../components/MainPage/Component";
import data2 from './data2.json'
import { Link } from "react-router-dom";
const AdminMainPage = () => {
    const [components, setComponents] = useState([]);
    function handleAddComponent() {
        setComponents([...components, <ProjectBox key={components.length} />]);
        console.log(components)
      }
      const count = Object.keys(data2.Project).length;
    
    return (
    <>
        <MainTitle> {count} 개의 대기 프로젝트가 있어요. </MainTitle>
        <Mainpage>
        {data2 && data2.Project.map(Project => (
            <Link key={Project.id} to={`/admin/Detail/${Project.id}`}>
              <ProjectBox 
                key={Project.id} 
                title={Project.ProjectTitle}
                explain={Project.TeamIntro}
                Git={Project.Git}
              />
            </Link>
        ))}
      </Mainpage>
      <MainTitle> 승인 프로젝트 </MainTitle>
    </>

    )
}
export default AdminMainPage


