import styled from '@emotion/styled';
import { Table, Button, Row } from 'antd';
import { axiosSetting } from 'api/api';
import Loading from 'components/loading';
import Editor from 'components/modal/tagModal';
import moment from 'moment';
import { useEffect, useState } from 'react';

const { Column } = Table;

interface Props {
  [x: string]: any;
  data: any;
  // {
  //   campLogs: any;
  //   pageNumber: number;
  //   recordSize: number;
  //   total: number;
  // };
}

const index = () => {
  const [commentData, setCommebtData] = useState([]);
  const [isData, setIsData] = useState(false);
  const [modalData, setModalData] = useState({ visible: false, data: {} });
  useEffect(() => {
    api();
    console.log('dd');
  }, []);

  const api = async () => {
    try {
      const res: Props = await axiosSetting.get(`/api/admin/rectag`);
      console.log(res, '성공');
      setIsData(true);
      // setCommebtData(res);
    } catch (err) {
      console.log(err, '옴?');
    }
  };

  return (
    <>
      {modalData.visible && (
        <>
          <Editor modalData={modalData} setModalData={setModalData} />
        </>
      )}
      {!isData && <Loading />}
      {isData && (
        <Table
          style={{ marginBottom: 100 }}
          rowKey={(e: any) => e.campLogId}
          dataSource={commentData}
          rowSelection={
            {
              // onChange: (e) => setSelect(e),
            }
          }
          pagination={{ hideOnSinglePage: true }}
        >
          <>
            <Column
              title={'생성일자'}
              dataIndex={'createdAt'}
              render={(e) => <>{moment(e).format('YYYY-MM-DD')}</>}
            />
            <Column title={'분류'} dataIndex={'visitedWith'} />

            <Column title={'타이틀'} dataIndex={'title'} />
            <Column title={'이메일'} dataIndex={'writerEmail'} />
            <Column title={'닉네임'} dataIndex={'writerNickName'} />
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
          </>
        </Table>
      )}
    </>
  );
};
export default index;
