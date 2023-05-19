import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
const Loading = () => {
  return (
    <Wrapper>
      <Card key={1}>
        <Title />
        <Bottom>
          <Circle />
          <Title />
        </Bottom>
        <Content />
      </Card>
    </Wrapper>
  );
};
const SkeletonItem = styled.div`
  width: 100%;
  height: 30px;
  background-color: #f2f2f2;
  position: relative;
  overflow: hidden;
  border-radius: 4px;

  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;
    animation: skeleton-gradient 1.5s infinite ease-in-out;
  }
`;

const Wrapper = styled.ul``;

const Card = styled.li``;

const Title = styled(SkeletonItem)`
  margin: 10px 0;
`;

const Content = styled(SkeletonItem)`
  height: 130px;
`;

const Bottom = styled.div`
  display: flex;
  gap: 12px;
`;

const Circle = styled(SkeletonItem)`
  width: 35px;
  height: 30px;
  border-radius: 50%;
  background-color: #f2f2f2;
  position: relative;
  top: 10px;
  overflow: hidden;
`;

export default Loading;
