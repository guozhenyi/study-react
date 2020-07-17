
// import React from 'react';


class Toggle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {switch: true}

         // 为了在回调中使用 `this`，这个绑定是必不可少的
        this.handleClick = this.handleClick.bind(this);
    }

    /**
     * State的更新可能是异步
     * 不要依赖this.props和this.state的值来更新下一个状态
     * 正确方法是让setState()接收一个函数
     */
    handleClick() {
        this.setState(state => ({
            switch: !state.switch
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.switch ? "已开启" : "已关闭"}
                </button>
            </div>
        );
    }
}


const dom = document.getElementById('event_toggle');

ReactDOM.render(<Toggle />, dom);

