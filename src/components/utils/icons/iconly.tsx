export interface IIconProps {
  className?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
}

export const MessageIcon = ({ className = 'h-6 w-6', fill = 'currentColor', stroke = 'none', strokeWidth = '1' }: IIconProps) => {
  return (
    <svg className={className} fill={fill} width="24px" height="24px" viewBox="0 0 24 24" stroke={stroke} version="1.1">
      <title>Iconly/Bold/Message</title>
      <g id="Iconly/Bold/Message" stroke={stroke} strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Message" transform="translate(2.000400, 3.000000)" fill={fill} fillRule="nonzero">
          <path d="M14.939,0 C16.28,0 17.57,0.53 18.519,1.481 C19.469,2.43 20,3.71 20,5.05 L20,5.05 L20,12.95 C20,15.74 17.73,18 14.939,18 L14.939,18 L5.06,18 C2.269,18 0,15.74 0,12.95 L0,12.95 L0,5.05 C0,2.26 2.259,0 5.06,0 L5.06,0 Z M16.07,5.2 C15.86,5.189 15.66,5.26 15.509,5.4 L15.509,5.4 L11,9 C10.42,9.481 9.589,9.481 9,9 L9,9 L4.5,5.4 C4.189,5.17 3.759,5.2 3.5,5.47 C3.23,5.74 3.2,6.17 3.429,6.47 L3.429,6.47 L3.56,6.6 L8.11,10.15 C8.67,10.59 9.349,10.83 10.06,10.83 C10.769,10.83 11.46,10.59 12.019,10.15 L12.019,10.15 L16.53,6.54 L16.61,6.46 C16.849,6.17 16.849,5.75 16.599,5.46 C16.46,5.311 16.269,5.22 16.07,5.2 Z"></path>
        </g>
      </g>
    </svg>
  );
};

export const PersonIcon = ({ className = 'h-6 w-6', fill = 'currentColor', stroke = 'none', strokeWidth = '1' }: IIconProps) => {
  return (
    <svg className={className} viewBox="0 0 24 24" version="1.1">
      <title>Iconly/Bold/Profile</title>
      <g id="Iconly/Bold/Profile" stroke={stroke} strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Profile" transform="translate(4.000000, 2.000000)" fill={fill} fillRule="nonzero">
          <path d="M8,13.1739317 C12.338627,13.1739317 16,13.8789388 16,16.598966 C16,19.3199932 12.314618,20 8,20 C3.66237339,20 5.68434189e-14,19.2949929 5.68434189e-14,16.5749657 C5.68434189e-14,13.8539385 3.68538202,13.1739317 8,13.1739317 Z M8,-6.03961325e-14 C10.9391022,-6.03961325e-14 13.2939852,2.35402354 13.2939852,5.29105291 C13.2939852,8.22808228 10.9391022,10.5831058 8,10.5831058 C5.06189821,10.5831058 2.70601476,8.22808228 2.70601476,5.29105291 C2.70601476,2.35402354 5.06189821,-6.03961325e-14 8,-6.03961325e-14 Z"></path>
        </g>
      </g>
    </svg>
  );
};

export const AlertCircleIcon = ({ className = 'h-6 w-6', fill = 'currentColor', stroke = 'none', strokeWidth = '1' }: IIconProps) => {
  return (
    <svg className={className} width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
      <title>Iconly/Bold/Info Circle</title>
      <g id="Iconly/Bold/Info-Circle" stroke={stroke} strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Info-Circle" transform="translate(2.000100, 1.999300)" fill={fill} fillRule="nonzero">
          <path d="M10,0 C15.53,0 20,4.481 20,10 C20,15.521 15.53,20 10,20 C4.48,20 0,15.521 0,10 C0,4.481 4.48,0 10,0 Z M10,12.931 C9.52,12.931 9.13,13.321 9.13,13.801 C9.13,14.281 9.52,14.681 10.01,14.681 C10.49,14.681 10.88,14.281 10.88,13.801 C10.88,13.321 10.49,12.931 10,12.931 Z M10,5.33 C9.52,5.33 9.12,5.731 9.12,6.21 L9.12,6.21 L9.12,10.63 C9.12,11.111 9.52,11.5 10,11.5 C10.48,11.5 10.87,11.111 10.87,10.63 L10.87,10.63 L10.87,6.21 C10.87,5.731 10.48,5.33 10,5.33 Z"></path>
        </g>
      </g>
    </svg>
  );
};

export const TickIcon = ({ className = 'h-6 w-6', fill = 'currentColor', stroke = 'none', strokeWidth = '1' }: IIconProps) => {
  return (
    <svg className={className} width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
      <title>Iconly/Bold/Tick Square</title>
      <g id="Iconly/Bold/Tick-Square" stroke={stroke} strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Tick-Square" transform="translate(2.000100, 1.999900)" fill={fill} fillRule="nonzero">
          <path d="M14.34,-2.84217094e-14 C17.73,-2.84217094e-14 20,2.38 20,5.92 L20,5.92 L20,14.091 C20,17.62 17.73,20 14.34,20 L14.34,20 L5.67,20 C2.28,20 0,17.62 0,14.091 L0,14.091 L0,5.92 C0,2.38 2.28,-2.84217094e-14 5.67,-2.84217094e-14 L5.67,-2.84217094e-14 Z M14.18,7 C13.84,6.66 13.28,6.66 12.94,7 L12.94,7 L8.81,11.13 L7.06,9.38 C6.72,9.04 6.16,9.04 5.82,9.38 C5.48,9.72 5.48,10.27 5.82,10.62 L5.82,10.62 L8.2,12.99 C8.37,13.16 8.59,13.24 8.81,13.24 C9.04,13.24 9.26,13.16 9.43,12.99 L9.43,12.99 L14.18,8.24 C14.52,7.9 14.52,7.35 14.18,7 Z"></path>
        </g>
      </g>
    </svg>
  );
};

export const CrossIcon = ({ className = 'h-6 w-6', fill = 'currentColor', stroke = 'none', strokeWidth = '1' }: IIconProps) => {
  return (
    <svg className={className} width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
      <title>Iconly/Bold/Close Square</title>
      <g id="Iconly/Bold/Close-Square" stroke={stroke} strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Close-Square" transform="translate(1.999800, 1.999200)" fill={fill} fillRule="nonzero">
          <path d="M14.34,2.84217094e-14 C17.73,2.84217094e-14 20,2.38 20,5.92 L20,5.92 L20,14.091 C20,17.621 17.73,20 14.34,20 L14.34,20 L5.67,20 C2.28,20 0,17.621 0,14.091 L0,14.091 L0,5.92 C0,2.38 2.28,2.84217094e-14 5.67,2.84217094e-14 L5.67,2.84217094e-14 Z M13.01,6.971 C12.67,6.63 12.12,6.63 11.77,6.971 L11.77,6.971 L10,8.75 L8.22,6.971 C7.87,6.63 7.32,6.63 6.98,6.971 C6.64,7.311 6.64,7.871 6.98,8.21 L6.98,8.21 L8.76,9.991 L6.98,11.761 C6.64,12.111 6.64,12.661 6.98,13 C7.15,13.17 7.38,13.261 7.6,13.261 C7.83,13.261 8.05,13.17 8.22,13 L8.22,13 L10,11.231 L11.78,13 C11.95,13.181 12.17,13.261 12.39,13.261 C12.62,13.261 12.84,13.17 13.01,13 C13.35,12.661 13.35,12.111 13.01,11.771 L13.01,11.771 L11.23,9.991 L13.01,8.21 C13.35,7.871 13.35,7.311 13.01,6.971 Z"></path>
        </g>
      </g>
    </svg>
  );
};

export const LockIcon = ({ className = 'h-6 w-6', fill = 'currentColor', stroke = 'none', strokeWidth = '1' }: IIconProps) => {
  return (
    <svg className={className} width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
      <title>Iconly/Bold/Lock</title>
      <g id="Iconly/Bold/Lock" stroke={stroke} strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Lock" transform="translate(3.500000, 2.000000)" fill={fill} fillRule="nonzero">
          <path d="M8.48475792,0 C11.5534967,0 14.0227137,2.41478684 14.0227137,5.39600517 L14.0227137,5.39600517 L14.0227137,6.92934513 C15.7450687,7.46695816 17,9.02613535 17,10.8884031 L17,10.8884031 L17,15.8253006 C17,18.1307761 15.0886432,20 12.7322176,20 L12.7322176,20 L4.26879857,20 C1.91135684,20 0,18.1307761 0,15.8253006 L0,15.8253006 L0,10.8884031 C0,9.02613535 1.2559474,7.46695816 2.97728631,6.92934513 L2.97728631,6.92934513 L2.97728631,5.39600517 C2.9874477,2.41478684 5.45666467,0 8.48475792,0 Z M8.49491931,11.384279 C8.00717274,11.384279 7.61087866,11.7718374 7.61087866,12.2488324 L7.61087866,12.2488324 L7.61087866,14.4549339 C7.61087866,14.9418662 8.00717274,15.3294246 8.49491931,15.3294246 C8.99282726,15.3294246 9.38912134,14.9418662 9.38912134,14.4549339 L9.38912134,14.4549339 L9.38912134,12.2488324 C9.38912134,11.7718374 8.99282726,11.384279 8.49491931,11.384279 Z M8.50508069,1.73904402 C6.44231919,1.73904402 4.76569038,3.36877671 4.75552899,5.37613038 L4.75552899,5.37613038 L4.75552899,6.71370367 L12.244471,6.71370367 L12.244471,5.39600517 C12.244471,3.3787141 10.5678422,1.73904402 8.50508069,1.73904402 Z"></path>
        </g>
      </g>
    </svg>
  );
};

export const EyeIcon = ({ className = 'h-6 w-6', fill = 'currentColor', stroke = 'none', strokeWidth = '1' }: IIconProps) => {
  return (
    <svg className={className} width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
      <title>Iconly/Bold/Show</title>
      <g id="Iconly/Bold/Show" stroke={stroke} strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Show" transform="translate(2.000000, 4.000000)" fill={fill} fillRule="nonzero">
          <path d="M10,0 C12.0682927,0 14.0292683,0.717575758 15.7365854,2.04606061 C17.4439024,3.36484848 18.897561,5.29454545 19.9414634,7.70909091 C20.0195122,7.89333333 20.0195122,8.10666667 19.9414634,8.28121212 C17.8536585,13.110303 14.1365854,16 10,16 L10,16 L9.9902439,16 C5.86341463,16 2.14634146,13.110303 0.0585365854,8.28121212 C-0.0195121951,8.10666667 -0.0195121951,7.89333333 0.0585365854,7.70909091 C2.14634146,2.88 5.86341463,0 9.9902439,0 L9.9902439,0 Z M10,4.12121212 C7.84390244,4.12121212 6.09756098,5.8569697 6.09756098,8 C6.09756098,10.1333333 7.84390244,11.8690909 10,11.8690909 C12.1463415,11.8690909 13.8926829,10.1333333 13.8926829,8 C13.8926829,5.8569697 12.1463415,4.12121212 10,4.12121212 Z M10.0011707,5.57362424 C11.3377561,5.57362424 12.430439,6.65968485 12.430439,7.99786667 C12.430439,9.32635152 11.3377561,10.4124121 10.0011707,10.4124121 C8.65482927,10.4124121 7.56214634,9.32635152 7.56214634,7.99786667 C7.56214634,7.83301818 7.58165854,7.67786667 7.61092683,7.52271515 L7.65970732,7.52271515 C8.74263415,7.52271515 9.62068293,6.66938182 9.65970732,5.60271515 C9.76702439,5.58332121 9.88409756,5.57362424 10.0011707,5.57362424 Z"></path>
        </g>
      </g>
    </svg>
  );
};

export const EyeSlashIcon = ({ className = 'h-6 w-6', fill = 'currentColor', stroke = 'none', strokeWidth = '1' }: IIconProps) => {
  return (
    <svg className={className} width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
      <title>Iconly/Bold/Hide</title>
      <g id="Iconly/Bold/Hide" stroke={stroke} strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="Hide" transform="translate(2.000000, 3.500000)" fill={fill} fillRule="nonzero">
          <path d="M17.170359,0.214130592 C17.4630805,-0.0713768641 17.9216775,-0.0713768641 18.2046416,0.214130592 C18.4973631,0.499638048 18.4973631,0.972202114 18.2046416,1.25770957 L18.2046416,1.25770957 L16.4287979,3.04951498 C17.8436184,4.34906616 19.0437765,6.10149124 19.9414557,8.20833937 C20.0195148,8.39539598 20.0195148,8.61198784 19.9414557,8.78919936 C17.8533758,13.6920515 14.135813,16.6258868 9.99868275,16.6258868 L9.99868275,16.6258868 L9.98892537,16.6258868 C8.10575051,16.6258868 6.30063472,16.0056464 4.71018134,14.8734617 L4.71018134,14.8734617 L2.8172491,16.7834081 C2.67088836,16.9310844 2.48549809,17 2.30010782,17 C2.11471755,17 1.91956989,16.9310844 1.78296654,16.7834081 C1.53903197,16.537281 1.50000244,16.1434776 1.69515009,15.8579702 L1.69515009,15.8579702 L1.72442224,15.8185898 L16.1555912,1.25770957 C16.175106,1.2380194 16.1946208,1.21832923 16.2043781,1.19863906 C16.2238929,1.17894889 16.2434077,1.15925872 16.2531651,1.13956855 L16.2531651,1.13956855 Z M10.0013172,0.385336615 C11.396623,0.385336615 12.7528992,0.720069495 14.0018441,1.35015492 L14.0018441,1.35015492 L10.7428783,4.6384132 C10.5087011,4.59903287 10.2550092,4.56949761 10.0013172,4.56949761 C7.84493567,4.56949761 6.09836417,6.33176777 6.09836417,8.50753149 C6.09836417,8.76350369 6.12763632,9.01947589 6.16666585,9.25575793 L6.16666585,9.25575793 L2.55643426,12.8984393 C1.58069599,11.7564094 0.731803701,10.3780976 0.0585442961,8.79303895 C-0.0195147654,8.61582742 -0.0195147654,8.39923556 0.0585442961,8.21217895 C2.14662419,3.30932677 5.86418699,0.385336615 9.99155986,0.385336615 L9.99155986,0.385336615 Z M13.218619,6.28854785 L12.1550643,7.36166208 C12.3306972,7.69639496 12.428271,8.09019835 12.428271,8.50369191 C12.428271,9.85246851 11.3354442,10.955118 9.99868275,10.955118 C9.58887268,10.955118 9.19857737,10.8566671 8.86682636,10.6794556 L8.86682636,10.6794556 L7.80327165,11.7525699 C8.42774414,12.1759085 9.18881999,12.4318807 9.99868275,12.4318807 C12.1453069,12.4318807 13.8918784,10.6696105 13.8918784,8.50369191 C13.8918784,7.68654988 13.6381865,6.91863327 13.218619,6.28854785 L13.218619,6.28854785 Z"></path>
        </g>
      </g>
    </svg>
  );
};