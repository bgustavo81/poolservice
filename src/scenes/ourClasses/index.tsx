import { SelectedPage, ClassType } from "../../shared/types";
import backyardPool from "@/assets/backyardPool.jpg";
import anotherPool from "@/assets/anotherPool.jpg";
import indoorPool from "@/assets/indoorPool.jpg";
import poolWithLeaves from "@/assets/poolWithLeaves.jpg";
import rooftopPool from "@/assets/rooftopPool.jpg";
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
    {
    name: "Enjoy the Skyline",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: rooftopPool,
    },
    {
    name: "Dive Inside",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: anotherPool,
    },
    {
    name: "Another Great Pool",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: poolWithLeaves,
    },
    {
    name: "Hide in Paradise",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: indoorPool,
    },
    {
    name: "Oasis in the Backyard",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: backyardPool,
    },
];

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <section id="ourclasses" className="w-full bg-primary-100 py-40">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
          <motion.div
            className="mx-auto w-5/6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="md:w-3/5">
              <HText>OUR LATEST BUILDS</HText>
              <p className="py-5">
                Stay up to date with the latest completed builds. These builds are as good as come and will continue to come. 
              </p>
            </div>
          </motion.div>
          <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
            <ul className="w-[2800px] whitespace-nowrap">
              {classes.map((item: ClassType, index) => (
                <Class
                  key={`${item.name}-${index}`}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                />
              ))}
            </ul>
          </div>
        </motion.div>
      </section>
    );
};

export default OurClasses;