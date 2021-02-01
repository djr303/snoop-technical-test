import React, { MouseEvent } from "react";
import more from "../../images/More.png";

import './MoreButton.scss'

interface MoreButtonProps {
  onClick: (e: MouseEvent) => void;
  alt: string;
}

const MoreButton: React.FC<MoreButtonProps> = ({ onClick, alt }) => (
  <a className="moreButton" onClick={onClick}>
    <img width="25" src={more} alt={alt} />
  </a>
);

export default MoreButton;
