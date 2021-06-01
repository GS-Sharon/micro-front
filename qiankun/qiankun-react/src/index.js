import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function render(props) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// 检测到独立运行的时候
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {}
export async function mount(props) {
  render();
}
export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'));
}

