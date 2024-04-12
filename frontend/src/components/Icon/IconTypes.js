import React from 'react'
const IconTypes = {
  edit: <span>&#xe805;</span>,
  view: <span>&#xe821;</span>,
  delete: <span>&#xe819;</span>,
  add: <span>&#xe818;</span>,
  history: <span>&#xe822;</span>,
  settings: <span>&#xe811;</span>,
  save: <span>&#xe807;</span>,
  file: <span>&#xe81a;</span>,
  import: <span>&#xe81d;</span>,
  export: <span>&#xe81b;</span>,
  dl: <span>&#xe81c;</span>,
  web: <span>&#xe816;</span>,
  mail: <span>&#xe80d;</span>,
  link: <span>&#xe81e;</span>,
  published: <span>&#xe815;</span>,
  unpublished: <span>&#xe80a;</span>,
  undo: <span>&#xe812;</span>,
  notes: <span>&#xe801;</span>,
  useri: <span>&#xe813;</span>,
  unsure: <span>&#xe820;</span>,
  print: <span>&#xe817;</span>,
  financial: <span>&#xe808;</span>,
  skip: <span>&#xe800;</span>,
  notesa: <span>&#xe802;</span>,
  yes: <span>&#xe81f;</span>,
  doc: <span>&#xe803;</span>,
  next: <span>&#xe809;</span>,
  rate: <span>&#xe80B;</span>,
  date: <span>&#xe806;</span>,
  time: <span>&#xe804;</span>,
  blacklist: <span>&#xe823;</span>,
  whitelist: <span>&#xe80c;</span>,
  smallcross: <span>&#xe824;</span>,
  phonein: <span>&#xe80f;</span>,
  phoneout: <span>&#xe80e;</span>,
  thumbsup: <span>&#xe814;</span>,
  thumbsdown: <span>&#xe810;</span>,
  thumbsside: <span>&#xe825;</span>,
  germany: <span>&#xe828;</span>,
  followup: <span>&#xe829;</span>,
  notcontacted: <span>&#xe82a;</span>,
  linkedin: <span>&#xe82b;</span>,
  refresh: <span>&#xe82c;</span>,
  company: <span>&#xe82d;</span>,
  sandclock: <span>&#xe82e;</span>,
  phone: <span>&#xe82f;</span>,
  speaker: <span>&#xe830;</span>,
  pie: <span>&#xe831;</span>,
  flame: <span>&#xe832;</span>,
  location: <span>&#xe833;</span>,
  trash: <span>&#xe834;</span>,
  idea: <span>&#xe835;</span>,
  threedots: <span>&#xe836;</span>,
  all: <span>&#xe837;</span>,
  rocket: <span>&#xe838;</span>,
  plane: <span>&#xe839;</span>,
  ship: <span>&#xe83a;</span>,
  cardown: <span>&#xe83b;</span>,
  comet: <span>&#xe83c;</span>,
  grid: <span>&#xe83d;</span>,
  racecar: <span>&#xe840;</span>,
  left: <span>&#xe83f;</span>,
  right: <span>&#xe83e;</span>,
  stack: <span>&#xe842;</span>,
  first: <span>&#xe845;</span>,
  warning: <span>&#xe844;</span>,
  none: <span>&#xe841;</span>,
  law: <span>&#xe843;</span>,
  second: <span>&#xe847;</span>,
  money: <span>&#xe846;</span>,
  info: <span>&#xe848;</span>,
  p_ceo: <span>&#xe84c;</span>,
  p_cto: <span>&#xe84b;</span>,
  p_teamleader: <span>&#xe84a;</span>,
  p_misc: <span>&#xe849;</span>,
  smiley: <span>&#xe84e;</span>,
  mehface: <span>&#xe84d;</span>,
  frowny: <span>&#xe84f;</span>,
  skull: <span>&#xe850;</span>,
  paint: <span>&#xe851;</span>,
  arrow_down: <span>&#xe852;</span>,
  lock_open: <span>&#xe853;</span>,
  archive: <span>&#xe857;</span>,
  crown: <span>&#xe856;</span>,
  user_multi: <span>&#xe855;</span>,
  female: <span>&#xe854;</span>,
  male: <span>&#xe858;</span>,
  arrow_up: <span>&#xe859;</span>,
  up: <span>&#xe859;</span>,
  down: <span>&#xe852;</span>,
  whiteflag: <span>&#xe80c;</span>,
  nobonus: <span>&#xe85a;</span>,
  sortup: <span>&#xe85b;</span>,
  sortdown: <span>&#xe85c;</span>,
  todo: <span>&#xe85d;</span>,
  nozim: <span>&#xe85e;</span>,
  capacity: <span>&#xe85f;</span>,
  firsttalk: <span>&#xe860;</span>,
  talk: <span>&#xe861;</span>,
  interview: <span>&#xe862;</span>,
  assessment: <span>&#xe863;</span>,
  firstcontact: <span>&#xe864;</span>,
  senddocument: <span>&#xe865;</span>,
  tablesort_unsorted: <span>&#xe868;</span>,
  tablesort_up: <span>&#xe86a;</span>,
  tablesort_down: <span>&#xe869;</span>,
  quickedit: <span>&#xe86b;</span>,
  nouser: <span>&#xe866;</span>,
  mail_alt: <span>&#xe867;</span>,
  noproject: <span>&#xe86C;</span>,
  nomail: <span>&#xe86D;</span>,
  play: <span>&#xe86F;</span>,
  pause: <span>&#xe86E;</span>,
  copernicus: <span>&#xe871;</span>,
  ims: <span>&#xe870;</span>,
  mobile: <span>&#xe872;</span>,
  campaign: <span>&#xe873;</span>,
  chain: <span>&#xe874;</span>,
  format_bold: <span>&#xe876;</span>,
  align_center: <span>&#xe877;</span>,
  quote: <span>&#xe87A;</span>,
  numberedlist: <span>&#xe87B;</span>,
  colorpicker: <span>&#xe87C;</span>,
  windows: <span>&#xe87D;</span>,
  fullscreen: <span>&#xe87F;</span>,
  filters: <span>&#xe880;</span>,
  forward: <span>&#xe881;</span>,
  reply: <span>&#xe882;</span>,
  folder_arrowin: <span>&#xe883;</span>,
  folder: <span>&#xe885;</span>,
  folder_fill: <span>&#xe886;</span>,
  format_underline: <span>&#xe887;</span>,
  format_strikethrough: <span>&#xe888;</span>,
  format_italic: <span>&#xe889;</span>,
  align_left: <span>&#xe88A;</span>,
  align_right: <span>&#xe88B;</span>,
  activity: <span>&#xe88C;</span>,
  send: <span>&#xe88D;</span>,
  packaging: <span>&#xe875;</span>,
  image: <span>&#xe878;</span>,
  // Todo: refactor these by including them in the font
  call_in: <span>
    <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M13.7 7.7C13.1 7.1 12.2 6.2 12.2 6.2C12.2 6.2 11.7 5.7 11.2 6.2C10.7 6.7 10.1 7.3 10.1 7.3C10.1 7.3 9.3 7 8.3 6L8.1 5.8C7.2 4.8 6.8 4 6.8 4C6.8 4 7.4 3.4 7.9 2.9C8.4 2.4 7.9 1.9 7.9 1.9C7.9 1.9 7 1 6.4 0.4C5.8 -0.2 5.4 0.1 5.2 0.3C5 0.5 5.4 0.1 4.2 1.3C2.9 2.6 6.1 6.5 6.9 7.3C7.7 8.1 11.6 11.2 12.8 10C14 8.8 13.6 9.2 13.8 9C14 8.8 14.3 8.4 13.7 7.7ZM4.3 10.2H0V12.3H4.4V13.9L8.9 11.3L4.3 8.7V10.2Z' fill='#195D78' />
    </svg>
  </span>,
  call_out: <span>
    <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M8.30015 9.89997C8.30015 9.89997 7.80015 9.39997 7.30015 9.89997C6.80015 10.4 6.30015 11 6.30015 11C6.30015 11 5.50015 10.7 4.50015 9.69998L4.30015 9.49998C3.30015 8.49998 3.00015 7.69998 3.00015 7.69998C3.00015 7.69998 3.50015 7.09998 4.00015 6.59998C4.50015 6.09998 4.00015 5.59998 4.00015 5.59998C4.00015 5.59998 3.10015 4.69998 2.50015 4.09998C1.90015 3.49998 1.50015 3.79998 1.30015 3.99998C1.10015 4.19998 1.50015 3.79998 0.300149 4.99998C-0.899851 6.19998 2.20015 10.2 3.00015 10.9C3.80015 11.7 7.70015 14.8 8.90015 13.6C10.1001 12.4 9.70015 12.8 9.90015 12.6C10.1001 12.4 10.5001 12 9.80015 11.4C9.20015 10.8 8.30015 9.89997 8.30015 9.89997ZM9.40015 3.69998V5.29998L14.0001 2.69998L9.40015 0.0999756V1.69998H5.10015V3.79998C7.00015 3.69998 8.30015 3.69998 9.40015 3.69998Z' fill='#2186AB' />
    </svg>
  </span>,
  visible: <span>
    <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'>
      <path
        d='M5.99996 1.37158C3.17139 1.37158 0.857101 3.34301 0.171387 6.00015C0.771387 8.6573 3.17139 10.6287 5.99996 10.6287C8.82853 10.6287 11.1428 8.6573 11.8285 6.08587C11.2285 3.34301 8.82853 1.37158 5.99996 1.37158ZM5.99996 8.91444C4.11424 8.91444 2.57139 7.71444 1.97139 6.00015C2.57139 4.28587 4.19996 3.08587 5.99996 3.08587C7.88567 3.08587 9.42853 4.28587 10.0285 6.00015C9.42853 7.71444 7.88567 8.91444 5.99996 8.91444Z'
        fill='#2186AB' />
      <path
        d='M6.00015 4.28564C5.0573 4.28564 4.37158 5.05707 4.37158 5.91422C4.37158 6.77136 5.0573 7.6285 6.00015 7.6285C6.94301 7.6285 7.62872 6.85707 7.62872 5.91422C7.62872 4.97136 6.94301 4.28564 6.00015 4.28564Z'
        fill='#2186AB' />
    </svg>
  </span>,
  download: <span>
    <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'>
      <g clipPath='url(#clip0_3805_1979)'>
        <path
          d='M8.31408 5.31429H6.85693V0H5.14265V5.31429H3.68551L5.99979 9.34286L8.31408 5.31429ZM9.42836 8.22857V10.2857H2.57122V8.22857H0.856934V12H11.1426V8.22857H9.42836Z'
          fill='#2186AB' />
      </g>
      <defs>
        <clipPath id='clip0_3805_1979'>
          <rect width='12' height='12' fill='white' />
        </clipPath>
      </defs>
    </svg>
  </span>,
  email: <span>
    <svg xmlns='http://www.w3.org/2000/svg' width='14' height='15' viewBox='0 0 14 15' fill='none'>
      <path d='M0 2.5V12.8H14V2.5H0ZM10.8 4.5L6.9 7.8L3.2 4.5H10.8ZM2 4.8L4.9 7.4L2 10.2V4.8ZM2.8 10.8L5.6 8L6.9 9.1L8.3 7.9L11.2 10.8H2.8ZM12 10.2L9.1 7.3L12 4.8V10.2Z' fill='#CCCCCC' />
    </svg>
  </span>,
  hyperlink: <span>
    <svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 15 15' fill='none'>
      <g clipPath='url(#clip0_1792_10564)'>
        <path d='M8.0799 10.7418L9.2397 11.9016L7.5 13.6413C5.89865 15.2426 3.30236 15.2426 1.70101 13.6413C0.0996633 12.0399 0.0996633 9.44363 1.70101 7.84229L3.44071 6.10259L4.6005 7.26239L2.86081 9.00208C1.9 9.96289 1.9 11.5207 2.86081 12.4815C3.82162 13.4423 5.37939 13.4423 6.3402 12.4815L8.0799 10.7418Z' fill='#2186AB' />
        <path d='M6.9201 4.94279L5.7603 3.78299L7.5 2.0433C9.10135 0.441949 11.6976 0.441948 13.299 2.0433C14.9003 3.64464 14.9003 6.24094 13.299 7.84229L11.5593 9.58198L10.3995 8.42219L12.1392 6.68249C13.1 5.72168 13.1 4.1639 12.1392 3.20309C11.1784 2.24229 9.62061 2.24229 8.6598 3.20309L6.9201 4.94279Z' fill='#2186AB' />
        <path d='M9.8196 4.36289L4.02061 10.1619L5.1804 11.3217L10.9794 5.52269L9.8196 4.36289Z' fill='#2186AB' />
      </g>
      <defs>
        <clipPath id='clip0_1792_10564'>
          <rect width='14' height='14' fill='white' transform='translate(0.5 0.842285)' />
        </clipPath>
      </defs>
    </svg>
  </span>,
  cancel: <span>
    <svg xmlns='http://www.w3.org/2000/svg' width='14' height='15' viewBox='0 0 14 15' fill='none'>
      <g clipPath='url(#clip0_1792_10576)'>
        <path d='M11.8008 1.64233L7.00078 6.44233L2.20078 1.64233C1.70078 2.14233 1.20078 2.64233 0.800781 3.04233L5.60078 7.84233L0.800781 12.6423L2.20078 14.0423L7.00078 9.24233L11.8008 14.0423L13.2008 12.6423L8.40078 7.84233L13.2008 3.04233L11.8008 1.64233Z' fill='#CC4850' />
      </g>
      <defs>
        <clipPath id='clip0_1792_10576'>
          <rect width='14' height='14' fill='white' transform='translate(0 0.842285)' />
        </clipPath>
      </defs>
    </svg>
  </span>,
  floppy:
    <svg width='14' height='15' viewBox='0 0 14 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_110_12077)'>
        <path d='M10.0004 0H8.00037H3.60037H0.000366211V14H14.0004V6V3L11.0004 0H10.0004ZM6.40037 2H8.00037H9.30037V4.3H6.40037V2ZM12.0004 6V12H2.00037V2H3.60037V5H6.30037H10.0004V2H10.2004L12.0004 3.8V6Z' fill='#EC3797' />
      </g>
      <defs>
        <clipPath id='clip0_110_12077'>
          <rect width='14' height='14' fill='white' transform='translate(0.000366211)' />
        </clipPath>
      </defs>
    </svg>,
}

export default IconTypes
