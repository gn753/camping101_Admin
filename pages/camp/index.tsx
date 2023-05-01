// import styled from '@emotion/styled';
import { Table, Button, Row } from 'antd';
import { axiosSetting } from 'api/api';
import Editor from 'components/modal/campModal';
import moment from 'moment';
import { useEffect, useState } from 'react';

const { Column } = Table;

interface Props {
  data: any;
  // {
  //   campLogs: any;
  //   pageNumber: number;
  //   recordSize: number;
  //   total: number;
  // };
}

const Camp = () => {
  const [campData, setCampData] = useState([]);
  console.log(campData);
  // const userJwt: any = localStorage.getItem('jwt');
  // const { access_token, refresh_token } = JSON.parse(userJwt);
  const [modalData, setModalData] = useState({ visible: false, data: {} });
  useEffect(() => {
    api();
  }, []);

  const api = async () => {
    try {
      const getNum = await axiosSetting.get('/api/member');

      console.log(getNum);

      const id = getNum.data.member_id;

      const res: Props = await axiosSetting.get(`api/camp/owner/${id}`, {
        headers: {
          // accept: '*/*',
          'Content-Type': 'application/json',
          // Authorization: access_token,
        },
      });
      console.log(res, '성공');
      setCampData(res.data.content);
    } catch (err) {
      console.log(err, '옴?');
    }
  };

  return (
    <>
      {' '}
      {modalData.visible && (
        <>
          <Editor modalData={modalData} setModalData={setModalData} />
        </>
      )}
      <button
      // onClick={() =>
      //   // setCreate({ visible: true, indexNum: commentData.length++ })
      // }
      >
        생성
      </button>
      <Row justify='start' style={{ marginBottom: 16 }}></Row>
      <Table
        style={{ marginBottom: 100 }}
        rowKey={(e: any) => e.campId}
        dataSource={campData}
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
        <Column title={'이름'} dataIndex={'campName'} />

        <Column title={'오픈시즌'} dataIndex={'openSeason'} />
        <Column title={'페이지 노출'} dataIndex={'animalCapable'} />
        <Column
          key={''}
          title={() => <>상세</>}
          width={'7%'}
          align={'center'}
          render={(e: any, row: any) => (
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
        <Column
          key={''}
          title={() => <>삭제</>}
          width={'7%'}
          align={'center'}
          render={(e: any, row: any) => (
            <>
              <Button
                size='small'
                type='ghost'
                onClick={() => setModalData({ visible: true, data: row })}
              >
                삭제
              </Button>
            </>
          )}
        />
      </Table>
    </>
  );
};
export default Camp;
