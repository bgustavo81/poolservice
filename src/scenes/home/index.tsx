import useMediaQuery from "../../hooks/useMediaQuery";
import { SelectedPage } from "../../shared/types";
import ActionButton from "../../shared/ActionButton";
import anotherPool from "@/assets/anotherPool.jpg";
import SponsorTime from "@/assets/SponsorTime.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

    return (
        <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
            {/* IMAGE AND MAIN HEADER */}
            <motion.div
            className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
            {/* MAIN HEADER */}
            <div className="z-10 mt-32 md:basis-3/5">
                {/* HEADINGS */}
                <motion.div
                className="md:-mt-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
                >
                <div className="relative">
                    <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1]">
                        <h1 className={`font-montserrat text-8xl py-4`}>Stay cool</h1>
                        <h1 className={`font-montserrat text-6xl`}>with Allgood.</h1>
                    </div>
                </div>
    
                <p className="mt-8 text-sm">
                    We are Atlanta's previum pool service company. From routine maintenance to new constructions
                    there is no job too big or too small. We will have you covered for all your Pool needs.
                </p>
                </motion.div>
    
                {/* ACTIONS */}
                <motion.div
                className="mt-8 flex items-center gap-8 pb-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
                >
                <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                </ActionButton>
                <AnchorLink
                    className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}
                >
                    <p>Learn More</p>
                </AnchorLink>
                </motion.div>
            </div>
    
            {/* IMAGE */}
            <div
                className="flex basis-3/5 justify-center md:z-10
                    md:ml-40 md:mt-16 md:justify-items-end"
            >
                {/* <img alt="home-pageGraphic" src={HomePageGraphic} /> */}
                <img alt="Pool" src={anotherPool} />
            </div>
            </motion.div>
    
            {/* SPONSORS */}
            {isAboveMediumScreens && (
            <div className="h-[150px] w-full bg-primary-100 py-10">
                <div className="mx-auto w-5/6">
                <div className="flex justify-between font-montserrat text-xl pt-4 ">
                    <div>Luxury Build</div>
                    <div>Afforable Pricing</div>
                    <div>Satifaction Delivered</div>
                </div>
                </div>
            </div>
            )}
        </section>
    );
};

export default Home;