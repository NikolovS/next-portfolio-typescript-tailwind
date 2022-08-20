// import {
//   GetServerSideProps,
//   GetStaticPaths,
//   GetStaticPropsContext,
// } from 'next';

import { fadeInUp, routeAnimation, stagger } from '../animations';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data';
import { motion } from 'framer-motion';
function index() {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1 "
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h6 className="my-3 text-base font-medium">
        I am currently working on Mobile application for connecting Healthcare
        workers directly with Healthcare organisations without the need to work
        with an agency. Curis offers intuitive design, smart search, automated
        job notifications, and easy to manage invoicing. Also it has web admin
        panel to manage the jobs.
      </h6>
      <motion.div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        <h4 className="my-4 text-xl font-bold tracking-wide">What I offer</h4>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default index;

// every time when we refresh the page we execute this function to get the props
//we use thme for e-commerce site, social media etc.. to rebuild the page with correct data
// export const getServerSideProps = async (context: GetServerSideProps) => {
//   //calculation

//   const res = await fetch('http://localhost:3000/api/services');
//   const data = await res.json();

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
//we use getStaticProps in production only by build time-also the data that is coming is almost static,
//example : post, faq page, blog etc.
// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   //calculation

//   const res = await fetch('http://localhost:3000/api/services');
//   const data = await res.json();

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
