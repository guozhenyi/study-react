
// import React from 'react';

function ShowName(props) {
    return (
        <div style={{marginTop:"15px"}}>实时显示您的名字：{props.name}</div>
    );
}


function ShowTip(props) {
    return (
        <div style={{marginTop: "20px"}}>
            <div style={{color:"red"}}>提示：您提交了表单！</div>
            <div>表单内容：</div>
            <div>{JSON.stringify(props.form)}</div>
        </div>
    );
}


class FormOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            content: '',
            likeFruit: '',
            tip: '',
        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleTextareaChange = this.handleTextareaChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.clearTip = this.clearTip.bind(this);
    }

    handleTextChange(event) {
        this.setState({name: event.target.value});
    }

    handleTextareaChange(event) {
        this.setState({content: event.target.value});
    }

    handleSelectChange(event) {
        this.setState({likeFruit: event.target.value});
    }

    clearTip() {
        this.setState({tip: ''});
    }

    handleSubmit(event) {
        event.preventDefault();

        const form = {
            name: this.state.name,
            content: this.state.content,
            likeFruit: this.state.likeFruit,
        };

        this.setState({tip: <ShowTip form={form} />});

        setTimeout(this.clearTip, 3000);
    }

    textareaStyle() {
        return {
            width: "200px",
            height: "50px",
        };
    }

    render() {
        return (
            <div>
                <form name="form1" onSubmit={this.handleSubmit}>
                    <div>
                        <label>姓名：</label>
                        <input type="text" value={this.state.name} onChange={this.handleTextChange} />
                    </div>
                    <div style={{margin: "10px 0"}}>
                        <label>内容</label>
                        <textarea value={this.state.content} onChange={this.handleTextareaChange} style={this.textareaStyle()} />
                    </div>
                    <div>
                        <label>选择喜欢的水果：</label>
                        <select value={this.state.likeFruit} onChange={this.handleSelectChange} style={{width: "140px", lineHeight:"1.2em"}}>
                            <option value="" disabled>请选择</option>
                            <option value="apple">苹果</option>
                            <option value="banana">香蕉</option>
                            <option value="mango">芒果</option>
                            <option value="coconut">椰子</option>
                        </select>
                    </div>
                    <div style={{margin: "12px 0"}}>
                        <input type="submit" value="提交" />
                    </div>
                </form>
                <ShowName name={this.state.name} />
                {this.state.tip}
            </div>
        );
    }

}

ReactDOM.render(
    <FormOne />,
    document.getElementById('form_jsx')
)


class FormTwo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            eating: false,
            eatFood: '',
            eatNum: 0,
            tip: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearTip = this.clearTip.bind(this);
    }

    handleInputChange(event) {
        let value;

        // 这里故意把name取得和this.state里的不一样，检测一下效果
        if (event.target.name === 'is_eat') {
            value = event.target.checked;
            this.setState({eating: value});
        } else {
            value = event.target.value;
            const name = event.target.name;
            this.setState({[name]: value});
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        const form = {
            is_eating: this.eating ? 'yes' : 'no',
            eatFood: this.state.eatFood,
            eatNum: this.state.eatNum,
        };

        this.setState({tip: <ShowTip form={form} />});

        setTimeout(this.clearTip, 3000);
    }

    clearTip() {
        this.setState({tip: ''});
    }

    render() {
        return (
            <div>
                <form name="form2" onSubmit={this.handleSubmit}>
                    <div style={{margin: "10px 0"}}>
                        <label style={{marginRight: "20px"}}>吃饭了吗</label>
                        <input type="checkbox" name="is_eat" checked={this.state.eating} 
                            onChange={this.handleInputChange} style={{width: "20px", height:"20px"}} />
                    </div>
                    <div style={{margin: "10px 0"}}>
                        <label style={{marginRight: "20px"}}>吃了几顿</label>
                        <input type="number" name="eatNum" value={this.state.eatNum} onChange={this.handleInputChange} />
                    </div>
                    <div style={{margin: "12px 0"}}>
                        <input type="submit" value="提交" />
                    </div>
                </form>
                {this.state.tip}
            </div>
        );
    }
}


ReactDOM.render(
    <FormTwo />,
    document.getElementById('form_jsx2')
);

