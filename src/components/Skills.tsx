

import HTML from "../assets/html.png";
import NestJs from '../assets/nestjs.png';
import React from '../assets/react.png'
import C from "../assets/c.png";
import CPP from "../assets/cpp.png";
import MySQL from "../assets/mysql.png";
import PostgreSQL from "../assets/postgresql.png";
import PyTorch from '../assets/pytorch.png';
import Spring from "../assets/spring-boot.png";


const Skills = () => {
  return (
    <div id='skills' className="w-full h-screen bg-[#0a192f] text-gray-300 py-4">

        {/* Container */}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        
            <div>
                <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">Skills</p>
                <p className="py-4">These are the technologies I've worked with</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">

                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Spring} alt="Java icon" />
                    <p className="py-4">SPRING BOOT</p>
                </div>

                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={PyTorch} alt="Java icon" />
                    <p className="py-4">PYTORCH</p>
                </div>

                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={NestJs} alt="Java icon" />
                    <p className="py-4">NESTJS</p>
                </div>

                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={React} alt="JavaScript icon" />
                    <p className="py-4">REACTJS</p>
                </div>

                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={MySQL} alt="MySQL icon" />
                    <p className="py-4">MYSQL</p>
                </div>

                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={PostgreSQL} alt="Java icon" />
                    <p className="py-4">POSTGRESQL</p>
                </div>

                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={C} alt="C icon" />
                    <p className="py-4">C</p>
                </div>

                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={CPP} alt="CPP icon" />
                    <p className="py-4">C++</p>
                </div>

                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
                    <p className="py-4">HTML</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills