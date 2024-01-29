import { FaInstagram } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation()
    return (
        <footer className='bg-primary text-white py-10'>
            <div className="container mx-auto px-4">
                <div className="">
                    <div>
                        <ul className="mt-4 flex flex-col gap-y-2">
                            <li>
                                <a target="_blank"
                                    className=""
                                    href={"https://www.undp.org/turkmenistan/press-releases/undp-and-partners-enhance-national-capacity-providing-community-based-mental-health-and-psychosocial-support-vulnerable"} >
                                    {t('footerText')}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid grid-col-1 mt-12 gap-y-4 sm:grid-cols-2">
                    <div className="flex items-center gap-x-4">
                        <a target="_blank" href="https://www.facebook.com/undptm/">
                            <LuFacebook size={26} />
                        </a>
                        <a target="_blank" href="https://www.instagram.com/undp_turkmenistan">
                            <FaInstagram size={25} />
                        </a>
                        <a target="_blank" href="https://twitter.com/undptm">
                            <FaXTwitter size={23} />
                        </a>
                        <a target="_blank" href="https://www.youtube.com/@undpinturkmenistan6160">
                            <AiOutlineYoutube size={28} />
                        </a>
                    </div>
                    <div className="sm:text-right">
                        <p className="text-white/60">© 2024, All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer