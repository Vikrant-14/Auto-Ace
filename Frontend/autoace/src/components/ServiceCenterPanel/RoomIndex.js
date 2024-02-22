import React from 'react';
import {useParams} from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

const RoomPage=()=>
{
    const {roomId} =useParams();

    const myMeeting = async (element)=>{
        const appId= 290039295 ;
        const serverSecret="d3699480770bb3f607eaeea05bd38f01";
        const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appId,serverSecret,roomId,Date.now().toString(),"Vikrant Gawale");
        const zc=ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container:element,
            sharedLinks:[{
                name:'Copy Link',
                url:`http://localhost:3000/room/${roomId}`
            }],
            scenario:{
                mode:ZegoUIKitPrebuilt.GroupCall,
            },
            showScreenSharingButton:false,
        })
    }
    return <div>
        <div ref={myMeeting}/>
    </div>
}

export default RoomPage;
