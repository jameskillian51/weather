export default function IconWidget({title,unit, value1, type1, value2, type2,iconText,icon}){



    return (
      <div className="wind-info">
        <div className="section-heading">
          {icon && (
            <span className="heading-icon">
              <img src={icon} />
            </span>
          )}
          <span className="heading-text">{title}</span>
        </div>
        <div className="info-body wind-body">
          <div className="wind-inner">
            <div className="inner-info">
              <h1>{value1}</h1>
              <div className="wind-unit">
                <span className="unit">{unit}</span>
                <span className="unit-desc">{type1}</span>
              </div>
            </div>
            <div className="inner-info">
              <h1>{value2}</h1>
              <div className="wind-unit">
                <span className="unit">{unit}</span>
                <span className="unit-desc">{type2}</span>
              </div>
            </div>
          </div>
          {iconText && <div className="wind-direction">{iconText}</div>}
        </div>
      </div>
    );
}