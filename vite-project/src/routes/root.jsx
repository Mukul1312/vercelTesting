import { Link } from "react-router-dom";

export default function Root() {
  console.log(import.meta.env);
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <nav>
          <ul>
            <li>
              <Link to={`/contacts/1`}>Your Profile</Link>
            </li>
            <li>
              <Link to={`/contacts/2`}>Your Friends</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}
