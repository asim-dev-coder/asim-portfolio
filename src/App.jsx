import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home";
import Root from "./Layout/Root";
import Skills from "./Page/Skills Page/SkillsPage";
import ProjectsCard from "./Page/My Projects/ProjectsCard";
import BlogsCard from "./Page/Home/HomeComponents/BlogsCard";
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
          <Route path="myblogs" element={<BlogsCard></BlogsCard>}></Route>
          <Route path="client" element={<Client></Client>}></Route>
          <Route path="pricing" element={<Pricing></Pricing>}></Route>
          <Route path="contactme" element={<ContactMe></ContactMe>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
