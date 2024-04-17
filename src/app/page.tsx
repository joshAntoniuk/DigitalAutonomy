'use client';

/* eslint-disable react-hooks/exhaustive-deps */

import { AnimatePresence, motion } from 'framer-motion';
import { Check, ShoppingCart, XIcon } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Button from './components/Button';
import ButtonCloud from './components/ButtonCloud';
import MovingButton from './components/MovingButton';
import Proximity from './components/Proximity';

export default function Home() {
  const [firstState, setFirstState] = useState(false);
  const [secondState, setSecondState] = useState(false);

  const [proximityState, setProximityState] = useState(true);
  const [proximityToggle, setProximityToggle] = useState(false);

  const [similarityState, setSimilarityState] = useState(true);

  const [figureGroundState, setFigureGroundState] = useState(true);
  const [figureGround2State, setFigureGround2State] = useState(true);
  const [similarityButtonState, setSimilarityButtonState] = useState(false);
  const [similarity2ButtonState, setSimilarity2ButtonState] = useState(false);

  const [control1State, setControl1State] = useState(false);
  const [control2State, setControl2State] = useState(false);
  const [control3State, setControl3State] = useState(false);

  const [efficiencyState, setEfficiencyState] = useState(false);
  const [efficiency1State, setEfficiency1State] = useState(false);
  const [efficiency2State, setEfficiency2State] = useState(false);
  const [efficiency3State, setEfficiency3State] = useState(false);

  const [consistencyState, setConsistencyState] = useState(true);
  const [consistencyText, setConsistencyText] = useState('Stay');

  const objects = new Array(30).fill(null);
  const [coordinates, setCoordinates]: any = useState([]);
  const [containerDimensions, setContainerDimensions]: any = useState({ width: 0, height: 0 });

  // const bubbleRef = useRef(null);
  // const isInView = useInView(bubbleRef);

  const [answer, setAnswer] = useState('');

  const containerRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (firstState && secondState) {
      setFirstState(false);
    }
  }, [secondState]);

  useEffect(() => {
    if (firstState && secondState) {
      setSecondState(false);
    }
  }, [firstState]);

  useEffect(() => {
    if (efficiencyState && inputRef.current) {
      setTimeout(() => {
        if (inputRef.current !== null) {
          inputRef.current.focus();
        }
      }, 300);
    }
  }, [efficiencyState]);

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
    <main className="flex w-screen flex-col items-center">
      <div className="flex h-[200vh] w-full flex-row">
        <div className="z-10 flex h-full w-1/2 flex-col">
          <div className="flex h-screen flex-col justify-between p-20">
            <div className="w-full font-bookmania-bold text-7xl text-black">
              Circumventing Autonomy in Software Through Design
            </div>
            <div className="w-full text-xl text-black">A Commentary by Josh Antoniuk</div>
          </div>
          <div className="flex h-screen flex-col justify-between p-20">
            <div className="h-screen w-full font-bookmania-bold text-7xl text-black">Intro</div>
            <div className="w-full text-base text-black">
              The nudging of undesirable behaviour and loss of autonomy can be attributed to{' '}
              <span className="font-semibold italic">Gestalt Theory, Software Usability Heuristics </span>, and
              distancing of maintenance in favour of &apos;innovation&apos;.
              <br />
              <br />
              Gestalt theory was created by three German psychologists (Wertheimer, Koffka, and Kohler) in the
              1920&apos;s, and loosely translates to &apos;configuration&apos;. As a human, at any given time your brain
              is receiving millions of stimuli and must process them simultaneously. We are able to do this through
              pattern recognition, clustering, and ignorance of irrelevant information; which can be broken down further
              into the configuration below.
              <br />
              <br />
              Nudging is the idea of using behavioural science to entice a user to perform an unwanted outcome - usually
              done by antithesis of Gestalt Principles, or manipulating the individual.
              <br />
              <br />
              While the properties above are necessary in facilitating &apos;communicative design&apos; they can also be
              used for nefarious purposes. The dissection of the practices in beneficial, real-life scenarios, versus
              the anti-patterns in software demonstrate this.
            </div>
          </div>
        </div>
        <div className="sticky top-0 z-0 flex h-screen w-1/2 flex-col items-center justify-center space-y-10 bg-neutral-200 px-20 py-20 shadow-inner">
          <div className="h-1/2 w-full">
            <MovingButton />
          </div>
          <div className="flex h-1/2 w-full flex-col items-center justify-center gap-y-10 rounded-xl bg-white p-5 shadow-xl">
            <Button set={setFirstState} get={firstState} className="h-24">
              Toggle Me!
            </Button>
            <Button set={setSecondState} get={secondState} className="h-24">
              Also Toggle Me!
            </Button>
          </div>
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <div className="sticky left-0 top-0 z-40 flex h-[10vh] w-full flex-row">
          <div className="w-1/2 bg-white font-bookmania-bold text-6xl text-black">
            <div className="absolute top-1/2 -translate-y-1/2 pl-20">Gestalt Principles</div>
          </div>
          <div className="w-1/2 bg-neutral-200" />
        </div>
        <div className="flex w-full flex-row">
          <div className="w-1/2 px-20 py-4 text-base text-black">
            As our understanding of human-computer interaction increases, the principles and hueristics that define our
            interactions change. I&apos;ve narrowed down the most common five, and out of those five principles,
            reference the three most violated in daily software interactions.
          </div>
          <div className="w-1/2 bg-neutral-200" />
        </div>
        <div className="relative flex h-[90vh] w-full flex-row ">
          <div className="sticky top-[10%] h-fit w-1/2 px-20 pb-10">
            <div className="pb-4 font-bookmania-bold text-4xl text-black">Proximity</div>
            <div className="relative w-full text-base text-black">
              {proximityState && (
                <div className="absolute left-1/2 top-10 w-full -translate-x-1/2 overflow-hidden rounded-xl bg-neutral-100 shadow-xl">
                  <div className="flex h-full w-full flex-col">
                    <div className="flex w-full flex-row items-center justify-between bg-neutral-200 p-2">
                      <button
                        onClick={() => setProximityState(false)}
                        className="flex size-6 items-center justify-center rounded-full bg-red-500"
                      >
                        <XIcon size={18} className="text-red-800" />
                      </button>
                      My Article
                      <div className="" />
                    </div>
                    <div className="w-full overflow-hidden">
                      The rainbow-colored llama danced gracefully on the marshmallow clouds while playing a tune on its
                      bubblegum flute. Meanwhile, the polka-dotted elephants juggled pineapples with their trunks,
                      giggling uncontrollably as they twirled. Suddenly, the moon sprouted wings and soared into the
                      cotton candy sky, leaving a trail of stardust behind. And in the midst of it all, a chorus of
                      rubber ducks serenaded the floating teacups with their quacks.
                    </div>
                  </div>
                </div>
              )}
              The proximity principle suggests that things physically closer in space, are associated as having a
              relationship. If the purpose of these things are different, typically you would give some sort of space.
              <br />
              <br />A real life example is traffic lights. While the colours are different, the lights all communicate
              the same subject - directing traffic, so their proximity is nearby, in a row or column.
              <br />
              <br /> A web anti-pattern we see often is advertisements, or unwanted content being placed closed to
              content a user is intentionally consuming. The example that was above this content places a few sentences
              of random text over the actual text. The proximity being in the middle of the actual content might
              accidentaly make the user think it is intentionally there. The right shows a hypothetical social media
              feed, where a sponsored post is placed in between the other posts. While there are a couple indications
              that it is sponsored, the proximity, and likeness to other posts is intentional.
              <br />
              <br />A potential fix is shown by clicking the toggle below this text. While the changes are subtle,
              changing the proximity of the sponsored post to the other posts, and adding a divider can help the user
              distinguish between the two.
            </div>
            <div className="mt-10 h-10 w-1/2">
              <Button get={proximityToggle} set={setProximityToggle} className="h-full">
                Toggle Change
              </Button>
            </div>
          </div>
          <div className="h-full w-1/2 overflow-y-scroll bg-neutral-200 pb-10">
            <Proximity get={proximityToggle} />
          </div>
        </div>
        <div className="relative flex h-[90vh] w-full flex-row">
          <div className="sticky top-[10%] h-fit w-1/2 px-20 pb-10">
            <div className="pb-4 font-bookmania-bold text-4xl text-black">Figure/Ground</div>
            <div className="relative w-full text-base text-black">
              {figureGroundState && (
                <div className="absolute inset-0 overflow-hidden rounded-xl backdrop-blur-sm">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl">
                    <button
                      onClick={() => {
                        setSimilarityButtonState(true);
                        setTimeout(() => setSimilarityButtonState(false), 1000);
                      }}
                      className={`flex w-32 justify-center rounded-xl py-4 text-xl text-white transition-all duration-300 ${similarityButtonState ? 'bg-green-500' : 'bg-blue-500'}`}
                    >
                      {similarityButtonState ? <Check size={28} color="white" /> : 'Keep Blur?'}
                    </button>
                  </div>
                  <button
                    onClick={() => setFigureGroundState(false)}
                    className="absolute bottom-10 right-10 text-neutral-300 hover:underline"
                  >
                    Dismiss
                  </button>
                </div>
              )}
              This helps us distinguish information by separating them from the foreground (figure) to the background
              (ground). This can be as literal as contrasting text/background colour, or as complex as field of view and
              blurring/size of objects in the distance.
              <br />
              <br /> A real life example is the contrast of street signs - the ground colours contrast the figure
              colours, and are reflective.
              <br />
              <br /> While not an anti-pattern, there are scenarios where featured products have exaggerated figure and
              ground. The ground is very blurry and neutral, and the figure is prominent. Often this is used to
              masquerade dismiss buttons.
              <br />
              <br />
              The example that was above this text was a noticable button (Keep Blur?), that essentially did nothing,
              and was made to be the figure, in hopes of drawing your eyes away from the ground. Hidden in the blur of
              the text is a button that dissmisses the effect. This was done to show how the figure/ground principle can
              be used to manipulate the user. The example on the right shows a fix, where even if the button positioning
              remains the same, adding a border, background, or even a slight shadow can help distinguish the figure
              from ground.
            </div>
          </div>
          <div className="h-full w-1/2 bg-neutral-200 px-20 py-20">
            <div className="relative w-full text-base text-black">
              {figureGround2State && (
                <div className="absolute inset-0 overflow-hidden rounded-xl backdrop-blur-sm">
                  <div className="absolute left-1/2 top-1/2 flex h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-xl bg-white shadow-xl">
                    <div className="px-10 text-center text-xl font-semibold">
                      Did you want to keep this modal and blur?
                    </div>
                    <div className="flex flex-row gap-x-8 pt-10">
                      <button
                        onClick={() => {
                          setSimilarity2ButtonState(true);
                          setTimeout(() => setSimilarity2ButtonState(false), 1000);
                        }}
                        className={`flex w-32 justify-center rounded-xl py-4 text-xl text-white transition-all duration-300 ${similarity2ButtonState ? 'bg-green-500' : 'bg-blue-500'}`}
                      >
                        {similarity2ButtonState ? <Check size={28} color="white" /> : 'Keep Blur?'}
                      </button>
                      <button onClick={() => setFigureGround2State(false)} className="text-neutral-400 hover:underline">
                        Dismiss
                      </button>
                    </div>
                  </div>
                </div>
              )}
              Contrasting the ground with bright colours, or highlighting their differences can help the user make
              informed decisions. While a lot of the fixes seem trivial, they only seem so because of how vital they are
              to our technology.
              <br />
              <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat autem vero quo debitis eum
              reprehenderit tempora excepturi, illo eveniet itaque!
              <br />
              <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo exercitationem enim voluptate nisi?
              Labore voluptatibus iure sapiente exercitationem eos corporis ullam aspernatur sint illum asperiores?
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, pariatur sunt dolores inventore dolore
              dicta, ut atque omnis odit id autem ducimus deleniti. Delectus earum culpa quidem quos ratione iusto nisi
              itaque recusandae architecto nam! Eligendi eos cum vitae, velit vel veritatis rerum sunt voluptatem magnam
              dicta alias!
            </div>
          </div>
        </div>
        <div className="flex w-full flex-row">
          <div className="w-1/2 px-20">
            <div className="pb-4 font-bookmania-bold text-4xl text-black">Similarity</div>
            <div ref={containerRef} className="relative min-h-1 w-full text-base text-black">
              {containerRef.current && (
                <div
                  className={` ${!similarityState && 'hidden'} absolute inset-0 h-full overflow-hidden rounded-xl backdrop-blur-sm`}
                >
                  <AnimatePresence initial={false}>
                    <div className="relative h-full w-full">
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
                        onClick={() => setSimilarityState(false)}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.21 }}
                        className="z-40 rounded-lg bg-blue-500 px-3 py-2 text-white transition-colors duration-200 hover:bg-green-500"
                        style={{
                          position: 'absolute',
                          top: `${(containerDimensions.height - 40) * Math.random()}px`,
                          left: `${(containerDimensions.width - 95) * Math.random()}px`
                        }}
                      >
                        Dismiss!
                      </motion.button>
                    </div>
                  </AnimatePresence>
                </div>
              )}
              Things that are similar in size, shape, or colour are perceived as having a relationship with each other.
              <br />
              <br />A real life example we see everyday is street signs with specific shapes or colours representing
              certain things. In Canada, any red sign indicates a stop, any yellow indicates a warning, and green
              indicates information. While the actual functions of the signs may be different, as a driver, we are
              prepared for the hundreds of different signs without having memorized them all.
              <br />
              <br /> A web anti-pattern we see that nudges the user to perform an unwanted action could be an action
              (button) that is not the same colour, size, or have the same function as the others. The example on this
              section is a hyperbole, but illustrates how hard it is to find a certain action when given similar
              options. The fix on the right adds a slight shadow, and a slightly different blue colour, and you can see
              how much easier it is to find the action.
            </div>
          </div>
          <div className="w-1/2 bg-neutral-200">
            <ButtonCloud />
          </div>
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <div className="sticky left-0 top-0 z-40 flex h-[10vh] w-full flex-row">
          <div className="w-1/2 bg-neutral-200" />
          <div className="w-1/2 bg-white font-bookmania-bold text-6xl text-black">
            <div className="absolute top-1/2 -translate-y-1/2 pl-20">Usability Heuristics</div>
          </div>
        </div>
        <div className="flex w-full flex-row">
          <div className="w-1/2 bg-neutral-200" />
          <div className="w-1/2 px-20 py-4 text-base text-black">
            Now that we are able to understand what some Gestalt Principles are, we can apply this concept to the
            autonomy of individuals interacting with software. Known as Usability Heuristics, the aim of these is to
            evaluate how efficient and usable our tools are during interaction.
            <br />
            <br />
            Created by Jakob Nielsen in 1990, &quot;Improving a Human-Computer Dialogue&quot; suggests that software or
            tools made for autonomous beings{' '}
            <span className="italic">
              &quot;should be easy to learn and remember, effective, and pleasant to use&quot; -
            </span>{' '}
            yet often we see intentional violations of these principles, which tend to be more egregious in their
            nudging of unwanted actions.
            <br />
            <br /> Similar to the Gestalt Principles, I&apos;ve created examples of violated heuristics, and how they
            can be fixed.
          </div>
        </div>
        <div className="relative flex h-[90vh] w-full flex-row">
          <div className="h-full w-1/2 divide-y bg-neutral-200 px-20 pb-10">
            <div className="h-full divide-y">
              {control1State ? (
                <div className="flex h-32 w-full flex-col items-center bg-white text-green-500">
                  <svg
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-5"
                  >
                    <motion.circle
                      variants={{
                        hidden: {
                          pathLength: 0,
                          fill: 'none'
                        },
                        visible: {
                          pathLength: 1,
                          path: 'none'
                        }
                      }}
                      initial="hidden"
                      animate="visible"
                      cx="100"
                      cy="100"
                      r="93"
                      stroke="rgba(34, 197, 94, 1)"
                      stroke-width="14"
                    />
                    <motion.path
                      variants={{
                        hidden: {
                          pathLength: 0,
                          fill: 'rgba(34, 197, 94, 0)'
                        },
                        visible: {
                          pathLength: 1,
                          fill: 'rgba(34, 197, 94, 1)'
                        }
                      }}
                      initial="hidden"
                      animate="visible"
                      d="M81.0004 145C83.7341 147.733 88.1663 147.733 90.8999 145C93.6336 142.266 93.6336 137.834 90.8999 135.1L81.0004 145ZM44.0004 108L81.0004 145L90.8999 135.1L53.8999 98.1001L44.0004 108Z"
                    />
                    <motion.path
                      variants={{
                        hidden: {
                          pathLength: 0,
                          fill: 'rgba(34, 197, 94, 0)'
                        },
                        visible: {
                          pathLength: 1,
                          fill: 'rgba(34, 197, 94, 1)'
                        }
                      }}
                      initial="hidden"
                      animate="visible"
                      d="M81.0503 135.05C78.3166 137.784 78.3166 142.216 81.0503 144.95C83.7839 147.683 88.2161 147.683 90.9497 144.95L81.0503 135.05ZM90.9497 144.95L166.95 68.9497L157.05 59.0503L81.0503 135.05L90.9497 144.95Z"
                    />
                  </svg>
                  Thanks for purchasing! You&apos;ll get confirmation shortly.
                </div>
              ) : (
                <button
                  onClick={() => setControl1State(true)}
                  className="group relative flex h-32 w-full flex-col bg-white px-10 shadow-xl transition-colors duration-200 hover:bg-neutral-100"
                >
                  <div className="flex h-full w-full flex-col justify-center">
                    <div className="absolute right-[-10px] top-[-10px] z-40 rounded-md bg-blue-500 px-2 py-1 font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-105">
                      Add to cart!
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row items-center gap-x-8">
                        <ShoppingCart size={24} className="text-blue-500" />
                        <div className="flex flex-col items-start">
                          <div className="text-xl font-semibold group-hover:underline">Super New Innovation</div>
                          <div className="text-neutral-400">$300.00</div>
                        </div>
                      </div>
                      <div className="">
                        <div className="size-[100px] overflow-hidden rounded-xl transition-all duration-300 group-hover:scale-105">
                          <Image
                            src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmV8ZW58MHx8MHx8fDA%3D"
                            alt="Phone"
                            width={400}
                            height={400}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              )}
              {control2State ? (
                <div className="flex h-32 w-full flex-col items-center bg-white text-green-500">
                  <svg
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-5"
                  >
                    <motion.circle
                      variants={{
                        hidden: {
                          pathLength: 0,
                          fill: 'none'
                        },
                        visible: {
                          pathLength: 1,
                          path: 'none'
                        }
                      }}
                      initial="hidden"
                      animate="visible"
                      cx="100"
                      cy="100"
                      r="93"
                      stroke="rgba(34, 197, 94, 1)"
                      stroke-width="14"
                    />
                    <motion.path
                      variants={{
                        hidden: {
                          pathLength: 0,
                          fill: 'rgba(34, 197, 94, 0)'
                        },
                        visible: {
                          pathLength: 1,
                          fill: 'rgba(34, 197, 94, 1)'
                        }
                      }}
                      initial="hidden"
                      animate="visible"
                      d="M81.0004 145C83.7341 147.733 88.1663 147.733 90.8999 145C93.6336 142.266 93.6336 137.834 90.8999 135.1L81.0004 145ZM44.0004 108L81.0004 145L90.8999 135.1L53.8999 98.1001L44.0004 108Z"
                    />
                    <motion.path
                      variants={{
                        hidden: {
                          pathLength: 0,
                          fill: 'rgba(34, 197, 94, 0)'
                        },
                        visible: {
                          pathLength: 1,
                          fill: 'rgba(34, 197, 94, 1)'
                        }
                      }}
                      initial="hidden"
                      animate="visible"
                      d="M81.0503 135.05C78.3166 137.784 78.3166 142.216 81.0503 144.95C83.7839 147.683 88.2161 147.683 90.9497 144.95L81.0503 135.05ZM90.9497 144.95L166.95 68.9497L157.05 59.0503L81.0503 135.05L90.9497 144.95Z"
                    />
                  </svg>
                  Thanks for purchasing! You&apos;ll get confirmation shortly.
                </div>
              ) : (
                <button
                  onClick={() => setControl2State(true)}
                  className="group relative flex h-32 w-full flex-col bg-white px-10 shadow-xl transition-colors duration-200 hover:bg-neutral-100"
                >
                  <div className="flex h-full w-full flex-col justify-center">
                    <div className="absolute right-[-10px] top-[-10px] z-40 rounded-md bg-blue-500 px-2 py-1 font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-105">
                      Add to cart!
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row items-center gap-x-8">
                        <ShoppingCart size={24} className="text-blue-500" />
                        <div className="flex flex-col items-start">
                          <div className="text-xl font-semibold group-hover:underline">Super New Innovation</div>
                          <div className="text-neutral-400">$300.00</div>
                        </div>
                      </div>
                      <div className="">
                        <div className="size-[100px] overflow-hidden rounded-xl transition-all duration-300 group-hover:scale-105">
                          <Image
                            src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmV8ZW58MHx8MHx8fDA%3D"
                            alt="Phone"
                            width={400}
                            height={400}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              )}
              {control3State ? (
                <div className="flex h-32 w-full flex-col items-center bg-white text-green-500">
                  <svg
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-5"
                  >
                    <motion.circle
                      variants={{
                        hidden: {
                          pathLength: 0,
                          fill: 'none'
                        },
                        visible: {
                          pathLength: 1,
                          path: 'none'
                        }
                      }}
                      initial="hidden"
                      animate="visible"
                      cx="100"
                      cy="100"
                      r="93"
                      stroke="rgba(34, 197, 94, 1)"
                      stroke-width="14"
                    />
                    <motion.path
                      variants={{
                        hidden: {
                          pathLength: 0,
                          fill: 'rgba(34, 197, 94, 0)'
                        },
                        visible: {
                          pathLength: 1,
                          fill: 'rgba(34, 197, 94, 1)'
                        }
                      }}
                      initial="hidden"
                      animate="visible"
                      d="M81.0004 145C83.7341 147.733 88.1663 147.733 90.8999 145C93.6336 142.266 93.6336 137.834 90.8999 135.1L81.0004 145ZM44.0004 108L81.0004 145L90.8999 135.1L53.8999 98.1001L44.0004 108Z"
                    />
                    <motion.path
                      variants={{
                        hidden: {
                          pathLength: 0,
                          fill: 'rgba(34, 197, 94, 0)'
                        },
                        visible: {
                          pathLength: 1,
                          fill: 'rgba(34, 197, 94, 1)'
                        }
                      }}
                      initial="hidden"
                      animate="visible"
                      d="M81.0503 135.05C78.3166 137.784 78.3166 142.216 81.0503 144.95C83.7839 147.683 88.2161 147.683 90.9497 144.95L81.0503 135.05ZM90.9497 144.95L166.95 68.9497L157.05 59.0503L81.0503 135.05L90.9497 144.95Z"
                    />
                  </svg>
                  Thanks for purchasing! You&apos;ll get confirmation shortly.
                </div>
              ) : (
                <button
                  onClick={() => setControl3State(true)}
                  className="group relative flex h-32 w-full flex-col bg-white px-10 shadow-xl transition-colors duration-200 hover:bg-neutral-100"
                >
                  <div className="flex h-full w-full flex-col justify-center">
                    <div className="absolute right-[-10px] top-[-10px] z-40 rounded-md bg-blue-500 px-2 py-1 font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-105">
                      Add to cart!
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row items-center gap-x-8">
                        <ShoppingCart size={24} className="text-blue-500" />
                        <div className="flex flex-col items-start">
                          <div className="text-xl font-semibold group-hover:underline">Super New Innovation</div>
                          <div className="text-neutral-400">$300.00</div>
                        </div>
                      </div>
                      <div className="">
                        <div className="size-[100px] overflow-hidden rounded-xl transition-all duration-300 group-hover:scale-105">
                          <Image
                            src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmV8ZW58MHx8MHx8fDA%3D"
                            alt="Phone"
                            width={400}
                            height={400}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              )}
              {!control1State || !control2State || !control3State ? (
                <div className="mt-0 rounded-b-xl bg-white font-semibold">
                  Hey youuuu! 🥺🥺🥺🥺 Looks like you forgot to buy all the products! You don&apos;t hate me, right?
                  Just buy them!
                </div>
              ) : (
                <div className="mt-10 rounded-b-xl bg-white font-semibold">Thank youuuu! 🥺🥺🥺🥺 ily</div>
              )}
            </div>
          </div>
          <div className="sticky top-[10%] h-fit w-1/2 px-20 pb-10">
            <div className="pb-4 font-bookmania-bold text-4xl text-black">User Control & Freedom</div>
            <div className="relative w-full text-base text-black">
              {/* {proximityState && (
                <div className="absolute inset-0 overflow-hidden rounded-xl bg-neutral-100 shadow-xl">
                  <div className="flex h-full w-full flex-col">
                    <div className="flex flex-row items-center justify-between px-5">
                      <div className="flex flex-row gap-x-4">
                        <div className="size-12 rounded-full bg-blue-500" />
                        <div className="flex flex-col">
                          <div className="font-semibold">coolthings</div>
                          <div className="text-sm font-thin">sponsored</div>
                        </div>
                      </div>
                      <button onClick={() => setProximityState(false)} className="py-5 pl-5">
                        <XIcon size={28} color="black" />
                      </button>
                    </div>
                    <div className="w-full overflow-hidden">
                      <Image src="/JoshPhoto.jpg" alt="photo" width={800} height={700} className="object-cover" />
                    </div>
                  </div>
                </div>
              )} */}
              We often make mistakes, and need to be able to undo them. This principle suggests that the user should
              always have control of their actions, and be able to confirm or cancel them. We often overlook this
              heuristic, as it seems second nature to us, but it surround us on many physical tools we use.
              <br />
              <br />
              If we make a mistake writing with a pencil, the eraser provided on the top gives you the opportunity to
              undo or correct the issue. The example on the right is something slightly different. The user might assume
              they are able to add a product to their cart, but instead of adding to a list, it automatically buys it.
              This gives the user no control to confirm their purchase.
              <br />
              <br /> In some scenarios, when given the option to confirm or cancel an action, specific language is used
              to manipulate/guilt the user into reconsidering their action. It is not uncommon to see something similar
              to &quot;We are an independent company, and we rely on your support to keep our services free&quot; when
              trying to read an article.
            </div>
          </div>
        </div>
        <div className="relative flex h-[90vh] w-full flex-row">
          <div className="h-full w-1/2 bg-neutral-200 px-20 pb-10">
            <div className="flex w-full flex-col overflow-y-hidden rounded-xl bg-white p-10 transition-all duration-300">
              <div className="text-xl font-semibold text-black">
                Allow us to track cookies and send oddly specific ads?
              </div>
              <div className="text-sm text-black">Update your preferences below.</div>
              <div className="flex flex-row">
                <Button get={efficiency1State} set={setEfficiency1State} className="h-7 !gap-x-2">
                  Reject
                </Button>
                <Button get={efficiency2State} set={setEfficiency2State} className="h-7 !gap-x-2 pl-6">
                  Necessary
                </Button>
                <Button get={efficiency3State} set={setEfficiency3State} className="h-7 !gap-x-2 pl-6">
                  Accept
                </Button>
              </div>
            </div>
          </div>
          <div className="sticky top-[10%] h-fit w-1/2 px-20 pb-10">
            <div className="pb-4 font-bookmania-bold text-4xl text-black">Flexibility & Efficiency of Use</div>
            <div className="relative w-full text-base text-black">
              {answer !== 'ln(2)' && (
                <div className="absolute h-full p-10 backdrop-blur-sm">
                  <div
                    style={{ maxHeight: efficiencyState ? 500 : 175 }}
                    className="w-full overflow-y-hidden rounded-xl bg-neutral-50 p-5 shadow-xl transition-all duration-300"
                  >
                    <Button get={efficiencyState} set={setEfficiencyState} className="h-20">
                      Allow us to track cookies and send oddly specific ads?
                    </Button>
                    <div className="mt-20">
                      To continue, solve this complex equation:
                      <Image src="/Math2.jpg" alt="problem" width={400} height={300} />
                    </div>
                    <input
                      ref={inputRef}
                      placeholder="Your answer:"
                      onInput={(e: any) => setAnswer(e.target.value)}
                      className="w-full rounded-md border-2 p-2"
                    />
                  </div>
                </div>
              )}
              Flexibility & Efficiency of Use guide the user to make quick, and informed decisions like we do in real
              life - and when the process begins to get complicated, we abort the process or continue with a less than
              ideal option.
              <br />
              <br /> An example that nudges the user to perform an unwanted action would be a difficult process to
              unsubscribe from a letter or cookies. The example given forces the user to solve a complex equation before
              reading the content, or accepting the cookies. While this is a hyperbole, there are scenarios to consider
              where you can reject cookies, but have to go through a complicated menu process to deny them.
              <br />
              <br /> The fixed example shows a simple banner, with 3 options, deny, accept, or only neccecary cookies.
            </div>
          </div>
        </div>
        <div className="relative flex h-[90vh] w-full flex-row">
          <div className="h-full w-1/2 bg-neutral-200 pb-10">
            <div className="relative w-full p-10">
              <div className="relative flex flex-col justify-center rounded-xl bg-white p-10 pb-20 shadow-xl">
                <div className="text-center text-xl font-semibold">Dismiss this Window?</div>
                <div className="text-center text-sm">
                  If you want to dismiss this window, be aware you will not be able to see it again unless you refresh.
                </div>
                <div className="absolute inset-x-0 bottom-0 flex w-full flex-row">
                  <button
                    onClick={() => setConsistencyState(true)}
                    onMouseEnter={() => setConsistencyText('Exit')}
                    onMouseLeave={() => setConsistencyText('Stay')}
                    className="w-full border-r border-t border-neutral-200 py-2 text-center text-lg text-blue-500 hover:bg-neutral-50 hover:text-red-500"
                  >
                    {consistencyText}
                  </button>
                  <button
                    onClick={() => setConsistencyState(false)}
                    onMouseEnter={() => setConsistencyText('Stay')}
                    onMouseLeave={() => setConsistencyText('Exit')}
                    className="w-full border-t border-neutral-200 py-2 text-center text-lg text-red-500 hover:bg-neutral-50 hover:text-blue-500"
                  >
                    {consistencyText === 'Stay' ? 'Stay' : consistencyText}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="sticky top-[10%] h-fit w-1/2 px-20 pb-10">
            <div className="bg-white pb-4 font-bookmania-bold text-4xl text-black">Consistency & Standards</div>
            <div className="relative w-full bg-white text-base text-black">
              {consistencyState && (
                <div className="absolute w-full p-10 backdrop-blur-sm">
                  <div className="relative flex flex-col justify-center rounded-xl bg-white p-10 pb-20 shadow-xl">
                    <div className="text-center text-xl font-semibold">Adjust Modal State?</div>
                    <div className="text-center text-sm">
                      If you need to adjust the current modal state using a predefined hook, feel free to use any of the
                      options. Keep in mind, once an option is chosen, state cannot be modified until the page is
                      refreshed.
                    </div>
                    <div className="absolute inset-x-0 bottom-0 flex w-full flex-row">
                      <button
                        onClick={() => setConsistencyState(true)}
                        className="w-full border-r border-t border-neutral-200 py-2 text-center text-lg text-blue-500 hover:bg-neutral-50"
                      >
                        Set State to True
                      </button>
                      <button
                        onClick={() => setConsistencyState(false)}
                        className="w-full border-t border-neutral-200 py-2 text-center text-lg text-blue-500 hover:bg-neutral-50"
                      >
                        Set State to False
                      </button>
                    </div>
                  </div>
                </div>
              )}
              There are established standards that software should use. For example, when given a choice, the innocuous
              or cancel action is usually placed on the left side or bottom, with a &apos;cancel&apos; text colour -
              usually red. Nielson also recognizes that software should{' '}
              <span className="italic">&quot;speak the user&apos;s language&quot;</span>. This means not speaking in
              machine terms, and presenting information in a concise and consistent way.
              <br />
              <br /> An anti-pattern that directly violates this could include swapping the button positions or text
              colour. In the example to the right, I hyperbolize the idea of consistency & standards by swapping action
              and cancel buttons by changing what they say when you hover over them. Instead of saying &quot;Would you
              like to dismiss the window?&quot; it speaks in a language that potentially could confuse the user.
              <br />
              <br />
              The example on the right simplifies the text previously shown, but this time is not consistent with the
              actions. The actions swap whenever the user hovers over them.
            </div>
          </div>
        </div>
      </div>
      <div className="p-20 text-center text-xl">
        It is worth mentioning that these Gestalt Principles and Usability Heuristics are vital in maintaining good
        human software interaction. The groups which intentionally cross the line in the sand, and make these tools
        harder to use, reflect their true intentions - valuing their product over your autonomy. It truly is a war of
        attrition. An example that comes to mind is{' '}
        <a href="https://arinet.com/resources/blog-posts/facebooks-fight-ad-blockers-need-know/">
          Facebook&apos;s &apos;solution&apos; to adblockers
        </a>{' '}
        which search for the word “Advertisement” into separate sections, each containing a letter, so the adblocker
        cannot find it. It is things like this, which are a clear violation of human centred design, and reduces the
        usability of these tools.
        <br />
        <br />
        Thaler and Sunstein reinforce this concept through the idea of &apos;libertarian paternalism&apos;, to
        &quot;affect human behaviour while respecting individual freedom of choice&quot;. Like I briefly mention,
        nudging can be a good thing, when it is in the interest of the respecting the user and their autonomy - which
        when done well, is an invisible, thankless job.
      </div>
      <button
        className="mb-10 w-1/4 rounded-lg bg-blue-500 py-5 text-white transition-colors duration-200 hover:bg-blue-600"
        onClick={() => {
          document.body.style.transform = 'rotate(180deg)';
        }}
      >
        View References
      </button>

      <div className="flex flex-col">
        <div className="">References:</div>
        <a href="https://www.uxtigers.com/about/people#:~:text=Jakob%20Nielsen%2C%20Ph.,and%20the%2010%20usability%20heuristics.">
          Jakob Nielsen
        </a>
        <a href="https://www.cs.uml.edu/~holly/91.550/papers/p338-molich.pdf">Improving a Human-Computer Dialogue</a>
        <a href="https://link.springer.com/article/10.1007/s10209-022-00925-4">Usability Heuristics in Web Apps</a>
        <a href="https://compass.onlinelibrary.wiley.com/doi/full/10.1111/phc3.12658">Theory of Nudging</a>
        <a href="https://aisel.aisnet.org/cgi/viewcontent.cgi?article=1076&context=wi2017">Digital Nudging</a>
      </div>
    </main>
  );
}
