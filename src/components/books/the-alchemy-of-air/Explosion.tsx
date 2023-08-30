import React, { useEffect } from "react";
import ParticleSimulationCanvas from "@/components/books/the-alchemy-of-air/ParticleSimulationCanvas";
import { Particle } from "@/components/books/the-alchemy-of-air/Particle";
import { Block } from "@/components/books/the-alchemy-of-air/Block";
import useAnimationStateEventListener from "@/common/useAnimationEventListener";

export default function Explosion() {
    const timeoutId = React.useRef<NodeJS.Timeout>();
    const particles = React.useRef<Particle[]>([]);
    const [elementRef, animationState, hasStartEventFired] = useAnimationStateEventListener();

    const createExplosionParticle = (color: string): Particle => {
        const x = 250;
        const y = 200;
        return new Particle(
            1,
            x,
            y,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            0,
            0.25,
            Math.random(),
            color,
            50
        );
    };

    const explosion = () => {
        for (let i = 0; i < 50; i++) {
            particles.current.push(createExplosionParticle("#ff6912"));
        }
        for (let i = 0; i < 50; i++) {
            particles.current.push(createExplosionParticle("#eb4034"));
        }
    };

    useEffect(() => {
        if (!hasStartEventFired) {
            return;
        }
        explosion();
        return () => {
            // cleanup
            clearTimeout(timeoutId.current);
        };
    }, [hasStartEventFired]);

    return (
        <div ref={elementRef} className="dummy-animation is-persistent-animation relative">
            <p className="fade-in-on-scroll-slow animation-delay-200 absolute left-1/2 top-1/2 z-20 -translate-x-[50%] -translate-y-[20%] transform font-bold md:text-2xl">
                But they kept exploding
            </p>
            <ParticleSimulationCanvas
                animationState={animationState}
                particles={particles}
                blocks={[]}
                canvasWidth={500}
                canvasHeight={400}
                isCollisionEnabled={false}
                extraClassNames="animation-delay-800"
            />
        </div>
    );
}
