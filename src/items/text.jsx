import React from 'react';
import youtubeLogo from '../style/image/logo.png';

function text(props) {
    return (
        <div className="ItemPost">
            <div className="Post">
                <div className="PostWriter">
                    <div className="PostLogo">로고</div>
                    <div className="PostData">
                        <div>Raon Lee</div>
                        <div className="PostAnd">•</div>
                        <div>15분 전(수정됨)</div>
                    </div>
                </div>
                <div className="MainText">
                    <div className="text">Are you enjoying my new cover song "Tiny Light"? Hope my song will please you in this difficult time🙏💖 STAY HEALTHY, my angels✨
라둥쓰! 이번 신곡 Tiny Light 잘 듣고 있ㅈlyo? 이 어려운 시기에 조금이라도 즐거움이 있길 바라는 마음으로 불렀어오(๑•̀ㅂ•́)و✧ 항상 건강하자!💪 싸룽행❤
Apakah Anda menikmati rekaman baru saya, "Tiny Light"? Laguku akan selalu senang buatmu🙏 Jagalah kesehatan Anda!💖 (Saya tidak bisa berbicara bahasa Indonésia. Sedang menggunakan penerjemah. Apa yang aku katakan yang benar? wkwk😂)
ラドゥンの皆さん! 僕の新しいカバー曲"Tiny Light"楽しんでますか? 今のように難しい時期に私の歌があなたに楽しんでもらう気持ちで歌いました。🙏 ぜひみんな元気でね!❤
</div>
                    <div className="poto">
                    <img src={youtubeLogo} alt="test"/>
                    </div>
                </div>
                <div className="Side">
                    <div className="thumb">
                        <div><span class="material-icons">thumb_up</span> 1.2천</div>
                        <div><span class="material-icons">thumb_down</span></div>
                    </div>                    
                    <div className="thumb">
                        <div><span class="material-icons">insert_comment</span></div>
                        <div><span class="material-icons">more_vert</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default text;