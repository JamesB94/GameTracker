import "./navBar.css";

const NavBar = () => {
  return (
    // console.log('this is the navBar')

    <div className="container">
      <div className="homeicon">
        <i className="fa-solid fa-gamepad fa-2xl"></i>
      </div>
      <div className="search">
        <form action="/" method="get">
          <label htmlFor="header-search">
            <span className="visually-hidden">Search Games Here </span>
          </label>
          <input
            type="text"
            id="header-search"
            placeholder="Search Games"
            name="s"
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="outThisMonth">
        <p>Out This Month</p>
      </div>

      <div className="allMonths">
        <p>All Upcoming Games</p>
      </div>
    </div>
  );
};

export default NavBar;
