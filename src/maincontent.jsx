import React, { useState } from 'react';
import VideoPlayer from './items/video.jsx';
import Postext from './items/text.jsx';

function Body(props) {
    var i=12;
    const data=[1,2,3,4,6,7,8,9,10,11,12,13,15,135];
    var adddata=data.map((data)=>(<VideoPlayer/>));
    window.onscroll=function(e){
        if((window.innerHeight + window.scrollY) >= document.body.offsetHeight)
        {
            console.log("바닥임");
            makeItems();
        }
    }
    function makeItems(){
        for(var j=0;j<10;j++){
            data.push(i);
            i++;
        }
        console.log(data);
    }
    return (
        <div className="Main_contents">
            <div className="Maincontents">
                <div className="ItemTitle">맞춤동영상</div>
                <div className="recommendation">
                    <VideoPlayer/>
                    <VideoPlayer/>
                    <VideoPlayer/>
                    <VideoPlayer/>
                    <VideoPlayer/>
                    <VideoPlayer/>
                    <VideoPlayer/>
                    <VideoPlayer/>
                </div>
                <div className="post">
                    <div className="ItemTitle">최신 YouTube 게시물</div>
                    <div className="posts">
                        <Postext/>
                        <Postext/>
                        <Postext/>
                        <Postext/>
                    </div>
                </div>
                <div className="OtherVideo">
                    {
                        adddata=data.map((data)=>(<VideoPlayer/>))
                    }
                </div>
            </div>
        </div>
    );
}

export default Body;