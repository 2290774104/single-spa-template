import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';

import router from './router';
import { RouterProvider } from 'react-router-dom';

interface ISingle {
  singleSpaNavigate: boolean;
}

type IWindow = ISingle & Window & typeof globalThis;

import singleSpaReact from 'single-spa-react';

console.log(router);

const rootComponent = () => {
  return (
    <React.StrictMode>
      <ConfigProvider locale={zhCN}>
        <RouterProvider router={router}></RouterProvider>
      </ConfigProvider>
    </React.StrictMode>
  );
};

if (!(window as IWindow).singleSpaNavigate) {
  ReactDOM.createRoot(document.getElementById('root')!).render(rootComponent());
}

const reactLifecycle = singleSpaReact({
  React,
  ReactDOMClient: ReactDOM,
  rootComponent: rootComponent,
  domElementGetter() {
    return document.getElementById('microApp')!;
  },
  errorBoundary(err, errInfo, props) {
    console.log(err, errInfo, props);
    return <p>is Error</p>;
  },
});

export const bootstrap = async (props: any) => {
  return reactLifecycle.bootstrap(props);
};

export const mount = async (props: any) => {
  console.log(props);

  return reactLifecycle.mount(props);
};

export const unmount = async (props: any) => {
  return reactLifecycle.unmount(props);
};
