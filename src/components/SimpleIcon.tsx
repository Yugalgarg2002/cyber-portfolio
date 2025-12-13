import React from 'react';

// Define the shape of the SimpleIcon object from simple-icons
interface SimpleIconData {
  title: string;
  slug: string;
  svg: string;
  path: string;
  hex: string;
}

interface SimpleIconProps {
  icon: SimpleIconData;
  size?: number; // width and height
  color?: string; // SVG fill color
  className?: string; // CSS classes
}

const SimpleIcon: React.FC<SimpleIconProps> = ({ icon, size = 24, color = 'currentColor', className }) => {
  if (!icon) {
    return null;
  }

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      className={className}
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
};

export default SimpleIcon;