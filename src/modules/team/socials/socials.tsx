import { InstagramIcon } from "../../../assets/instagram-icon";
import { TwitterIcon } from "../../../assets/twitter-icon";

import './socials.scss';

export const Socials = () => {
  return (
    <div className="socials">
      <a className="socials__link" href='https://www.instagram.com/'>
        <InstagramIcon />
      </a>
      <a className="socials__link" href='https://twitter.com/'>
        <TwitterIcon />
      </a>
    </div>
  );
};
