import { Dispatch, SetStateAction, useState } from 'react';
import {
  Form,
  Input,
  Select,
  Row,
  Col,
  message,
  Modal,
  Tabs,
  Table,
} from 'antd';
import { axiosSetting } from 'api/api';
import moment from 'moment';
import styled from '@emotion/styled';

const { Option } = Select;
const { TabPane } = Tabs;
const { Column } = Table;
const { TextArea } = Input;
type DATA = {
  createdAt: string;
  deletedAt: null | string;
  email: string;
  image: string;
  memberId: number;
  memberStatus: string;
  memberType: string;
  nickname: string;
  phoneNumber: string;
  signUpType: string;
};
interface props {
  modalData: {
    visible: boolean;
    data: DATA | {};
  };
  setModalData: Dispatch<
    SetStateAction<{
      visible: boolean;
      data: DATA | {};
    }>
  >;
}

export default function UserModal({ modalData, setModalData }: props) {
  const [form] = Form.useForm();
  const [initialValues, setInitialValues] = useState({
    ...modalData.data,
  });
  console.log(initialValues);
  const userJwt: any = localStorage.getItem('jwt');
  const { access_token, refresh_token } = JSON.parse(userJwt);
  console.log(access_token);
  const onSubmit = async () => {
    const memberStatus = form.getFieldValue('memberStatus');
    console.log(memberStatus, 'memberStatus');
    const id = initialValues.memberId;
    console.log(id, 'memberId');
    // console.log(body, 'body');
    try {
      const testUrl = `api/admin/member?memberId=${id}&memberStatus=${memberStatus}`;
      await axiosSetting.put(
        testUrl,
        { memberStatus: memberStatus },
        {
          headers: {
            Authorization: access_token,
            'Content-Type': 'application/json',
          },
        }
      ); // 유저정보 수정
      setModalData({ visible: false, data: {} });
    } catch (error: any) {
      message.error(error);
    }
  };
  return (
    <Modal
      title={`상세정보`}
      // visible={true}
      open={true}
      closable={false}
      maskClosable={false}
      width={'80%'}
      style={{ top: 25, bottom: 25 }}
      onCancel={() => {
        setModalData({ visible: false, data: {} });
      }}
      onOk={() => onSubmit()}
    >
      <Form
        form={form}
        layout='vertical'
        labelAlign='left'
        style={{ textAlign: 'left' }}
        initialValues={initialValues}
        // requiredMark={'required'}
      >
        <Row>
          <Col span={11}>
            <Form.Item
              label='memberId'
              required
              tooltip='memberId'
              name={['memberId'].toString()}
            >
              <Input placeholder='memberId 입력해주세요' readOnly={true} />
            </Form.Item>
          </Col>
          <Col span={11} offset={2}>
            <Form.Item label='생성 일자' required tooltip='생성 날짜 입니다'>
              <Input
                placeholder='생성일자 입력해주세요'
                readOnly={true}
                value={moment(initialValues.createdAt)
                  .format('YYYY-MM-DD')
                  .toString()}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={11}>
            <Form.Item
              label='닉네임'
              required
              tooltip='닉네임를 입력해주세요'
              name={['nickname'].toString()}
            >
              <Input placeholder='닉네임를 입력해주세요' readOnly={true} />
            </Form.Item>
          </Col>
          <Col span={11} offset={2}>
            <Form.Item
              label='이메일'
              required
              tooltip='이메일 입니다'
              name={['email'].toString()}
            >
              <Input placeholder='이메일을 입력해주세요' readOnly={true} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={11}>
            <Form.Item
              label='타입'
              required
              tooltip='멤버 타입 입력해주세요'
              name={['memberType'].toString()}
            >
              <Input placeholder='memberType' readOnly={true} />
            </Form.Item>
          </Col>
          <Col span={11} offset={2}>
            <Form.Item
              label='핸드폰번호'
              required
              tooltip='핸드폰 입니다'
              name={['phoneNumber'].toString()}
            >
              <Input placeholder='핸드폰 번호를 입력해주세요' readOnly={true} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item
              label='회원 상태'
              required
              tooltip='회원 상태 입니다'
              name={['memberStatus'].toString()}
            >
              <Select>
                <Option value='NOT_ACTIVATED'>NOT_ACTIVATED</Option>
                <Option value='IN_USE'>IN_USE</Option>
                <Option value='STOPPED'>STOPPED</Option>
                <Option value='WITHDRAW'>WITHDRAW</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div>프로필 사진</div>

            {/* <Img
              src={initialValues.image}
              alt={initialValues.image ? '' : '없음'}
            /> */}
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}
const Img = styled.img`
  margin-top: 20px;
  width: 200px;
  height: auto;
`;
