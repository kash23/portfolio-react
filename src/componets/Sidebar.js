import profileImg from '../images/akash.jpg'; 

function Sidebar() {
  return (
    <div className="sidebar">
      <img className='side-profile' src={profileImg} alt="Profile" style={{ width: "100%", borderRadius: "50%" }} />
      <h2>Akash C</h2>
      <p>Full Stack .NET Developer</p>
      <p>akash.akey00@gmail.com</p>
      <p>7448792885</p>
    </div>
  );
}

export default Sidebar;
