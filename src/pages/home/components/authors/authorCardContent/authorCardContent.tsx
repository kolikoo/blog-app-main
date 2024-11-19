
interface AuthorCardContentProps {
  author: string;
  onClick: () => void;
}

const AuthorCardContent: React.FC<AuthorCardContentProps> = ({
  author,
  onClick,
}) => {
  return (
    <li style={{ color: "gold" }} onClick={onClick} className="cursor-pointer">
      {author}
    </li>
  );
};

export default AuthorCardContent;
