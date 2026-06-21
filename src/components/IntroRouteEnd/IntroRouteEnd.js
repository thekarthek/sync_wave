// @flow
import React from 'react';
import styled from 'styled-components';

import { COLORS, BREAKPOINTS } from '../../constants';

import Spacer from '../Spacer';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Link from '../Link';
import MaxWidthWrapper from '../MaxWidthWrapper';

const IntroRouteEnd = () => {
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <Spacer size={128} />

        <CongratsHeading>
          <LetterSquash>W</LetterSquash>oohoo, you finished it!
        </CongratsHeading>

        <LimitedParagraph>
          Thanks so much for exploring Sync Wave. I hope this interactive
          experience helped you better understand audio waveforms and signal
          processing concepts.
        </LimitedParagraph>

        <LimitedParagraph>
          Let me know what you think{' '}
          <Link external to="https://x.com/thekarthek?s=21">
            on Twitter
          </Link>{' '}
          or{' '}
          <Link external to="mailto:thekarthek@gmail.com">
            by email
          </Link>.
        </LimitedParagraph>

        <LimitedParagraph>
          This project was created with React.{' '}
          <Link external to="https://github.com/thekarthek/sync_wave">
            View the source code
          </Link>.
        </LimitedParagraph>

        <LimitedParagraph>
          Created and maintained by <strong>Karthek Bangaru</strong>.
        </LimitedParagraph>

        <Spacer size={172} />
      </MaxWidthWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 64px;
  background: ${COLORS.gray[300]};
`;

const CongratsHeading = styled(Heading)`
  font-size: 60px;
  font-weight: 700;
  letter-spacing: -2px;
  text-align: center;
  margin-bottom: 60px;

  @media ${BREAKPOINTS.sm} {
    font-size: 48px;
  }

  @media ${BREAKPOINTS.mdMin} {
    font-size: 72px;
  }
`;

const LetterSquash = styled.span`
  letter-spacing: -7px;
`;

const LimitedParagraph = styled(Paragraph)`
  max-width: 600px;
  font-size: 26px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 42px;
`;

export default IntroRouteEnd;