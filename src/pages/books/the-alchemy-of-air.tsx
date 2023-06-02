import React from "react";
import { initAnimations } from "@/common/animations";
import ExponentialCount from "@/pages/books/the-alchemy-of-air/ExponentialCount";

export default function TheAlchemyOfAir() {
    React.useEffect(() => {
        return initAnimations();
    }, []);

    return (
        <>
            <div className="mt-20" />
            {/*<AlchemyOfAirTitle />*/}
            <p className="fade-in-on-scroll animation-delay-2000 text-md mt-20">
                Credit for this animation goes to{" "}
                <a
                    href="https://github.com/matthias-research/pages/blob/master/tenMinutePhysics/17-fluidSim.html"
                    target="_blank"
                    className="underline-on-scroll animation-delay-200 after:bg-sleepover-secondary"
                >
                    Matthias Müller
                </a>
            </p>
            <p className="fade-in-on-scroll mt-20 text-2xl">It's 1890</p>
            <p className="fade-in-on-scroll mt-10 text-lg">
                And Crookes, the discoverer of Thallium (the element), is about to be inaugurated as
                president of the British Academy of Sciences.
            </p>
            <p className="fade-in-on-scroll mt-10 text-lg">
                What a dreadfully boring ceremony. So to rouse the crowd, he pronounces a speech
                that raises the fire alarms:
            </p>
            <div className="mt-20 flex flex-row">
                <div className="fade-in-on-scroll animation-delay-1500 flex flex-col justify-center align-middle">
                    <p className="fade-in-on-scroll mt-8 text-lg">
                        "England and all civilized nations, stand in deadly peril of not having
                        enough to eat."
                    </p>
                </div>
                {/*<img*/}
                {/*    className="fade-in-on-scroll m-5 max-w-sm p-20"*/}
                {/*    src={sirWilliamCrookes.src}*/}
                {/*    alt="Sir William Crookes"*/}
                {/*/>*/}
            </div>
            {/*https://www.jstor.org/stable/1627238?seq=2*/}
            {/*<p className="fade-in-on-scroll mt-10 text-xl">*/}
            {/*    "Our wheat-producing soil is totally unequal to the strain put upon it."*/}
            {/*</p>*/}
            {/*<p className="fade-in-on-scroll mt-10 text-xl">*/}
            {/*    "As mouths multiply, food sources dwindle"*/}
            {/*</p>*/}
            <p className="fade-in-on-scroll mt-10 text-xl">
                Even if all arable land is cultivated, there will not be enough wheat for everyone
                by 1931.
            </p>
            <p className="fade-in-on-scroll mt-10 text-xl">
                "We must then rely on nitrogenous manures to increase the fertility of land under
                wheat, so as to raise the yield from the world's low average - 12.7 bushels per acre
                - to a higher average".
            </p>
            <p className="fade-in-on-scroll mt-10 text-xl">
                "For years we have been expending fixed nitrogen (a fertilizer) at a culpably
                extravagant rate, heedless of the fact that it is fixed with extreme slowness and
                difficulty".
            </p>
            <p className="fade-in-on-scroll mt-10 text-xl">
                "There is a gleam of light out of this darkness of dispondency. In its free state,
                nitrogen is one of the most abundant and pervading bodies on the face of the earth".
            </p>
            <p className="fade-in-on-scroll mt-10 text-xl">
                So "before we are in the grip of actual dearth, the chemist will step in and
                postpone the day of famine".
            </p>
            <p className="fade-in-on-scroll mt-10 text-xl">
                Because "the fixation of nitrogen is vital to the progress of civilized humanity".
            </p>
            {/*<p className="fade-in-on-scroll mt-10 text-xl">*/}
            {/*    Many didn't believe him, stating that the Chilian desert has an unlimitted amount of*/}
            {/*    fertilizer.*/}
            {/*</p>*/}
            {/*<p className="fade-in-on-scroll mt-10 text-xl">*/}
            {/*    But they were wrong. Because our population doubled, and doubled, and doubled.*/}
            {/*</p>*/}
            <p className="fade-in-on-scroll mt-10 text-xl">
                This address was sensational. Newspapers around the world spread his prophecy.
            </p>
            <p className="fade-in-on-scroll mt-40 text-2xl">The race to fix nitrogen had begun.</p>
            {/* <p className="fade-in-on-scroll mt-40 text-xl">31 years until famine</p> */}
            <div className="fade-in-on-scroll mt-40 text-xl">
            <ExponentialCount className="fade-in-on-scroll mt-40 text-xl"/>
                 <p>years until famine</p>
                 </div>
            <p className="fade-in-on-scroll mt-40 text-xl">20 years until famine</p>
            <p className="fade-in-on-scroll mt-40 text-xl">Enter Fritz Haber</p>
            {/*<Boiler />*/}
            {/*<BulletsStrikeSand />*/}
            {/*</div>*/}
            <br />
            <br />
            <p>Enter fritz Haber. A German, and a chemist still seeking for his Nobel prize.</p>
            <p>He labours </p>
            <p className="fade-in-on-scroll">
                This book changed my life because it taught me that humanity has solved
                calamity-scale problems before. It make me much more optimistic in technology that
                can save the world. We've done it before.
            </p>
            <p>
                What else did these Nobel laureates do? More alchemy of course. You can feel it in
                the air.
            </p>
            <div className="mb-40" />;
        </>
    );
}
