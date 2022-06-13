import React from 'react';
import {useTags} from 'hooks/useTags';
import {useParams, useHistory} from 'react-router-dom';
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
  const {findTag, updateTag, deleteTag} = useTags();
  let {id: idString} = useParams<Params>();
  // eslint-disable-next-line
  const tag = findTag(parseInt(idString));
  const tagContent = (tag: { id: number; name: string }) => (
    <div>
      <InputWrapper>
        <Input label="标签名" type="text" placeholder="标签名" value={tag.name}
               onChange={(e) => {updateTag(tag.id, {name: e.target.value});}}/>
      </InputWrapper>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button onClick={() => deleteTag(tag.id)}> 删除标签</Button>
      </Center>
    </div>);
  const history = useHistory();
  const onClickBack = () => {
    history.goBack();
  };
  return (
    <Layout>
      <Topbar>
        <Icon name="left" onClick={onClickBack}/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>
      {tag ? tagContent(tag) : <Center>没有此标签</Center>}
    </Layout>
  )
    ;
};
export {Tag};