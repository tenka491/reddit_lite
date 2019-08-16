import styled from 'styled-components';

export const PostOuterWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 15px;
  max-width: 960px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  border: 1px solid ${props => props.theme.lightGray};
  border-radius: 6px 0 0 6px;
  padding: 15px 20px;

  .title-wrapper {
    color: ${props => props.theme.primary};
    text-decoration: none;
    font-size: 18px;
    font-weight: 700;

    :hover {
      color: ${props => props.theme.secondary};
    }
  }

  .text-wrapper {
    margin: 10px 20px 10px 0;

    p {
      font-size: 12px;
      line-height: 16px;
      color: ${props => props.theme.darkGray};
    }
  }

  .credits {
    display: flex;
    flex-flow: row nowrap;
    align-content: flex-end;
    justify-content: space-around;
    font-size: 12px;

    .author,
    .created-on {
      flex-grow: 1;
    }
    .created-on {
      color: ${props => props.theme.darkGray};
    }
  }
`;

export const CounterComments = styled.div`
  min-width: 80px;
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  justify-items: center;
  background-color: ${props => props.theme.lightGray};
  border-radius: 0 6px 6px 0;

  .up-votes-wrapper,
  .comment-counter {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    padding: 5px;
    flex-grow: 1;

    span {
      flex-grow: 1;
    }

    span.fa {
      :hover {
        cursor: pointer;
        color: ${props => props.theme.primary};
      }
    }
  }

  .comment-counter {
    max-height: 45px;
  }

`;