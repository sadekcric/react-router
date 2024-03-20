import { useLoaderData } from "react-router-dom";

const ShowDetails = () => {
  const user = useLoaderData();

  return (
    <div>
      <h1>Name: {user.name}</h1>
    </div>
  );
};

export default ShowDetails;
