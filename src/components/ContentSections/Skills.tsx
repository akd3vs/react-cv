import React, {FC} from 'react';
import Section from "../Section";
import Cogs from "../icons/Cogs";
import Container from "../Container";

import LinearSkill from "../Skill/LinearSkill";

import { COLOURS_ENUM } from "../../theme/theme";

type SkillsProps = {};

const Skills: FC<SkillsProps> = (props) => {
    return (
        <Section title="skills" colour={COLOURS_ENUM.primary} Icon={Cogs}>
            <Container rowClasses="mb-5">
                <div className="row">
                    <div className="col-6 pr-5">
                        <LinearSkill name="Webpack" progress={70} level="high" />
                        <LinearSkill name="Jenkins" progress={60} level="medium" />
                        <LinearSkill name="MongoDB" progress={80} level="high" />
                        <LinearSkill name="Redux" progress={75} level="high" />
                        <LinearSkill name="Jest" progress={80} level="high" />
                        <LinearSkill name="GraphQL" progress={70} level="high" />
                        <LinearSkill name="Cypress" progress={85} level="high" />
                        <LinearSkill name="SASS" progress={95} level="expert" />
                        <LinearSkill name="REST API Implementation" progress={80} level="high" />
                        <LinearSkill name="Bootstrap" progress={95} level="expert" />
                        <LinearSkill name="Agile (SCRUM)" progress={60} level="medium" />
                        <LinearSkill name="Typescript" progress={65} level="medium" />
                    </div>
                    <div className="col-6 pl-5">
                        <LinearSkill name="Next.js" progress={80} level="high" />
                        <LinearSkill name="AWS" progress={20} level="basic" />
                        <LinearSkill name="Twilio (Chat)" progress={65} level="medium" />
                        <LinearSkill name="Symfony" progress={70} level="high" />
                        <LinearSkill name="Prisma" progress={75} level="high" />
                        <LinearSkill name="MySQL" progress={85} level="high" />
                        <LinearSkill name="Postman" progress={95} level="high" />
                        <LinearSkill name="ServiceNow" progress={30} level="basic" />
                        <LinearSkill name="Electron" progress={85} level="high" />
                        <LinearSkill name="Express.js" progress={90} level="expert" />
                        <LinearSkill name="Ionic" progress={85} level="high" />
                        <LinearSkill name="React Native" progress={65} level="medium" />
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default Skills;
