import ParticleSimulationCanvas from "@/components/books/the-alchemy-of-air/ParticleSimulationCanvas";
import { Particle } from "@/components/books/the-alchemy-of-air/Particle";
import React, { useEffect } from "react";
import { Block } from "@/components/books/the-alchemy-of-air/Block";
import useAnimationEventListener from "@/common/useAnimationEventListener";
import { Queue } from "@/common/queue";
import { generateGradient } from "@/utils/generateGradient";

const BOX_COLOR = "white";
// const BOX_COLOR = "#dedede";
const blocks = [
    new Block(250, 50, 200, 20, BOX_COLOR, 0),
    new Block(250, 150, 200, 20, BOX_COLOR, 0),
    new Block(200, 100, 20, 200, BOX_COLOR, 0),
    new Block(300, 100, 20, 200, BOX_COLOR, 0),
];

// this animation works by spawning two particles close to each other (but not touching) and sending them to the right
// in the middle of the canvas, there is a rotated square (at a 45 degree angle) that the particles will collide with, splitting them apart
export default function IncreaseHeat() {
    const timeoutId = React.useRef<NodeJS.Timeout>();
    const particles = React.useRef<Particle[]>([]);
    const [elementRef, startAnimationEventFired] = useAnimationEventListener();
    const colorQueue = React.useRef<Queue<string>>(new Queue<string>([]));

    const spawnHotAtom = () => {
        const vx = Math.floor(Math.random() * 5) + 1;
        const vy = Math.floor(Math.random() * 5) + 1;

        particles.current.push(
            new Particle(100, 250, 100, vx, vy, 0, 0, 2, colorQueue.current.front()!, 100)
        );
        if (colorQueue.current.size() > 1) {
            colorQueue.current.dequeue();
        }

        const spawnDelay = 100;
        timeoutId.current = setTimeout(spawnHotAtom, spawnDelay);
    };

    useEffect(() => {
        if (startAnimationEventFired) {
            colorQueue.current = new Queue(generateGradient(10));
            spawnHotAtom();
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