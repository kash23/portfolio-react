import profileImg from '../images/akash.jpg'; 
import Resume from '../Resume/Akash_C_Dotnet_Fullstack_Developer.pdf';
import naukri from '../images/naukri.png';
import { FaLinkedin, FaFileAlt, FaGithub } from 'react-icons/fa';


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar">
              <img className='side-profile' src={profileImg} alt="Profile" style={{ width: "100%", borderRadius: "50%" }} />
              <h2>Akash C</h2>
              <p>Full Stack .NET Developer</p>
              <p>akash.akey00@gmail.com</p>
              <p>7448792885</p>
      </div>

       <div className='d-flex gap-4 justify-content-center align-items-center'> 
          <div>
            <a href="https://www.linkedin.com/in/akash-c-41a19b215" target="_blank" rel="noopener noreferrer">
              <FaLinkedin style={{ fontSize: "40px", color: "#0A66C2"  }} />
            </a>
          </div>

          <div>
            <a href="https://github.com/kash23" target="_blank" rel="noopener noreferrer">
              <FaGithub style=
              {{ fontSize: "40px",
                 color: "#181717",
                 borderRadius: "60%",
                 boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }} />
            </a>
          </div>
          
          <div>
            <a href={Resume} target="_blank" rel="noopener noreferrer">
              <FaFileAlt style=
              {{ fontSize: "40px",
                 color: "red"}} />
            </a>
          </div>

          <div>
            <a href="https://www.naukri.com/mnjuser/profile" target="_blank" rel="noopener noreferrer">
              <img
                src={naukri}
                alt="naukri"
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "contain",
                  borderRadius: "50%",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)"
                }}
              />
            </a>
          </div>


      </div>
    </div>
  );
}

export default Sidebar;
