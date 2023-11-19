import { FC } from "react";
import { MemberLink } from "./member-link.tsx";
import { team } from "../team.ts";

import './member-links.scss';

interface MemberLinksProps {
  activeMember: number,
}

export const MemberLinks: FC<MemberLinksProps> = ({ activeMember }) => {
  return (
    <div className="member-links">
      {team.map(( member ) => {
        if (member.id !== activeMember) {
          return <MemberLink member={member} />
        }
      })}
    </div>
  );
};
