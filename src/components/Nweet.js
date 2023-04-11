import React from "react";

const Nweet = ({ nweetObj , isOwner }) => {
    const onDelect = () => {
        const ok = window.confirm("정말 삭제하기를 원하십니까?")
        if(ok){
            // 삭제
        }
    }
    return(
        <div>
            <h4>{nweetObj.text}</h4>

            {isOwner && (
                <>
                    <button onClick={onDelect}>Delect Button</button>
                    <button>Edit Button</button>
                </>
            )}

        </div>
    )
}
export default Nweet;