import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu, Item } = Menu;

const ToDo = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isOption1, setIsOption1] = useState(false);
  const [isOption2, setIsOption2] = useState(false);
  
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Item
            key="1"
            icon={<PieChartOutlined />}
            onClick={() => {
              setIsOption1(true);
              setIsOption2(false);
            }}
          >
            Option 1
          </Item>
          <Item
            key="2"
            icon={<DesktopOutlined />}
            onClick={() => {
              setIsOption1(false);
              setIsOption2(true);
            }}
          >
            Option 2
          </Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Item key="3">Tom</Item>
            <Item key="4">Bill</Item>
            <Item key="5">Alex</Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Item key="6">Team 1</Item>
            <Item key="8">Team 2</Item>
          </SubMenu>
          <Item key="9" icon={<FileOutlined />}>
            Files
          </Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        {isOption1 ? (
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              Option 1
            </div>
          </Content>
        ) : null}
        {isOption2 ? (
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              Option 2
            </div>
          </Content>
        ) : null}

        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default ToDo;
