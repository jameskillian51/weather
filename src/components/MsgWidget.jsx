export default function MsgWidget({header,subtext,icon}){



    return (
      <section className="welcome-body">
        <div className="welcome-card">
          <div className="welcome-img">
            <img src={icon} alt="" />
          </div>
          <div className="welcome-text">
            <p>{header}</p>
            <p>
             {subtext}
            </p>
          </div>
        </div>
      </section>
    );
}