import { Form, Input, Button, Row, Col } from 'antd';
import styled from '@emotion/styled';
import { axiosSetting } from '../../api/api';
import axios from 'axios';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { SetterOrUpdater } from 'recoil';
import { useRouter } from 'next/router';
type LoginType = {
  email: string;
  password: string;
  memberType?: string;
};

interface JwtProps {
  jwt: undefined | null | string;
}
const url = 'api/signin/mail';
const Login = ({ jwt }: JwtProps) => {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState<string>('');
  useEffect(() => {
    if (!jwt) return;
    if (jwt) {
      router.push('/');
    }
  }, [jwt]);
  const onSubmit = async (body: LoginType) => {
    if (jwt) return;
    if (selectedType === '') return alert('주인 혹은 관리자를 선택해주세요');
    // 멤버 타입 설정 변수
    // const memberTypeVlue = selectedType === '주인' ? 'OWNER' : 'ADMIN';
    // body post 데이터 객체
    const loginData = {
      ...body,
      // memberType: memberTypeVlue,
    };
    console.log(loginData);
    //const url = `api/signin/mail?email=${loginData.email}&memberType=${loginData.memberType}&password=${loginData.password}`;
    await axiosSetting
      .post(url, body)
      .then((e: any) => {
        console.log(e, '성공');
        const jwtData = {
          access_token: e.headers.access_token,
          refresh_token: e.headers.refresh_token,
        };
        localStorage.setItem('jwt', JSON.stringify(jwtData));
        localStorage.setItem('member', selectedType);
        // localStorage.setItem('re_jwt', e.headers.refresh_token);
        router.push('/');
      })
      .catch((e) => {
        console.log(e);

        router.push('/login');
      });
  };

  const hanldeClick = (text: '주인' | '관리자') => {
    setSelectedType(text);
  };

  return (
    <LoginLayout>
      <FormTitle>캠핑 101 어드민</FormTitle>
      <MemberTypeBox>
        <MemberDiv
          selected={selectedType.includes('주인')}
          onClick={() => hanldeClick('주인')}
        >
          주인
        </MemberDiv>

        <MemberDiv
          selected={selectedType.includes('관리자')}
          onClick={() => hanldeClick('관리자')}
        >
          관리자
        </MemberDiv>
      </MemberTypeBox>
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

const LoginLayout = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding-top: 100px;
`;
const FormTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  margin: 10px auto;
`;
const MemberTypeBox = styled.div`
  width: 100%;
  margin: 20px auto;
  text-align: center;

  div {
    display: inline-block;
    cursor: pointer;
    margin: 0 20px;
    font-size: 20px;
  }
`;

interface MemberDivProps {
  selected: boolean;
}

const MemberDiv = styled.div<MemberDivProps>`
  font-weight: ${(props) => (props.selected ? '700' : '400')};
`;

export default Login;
