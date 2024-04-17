import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function ButtonCloud() {
  const objects = new Array(60).fill(null);
  const [coordinates, setCoordinates]: any = useState([]);
  const [containerDimensions, setContainerDimensions]: any = useState({ width: 0, height: 0 });
  const isVisiblee = true;

  const containerRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setContainerDimensions({
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight
      });
      const newCoordinates: any = [];
      for (let i = 0; i < objects.length; i += 1) {
        let x: any;
        let y: any;
        do {
          x = Math.random();
          y = Math.random();
          // eslint-disable-next-line @typescript-eslint/no-loop-func
        } while (newCoordinates.some((coord: any) => Math.sqrt((coord.x - x) ** 2 + (coord.y - y) ** 2) <= 0.09));
        newCoordinates.push({ x, y });
      }
      setCoordinates(newCoordinates);
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisiblee && (
        <div ref={containerRef} className="relative h-full w-full">
          {coordinates.map((coord: any, index: any) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 }
              }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.01 }}
              className="rounded-lg bg-blue-500 px-3 py-2 text-white"
              style={{
                position: 'absolute',
                top: `${(containerRef.current!.clientHeight - 40) * coord.y}px`,
                left: `${(containerRef.current!.clientWidth - 95) * coord.x}px`
              }}
            >
              Click Me!
            </motion.div>
          ))}
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.21 }}
            className="z-40 rounded-lg bg-blue-400 px-3 py-2 text-white shadow-[0_2px_15px_0px_rgba(0,0,0,0.8)] transition-colors duration-200 hover:bg-green-500"
            style={{
              position: 'absolute',
              top: `${(containerDimensions.height - 40) * Math.random()}px`,
              left: `${(containerDimensions.width - 95) * Math.random()}px`
            }}
          >
            Dismiss!
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}
export default ButtonCloud;
