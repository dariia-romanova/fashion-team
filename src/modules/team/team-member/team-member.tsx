import { FC } from "react";

import './team-member.scss';
import { Star } from '../../../assets/star.tsx'
import { TeamMemberProps } from "../team.props.ts";
import { MemberLinks } from "../member-links/member-links.tsx";
import { Socials } from "../socials/socials.tsx";

export const TeamMember: FC<TeamMemberProps> = ({ member }) => {
  return (
    <div className="member">
      <img className="member__photo" src={`/src/assets/${member.slug}.jpg`} />
      <div className={`member__gradient member__gradient--left--${member.id}`} />
      
      <div className={`member__gradient member__gradient--right--${member.id}`} />
      
      <div className="member__left-column member__column">
        <div>
          <h1 className="member__title">
            Our team
          </h1>

          <div className="member__number">
            {member.id.toString().padStart(2, '0')}
          </div>
        </div>

        <Star />
        
        <div>
          <h2 className="member__name">
            {member.name}
          </h2>

          <p className="member__position">
            {member.position}
          </p>
        </div>
      </div>

      <div className="member__right-column member__column">
        <p>{member.description}</p>

        <MemberLinks activeMember={1} />

        <Socials />
      </div>
    </div>
  );
};
