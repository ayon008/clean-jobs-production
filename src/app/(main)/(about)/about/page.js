import Image from "next/image";
import aboutImage from '../../../../../public/assets/Frame 1272636201.svg'
import FaTelemarketting from "@/icons/FaTelemarketting";

const page = () => {
    return (
        <div className="pt-[80px]">
            <div className="relative">
                <Image className="w-full" src={aboutImage} alt="about-us" />
                <div className="absolute transform -translate-y-1/2 top-1/2 left-1/2 -translate-x-1/2">
                    <h2 className="2xl:text-6xl xl:text-5xl text-2xl font-medium text-white text-center">The Path to Success</h2>
                    <p className="text-sm font-medium text-center text-white">About Us</p>
                </div>
            </div>
            <div className="2xl:py-24 xl:py-16 py-10 2xl:px-40 xl:px-28 px-14">
                <div>
                    <h5 className="text-primary text-sm font-medium">Why choose us</h5>
                    <h1 className="2xl:text-5xl xl:text-4xl text-xl font-medium inter mt-2">Creative and Unique Solutions</h1>
                </div>
                <div className="2xl:mt-10 xl:mt-8 mt-6 grid grid-cols-2">
                    <div className="space-y-6">
                        <div className="flex items-start gap-5 pb-6 border-b-2 border-[#D6D6D6]">
                            <FaTelemarketting />
                            <div className="">
                                <h3 className="text-2xl text-black font-medium inter">Telemarketing</h3>
                                <p className="ml-[2px] text-[#808080] text-base font-normal inter">Our expert team delivers tailored telemarketing solutions, ensuring high-quality leads and increased sales.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-5 pb-6 border-b-2 border-[#D6D6D6]">
                            <FaTelemarketting />
                            <div className="">
                                <h3 className="text-2xl text-black font-medium inter">Telemarketing</h3>
                                <p className="ml-[2px] text-[#808080] text-base font-normal inter">Our expert team delivers tailored telemarketing solutions, ensuring high-quality leads and increased sales.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-5 pb-6 border-b-2 border-[#D6D6D6]">
                            <FaTelemarketting />
                            <div className="">
                                <h3 className="text-2xl text-black font-medium inter">Telemarketing</h3>
                                <p className="ml-[2px] text-[#808080] text-base font-normal inter">Our expert team delivers tailored telemarketing solutions, ensuring high-quality leads and increased sales.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;