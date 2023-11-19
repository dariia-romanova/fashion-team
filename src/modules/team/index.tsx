import { TeamMember } from './team-member/team-member.tsx';
import './team.scss';
import { team } from './team.ts';

export const Team = () => {
  const teamMember = team[0];

  return (
    <div className="team">
      <TeamMember member={teamMember} />
    </div>
  );
};
