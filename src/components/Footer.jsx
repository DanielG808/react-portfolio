import GitHub from "../assets/images/GitHub_Logo.png";
import LinkedIn from "../assets/images/LI-Logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="img-container">
          <a href="https://github.com/DanielG808" className="socials">
            <img src={GitHub} alt="GitHub Profile Link" className="image m-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/dan-gray-90076617a/"
            className="socials"
          >
            <img
              src={LinkedIn}
              alt="LinkedIn Profile Link"
              className="image m-5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
