import { Link } from 'react-router-dom';
import "../style/Archi.css";
import Footer from "../components/Footer";
import MainContents from "../components/MainContents";
import NavButton from "../components/NavButton";

const Archi = () => {
  return (
    <>
      <NavButton />
      <div className="initPosition">
        <div className="archiLogo">
          <div className="profileYhLink">
            <Link to="/profile">
              <span className="archiYhLinkSpan">YH</span>
            </Link> 
              <span className="archiDotLinkSpan">·</span> 
            <Link to="/archi">
              <span className="archiArchiLinkSpan">ARCHI</span> 
            </Link>
          </div>
        </div>

        {/* <div className="middleContents">

        </div> */}
        <MainContents />

      </div>
        <Footer />
    </>
  );
}

export default Archi;