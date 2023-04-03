import { Form, Input, Button, Row, Col } from 'antd';
import styled from '@emotion/styled';
import { axiosSetting } from '../../api/api';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { SetterOrUpdater } from 'recoil';
import { useRouter } from 'next/router';
type LoginType = {
  email: string;
  password: string;
};

interface Props {
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ isLogin, setIsLogin }: Props) => {
  const router = useRouter();
  useEffect(() => {
    if (!isLogin) return;
    if (isLogin) {
      router.push('/');
    }
  }, [isLogin]);
  const onSubmit = async (body: LoginType) => {
    console.log(body);
    await axiosSetting
      .post('/api/signin/mail', body)
      .then((e) => {
        setIsLogin(true);
        router.push('/');
      })
      .catch((e) => {
        console.log(e);
        setIsLogin(false);
        router.push('/login');
      });
  };

  return (
    <LoginLayout>
      <FormTitle>캠핑 101 어드민</FormTitle>
      <Row
        justify='center'
        align='middle'
        style={{ height: 'auto', width: '100%' }}
      >
        <Col lg={{ span: 6, offset: 0 }}>
          <Form initialValues={{ remember: true }} onFinish={onSubmit}>
            <Form.Item
              name='email'
              rules={[{ required: true, message: '이메일을 확인해주세요.' }]}
            >
              <Input
                placeholder='이메일'
                autoComplete={'off'}
                style={{ height: '5vh', backgroundColor: '#d1d1d1' }}
              />
            </Form.Item>
            <Form.Item
              name='password'
              rules={[{ required: true, message: '비밀번호를 확인해주세요.' }]}
              style={{ marginTop: 8 }}
            >
              <Input
                type='password'
                placeholder='비밀번호'
                autoComplete={'off'}
                style={{ height: '5vh', backgroundColor: '#d1d1d1' }}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                className='login-form-button'
                style={{
                  width: '100%',
                  height: '40px',
                  marginTop: 16,
                  backgroundColor: 'green',
                  color: '#ffffff',
                  borderRadius: '13px',
                }}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </LoginLayout>
  );
};

export const LoginLayout = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding-top: 100px;
`;
export const FormTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  margin: 10px auto;
`;

export default Login;
