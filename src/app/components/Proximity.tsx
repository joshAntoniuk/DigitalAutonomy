import { Bookmark, ChevronRight, Heart, MessageCircle, Send } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

function Proximity({ get, className }: { get: any; className?: string }) {
  const [stateOne, setStateOne] = useState(false);
  const [stateTwo, setStateTwo] = useState(false);
  const [stateThree, setStateThree] = useState(false);
  return (
    <div className={`flex ${className} w-full flex-col items-center space-y-6 divide-neutral-300 overflow-y-scroll`}>
      <div className="flex w-1/2 flex-col gap-y-2 pt-2">
        <div className="flex flex-row items-center gap-x-4 bg-neutral-200">
          <div className="size-12 rounded-full bg-blue-500" />
          <div className="flex flex-col">
            <div className="font-semibold">josh7uofa</div>
          </div>
        </div>
        <div className="w-full overflow-hidden border border-black">
          <Image
            src="https://images.unsplash.com/photo-1483808161634-29aa1b0e585e?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="photo"
            width={1200}
            height={800}
            className="object-cover"
          />
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-x-2">
            <button onClick={() => setStateOne(!stateOne)}>
              <Heart
                size={26}
                color={stateOne ? 'red' : '#000'}
                fill={stateOne ? 'red' : 'none'}
                className="transition-all duration-300 hover:scale-105"
              />
            </button>
            <MessageCircle size={26} color="#000" className="opacity-40" />
            <Send size={26} color="#000" className="opacity-40" />
          </div>
          <Bookmark size={26} color="#000" className="opacity-40" />
        </div>
      </div>
      {!get && (
        <div className="flex w-1/2 flex-col gap-y-2 pt-6">
          <div className="flex flex-row items-center gap-x-4 bg-neutral-200">
            <div className="size-12 rounded-full bg-blue-500" />
            <div className="flex flex-col">
              <div className="font-semibold">coolthings</div>
              <div className="text-sm font-thin">sponsored</div>
            </div>
          </div>
          <div className="w-full overflow-hidden border border-black">
            <Image
              src="https://images.unsplash.com/photo-1623443175467-1ed6a9861b9a?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="photo"
              width={1200}
              height={800}
              className="object-cover"
            />
          </div>
          <div className="flex flex-row items-center justify-between gap-x-4 bg-neutral-200 font-semibold">
            <div className="">Shop Now</div>
            <ChevronRight size={26} color="#000" />
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-x-2">
              <button onClick={() => setStateTwo(!stateTwo)}>
                <Heart
                  size={26}
                  color={stateTwo ? 'red' : '#000'}
                  fill={stateTwo ? 'red' : 'none'}
                  className="transition-all duration-300 hover:scale-105"
                />
              </button>
              <MessageCircle size={26} color="#000" className="opacity-40" />
              <Send size={26} color="#000" className="opacity-40" />
            </div>
            <Bookmark size={26} color="#000" className="opacity-40" />
          </div>
        </div>
      )}
      <div className="flex w-1/2 flex-col gap-y-2 pt-6">
        <div className="flex flex-row items-center gap-x-4 bg-neutral-200">
          <div className="size-12 rounded-full bg-blue-500" />
          <div className="flex flex-col">
            <div className="font-semibold">da-homie</div>
          </div>
        </div>
        <div className="w-full overflow-hidden border border-black">
          <Image
            src="https://images.unsplash.com/photo-1617336422396-e1dfc4210ec5?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="photo"
            width={1200}
            height={800}
            className="object-cover"
          />
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-x-2">
            <button onClick={() => setStateThree(!stateThree)}>
              <Heart
                size={26}
                color={stateThree ? 'red' : '#000'}
                fill={stateThree ? 'red' : 'none'}
                className="transition-all duration-300 hover:scale-105"
              />
            </button>
            <MessageCircle size={26} color="#000" className="opacity-40" />
            <Send size={26} color="#000" className="opacity-40" />
          </div>
          <Bookmark size={26} color="#000" className="opacity-40" />
        </div>
      </div>
      {get && (
        <div className="flex w-1/2 flex-col gap-y-2 border-y-2 border-black bg-neutral-200 pb-10 pt-10">
          <div className="flex flex-row items-center gap-x-4 bg-neutral-200">
            <div className="size-12 rounded-full bg-blue-500" />
            <div className="flex flex-col">
              <div className="font-semibold">coolthings</div>
              <div className="text-sm font-thin">sponsored</div>
            </div>
          </div>
          <div className="w-full overflow-hidden border border-black">
            <Image
              src="https://images.unsplash.com/photo-1623443175467-1ed6a9861b9a?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="photo"
              width={1200}
              height={800}
              className="object-cover"
            />
          </div>
          <div className="flex flex-row items-center justify-between gap-x-4 bg-neutral-200 font-semibold">
            <div className="">Shop Now</div>
            <ChevronRight size={26} color="#000" />
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-x-2">
              <button onClick={() => setStateTwo(!stateTwo)}>
                <Heart
                  size={26}
                  color={stateTwo ? 'red' : '#000'}
                  fill={stateTwo ? 'red' : 'none'}
                  className="transition-all duration-300 hover:scale-105"
                />
              </button>
              <MessageCircle size={26} color="#000" className="opacity-40" />
              <Send size={26} color="#000" className="opacity-40" />
            </div>
            <Bookmark size={26} color="#000" className="opacity-40" />
          </div>
        </div>
      )}
    </div>
  );
}
export default Proximity;
