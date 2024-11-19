import React from "react";
import { AuthorProps } from "@/data";
import AuthorCard from "./authorCardContent/authorCardContent";

const Author: React.FC<AuthorProps> = ({ authors, setAuthor }) => {
  return (
    <div className="bg-neutral-500 p-5 rounded-xl">
      <h2>Authors List:</h2>
      <ul className="flex flex-col gap-3">
        {authors.map((author, index) => (
          <AuthorCard
            key={index}
            author={author}
            onClick={() => setAuthor(author)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Author;
