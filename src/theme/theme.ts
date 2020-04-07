import { DefaultTheme } from "styled-components";

export const fontFamily = {
    // uses: 400, 700
    primary: '"Open Sans", sans-serif',
    // uses: 500
    secondary: '"Roboto", sans-serif;',
};

export const fonts = {
    normalSpace: 'normal',
    smallSpace: '22px',
    // sizes
};

export enum COLOURS_ENUM {
    primary = 'primary',
    sidebarContent = 'sidebarContent',
    experienceTitle = 'experienceTitle',
    experienceSubtitle = 'experienceSubtitle',
    sidebarContentContrast = 'sidebarContentContrast',
}

export const colours = {
    [COLOURS_ENUM.primary]: '#2f393b',
    [COLOURS_ENUM.sidebarContent]: '#999999',
    [COLOURS_ENUM.experienceTitle]: '#484848',
    [COLOURS_ENUM.experienceSubtitle]: '#666666',
    [COLOURS_ENUM.sidebarContentContrast]: '#686e6f',
};

const theme: DefaultTheme = {
    colours,
    body: {
        backgroundPrimary: '#f5f5f5',
    },
    sidebar: {
        backgroundPrimary: colours[COLOURS_ENUM.primary],
    },
    text: {
        subtitle: {
            font: `13px/${fonts.normalSpace} ${fontFamily.primary}`
        },
        title: {
            font: `700 55px/${fonts.normalSpace} ${fontFamily.primary}`,
            color: colours[COLOURS_ENUM.primary],
        },
        sections: {
            font: `700 20px/${fonts.normalSpace} ${fontFamily.secondary}`,
            color: '#fff',
            border: '1px solid #fff',
            content: {
                marginTop: '50px',
                color: colours[COLOURS_ENUM.sidebarContent],
                font: `14px/${fonts.normalSpace} ${fontFamily.primary}`,
            },
            sectionSubtitle: `16px/normal ${fontFamily.secondary}`,
        },
        experience: {
            title: {
                font: `bold 14px/${fonts.normalSpace} ${fontFamily.secondary}`,
                colour: colours[COLOURS_ENUM.experienceTitle],
            },
            subtitle: {
                font: `italic 14px/${fonts.normalSpace} ${fontFamily.secondary}`,
                colour: colours[COLOURS_ENUM.experienceSubtitle],
            },
            items: {
                font: `14px/${fonts.smallSpace} ${fontFamily.primary}`,
                colour: colours[COLOURS_ENUM.sidebarContent],
            }
        },
        skills: {
            title: {
                font: `12px/${fonts.smallSpace} ${fontFamily.primary}`,
                colour: '#000',
            },
            progressBar: {
                shadow: {
                    backgroundColour: 'rgb(229, 229, 229)',
                },
                progress: {
                    backgroundColour: 'rgb(47, 57, 59)'
                }
            }
        }
    },
};

export default theme;
