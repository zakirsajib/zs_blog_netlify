import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  height: auto;
  
  @media only screen and (max-width: 870px) {
    grid-template-columns: 1fr;
  }
`;

export default Wrapper;