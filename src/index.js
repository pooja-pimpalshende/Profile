import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Java",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="avatar">
      <img style={{ width: "442px" }} src="./image.jpeg" alt="image" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Pooja Pimpalshende</h1>
      <p>
        Frontend web developer , when not coding, I like to watch Cookery shows
        on TV (and eat), or to just enjoy spending time with family.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {/* <Skill name="React" emoji="💪" color="blue" />
      <Skill name="HTML+CSS" emoji="💪" color="orange" />
      <Skill name="JavaScript" emoji="💪" color="yellow" />
      <Skill name="Jest" emoji="👶" color="orangered" /> */}
      {skills.map((skill) => (
        <Skill
          key={skill.skill}
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
        />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ background: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
