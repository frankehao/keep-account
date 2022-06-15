import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import Nav from 'components/Nav';

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
type Props = {
  className?: string;
  scrollTop?: number
}
const Layout: React.FC<Props> = (props) => {
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      if (!mainRef.current) {return;}//传入了一个数值，设置Main的滚动条每次都到9999
      mainRef.current.scrollTop = props.scrollTop!;
    }, 0);
  }, [props.scrollTop]);
  return (
    <Wrapper>
      <Main ref={mainRef} className={props.className}>{props.children}</Main>
      <Nav/>
    </Wrapper>
  );
};

Layout.defaultProps = {
  scrollTop: 0
};
export default Layout;
