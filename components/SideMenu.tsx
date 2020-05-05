import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sideMenu: {
      width: 250,
    },
  }),
);

export default function SideMenu(props) {
  const classes = useStyles();

  // 親の isOpen state を変更する
  function changeIsOpenState(open: boolean) {
    return (event: React.KeyboardEvent | React.MouseEvent) => {
      // Tab か Shift キーであれば onKeyDown が発生しても無視する（サイドメニュー内の移動に使うため）
      if (event && event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) { return; }

      props.stateHandler(open);
    }
  };

  return (
    <SwipeableDrawer open={props.isOpen} onClose={changeIsOpenState(false)} onOpen={changeIsOpenState(true)}>
      <div
        className={clsx(classes.sideMenu)}
        role="presentation"
        onClick={changeIsOpenState(false)}
        onKeyDown={changeIsOpenState(false)}
      >
        <List>
          <Link href='/'>
            <ListItem button>
              <ListItemIcon><HomeIcon color="primary" /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
        </List>
      </div>
    </SwipeableDrawer>
  )
}
