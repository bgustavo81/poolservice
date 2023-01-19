import ActionButton from "../../shared/ActionButton";
import HText from "../../shared/HText";
import { BenefitType, SelectedPage } from "../../shared/types";
import {
    WrenchScrewdriverIcon,
    SwatchIcon,
    MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import rooftopPool from "@/assets/rooftopPool.jpg";
import Benefit from "./Benefit";


const benefits: Array<BenefitType> = [
    {
      icon: <WrenchScrewdriverIcon className="h-6 w-6" />,
      title: "Higly skilled Craftman",
      description:
        "Our higly skilled craftmen take pride in their work. In conjuction with our engineering team we can accomplish your vision.",
    },
    {
      icon: <SwatchIcon className="h-6 w-6" />,
      title: "Diverse pool constructions",
      description:
        "With years of experience in above ground, in ground, and custom fabrications we have a catalog of completed projects to inspire your build",
    },
    {
      icon: <MagnifyingGlassCircleIcon className="h-6 w-6" />,
      title: "Quality assured",
      description:
        "With our highly trained team we will ensure your pool is built with the latest construction methods and practices to ensure a long lasting product.",
    },
];

const container = {
hidden: {},
visible: {
    transition: { staggerChildren: 0.2 },
},
};

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/* HEADER */}
            <motion.div
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
            }}
            >
            <HText>BUILD YOUR VISION.</HText>
            <p className="my-5 text-sm">
                If you can envision it, we can build it. With our team of engineers and highly
                skilled craftsmen, there is no job too complicated. Having constructed over 100+ pools
                in the greater Atlanta area we will find the correct pool for your needs and desires.
            </p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div
            className="mt-5 items-center justify-between gap-8 md:flex"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
            >
            {benefits.map((benefit: BenefitType) => (
                <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
                />
            ))}
            </motion.div>

            {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
            {/* GRAPHIC */}
            <img
                className="mx-auto w-1/2 pb-8"
                alt="rooftop pool"
                src={rooftopPool}
            />

            {/* DESCRIPTION */}
            <div>
                {/* TITLE */}
                <div className="relative">
                <div className="before:absolute before:-top-20 before:-left-20 before:z-[1]">
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    >
                    <HText>
                        HUNDREDS OF CLIENTS ARE GETTING {" "}
                        <span className="text-primary-500">COOL</span>
                    </HText>
                    </motion.div>
                </div>
                </div>

                {/* DESCRIPT */}
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                }}
                >
                <p className="my-5">
                    "I have nothing but prasises for Allgood Pool services. I called January 2022
                    for a quote regarding a pool build many other contractors turned down due to
                    the complexity of the project. From day one, Allgood came assessed the project and 
                    outlined a feasible plan and time line for the project. For there we moved to the 
                    planning stages and the rest was history. By May 2022, the pool was completed and 
                    ready usage. I am happy to use Allgood."
                </p>
                <p className="mb-5">
                    "John Mcrea - Altanta, GA"
                </p>
                </motion.div>

                {/* BUTTON */}
                <div className="relative mt-16">
                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1]">
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Request Info
                    </ActionButton>
                </div>
                </div>
            </div>
            </div>
        </motion.div>
        </section>
    );
};

export default Benefits;
