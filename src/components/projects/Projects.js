import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="SEE MY WORK IN REAL LIVE USING THE DEMO LINKS"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="E-commerce Website"
          des=" An ecommerce market place my team and I worked on!"
          src={projectOne}
          github='https://github.com/DanquahSika/Marketplace-Web-App'
          demo='https://github.com/DanquahSika/Cinematopia'
        />
        <ProjectsCard
          title="Movie Streaming App"
          des=" A movie streaming that features top-rated and popular movies!"
          src={projectTwo}
          github='https://github.com/DanquahSika/Cinematopia'
          demo='https://cinematopia.vercel.app/'
        />
        <ProjectsCard
          title="Portfolio Website"
          des=" A portfolio website with an admin dashboard for updating skills, experiences and education!"
          src={projectThree}
          github='https://github.com/DanquahSika/tech_portfolio'
          demo='https://tech-portfolio-lyart.vercel.app/'
        />
      </div>
    </section>
  );
}

export default Projects