import projects from "./project.json"; // Import projects from the JSON file
import Image from "next/image";
import Link from "next/link";

const MyProjects = () => {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-lg">
            <Image
              src={project.imageURL}
              alt={project.title}
              width={600}
              height={400}
              className="rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <Link
              href={`https://${project.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Visit Project
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
