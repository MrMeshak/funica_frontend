import Image from "next/image";

interface ILogoProps {
  width: number;
}

export default function Logo ({width}: ILogoProps) {
  return (
    <svg width={width} height={width} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0H36.5373C42.868 0 48 5.13202 48 11.4627V13.2923H11.4627C5.13202 13.2923 0 8.16028 0 1.82962V0Z" fill="url(#paint0_linear_1427_24722)"/>
      <path d="M0 17.3538H27.9403C34.271 17.3538 39.403 22.4859 39.403 28.8165V30.6462H11.4627C5.13202 30.6462 0 25.5141 0 19.1835V17.3538Z" fill="url(#paint1_linear_1427_24722)"/>
      <path d="M0 34.7077H9.67164C16.0023 34.7077 21.1343 39.8397 21.1343 46.1704V48H11.4627C5.13202 48 0 42.868 0 36.5373V34.7077Z" fill="url(#paint2_linear_1427_24722)"/>
      <defs>
      <linearGradient id="paint0_linear_1427_24722" x1="48" y1="48" x2="-9.11569" y2="31.4398" gradientUnits="userSpaceOnUse">
      <stop stopColor="#101010"/>
      <stop offset="1" stopColor="#313130"/>
      </linearGradient>
      <linearGradient id="paint1_linear_1427_24722" x1="48" y1="48" x2="-9.11569" y2="31.4398" gradientUnits="userSpaceOnUse">
      <stop stopColor="#101010"/>
      <stop offset="1" stopColor="#313130"/>
      </linearGradient>
      <linearGradient id="paint2_linear_1427_24722" x1="48" y1="48" x2="-9.11569" y2="31.4398" gradientUnits="userSpaceOnUse">
      <stop stopColor="#101010"/>
      <stop offset="1" stopColor="#313130"/>
      </linearGradient>
      </defs>
    </svg>
  );
}
