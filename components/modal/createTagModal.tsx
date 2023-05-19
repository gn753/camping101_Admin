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
    indexNum: number;
  };
  setModalData: Dispatch<
    SetStateAction<{
      visible: boolean;
      indexNum: number;
    }>
  >;
}

export default function CreateTagModal({ modalData, setModalData }: props) {
  const [form] = Form.useForm();
  const [initialValues, setInitialValues] = useState({
    recTagId: modalData.indexNum,
    name: '',
    useYn: true,
  });
  const userJwt: any = localStorage.getItem('jwt');
  const { access_token, refresh_token } = JSON.parse(userJwt);
  console.log(access_token);
  console.log(initialValues, '상담1');

  const onSubmit = async () => {
    const body = {
      campLogId: initialValues.recTagId,
      name: form.getFieldValue('name'),
      useYn: form.getFieldValue('useYn'),
    };
    console.log(body, ':ㅇㄴㅇㄴㅇㄴ');

    try {
      await axiosSetting.post(
        `api/admin/rectag`,
        { ...body },
        {
          headers: {
            Authorization: access_token,
            'Content-Type': 'application/json',
          },
        }
      ); // 리뷰내역 수정

      setModalData({ visible: false, indexNum: 0 });
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
        setModalData({ visible: false, indexNum: 0 });
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
            <Form.Item
              label='태그 이름'
              required
              tooltip='태그 이름를 입력해주세요'
              name={['name']}
            >
              <Input placeholder='태그이름을 입력해주세요' />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={11} offset={0}>
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
