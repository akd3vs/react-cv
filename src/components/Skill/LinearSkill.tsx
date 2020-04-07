import React from 'react';
import styled from "styled-components";

type LinearSkillWrapperProps = {
    progress: number,
};

type LinearSkillProps = {
    name: string,
    level: string,
} & LinearSkillWrapperProps & typeof defaultProps;

const defaultProps = {
    progress: 100,
};

const LinearSkillWrapper = styled.div<LinearSkillWrapperProps>`
  margin-bottom: 20px;

  .linear-skill {
    &__name {
      font: ${({ theme }) => theme.text.skills.title.font};
      color: ${({ theme }) => theme.text.skills.title.colour};
      text-transform: uppercase;
      margin-bottom: 5px;
    }
    &__progress-bar {
      position: relative;
      background-color: ${({ theme }) => theme.text.skills.progressBar.shadow.backgroundColour};
      height: 10px;

      &::after {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        width: ${({ progress }) => progress}%;
        height: 100%;
        background-color: ${({ theme }) => theme.text.skills.progressBar.progress.backgroundColour};
      }
    }
  }
`;

function LinearSkill(props: LinearSkillProps) {
    const { name, progress, level } = props;
    return (
        <LinearSkillWrapper progress={progress}>
            <div className="linear-skill__name">{name} ({level})</div>
            <div className="linear-skill__progress-bar" />
        </LinearSkillWrapper>
    );
}

LinearSkill.defaultProps = defaultProps;

export default LinearSkill;
