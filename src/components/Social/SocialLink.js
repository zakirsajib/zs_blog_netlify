import styled from 'styled-components';

const SocialLink = styled.a`
  color: #3e465b;
  display: inline-block;
  margin: 5px;
  padding: 5px;
  text-decoration: none;

  svg {
    display: inline-block;
    height: 30px;
    margin-right: 5px;
    vertical-align: middle;
    width: 30px;
  }

  &:hover {
    border-color: #3e465b;
  }
`;

export default SocialLink;