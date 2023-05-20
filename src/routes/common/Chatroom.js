import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Chatroom = () => {
  	const expertId = localStorage.getItem('expertId');
    const socket = useSelector(state => state.socketStorage.socket);
 	const { pathname } = useLocation();
  	const roomId = useParams().room_index;
    const [participantId, setParticipantId] = useState(-1);
    const [chats, setChats] = useState([]);
  
    useEffect(() => { // 방 바꾸기, 변경될 떄마다 새로운 fetch 받아와야 한다.
        const joinExpertEmitObject = {
            room_id: roomId,
            user_id: expertId, 
        }
        socket.emit('join-expert', joinExpertEmitObject);        
        socket.on('join-expert', (joinObj) => { // 방 하나 골라서 들어가는 이벤트
            const { result, errmsg } = joinObj;
            // room에 join시 participant id 저장
            setParticipantId(result.participant_index);

            const getChattingObj = {
                room_id: roomId,
                participant_id: result.participant_index,
            }
            socket.emit('getChatting', getChattingObj);
        });

        socket.on('getChatting', (chatObj) => { // 룸에 들어가면, 현재 룸에 쌓여있는 채팅 리스트 가져옴
            const { result, errmsg } = chatObj;
            setChats(result);
        });

        return () => {
            const leaveObj = {
              	room_id : roomId,
            }

            socket.emit('disconnect-expert', leaveObj);
            socket.disconnect();
        };
    }, [pathname, socket]);
}