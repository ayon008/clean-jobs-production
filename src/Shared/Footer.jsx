import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "./Logo";
import ButtonSecondary from "@/ui/ButtonSecondary";
import SubscribeEmail from "@/ui/SubscribeEmail";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[#EBF1EC] text-base-content md:px-10 px-6 py-16 justify-between max-w-screen-2xl mx-auto">
            <div className="flex md:flex-row flex-col md:justify-between md:items-start justify-center md:gap-0 gap-10">
                <Logo />
                <div className="flex md:flex-row flex-col items-center md:gap-7 gap-4">
                    <p className="text-base font-medium inter">Ready to get started?</p>
                    <ButtonSecondary label={'Get Started'} href={'/register'} />
                </div>
            </div>
            <div className="flex md:flex-row flex-col md:justify-between md:items-end justify-center">
                <aside>
                    <div className="my-20">
                        <h3 className="text-2xl inter font-bold">
                            Subscribe to our <br />
                            newsletter
                        </h3>
                        <SubscribeEmail />
                    </div>
                    <div className="flex items-center gap-14">
                        <Link href={'/term&condition'} className="font-medium text-base inter">Terms & Conditions</Link>
                        <Link href={'/privacy'} className="font-medium text-base inter">Privacy Policy</Link>
                    </div>
                </aside>
                <aside className="w-fit mx-auto md:mx-0 md:mt-0 mt-10">
                    <div className="flex items-center gap-10">
                        <a href="/facebook">
                            <FaFacebookF color="#246532" size={'1.5rem'} />
                        </a>
                        <a href="/twitter">
                            <FaTwitter color="#246532" size={'1.5rem'} />
                        </a>
                        <a href="/instagram">
                            <FaInstagram color="#246532" size={'1.5rem'} />
                        </a>
                    </div>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;