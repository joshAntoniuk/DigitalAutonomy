import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function Button({ get, set, children, className }: { get: any; set: any; children?: any; className?: string }) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [buttonWidth, setButtonWidth] = useState(0);
  const [buttonHeight, setButtonHeight] = useState(0);

  useEffect(() => {
    if (buttonRef.current) {
      setButtonWidth(buttonRef.current!.offsetWidth);
      setButtonHeight(buttonRef.current!.offsetHeight);
    }
  }, []);

  return (
    <div className={`flex w-full flex-row items-center justify-between gap-x-8 ${className}`}>
      <button
        ref={buttonRef}
        className={`${get ? 'border-green-500 bg-green-500' : 'border-neutral-200 bg-neutral-200'} relative h-full w-1/2 rounded-full border-4 transition-all duration-300`}
        onClick={() => set(!get)}
      >
        <motion.div
          animate={{ x: get ? buttonWidth - buttonHeight : '0' }}
          className="aspect-square h-full rounded-full bg-white shadow-xl transition-all duration-300"
        />
      </button>
      <div className="w-1/2">{children}</div>
    </div>
  );
}

export default Button;
