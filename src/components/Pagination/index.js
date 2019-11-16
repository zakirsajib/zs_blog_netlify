import React from 'react';

import Wrapper from './Wrapper';
import Button from '../Button';
import Footer from '../Footer';

function Pagination({previousUrl, nextUrl, isFirst = false, isLast = false}) {
  return (
    <Wrapper>
      {!isFirst &&
        <Button to={previousUrl}>&larr; Newer Posts</Button>
      }
      {!isLast &&
        <Button to={nextUrl}>Older Posts &rarr;</Button>
      }
      <Footer><p>© 2019 Zakir Sajib. All Rights Reserved.</p></Footer>
    </Wrapper>

  );
}

export default Pagination;