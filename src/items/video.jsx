import React from 'react';
import youtubeLogo from '../style/image/logo.png';

video.prototype={

};

function video(props) {
    return (
        <div className="ItemVIdeo">
           
            <div className="VideoImg">
                <div className="Img">
                <img src={youtubeLogo} alt="test"/>
                </div>
            </div>  
           <div className="VideoLenders">
               <div className="VideoLogo">
               <img src={youtubeLogo} alt="test"/>
               </div>

               <div className="VideoOther">
                   <div className="VideoTitle">핵쟁이 참교육 시키고 왔습니다. 핵쟁이 딱 대 ㅡㅡ</div>
                   <div>푸린</div>
                   <div className="VideoData">
                        조회수 129회
                        <div className="VideoAnd">•</div> 
                        2개월전
                   </div>
                  
               </div>
           </div>
        </div>
    );
}
 
export default video;