import projects from "./project.json"; // Import projects from the JSON file
import Image from "next/image";
import Link from "next/link";

const MyProjects = () => {
  return (
    <div className="h-fit m-4 md:m-8 lg:m-12">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-foreground text-background  shadow-md p-4 rounded-lg"
          >
            <Image
              src={project.imageURL}
              alt={project.title}
              width={1000}
              height={600}
              className="mb-4 shadow-lg"
            />
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="mb-4">{project.description}</p>
            {project.url ? (
              <Link
                href={`https://${project.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Visit Project
              </Link>
            ) : (
              <p>This project is not published.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
