import { useEffect, useRef } from 'react';
import image from '/image/44538.png';
import { gsap } from 'gsap';

const TextAnimation = () => {
  const mainRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    // Duplicate the children once for seamless looping
    if (main.dataset.duplicated !== 'true') {
      const children = Array.from(main.children) as HTMLElement[];
      children.forEach((child) => main.appendChild(child.cloneNode(true)));
      main.dataset.duplicated = 'true';
    }

    let marquee: any = null;

    const setupMarquee = () => {
      const singleWidth = main.scrollWidth / 2 || main.offsetWidth;
      gsap.set(main, { x: 0 });
      console.debug('[TextAnimation] setupMarquee singleWidth=', singleWidth);

      marquee = gsap.to(main, {
        x: `-${singleWidth}px`,
        ease: 'linear',
        duration: Math.max(6, singleWidth / 120),
        repeat: -1,
        onRepeat: () => { gsap.set(main, { x: 0 }); },
      });

      marquee.play();

      const onWheel = (e: WheelEvent) => {
        const isDown = e.deltaY > 0;
        console.debug('[TextAnimation] wheel deltaY=', e.deltaY, 'isDown=', isDown);
        // speed bump
        gsap.to(marquee, { timeScale: 2.2, duration: 0.12, overwrite: true });
        gsap.to(marquee, { timeScale: 1, duration: 0.8, delay: 0.12 });
      };
      
      window.addEventListener('wheel', onWheel, { passive: true });

      // cleanup for wheel listener is handled in outer return via stored marquee
      (setupMarquee as any)._onWheel = onWheel;
    };

    // defer setup so images/layout finish
    const raf = requestAnimationFrame(setupMarquee);

    return () => {
      cancelAnimationFrame(raf);
      if ((setupMarquee as any)._onWheel) window.removeEventListener('wheel', (setupMarquee as any)._onWheel);
      if (marquee) marquee.kill();
    };
  }, []);

  return (
    <div className="Page2 h-full w-screen flex items-center overflow-hidden">
      <div ref={mainRef} className="main flex shrink-0 h-32">
        <div className="child text-black flex items-center gap-4 pl-5 pr-5">
          <h1 className="text-5xl uppercase">Developer</h1>
          <img className="h-17" src={image} alt="Arrow" />
        </div>
        <div className="child text-black flex items-center gap-4 pl-5 pr-5">
          <h1 className="text-5xl uppercase">Frontend</h1>
          <img className="h-17" src={image} alt="Arrow" />
        </div>
        <div className="child text-black flex items-center gap-4 pl-5 pr-5">
          <h1 className="text-5xl uppercase">Backend</h1>
          <img className="h-17" src={image} alt="Arrow" />
        </div>
        <div className="child text-black flex items-center gap-4 pl-5 pr-5">
          <h1 className="text-5xl uppercase">Designer</h1>
          <img className="h-17" src={image} alt="Arrow" />
        </div>
        <div className="child text-black flex items-center gap-4 pl-5 pr-5">
          <h1 className="text-5xl uppercase">Portfolio</h1>
          <img className="h-17" src={image} alt="Arrow" />
        </div>
        <div className="child text-black flex items-center gap-4 pl-5 pr-5">
          <h1 className="text-5xl uppercase">Digital</h1>
          <img className="h-17" src={image} alt="Arrow" />
        </div>
        <div className="child text-black flex items-center gap-4 pl-5 pr-5">
          <h1 className="text-5xl uppercase">Modern</h1>
          <img className="h-17" src={image} alt="Arrow" />
        </div>
        <div className="child text-black flex items-center gap-4 pl-5 pr-5">
          <h1 className="text-5xl uppercase">Design</h1>
          <img className="h-17" src={image} alt="Arrow" />
        </div>
        <div className="child text-black flex items-center gap-4 pl-5 pr-5">
          <h1 className="text-5xl uppercase">Creative</h1>
          <img className="h-17" src={image} alt="Arrow" />
        </div>
      </div>
    </div>
  );
};

export default TextAnimation;
