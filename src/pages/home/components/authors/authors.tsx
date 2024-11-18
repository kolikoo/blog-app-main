import React from "react";
import { AuthorProps } from "@/data";

const Author: React.FC<AuthorProps> = ({ authors, setAuthor }) => {
  return (
    <div  className="bg-neutral-500 p-5 rounded-xl">
      <h2>Authors List:</h2>
      <ul className="flex flex-col gap-3">
        {authors.map((author, index) => (
          <li
          style={{color:"gold"}}
            onClick={() => setAuthor(author)}
            key={index}
            className="cursor-pointer"
          >
            {author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Author;
