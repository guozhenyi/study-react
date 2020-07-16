
// import React from 'react';


class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    /**
     * 生命周期方法
     * 组件被渲染到DOM中之后运行
     */
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    /**
     * 生命周期方法
     * 
     */
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({date: new Date()});
    }

    render() {
        return (
            <div>
                <p>Now time: {this.state.date.toLocaleTimeString()}</p>
            </div>
        );
    }
}


const dom = document.getElementById('clock_m_jsx');

ReactDOM.render(<Clock />, dom);

