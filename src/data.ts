import bookImg from "!/book (1).png";
import peopleImg from "!/people.png";
import innovate from "!/innovation.png";
import learning from "!/coding.png";

export interface Item {
  title: string;
  author: string;
  description: string;
}
export interface BlogsProps {
  data: Item[];
}
export interface Author {
  id: string;
  author: string;
}

export interface AuthorProps {
  authors: Author[];
}
export type AuthorProp =
  | {
      id: string;
      author: string;
      profession: string;
      professionDescription: string;
      followers: number;
      following: number;
      biography: string;
    }
  | undefined;
export interface AboutDetailProps {
  author: AuthorProp;
}
export const data = [
  { id: "1", title: "theGreatGatsby" },
  { id: "2", title: "toKillAMockingbird" },
  { id: "3", title: "nineteenEightyFour" },
  { id: "4", title: "prideAndPrejudice" },
  { id: "5", title: "mobyDick" },
];

export const offers = [
  { title: "Rich Content", img: bookImg },
  { title: "Vibrant Community", img: peopleImg },
  { title: "Cutting-edge Topics", img: innovate },
  { title: "Collaborative Learning", img: learning },
];

export const authorDetailed = [
  { id: "1", title: "F. Scott Fitzgerald" },
  { id: "2", title: "Harper Lee" },
  { id: "3", title: "George Orwell" },
  { id: "4", title: "Jane Austen" },
  { id: "5", title: "Herman Melville" },
];
