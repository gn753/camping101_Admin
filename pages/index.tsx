import { useRouter } from 'next/router';

import { useEffect } from 'react';
import { axiosSetting } from 'api/api';
const redirectTo = '/';

const Index = () => {
  const router = useRouter();
  if (typeof window !== 'undefined') {
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
