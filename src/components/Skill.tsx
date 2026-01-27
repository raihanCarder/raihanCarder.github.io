type SkillProps = {
  name: string
}

function Skill({ name }: SkillProps) {
  return <span className="skill-pill">{name}</span>
}

export default Skill
