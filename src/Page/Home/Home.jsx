import React from 'react';
import Hero from './HomeComponents/Hero';
import Skills from './HomeComponents/Skills';
import Certification from './HomeComponents/Certification';
import ProjectsCard from '../My Projects/ProjectsCard';
<<<<<<< HEAD
import Blogs from '../My Blogs/Blogs';
=======
>>>>>>> f2942c2959d9ba4a7028f128682967e8beb1d885
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
<<<<<<< HEAD
            <Blogs />
=======
>>>>>>> f2942c2959d9ba4a7028f128682967e8beb1d885
            <Client />
            <Pricing />
            <ContactMe />
        </div>
    );
};

export default Home;
