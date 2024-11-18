export interface Item {
  title: string;
  author: string;
  description: string;
}
export interface BlogsProps {
  data: Item[];
}
export interface AuthorProps {
  authors: string[];
  setAuthor: React.Dispatch<React.SetStateAction<string>>;
}

export const data = [
  { title: "theGreatGatsby" },
  { title: "toKillAMockingbird" },
  { title: "nineteenEightyFour" },
  { title: "prideAndPrejudice" },
  { title: "mobyDick" },
];
