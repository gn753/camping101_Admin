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
type DATA = {
  campLogId: string;
  createdAt: string;
  description: string | null;
  image: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  like: number;
  recTags: string[] | [];
  siteId: number;
  title: string;
  updatedAt: number | null;
  view: number;
  visitedAt: string;
  visitedWith: string;
  writerEmail: string;
  writerNickName: string;
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

export default function Editor({ modalData, setModalData }: props) {
  const [form] = Form.useForm();
  const [initialValues, setInitialValues] = useState({
    ...modalData.data,
  });

  const userJwt: any = localStorage.getItem('jwt');
  const { access_token, refresh_token } = JSON.parse(userJwt);
  console.log(initialValues, '상담1');
  const [tag, setTag] = useState(initialValues.recTags);
  const onSubmit = async () => {
    let tagArr: string[] = [];
    initialValues.recTags!.forEach((element: string, idx: number) => {
      const tagArrData = form.getFieldValue(['recTags', `${idx}`]);
      tagArr.push(tagArrData);
    });
    console.log(tagArr, 'tagArr');

    const body = {
      campLogId: form.getFieldValue('campLogId'),
      createdAt: initialValues.createdAt,
      description: null,
      image: initialValues.image,
      image1: initialValues.image1,
      image2: initialValues.image2,
      image3: initialValues.image3,
      image4: initialValues.image4,
      image5: initialValues.image5,
      like: 0,
      recTags: tagArr,
      siteId: 1,
      title: form.getFieldValue('title'),
      updatedAt: Date.now(),
      view: 0,
      visitedAt: initialValues.visitedAt,
      visitedWith: form.getFieldValue('visitedWith'),
      writerEmail: form.getFieldValue('writerEmail'),
      writerNickName: form.getFieldValue('writerNickName'),
    };
    try {
      await axiosSetting.patch(`/api/camplog/${initialValues.campLogId}`, {
        ...body,
      }),
        {
          headers: {
            Authorization: access_token,
            'Content-Type': 'application/json',
          },
        }; // 리뷰내역 수정

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
              label='campLogId'
              required
              tooltip='campLogId입니다'
              name={['campLogId']}
            >
              <Input placeholder='campLogId 입력해주세요' readOnly={true} />
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
              label='닉네임'
              required
              tooltip='닉네임를 입력해주세요'
              name={['writerNickName']}
            >
              <Input placeholder='닉네임를 입력해주세요' />
            </Form.Item>
          </Col>
          <Col span={11} offset={2}>
            <Form.Item
              label='이메일'
              required
              tooltip='이메일 입니다'
              name={['writerEmail']}
            >
              <Input placeholder='학원 주소를 입력해주세요' readOnly={true} />
            </Form.Item>
          </Col>
        </Row>
        <div>
          <span style={{ color: '#ff4d4f' }}>* </span>태그 영역
        </div>
        <Row>
          {initialValues.recTags!.map((item: any, idx: number) => (
            <Col span={2} offset={1} key={idx}>
              <Form.Item
                label={`태그${idx + 1}`}
                required
                tooltip='리뷰 태그입니다'
                name={['recTags', `${idx}`]}
              >
                <Input placeholder='태그' />
              </Form.Item>
            </Col>
          ))}
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              label='타이틀'
              required
              tooltip='title 입니다'
              name={['title']}
            >
              <Input placeholder='title' />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              label='내용'
              required
              tooltip='description 입니다'
              name='description'
            >
              <TextArea placeholder='상담내용 입니다' />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}
