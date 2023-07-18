import React from "react";
import { initAnimations, NARRATIVE_ANIMATION_TRIGGER_DECIMAL } from "@/common/animations";
import ExponentialCount from "@/pages/books/the-alchemy-of-air/ExponentialCount";
import AlchemyOfAirTitle from "@/pages/books/the-alchemy-of-air/AlchemyOfAirTitle";
import sirWilliamCrookes from "public/books/the-alchemy-of-air/Sir_William_Crookes_1906.jpg";
import fritzHaber from "public/books/the-alchemy-of-air/Fritz_Haber.png";
import carlBosche from "public/books/the-alchemy-of-air/Carl_Bosch.jpg";
import FixNitrogen from "@/pages/books/the-alchemy-of-air/FixNitrogen";
import IncreaseHeat from "@/pages/books/the-alchemy-of-air/IncreaseHeat";
import IncreasePressure from "@/pages/books/the-alchemy-of-air/IncreasePressure";
import CultivateAllArableLand from "@/pages/books/the-alchemy-of-air/CultivateAllArableLand";
import OptimallyRotateCrops from "@/pages/books/the-alchemy-of-air/OptimallyRotateCrops";
import IncreaseFertilityOfLand from "@/pages/books/the-alchemy-of-air/IncreaseFertilityOfLand";
import PreheatsReagents from "./the-alchemy-of-air/PreheatsReagents";
import ArcFurnace from "./the-alchemy-of-air/ArcFurnace";
import Boiler from "./the-alchemy-of-air/Boiler";
import { HundredsOfCatalysts } from "./the-alchemy-of-air/HundredsOfCatalysts";
import ThinLine from "@/components/ThinLine";

export default function TheAlchemyOfAir() {
    React.useEffect(() => {
        return initAnimations(NARRATIVE_ANIMATION_TRIGGER_DECIMAL);
    }, []);

    return (
        <div className="px-3 text-center text-lg">
            {/* this is used for debugging*/}
            {/*<div id="mover" className="absolute h-3 w-3 bg-blue-400"></div>*/}
            {/*<div className="fixed mt-[70vh] h-3 w-3 bg-red-400"></div>*/}
            <div className="mt-20" />
            <div className="m-auto items-center">
                <AlchemyOfAirTitle />
            </div>
            {/* rational for the delay: 2000 ms for fluid to appear, 300ms for buffer*/}
            <p className="fade-in-on-scroll animation-delay-2300 text-md mb-32 mt-10">
                Credit for this animation goes to{" "}
                <a
                    href="https://github.com/matthias-research/pages/blob/master/tenMinutePhysics/17-fluidSim.html"
                    target="_blank"
                    className="underline-on-scroll animation-delay-200 after:bg-sleepover-secondary"
                >
                    Matthias Müller
                </a>
            </p>
            <p className="fade-in-on-scroll mt-20 text-2xl">England 1898</p>
            <div className="mt-20 flex flex-row flex-wrap items-center md:flex-nowrap">
                <div className="fade-in-on-scroll max-w-sm p-20 md:m-5">
                    <img src={sirWilliamCrookes.src} alt="Sir William Crookes" />
                </div>
                <div className="fade-in-on-scroll animation-delay-1500">
                    <p>
                        "England and all civilized nations stand in deadly peril of not having
                        enough to eat."
                    </p>
                </div>
            </div>
            <p className="fade-in-on-scroll mt-10 ">
                All 1000 people in the auditorium muted to hear the 66-year-old Crookes commence his
                inauguration speech. {/*at the Academy of Sciences.*/}
            </p>
            {/*<p className="fade-in-on-scroll mt-10 ">*/}
            {/*    "I must ask you to bear with me for 10 minutes, for I am afraid what I now have to*/}
            {/*    say will prove somewhat dull."*/}
            {/*</p>*/}
            <p className="fade-in-on-scroll mt-10 ">"As mouths multiply, food sources dwindle"</p>
            {/*https://www.jstor.org/stable/1627238?seq=2*/}
            <p className="fade-in-on-scroll mt-10 ">Even if we:</p>
            <p className="fade-in-on-scroll mb-10 mt-10">cultivate all arable land</p>
            <CultivateAllArableLand />
            <p className="fade-in-on-scroll mb-20 mt-10">and optimally rotate crops</p>
            <OptimallyRotateCrops />
            <p className="fade-in-on-scroll mt-10 ">
                "Our wheat-producing soil is totally unequal to the strain put upon it."
            </p>
            <p className="fade-in-on-scroll mt-50 mb-50 ">
                To meet this deficit, England will have to import grain from abroad
            </p>
            <p className="fade-in-on-scroll mb-40 mt-10 ">However...</p>
            <p className="fade-in-on-scroll mb-10 ">Austro-Hungary population will also increase</p>
            <p className="fade-in-on-scroll mb-10 "> Canada as well</p>
            <p className="fade-in-on-scroll mb-10 "> Russia as well</p>
            <p className="fade-in-on-scroll mb-32 "> America as well</p>
            {/*<p className="fade-in-on-scroll mb-10 ">And if there's a war, imports will...</p>*/}
            <p className="fade-in-on-scroll mb-40 mt-40 text-2xl">
                England will{" "}
                <span className="underline-on-scroll animation-delay-200 after:bg-red-400">
                    starve
                </span>{" "}
                in 33 years.
            </p>
            <p className="fade-in-on-scroll mt-10 ">Tense silence suffocates the room</p>
            <p className="fade-in-on-scroll mt-10 ">
                "Wheat preeminently demands nitrogen, fixed in the form of ammonia"
            </p>
            <p className="fade-in-on-scroll mt-10 ">
                "We must then rely on nitrogenous manures to increase the fertility of land under
                wheat"
            </p>
            <IncreaseFertilityOfLand />
            {/*"We must then rely on nitrogenous manures to increase the fertility of land under*/}
            {/*wheat, so as to raise the yield from the world's low average - 12.7 bushels per acre*/}
            {/*- to a higher average".*/}
            <p className="fade-in-on-scroll mt-10 ">
                Yet "for years we have been expending fixed nitrogen at a culpably extravagant
                rate".
            </p>
            <p className="fade-in-on-scroll mt-10 ">
                At present, England's fertilizer is imported from the Chilean desert. But it will
                soon empty.
            </p>
            <p className="fade-in-on-scroll mt-10 ">
                Fortunately, "nitrogen is one of the most abundant and pervading bodies on the face
                of the earth".
            </p>
            {/*I'm not sure if heres the catch is better than "But"*/}
            <p className="fade-in-on-scroll mb-10 mt-10 ">
                Here's the catch: To turn N&#8322; into fertilizer, you must break nature's
                strongest molecular bond.
            </p>
            <FixNitrogen />
            <p className="fade-in-on-scroll mb-40 ">But this has never been done.</p>
            <p className="fade-in-on-scroll mt-10 ">
                "There is a gleam of light out of this darkness of despondency. [...] Before we are
                in the grip of actual dearth, the chemist will step in and postpone the day of
                famine".
            </p>
            <p className="fade-in-on-scroll mb-20 mt-20">This was Brook's challenge:</p>
            <p className="fade-in-on-scroll mb-20 mt-10 text-2xl ">
                To fix nitrogen, and save mankind.
            </p>
            {/*<p className="fade-in-on-scroll mt-10 ">*/}
            {/*    His address was sensational. Newspapers printed it around the world.*/}
            {/*</p>*/}
            <p className="fade-in-on-scroll mb-10 text-xl">
                Newspapers printed his address around the world.
            </p>
            <p className="fade-in-on-scroll text-xl">The race was on.</p>
            {/* The address says that the world should run out of food by 1931*/}
            {/*https://en.wikipedia.org/wiki/Birkeland%E2%80%93Eyde_process*/}
            {/*This process was made in 1903: 28 years left*/}
            <div className="fade-in-on-scroll mb-60 mt-40 flex flex-row justify-center text-2xl">
                <div className="flex-row">
                    <ExponentialCount
                        startingNumber={100}
                        endingNumber={28}
                        exponentialAmount={0.95}
                        startingWaitDuration={150}
                        startingRedness={0}
                    />
                    <p className="mt-1">Years until famine </p>
                </div>
            </div>
            <p className="fade-in-on-scroll mb-40 mt-20 text-2xl">1903 Norway</p>
            <ArcFurnace />
            <p className="fade-in-on-scroll mb-10 mt-10 ">
                Birkeland and Eyde creates artificial lightning, splitting N&#8322; for the first
                time.
            </p>
            {/*<p className="fade-in-on-scroll mb-10 mt-10 ">*/}
            {/*    It takes 15 MWh To produce a ton of fixed nitrogen (nitric acid).*/}
            {/*</p>*/}
            {/*https://www.bing.com/search?q=10*1000+kwh+to+mwh&qs=n&form=QBRE&sp=-1&ghc=2&lq=0&pq=10*1000+kwh+to+mwh&sc=7-18&sk=&cvid=A25F9A80B2A448D98B96FAB5EDD5E887&ghsh=0&ghacc=0&ghpl=*/}
            {/*https://arena.gov.au/projects/hydrogen-to-ammonia/*/}
            <p className="fade-in-on-scroll mb-10 mt-10 ">But the process is:</p>
            <p className="fade-in-on-scroll mb-10 mt-10 ">Prohibitively expensive</p>
            <p className="fade-in-on-scroll mb-10 mt-10 ">Corrosive</p>
            <p className="fade-in-on-scroll mb-10 mt-10 ">And so hot it fries the machine</p>
            {/*<div className="fade-in-on-scroll">*/}
            {/*    <div*/}
            {/*        className="mt-20 text-9xl"*/}
            {/*        style={{*/}
            {/*            color: `rgb(220, 0, 0)`,*/}
            {/*        }}*/}
            {/*    >*/}
            {/*        27*/}
            {/*    </div>*/}
            {/*    <p className=" mt-1">Years until Famine </p>*/}
            {/*</div>*/}
            <div className="fade-in-on-scroll">
                <div
                    className="mt-20 text-9xl "
                    style={{
                        color: `rgb(130, 0, 0)`,
                    }}
                >
                    26
                </div>
                <p className="mt-1 text-2xl">Years until famine</p>
            </div>
            <p className="fade-in-on-scroll mb-10 mt-20 text-2xl">1905 Germany</p>
            <div className="mt-20 flex flex-row flex-wrap items-center md:flex-nowrap">
                <div className="fade-in-on-scroll max-w-sm p-20 md:m-5">
                    <img src={fritzHaber.src} alt="Sir William Crookes" />
                </div>
                <div className="fade-in-on-scroll animation-delay-1500">
                    <p>Enter fritz Haber. A chemist still seeking for his Nobel prize.</p>
                </div>
            </div>
            <p className="fade-in-on-scroll mb-10 mt-10">
                Unlike Birkeland and Eyde's approach, he put his Nitrogen in a "pressure cooker".
                The intense heat and pressure forces the Nitrogen to give up it's tripple molecular
                bond and replace it with three single covalent bonds.
            </p>
            <p className="fade-in-on-scroll mb-10 mt-10">
                N<sub>2</sub> + 3H<sub>2</sub> &rarr; 2NH<sub>3</sub>
            </p>
            <p className="fade-in-on-scroll mb-10 mt-10">He fails.</p>
            <p className="fade-in-on-scroll mb-10 mt-10">But he publishes his data anyway.</p>
            <div className="fade-in-on-scroll">
                <div
                    className="mt-20 text-9xl "
                    style={{
                        color: `rgb(130, 0, 0)`,
                    }}
                >
                    24
                </div>
                <p className="mt-1 text-2xl">Years until famine</p>
            </div>
            <p className="fade-in-on-scroll mb-40 mt-20 text-2xl">1907 Germany</p>
            <p className="fade-in-on-scroll mb-10">
                "I would like to suggest that Professor Haber now employ a method that is certain to
                produce truly precise values."
            </p>
            <p className="fade-in-on-scroll mt-10">Your numbers are "highly erroneous"</p>
            <p className="fade-in-on-scroll mt-10 ">
                Haber would not let Nernst, a soon-to-be nobel laureate corrode his reputation as a
                precise experimentalist.
            </p>
            {/*<p className="fade-in-on-scroll ">*/}
            {/*    Haber manufactured it in a vessel. By increasing the temperature, and pressure of*/}
            {/*    air, he calculated that it's possible to break the N&#8322; bond.*/}
            {/*</p>*/}
            <p className="fade-in-on-scroll mt-20">So he turns up the heat.</p>
            <IncreaseHeat />
            <p className="fade-in-on-scroll ">
                Crams Nitrogen into a density no lighter than a Neutron star
            </p>
            <IncreasePressure />
            <p className="fade-in-on-scroll ">
                Preheats the reagents with the hot exhaust ammonia.
            </p>
            <PreheatsReagents />
            <p className="fade-in-on-scroll ">And tries hundreds of catalysts</p>
            <HundredsOfCatalysts />
            <p className="fade-in-on-scroll ">Until finally, in 1909: </p>
            {/* animation of one cubic drop from his machine*/}
            <p className="fade-in-on-scroll mt-10 ">He creates one cubic centimeter of ammonia.</p>
            <p className="fade-in-on-scroll mt-10 ">
                Once scaled, his process would feed the world.
            </p>
            <p className="fade-in-on-scroll mb-40 mt-10 ">The problem? Scale requires...</p>
            {/*<p className="fade-in-on-scroll ">600 &deg;C of temperature</p>*/}
            <p className="fade-in-on-scroll mt-10 ">
                Immense amounts of Osmium, one of the world's most expensive metals.
            </p>
            <p className="fade-in-on-scroll mt-10 ">
                Vessels that can withstand one hundred atmospheres of pressure. (When vessels
                regularly exploded at 7 atmospheres)
            </p>

            <p className="fade-in-on-scroll mt-10 ">
                And the political will to sink collosial sums of capital.
            </p>
            <p className="fade-in-on-scroll mt-32">The German Dye company BASF:</p>
            <p className="fade-in-on-scroll mt-10">Gave Haber a royalty and an enourmous salary</p>
            <p className="fade-in-on-scroll mt-10">
                Then began hording all the Osmium in the world.
            </p>
            <div className="mt-20 flex flex-row flex-wrap items-center md:flex-nowrap">
                <div className="fade-in-on-scroll animation-delay-1500">
                    <p>They sent Carl Bosche to figure out the rest.</p>
                </div>
                <div className="fade-in-on-scroll max-w-sm p-20 md:m-5">
                    <img src={carlBosche.src} alt="Sir William Crookes" />
                </div>
            </div>
            <div className="fade-in-on-scroll">
                <div
                    className="mt-20 text-9xl "
                    style={{
                        color: `rgb(130, 0, 0)`,
                    }}
                >
                    23
                </div>
                <p className="mt-1 text-2xl">Years until famine</p>
            </div>
            <p className="fade-in-on-scroll mt-20">
                Hundreds of researchers endeavor at Bosche's lab. The cradle of smarts.
            </p>
            <p className="fade-in-on-scroll mt-10">
                Alwin Mittasch discovered that Iron (II) Oxide was an economical alternative to
                Osmium (the catalyst). But his pursuit for the best catalyst led him to 20,000
                experiments and 11 years of A/B testing. He threw in the towel. There was no better
                one.
            </p>
            <p className="fade-in-on-scroll mt-10">
                Carl Krauch detoxed the poisionous CO byproduct by adding ammonia to a copper
                solution.
            </p>
            <p className="fade-in-on-scroll mt-10">
                With the catalyst found, Bosch focused on the machinery to handle the enormous
                pressures involved
            </p>
            <p className="fade-in-on-scroll mt-10">
                He assembled the world's largest furnaces to heat the nitrogen.
            </p>
            <p className="fade-in-on-scroll mt-10">
                And colossal compressors, valves, gauges, etc.
            </p>
            {/*explosion animation?*/}
            <p className="fade-in-on-scroll mt-10">But they kept exploding.</p>
            <p className="fade-in-on-scroll mt-10">
                After every failure, he would send dozens of metallurgists to analyze the broken
                pieces.
            </p>
            <p className="fade-in-on-scroll mt-10">
                His team knew more about metals than anyone else in the world. And explosion after
                explosion, they found hydrogen mixed in with the steel.
            </p>
            <p className="fade-in-on-scroll mt-10">
                The high pressure caused the walls of his furnace to absorb hydrogen, making them
                brittle.
            </p>
            <p className="fade-in-on-scroll mt-10">
                He's defeated. So on his only night off, he heads to the bowling alley and
                socializes with his team.
            </p>
            <p className="fade-in-on-scroll mt-32">Eureka.</p>
            <p className="fade-in-on-scroll mt-32">
                The following day, Bosch drills holes into the walls of his furnace. Small enough to
                keep the pressure but large enough for hydrogen to leak out.
            </p>
            <p className="fade-in-on-scroll mt-10">
                {/*It works. Ammonia spills from his furnace. Haber and Bosch have just averted global*/}
                {/*famine.*/}
                It works. And in 1911 ammonia torrents from his furnace.
            </p>
            <div className="flex-row">
                <ExponentialCount
                    startingNumber={7}
                    endingNumber={1000000}
                    exponentialAmount={0.9}
                    startingWaitDuration={500}
                    startingRedness={200}
                />
                <p className="mt-1">Years until famine </p>
            </div>
            <p>Just in time for: World War I </p>
            <br />
            <p className="fade-in-on-scroll">
                Because Nitrogen has a darker side. It has the very special property of propelling
                projectiles. And it extends Germany's war by two years.
            </p>
            <p className="fade-in-on-scroll">
                These scientists weren't perfect. They killed many people, Haber especially. But
                their story changed my life because it showed me that humanity has solved
                calamity-scale problems before.
            </p>
            <p className="fade-in-on-scroll">
                Climate change used to scare me, but this epochal moment gives me hope.
            </p>
            <p className="fade-in-on-scroll">
                It showed me that the best solutions to problems may not mimic nature.
            </p>
            <p className="fade-in-on-scroll">
                And that diligent experimental processes compound to to incredible results.
            </p>
            <p className="fade-in-on-scroll ">
                Bosch didn't know it at the time, but his years of work pioneered an entire new
                field:
            </p>
            <p className="fade-in-on-scroll ">High pressure chemistry.</p>
            {/*<p className="fade-in-on-scroll">*/}
            {/*    I think a a modern version of crooke's challenge is the quest for economical nuclear*/}
            {/*    fusion. Laboratories slam plasma together at millions of degrees, with magnetic*/}
            {/*    forces probably stronger than rail-guns. Little by little, these labs try to improve*/}
            {/*    their yields, because they believe that nuclera fusion is economically possible*/}
            {/*</p>*/}
            {/*<p>*/}
            {/*    What else did these Nobel laureates do?
            {/*</p>*/}
            <p className="fade-in-on-scroll">
                So what's next for Haber and Bosche? Do they win a nobel prize? Develop corporate
                empires? Pledge to The Reich?
            </p>
            {/*it would be cool if all the other words in this phrase just disappeared, and all you saw was "the alchemy of air"*/}
            <p className="fade-in-on-scroll">
                You'll have to read the book. But they did more alchemy of course. You can feel it
                in the air.
            </p>
            <p className="fade-in-on-scroll mt-10 text-2xl">Sources</p>
            <>
                {[
                    {
                        title: "The Alchemy of Air: A Jewish Genius, a Doomed Tycoon, and the Scientific Discovery That Fed the World but Fueled the Rise of Hitler",
                        link: "www.goodreads.com/en/book/show/3269091",
                    },
                    {
                        title: "Address of the President Before the British Association for the Advancement of Science, Bristol, 1898",
                        link: "www.jstor.org/stable/1627238?seq=2",
                    },
                    {
                        title: "Birkeland–Eyde process",
                        link: "en.wikipedia.org/wiki/Birkeland%E2%80%93Eyde_process",
                    },
                ].map((source, idx) => {
                    return (
                        <p className="fade-in-on-scroll text-md mt-10 text-left" key={idx}>
                            {source.title}:{` `}
                            <a
                                className="text-sleepover-secondary"
                                href={`https://${source.link}`}
                                target="_blank"
                            >
                                {source.link}
                            </a>
                        </p>
                    );
                })}
            </>
            {/* This footer is needed so the bottom elements will fade into view*/}
            <div className="h-96" />
        </div>
    );
}
