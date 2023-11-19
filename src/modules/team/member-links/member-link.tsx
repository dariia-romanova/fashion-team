import { FC } from "react";
import { TeamMemberProps } from "../team.props"

import './member-link.scss';

export const MemberLink: FC<TeamMemberProps> = ({ member }) => {
  return (
    <div className="member-link">
      <div className="member-link__number">{member.id.toString().padStart(2, '0')}</div>
      <div>
          <img className="member-link__photo" src={`/src/assets/${member.slug}-thumbnail.jpg`} />
      </div>
    </div>
  );
};
