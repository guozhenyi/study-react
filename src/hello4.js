'use strict';

ReactDOM.render(
    <p>hello JSX! 预编译...</p>,
    document.getElementById('hello_jsx')
);

let btn1 = document.getElementsByClassName('jsx_btn_01')[0];

btn1.addEventListener('click', (eve) => {
    console.log(eve);

    ReactDOM.render(
        <p>你好啊，JSX！预编译的哟...</p>,
        document.getElementById('hello_jsx2')
    );
});

