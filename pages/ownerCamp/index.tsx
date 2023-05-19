import { Table, Button, Row } from 'antd';
import { axiosSetting } from 'api/api';
import moment from 'moment';
import { useCallback, useEffect, useState } from 'react';
import CreateModal from '../../components/modal/createOwnerCampModal';
import { useRouter } from 'next/router';
import Loading from 'components/loading';
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

const OwnerCamp = () => {
  const router = useRouter();
  const [campData, setCampData] = useState([]);

  const [create, setCreate] = useState({ visible: false, num_id: {} });
  const [userId, setUserId] = useState<number>(0);
  // const userJwt: any = localStorage.getItem('jwt');
  // const { access_token } = JSON.parse(userJwt);
  const [modalData, setModalData] = useState<{}>({ visible: false, data: {} });
  const [isData, setIsData] = useState<boolean>(false);
  const api = useCallback(async () => {
    try {
      const getNum = await axiosSetting.get('/api/member');

      const id = getNum.data.member_id;
      console.log(id, 'id');

      setUserId(id);
      await axiosSetting
        .get(
          `/api/camp/owner/${id}`,
          {
            headers: {
              accept: '*/*',
              'Content-Type': 'application/json',
              // Authorization: access_token,
            },
          }
          // {}
        )
        .then((res) => {
          console.log(res, '성공');
          setCampData(res.data.content);
          setIsData(true);
        });
    } catch (err) {
      console.log(err, '옴?');
    }
  }, []);
  // console.log(create);
  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    console.log(jwt, 'jwt');

    if (!jwt) {
      router.push('/login');
    }
    api();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api]);
  return (
    <>
      {create.visible && (
        <>
          <CreateModal create={create} setCreate={setCreate} />
        </>
      )}
      {!isData && <Loading />}
      {isData && (
        <>
          <button onClick={() => setCreate({ visible: true, num_id: userId })}>
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
      )}
    </>
  );
};

export default OwnerCamp;
