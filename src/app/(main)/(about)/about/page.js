import Image from "next/image";
import aboutImage from '@/../public/assets/Frame 1272636201.svg'
import FaTelemarketting from "@/icons/FaTelemarketting";
import video from '@/../public/assets/Frame.png'
import image from '@/../public/assets/699f0ea426e250f89c5625fd3790a47b.png';
import image2 from '@/../public/assets/Frame 1.svg';
import FaLeads from "@/icons/FaLeads";
import FaWeb from "@/icons/FaWeb";
import FaCircleCheck from "@/icons/FaCheck";
import ryan from '@/../public/assets/354198829_3532949156925131_7111049050546887557_n.jpg'
import Footer from "@/Shared/Footer";
import SectionTitles from "@/ui/SectionTitles";
import { FaStar } from "react-icons/fa";
import rev1 from '@/../public/assets/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background 1.svg'
import rev2 from '@/../public/assets/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes.svg'
import aboutImage1 from '@/../public/assets/Group 13778.svg'
import ayon from '@/../public/assets/462672421_2310475689286628_7856711266779259180_n.jpg'
import sneha from '@/../public/assets/462835113_1117568373068364_714874652603614545_n.jpg'
import shanto from '../../../../../public/assets/451321767_3840503976220793_5243108772079747298_n.jpg'


const page = () => {
    return (
        <div className="pt-[80px]">
            <div className="relative 2xl:h-auto xl:h-auto h-[430px] z-10">
                <Image className="w-full 2xl:block xl:block hidden" src={aboutImage} alt="about-us" />
                <Image className="w-full 2xl:hidden xl:hidden block h-full object-cover z-20" src={aboutImage1} alt="about-us" />
                <div className="absolute transform -translate-y-1/2 top-1/2 left-1/2 -translate-x-1/2 z-40">
                    <h2 className="2xl:text-6xl xl:text-5xl text-3xl font-medium 2xl:text-white xl:text-white text-black text-center poppins">The Path to Success</h2>
                    <p className="text-sm 2xl:text-white xl:text-white text-black font-medium text-center inter">About Us</p>
                </div>
            </div>
            <div className="2xl:py-24 xl:py-16 py-10 2xl:px-40 xl:px-28 px-10">
                <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 xl:gap-8 2xl:gap-12">
                    <div className="flex flex-col h-full justify-between">
                        <div>
                            <h5 className="text-primary text-sm xl:text-sm 2xl:text-lg 2xl:font-medium xl:font-medium font-semibold">Why choose us</h5>
                            <h1 className="2xl:text-5xl xl:text-4xl text-3xl 2xl:font-medium xl:font-medium font-semibold inter mt-2 poppins">Creative and Unique <br /> Solutions</h1>
                        </div>
                        <div className="flex 2xl:flex-row xl:flex-row flex-col items-start gap-5 py-6 border-b-2 border-[#D6D6D6] mt-6">
                            <div>
                                <FaTelemarketting />
                            </div>
                            <div className="mt-1">
                                <h3 className="xl:text-2xl 2xl:text-3xl text-2xl text-black font-medium inter">Telemarketing</h3>
                                <p className="ml-[2px] text-[#808080] xl:text-base text-base 2xl:text-xl font-normal inter 2xl:mt-0 xl:mt-0 mt-4">Our expert team delivers tailored telemarketing solutions, ensuring high-quality leads and increased sales.</p>
                            </div>
                        </div>
                        <div className="flex 2xl:flex-row xl:flex-row flex-col items-start gap-5 py-6 border-b-2 border-[#D6D6D6]">
                            <div>
                                <FaLeads />
                            </div>
                            <div className="mt-1">
                                <h3 className="xl:text-2xl 2xl:text-3xl text-2xl text-black font-medium inter">Lead Generation</h3>
                                <p className="ml-[2px] text-[#808080] xl:text-base text-base 2xl:text-xl font-normal inter 2xl:mt-0 xl:mt-0 mt-4">Our expert team delivers tailored telemarketing solutions, ensuring high-quality leads and increased sales.</p>
                            </div>
                        </div>
                        <div className="flex 2xl:flex-row xl:flex-row flex-col items-start gap-5 py-6 border-b-2 border-[#D6D6D6]">
                            <div>
                                <FaWeb />
                            </div>
                            <div className="mt-1">
                                <h3 className="xl:text-2xl 2xl:text-3xl text-2xl text-black font-medium inter">Your online presence solution</h3>
                                <p className="ml-[2px] text-[#808080] xl:text-base text-base 2xl:text-xl font-normal inter 2xl:mt-0 xl:mt-0 mt-4">From web design to SEO, our full-service web solutions help your business thrive online.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col h-full 2xl:mt-0 xl:mt-0 mt-6">
                        <div>
                            <Image src={video} className="w-full h-auto" alt="" />
                        </div>
                        <div className="mt-6 h-full">
                            <Image src={image} className="rounded-[30px] h-full" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="2xl:py-24 xl:py-16 py-10 2xl:px-40 xl:px-28 px-10">
                <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 xl:gap-8 2xl:gap-12">
                    <h1 className="xl:text-2xl 2xl:text-3xl text-2xl text-black font-medium inter">Transforming Dreams into <br />Reality</h1>
                    <p className="text-[#808080] xl:text-base 2xl:text-xl text-base 2xl:mt-0 xl:mt-0 mt-6">We are dedicated to turning your vision into a tangible success story. With a deep understanding of your goals and our expertise across various industries, we bring innovative solutions that align with your aspirations. Whether you&apos;re a small business or a growing enterprise, we are committed to delivering results that exceed your expectations.</p>
                </div>
                <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 xl:gap-8 2xl:gap-12 2xl:mt-12 xl:mt-10 mt-6">
                    <div className="h-full custom-row gap-0">
                        <div className="w-full h-full">
                            <div className="flex items-start h-full">
                                <div className="flex flex-col h-full">
                                    <FaCircleCheck />
                                    <div className="w-[46px] h-full">
                                        <div className="w-1/2 h-full border-[#3328BF] border-r-2"></div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="xl:text-2xl text-2xl 2xl:text-3xl text-black font-medium inter">Tailored Solutions</h3>
                                    <p className="ml-[2px] mt-1 text-[#808080] xl:text-base 2xl:text-xl text-base font-normal inter">We customize our approach to meet your unique needs</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-full">
                            <div className="flex items-start h-full">
                                <div className="flex flex-col h-full">
                                    <FaCircleCheck />
                                    <div className="w-[46px] h-full">
                                        <div className="w-1/2 h-full border-[#3328BF] border-r-2"></div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="xl:text-2xl text-2xl 2xl:text-3xl text-black font-medium inter">Innovative Strategies</h3>
                                    <p className="ml-[2px] mt-1 text-[#808080] xl:text-base text-base 2xl:text-xl font-normal inter">We create cutting-edge solutions to drive your business forward.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-full flex flex-col">
                            <div className="w-[40px] h-full">
                                <div className="w-[23px] h-full border-[#3328BF] border-r-2"></div>
                            </div>
                            <div className="flex items-start h-fit mt-auto">
                                <div className="flex flex-col h-full ml-[3px]">
                                    <svg width="38" height="38" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="38" height="38" rx="20" fill="#F9F9FB" />
                                        <path d="M21.1562 28.6875L30 19.8438L28.5625 18.4375L21.1562 25.8438L17.4062 22.0938L16 23.5L21.1562 28.6875ZM23 35.5C21.2917 35.5 19.6771 35.1719 18.1562 34.5156C16.6354 33.8594 15.3073 32.9635 14.1719 31.8281C13.0365 30.6927 12.1406 29.3646 11.4844 27.8438C10.8281 26.3229 10.5 24.7083 10.5 23C10.5 21.2708 10.8281 19.6458 11.4844 18.125C12.1406 16.6042 13.0365 15.2812 14.1719 14.1562C15.3073 13.0312 16.6354 12.1406 18.1562 11.4844C19.6771 10.8281 21.2917 10.5 23 10.5C24.7292 10.5 26.3542 10.8281 27.875 11.4844C29.3958 12.1406 30.7188 13.0312 31.8438 14.1562C32.9688 15.2812 33.8594 16.6042 34.5156 18.125C35.1719 19.6458 35.5 21.2708 35.5 23C35.5 24.7083 35.1719 26.3229 34.5156 27.8438C33.8594 29.3646 32.9688 30.6927 31.8438 31.8281C30.7188 32.9635 29.3958 33.8594 27.875 34.5156C26.3542 35.1719 24.7292 35.5 23 35.5Z" fill="#246532" />
                                    </svg>
                                </div>
                                <div className="ml-1">
                                    <h3 className="xl:text-2xl text-2xl 2xl:text-3xl text-black font-medium inter">Dedicated Support</h3>
                                    <p className=" mt-1 text-[#808080] xl:text-base 2xl:text-xl text-base font-normal inter">Our team works closely with you every step of the way</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Image src={image2} className="rounded-[30px] w-full 2xl:mt-0 xl:mt-0 mt-10" alt="" />
                </div>
            </div>

            <div className="2xl:py-24 xl:py-16 py-10 2xl:px-40 xl:px-28 px-10">
                <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 grid-cols-2 2xl:gap-8 xl:gap-4 gap-4 items-stretch">
                    <div className="col-span-2">
                        <div className="flex items-center gap-5">
                            <hr className="w-[50px] h-[1px] bg-[#808080] 2xl:block xl:block hidden" />
                            <p className="text-[#808080] 2xl:text-xl xl:text-lg 2xl:font-normal xl:font-normal font-bold text-lg"> Meet our company family</p>
                        </div>
                        <h1 className="2xl:text-6xl xl:text-5xl text-4xl poppins 2xl:my-0 xl:my-0 my-4 inter 2xl:font-medium xl:font-medium font-semibold">Our skilled team will support you.</h1>
                    </div>
                    <div>
                        <Image className="h-[250px]" height={250} src={ryan} alt="" />
                        <h2 className="text-[#0D0D0D] 2xl:text-2xl xl:text-xl font-semibold 2xl:mt-5 xl:mt-2 mt-[6px]">Ryan Afzal</h2>
                        <p className="text-[#808080]">CEO and Head of telemarketing service</p>
                    </div>
                    <div>
                        <Image className="h-[250px]" height={250} src={ayon} alt="" />
                        <h2 className="text-[#0D0D0D] 2xl:text-2xl xl:text-xl font-semibold 2xl:mt-5 xl:mt-2 mt-[6px]">Shariar Ayon</h2>
                        <p className="text-[#808080]">Web and Mobile Application Developer & Technical Support Specialist</p>
                    </div>
                    <div>
                        <Image className="h-[250px] w-full" height={250} src={sneha} alt="" />
                        <h2 className="text-[#0D0D0D] 2xl:text-2xl xl:text-xl font-semibold 2xl:mt-5 xl:mt-2 mt-[6px]">Zarin Refa Sneha</h2>
                        <p className="text-[#808080]">Lead Generation Specialist and Appointment Setter</p>
                    </div>
                    <div>
                        <Image className="h-[250px]" height={250} src={shanto} alt="" />
                        <h2 className="text-[#0D0D0D] 2xl:text-2xl xl:text-xl font-semibold 2xl:mt-5 xl:mt-2 mt-[6px]">Shanto Hossain</h2>
                        <p className="text-[#808080]">SEO Specialist</p>
                    </div>
                    <div>
                        <Image className="h-[250px]" height={250} src={ryan} alt="" />
                        <h2 className="text-[#0D0D0D] 2xl:text-2xl xl:text-xl font-semibold 2xl:mt-5 xl:mt-2 mt-[6px]">Ryan Afzal</h2>
                        <p className="text-[#171212]">CEO and Head of telemarketing service</p>
                    </div>
                    <div>
                        <Image className="h-[250px]" height={250} src={ryan} alt="" />
                        <h2 className="text-[#0D0D0D] 2xl:text-2xl xl:text-xl font-semibold 2xl:mt-5 xl:mt-2 mt-[6px]">Ryan Afzal</h2>
                        <p className="text-[#808080]">CEO and Head of telemarketing service</p>
                    </div>
                </div>
            </div>

            <div className="2xl:py-24 xl:py-16 py-10 2xl:px-40 xl:px-28 px-10">
                <div className="grid 2xl:grid-cols-5 xl:grid-cols-5 grid-cols-1">
                    <div className="2xl:col-span-2 xl:col-span-2 h-full flex flex-col justify-between">
                        <h1 className="text-[#0D0D0D] 2xl:text-left xl:text-left text-center font-semibold 2xl:mb-0 xl:mb-0 mb-6 2xl:text-5xl xl:text-4xl text-3xl">Need More <br className="2xl:block xl:block hidden" /> Help?</h1>
                        <p className="text-[#808080] 2xl:text-xl xl:text-lg text-lg font-semibold mt-auto 2xl:block xl:block hidden">Couldn’t not find what you were looking for?<br /> write to us at <a className="text-black" href="mailTo:example@example.info">example@example.info</a>
                        </p>
                        <p className="text-[#808080] 2xl:text-xl xl:text-lg text-lg font-semibold text-center mb-6 2xl:hidden xl:hidden block">We`re happy to answer your questions</p>
                    </div>
                    <div className="col-span-3 h-full rounded-[10px] border border-[#D6D6D6]">
                        <div className="pt-10 pb-6 border-b-[#D6D6D6] border-b-[1px]">
                            <div className="flex 2xl:gap-10 xl:gap-8 gap-4  items-start px-5">
                                <div className="mt-6">
                                    <h1 className="2xl:text-4xl xl:text-4xl text-3xl font-semibold poppins">01</h1>
                                </div>
                                <div>
                                    <h1 className="text-[#0D0D0D] 2xl:text-xl xl:text-lg font-medium">What telemarketing services do you provide?</h1>
                                    <p className="text-[#808080] 2xl:text-lg xl:text-base mt-2">We offer a wide range of telemarketing services, including outbound calls, lead qualification, appointment setting, and sales calls tailored to your business goals.</p>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 border-b-[#D6D6D6] border-b-[1px]">
                            <div className="flex 2xl:gap-10 xl:gap-8 gap-4 items-start px-5">
                                <div className="mt-6">
                                    <h1 className="2xl:text-4xl xl:text-4xl text-3xl font-semibold poppins">02</h1>
                                </div>
                                <div>
                                    <h1 className="text-[#0D0D0D] 2xl:text-xl xl:text-lg font-medium">How do you generate leads for my business?</h1>
                                    <p className="text-[#808080] 2xl:text-lg xl:text-base mt-2">Our lead generation process involves identifying your target audience, running tailored campaigns across multiple channels (like email, social media, and phone calls), and delivering high-quality, ready-to-convert leads.</p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-6 pb-10 border-b-[#D6D6D6] border-b-[1px]">
                            <div className="flex 2xl:gap-10 xl:gap-8 gap-4 items-start px-5">
                                <div className="mt-6">
                                    <h1 className="2xl:text-4xl xl:text-4xl text-3xl font-semibold poppins">03</h1>
                                </div>
                                <div>
                                    <h1 className="text-[#0D0D0D] 2xl:text-xl xl:text-lg font-medium">What type of web solutions do you offer?</h1>
                                    <p className="text-[#808080] 2xl:text-lg xl:text-base mt-2">We provide comprehensive web solutions, including website design and development, SEO optimization, e-commerce solutions, and website maintenance to ensure your online presence is top-notch.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="2xl:py-24 xl:py-16 py-10 2xl:px-40 xl:px-28 px-10">
                <SectionTitles heading={'Experiences Shared by Our Clients'} subHeading={'Our team provided unparalleled support throughout every project. Their expertise and dedication were evident from day one, helping customers navigate complex challenges.'} />
                <div className="2xl:mt-12 xl:mt-10 mt-6 flex 2xl:flex-row xl:flex-row flex-col items-start 2xl:gap-8 xl:gap-6 gap-4">
                    <div className="2xl:p-8 xl:p-6 p-4 2xl:space-y-8 xl:space-y-6 space-y-4 border border-[#D6D6D6]">
                        <div className="flex items-center justify-center">
                            {
                                Array.from({ length: 5 }, (_, i) => i + 1).map(i => (
                                    <FaStar key={i} color="#F5C74D" />
                                ))
                            }
                        </div>
                        <p className="text-[#808080] 2xl:text-lg xl:text-base text-center">Their lead generation services are top-tier! We saw a huge boost in qualified leads, and the integration with our CRM was seamless. If you need reliable, high-quality leads, Clean Jobs is the way to go.</p>
                        <div className="flex items-start justify-center gap-2">
                            <Image src={rev1} alt="" />
                            <div>
                                <h3 className="2xl:text-lg xl:text-lg text-black font-semibold">Artemisia Udinese</h3>
                                <p className="text-[#808080] 2xl:text-xs xl:text-xs">Marketing Specialist</p>
                            </div>
                        </div>
                    </div>
                    <div className="2xl:p-8 xl:p-6 p-4 2xl:space-y-8 xl:space-y-6 space-y-4 border border-[#D6D6D6]">
                        <div className="flex items-center justify-center">
                            {
                                Array.from({ length: 5 }, (_, i) => i + 1).map(i => (
                                    <FaStar key={i} color="#F5C74D" />
                                ))
                            }
                        </div>
                        <p className="text-[#808080] 2xl:text-lg xl:text-base text-center">Working with them has been a game-changer. Their web solutions helped us build an online presence that drives sales, and their telemarketing service added a personal touch that boosted customer engagement.</p>
                        <div className="flex items-start justify-center gap-2">
                            <Image src={rev2} alt="" />
                            <div>
                                <h3 className="2xl:text-lg xl:text-lg text-black font-semibold">Artemisia Udinese</h3>
                                <p className="text-[#808080] 2xl:text-xs xl:text-xs">Marketing Specialist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default page;