import styled from 'styled-components'

const CategorySection = styled.section`
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
export { CategorySection }
