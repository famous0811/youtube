import React from 'react';
import Subscription from './items/subscribe';
function Line(){
    return (
        <div>
            <div className="share_boder"/>
        </div>
    );
}
function sidebar(props) {
    return (
        <div className="sidebar">
            <div className="side_box">
                <Subscription text="홈" icons="home"/>
                <Subscription text="인기" icons="home"/>
                <Subscription text="구독" icons="home"/>
            </div>
            <Line/>
            <div className="side_box">
                <Subscription text="보관함" icons="home"/>
                <Subscription text="시청 기록" icons="history"/>
                <Subscription text="내 동영상" icons="home"/>
                <Subscription text="나중에 볼 동영상" icons="home"/>
            </div>
            <Line/>
            <div className="side_box">
                <div className="side_title">구독</div>
                <Subscription text="test" icons="home"/>
                <Subscription text="[꿀탬TV]클템 유튜브" icons="home"/>
                <Subscription text="내 동영상" icons="home"/>
                <Subscription text="나중에 볼 동영상" icons="home"/>
                <Subscription text="좋아요 표시한 동영상" icons="thumb_up"/>
            </div>
            <Line/>
            <div className="side_box">
                <div className="side_title">YOUTUBE 더보기</div>
                <Subscription text="YouTube Premium" icons="home"/>
                <Subscription text="YouTube 영화" icons="home"/>
                <Subscription text="게임" icons="home"/>
                <Subscription text="실시간" icons="home"/>
            </div>
            <Line/>
            <div className="side_box">
                <Subscription text="설정" icons="home"/>
                <Subscription text="신고기록" icons="home"/>
                <Subscription text="고객센터" icons="home"/>
                <Subscription text="의견 보내기" icons="home"/>
            </div>
            <Line/>
            <div className="side_box">
                <div className="advice">
                    <a href="https://www.youtube.com/intl/ko/about/">정보</a>
                    <a href="https://www.youtube.com/intl/ko/about/press/">프레스</a>
                    <a href="https://www.youtube.com/intl/ko/about/copyright/#support-and-troubleshooting">저작권</a>
                    <a href="">문의하기</a>
                    <a href="https://www.youtube.com/intl/ko/creators/">크리에이터</a>
                    <a href="https://www.youtube.com/intl/ko/ads/">광고</a>
                    <a href="https://www.youtube.com/intl/ko/ads/">개발자</a>   
                </div>
                <div className="advice padding">
                    <a href="">이용약관</a>
                    <a href="">개인정보 보호</a>
                    <a href="">정책 및 안전</a>
                    <a href="">새로운 기능 테스트하기</a>      
                </div>
            </div>
            <div className="copyright">© 2020 Google LLC</div>
        </div>
    );
}

export default sidebar;