import dynamic from 'next/dynamic';

export const components = {
  Background: dynamic(() => import('./Background')),
  BannerVideo: dynamic(() => import('./BannerVideo')),
  Button: dynamic(() => import('./Button')),
  Description: dynamic(() => import('./Description')),
  Pagination: dynamic(() => import('./Pagination')),
  Icon: dynamic(() => import('./Icon')),
  Image: dynamic(() => import('./Image')),
  Link: dynamic(() => import('./Link')),
  Text: dynamic(() => import('./Text')),
  TitleComplex: dynamic(() => import('./TitleComplex')),
  TitleHeader: dynamic(() => import('./TitleHeader')),
  TitleHeaderGradient: dynamic(() => import('./TitleHeaderGradient')),
  InputText: dynamic(() => import('./InputText')),
  Navigation: dynamic(() => import('./Navigation')),
  Dropdown: dynamic(() => import('./Dropdown')),
  Collapse: dynamic(() => import('./Collapse')),
  CustomWidgete920019b2412: dynamic(() => import('./CustomWidgete920019b2412')),
  CustomWidget0417ed58c97f: dynamic(() => import("./CustomWidget0417ed58c97f")),
  CustomWidget259ddf0698cb: dynamic(() => import("./CustomWidget259ddf0698cb")),
  CustomWidget6dd8e9578d18: dynamic(() => import("./CustomWidget6dd8e9578d18")),};
