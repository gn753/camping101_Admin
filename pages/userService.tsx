import { axiosSetting } from 'api/api';
import { useState, useEffect } from 'react';

interface Props {
  data:
    | {
        campLogs: any;
        pageNumber: number;
        recordSize: number;
        total: number;
      }
    | any;
}

export default function UserService() {
  const [userData, setUserData] = useState([]);
  const [modalData, setModalData] = useState({ visible: false, data: {} });
  useEffect(() => {
    api();
  }, []);

  const api = async () => {
    try {
      // const res: Props = await axiosSetting.get(`/api/admin/${campAuthId}`);
      // console.log(res, '성공');
      // setUserData(res.data.campLogs);
    } catch (err) {
      console.log(err, '옴?');
    }
  };

  return <> 회원서비스여</>;
}
