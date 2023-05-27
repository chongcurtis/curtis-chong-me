import ParticleSimulationCanvas from "@/pages/books/the-alchemy-of-air/ParticleSimulationCanvas";
import { Particle } from "@/pages/books/the-alchemy-of-air/Particle";
import React from "react";
import { startAnimationEventName } from "@/common/animations";
import { Block } from "@/pages/books/the-alchemy-of-air/Block";

const initialParticles = [
    // new Particle(100, 100, 140, 3, 3, 0, 0, 5, "red", 50),
    // new Particle(100, 150, 200, -3, -3, 0, 0, 5, "red", 50),
    new Particle(100, 300, 150, 3, -3, 0, 0, 5, "red", 200),
];
const blocks = [
    new Block(163, 100, 500, 10, "black", 0),
    new Block(163, 200, 600, 10, "black", 0),
    new Block(363, 100, 200, 10, "black", 30),
];

export default function Boiler() {
    const timeoutId = React.useRef<NodeJS.Timeout>();
    const particles = React.useRef<Particle[]>([]);
    const boilerRef = React.useRef<HTMLDivElement>(null);
    // ref to the ParticleSimulationCanvas
    React.useEffect(() => {
        if (!boilerRef.current) {
            return;
        }
        const boiler = boilerRef.current;
        const spawnParticle = () => {
            const particleVy = Math.floor(Math.random() * 5) + 1;
            particles.current.push(new Particle(100, 100, 140, 3, particleVy, 0, 0, 5, "red", 200));

            const spawnDelay = Math.floor(Math.random() * 201) + 200; // randomize the spawn delay
            timeoutId.current = setTimeout(spawnParticle, spawnDelay);
        };
        spawnParticle();

        const startAnimation = () => {
            // the simulation canvas should already be running. so all we need to do is set the particles
            // particles.current = cloneDeep(initialParticles);
        };

        boiler.addEventListener(startAnimationEventName, startAnimation);
        return () => {
            // cleanup
            boiler.removeEventListener(startAnimationEventName, startAnimation);
            clearTimeout(timeoutId.current);
        };
    }, [boilerRef]);
    return (
        <div ref={boilerRef}>
            <ParticleSimulationCanvas
                particles={particles}
                blocks={blocks}
                canvasWidth={500}
                canvasHeight={500}
                isCollisionEnabled={true}
            />
        </div>
    );
}
