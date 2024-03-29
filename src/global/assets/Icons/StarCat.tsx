import React from 'react'

interface StarProps {
    width?: number
    height?: number
}

export const StarCat = ({ width, height }: StarProps) => {
    return (
        <svg
            data-testid="close-id"
            width={width ? width : 20}
            height={height ? height : 19}
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.10547 0.882812L6.82031 5.55859L1.65234 6.29688C0.738281 6.4375 0.386719 7.5625 1.05469 8.23047L4.74609 11.8516L3.86719 16.9492C3.72656 17.8633 4.71094 18.5664 5.51953 18.1445L10.125 15.7188L14.6953 18.1445C15.5039 18.5664 16.4883 17.8633 16.3477 16.9492L15.4688 11.8516L19.1602 8.23047C19.8281 7.5625 19.4766 6.4375 18.5625 6.29688L13.4297 5.55859L11.1094 0.882812C10.7227 0.0742188 9.52734 0.0390625 9.10547 0.882812Z"
                fill="#FFE145"
            />
        </svg>
    )
}
