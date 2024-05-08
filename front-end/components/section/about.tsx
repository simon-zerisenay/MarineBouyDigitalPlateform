import React from 'react';

const BuoyDescription = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md dark:bg-slate-800 dark:text-gray-100">
      <h2 className="text-3xl font-semibold mb-6 text-center">Continuous Monitoring System</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
        <div className="flex item-start bg-white rounded-lg p-6 shadow-md dark:bg-slate-900 dark:text-gray-100">
          <div>
            <p className="text-xl font-medium mb-4 ">Unlock the Power of Real-Time Ocean Insights</p>
            <p className="text-lg ">Our innovative buoy system harnesses cutting-edge technology to deliver real-time data on oceanic conditions like never before. Seamlessly integrated sensors provide continuous monitoring, ensuring early detection of any changes in water parameters.</p>
          </div>
        </div>
        <div className="flex item-start bg-white rounded-lg p-6 shadow-md dark:bg-slate-900 dark:text-gray-100">
          <div>
            <p className="text-xl font-medium mb-4">Discover a Dynamic Database</p>
            <p className="text-lg  ">Gain access to a comprehensive and up-to-date database of oceanographic conditions in your study area. Our system compiles invaluable data, empowering you with the knowledge needed to make informed decisions and drive impactful research.</p>
          </div>
        </div>
        <div className="flex item-start bg-white rounded-lg p-6 shadow-md dark:bg-slate-900 dark:text-gray-100">
          <div>
            <p className="text-xl font-medium mb-4">Stay Ahead of Contaminants</p>
            <p className="text-lg ">With our advanced monitoring capabilities, you can identify and track the presence of contaminants such as oil and blue-green algae. Take proactive measures to safeguard marine ecosystems and protect coastal communities from potential threats.</p>
          </div>
        </div>
        <div className="flex item-start bg-white rounded-lg p-6 shadow-md dark:bg-slate-900 dark:text-gray-100">
          <div>
            <p className="text-xl font-medium mb-4">Fuel Climate Studies with Precision Data</p>
            <p className="text-lg  ">Contribute to climate variability and climate change studies with accurate and reliable information. Our buoy system provides essential insights into environmental patterns, aiding scientists and researchers in understanding the complex dynamics of our planet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuoyDescription;
