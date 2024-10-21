import Image from "next/image";

const Article = () => {
  return (
    <div className="ml-4 mr-4">
      <div className="flex justify-center">
        <Image
          alt="Profile picture"
          src="/profile.png"
          className="rounded-full object-cover m-12"
          height={250}
          width={250}
        />
      </div>
      <h1 className="text-3xl">Who am I?</h1>
      <p className="text-xl mt-5">
        I&apos;m Zack, a Frontend Developer student.
      </p>
      <p className="mt-3 text-xl">
        Currently I&apos;m more than half way through my program at IT-Högskolan
        (Göteborg).
      </p>
    </div>
  );
};

export default Article;
