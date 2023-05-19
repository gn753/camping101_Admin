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
  create: {
    visible: boolean;
    num_id: number | {};
  };
  setCreate: Dispatch<
    SetStateAction<{
      visible: boolean;
      num_id: number | {};
    }>
  >;
}

export default function CreateOwnerCampModal({ create, setCreate }: props) {
  const [form] = Form.useForm();
  const [initialValues, setInitialValues] = useState({});
  const userJwt: any = localStorage.getItem('jwt');
  const { access_token, refresh_token } = JSON.parse(userJwt);

  // console.log(access_token);
  // console.log(initialValues, '상담1');
  const onSubmit = async () => {
    const body = {
      animalCapable: form.getFieldValue('animalCapable'),
      businessNo: form.getFieldValue('businessNo'),
      campName: form.getFieldValue('campName'),
      equipmentTools: form.getFieldValue('equipmentTools'),
      facility: form.getFieldValue('facility'),
      facilityCnt: {
        showerCnt: Number(form.getFieldValue('showerCnt')),
        toiletCnt: Number(form.getFieldValue('toiletCnt')),
        waterProofCnt: Number(form.getFieldValue('waterProofCnt')),
      },
      firstImage: form.getFieldValue('firstImage'),
      homepage: form.getFieldValue('homepage'),
      intro: form.getFieldValue('intro'),
      leisure: form.getFieldValue('leisure'),
      location: {
        addr1: form.getFieldValue('addr1'),
        addr2: form.getFieldValue('addr2'),
        environment: form.getFieldValue('environment'),
        latitude: form.getFieldValue('latitude'),
        longitude: form.getFieldValue('longitude'),
      },
      memberId: create.num_id,
      oneLineReserveYn: form.getFieldValue('oneLineReserveYn'),
      openDateOfWeek: form.getFieldValue('openDateOfWeek'),
      openSeason: form.getFieldValue('openSeason'),
      tel: form.getFieldValue('tel'),
    };
    console.log(body);

    try {
      await axiosSetting.post(
        `/api/camp`,
        { ...body },
        {
          headers: {
            Authorization: access_token,
            'Content-Type': 'application/json',
          },
        }
      ); // 게시글 작성

      setCreate({ visible: false, num_id: 0 });
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
        setCreate({ visible: false, num_id: 0 });
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
              <Input placeholder='캠핑장 이름을 입력해주세요' />
            </Form.Item>
          </Col>
          <Col span={11} offset={2}>
            <Form.Item
              label='사업자번호'
              tooltip='사업자번호 입니다'
              name={['businessNo']}
            >
              <Input placeholder='사업자번호를 입력해주세요' />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={11}>
            <Form.Item
              label='homepage'
              required
              tooltip='홈페이지 주소 입니다'
              name={['homepage']}
            >
              <Input placeholder='홈페이지 주소를 입력해주세요' />
            </Form.Item>
          </Col>
          <Col span={11} offset={2}>
            <Form.Item
              label='전화번호'
              required
              tooltip='전화번호 입니다'
              name={['tel']}
            >
              <Input placeholder='tel' />
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
              <Select>
                <Option value={'봄'}>봄</Option>
                <Option value={'여름'}>여름</Option>
                <Option value={'가을'}>가을</Option>
                <Option value={'겨울'}>겨울</Option>
              </Select>
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
              label='상태'
              required
              tooltip='상태 입니다'
              name={['manageStatus']}
            >
              <Select>
                <Option value={'AUTHORIZED'}>활성화</Option>
                <Option value={'UNAUTHORIZED'}>비 활성화</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={11} offset={2}>
            <Form.Item
              label='온라인 서비스'
              required
              tooltip='온라인 서비스 입니다'
              name={['oneLineReserveYn']}
            >
              <Select>
                <Option value={'true'}>활성화</Option>
                <Option value={'false'}>비 활성화</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={11}>
            <Form.Item
              label='애완동물 동반'
              required
              tooltip='애완동물 동반여부'
              name={['animalCapable']}
            >
              <Select>
                <Option value={'true'}>동반 가능</Option>
                <Option value={'false'}>동반 금지</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={11} offset={2}>
            <Form.Item
              label='캠핑장 오픈날짜'
              required
              tooltip='오픈 날짜입니다'
              name={['openDateOfWeek']}
            >
              <Input placeholder='오픈 날짜를 입력해주세요' />
            </Form.Item>
          </Col>
        </Row>
        <div style={{ fontSize: '17px', fontWeight: '700' }}>
          편의시설 총 갯수
        </div>
        <Row>
          <Col span={7}>
            <Form.Item
              label='샤워실'
              required
              tooltip='샤워실 입니다'
              name={['showerCnt']}
            >
              <Input placeholder='샤워실이 몇개인지 적어주세요' />
            </Form.Item>
          </Col>
          <Col span={7} offset={1}>
            <Form.Item
              label='화장실'
              required
              tooltip='화장실 입니다'
              name={['toiletCnt']}
            >
              <Input placeholder='화장실이 몇개인지 적어주세요' />
            </Form.Item>
          </Col>
          <Col span={7} offset={1}>
            <Form.Item
              label='수영장'
              required
              tooltip='수영장 입니다'
              name={['waterProofCnt']}
            >
              <Input placeholder='수영장 갯수를 적어주세요' />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={10}>
            <Form.Item
              label={`편의시설`}
              required
              tooltip='편의시설 입니다'
              name={['facility']}
            >
              <Input placeholder='ex)편의점,마트' />
            </Form.Item>
          </Col>
          <Col span={10} offset={2}>
            <Form.Item
              label={`여가시설`}
              required
              tooltip='여가시설 입니다'
              name={['leisure']}
            >
              <Input placeholder='ex)수영장,샤워실,화장실' />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={10}>
            <Form.Item
              label={`장비제공`}
              required
              tooltip='장비제공 입니다'
              name={['equipmentTools']}
            >
              <Input placeholder='ex)장작제공,공구제공' />
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
              name={['addr1']}
            >
              <Input placeholder='주소' />
            </Form.Item>
          </Col>
          <Col span={7} offset={1}>
            <Form.Item
              label='상세주소'
              required
              tooltip='상세주소 입니다'
              name={['addr2']}
            >
              <Input placeholder='상세 주소' />
            </Form.Item>
          </Col>
          <Col span={7} offset={1}>
            <Form.Item
              label='지명'
              required
              tooltip='지명 입니다'
              name={['environment']}
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
              name={['latitude']}
            >
              <Input placeholder='latitude' />
            </Form.Item>
          </Col>
          <Col span={10} offset={1}>
            <Form.Item
              label='longitude'
              required
              tooltip='longitude 입니다'
              name={['longitude']}
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
                placeholder='내용을 적어주세요'
                style={{ height: '300px' }}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}
