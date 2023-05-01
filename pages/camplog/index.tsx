import styled from '@emotion/styled';
import { Table, Button, Row } from 'antd';
import { axiosSetting } from 'api/api';
import Editor from 'components/modal/camplogModal';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { ReactNode } from 'types';
import Loading from 'components/loading';
const { Column } = Table;

interface Props {
  data: {
    campLogs: any;
    pageNumber: number;
    recordSize: number;
    total: number;
  };
}

export default function CampPage(props: ReactNode) {
  // const CRUD = async ({ type, data }: CrudProps) => {};
  const [cameData, setCameData] = useState([]);
  const [modalData, setModalData] = useState({ visible: false, data: {} });
  const [isData, setIsData] = useState(false);
  useEffect(() => {
    api();
  }, [modalData]);

  const api = async () => {
    try {
      const res: Props = await axiosSetting.get(`api/camplog`);

      setCameData(res.data.campLogs);
      setIsData(true);
    } catch (err) {
      console.log(err, '옴?');
    }
  };
  console.log(cameData);

  return (
    <>
      {' '}
      {!isData && <Loading />}
      {isData && (
        <>
          {modalData.visible && (
            <>
              <Editor modalData={modalData} setModalData={setModalData} />
            </>
          )}
          <Row justify='start' style={{ marginBottom: 16 }}></Row>
          <Table
            style={{ marginBottom: 100 }}
            rowKey={(e: any) => e.campLogId}
            dataSource={cameData}
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
          </Table>
        </>
      )}
    </>
  );
}
