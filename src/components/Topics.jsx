export default function Topics({ data }) {
  return (
    <div>
      <ul>
        {data.map((obj, idx) => (
          <li key={idx}>
            <a href={obj.href}>{obj.title}</a>
          </li>
        ))}
      </ul>
      </div>
    
  );
}
