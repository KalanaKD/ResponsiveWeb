import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function GsapExp() {
    const scrollRef = useRef(null);

    useGSAP(() => {
        const boxes = gsap.utils.toArray(scrollRef.current.children);

        boxes.forEach((box) => {
            gsap.to(box, {
                x: 150,
                rotation: 360,
                borderRadius: "50%",
                scale: 1.5,
                scrollTrigger: {
                    trigger: box,
                    start: 'bottom bottom',
                    end: 'top 20%',
                    scrub: 1
                },
                ease: "power1.inOut"
            });
        });
    }, []);

    return (
        <div className="bg-white w-full h-[500px]">
            <div className="font-bold uppercase text-black">
                {/* Add any text here if needed */}
            </div>
            <div className='mt-20' ref={scrollRef}>
                <div className="w-20 h-20 bg-blue-500 rounded-lg" id="blue_box"></div>
                {/* Add more boxes here if desired */}
            </div>
        </div>
    );
}

export default GsapExp;
