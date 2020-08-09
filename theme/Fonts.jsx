import React from 'react';

const createMarkup = () => ({
  __html: `
    /* cyrillic-ext */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local('Roboto'), local('Roboto-Regular'), url(/static/fonts/roboto/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local('Roboto'), local('Roboto-Regular'), url(/static/fonts/roboto/KFOmCnqEu92Fr1Mu5mxKKTU1Kvnz.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* greek-ext */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local('Roboto'), local('Roboto-Regular'), url(/static/fonts/roboto/KFOmCnqEu92Fr1Mu7mxKKTU1Kvnz.woff2) format('woff2');
      unicode-range: U+1F00-1FFF;
    }
    /* greek */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local('Roboto'), local('Roboto-Regular'), url(/static/fonts/roboto/KFOmCnqEu92Fr1Mu4WxKKTU1Kvnz.woff2) format('woff2');
      unicode-range: U+0370-03FF;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local('Roboto'), local('Roboto-Regular'), url(/static/fonts/roboto/KFOmCnqEu92Fr1Mu7WxKKTU1Kvnz.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local('Roboto'), local('Roboto-Regular'), url(/static/fonts/roboto/KFOmCnqEu92Fr1Mu7GxKKTU1Kvnz.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local('Roboto'), local('Roboto-Regular'), url(/static/fonts/roboto/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* cyrillic-ext */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: local('Roboto Bold'), local('Roboto-Bold'), url(/static/fonts/roboto/KFOlCnqEu92Fr1MmWUlfCRc4AMP6lbBP.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: local('Roboto Bold'), local('Roboto-Bold'), url(/static/fonts/roboto/KFOlCnqEu92Fr1MmWUlfABc4AMP6lbBP.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* greek-ext */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: local('Roboto Bold'), local('Roboto-Bold'), url(/static/fonts/roboto/KFOlCnqEu92Fr1MmWUlfCBc4AMP6lbBP.woff2) format('woff2');
      unicode-range: U+1F00-1FFF;
    }
    /* greek */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: local('Roboto Bold'), local('Roboto-Bold'), url(/static/fonts/roboto/KFOlCnqEu92Fr1MmWUlfBxc4AMP6lbBP.woff2) format('woff2');
      unicode-range: U+0370-03FF;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: local('Roboto Bold'), local('Roboto-Bold'), url(/static/fonts/roboto/KFOlCnqEu92Fr1MmWUlfCxc4AMP6lbBP.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: local('Roboto Bold'), local('Roboto-Bold'), url(/static/fonts/roboto/KFOlCnqEu92Fr1MmWUlfChc4AMP6lbBP.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: local('Roboto Bold'), local('Roboto-Bold'), url(/static/fonts/roboto/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
  `,
});

/**
  We load fonts this way to skip an extra network request to Google
  for the CSS file containing its @font-face declarations.

  The declarations are now immediately available for parsing and
  fetching as soon as the HTML comes in from the server.

  @TODO: Use CssBaseline @font-face overrides instead
  -- For some reason, the requests never fire using Mui's CssBaseline
  -- Investigate and replace to avoid using dangerouslySetInnerHTML
 */
// eslint-disable-next-line react/no-danger
export const Fonts = () => <style type="text/css" dangerouslySetInnerHTML={createMarkup()} />;
