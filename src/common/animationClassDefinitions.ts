export type Animation = {
    initialClass: string;
    finalClass: string;
};

// these classes are defined in globals.css
interface Animations {
    [animationName: string]: Animation;
}

export const animationDefinitions: Animations = {
    fadeInAnimation: {
        initialClass: "fade-in-on-scroll",
        finalClass: "faded-in",
    },
    fadeInSlowAnimation: {
        initialClass: "fade-in-on-scroll-slow",
        finalClass: "faded-in-slow",
    },
    expandAnimation: {
        initialClass: "expand-on-scroll",
        finalClass: "expanded",
    },
    underlineAnimation: {
        initialClass: "underline-on-scroll",
        finalClass: "underlined",
    },
    dummyAnimation: {
        // needed so this element is put into the animation queue (useful for is-persistent-animation)
        initialClass: "dummy-animation",
        finalClass: "dummy-animation-fin",
    },
};
