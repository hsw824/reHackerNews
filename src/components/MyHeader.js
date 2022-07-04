import { Link, NavLink } from "react-router-dom";

const MyHeader = () => {
  return (
    <header className="MyHeader">
      <div className="header_info">
        <Link to="/">
          <img
            className="logo"
            src={process.env.PUBLIC_URL + "assets/logo.svg"}
            alt={"로고"}
          />
          <p className="logo_title">
            ReHacker <br /> News
          </p>
        </Link>

        <img
          className="dark"
          src={process.env.PUBLIC_URL + "assets/dark.svg"}
          alt={"다크모드"}
        />
        <img
          className="info"
          src={process.env.PUBLIC_URL + "assets/info.svg"}
          alt={"정보 보기"}
        />
      </div>
      <div className="gnb">
        <NavLink className="nav" to="/article">
          Article
        </NavLink>
        <NavLink className="nav" to="/ask">
          Ask
        </NavLink>
        <NavLink className="nav" to="/jobs">
          Jobs
        </NavLink>
        <NavLink className="nav" to="/show">
          Show
        </NavLink>
      </div>
    </header>
  );
};

export default MyHeader;
