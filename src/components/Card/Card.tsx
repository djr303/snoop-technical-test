import React, { MouseEvent } from "react";
import Button from "../Button/Button";
import PinButton from "../PinButton/PinButton";
import MoreButton from "../MoreButton/MoreButton";
import { Domain } from "../../store/store";
import classnames from "classnames";
import { Finances, MoneyInsight, Shopping, Entertainment } from "../Labels";
import "./Card.scss";
import Truncate from "react-truncate";

interface CardProps {
  onReadMore: (e: MouseEvent) => void;
  onPin: (e: MouseEvent) => void;
  onMore: (e: MouseEvent) => void;
  domain: Domain;
  bordersLeft: boolean;
  bordersRight: boolean;
  header: string;
  body: string;
}

const getDomainComponent = (domain: Domain) => {
  switch (domain) {
    case Domain.Finances:
      return <Finances />;
    case Domain.MoneyInsight:
      return <MoneyInsight />;
    case Domain.Shopping:
      return <Shopping />;
    case Domain.Entertainment:
      return <Entertainment />;
    default:
      return null;
  }
};

const Card: React.FC<CardProps> = ({
  onReadMore,
  onPin,
  onMore,
  domain,
  bordersLeft,
  bordersRight,
  header,
  body,
}) => {
  const classes = classnames("card", {
    bordersLeft: bordersLeft,
    bordersRight: bordersRight,
    pushRight: bordersLeft,
  });

  return (
    <div className={classes}>
      {getDomainComponent(domain)}
      <h4>{header}</h4>
      <p>
        <Truncate lines={5} ellipsis="...">
          {body}
        </Truncate>
      </p>
      <div className="actions">
        <div className="button">
          <Button onClick={onReadMore}>Read more</Button>
        </div>
        <div className="additional">
          <PinButton onClick={onPin} alt="Pin this!" />
          <MoreButton onClick={onMore} alt="More on this!" />
        </div>
      </div>
    </div>
  );
};
export default Card;
