import styled from 'styled-components';

export const CollectionStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 20px 0;

  .collection-child {
    border: 2px solid #525C69;
    border-radius: 6px;
    padding: 30px 30px;
    cursor: pointer;

    .title {
      font-size: 20px;
      text-align: center;
    }
  }
`;

export const CollectionHeadStyled = styled.div`

  .text-center {
    text-align: center;
  }
`;