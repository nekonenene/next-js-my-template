import { Typography, Link } from '@material-ui/core';
import constants from '../lib/constants';

export default function Footer() {
  return (
    <footer>
      <Link href={`https://twitter.com/${constants.adminTwitterId}`}>
        <Typography variant="body2" color="textSecondary" align="center">
          Copyright © {constants.adminTwitterId} {new Date().getFullYear()}.
        </Typography>
      </Link>
    </footer>
  );
}
