import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>I am a recent Computer Science graduate with a strong interest in cybersecurity, including penetration testing, vulnerability assessment, and security operations, supported by hands-on experience through a VAPT internship at Torsecure Cyber LLP, my current cybersecurity internship at Redteam Hacker Academy, active participation in practical labs and CTFs, and ongoing preparation for the CEH certification, while also being keenly interested in software development and software engineering.
              <br />
              Beyond coding and proffession oriented studies, I'm also into photography📸 and football⚽, It's not just a hobby; I see it as a way to capture moments🌟📷 and maintain my physical health, my lifelong passion as well.</p>

            <ButtonLink
              url='https://drive.google.com/file/d/1sHh77tpUVOcnwDV9kpWU2qPFykLyeB7B/view'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;