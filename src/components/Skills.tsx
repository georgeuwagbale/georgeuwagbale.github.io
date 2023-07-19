

import Java from "../assets/java.png"; 
import HTML from "../assets/html.png";
import JavaScript from "../assets/js.png";
import C from "../assets/c.png";
import CPP from "../assets/cpp.png";
import MySQL from "../assets/mysql.png";
import PostgreSQL from "../assets/postgresql.png";
import Python from "../assets/python.png";

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
                    <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
                    <p className="py-4">HTML</p>
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
                    <img className="w-20 mx-auto" src={JavaScript} alt="JavaScript icon" />
                    <p className="py-4">JAVASCRIPT</p>
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
                    <img className="w-20 mx-auto" src={Python} alt="Java icon" />
                    <p className="py-4">PYTHON</p>
                </div>
                
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Java} alt="Java icon" />
                    <p className="py-4">JAVA</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Skills