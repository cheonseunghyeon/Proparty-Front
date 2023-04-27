import { dbService } from "fbase";
import { doc,deleteDoc,updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { deleteObject, ref } from "@firebase/storage";
import { storageService } from "../fbase";

const Nweet = ({ nweetObj , isOwner }) => {
    const [editing,setEditing] = useState(false);
    const [newText, setNewText] = useState(nweetObj.text);
    const onDelect = async() => {
        const ok = window.confirm("정말 삭제하기를 원하십니까?")
        if(ok){
            const TextRef = doc(dbService,"DBTable",`${nweetObj.id}`);
            await deleteDoc(TextRef);
            
            // 삭제할 이미지 파일을 가르키는 ref 생성
            const urlRef = ref(storageService, nweetObj.attachmentUrl);
            await deleteObject(urlRef)

        }
    }

    // 상태 변경
    const toggleEditing = () => setEditing(prev => !prev)
    const onSubmit = async(event) => {
        event.preventDefault();
        const UpdateRef = doc(dbService,"DBTable",`${nweetObj.id}`);
        await updateDoc(UpdateRef, {
            text : newText
        })
        setEditing(false)
    }

    const onChange = (event) => {
        const {target:{value},
        } = event;
        setNewText(value);
        
    }
    return(
        <div>
           {editing ? 
           <>
            <form onSubmit={onSubmit}>
                <input value={newText} placeholder="수정할 내용을 작성해주세요" required onChange={onChange}/>
                <input type="submit" value={"Update"} on/>
            </form>
            <button onClick={toggleEditing}>Cancel</button>
            </>
             :
            <>
            <h4>{nweetObj.text}</h4>
            {nweetObj.attachmentUrl && 
                (<img src={nweetObj.attachmentUrl} width="50px" height="50px"/>)
            }
            {isOwner && (
                <>
                    <button onClick={onDelect}>Delect Button</button>
                    <button onClick={toggleEditing}>Edit Button</button>
                </>
            )}
            </>
           }

        </div>
    )
}
export default Nweet;