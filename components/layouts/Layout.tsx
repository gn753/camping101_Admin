import styled from '@emotion/styled';
import { ReactNode } from 'types';
import React, {
  useState,
  FunctionComponent,
  SetStateAction,
  Dispatch,
  useEffect,
} from 'react';
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
  isLogin: boolean;
  setIsLogin: SetterOrUpdater<boolean>;
}

const { Header, Content, Footer, Sider }: LayoutProps = Layout;
// const { SubMenu } = item;
const menuItems: MenuProps['items'] = [
  {
    label: <Link href='/userInfo'>회원관리</Link>,
    key: '/userInfo',
  },
  {
    label: <Link href='/userService'>회원서비스</Link>,
    key: '/userService',
  },
];

export default function MenuLayout(props: React.PropsWithChildren<Props>) {
  const [current, setCurrent] = useState('/');
  const router = useRouter();
  const onMenu: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };
  useEffect(() => {
    if (!props.isLogin) {
      router.push('/login');
    }
  }, [props.isLogin]);
  return (
    <Layout>
      {props.isLogin === false ? null : (
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
      )}
      {props.isLogin === false ? (
        <Layout className='site-layout' style={{ marginLeft: 0 }}>
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
              height: '100vh',
            }}
          >
            {props.children}
          </Content>
        </Layout>
      ) : (
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
      )}
    </Layout>
  );
}

const Logo = styled.div`
  height: 32px;
  margin: 16px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
`;
