import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

function MovingButton() {
  const [coordinates, setCoordinates] = useState({ x: 200, y: 200 });
  const containerRef = useRef<HTMLInputElement>(null);

  const [buttonClicked, setButtonClicked] = useState(false);

  const handleMouseEnter = () => {
    if (containerRef.current) {
      const x = Math.abs(Math.random() * containerRef.current!.clientWidth - 28);
      const y = Math.abs(Math.random() * containerRef.current!.clientHeight - 28);
      setCoordinates({ x, y });
    }
  };

  return (
    <div ref={containerRef} className="relative h-full w-full rounded-xl bg-white shadow-xl">
      <div className="absolute left-1/2 top-[20%] -translate-x-1/2 text-2xl font-semibold">
        Try and click the button!
      </div>
      <div className="absolute left-1/2 top-[35%] w-[70%] -translate-x-1/2 text-center text-base">
        Try and click the button before you scroll the page! It might be a little more difficult then you think! Try!!
        Try harder!!
      </div>
      <motion.div
        initial={coordinates}
        animate={coordinates}
        onMouseEnter={() => handleMouseEnter()}
        className="absolute inline-flex p-7"
      >
        <button
          onClick={() => setButtonClicked(true)}
          className={`self-start rounded-lg  ${buttonClicked ? 'bg-green-500' : 'bg-blue-500'} px-3 py-2 text-xl text-white`}
        >
          {buttonClicked ? 'YAY!' : 'Click Me!'}
        </button>
      </motion.div>
    </div>
  );
}

export default MovingButton;
