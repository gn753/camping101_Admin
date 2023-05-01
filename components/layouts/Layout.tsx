import styled from '@emotion/styled';
import { ReactNode } from 'types';
import React, { useState, useEffect } from 'react';
import { Layout, Menu, MenuProps } from 'antd';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Example from 'features/Admin/components/Example';
import Container from './Container/index';
import { withRouter, NextRouter } from 'next/router';
import { WithRouterProps } from 'next/dist/client/with-router';
import { SetterOrUpdater } from 'recoil';
type LayoutProps = {
  Header: ReactNode;
  Content: ReactNode;
  Sider: ReactNode;
  Footer: ReactNode;
};

interface Router extends NextRouter {
  path: string;
  breadcrumbName: string;
}

interface Props extends WithRouterProps {
  router: ReactNode;
  jwt: null | undefined | string;
}

const { Header, Content, Footer, Sider }: LayoutProps = Layout;
// const { SubMenu } = item;

export default function MenuLayout(props: React.PropsWithChildren<Props>) {
  const member = localStorage.getItem('member');
  const menuItems: MenuProps['items'] =
    member === '주인'
      ? [
          {
            label: <Link href='/camp'>캠핑장 관리</Link>,
            key: '/camp',
          },
          // {
          //   label: <Link href='/미정'>미정</Link>,
          //   key: '/미정',
          // },
        ]
      : [
          {
            label: <Link href='/userInfo'>회원관리</Link>,
            key: '/userInfo',
          },
          // {
          //   label: <Link href='/camp'>캠핑장 관리</Link>,
          //   key: '/camp',
          // },
          {
            label: <Link href='/camplog'>캠프로그</Link>,
            key: '/camplog',
          },
          {
            label: <Link href='/tag'>추천태그</Link>,
            key: '/tag',
          },
        ];

  const [current, setCurrent] = useState('/');
  const router = useRouter();
  const [jwt, setJwt] = useState('');
  const onMenu: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    localStorage.setItem('page', e.key);
    router.push(e.key);
  };
  useEffect(() => {
    const page = localStorage.getItem('page');
    // console.log(page, 'page');
    if (page) {
      setCurrent(page);
      // router.push(page);
      return;
    }
    const localStorageData: any = localStorage.getItem('jwt');
    setJwt(localStorageData);
  }, [jwt]);

  return (
    <>
      <Layout>
        <Sider
          width={170}
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <Link href={'/'}>
            <Logo>캠핑101</Logo>
          </Link>
          <Menu
            theme='dark'
            onClick={onMenu}
            selectedKeys={[current]}
            items={menuItems}
            mode='inline'
          />
        </Sider>

        <Layout className='site-layout' style={{ marginLeft: 200 }}>
          {/* <Header
  className='site-layout-background'
  style={{ padding: 0, backGround: '#ffffff' }}
/> */}
          {/* 본문*/}

          <Content
            className='site-layout-background'
            style={{
              margin: '24px 16px',
              padding: 24,
              height: '84vh',
            }}
          >
            {props.children}
          </Content>

          <Footer
            style={{
              textAlign: 'center',
              position: 'fixed',
              bottom: 0,
              left: 170,
              right: 0,
              border: '1px solid #dcdcdc',
            }}
          >
            캠핑101
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

const Logo = styled.div`
  height: 32px;
  margin: 16px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
`;
