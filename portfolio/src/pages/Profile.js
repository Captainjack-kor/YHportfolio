import { Link } from 'react-router-dom';
import "../style/Profile.css";
import Footer from "../components/Footer";
import MainContents from "../components/MainContents";

const Profile = () => {
  return (
    <>
      <div className="initPosition">
        <div className="profileLogo">
          <div className="profileYhLink">
            <Link to="/profile">
              <span className="profileYhLinkSpan">YH</span>
            </Link> 
              <span className="profileDotLinkSpan">·</span> 
            <Link to="/archi">
              <span className="profileArchiLinkSpan">ARCHI</span> 
            </Link>
          </div>
        </div>
        {/* <div className="middleContents">

        </div> */}
        <MainContents />
      <Footer />
      </div>

    </>
  );
}

export default Profile;