import toast from "react-hot-toast";
import ProjectContent from "./ProjectContents";

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
  const content = (
    <ProjectContent
      title={title}
      description={description}
      image={image}
      skills={skills}
      completed={completed}
    />
  );

  const toastSuccess = () => {
    toast.success("Not live yet… coming soon 👀", {
      style: {
        border: "1px solid rgba(15, 23, 42, 0.18)",
        padding: "14px 16px",
        color: "#0f172a",
        background: "#f8fafc",
        boxShadow: "0 12px 30px rgba(15, 23, 42, 0.12)",
      },
      iconTheme: {
        primary: "#1d4ed8",
        secondary: "#fff1f2",
      },
    });
  };

  if (!link) {
    return (
      <a onClick={toastSuccess} className="project-card">
        {content}
      </a>
    );
  }

  return (
    <a className="project-card" href={link} target="_blank" rel="noreferrer">
      {content}
    </a>
  );
}

export default Project;
