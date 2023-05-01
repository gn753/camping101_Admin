import styled from '@emotion/styled';
import { Table, Button, Row, message } from 'antd';
import { axiosSetting } from 'api/api';
import moment from 'moment';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Editor from '../../components/modal/userModal';
import Loading from 'components/loading';
const { Column } = Table;
type CrudProps = {
  type: string;
  data: {};
};
export default function UserInfo() {
  const [memberType, setMemberType] = useState('일반');
  const CRUD = async ({ type, data }: CrudProps) => {};
  const [select, setSelect] = useState([]);
  const [modalData, setModalData] = useState({ visible: false, data: {} });
  const [userData, setUserData] = useState([]);
  console.log(userData);
  const [isData, setIsData] = useState(false);
  useEffect(() => {
    api();
  }, [modalData, memberType]);

  const api = async () => {
    const member = memberType === '일반' ? 'CUSTOMER' : 'OWNER';

    try {
      const res = await axiosSetting.get(
        `api/admin/member?memberType=${member}`
        //&pageNumber=1&recordSize=1
      );
      console.log(res, '성공');
      setUserData(res.data.content);
      setIsData(true);
    } catch (err) {
      console.log(err, '옴?');
    }
  };

  return (
    <>
      {!isData && <Loading />}
      {isData && (
        <>
          {modalData.visible && (
            <>
              <Editor modalData={modalData} setModalData={setModalData} />
            </>
          )}
          <Row justify='start' style={{ marginBottom: 16 }}>
            <Select
              selected={memberType.includes('일반')}
              onClick={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMemberType(e.target.innerText)
              }
            >
              일반
            </Select>
            &nbsp; / &nbsp;
            <Select
              selected={memberType.includes('주인')}
              onClick={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMemberType(e.target.innerText)
              }
            >
              주인
            </Select>
          </Row>
          <Table
            style={{ marginBottom: 100 }}
            rowKey={(e: any) => e.memberId}
            dataSource={userData}
            rowSelection={
              {
                // onChange: (e) => setSelect(e),
              }
            }
            pagination={{ hideOnSinglePage: true }}
          >
            <Column
              title={'생성일자'}
              dataIndex={'createdAt'}
              render={(e) => <>{moment(e).format('YYYY-MM-DD')}</>}
            />
            <Column title={'분류'} dataIndex={'memberType'} />
            <Column title={'이메일'} dataIndex={'email'} />
            <Column title={'닉네임'} dataIndex={'nickname'} />
            <Column title={'핸드폰'} dataIndex={'phoneNumber'} />
            <Column title={'상태'} dataIndex={'memberStatus'} />
            {/* <Column title={'상태'} dataIndex={'userStatusType'} render={(e) => <>{e === 'ACTIVATE' ? '활성화' : '비활성화'}</>} /> */}
            <Column
              key={''}
              title={() => <></>}
              width={'7%'}
              align={'center'}
              render={(e, row: any) => (
                <>
                  <Button
                    size='small'
                    type='ghost'
                    onClick={() => setModalData({ visible: true, data: row })}
                  >
                    더보기
                  </Button>
                </>
              )}
            />
          </Table>
        </>
      )}
    </>
  );
}

const Select: any = styled.div<{ selected: string }>`
  font-weight: ${(props) => (props.selected ? '700' : '400')};
  font-size: ${(props) => (props.selected ? '16' : '14')};
  cursor: pointer;
`;
