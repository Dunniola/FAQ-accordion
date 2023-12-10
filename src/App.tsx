import { useState, useRef, useEffect } from "react";

import "./App.css";
import  "../public/images/background-pattern-desktop.svg";
import "../public/images/background-pattern-mobile.svg";
import "../public/images/icon-minus.svg";
import  "../public/images/icon-plus.svg";
import iconStar from "../public/images/icon-star.svg";
const FAQItem = ({question, answer, toggle, onToggle}:any) => {
  const[heightEl, setHeightEl] = useState<string | undefined>(undefined);
  const refHeight = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (refHeight.current) {
      setHeightEl(`${refHeight.current.scrollHeight}px`);
    }else{
      setHeightEl(undefined);
    }
  }, []);
 
  
  return (
    
      <div>
        <div className="flex">
          <h4 className="question">{question}</h4>
          <button onClick={()=> onToggle(question)} className="button">
              
            <img src={toggle===question ? "../public/images/icon-minus.svg": "../public/images/icon-plus.svg"} alt=""></img>
      
          </button>
        </div>
        <div
          className={toggle === question ? 'answer' : ''}
          style={{ height: toggle === question ? `${heightEl}` : '0px' }}
          ref={refHeight}
        >
          <p className={toggle === question  ? 'non-active' : 'active'}>{answer}</p>
        </div>
      </div>
    );
  };



const App = () => {
  const[toggle, setToggle] = useState(null);

  const handleToggle = (question: null) =>{
    setToggle((prevToggle)=> (prevToggle === question ? null : question));
  }
  return (
    <div>
      <div className="main-container">
        <div className="container ">
          <img src={iconStar} alt=""></img>
          <h1> FAQs</h1>
        </div>
        
        <div className="one">
          <FAQItem
            question="What is Frontend Mentor, and how will it help me?"
            answer="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
            toggle={toggle}
            onToggle={handleToggle}
          />
        </div>

       <hr />

        <div className="two">
          <FAQItem
            question="Is Frontend Mentor free?"
            answer="Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
            toggle={toggle}
            onToggle={handleToggle}
          />
             
        </div>
        <hr />

        <div className="three">
          <FAQItem
            question="Can I use Frontend Mentor projects in my portfolio?"
            answer="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
            toggle={toggle}
            onToggle={handleToggle}
          />
        </div>
        <hr />

        <div className="four">
          <FAQItem
            question="How can I get help if I'm stuck on a Frontend Mentor challenge?"
            answer="The best place to get help is inside Frontend Mentor's Discord community. There's a help where you can ask questions and seek support from other community members."
            toggle={toggle}
            onToggle={handleToggle}
          />
        </div>
      </div>
    </div>
  );
};

export default App