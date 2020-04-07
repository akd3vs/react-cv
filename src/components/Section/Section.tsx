import React, {FC} from 'react';
import styled, {css} from "styled-components";

import {colours, COLOURS_ENUM} from "../../theme/theme";
import { IconStyle } from "../icons";

type SidebarSectionProps = {
    title: string,
    colour?: COLOURS_ENUM,
    Icon?: FC<IconStyle>,
    className?: string,
};

const SectionWrapper = styled.div<{ colour?: COLOURS_ENUM }>`
  margin-top: 40px;
  h3 {
    font: ${({theme}) => theme.text.sections.font};
    color: ${({theme, colour}) => colour ? theme.colours[colour] : theme.text.sections.color};
    letter-spacing: 2px;
    text-transform: uppercase;
    border-bottom: ${({theme}) => theme.text.sections.border};
    ${({ theme, colour }) => colour && css`
        border-bottom-color: ${theme.colours[colour]};
    `}
    
  }
  .content {
    margin-top: ${({theme}) => theme.text.sections.content.marginTop};
    font: ${({theme}) => theme.text.sections.content.font};
    color: ${({theme}) => theme.text.sections.content.color};
    
    a {
      color: ${({theme}) => theme.text.sections.content.color};
      text-decoration: underline;
    }
  }
`;

const Section: FC<SidebarSectionProps> = ({title, colour, className, Icon, children}) => {
    return (
        <SectionWrapper colour={colour} className="section">
            <h3>{Icon && <Icon inline size={25} padding="0 0 5px 0" colour={colours[COLOURS_ENUM.primary]} />}{title}</h3>
            <div className={`content${className ? ` ${className}` : ''}`}>
                {children}
            </div>
        </SectionWrapper>
    );
};

export default Section;
