import { COLLECTION_ICON, CONYTENT_ICON, FORM_ICON, ICONS_ICON, INTERACTIVE_IOCN, MEDIA_ICON, NAVIGATION_ICON, PAGES_ICON, PATTERN_ICON, SECTION_ICON, SOCIAL_ICON, UTILITY_ICON } from "../Assets/Images";

export const SideBarList = [
    {
        SectionTitle: "Basics",
        SectionChilds: [
            {
                icon: SECTION_ICON,
                Label: "Section",
                id: "section"
            },
            {
                icon: NAVIGATION_ICON,
                id: "navigation",
                Label: "Navigation",
            },
            {
                icon: PAGES_ICON,
                id: "pages",
                Label: "Pages",
            }
        ]
    },
    {   
        SectionTitle: "CMS",
        SectionChilds: [
            {
                icon: COLLECTION_ICON,
                id: "collectionlists",
                Label: "Collection Lists",
            },
            {
                icon: CONYTENT_ICON,
                id: "conytentfield",
                Label: "Conytent Field",
            },
        ]
    },
    {
        SectionTitle: "Elements",
        SectionChilds: [
            {
                icon: MEDIA_ICON,
                id: "media",
                Label: "Media",
            },
            {
                icon: FORM_ICON,
                id: "forms",
                Label: "Forms",
            },
            {
                icon: ICONS_ICON,
                id: "icons",
                Label: "Icons",
            },
            {
                icon: INTERACTIVE_IOCN,
                id: "interactive",
                Label: "Interactive",
            },
            {
                icon: PATTERN_ICON,
                id: "patterns",
                Label: "Patterns",
            },
            {
                icon: SOCIAL_ICON,
                id: "social",
                Label: "Social",
            },
            {
                icon: UTILITY_ICON,
                id: "utility",
                Label: "Utility",
            },
        ]
    }
]