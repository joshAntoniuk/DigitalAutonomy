'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

function CookiesToggle() {
  const [x, setX] = useState(0);
  const [toggleOne, setToggleOne] = useState(true);
  const [toggleTwo, setToggleTwo] = useState(true);

  return (
    <div className="relative flex aspect-video w-3/4 flex-col items-center justify-center gap-y-10 rounded-xl bg-neutral-100 shadow-xl">
      <div className="flex w-[80%] flex-row items-center gap-x-10">
        <button
          onClick={() => setToggleOne(!toggleOne)}
          className="relative aspect-video h-20 rounded-full bg-neutral-200"
        >
          <div className="absolute left-1 top-1/2 size-[70px] -translate-y-1/2 rounded-full bg-neutral-50" />
        </button>
        <div className="text-black">Allow Website to Track Cookies?</div>
      </div>
      <div className="flex w-[80%] flex-row items-center gap-x-10">
        <button
          onClick={() => setToggleTwo(!toggleTwo)}
          className="relative aspect-video h-20 rounded-full bg-neutral-200"
        >
          <motion.div
            style={{ x }}
            className="absolute top-1/2 size-[70px] -translate-y-1/2 rounded-full bg-neutral-50"
          />
        </button>
        <div className="text-black">Allow Website to Collect User Data?</div>
      </div>
      <div className="text-red-500">Sorry! You must allow us to track ONE thing.</div>
    </div>
  );
}
export default CookiesToggle;
