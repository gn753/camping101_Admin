import styled from '@emotion/styled';
import { Table, Button, Row, message } from 'antd';
import { axiosSetting } from 'api/api';
import moment from 'moment';
import axios from 'axios';
import { useEffect, useState } from 'react';
const { Column } = Table;
type CrudProps = {
  type: string;
  data: any;
};
export default function UserInfo() {
  const [memberType, setMemberType] = useState('일반');
  const CRUD = async ({ type, data }: CrudProps) => {};
  const [select, setSelect] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    api();
  }, []);

  const api = async () => {
    const member = memberType === '일반' ? 'CUSTOMER' : 'OWNER';
    console.log(member);

    try {
      const res = await axiosSetting.get(
        `api/admin/member?memberType=${member}&pageNumber=1&recordSize=1`
      );
      console.log(res, '성공');
      setUserData(userData);
    } catch (err) {
      console.log(err, '옴?');
    }
  };

  return (
    <>
      {' '}
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
        rowKey={(e: any) => e.id}
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
        <Column
          title={'성별'}
          dataIndex={'genderType'}
          render={(e) => (
            <>{e === 'Man' ? '남성' : e === 'Woman' ? '여성' : '상관없지롱'}</>
          )}
        />
        <Column title={'이름'} dataIndex={'name'} />
        <Column title={'이메일'} dataIndex={'email'} />
        <Column title={'닉네임'} dataIndex={'nickName'} />
        {memberType === '일반' && (
          <Column title={'회원상태'} dataIndex={'customerDeletedYN'} />
        )}
        {memberType === '학원' && (
          <Column title={'회원상태'} dataIndex={'academyDeletedYN'} />
        )}
        {/* <Column title={'상태'} dataIndex={'userStatusType'} render={(e) => <>{e === 'ACTIVATE' ? '활성화' : '비활성화'}</>} /> */}
        <Column
          key={''}
          title={() => <></>}
          width={'7%'}
          align={'center'}
          render={(e, row) => (
            <>
              <Button
                size='small'
                type='ghost'
                onClick={() => CRUD({ type: 'U', data: row })}
              >
                더보기
              </Button>
            </>
          )}
        />
      </Table>
    </>
  );
}

const Select: any = styled.div<{ selected: string }>`
  font-weight: ${(props) => (props.selected ? '700' : '400')};
  font-size: ${(props) => (props.selected ? '16' : '14')};
  cursor: pointer;
`;
