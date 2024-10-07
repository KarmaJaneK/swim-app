import { Link } from 'react-router-dom';
import { WobbleCard } from "../ui/wobble-card";
import './Card.css';
export function WobbleCardDemo() {
    return (

        <div
            className="cards grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl  w-full">
            <WobbleCard
                image= "src/assets/asian-happy-kid-playing-slider-swimming-pool.jpg"
                title={<Link to="src/pages/PrebuiltPlans.jsx">Prebuilt Lesson Plans</Link>}
                text={"Access our prebuilt lesson plans for all levels."}
                containerClassName="card-1 col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px] specific-image-class"
                className="">

            </WobbleCard>
            <WobbleCard
                image= "src/assets/little-cute-baby-boy-instructor-with-kid-mother-with-son.jpg"
                title={<Link to="src/pages/ActivityLibrary.jsx">Prebuilt Lesson Plans</Link>}
                text={"Browse our  library for fun and engaging activities for children of all ages"}
                containerClassName="card-2 col-span-1 min-h-[300px] specific-image-class">

            </WobbleCard>
            <WobbleCard
                image= "src/assets/two-schoolgirl-water-polo-players-listening-teacher-poolside-have-fun-play-splash-blue-swimming-pool.jpg"
                title={<Link to="src/pages/LessonBuilder.jsx">Lesson Builder</Link>}
                text={"Create your own lesson plans with our easy to use lesson builder."}
                containerClassName="card-3 col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] specific-image-class">


            </WobbleCard>
        </div>

    );
}
export default WobbleCardDemo;