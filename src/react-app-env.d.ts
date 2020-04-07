/// <reference types="react-scripts" />
import 'styled-components'
import {colours} from "./theme/theme";

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        colours: {
            primary: string,
            sidebarContent: string
            experienceTitle: string
            experienceSubtitle: string
            sidebarContentContrast: string
        }
        body: {
            backgroundPrimary: string
        }
        sidebar: {
            backgroundPrimary: string
        }
        text: {
            subtitle: {
                font: string
            }
            title: {
                font: string
                color: string
            }
            sections: {
                font: string
                color: string
                border: string
                content: {
                    marginTop: string
                    color: string
                    font: string
                }
                sectionSubtitle: string
            }
            experience: {
                title: {
                    font: string
                    colour: string
                }
                subtitle: {
                    font: string
                    colour: string
                }
                items: {
                    font: string
                    colour: string
                }
            }
            skills: {
                title: {
                    font: string
                    colour: string
                }
                progressBar: {
                    shadow: {
                        backgroundColour: string
                    }
                    progress: {
                        backgroundColour: string
                    }
                }
            }
        }
    }
}
