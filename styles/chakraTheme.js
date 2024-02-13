"use client"
import { extendTheme } from "@chakra-ui/react";
const colors = {
    bg_color: {
        Background: '#F3F4F6',
        MenuBackground: '#011627',
    },
    surface: {
        Primary: '#FFFFFF',
        Secondary: '#E5E7EB',
        Disable: '#F3F3F3',
        AccentPrimary: '#FF9B42',
        AccentPrimaryLight: '#2E65F3',
        AccentSecondary: '#FFBB42',
        AccentError: '#F32D2D',
        AccentErrorLight: '#F32D2D7%',
        AccentSuccess: '#2EC4B6',
        AccentSuccessLight: '#2EC4B610',
      },
      text: {
        Primary: '#011627',
        Secondary: '#6F727A',
        Tertiary: '#717171',
        Placeholder: '#B8BCC6',
        Disable: '#7C8189',
        Inverse: '#FFFFFF',
        MenuText: '#9FA6BC',
        AccentPrimary: '#FF9B42',
        LinkText: '#2E65F3',
        LinkTextLight: '#ABCDFF',
        AccentError: '#B91C1C',
        AccentSuccess: '#2EC4B6',
      },
      action: {
        AccentPrimaryHover: '#FFAB42',
        AccentPrimaryLightHover: '#4A7DFF',
        AccentPrimaryLightBg: '#EFF4FF',
        AccentErrorHover: '#CC0303',
        AccentErrorActive: '#AE1A1A',
        AccentSuccessHover: '#17D3C2',
        NavPrimaryHover: '#FFFFFF10',
      },
      border: {
        Primary: '#E3E6ED',
        AccentPrimary: '#2E65F3',
        AccentError: '#F32D2D',
        AccentErrorLight: '#F32D2D10',
        Disable: '#7C8189',
      },
}

const theme = extendTheme({
    colors,
  })

  export default theme