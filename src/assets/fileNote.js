import * as React from "react";
function SvgFileNote(props) {
  return (
    <svg
      aria-label="File"
      aria-hidden="true"
      viewBox="0 0 16 16"
      version="1.1"
      data-view-component="true"
      height="16"
      width="16"
      fill={props.color}
    >
      <path
        fillRule="evenodd"
        d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"
      ></path>
    </svg>
  );
}
export default SvgFileNote;
