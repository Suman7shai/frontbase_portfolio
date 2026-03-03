import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { CustomEase } from 'gsap/all';
import { useRef, } from 'react';

interface LoadingProps {
    onComplete?: () => void;
}

const Loading = ({ onComplete }: LoadingProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const countRef = useRef<HTMLDivElement | null>(null);



    useGSAP(() => {
        gsap.registerPlugin(SplitText, CustomEase);
        CustomEase.create("hop", "0.9, 0, 0.1 ,1");

        const textPath = gsap.utils.toArray<SVGTextPathElement>("textPath");

        if (!textPath.length) return;

        const startTextOffsets = textPath.map((path) =>
            parseFloat(path.getAttribute("startOffset") ?? "0")
        );

        const targetTestLengths = [4000, 3500, 3250, 3000, 2500, 2000, 1500, 1250];
        const orbitRadii = [775, 700, 625, 550, 475, 400, 325, 250];

        const maxOrbitRadius = orbitRadii[0];
        const maxAnimDuration = 2.5;
        const minAnimDuration = 2;

        textPath.forEach((path, index) => {
            const animationDelay = (textPath.length - 20 - index) * 0.2;
            const currentOrbitRadius = orbitRadii[index];

            const currentDuration = minAnimDuration + (currentOrbitRadius / maxOrbitRadius) * (maxAnimDuration - minAnimDuration);
            const pathLength = 2 * Math.PI * currentOrbitRadius;
            const offsetAdjustment = (pathLength / 10 / pathLength) * 300;
            const targetOffset = startTextOffsets[index] - offsetAdjustment;

            gsap.to(path, {
                attr: {
                    textLength: targetTestLengths[index],
                    startOffset: `${targetOffset}%`
                },
                ease: "power1.inOut",
                duration: currentDuration,
                delay: animationDelay,
                repeat: -1,
                yoyo: true,
                repeatDelay: 0,
            });
        });

        let loaderRotation = 0;
        const animateRotation = () => {
            const spinDirection = Math.random() < 0.5 ? 1 : -1;
            loaderRotation += 25 * spinDirection;
            gsap.to("svg", {
                rotation: loaderRotation,
                duration: 2,
                ease: "power1.inOut",
                onComplete: animateRotation
            });
        };

        animateRotation();

        // Counter animation
        if (countRef.current) {
            const counterElement = countRef.current.querySelector('p');
            const count = { value: 0 };

            gsap.to(count, {
                value: 100,
                duration: 5,
                ease: "power1.inOut",
                delay: 1,
                onUpdate: () => {
                    if (counterElement) {
                        counterElement.textContent = Math.floor(count.value).toString();
                    }
                },
                onComplete: () => {
                    onComplete?.();
                }
            });
        }
    }, []);

    return (
        //svg loader with rotating text paths
        <div className='h-screen w-screen flex justify-center items-center bg-gray-950'>
        <div ref={containerRef} className="relative z-10 w-180 h-180">
            <svg className="w-70% h-70%" viewBox="-425 -425 1850 1850" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" >
                <path className="fill-none"
                    id="loader-orbit-1"
                    d="M 500,-275 A 775,775 0 0,1 500,1275 A 775,775 0 0,1 500,-275 A 775,775 0 0,1 500,1275 A 775,775 0 0,1 500,-275 A 775,775 0 0,1 500,1275 A 775,775 0 0,1 499.99,-275 "

                />
                <path className="fill-none"
                    id="loader-orbit-2"
                    d="M 500,-200 A 700,700 0 0,1 500,1200 A 700,700 0 0,1 500,-200 A 700,700 0 0,1 500,1200 A 700,700 0 0,1 500,-200 A 700,700 0 0,1 500,1200 A 700,700 0 0,1 499.99,-200 "

                />
                <path className="fill-none"
                    id="loader-orbit-3"
                    d="M 500,-125 A 625,625 0 0,1 500,1125 A 625,625 0 0,1 500,-125 A 625,625 0 0,1 500,1125 A 625,625 0 0,1 500,-125 A 625,625 0 0,1 500,1125 A 625,625 0 0,1 499.99,-125 "

                />
                <path className="fill-none"
                    id="loader-orbit-4"
                    d="M 500,-50 A 550,550 0 0,1 500,1050 A 550,550 0 0,1 500,-50 A 550,550 0 0,1 500,1050 A 550,550 0 0,1 500,-50 A 550,550 0 0,1 500,1050 A 550,550 0 0,1 499.99,-50 "
                />
                <path className="fill-none"
                    id="loader-orbit-5"
                    d="M 500,25 A 475,475 0 0,1 500,975 A 475,475 0 0,1 500,25 A 475,475 0 0,1 500,975 A 475,475 0 0,1 500,25 A 475,475 0 0,1 500,975 A 475,475 0 0,1 499.99,25 "
                />
                <path className="fill-none"
                    id="loader-orbit-6"
                    d="M 500,100 A 400,400 0 0,1 500,900 A 400,400 0 0,1 500,100 A 400,400 0 0,1 500,900 A 400,400 0 0,1 500,100 A 400,400 0 0,1 500,900 A 400,400 0 0,1 499.99,100 "
                />
                <path className="fill-none"
                    id="loader-orbit-7"
                    d="M 500,175 A 325,325 0 0,1 500,825 A 325,325 0 0,1 500,175 A 325,325 0 0,1 500,825 A 325,325 0 0,1 500,175 A 325,325 0 0,1 500,825 A 325,325 0 0,1 499.99,175 "
                />
                <path className="fill-none"
                    id="loader-orbit-8"
                    d="M 500,250 A 250,250 0 0,1 500,750 A 250,250 0 0,1 500,250 A 250,250 0 0,1 500,750 A 250,250 0 0,1 500,250 A 250,250 0 0,1 500,750 A 250,250 0 0,1 499.99,250 "
                />

                <text className="uppercase text-5xl font-bold fill-blue-500 font-[font-1]" >
                    <textPath href="#loader-orbit-1" startOffset="30%" textLength="300">
                        Developer
                    </textPath>
                </text>
                <text className="uppercase text-5xl font-bold fill-white font-[font-1]">
                    <textPath href="#loader-orbit-2" startOffset="31%" textLength="280">
                        Frontend
                    </textPath>
                </text >
                <text className="uppercase text-5xl font-bold fill-blue-500 font-[font-1]">
                    <textPath href="#loader-orbit-3" startOffset="33%" textLength="240">
                        Creative
                    </textPath>
                </text>
                <text className="uppercase text-5xl font-bold fill-white font-[font-1]">
                    <textPath href="#loader-orbit-4" startOffset="32%" textLength="260">
                        Designer
                    </textPath>
                </text>
                <text className="uppercase text-5xl font-bold fill-blue-500 font-[font-1]">
                    <textPath href="#loader-orbit-5" startOffset="30%" textLength="290">
                        Portfolio
                    </textPath>
                </text>
                <text className="uppercase text-5xl font-bold fill-white font-[font-1]"   >
                    <textPath href="#loader-orbit-6" startOffset="31%" textLength="200">
                        Digital
                    </textPath>
                </text>
                <text className="uppercase text-5xl font-bold fill-blue-500 font-[font-1]">
                    <textPath href="#loader-orbit-7" startOffset="33%" textLength="210">
                        Modern
                    </textPath>
                </text>
                <text className="uppercase text-5xl font-bold fill-white font-[font-1]">
                    <textPath href="#loader-orbit-8" startOffset="32%" textLength="190">
                        Design
                    </textPath>
                </text>
            </svg>
            <div ref={countRef} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <p className='text-white text-4xl font-bold'></p>
            </div>

        </div>
        </div>


    )
}

export default Loading
