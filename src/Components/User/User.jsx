import { Link } from "react-router-dom";
import "./User.css";

const User = ({ user }) => {
  const { id, name, email, phone } = user;

  return (
    <div className="border">
      <h2> {name}</h2>
      <h4>Phone: {phone}</h4>
      <h4>Email: {email}</h4>
      <Link to={`/users/${id}`}>
        <button>Show Details</button>
      </Link>
    </div>
  );
};

export default User;
