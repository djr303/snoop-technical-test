import React from "react";
import { Button } from "@material-ui/core";
import { useLocation } from 'react-router-dom';
import classnames from 'classnames';
import { isLocation } from '../../common/helpers'
import { Paths } from '../../common/constants'

import useStyles from "./styles";

const Navigation: React.FC = () => {
  const styles = useStyles();
  const { pathname } = useLocation();

  const latestClasses = classnames(styles.button, {
    [styles.inactive]: !isLocation(Paths.Latest, pathname)
  })
  
  const pinnedClasses = classnames(styles.button, {
    [styles.inactive]: !isLocation(Paths.Pinned, pathname) 
  })

  const browseClasses = classnames(styles.button, {
    [styles.inactive]: !isLocation(Paths.Browse, pathname) 
  })

  return (
    <nav className={styles.container}>
      <Button className={latestClasses} href="/" variant="contained" disableElevation color="primary">
        Latest
      </Button>
      <Button className={pinnedClasses} href="/pinned" variant="contained" disableElevation color="primary">
        Pinned
      </Button>
      <Button className={browseClasses} href="/browse" variant="contained" disableElevation color="primary">
        Browse
      </Button>
    </nav>
  );
};

export default Navigation;
