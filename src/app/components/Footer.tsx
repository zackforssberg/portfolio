import EmailButton from "./EmailButton";
import { RequestCvButton } from "./RequestCvButton";

import styles from "./../styles/gradient.module.css";

const Footer = () => {
  return (
    <div
      className={`pl-4 pr-4 md:pl-8 md:pr-8 lg:pl-12 lg:pr-12 pb-8 min-h-64 text-neutral-950 ${styles.gradient}`}
    >
      <div className="pt-8">
        <h2 className="text-2xl">Feel free to say hi</h2>
        <p className="text-xl pt-3">
          I&apos;m always eager to engage with like-minded people in the tech
          world.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 pt-10">
        <RequestCvButton />
        <EmailButton />
      </div>

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
