import React from 'react'

interface YoutubeProps {
    width?: number
    height?: number
}

export const Youtube = ({ width, height }: YoutubeProps) => {
    return (
        <svg
            data-testid="close-id"
            width={width ? width : 41}
            height={height ? height : 30}
            viewBox="0 0 41 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M32.4848 0H8.51517C3.81237 0 0 3.81237 0 8.51517V20.4975C0 25.2003 3.81237 29.0126 8.51517 29.0126H32.4848C37.1876 29.0126 41 25.2003 41 20.4975V8.51517C41 3.81237 37.1876 0 32.4848 0ZM26.7261 15.0893L15.5147 20.4365C15.2159 20.5789 14.8709 20.3611 14.8709 20.0302V9.00166C14.8709 8.66601 15.225 8.44847 15.5244 8.6002L26.7358 14.2816C27.0691 14.4505 27.0633 14.9285 26.7261 15.0893Z"
                fill="white"
            />
        </svg>
    )
}
