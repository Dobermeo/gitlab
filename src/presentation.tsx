
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Avatar, Divider } from 'antd';
import {HomeOutlined, MailOutlined, GithubOutlined, FacebookOutlined, WhatsAppOutlined } from '@ant-design/icons';
import './App.css';
import david from './assets/david3.jpg'
import Biografia from './biografia'
import Interest from './intereses'
import Career from './carrera'
import Projects from './proyectos'
import Start from './inicio'
import Contact from './contacto'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;



function App() {

    const [selectedKey, setSelectedKey] = useState('1');
    const [selectedMainKey, setSelectedMainKey] = useState('1');

    const handleMainClick = (key: React.SetStateAction<string>) => {
      setSelectedMainKey(key);
      setSelectedKey('1');
    };


    return (
        <Layout>
            <Header className="header" style={{ padding: 0 }}>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" onClick={() => handleMainClick('1')} >Inicio</Menu.Item>
                    <Menu.Item key="2" onClick={() => handleMainClick('2')}>Acerca de mí</Menu.Item>
                    <Menu.Item key="3" onClick={() => handleMainClick('3')}>Contacto</Menu.Item>
                </Menu>
            </Header>
            {selectedMainKey === '1' ? <Start /> : ''}
            {selectedMainKey === '3' ? <Contact /> : ''}
            {selectedMainKey === '2' && (
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        theme="dark"
                        onClick={({ key }) => {
                            setSelectedKey(key);
                          }}
                        
                    >
                        <SubMenu key="sub1" 
                        
                        icon={
                            <img 
                              src={david} 
                              alt="Mi perfil" 
                              style={{ 
                                width: '32px', 
                                height: '32px', 
                                borderRadius: '50%' 
                              }} 
                            />
                          } 
                          title="Mi perfil"
                        >    
                
                            <Menu.Item key="1">Mi biografia</Menu.Item>
                            <Menu.Item key="2">Mis intereses</Menu.Item>
                            <Menu.Item key="3">Mi carrera</Menu.Item>
                            <Menu.Item key="4">Mis proyectos</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item><HomeOutlined /></Breadcrumb.Item>
                        <Breadcrumb.Item>Listado</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            backgroundColor: '#001529',
                            color: '#fff'
                        }}
                    >
                        {selectedKey === '1' ? <Biografia /> : ''}
                        {selectedKey === '2' ? <Interest /> : ''}
                        {selectedKey === '3' ? <Career/> : ''}
                        {selectedKey === '4' ? <Projects/> : ''}
                    </Content>
                </Layout>
            </Layout>
            )}
        
            <Divider />
            <div style={{ textAlign: 'center', color: '#fff' }}>
                <Avatar size={64} 
                icon={
                    <img 
                      src={david} 
                      alt="Mi perfil" 
                      style={{ 
                        width: '70px', 
                        height: '70px', 
                        borderRadius: '50%' 
                      }} 
                    />
                  }  />
                <p>David Bermeo</p>
                <a href="dobermeo@sudamericano.edu.ec" style={{ margin: '0 10px' }}><MailOutlined /></a>
                <a href="https://github.com/Dobermeo" style={{ margin: '0 10px' }}><GithubOutlined /></a>
                <a href="https://www.facebook.com/david.bermeo.9619?mibextid=ZbWKwL" style={{ margin: '0 10px' }}><FacebookOutlined /></a>
                <a href="https://api.whatsapp.com/send?phone=0968426499" style={{ margin: '0 10px' }}><WhatsAppOutlined /></a>

            </div>
        </Layout>

    
    );

    
}

export default App;
