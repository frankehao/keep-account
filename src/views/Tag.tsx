import React from 'react';
import {useTags} from 'useTags';
import {useParams} from 'react-router-dom';
import Layout from 'components/Layout';
import Icon from 'components/icon';
import {Button} from '../components/Button';
import styled from 'styled-components';

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
      <div>
        <label>
          <span>备注</span>
          <input type="text" placeholder="在这里添加属性"/>
        </label>
        <Button>
          删除标签
        </Button>
      </div>
    </Layout>
  );
};
export {Tag};