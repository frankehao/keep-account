import React from 'react';
import {useTags} from 'useTags';
import {useParams} from 'react-router-dom';
import Layout from 'components/Layout';
import Icon from 'components/icon';
import {Button} from '../components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';
import {Space} from '../components/Space';
import {Center} from '../components/Center';

type Params = {
  id: string
}
const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  line-height: 14px;
  padding: 14px;
  background: white;
  align-items: center;
`;
const InputWrapper = styled.div`
  background: white;
  padding-left: 15px;
  margin-top: 8px;
`;
const Tag: React.FC = () => {
  const {findTag} = useTags();
  let {id} = useParams<Params>();
  // eslint-disable-next-line
  const tag = findTag(parseInt(id));
  return (
    <Layout>
      <Topbar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>
      <InputWrapper>
        <Input label="标签名" type="text" placeholder="标签名" value={tag.name}/>
      </InputWrapper>
      <div>
        <Center>
          <Space/>
          <Space/>
          <Space/>
          <Button> 删除标签</Button>
        </Center>
      </div>
    </Layout>
  )
    ;
};
export {Tag};