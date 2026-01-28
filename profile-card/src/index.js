import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

// console.log(profileDetails.skills[2]);

const skilllist = [
  {
    skill: "HTML & CSS",
    level: "Expert",
    color: "yellow",
  },
  {
    skill: "React",
    level: "Intermediate",
    color: "orange",
  },
  {
    skill: "JavaScript",
    level: "Intermediate",
    color: "orange",
  },
  {
    skill: "Wordpress",
    level: "Expert",
    color: "skyblue",
  },
  {
    skill: "PHP",
    level: "Intermediate",
    color: "orange",
  },
  {
    skill: "MYSQL",
    level: "Intermediate",
    color: "orange",
  },
  {
    skill: "MongoDB",
    level: "",
    color: "green",
  },
];

function App() {
  return (
    <section className="flex flex-col justify-center items-center h-[70vh]">
      <main className="w-72 border-[3px] border-solid border-black">
        <ProfileImage />
        <ProfileDesc />
        <Skillset />
      </main>
    </section>
  );
}

function ProfileImage() {
  return <img src="./images/me.jpg" alt="name" />;
}

function ProfileDesc() {
  return (
    <aside className="mx-2">
      <h1 className="text-2xl tracking-wider">Dayaash G</h1>
      <p className="leading-[1.4em]">
        Turning coffee into code. Currently leveling up in JS & React.
      </p>
    </aside>
  );
}

function Skillset() {
  const skills = skilllist;
  const numOfSkills = skills.length;
  // console.log(numOfSkills);
  // console.log(skills);

  return (
    <div>
      {numOfSkills > 0 ? (
        <ul className="inline-flex flex-wrap gap-1 mt-2 px-1 py-1">
          {skills.map((s) => (
            <Skill
              skill={s.skill}
              level={s.level}
              color={s.color}
              key={s.skill}
            />
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <li
      className="text-[14px] p-1 rounded-sm"
      style={{ backgroundColor: color }}
    >
      <span>
        {skill}{" "}
        {(level === "Expert" && "💪") ||
          (level === "Intermediate" && "🧐") ||
          (level === "" && "🎬")}
      </span>
    </li>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
