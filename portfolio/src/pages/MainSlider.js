import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/MainSlider.css';
import { Link } from 'react-router-dom';

// class MainSliderDIV extends Component {
//   render(){
//     return (
//       <div className="mainSliderDiv">
//         <div className="mainText">
//           <div className="yhLink"> YH </div>
//           <div> · </div>
//           <div className="archiLink"> ARCHI </div>
//         </div>
//         <img alt="" className="mainSliderIMG" src={} />
//       </div>
//     );
//   }
// }

class MainSlider extends Component {
  constructor(props){
    super(props);
    this.state = {}
  };

  render(){

    const items = [
      { id: 1, url: "https://dimg.donga.com/wps/NEWS/IMAGE/2019/03/20/94639700.1.jpg" },
      { id: 2, url: "http://www.issuemaker.kr/news/photo/old/14469592276738.jpg" },
      { id: 3, url: "https://images.homify.com/c_fill,f_auto,h_500,q_auto,w_1280/v1508310682/p/photo/image/2276542/pers01_0404-2.jpg" },
      { id: 4, url: "http://www.sjsori.com/news/photo/201806/31008_35968_558.gif" }
    ];

    const settings = {
      dots: false,
      infinite: true,
      speed: 1500,
      autoplaySpeed: 3000,
      pauseOnHover: false,
      autoplay: true,
      draggable: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
    }


    return (
      <div>
        {/* <div className="blockposition"> </div> */}
        <div className="mainText">
          <div className="yhLink">
            <Link to="/profile">
              <span className="yhLinkSpan">YH</span>
            </Link> 
          </div>
          <div className="dotLink"> 
            <span className="dotLinkSpan">·</span> 
          </div>
          <div className="archiLink"> 
            <Link to="/archi">
              <span className="archiLinkSpan">ARCHI</span> 
            </Link>
          </div>
        </div>
        <Slider {...settings}>
          {items.map(item => {
            return (
              <div key={item.id} className="mainSliderDiv">
                {/* <div className="mainText">
                  <div className="yhLink"> YH </div>
                  <div className="dotLink"> · </div>
                  <div className="archiLink"> ARCHI </div>
                </div> */}
                <img alt="" className="mainSliderIMG" src={item.url} />
              </div>
            );
          })}
        </Slider>

        
      </div>
    );
  }
}

export default MainSlider;