/* eslint-disable @next/next/no-img-element */
import React from 'react';
import contact from '@/../public/assets/Frame (6).svg'
import Image from 'next/image';
import FaTick from '@/icons/FaTick';
import image from '@/../public/assets/image 36.png'
import FaAddress from '@/icons/FaAddress';
import FaPhone from '@/icons/FaPhone';
import FaEmail from '@/icons/FaEmail';
import facebook from '@/../public/assets/Facebook.svg'
import LinkedIn from '@/../public/assets/Linkedin.svg'
import ContactForm from '@/ui/ContactForm';
import ContactUserForm from '@/ui/ContactUserForm';
import SectionTitles from '@/ui/SectionTitles';
import fb from '@/../public/assets/Frame (8).svg'
import insta from '@/../public/assets/Frame (10).svg'
import linked from '@/../public/assets/Frame (11).svg'
import twitt from '@/../public/assets/Frame (12).svg'
import youtube from '@/../public/assets/Frame (13).svg'
import Map from '@/ui/Map';
import Footer from '@/Shared/Footer';

const page = () => {
    return (
        <div>
            <div className='2xl:px-40 xl:px-28 2xl:pt-52 xl:pt-40 pt-28 px-6 bg-white'>
                <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-8 max-h-[680px]'>
                    <div className='h-full'>
                        <h1 className='2xl:text-5xl xl:text-4xl text-2xl font-medium inter text-[#0D0D0D]'>Get in Touch</h1>
                        <ContactForm />
                    </div>
                    <div className='h-full 2xl:block xl:block hidden'>
                        <Image
                            src={contact}
                            className="w-full max-h-[680px] object-contain"
                            alt="contact"
                        />
                    </div>
                </div>
                <div className='2xl:py-40 xl:py-28 py-16'>
                    <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 2xl:pb-8 xl:pb-6 pb-4 border-b-[#D6D6D6] border-b-[1px]'>
                        <h1 className='2xl:text-5xl xl:text-4xl text-2xl font-medium inter text-[#0D0D0D]'>Taking Your Goals to <br /> New Heights</h1>
                        <p className="text-[#808080] xl:text-base 2xl:text-xl text-sm 2xl:mt-0 xl:mt-0 mt-4">Our mission is to elevate your goals with innovative strategies, cutting-edge solutions, and a relentless commitment to excellence. Whether you&apos;re expanding your brand or scaling operations, we&apos;re here to take you to new heights of success.</p>
                    </div>
                    <div className='2xl:mt-11 xl:mt-9 mt-5 grid 2xl:grid-cols-3 xl:grid-cols-3 grid-cols-1 gap-6'>
                        <div className='flex flex-col justify-between'>
                            <div className='2xl:space-y-4 xl:space-y-3 space-y-2 2xl:p-6 xl:p-6 p-4 bg-[#F9F9FB]'>
                                <FaTick />
                                <h3 className='text-[#0D0D0D] 2xl:text-2xl xl:text-xl text-lg font-medium'>Strategic Growth</h3>
                                <p className='text-[#808080] 2xl:text-base xl:text-base text-sm'>Comprehensive plans tailored to your goals, ensuring sustainable growth</p>
                            </div>
                            <div className='2xl:space-y-4 xl:space-y-3 space-y-2 2xl:p-6 xl:p-6 p-4 bg-[#F9F9FB] 2xl:mt-0 xl:mt-0 mt-6'>
                                <FaTick />
                                <h3 className='text-[#0D0D0D] 2xl:text-2xl xl:text-xl text-lg font-medium'>Innovative Solutions</h3>
                                <p className='text-[#808080] 2xl:text-base xl:text-base text-sm'>Our forward-thinking approach empowers your business</p>
                            </div>
                        </div>
                        <div className='w-full'>
                            <Image src={image} className='w-full max-h-[420px]' alt='' />
                        </div>
                        <div className='flex flex-col justify-between'>
                            <div className='2xl:space-y-4 xl:space-y-3 space-y-2 2xl:p-6 xl:p-6 p-4 bg-[#F9F9FB]'>
                                <FaTick />
                                <h3 className='text-[#0D0D0D] 2xl:text-2xl xl:text-xl text-lg font-medium'>Expert Guidance</h3>
                                <p className='text-[#808080] 2xl:text-base xl:text-base text-sm'>With a team of seasoned professionals, we provide insights and expertise</p>
                            </div>
                            <div className='2xl:space-y-4 xl:space-y-3 space-y-2 2xl:p-6 xl:p-6 p-4 bg-[#F9F9FB] 2xl:mt-0 xl:mt-0 mt-6'>
                                <FaTick />
                                <h3 className='text-[#0D0D0D] 2xl:text-2xl xl:text-xl text-lg font-medium'>Results-Driven Focus</h3>
                                <p className='text-[#808080] 2xl:text-base xl:text-base text-sm'>We are committed to measurable outcomes, delivering results</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='2xl:pb-40 xl:pb-28 pb-16'>
                    <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-8'>
                        <div>
                            <h1 className='2xl:text-5xl xl:text-4xl text-2xl font-medium inter text-[#0D0D0D]'>Contact Us</h1>
                            <div className='2xl:mt-10 xl:mt-8 mt-6 space-y-6 border-b-[1px] border-b-[#D6D6D6] pb-8'>
                                <div className='flex items-start gap-4'>
                                    <FaAddress />
                                    <div>
                                        <h1 className='text-xl font-medium text-[#0D0D0D]'>Address</h1>
                                        <p className='text-[#808080] text-base'>403, Port Washington Road, Canada.</p>
                                    </div>
                                </div>
                                <div className='flex items-start gap-4'>
                                    <FaPhone />
                                    <div>
                                        <h1 className='text-xl font-medium text-[#0D0D0D]'>Contact  Details</h1>
                                        <p className='text-[#808080] text-base'> +1 800-525-54-589</p>
                                    </div>
                                </div>
                                <div className='flex items-start gap-4'>
                                    <FaEmail />
                                    <div>
                                        <h1 className='text-xl font-medium text-[#0D0D0D]'>Email Us</h1>
                                        <p className='text-[#808080] text-base'>info@wdesignkit.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className='2xl:mt-10 xl:mt-10 mt-8 flex items-center gap-6'>
                                <h2 className='text-[#0D0D0D] font-medium 2xl:text-2xl xl:text-2xl text-xl'>Follow Us :</h2>
                                <div className='flex items-center gap-[15px]'>
                                    <Image src={facebook} alt='' />
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.611328" y="1" width="34" height="34" rx="17" stroke="#0D0D0D" />
                                        <path d="M23.617 26.6724C24.8471 26.1972 25.8195 25.2247 26.2948 23.9947C26.5198 23.412 26.6772 22.7472 26.72 21.7747C26.7301 21.5469 26.738 21.3557 26.7453 21.1639V14.6666C26.7402 14.5311 26.7346 14.3899 26.7273 14.2313C26.6846 13.2588 26.5271 12.5907 26.3021 12.0113C26.0698 11.3966 25.7121 10.846 25.2441 10.3887C24.7863 9.92357 24.2323 9.56249 23.6243 9.33414C23.0416 9.10916 22.3768 8.95168 21.4044 8.90893C20.4246 8.86225 20.1136 8.85156 17.6293 8.85156C15.145 8.85156 14.8334 8.86225 13.8576 8.90499C12.8851 8.94774 12.2169 9.10522 11.6376 9.3302C11.0229 9.56249 10.4723 9.9202 10.0144 10.3887C9.54986 10.8465 9.18878 11.4005 8.95987 12.008C8.73489 12.5907 8.57741 13.2555 8.53466 14.2279C8.48798 15.2077 8.47729 15.5187 8.47729 18.0036C8.47729 20.4884 8.48798 20.7994 8.53073 21.7753C8.57347 22.7477 8.73095 23.4165 8.95649 23.9952C9.18878 24.61 9.54986 25.1606 10.0144 25.6184C10.4723 26.083 11.0263 26.4446 11.6343 26.673C12.2169 26.898 12.8817 27.0554 13.8542 27.0982C14.83 27.1415 15.1411 27.1522 17.6259 27.1522C20.1108 27.1522 20.4212 27.1415 21.3976 27.0982C22.3701 27.0554 23.0377 26.8974 23.617 26.6724ZM17.6327 25.5071C15.1906 25.5071 14.8975 25.4964 13.9358 25.4536C13.042 25.4142 12.5595 25.2641 12.2378 25.1392C11.8412 24.9924 11.4802 24.7601 11.1866 24.4564C10.8828 24.1594 10.65 23.8023 10.5038 23.4052C10.3789 23.0835 10.2287 22.597 10.1894 21.7072C10.1466 20.7421 10.1359 20.4524 10.1359 18.0103C10.1359 15.5682 10.1466 15.2752 10.1894 14.314C10.2287 13.4203 10.3789 12.9377 10.5038 12.616C10.6506 12.2189 10.8828 11.8578 11.1905 11.5648C11.4869 11.261 11.8446 11.0288 12.2411 10.882C12.5628 10.7571 13.0494 10.6069 13.9391 10.5676C14.9043 10.5248 15.1939 10.5141 17.6355 10.5141C20.077 10.5141 20.3706 10.5248 21.3324 10.5676C22.2261 10.6069 22.7087 10.7571 23.0304 10.882C23.4269 11.0288 23.788 11.261 24.081 11.5648C24.3847 11.8617 24.6176 12.2189 24.7638 12.616C24.8887 12.9377 25.0389 13.4236 25.0782 14.314C25.121 15.2791 25.1317 15.5688 25.1317 18.0103C25.1317 20.4519 25.121 20.7381 25.0782 21.7033C25.0389 22.597 24.8887 23.0796 24.7638 23.4013C24.4562 24.1988 23.8234 24.8316 23.0265 25.1387C22.7047 25.2635 22.2188 25.4137 21.3285 25.4531C20.3633 25.4958 20.0742 25.5071 17.6327 25.5071Z" fill="#0D0D0D" />
                                        <path d="M17.6295 13.3016C15.0338 13.3016 12.9281 15.4074 12.9281 18.003C12.9281 20.5987 15.0338 22.7045 17.6295 22.7045C20.2251 22.7045 22.3303 20.5987 22.3303 18.003C22.3303 15.4074 20.2246 13.3016 17.6295 13.3016ZM17.6295 21.052C15.9455 21.052 14.5799 19.6864 14.5799 18.0025C14.5799 16.3185 15.9455 14.9529 17.6295 14.9529C19.3134 14.9529 20.679 16.3185 20.679 18.0025C20.679 19.6864 19.3134 21.052 17.6295 21.052Z" fill="#0D0D0D" />
                                        <path d="M23.6126 13.1157C23.6126 12.5094 23.1211 12.0184 22.5147 12.0184C21.9084 12.0184 21.4174 12.51 21.4174 13.1157C21.4174 13.7215 21.909 14.2131 22.5147 14.2131C23.1205 14.2131 23.6126 13.7221 23.6126 13.1157Z" fill="#0D0D0D" />
                                    </svg>

                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.611328" y="1" width="34" height="34" rx="17" stroke="#0D0D0D" />
                                        <path d="M13.5434 25.1264V15.5078H10.3492V25.1264H13.5434ZM11.9469 14.1948C13.0606 14.1948 13.7539 13.4562 13.7539 12.5331C13.7331 11.5891 13.0606 10.8711 11.9681 10.8711C10.8749 10.8711 10.1609 11.5891 10.1609 12.5331C10.1609 13.4561 10.854 14.1947 11.926 14.1947L11.9469 14.1948ZM15.3114 25.1264H18.5054V19.7555C18.5054 19.4684 18.5263 19.1806 18.6107 18.9755C18.8415 18.4009 19.367 17.8061 20.2496 17.8061C21.4051 17.8061 21.8677 18.6881 21.8677 19.9812V25.1264H25.0616V19.6114C25.0616 16.6571 23.486 15.2823 21.3845 15.2823C19.6615 15.2823 18.9048 16.2461 18.4844 16.9026H18.5057V15.5081H15.3116C15.3533 16.4105 15.3114 25.1264 15.3114 25.1264Z" fill="#0D0D0D" />
                                    </svg>
                                    <Image src={LinkedIn} alt='' />
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#F9F9FB] 2xl:p-10 xl:p-8 p-6 rounded-[30px]'>
                            <h1 className='text-[#0D0D0D] 2xl:text-4xl xl:text-3xl text-2xl font-medium'>Leave Us Your Info.</h1>
                            {/* This form data will be used contact with user */}
                            <ContactUserForm />
                        </div>
                    </div>
                </div>
                <div className='2xl:pb-40 xl:pb-28 pb-16'>
                    <SectionTitles heading={'Find Us on Social Media'} subHeading={"If you want to contact us in person or simply want to know more about us, here's some helpful information about us"} />
                    <div className='2xl:mt-12 xl:mt-10 mt-8 grid 2xl:grid-cols-5 xl:grid-cols-5 grid-cols-2 2xl:gap-8 xl:gap-8 gap-6'>
                        <Image src={fb} alt='fb' />
                        <Image src={insta} alt='insta' />
                        <Image src={linked} alt='linked' />
                        <Image src={twitt} alt='twitt' />
                        <Image src={youtube} alt='youtube' />
                    </div>
                </div>
                <div className='2xl:pb-40 xl:pb-28 pb-16'>
                    <p className='text-center text-primary mb-2 font-medium text-sm'>Location</p>
                    <SectionTitles heading={'Discover Our Location'} subHeading={"Whether you're visiting us in person or simply want to know where we're based, here's some helpful information about our location"} />
                    <div className='2xl:mt-12 xl:mt-10 mt-8 grid 2xl:grid-cols-2 xl:grid-cols-2 2xl:grid-rows-2 xl:grid-rows-2 grid-rows-4 grid-cols-1 gap-8'>
                        <div className='flex items-start gap-4 2xl:p-12 xl:p-10 p-8 bg-[#F9F9FB] rounded-[30px]'>
                            <FaEmail />
                            <div className='space-y-[16px]'>
                                <h1 className='text-xl font-medium text-[#0D0D0D]'>Send Us an Email</h1>
                                <p className='text-[#808080] text-base'>We&apos;d love to hear from you! Please feel free to reach out to us via mail.</p>
                                <button className='btn bg-primary text-white rounded-lg'>info@wdesignkit.com</button>
                            </div>
                        </div>
                        <div className='flex items-start gap-4 2xl:p-12 xl:p-10 p-8 bg-[#F9F9FB] rounded-[30px]'>
                            <FaPhone />
                            <div className='space-y-[16px]'>
                                <h1 className='text-xl font-medium text-[#0D0D0D]'>Give Us a Call</h1>
                                <p className='text-[#808080] text-base'>We&apos;re here to help! Don&apos;t hesitate to reach out to us by phone.</p>
                                <button className='btn bg-primary text-white rounded-lg'>+1 800-525-54-589</button>
                            </div>
                        </div>
                        <div className='flex items-start gap-4 2xl:p-12 xl:p-10 p-8 bg-[#F9F9FB] rounded-[30px]'>
                            <FaAddress />
                            <div className='space-y-[16px]'>
                                <h1 className='text-xl font-medium text-[#0D0D0D]'>Address</h1>
                                <p className='text-[#808080] text-base'>This text provides essential information about the address.</p>
                                <button className='btn bg-primary text-white rounded-lg'>Washington Road, Canada.</button>
                            </div>
                        </div>
                        <div className='h-full'>
                            <Map />
                        </div>
                    </div>
                </div>
                <div className='2xl:pb-40 xl:pb-28 pb-16'>
                    <SectionTitles heading={'Frequently asked questions.'} subHeading={'Lorem ipsum dolor sit amet consectetur. Orci malesuada mi et mi pellentesque tincidunt at mollis facilisis. Nisl eu blandit nunc parturient adipiscing commodo.'} />
                    <div className='2xl:w-3/4 xl:w-3/4 w-full mx-auto mt-10 space-y-8'>
                        <div className="collapse collapse-plus bg-white border border-[#D6D6D6]">
                            <input type="checkbox" id='1' name="my-accordion-1" defaultChecked />
                            <div className="collapse-title text-xl font-medium">The standard Lorem Ipsum passage.</div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-white border border-[#D6D6D6]">
                            <input type="checkbox" id='2' name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">The standard Lorem Ipsum passage.</div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-white border border-[#D6D6D6]">
                            <input type="checkbox" id='3' name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">The standard Lorem Ipsum passage.</div>
                            <div className="collapse-content">
                                <p>hello</p>
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