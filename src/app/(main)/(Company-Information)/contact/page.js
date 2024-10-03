/* eslint-disable @next/next/no-img-element */
import React from 'react';
import contact from '@/../public/assets/Frame (6).svg'
import FormButton from '@/Shared/FormButton';
import Image from 'next/image';
import FaTick from '@/icons/FaTick';
import image from '@/../public/assets/image 36.png'
import FaAddress from '@/icons/FaAddress';
import FaPhone from '@/icons/FaPhone';
import FaEmail from '@/icons/FaEmail';
import facebook from '@/../public/assets/Facebook.svg'
import instagram from '@/../public/assets/instagram.svg'
import twitter from '@/../public/assets/twitter.svg'
import LinkedIn from '@/../public/assets/Linkedin.svg'
import ContactForm from '@/ui/ContactForm';
import ContactUserForm from '@/ui/ContactUserForm';
import SectionTitles from '@/ui/SectionTitles';
import fb from '../../../../../public/assets/Frame (8).svg'
import insta from '../../../../../public/assets/Frame (10).svg'
import linked from '../../../../../public/assets/Frame (11).svg'
import twitt from '../../../../../public/assets/Frame (12).svg'
import youtube from '../../../../../public/assets/Frame (13).svg'
import Map from '@/ui/Map';
import { FaArrowRight } from 'react-icons/fa';
import Footer from '@/Shared/Footer';



const page = () => {
    return (
        <div>
            <div className='2xl:px-40 xl:px-28 2xl:pt-52 xl:pt-40 bg-white'>
                <div className='grid grid-cols-2 gap-8 max-h-[680px]'>
                    <div className='h-full'>
                        <h1 className='2xl:text-5xl xl:text-4xl font-medium inter text-[#0D0D0D]'>Get in Touch</h1>
                        <ContactForm />
                    </div>
                    <div className='h-full'>
                        <Image
                            src={contact}
                            className="w-full max-h-[680px] object-contain"
                            alt="contact"
                        />
                    </div>
                </div>
                <div className='2xl:py-40 xl:py-28'>
                    <div className='grid grid-cols-2 2xl:pb-8 xl:pb-6 border-b-[#D6D6D6] border-b-[1px]'>
                        <h1 className='2xl:text-5xl xl:text-4xl font-medium inter text-[#0D0D0D]'>Taking Your Goals to <br /> New Heights</h1>
                        <p className="text-[#808080] xl:text-base 2xl:text-xl">Our mission is to elevate your goals with innovative strategies, cutting-edge solutions, and a relentless commitment to excellence. Whether you&apos;re expanding your brand or scaling operations, we&apos;re here to take you to new heights of success.</p>
                    </div>
                    <div className='2xl:mt-11 xl:mt-9 grid grid-cols-3 gap-6'>
                        <div className='flex flex-col justify-between'>
                            <div className='2xl:space-y-4 xl:space-y-3 2xl:p-6 xl:p-6 bg-[#F9F9FB]'>
                                <FaTick />
                                <h3 className='text-[#0D0D0D] 2xl:text-2xl xl:text-xl font-medium'>Strategic Growth</h3>
                                <p className='text-[#808080] 2xl:text-base xl:text-base'>Comprehensive plans tailored to your goals, ensuring sustainable growth</p>
                            </div>
                            <div className='2xl:space-y-4 xl:space-y-3 2xl:p-6 xl:p-6 bg-[#F9F9FB]'>
                                <FaTick />
                                <h3 className='text-[#0D0D0D] 2xl:text-2xl xl:text-xl font-medium'>Innovative Solutions</h3>
                                <p className='text-[#808080] 2xl:text-base xl:text-base'>Our forward-thinking approach empowers your business</p>
                            </div>
                        </div>
                        <div className='w-full'>
                            <Image src={image} className='w-full max-h-[420px]' alt='' />
                        </div>
                        <div className='flex flex-col justify-between'>
                            <div className='2xl:space-y-4 xl:space-y-3 2xl:p-6 xl:p-6 bg-[#F9F9FB]'>
                                <FaTick />
                                <h3 className='text-[#0D0D0D] 2xl:text-2xl xl:text-xl font-medium'>Expert Guidance</h3>
                                <p className='text-[#808080] 2xl:text-base xl:text-base'>With a team of seasoned professionals, we provide insights and expertise</p>
                            </div>
                            <div className='2xl:space-y-4 xl:space-y-3 2xl:p-6 xl:p-6 bg-[#F9F9FB]'>
                                <FaTick />
                                <h3 className='text-[#0D0D0D] 2xl:text-2xl xl:text-xl font-medium'>Results-Driven Focus</h3>
                                <p className='text-[#808080] 2xl:text-base xl:text-base'>We are committed to measurable outcomes, delivering results</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='2xl:pb-40 xl:pb-28'>
                    <div className='grid grid-cols-2 gap-8'>
                        <div>
                            <h1 className='2xl:text-5xl xl:text-4xl font-medium inter text-[#0D0D0D]'>Contact Us</h1>
                            <div className='2xl:mt-10 xl:mt-8 space-y-6 border-b-[1px] border-b-[#D6D6D6] pb-8'>
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
                            <div className='2xl:mt-10 xl:mt-10 flex items-center gap-6'>
                                <h2 className='text-[#0D0D0D] font-medium 2xl:text-2xl xl:text-2xl'>Follow Us :</h2>
                                <div className='flex items-center gap-[15px]'>
                                    <Image src={facebook} alt='' />
                                    <Image src={instagram} alt='' />
                                    <Image src={twitter} alt='' />
                                    <Image src={LinkedIn} alt='' />
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#F9F9FB] 2xl:p-10 xl:p-8 rounded-[30px]'>
                            <h1 className='text-[#0D0D0D] 2xl:text-4xl xl:text-3xl font-medium'>Leave Us Your Info.</h1>
                            {/* This form data will be used contact with user */}
                            <ContactUserForm />
                        </div>
                    </div>
                </div>
                <div className='2xl:pb-40 xl:pb-28'>
                    <SectionTitles heading={'Find Us on Social Media'} subHeading={"If you want to contact us in person or simply want to know more about us, here's some helpful information about us"} />
                    <div className='2xl:mt-12 xl:mt-10 grid grid-cols-5 gap-8'>
                        <Image src={fb} alt='fb' />
                        <Image src={insta} alt='insta' />
                        <Image src={linked} alt='linked' />
                        <Image src={twitt} alt='twitt' />
                        <Image src={youtube} alt='youtube' />
                    </div>
                </div>
                <div className='2xl:pb-40 xl:pb-28'>
                    <p className='text-center text-primary mb-2 font-medium text-sm'>Location</p>
                    <SectionTitles heading={'Discover Our Location'} subHeading={"Whether you're visiting us in person or simply want to know where we're based, here's some helpful information about our location"} />
                    <div className='2xl:mt-12 xl:mt-10 grid grid-cols-2 gap-8'>
                        <div className='flex items-start gap-4 2xl:p-12 xl:p-10 bg-[#F9F9FB] rounded-[30px]'>
                            <FaEmail />
                            <div className='space-y-[16px]'>
                                <h1 className='text-xl font-medium text-[#0D0D0D]'>Send Us an Email</h1>
                                <p className='text-[#808080] text-base'>We&apos;d love to hear from you! Please feel free to reach out to us via mail.</p>
                                <button className='btn bg-primary text-white rounded-lg'>info@wdesignkit.com</button>
                            </div>
                        </div>
                        <div className='flex items-start gap-4 2xl:p-12 xl:p-10 bg-[#F9F9FB] rounded-[30px]'>
                            <FaPhone />
                            <div className='space-y-[16px]'>
                                <h1 className='text-xl font-medium text-[#0D0D0D]'>Give Us a Call</h1>
                                <p className='text-[#808080] text-base'>We&apos;re here to help! Don&apos;t hesitate to reach out to us by phone.</p>
                                <button className='btn bg-primary text-white rounded-lg'>+1 800-525-54-589</button>
                            </div>
                        </div>
                        <div className='flex items-start gap-4 2xl:p-12 xl:p-10 bg-[#F9F9FB] rounded-[30px]'>
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
                <div className='2xl:pb-40 xl:pb-28'>
                    <SectionTitles heading={'Frequently asked questions.'} subHeading={'Lorem ipsum dolor sit amet consectetur. Orci malesuada mi et mi pellentesque tincidunt at mollis facilisis. Nisl eu blandit nunc parturient adipiscing commodo.'} />
                    <div className='w-3/4 mx-auto mt-10 space-y-8'>
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