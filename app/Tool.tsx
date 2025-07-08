import { Handle, Position } from "@xyflow/react";
import { memo } from "react";

export default memo(({ data }: { data: { label: string } }) => {
  return (
    <>
      <Handle
        type="source"
        isConnectable={true}
        position={Position.Left}
      ></Handle>
      <div className="p-3 rounded-full">
        <SvgIcon width={50} height={50}></SvgIcon>
      </div>
    </>
  );
});

const SvgIcon = ({
  width = 512,
  height = 512,
  fill = "#000000",
  className = "",
}) => {
  return (
    <svg
      version="1.1"
      id="_x32_"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      width={width}
      height={height}
      className={className}
      fill={fill}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <style type="text/css">{`.st0{fill:${fill};}`}</style>
        <g>
          <path
            className="st0"
            d="M304,309.328V360h-96v-50.672H0v117.344c0,35.344,28.656,64,64,64h384c35.344,0,64-28.656,64-64V309.328H304z"
          />
          <path
            className="st0"
            d="M372,69.328c0,8.844-7.406,16-16.563,16H156.578c-9.156,0-16.578-7.156-16.578-16v-32 c0-8.828,7.422-16,16.578-16h198.859c9.156,0,16.563,7.172,16.563,16V69.328z"
          />
          <path
            className="st0"
            d="M180.656,185.328c0,8.844-7.156,16-16,16h-1.328c-8.828,0-16-7.156-16-16V120c0-8.844,7.172-16,16-16h1.328 c8.844,0,16,7.156,16,16V185.328z"
          />
          <path
            className="st0"
            d="M364.656,185.328c0,8.844-7.156,16-16,16h-1.328c-8.828,0-16-7.156-16-16V120c0-8.844,7.172-16,16-16h1.328 c8.844,0,16,7.156,16,16V185.328z"
          />
          <path
            className="st0"
            d="M448,154.672H64c-35.344,0-64,28.656-64,64v58.656h208V232h96v45.328h208v-58.656 C512,183.328,483.344,154.672,448,154.672z"
          />
          <rect x="224" y="248" className="st0" width="64" height="96" />
        </g>
      </g>
    </svg>
  );
};
