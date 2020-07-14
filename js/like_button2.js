'use strict';

const e = React.createElement;

class LikeButton2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked comment No. ' + this.props.commentID;
        }
        // 浏览器原生支持的特性
        // return e(
        //     'button',
        //     { onClick: () => this.setState({ liked: true }) },
        //     'Like'
        // );

        // JSX 等价写法
        return (
            <button onClick={()=> this.setState({ liked: true})}>
                Like
            </button>
        );

    }
}

document.querySelectorAll('.like_button').forEach(domContainer => {
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    ReactDOM.render(
        e(LikeButton2, { commentID: commentID }),
        domContainer
    );
});

