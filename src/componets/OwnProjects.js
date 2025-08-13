import { useEffect, useState } from "react";

export default function OwnProjects() {
const [platform, setPlatform] = useState("");
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/windows phone/i.test(userAgent)) {
      setPlatform("Windows Phone");
    } else if (/android/i.test(userAgent)) {
      setPlatform("Android");
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setPlatform("iOS");
    } else if (/Macintosh|MacIntel|MacPPC|Mac68K/.test(navigator.platform)) {
      setPlatform("MacOS");
    } else if (/Win/.test(navigator.platform)) {
      setPlatform("Windows");
    } else {
      setPlatform("Unknown");
    }
  }, []);

  return (
    <div>
      <h3>Key Projects & Contributions</h3>
      <ul>
        <p>Platform: {platform}</p>
        <br/>
        <li>
          <strong>Running Plan App (.NET MAUI):</strong> Developed a cross-platform running app using .NET MAUI. 
          It generates personalized 4-week training plans for 5K, 10K, half marathon, and full marathon distances. 
          Includes PDF export, Firebase OTP authentication via REST API, dynamic UI with expand/collapse workout views, 
          and data binding through MVVM.
        </li>
         <br />
        <li>
          <strong>React Portfolio:</strong> 
          Built a dynamic, single-page personal portfolio using React.js. 
          Features include smooth scrolling, project showcase, filterable skills, and responsive design using Tailwind CSS.
        </li>
         <br />
        <li>
          <strong>HTML/CSS/Bootstrap Classic Portfolio:</strong> 
          Designed an earlier version of my portfolio using pure HTML5, CSS3, and Bootstrap 4. 
          Focused on semantic layout and responsive design principles.
        </li>
      </ul>
    </div>
  );
}