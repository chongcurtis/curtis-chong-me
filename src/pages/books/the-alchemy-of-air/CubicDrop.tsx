import ParticleSimulationCanvas from "@/pages/books/the-alchemy-of-air/ParticleSimulationCanvas";
import { Particle } from "@/pages/books/the-alchemy-of-air/Particle";
import React, { useEffect } from "react";
import { Block } from "@/pages/books/the-alchemy-of-air/Block";
import useAnimationEventListener from "@/common/useAnimationEventListener";
import { NITROGEN_COLOR } from "./constants";

const BOX_COLOR = "white";
// const BOX_COLOR = "#dedede";
const blocks = [
    new Block(250, 0, 400, 70, BOX_COLOR, 0),
    new Block(190, 70, 100, 70, BOX_COLOR, 45),
    new Block(310, 70, 100, 70, BOX_COLOR, 135),
    new Block(250, 85, 200, 30, BOX_COLOR, 0),
];

// this animation works by spawning two particles close to each other (but not touching) and sending them to the right
// in the middle of the canvas, there is a rotated square (at a 45 degree angle) that the particles will collide with, splitting them apart
export default function CubicDrop() {
    const timeoutId = React.useRef<NodeJS.Timeout>();
    const dripTimeoutId = React.useRef<NodeJS.Timeout>();
    const particles = React.useRef<Particle[]>([]);
    const [elementRef, startAnimationEventFired] = useAnimationEventListener();

    const spawnHotAtom = () => {
        const vx = Math.floor(Math.random() * 5) + 1;
        const vy = Math.floor(Math.random() * 5) + 1;

        particles.current.push(new Particle(100, 250, 50, vx, vy, 0, 0, 3, "red", 30));

        const spawnDelay = 50;
        timeoutId.current = setTimeout(spawnHotAtom, spawnDelay);
    };

    const spawnDrip = () => {
        particles.current.push(new Particle(100, 250, 100, 0, 0, 0, 0.5, 3, NITROGEN_COLOR, 30));
        dripTimeoutId.current = setTimeout(spawnDrip, 1000);
    };

    useEffect(() => {
        if (startAnimationEventFired) {
            spawnHotAtom();
            spawnDrip();
        }
        return () => {
            clearTimeout(timeoutId.current);
        };
    }, [startAnimationEventFired]);

    return (
        <div ref={elementRef}>
            <ParticleSimulationCanvas
                startAnimation={startAnimationEventFired}
                particles={particles}
                blocks={blocks}
                canvasWidth={500}
                canvasHeight={200}
                isCollisionEnabled={true}
            />
        </div>
    );
}
