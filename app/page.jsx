import { LikeButton } from "./LikeButton";

function Header({ title }) {
  console.log(title);
  return <h1>{title ? title : "Default Title"}</h1>;
}

export default function HomePage() {
  const names = ["Alice Curry", "Bob Marley", "Charlie Chaplin"];

  return (
    <>
      <div>
        <Header title="Develop. Preview. Ship." />
        <ul>
          {names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <LikeButton />
      </div>
    </>
  );
}
