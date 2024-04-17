import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

function MovingButton() {
  type Coordinate = string | number;

  const [coordinates, setCoordinates] = useState<{ left: Coordinate; top: Coordinate }>({ left: '50%', top: '60%' });
  const containerRef = useRef<HTMLInputElement>(null);

  const [buttonClicked, setButtonClicked] = useState(false);

  const handleMouseEnter = () => {
    if (containerRef.current) {
      const buttonWidth = 48; // replace with the actual width of the button
      const buttonHeight = 32; // replace with the actual height of the button

      const left = Math.abs(Math.random() * (containerRef.current!.clientWidth - buttonWidth));
      const top = Math.abs(Math.random() * (containerRef.current!.clientHeight - buttonHeight));
      setCoordinates({ left, top });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative flex h-full w-full flex-col items-center justify-center rounded-xl bg-white shadow-xl"
    >
      <div className="text-center text-2xl font-semibold">Try and click the button!</div>
      <div className="w-[70%] text-center text-base">
        Try and click the button before you scroll the page! It might be a little more difficult then you think!
      </div>
      <motion.div
        initial={coordinates}
        animate={coordinates}
        onMouseEnter={() => handleMouseEnter()}
        className={`absolute inline-flex p-7 ${coordinates.left === '50%' && '-translate-x-1/2'}`}
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
