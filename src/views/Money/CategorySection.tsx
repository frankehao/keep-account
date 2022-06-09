import React, {useState} from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  > ul {
    display: flex;
    background: #c4c4c4;

    > li {
      text-align: center;
      width: 50%;
      font-size: 24px;
      padding: 17px 0;
      position: relative;

      &.selected::before {
        content: '';
        background: black;
        width: 100%;
        height: 3px;
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
`;
type Props = {
  value: '-' | '+';
  onChange: (value: string) => void
}
const CategorySection: React.FC<Props> = (props) => {
  const category = props.value;
  const [categoryList] = useState<('-' | '+')[]>(['-', '+']);
  const categoryMap = {'-': '支出', '+': '收入'};
  return (
    <Wrapper>
      <ul>
        {categoryList.map((c) => (
          <li
            key={c}
            className={category === c ? 'selected' : ''}
            onClick={() => {
              props.onChange(c);
            }}
          >
            {categoryMap[c]}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export {CategorySection};
