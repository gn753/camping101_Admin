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
  console.log(initialValues, '상담1');
  const onSubmit = async () => {
    // let tagArr: string[] = [];
    // initialValues.recTags!.forEach((element: string, idx: number) => {
    //   const tagArrData = form.getFieldValue(['recTags', `${idx}`]);
    //   tagArr.push(tagArrData);
    // });
    // console.log(tagArr, 'tagArr');

    const body = {
      campLogId: form.getFieldValue('campLogId'),
    };
    try {
      await axiosSetting.patch(`/api/camp/${initialValues.campId}`, body); // 리뷰내역 수정

      setModalData({ visible: false, data: {} });
    } catch (error: any) {
      message.error(error);
    }
  };
  return (
    <Modal
      title={`상세정보`}
      visible={true}
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
          <Col span={24}>
            <Form.Item
              label='오픈 시즌'
              required
              tooltip='openSeason 입니다'
              name={['openSeason']}
            >
              <Input placeholder='openSeason' />
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
