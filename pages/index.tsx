import { useRouter } from 'next/router';

import { useEffect } from 'react';
import { axiosSetting } from 'api/api';
const redirectTo = '/';

const Index = () => {
  useEffect(() => {
    api();
  }, []);

  const api = async () => {
    try {
      const res = await axiosSetting.get(`/api/admin/member?memberType=ADMIN`);
      console.log(res, '성공');
    } catch (err) {
      console.log(err, '옴?');
    }
  };

  if (typeof window !== 'undefined') {
    const router = useRouter();
    router.push(redirectTo);
  }
  return <>메인입니다</>;
};

// Index.getInitialProps = async ({ ctx }: any) => {
//   if (ctx && ctx.req) {
//     ctx.res.statusCode = 302;
//     ctx.res.setHeader('Location', redirectTo);
//   }
//   return { props: '' };
// };

export default Index;
