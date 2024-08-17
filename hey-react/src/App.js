import './App.css';
import Navbar from './components/Navbar';
import Mainbody from './components/Mainbody';
import Footer from './components/Footer';


function App() {
  const aboutTitle = "About Me";
  const aboutBody = " iloment antil its co yel a sein it ie Think and pen use and rece in the industre Wit ue not eritong weing a presigious companies.prig t protesing lented lue so is card a inition origina techi and ey ore into wits her feinal. Serie louise ener ovare handy.C the wo at sonaim am enem alone coatings in pop. This en i alo, ane amongie eric peris end meredit i had eyes motor momingt impact.Thank you for this opportunity to introduce myself, and I look forward to engaging with all of you in the exciting world of software development and entrepreneurship.";


  const skillsTitle = "Skills";
  const skillsBody = "A versatile and seasoned Full Stack Developer with over 1 years of comprehensive experience in software development. Proficient in MERN (MongoDB, Express.js, React.js, Node.js) Stack and  iloment antil its co yel a sein it ie Think and pen use and rece in the industre Wit ue not eritong weing a presigious companies.prig t protesing lented lue so is card a inition origina techi and ey ore into wits her feinal. Serie louise ener ovare handy.C the wo at sonaim am enem alone coatings in pop. This en i alo, ane amongie eric peris end meredit i had eyes motor momingt impact.Thank you for this opportunity to introduce myself, and I look forward to engaging with all of you in the exciting world of software development and entrepreneurship.";

  const qualificationTitle = "Qualification";
  const qualificationBody = "A versatile and seasoned Full Stack Developer with over 1 years of comprehensive experience in software development. Proficient in MERN (MongoDB, Express.js, React.js, Node.js) Stack and  iloment antil its co yel a sein it ie Think and pen use and rece in the industre Wit ue not eritong weing a presigious companies.prig t protesing lented lue so is card a inition origina techi and ey ore into wits her feinal. Serie louise ener ovare handy.C the wo at sonaim am enem alone coatings in pop. This en i alo, ane amongie eric peris end meredit i had eyes motor momingt impact.Thank you for this opportunity to introduce myself, and I look forward to engaging with all of you in the exciting world of software development and entrepreneurship.";


  const projectTitle = "Projects";
  const projectBody = "A versatile and seasoned Full Stack Developer with over 1 years of comprehensive experience in software development. Proficient in MERN (MongoDB, Express.js, React.js, Node.js) Stack and  iloment antil its co yel a sein it ie Think and pen use and rece in the industre Wit ue not eritong weing a presigious companies.prig t protesing lented lue so is card a inition origina techi and ey ore into wits her feinal. Serie louise ener ovare handy.C the wo at sonaim am enem alone coatings in pop. This en i alo, ane amongie eric peris end meredit i had eyes motor momingt impact.Thank you for this opportunity to introduce myself, and I look forward to engaging with all of you in the exciting world of software development and entrepreneurship.";


  return (
    <div className="App">
      <Navbar />
      <Mainbody title={aboutTitle} body={aboutBody} image="true"/>
      <Mainbody title={skillsTitle} body={skillsBody} image="false"/>
      <Mainbody title={qualificationTitle} body={qualificationBody} image="false"/>
      <Mainbody title={projectTitle} body={projectBody} image="false"/>

      <Footer />
     
    </div>
  );
}

export default App;
