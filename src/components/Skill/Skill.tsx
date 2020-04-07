import React, {FC} from 'react';
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import styled from "styled-components";

interface SkillStyle {
    progress: number,
}

interface SkillProps extends SkillStyle {
    name: string,
    writtenLevel: string,
}

const SkillWrapper = styled.div`
  p {
    color: ${({ theme }) => theme.colours.primary};
    margin: 10px 0 0 0;
  }
`;

const styles = buildStyles({
    textSize: '15px',
});
const Skill: FC<SkillProps> = ({ name, progress, writtenLevel, }) => {
    return (
        <SkillWrapper>
            <CircularProgressbar value={progress} text={name} styles={styles} />
            <p className="text-center">{writtenLevel}</p>
        </SkillWrapper>
    );
};

export default Skill;
