import React, { Component } from 'react';
import "../style/MainContents.css";
import 'antd/dist/antd.css';
import { Image } from 'antd';


class MainContents extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
  
    const items = [
      { id: 1, url: "https://dimg.donga.com/wps/NEWS/IMAGE/2019/03/20/94639700.1.jpg" },
      { id: 2, url: "http://www.issuemaker.kr/news/photo/old/14469592276738.jpg" },
      { id: 3, url: "https://images.homify.com/c_fill,f_auto,h_500,q_auto,w_1280/v1508310682/p/photo/image/2276542/pers01_0404-2.jpg" },
      { id: 4, url: "http://www.sjsori.com/news/photo/201806/31008_35968_558.gif" },
      { id: 5, url: "https://dimg.donga.com/wps/NEWS/IMAGE/2019/03/20/94639700.1.jpg" },
      { id: 6, url: "http://www.issuemaker.kr/news/photo/old/14469592276738.jpg" },
      { id: 7, url: "https://images.homify.com/c_fill,f_auto,h_500,q_auto,w_1280/v1508310682/p/photo/image/2276542/pers01_0404-2.jpg" },
      { id: 8, url: "http://www.sjsori.com/news/photo/201806/31008_35968_558.gif" },
    ];

    let count = Math.ceil(items.length/4);
  
    return (
      <>
        <div className="mainpicDiv">
          <Image
            className="plz"
            // width={500}
            // height={500}
            alt= ""
            src="http://www.issuemaker.kr/news/photo/old/14469592276738.jpg"
            preview={{mask:"2020년 공모전 수상 내역"}}
          />
          <Image
            className="plz"
            // width={500}
            // height={500}
            alt= ""
            src="http://www.issuemaker.kr/news/photo/old/14469592276738.jpg"
            preview={{mask:"2020년 공모전 수상 내역"}}
          />
          <Image
            className="plz"
            // width={500}
            // height={500}
            alt= ""
            src="http://www.issuemaker.kr/news/photo/old/14469592276738.jpg"
            preview={{mask:"2020년 공모전 수상 내역"}}
          />
          <Image
            className="plz"
            // width={500}
            // height={500}
            alt= ""
            src="http://www.issuemaker.kr/news/photo/old/14469592276738.jpg"
            preview={{mask:"2020년 공모전 수상 내역"}}
          />
        </div>
        
        {/* <div className="divideContents">
          <div className="picDivider">

           <div className="picPosition">
            <img alt="" className="pic" src="https://dimg.donga.com/wps/NEWS/IMAGE/2019/03/20/94639700.1.jpg" />
           </div>

           <div className="picPosition">
            <img alt="" className="pic" src="http://www.issuemaker.kr/news/photo/old/14469592276738.jpg" />
           </div>

           <div className="picPosition">
            <img alt="" className="pic" src="http://www.issuemaker.kr/news/photo/old/14469592276738.jpg" />
           </div>

           <div className="picPosition">
            <img alt="" className="pic" src="http://www.sjsori.com/news/photo/201806/31008_35968_558.gif" />
           </div>

           
          </div>
        </div> */}
      </>
    );
  }
}

export default MainContents;
