import React, { MouseEvent } from "react";
import pin from "../../images/pin.png";

import './PinButton.scss';

interface PinButtonProps {
  onClick: (e: MouseEvent) => void;
  alt: string;
}

const PinButton: React.FC<PinButtonProps> = ({ onClick, alt }) => (
  <a className="pinButton" onClick={onClick}>
    <img height="50" src={pin} alt={alt} />
  </a>
);

export default PinButton;
