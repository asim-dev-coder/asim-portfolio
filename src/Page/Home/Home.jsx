import React from 'react';
import Hero from './HomeComponents/Hero';
import Skills from './HomeComponents/Skills';
import Certification from './HomeComponents/Certification';
import ProjectsCard from '../My Projects/ProjectsCard';
import Client from '../Client/Client';
import Pricing from '../Pricing/Pricing';
import ContactMe from './HomeComponents/ContactMe';
// ✅ import the image

const Home = () => {
    return (
        <div>
            <div className='my-7'><Hero /></div>
            <Certification />
            <Skills />
            <ProjectsCard />
            <Client />
            <Pricing />
            <ContactMe />
        </div>
    );
};

export default Home;
