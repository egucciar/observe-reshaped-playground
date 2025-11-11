// @ts-check
/** @type {import('reshaped').ReshapedConfig} */
const config = {
  themeOptions: {
    colorContrastAlgorithm: 'apca',
  },
  themes: {
    custom: {
      radius: {
        small: { px: 6 },
        circular: { px: 9999 },
      },
      fontFamily: {
        body: {
          family: 'ibmplexsans, circularstd, arial, helvetica, sans-serif',
        },
        title: {
          family: 'ibmplexsans, circularstd, arial, helvetica, sans-serif',
        },
      },
      fontWeight: {
        regular: {
          weight: 400,
        },
        medium: {
          weight: 400,
        },
        semibold: {
          weight: 500,
        },
        bold: {
          weight: 500,
        },
        extrabold: {
          weight: 500,
        },
        black: {
          weight: 500,
        },
      },
      font: {
        title1: {
          fontSize: { px: 30 },
          lineHeight: { px: 39 },
          fontWeightToken: 'bold',
          fontFamilyToken: 'title',
        },
        title2: {
          fontSize: { px: 24 },
          lineHeight: { px: 31.2 },
          fontWeightToken: 'bold',
          fontFamilyToken: 'title',
        },
        title3: {
          fontSize: { px: 20 },
          lineHeight: { px: 26 },
          fontWeightToken: 'bold',
          fontFamilyToken: 'title',
        },
        title4: {
          fontSize: { px: 18 },
          lineHeight: { px: 23.4 },
          fontWeightToken: 'bold',
          fontFamilyToken: 'title',
        },
        title5: {
          fontSize: { px: 15 },
          lineHeight: { px: 20.8 },
          fontWeightToken: 'bold',
          fontFamilyToken: 'title',
        },
        title6: {
          fontSize: { px: 13 },
          lineHeight: { px: 18.2 },
          fontWeightToken: 'bold',
          fontFamilyToken: 'title',
        },
        body1: {
          fontSize: { px: 18 },
          lineHeight: { px: 23.4 },
          fontWeightToken: 'regular',
          fontFamilyToken: 'body',
        },
        body2: {
          fontSize: { px: 15 },
          lineHeight: { px: 20.8 },
          fontWeightToken: 'regular',
          fontFamilyToken: 'body',
        },
        body3: {
          fontSize: { px: 13 },
          lineHeight: { px: 20 },
          fontWeightToken: 'regular',
          fontFamilyToken: 'body',
        },
        caption1: {
          fontSize: { px: 12 },
          lineHeight: { px: 16 },
          fontWeightToken: 'regular',
          fontFamilyToken: 'body',
        },
        caption2: {
          fontSize: { px: 10 },
          lineHeight: { px: 12 },
          fontWeightToken: 'regular',
          fontFamilyToken: 'body',
        },
      },
      color: {
        backgroundNeutral: {
          hex: '#E1E5EB',
          hexDark: '#303136',
        },
        backgroundNeutralFaded: {
          hex: '#F0F0F3',
          hexDark: '#1e1e21',
        },
        backgroundPrimary: {
          hex: '#0C66E4',
          hexDark: '#0C66E4',
        },
        backgroundPrimaryFaded: {
          hex: '#CCE0FF', // figma is #579DFF
          hexDark: '#16263e',
        },
        backgroundCritical: {
          hex: '#E54D2E',
          hexDark: '#E53D2E',
        },
        backgroundCriticalFaded: {
          hex: '#FEEBE7',
          hexDark: '#371714',
        },
        backgroundWarning: {
          hex: '#FFC53D',
          hexDark: '#FFC53D',
        },
        backgroundWarningFaded: {
          hex: '#FFEE9C',
          hexDark: '#3F2700',
        },
        backgroundPositive: {
          hex: '#46A758',
          hexDark: '#40884e',
        },
        backgroundPositiveFaded: {
          hex: '#E9F6E9',
          hexDark: '#1B2A1E',
        },
        backgroundDisabled: {
          hex: '#e8e8ec',
          hexDark: '#292a2e',
        },
        backgroundDisabledFaded: {
          hex: '#F8F8F8',
          hexDark: '#1D1D1D',
        },
        backgroundBrand: {
          hex: '#26BF7F',
          hexDark: '#26BF7F',
        },
        backgroundBrandSecondary: {
          hex: '#4C3DEC',
          hexDark: '#4C3DEC',
        },
        backgroundDataVis: {
          hex: '#0EA5E9',
          hexDark: '#0EA5E9',
        },
        backgroundDataVisFaded: {
          hex: '#BAE6FD',
          hexDark: '#075985',
        },
        backgroundPage: {
          hex: '#ffffff',
          hexDark: '#0f0f11',
        },
        backgroundPageFaded: {
          hex: '#f4f5f8',
          hexDark: '#000000',
        },
        backgroundElevationBase: {
          hex: '#ffffff',
          hexDark: '#0f0f11',
        },
        backgroundElevationRaised: {
          hex: '#fcfcfd',
          hexDark: '#161618',
        },
        backgroundElevationOverlay: {
          hex: '#fcfcfd',
          hexDark: '#1a1a1c',
        },
        backgroundHighlight: {
          hex: '#FDE99B',
          hexDark: '#FDE99B',
        },
        // a background color that mirrors the foreground color
        // but can be used with r-g-b values
        backgroundNeutralHighlighted: {
          hex: '#1e1f24',
          hexDark: '#eeeef0',
        },
        foregroundNeutral: {
          hex: '#1e1f24',
          hexDark: '#eeeef0',
        },
        foregroundNeutralFaded: {
          hex: '#6F6F79',
          hexDark: '#b2b3bd',
        },
        foregroundPrimary: {
          hex: '#0C66E4',
          hexDark: '#579DFF',
        },
        foregroundCritical: {
          hex: '#D13415',
          hexDark: '#FF997D',
        },
        foregroundWarning: {
          hex: '#4F3422',
          hexDark: '#FFCA16',
        },
        foregroundPositive: {
          hex: '#27653B', // figma is #2A7E3B
          hexDark: '#71D083',
        },
        foregroundDisabled: {
          hex: '#CACACA',
          hexDark: '#6c6e79',
        },
        borderNeutral: {
          hex: '#cdced7',
          hexDark: '#46484f',
        },
        borderNeutralFaded: {
          hex: '#e8e8ec',
          hexDark: '#222325',
        },
        borderNeutralHighlighted: {
          hex: '#1e1f2487',
          hexDark: '#eeeef0b0',
        },
        borderPrimary: {
          hex: '#0055CC',
          hexDark: '#0c66e4',
        },
        borderPrimaryFaded: {
          hex: '#8ebbff',
          hexDark: '#364c8e',
        },
        borderCritical: {
          hex: '#E54D2E',
          hexDark: '#E53D2E',
        },
        borderCriticalFaded: {
          hex: '#FDBDAF',
          hexDark: '#6E2920',
        },
        borderWarning: {
          hex: '#FFC53D',
          hexDark: '#FFCA16',
        },
        borderWarningFaded: {
          hex: '#F3D673',
          hexDark: '#734e0a',
        },
        borderPositive: {
          hex: '#46A758',
          hexDark: '#46A758',
        },
        borderPositiveFaded: {
          hex: '#B2DDB5',
          hexDark: '#2D5736',
        },
        borderDisabled: {
          hex: '#0000000F',
          hexDark: '#292929',
        },
      },
      shadow: {
        raised: [
          {
            offsetX: 0,
            offsetY: 1,
            blurRadius: 1,
            spreadRadius: 0,
            colorToken: 'black',
            opacity: 0.06,
          },
          {
            offsetX: 0,
            offsetY: 1,
            blurRadius: 3,
            spreadRadius: 0,
            colorToken: 'black',
            opacity: 0.14,
          },
        ],
        overlay: [
          {
            offsetX: 0,
            offsetY: 2,
            blurRadius: 6,
            spreadRadius: 0,
            colorToken: 'black',
            opacity: 0.07,
          },
          {
            offsetX: 0,
            offsetY: 8,
            blurRadius: 16,
            spreadRadius: 0,
            colorToken: 'black',
            opacity: 0.08,
          },
        ],
      },
    },
  },
}

module.exports = config
