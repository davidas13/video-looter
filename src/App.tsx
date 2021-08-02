import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Button,
  DatePicker,
  version,
  Row,
  Col,
  Form,
  Input,
  Menu,
  Dropdown,
  Space,
  Select,
  Card,
  Image,
  Radio,
} from 'antd';
import {
  IeCircleFilled,
  UserOutlined,
  DownOutlined,
  PauseCircleOutlined,
  PlayCircleOutlined,
  PauseOutlined,
  CaretRightOutlined,
  BorderOutlined,
} from '@ant-design/icons';
import { FaYoutube } from 'react-icons/fa';
import ReactPlayer from 'react-player/lazy';
import styled from 'styled-components';
import Titlebar from './components/titlebar/Titlebar';
import './App.global.css';

const { Search } = Input;
const { Meta } = Card;

const menu = (
  <Menu>
    <Menu.Item key="1" icon={<UserOutlined />}>
      Youtube
    </Menu.Item>
  </Menu>
);

const VideoPlayerWrapper = styled.div`
  position: relative;
  /* padding-top: 56.25%; */
`;

const VideoPlayer = styled(ReactPlayer)`
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 100% !important;
  height: 300px !important;
`;

const Main = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Titlebar />
      {/* Search bar container */}
      <Row style={{ height: '100%', overflow: 'auto' }}>
        <Col flex="auto">
          <Row>
            <Col flex="auto">
              <Row gutter={8}>
                <Col>
                  <Dropdown overlay={menu} trigger={['click']}>
                    <Button size="small">
                      <IeCircleFilled /> Website
                    </Button>
                  </Dropdown>
                </Col>
                <Col flex="auto">
                  <Search
                    placeholder="input search text"
                    // onSearch={onSearch}
                    style={{ width: '100%' }}
                    size="small"
                    enterButton
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Dropdown overlay={menu} trigger={['click']}>
                <Button
                  type="link"
                  className="ant-dropdown-link"
                  size="small"
                  onClick={(e) => e.preventDefault()}
                >
                  Duration <DownOutlined />
                </Button>
              </Dropdown>
              <Dropdown overlay={menu} trigger={['click']}>
                <Button
                  type="link"
                  className="ant-dropdown-link"
                  size="small"
                  onClick={(e) => e.preventDefault()}
                >
                  Upload date <DownOutlined />
                </Button>
              </Dropdown>
            </Col>
          </Row>
          <Row>
            <Space size={[8, 16]} wrap>
              {[1, 2, 4, 5].map((item) => (
                <Card key={item} hoverable style={{ width: 120, height: 120 }}>
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    style={{
                      width: 120,
                      height: 120,
                      position: 'absolute',
                      top: 0,
                      left: 0,
                    }}
                  />
                </Card>
              ))}
            </Space>
          </Row>
          <Row justify="center">
            <Col style={{ width: '100%' }}>
              <Button>Load More</Button>
            </Col>
          </Row>
        </Col>
        <Col flex="auto">
          <Row>
            <Col flex="auto">
              <VideoPlayerWrapper>
                <VideoPlayer url="https://www.youtube.com/watch?v=oUFJJNQGwhk" />
              </VideoPlayerWrapper>
            </Col>
          </Row>
          <Row justify="center">
            <Col>
              <Button.Group size="large">
                <Space>
                  <Button icon={<PauseOutlined />} />
                  <Button icon={<CaretRightOutlined />} />
                  <Button icon={<BorderOutlined />} />
                </Space>
              </Button.Group>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* <Row>

      </Row> */}
    </div>
    // <div>
    //   <div className="Hello">
    //     <img width="200px" alt="icon" src={icon} />
    //   </div>
    //   <h1>electron-react-boilerplate</h1>
    //   <div className="Hello">
    //     <a
    //       href="https://electron-react-boilerplate.js.org/"
    //       target="_blank"
    //       rel="noreferrer"
    //     >
    //       <button type="button">
    //         <span role="img" aria-label="books">
    //           📚
    //         </span>
    //         Read our docs
    //       </button>
    //     </a>
    //     <a
    //       href="https://github.com/sponsors/electron-react-boilerplate"
    //       target="_blank"
    //       rel="noreferrer"
    //     >
    //       <button type="button">
    //         <span role="img" aria-label="books">
    //           🙏
    //         </span>
    //         Donate
    //       </button>
    //     </a>
    //   </div>
    // </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}
