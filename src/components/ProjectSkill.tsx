type SkillProps = {
  name: string;
};

function ProjectSkill({ name }: SkillProps) {
  return <span className="skill-pill">{name}</span>;
}

export default ProjectSkill;
