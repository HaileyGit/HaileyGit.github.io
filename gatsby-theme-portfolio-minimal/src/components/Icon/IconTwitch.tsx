import React from 'react';

interface IconTwitchProps {
    color?: string;
}

export function IconTwitch(props: IconTwitchProps): React.ReactElement {
    return (
        <svg
            viewBox="0 0 24 24"
            height="48"
            width="48"
            focusable="false"
            role="img"
            fill={props.color || 'var(--primary-color)'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M4.265 3 3 6.236v13.223h4.502V21l2.531.85 2.392-2.391h3.658l4.923-4.924V3H4.265zm15.052 10.691-2.813 2.814h-4.502l-2.391 2.391v-2.391H5.813V4.688h13.504v9.003zm-2.812-5.767v4.923h-1.688V7.924h1.688zm-4.502 0v4.923h-1.688V7.924h1.688z"></path>
        </svg>
    );
}
