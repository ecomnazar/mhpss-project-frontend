import { Link } from "react-router-dom"
import { FaInstagram } from "react-icons/fa6";
import { TbBrandLinkedin } from "react-icons/tb";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className='bg-primary text-white py-10'>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-12">
                    <div>
                        <h4 className="text-white/60">MHPSS</h4>
                        <ul className="mt-4 flex flex-col gap-y-2">
                            <li><Link to={""} >About us</Link></li>
                            <li><Link to={""} >Confidentiality</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white/60">EMAIL</h4>
                        <ul className="mt-4 flex flex-col gap-y-2">
                            <li><a href="mailto:example@gmail.com">example@gmail.com</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white/60">PHONE NUMBERS</h4>
                        <ul className="mt-4 flex flex-col gap-y-2">
                            <li><a href="mailto:example@gmail.com">+99361234355</a></li>
                            <li><a href="mailto:example@gmail.com">+99365234355</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white/60">ADDRESS</h4>
                        <ul className="mt-4 flex flex-col gap-y-2">
                            <li><a href="mailto:example@gmail.com">Turkmenistan, Ashgabat</a></li>
                        </ul>
                    </div>
                </div>
                <div className="grid grid-col-1 mt-12 gap-y-4 sm:grid-cols-2">
                    <div className="flex items-center gap-x-4 sm:www">
                        <button>
                            <FaInstagram size={25} />
                        </button>
                        <button>
                            <TbBrandLinkedin size={28} />
                        </button>
                        <button>
                            <AiOutlineYoutube size={28} />
                        </button>
                        <button>
                            <img src="/images/imo-icon.svg" />
                        </button>
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