import Skill from "./ProjectSkill";

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  skills: string[];
  completed: boolean;
  link: string;
};

function Project({
  title,
  description,
  image,
  skills,
  completed,
  link,
}: ProjectProps) {
  return (
    <a className="project-card" href={link} target="_blank" rel="noreferrer">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-body">
        <div className="project-meta">
          <h3>{title}</h3>
          <span
            className={`project-status ${completed ? "done" : "in-progress"}`}
          >
            {completed ? "Completed" : "In Progress"}
          </span>
        </div>
        <p>{description}</p>
        <div className="skills-row">
          {skills.map((skill) => (
            <Skill key={skill} name={skill} />
          ))}
        </div>
      </div>
    </a>
  );
}

export default Project;
