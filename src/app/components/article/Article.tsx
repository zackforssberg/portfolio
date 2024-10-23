import Image from "next/image";
import EmailButton from "../EmailButton";

const Article = () => {
  return (
    <div className="ml-4 mr-4 md:flex items-center">
      <div className="flex justify-center">
        <Image
          alt="Profile picture"
          src="/profile.png"
          className="rounded-full object-cover m-12"
          height={250}
          width={250}
        />
      </div>
      <div>
        <h1 className="text-3xl">Who am I?</h1>
        <p className="text-xl mt-5">
          I&apos;m Zack, a Frontend Developer student.
        </p>
        <p className="mt-3 mb-3 text-xl">
          Currently I&apos;m more than half way through my program at
          IT-Högskolan (Göteborg).
        </p>
        <EmailButton />
      </div>
    </div>
  );
};

export default Article;
