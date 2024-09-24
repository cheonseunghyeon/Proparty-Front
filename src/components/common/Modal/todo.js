const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-form input")
const todoList = document.querySelector("#todo-list")
const TODOS_KEY = "todos"
//array 배열 생성
// 중요) local에 배열을 넣고 싶지만
// localStorage에는 배열을 저장 할 수가 없다
// 웹을 다시 실행 시 toDos가 비어있으니 local도 계속 빈걸로 바뀜
let toDos = []


function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value; 
    // <-- input의 현재 value를 새로운 변수로 복사
    // 즉 같이 같은 다른 변수라는 뜻이다.
    // newTodo와 todoInput.value는 지금은 값이 같지만
    // 서로 값이 달라져도 상관없는 전혀 별도의 변수다
    todoInput.value = ""

    // 이제 todo의 각 요소별 컨트롤을 위해
    // array = {id : xx text : 231231} - 이런식의 객체로 푸쉬할 것이다.
    // Date.now는 미리 세컨드를 주는데 랜덤같다.

    const newtodoOb = {
        text : newTodo,
        id: Date.now()
    }
    toDos.push( newtodoOb)
    paintTodo(newtodoOb);
    saveTodo();
}

// todoList 삭제
function DelectClick(event){
    // 클릭 이벤트의 target을 통해 어떤버튼으로 눌렸는지 식별가능
    // target - HTML element
    // parentElement - 클릭된 target의 부모
    

    //삭제하고자 하는 element
    const dli = event.target.parentElement

    // 삭제하고자 하는 id 제외
    // filter 함수
    // 배열.filter(조건) <- 조건이 true인 것만 나오고 나머지는 배열에서 제외
    // dli의 id와 다른 Todo 배열만 남겨서 저장하고 싶어
    // 여기서 원래 배열은 남아있고 새로운 배열을 할당시켜 그걸 가르키게 함 js 특
    toDos = toDos.filter(Todo => Todo.id !== parseInt(dli.id))
    dli.remove();
    saveTodo()
}

// todoList 생성
function paintTodo(newtodoOb){ 
    const li = document.createElement("li");
    li.id = newtodoOb.id
    const span = document.createElement("span");
    span.innerText = newtodoOb.text;
    const button  = document.createElement("button");
    button.innerText = "삭제";
    button.addEventListener("click",DelectClick)
    // li 안에 span + button이 들어가는 식으로 만들 것이기 때문에
    // 자식으로 넣어줌
    // append는 설정 끝나고 마지막에 넣으면 됨
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

// 배열을 local에 넣기
function saveTodo(){
    // local에는 배열의 형태로 넣을 수 없다
    // 즉 배열읗 넣어도 텍스트의 형태로 들어가게 된다
    // 중요)) JSON.stringify(객체) - 객체의 프로퍼티를 전부 string으로 바꿔줌
    // 즉 배열의 형태로 string의 형태로 바꿔줌
    // "[1,2,3,4]" ...

    // JSON.parse(텍스트) - JS엔진이 객체로 바꿔줌
    // JSON.parse(localStorage.getItem(todos)) - stringify로 string의 형태로 만든 배열을 배열 객체로 만듬
    localStorage.setItem(TODOS_KEY,  JSON.stringify(toDos))
}
todoForm.addEventListener("submit",handleTodoSubmit)

const savedTodos = localStorage.getItem(TODOS_KEY)


if (savedTodos){
    const parsedTodos = JSON.parse(savedTodos)
    toDos = parsedTodos;
    // JS는 배열의 각 변수들에 함수를 선언 할 수 있다.
    // forEach를 이용하면 각각의 배열 요소로 함수 호출 가능

    // js는 배열의 각 요소도 매개 변수로 가져올 수 있다.
    // 함수의 전반적인 요소 event 처럼 item으로 각 요소를 가져올 수 있다.
    parsedTodos.forEach((item) => {
        // paint odo 에 배열 순서대로 0 1 2 3 4 순으로 호출을 진행함
        paintTodo(item)
    });
}

