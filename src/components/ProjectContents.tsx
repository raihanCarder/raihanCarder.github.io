import Skill from "./ProjectSkill";

type ProjectContentProps = {
  title: string;
  description: string;
  image: string;
  skills: string[];
  completed: boolean;
};

export default function ProjectContent({
  title,
  description,
  image,
  skills,
  completed,
}: ProjectContentProps) {
  return (
    <>
      <div className="project-image">
        <img src={image} alt={title} loading="eager" />
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
    </>
  );
}
