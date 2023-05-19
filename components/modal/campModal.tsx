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
// type DATA = {
//   campLogId: string;
//   createdAt: string;
//   description: string | null;
//   image: string;
//   image1: string;
//   image2: string;
//   image3: string;
//   image4: string;
//   image5: string;
//   like: number;
//   recTags: string[] | [];
//   siteId: number;
//   title: string;
//   updatedAt: number | null;
//   view: number;
//   visitedAt: string;
//   visitedWith: string;
//   writerEmail: string;
//   writerNickName: string;
// };
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

export default function TagModal({ modalData, setModalData }: props) {
  const [form] = Form.useForm();
  const [initialValues, setInitialValues] = useState({
    ...modalData.data,
  });
  const userJwt: any = localStorage.getItem('jwt');
  const { access_token, refresh_token } = JSON.parse(userJwt);
  console.log(access_token);
  console.log(initialValues, '상담1');
  const onSubmit = async () => {
    const body = [
      {
        campAuthId: '',
        campAuthStatus: form.getFieldValue('campAuthStatus'),
        campId: form.getFieldValue('campId'),
        campName: form.getFieldValue('campName'),
      },
    ];
    try {
      await axiosSetting.put(
        `/api/camp`,
        { ...body },
        {
          headers: {
            Authorization: access_token,
            'Content-Type': '*',
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
        <Row>
          <Col span={11}>
            <Form.Item
              label='view 상태'
              required
              tooltip='상태 입니다'
              name={['manageStatus']}
            >
              <Select>
                <Option value={'AUTHORIZED'}>활성화</Option>
                <Option value={'UNAUTHORIZED'}>비활성화</Option>
              </Select>
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
