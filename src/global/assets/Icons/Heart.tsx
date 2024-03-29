import React from 'react'

interface HeartProps {
    width?: number
    height?: number
}

export const Heart = ({ width, height }: HeartProps) => {
    return (
        <svg
            data-testid="close-id"
            width={width ? width : 20}
            height={height ? height : 18}
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M17.2422 2.46484C15.3086 0.8125 12.4609 1.12891 10.668 2.95703L10 3.66016L9.29688 2.95703C7.53906 1.12891 4.65625 0.8125 2.72266 2.46484C0.507812 4.36328 0.402344 7.73828 2.37109 9.77734L9.19141 16.8086C9.61328 17.2656 10.3516 17.2656 10.7734 16.8086L17.5938 9.77734C19.5625 7.73828 19.457 4.36328 17.2422 2.46484Z"
                fill="#FF4545"
            />
        </svg>
    )
}
