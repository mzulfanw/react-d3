import styled from 'styled-components';

export const D3Styled = styled.div`
  .d3-flex {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 60px;
    gap: 10px;
  }

  .text-header {
    text-align: center;

  }
`;

export const D3ContentStyled = styled.div`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: start;
    width: 100%;

    .section-picture {
      width: 50%
    }

    .section-about {
      width: 50%
    }

    .button-append {
      padding: 6px 10px;
      border-radius: 4px;
      background: royalblue;
      border: none;
      width: 100%;
      max-width: 25%;
      color: white;
      margin: 10px 0;
    }

    .disabled {
      cursor: not-allowed;
    }

    .cursor {
      cursor: pointer;
    }

    @media (max-width: 480px) {
      flex-direction: column;

      .section-picture {
        width: 100%
      }

      .section-about {
        width: 100%
      }

      .button-append {
        max-width: 100%;
      }
    }

    @media (max-width: 960px) {
      flex-direction: column;

      .section-picture {
        width: 100%
      }

      .section-about {
        width: 100%
      }

      .button-append {
        max-width: 100%;
      }
    }
  }



`;