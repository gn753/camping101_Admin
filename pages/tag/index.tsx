import styled from '@emotion/styled';
import { Table, Button, Row } from 'antd';
import { axiosSetting } from 'api/api';
import Loading from 'components/loading';
import Editor from 'components/modal/tagModal';
import Create from 'components/modal/createTagModal';
import moment from 'moment';
import { SetStateAction, useEffect, useState } from 'react';
import { TableRowSelection } from 'antd/es/table/interface';
import useInput from 'hook/useInput';

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
  const [onlyCommentData, setOnlyCommebtData] = useState([]);
  const [isData, setIsData] = useState(false);
  const [create, setCreate] = useState({ visible: false, indexNum: 0 });
  const [modalData, setModalData] = useState({ visible: false, data: {} });
  const [select, setSelect] = useState<TableRowSelection<any>[]>([]);
  const [isDel, setIsDel] = useState(false);
  useEffect(() => {
    api();
  }, [modalData, create, isDel]);
  console.log(commentData);

  const api = async () => {
    try {
      const res: Props = await axiosSetting.get(`api/admin/rectag`);
      console.log(res, '성공');
      setIsData(true);
      setCommebtData(res.data.recTags);
      setOnlyCommebtData(res.data.recTags);
    } catch (err) {
      console.log(err, '옴?');
    }
  };
  const Del = async () => {
    if (select.length === 0) return alert('선택해주세요');
    console.log(select);
    for (let index = 0; index < select.length; index++) {
      await axiosSetting.delete(`/api/admin/rectag/${select[index]}`);
    }
    setIsDel(!isDel);
  };
  const searchValue = useInput('');
  const searchOnclick = (e: any) => {
    console.log(searchValue.value);

    const dataFliter = commentData.filter(
      (item: any) => item.name === searchValue.value
    );
    setCommebtData(dataFliter);
  };
  useEffect(() => {}, [searchValue]);
  return (
    <>
      {create.visible && (
        <>
          <Create modalData={create} setModalData={setCreate}></Create>
        </>
      )}
      {modalData.visible && (
        <>
          <Editor modalData={modalData} setModalData={setModalData} />
        </>
      )}
      {!isData && <Loading />}
      {isData && (
        <>
          <BtnBox>
            <button
              onClick={() =>
                setCreate({ visible: true, indexNum: commentData.length++ })
              }
            >
              생성
            </button>
            &nbsp;/&nbsp;
            <button onClick={Del}>삭제</button>
          </BtnBox>
          <SearchBox>
            <input type='text' {...searchValue} />
            <button onClick={searchOnclick}>검색</button> &nbsp;/&nbsp;
            <button onClick={() => setCommebtData(onlyCommentData)}>
              리셋
            </button>
          </SearchBox>
          <Table
            style={{ marginBottom: 100 }}
            rowKey={(e: any) => e.recTagId}
            dataSource={commentData}
            rowSelection={{
              onChange: (e: any) => setSelect(e),
            }}
            pagination={{ hideOnSinglePage: true }}
          >
            <>
              <Column
                title={'생성일자'}
                dataIndex={'createdAt'}
                render={(e) => <>{moment(e).format('YYYY-MM-DD')}</>}
              />
              <Column title={'이름'} dataIndex={'name'} />

              <Column
                title={'활성화'}
                dataIndex={'useYn'.toString()}
                render={(e) => (
                  <>
                    {e === true ? '활성화' : e === false ? '비활성화' : '없음'}
                  </>
                )}
              />
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
        </>
      )}
    </>
  );
};
export default index;
const BtnBox = styled.span`
  button {
    cursor: pointer;
    &:hover {
      color: bule;
    }
  }
`;
const SearchBox = styled.div`
  input {
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    margin-left: 5px;
  }
  button {
    border: 1px solid #dcdcdc;
    padding: 0 2px;
    border-radius: 5px;
    width: auto;
    height: auto;
  }
`;
