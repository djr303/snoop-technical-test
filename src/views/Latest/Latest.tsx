import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { requestSnoops } from "../../store/actions";
import { selectSnoops } from "../../store/selectors";
import { DisplayType } from "../../store/store";

import { Card, Hero } from "../../components";

import "./Latest.scss";

const getDisplayComponent = (key: any, displayType: DisplayType, props: any) => {
  switch (displayType) {
    case DisplayType.HeroLeft:
    case DisplayType.HeroRight:
      return <Hero key={key} displayType={displayType} {...props} />;
    case DisplayType.Standard:
      return <Card key={key} {...props} />;
    default:
      return null;
  }
};

const Latest: React.FC = () => {
  const dispatch = useDispatch();
  const snoops = useSelector(selectSnoops);

  const onReadMore = useCallback(() => console.log("onReadMore() called"), []);
  const onPin = useCallback(() => console.log("onPin() called"), []);
  const onMore = useCallback(() => console.log("onMore() called"), []);

  useEffect(() => {
    !snoops.length ? dispatch(requestSnoops()) : void 0
  }, [snoops, dispatch]);

  return (
    <div className="latest">
      {snoops.map((snoop) =>
        getDisplayComponent(snoop.id, snoop.displayType, {
          onReadMore,
          onPin,
          onMore,
          borders: false,
          header: snoop.header,
          body: snoop.body,
          domain: snoop.domain,
        })
      )}
    </div>
  );
};

export default Latest;
