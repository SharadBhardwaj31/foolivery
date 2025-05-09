import "./style.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="fContainer">
          <div className="fTab">
            <h3>QUICK LINKS</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">Login</a>
              </li>
            </ul>
          </div>
          <div className="fTab">
            <h3>CATEGORIES</h3>
            <ul>
              <li>
                <a href="/">Top Categories</a>
              </li>
              <li>
                <a href="/">Best Rated</a>
              </li>
              <li>
                <a href="/">Best Price</a>
              </li>
              <li>
                <a href="/">Latest Submissions</a>
              </li>
            </ul>
          </div>
          <div className="fTab">
            <h3>CONTACTS</h3>
            <ul>
              <li>
                <a href="/">
                  97845 Baker st. 567
                  <br />
                  Los Angeles - US
                </a>
              </li>
              <li>
                <a href="/">+94 423-23-221</a>
              </li>
              <li>
                <a href="/">info@domain.com</a>
              </li>
            </ul>
          </div>
          <div className="fTab">
            <h3>KEEP IN TOUCH</h3>
            <input placeholder="Your Email" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
