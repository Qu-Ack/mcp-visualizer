import { Handle, Position } from "@xyflow/react";
import { memo } from "react";
export default memo(({ data }: { data: { label: string } }) => {
  return (
    <>
      <Handle
        type="source"
        position={Position.Left}
        isConnectable={true}
      ></Handle>
      <div className="p-3">
        <CmdIcon></CmdIcon>
      </div>
    </>
  );
});

const CmdIcon = ({
  width = 32,
  height = 32,
  fill = "#000000",
  className = "",
  ...props
}) => {
  return (
    <svg
      fill={fill}
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title>cmd</title>
        <path d="M0 26.016q0 2.496 1.76 4.224t4.256 1.76 4.224-1.76 1.76-4.224v-2.016h8v2.016q0 2.496 1.792 4.256t4.224 1.728q2.464 0 4.224-1.76t1.76-4.224-1.76-4.256-4.224-1.76h-2.016v-8h2.016q2.464 0 4.224-1.76t1.76-4.224-1.76-4.256-4.224-1.76-4.256 1.76-1.76 4.256q0 0.992 0.384 1.984h-8.736q0.352-1.024 0.352-1.984 0-2.496-1.76-4.256t-4.224-1.76-4.256 1.76-1.76 4.256 1.76 4.224 4.256 1.76h1.984v8h-1.984q-2.528 0-4.256 1.792t-1.76 4.224zM4 26.016q0-0.832 0.576-1.408t1.44-0.608 1.408 0.608 0.576 1.408-0.576 1.408-1.408 0.576-1.44-0.576-0.576-1.408zM4 6.016q0-0.832 0.576-1.408t1.44-0.608 1.408 0.608 0.576 1.408-0.576 1.408-1.408 0.576-1.44-0.576-0.576-1.408zM12 20v-8h8v8h-8zM24 26.016q0-0.832 0.576-1.408t1.44-0.608 1.408 0.608 0.576 1.408-0.576 1.408-1.408 0.576-1.44-0.576-0.576-1.408zM24 6.016q0-0.832 0.576-1.408t1.44-0.608 1.408 0.608 0.576 1.408-0.576 1.408-1.408 0.576-1.44-0.576-0.576-1.408z"></path>
      </g>
    </svg>
  );
};
