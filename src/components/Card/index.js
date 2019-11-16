import styled from 'styled-components';

const Card = styled.div`
  box-shadow: 0 26px 50px 0 rgba(35,38,52,.08);
  margin-bottom: 30px;
  padding: 0;

  @media only screen and (max-width: 870px) {
    border-left: none;
    border-right: none;
  }
`;

export default Card;