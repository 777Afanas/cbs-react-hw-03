import "./Sidebar.css";
import data from "../../data/data.json";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <nav>
        <ul>
          {data.map((obj, idx) => (
            <li key={idx}>
              <a href={obj.href}>{obj.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
