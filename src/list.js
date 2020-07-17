
// import React from 'react';



/*
 * js 列表
 */
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((number) => number * 2);
// console.log(doubled);


/*
 * 渲染多个组件 
 */
const numbers = [1, 2, 3, 4, 5];
const numberItems = numbers.map((number) => 
    <li key={number}>{number}</li>
);
ReactDOM.render(
    <ul>{numberItems}</ul>,
    document.getElementById('list_jsx')
);


/**
 * 基础列表组件
 * 
 *  **重要：.map()方法里的元素需要加key**
 */
function BookList(props) {
    const books = props.books;
    const listItems = books.map((book) => 
        <li key={book.id.toString()}>{book.id}: {book.name}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}
const books = [
    {
        id: 1,
        name: "诛仙"
    },
    {
        id: 2,
        name: "仙逆"
    },
    {
        id: 3,
        name: "紫川"
    }
];
ReactDOM.render(
    <BookList books={books} />,
    document.getElementById('list_jsx2')
);



/**
 * 用key提取组件
 */
function TodoItem(props) {
    const todo = props.todo;
    return (
        <li>{todo.date} > {todo.content}</li>
    );
}
function TodoList(props) {
    const todos = props.todos;
    const listItems = todos.map((todo) => 
        <TodoItem key={todo.id.toString()} todo={todo} />
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}
const todos = [
    {
        id: 1,
        date: "2020-07-17",
        content: "吃一碗饭"
    },
    {
        id: 2,
        date: "2020-07-18",
        content: "吃两碗饭"
    },
    {
        id: 3,
        date: "2020-07-19",
        content: "吃三碗饭"
    }
];
ReactDOM.render(
    <TodoList todos={todos} />,
    document.getElementById('list_jsx3')
);


