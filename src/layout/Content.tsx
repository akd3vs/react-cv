import React, {FC} from 'react';
import styled from "styled-components";

import Profile from "../components/ContentSections/Profile";
import Experience from "../components/ContentSections/Experience";
import Education from "../components/ContentSections/Education";
import Skills from "../components/ContentSections/Skills";

type ContentProps = {};

const ContentWrapper = styled.div`
  margin-top: 230px;
`;

const Content: FC<ContentProps> = () => {
    return (
        <ContentWrapper className="col">
            <Profile />
            <Experience />
            <Education />
            <Skills />
        </ContentWrapper>
    );
};

export default Content;
