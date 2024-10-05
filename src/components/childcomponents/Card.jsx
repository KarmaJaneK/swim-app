import { Link } from 'react-router-dom';
import { WobbleCard } from "../ui/wobble-card";
import './Card.css';
export function WobbleCardDemo() {
    return (

        <div
            className="cards grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
            <WobbleCard
                containerClassName="card-1 col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
                className="">
                <div className="max-w-xs">
                    <h2
                        className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        <Link to="src/pages/PrebuiltPlans.jsx">Prebuilt Lesson Plans</Link>
                    </h2>
                    <p className="mt-4 text-left  text-base/6 text-neutral-200">
                       Access our prebuilt lesson plans for all levels.
                    </p>
                </div>

            </WobbleCard>
            <WobbleCard containerClassName="card-2 col-span-1 min-h-[300px]">
                <h2
                    className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    <Link to="src/pages/ActivityLibrary.jsx">Activity Library</Link>
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                    Browse our  library for fun and engaging activities for children of all ages
                </p>
            </WobbleCard>
            <WobbleCard
                containerClassName="card-3 col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                <div className="max-w-sm">
                    <h2
                        className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        <Link to="src/pages/LessonBuilder.jsx">Lesson Builder</Link>
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                        Create your own lesson plans with our easy to use lesson builder.
                    </p>
                </div>

            </WobbleCard>
        </div>

    );
}
export default WobbleCardDemo;