import React, { useEffect } from "react";
import { useStatefulRef } from "@/common/useStatefulRef";
import useAnimationEventListener from "@/common/useAnimationEventListener";

interface Props {
    startingNumber: number;
    endingNumber: number;
    exponentialAmount: number;
}

export default function ExponentialCount({
    startingNumber,
    endingNumber,
    exponentialAmount,
}: Props) {
    const [elementRef, startAnimationEventFired] = useAnimationEventListener();
    const displayNumber = useStatefulRef(startingNumber);
    const comparator =
        startingNumber >= endingNumber
            ? (a: number, b: number) => {
                  return a > b;
              }
            : (a: number, b: number) => {
                  return a < b;
              };

    // write a function that takes a starting number, and an ending number, and exponentially counts up to the ending number within 3 seconds
    async function startExponentialCount() {
        // const startTime = Date.now();
        let waitDuration = 200;
        while (comparator(displayNumber.current, endingNumber)) {
            // const elapsedMilliseconds = Date.now() - startTime;
            displayNumber.current -= 1;
            await sleep(waitDuration); // Adjust sleep duration for desired count speed
            waitDuration *= exponentialAmount;
        }
    }

    function sleep(milliseconds: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
    }

    useEffect(() => {
        if (startAnimationEventFired) {
            startExponentialCount();
        }
    }, [startAnimationEventFired]);

    return (
        <div className="fade-in-on-scroll w-8" ref={elementRef}>
            {Math.round(displayNumber.current)}
        </div>
    );
}