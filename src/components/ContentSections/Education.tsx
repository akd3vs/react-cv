import React, {FC} from 'react';
import Section from "../Section";
import Graduation from "../icons/Graduation";
import Container from "../Container";

import ExperienceEntry from "../ExperienceEntry";

import { COLOURS_ENUM } from "../../theme/theme";

type EducationProps = {};

const Education: FC<EducationProps> = (props) => {
    return (
        <Section title="education" colour={COLOURS_ENUM.primary} Icon={Graduation}>
            <Container>
                <ExperienceEntry
                    company="ServiceNow"
                    position="System administrator Certification"
                    companyLocationSeparation={false}
                    items={[]}
                />
                <ExperienceEntry
                    company="Fray Servando Teresa de Mier"
                    position="Highschool"
                    companyLocationSeparation={false}
                    items={[]}
                />
            </Container>
        </Section>
    );
};

export default Education;
