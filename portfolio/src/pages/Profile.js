import { Link } from 'react-router-dom';
import "../style/Profile.css";
import Footer from "../components/Footer";
import 'antd/dist/antd.css';
//import './index.css';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Content, Sider } = Layout;

const Profile = () => {
  return (
    <>
    {/* YH · ARCHI */}
      {/* <div className="initPosition">
        <div className="profileLogo">
          <div className="profileYhLink">
            <Link to="/profile">
              <span className="profileYhLinkSpan">YH</span>
            </Link> 
              <span className="profileDotLinkSpan">·</span> 
            <Link to="/archi">
              <span className="profileArchiLinkSpan">ARCHI</span> 
            </Link>
          </div>
        </div> */}
        {/* <div className="middleContents">

        </div> */}
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              nav 4
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              content
            </div>
          </Content>
        </Layout>
      </Layout>

      {/* <Footer />  */}
      {/* </div> */}

    </>
  );
}

export default Profile;