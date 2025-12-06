import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home";
import Root from "./Layout/Root";
import Skills from "./Page/Skills Page/SkillsPage";
import ProjectsCard from "./Page/My Projects/ProjectsCard";
<<<<<<< HEAD
import BlogsCard from "./Page/Home/HomeComponents/BlogsCard";
=======
>>>>>>> f2942c2959d9ba4a7028f128682967e8beb1d885
import Client from "./Page/Client/Client";
import Pricing from "./Page/Pricing/Pricing";
import ContactMe from "./Page/Contact Me Page/ContactMePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root></Root>}>
          <Route index element={<Home />} />
          <Route path="skills" element={<Skills></Skills>}></Route>
          <Route path="myprojects" element={<ProjectsCard></ProjectsCard>}></Route>
<<<<<<< HEAD
          <Route path="myblogs" element={<BlogsCard></BlogsCard>}></Route>
=======
>>>>>>> f2942c2959d9ba4a7028f128682967e8beb1d885
          <Route path="client" element={<Client></Client>}></Route>
          <Route path="pricing" element={<Pricing></Pricing>}></Route>
          <Route path="contactme" element={<ContactMe></ContactMe>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
