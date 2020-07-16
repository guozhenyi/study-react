'use strict';

function tick() {
    const element = (
        <div>
            <p>本行不会被更新</p>
            <p>Now: {new Date().toLocaleTimeString()}</p>
        </div>
    );
    ReactDOM.render(element, document.getElementById('hello_jsx'));
}

setInterval(tick, 1000);
