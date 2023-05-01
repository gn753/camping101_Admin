import { Dispatch, SetStateAction, useState } from 'react';
import { Form, Input, Select, Row, Col, Modal, Tabs, Table } from 'antd';
import { axiosSetting } from 'api/api';
import moment from 'moment';
import axios from 'axios';

const { Option } = Select;
const { TabPane } = Tabs;
const { Column } = Table;
const { TextArea } = Input;
type DATA = {
  recTagId: number;
  createdAt: string;
  useYn: boolean;
  name: string;
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

export default function TagModal({ modalData, setModalData }: props) {
  const [form] = Form.useForm();
  const [initialValues, setInitialValues] = useState({
    ...modalData.data,
  });
  console.log(initialValues, '상담1');
  const userJwt: any = localStorage.getItem('jwt');
  const { access_token, refresh_token } = JSON.parse(userJwt);
  const onSubmit = async () => {
    const body = {
      name: form.getFieldValue('name'),
      userYn: form.getFieldValue('useYn'),
    };
    console.log(body, 'body');

    try {
      const testUrl = `/api/admin/rectag?name=${body.name}&userYn=${body.userYn}`;
      // console.log(testUrl, 'url');
      await axiosSetting.patch(
        testUrl,
        {
          name: body.name,
          userYn: body.userYn,
        },
        {
          headers: {
            accept: '*/*',
            // 'Content-Type': 'application/json',
            Authorization: access_token,
          },
        }
      ); // 리뷰내역 수정
      setModalData({ visible: false, data: {} });
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <Modal
      title={`상세정보`}
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
              label='recTagId'
              required
              tooltip='recTagId'
              name={['recTagId']}
            >
              <Input placeholder='recTagId 입력해주세요' readOnly={true} />
            </Form.Item>
          </Col>
          <Col span={11} offset={2}>
            <Form.Item label='생성 일자' required tooltip='생성 날짜 입니다'>
              <Input
                placeholder='생성일자 입력해주세요'
                readOnly={true}
                value={moment(initialValues.createdAt).format('YYYY-MM-DD')}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={11}>
            <Form.Item
              label='태그 이름'
              required
              tooltip='태그 이름를 입력해주세요'
              name={['name']}
            >
              <Input placeholder='태그이름을 입력해주세요' />
            </Form.Item>
          </Col>
          <Col span={11} offset={2}>
            <Form.Item
              label='태그 상태'
              required
              tooltip='태그 상태 입니다'
              name={['useYn']}
            >
              <Select>
                <Option value={true}>활성화</Option>
                <Option value={false}>비 활성화</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}
