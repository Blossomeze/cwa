import Image from "next/image";
import React from "react";

const Tools = () => {
  return (
    <div className="py-12 px-[5%]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Get started with AWS */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Start your AWS cloud journey</h2>
          <p className="text-gray-600 mb-6">
            Access hands-on labs, code samples, and curated learning paths designed to boost your skills with AWS.
          </p>
          <a
            href="#"
            className="py-2 px-5 bg-[#121212] text-white border-2 border-black dark:border-white rounded-[6px] hover:bg-[#0059bf] transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
          >
            Get Started &rarr;
          </a>
        </div>

        {/* Browse AWS learning tools */}
        <div>
          <div>
          <Image width={50} height={50}  src="/community.gif" alt="Community illustration" className="w-[50px]" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Join our community of learners</h3>
          <p className="text-gray-500 mb-4">
            Discover practice exams, cloud simulators, and certification prep tools to master AWS faster.
          </p>
          <a href="#" className="text-[#0059bf] font-medium hover:underline">
            Join our community &rarr;
          </a>
        </div>

        {/* Become a certified cloud expert */}
        <div>
          <div>
          <Image height={50} width={50} src="/aws.gif" alt="Community illustration" className="w-[50px]" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Become AWS certified</h3>
          <p className="text-gray-500 mb-4">
            Join thousands of professionals and earn globally recognized AWS certifications with our guided programs.
          </p>
          <a href="#" className="text-[#0059bf] font-medium hover:underline">
            Learn about certifications &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tools;
