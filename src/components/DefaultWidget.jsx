export default function DefaultWidget({ title, value, text, icon }) {
  return (
    <div className="default-info">
      <div className="section-heading">
        {icon && (
          <span className="heading-icon">
            <img src={icon} />
          </span>
        )}
        <span className="heading-text">{title}</span>
      </div>
      <div className="info-body">
        <h1>{value}</h1>

        <p>{text}</p>
      </div>
    </div>
  );
}
