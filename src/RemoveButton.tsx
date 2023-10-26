import { useState } from 'react';
import * as styles from './styles';
import { CheckButtonProps } from './types';

export const RemoveButton = ({
  isSelected = false,
  isVisible = true,
  onClick,
  color = '#FFFFFFB2',
  selectedColor = '#FFA500',
  hoverColor = '#FFFFFFFF',
}: CheckButtonProps): JSX.Element => {
  const [hover, setHover] = useState(false);

  const circleStyle = { display: isSelected ? 'block' : 'none' };
  const fillColor = isSelected ? selectedColor : hover ? hoverColor : color;

  const handleMouseOver = () => setHover(true);
  const handleMouseOut = () => setHover(false);

  return (
    <div
      data-testid="grid-gallery-item_remove-button"
      title="Remove"
      style={styles.removeButton({ isVisible })}
      onClick={onClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <svg
        fill={fillColor}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <radialGradient
          id="shadow"
          cx="38"
          cy="95.488"
          r="10.488"
          gradientTransform="matrix(1 0 0 -1 -26 109)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".832" stopColor="#010101"></stop>
          <stop offset="1" stopColor="#010101" stopOpacity="0"></stop>
        </radialGradient>

        <circle
          style={circleStyle}
          opacity=".26"
          fill="url(#shadow)"
          cx="12"
          cy="13.512"
          r="10.488"
        />
        <circle style={circleStyle} fill="#FFF" cx="12" cy="12.2" r="8.292" />
        <path d="M0 0h24v24H0z" fill="none" />
        {/* <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /> */}
        <path
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          fill="#FF0000"
        />
      </svg>
    </div>
  );
};
