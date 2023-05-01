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

const { Option } = Select;
const { TabPane } = Tabs;
const { Column } = Table;
const { TextArea } = Input;

interface props {
  modalData: {
    visible: boolean;
    data: any | {};
  };
  setModalData: Dispatch<
    SetStateAction<{
      visible: boolean;
      data: any | {};
    }>
  >;
}

export default function CreateCampModal({ modalData, setModalData }: props) {
  const [form] = Form.useForm();
  const [initialValues, setInitialValues] = useState({
    ...modalData.data,
  });
  const userJwt: any = localStorage.getItem('jwt');
  const { access_token, refresh_token } = JSON.parse(userJwt);
  console.log(access_token);
  console.log(initialValues, '상담1');
  const onSubmit = async () => {
    const body = {
      campAuthStatus: 'string',
      campName: 'string',
      createDate: '',
      location: {
        addr1: 'string',
        addr2: 'string',
        environment: 'string',
        latitude: 'string',
        longitude: 'string',
      },
      nickName: 'string',
    };
    try {
      await axiosSetting.post(
        `/api/admin`,
        { ...body },
        {
          headers: {
            Authorization: access_token,
            'Content-Type': 'application/json',
          },
        }
      ); // 리뷰내역 수정

      setModalData({ visible: false, data: {} });
    } catch (error: any) {
      message.error(error);
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
              label='캠핑장 이름'
              required
              tooltip='캠핑장 이름 입니다'
              name={['campName']}
            >
              <Input placeholder='캠핑장 이름을 입력해주세요' readOnly={true} />
            </Form.Item>
          </Col>
          <Col span={11} offset={2}>
            <Form.Item label='닉네임' required tooltip='닉네임 입니다'>
              <Input
                placeholder='닉네임을 입력해주세요'
                readOnly={true}
                value={['nickName']}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={11}>
            <Form.Item
              label='오픈 시즌'
              required
              tooltip='openSeason 입니다'
              name={['openSeason']}
            >
              <Input placeholder='openSeason' />
            </Form.Item>
          </Col>
          <Col span={11} offset={2}>
            <Form.Item
              label='이미지'
              required
              tooltip='이미지 입니다'
              name={['firstImage']}
            >
              <Input placeholder='firstImage' />
            </Form.Item>
          </Col>
        </Row>
        <div style={{ fontSize: '17px', fontWeight: '700' }}>지도</div>
        <Row>
          <Col span={7}>
            <Form.Item
              label='주소'
              required
              tooltip='주소 입니다'
              name={['location', 'addr1']}
            >
              <Input placeholder='주소' />
            </Form.Item>
          </Col>
          <Col span={7} offset={1}>
            <Form.Item
              label='상세주소'
              required
              tooltip='상세주소 입니다'
              name={['location', 'addr2']}
            >
              <Input placeholder='상세 주소' />
            </Form.Item>
          </Col>
          <Col span={7} offset={1}>
            <Form.Item
              label='지명'
              required
              tooltip='지명 입니다'
              name={['location', 'environment']}
            >
              <Input placeholder='상세 주소' />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={10} offset={1}>
            <Form.Item
              label='latitude'
              required
              tooltip='latitude 입니다'
              name={['location', 'latitude']}
            >
              <Input placeholder='latitude' />
            </Form.Item>
          </Col>
          <Col span={10} offset={1}>
            <Form.Item
              label='longitude'
              required
              tooltip='longitude 입니다'
              name={['location', 'longitude']}
            >
              <Input placeholder='longitude' />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              label='내용'
              required
              tooltip='description 입니다'
              name='intro'
            >
              <TextArea
                placeholder='상담내용 입니다'
                style={{ height: '300px' }}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}
