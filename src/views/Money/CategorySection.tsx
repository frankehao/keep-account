import React, { useState } from 'react'
import styled from 'styled-components'

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
`

const CategorySection: React.FC = () => {
  const [categoryList] = useState<('-' | '+')[]>(['-', '+'])
  const [category, setCategory] = useState('-')
  const categoryMap = { '-': '支出', '+': '收入' }
  return (
    <Wrapper>
      <ul>
        {categoryList.map((c) => (
          <li
            className={category === c ? 'selected' : ''}
            onClick={() => {
              setCategory(c)
            }}
          >
            {categoryMap[c]}
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}

export { CategorySection }
