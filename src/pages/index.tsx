import WelcomeSection from '../Components/WelcomeSection'
import Skills from '../Components/Skills'
import WorkExprerience from '../Components/WorkExperience'
import Projects from '../Components/Projects'
import EducationTraining from '../Components/EducationTraining'
import Contactme from '../Components/Contactme'
export default function Home() {
  return (
    <div
      className={`   justify-items-center bg-gradient-to-br from-gray-900 to-black  ]`}
    >
  
       <WelcomeSection/>
       <Skills/>
       <Projects/>
       <WorkExprerience/>
    
       <EducationTraining/>
       <Contactme/>

   

    
    </div>
  );
}
