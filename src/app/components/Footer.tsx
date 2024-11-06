import EmailButton from "./EmailButton";

const Footer = () => {
  return (
    <div className="pl-4 pr-4 bg-emerald-400 min-h-64">
      <EmailButton />

      <ul className="text-xl underline underline-offset-4 flex space-x-4 mt-6">
        <li>
          <a
            href="https://www.linkedin.com/in/zack-forssberg-9b9711289/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/zackforssberg"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
