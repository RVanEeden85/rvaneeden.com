import { GoDotFill } from "react-icons/go";

const WorkAvailability = () => {
    return (
        <div className="max-w-2xl font-raleway md:right-10 md:border-b md:border-white/30 fixed top-0 flex gap-6 bg-black/30 px-10 md:py-4 md:rounded-b-4xl backdrop-blur-sm text-md md:text-xl z-50">
            <div className="flex items-center justify-center">
                <span className="text-green-600 pulse">
                    <GoDotFill />
                </span>{" "}
                <span className="text-white/80 pulse">Available For Work</span>
            </div>
        </div>
    );
};

export default WorkAvailability;
