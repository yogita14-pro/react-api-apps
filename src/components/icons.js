import React from "react";

function IconShirt(props) {
    return (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z" />
      </svg>
    );
}

function IconBxSort(props) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M8 16H4l6 6V2H8zm6-11v17h2V8h4l-6-6z" />
      </svg>
    );
}

function IconFiltering(props) {
    return (
      <svg
        viewBox="0 0 21 21"
        fill="currentColor"
        height="1em"
        width="1em"
        {...props}
      >
        <g
          fill="none"
          fillRule="evenodd"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6.5 4a1 1 0 011 1v2a1 1 0 11-2 0V5a1 1 0 011-1zM18.5 6h-11M5.5 6h-3M6.5 14a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zM18.5 16h-11M5.5 16h-3M14.5 9a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zM13.5 11h-11M18.5 11h-3" />
        </g>
      </svg>
    );
}

function IconGenderMaleFemale(props) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M17.58 4H14V2h7v7h-2V5.41l-3.83 3.83A5 5 0 0112 16.9V19h2v2h-2v2h-2v-2H8v-2h2v-2.1A5 5 0 016 12a5 5 0 015-5c1 0 1.96.3 2.75.83L17.58 4M11 9a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3z" />
      </svg>
    );
}

export {IconShirt,IconBxSort,IconFiltering,IconGenderMaleFemale} 


