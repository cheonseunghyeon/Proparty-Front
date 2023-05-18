const express = require('express')
const socketio = require('socket.io')
const http = require('http')

const PORT = process.env.PORT || 5000

const app = express();
const server = http.createServer(app)
const io = socketio(server)
server.listen(PORT,()=>console.log(`서버가 ${PORT} 에서 시작되었어요`))

function Join() {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    return (
      <div className='joinOuterContainer'>
        <div className='joinInnerContainer'>
          <h1 className='heading'></h1>
          <div>
            <input
              placeholder='이름'
              className='joinInput'
              type='text'
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <input
              placeholder='채팅방'
              className='joinInput mt-20'
              type='text'
              onChange={(event) => setRoom(event.target.value)}
            />
          </div>
          <Link
            onClick={(e) => (!name || !room ? e.preventDefault() : null)}
            to={`/chat?name=${name}&room=${room}`}
          >
            <button className={'button mt-20'} type='submit'>
              가입
            </button>
          </Link>
        </div>
      </div>
    );
  }
  export default Join;
  