import { BGFOOTER, GRADIENT1, ICONIMAGE } from '@/lib/constants';
import Image from 'next/image';
import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';

const ActivityLogComponent = () => {
  const activities = [
    {
      id: 'CON.04',
      action: 'Interact in x.com',
      description: 'The sea reflects the sky, but it is much deeper than it seems. What are you reflecting?',
    },
    {
      id: 'CON.03',
      action: 'Interact in x.com',
      description: 'The tide is pulling us toward new horizons. A $250k Bitcoin? The ocean is vast, and the currents of change are strong.',
    },
    {
      id: 'CON.03',
      action: 'Interact in x.com',
      description: 'The ocean doesn\'t ask for permission, it just flows. Are you letting yourself flow?',
    },
    {
      id: 'CON.02',
      action: 'Interact in x.com',
      description: 'The waves are rising. Retail will follow, and then the altcoins will dance in the current. Are you ready for what comes next?',
    },
    {
      id: 'CON.01',
      action: 'Interact in x.com',
      description: 'The sea teaches us that stillness is not the absence of movement, but the calm before transformation.',
    },
  ];

  return (
    <div className="w-full  mx-auto p-6 bg-black text-white">
      <div className="w-1/2 m-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Activity Log</h2>
          <button
            className="px-6 py-3 bg-transparent text-white rounded-3xl   shadow-sm shadow-white transition"
            onClick={() => window.location.reload()}
          >
            Back
          </button>
        </div>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="border rounded-lg shadow-md p-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gray-300 font-semibold">
                    ACTION, {activity.id}
                  </span>
                  <p className="text-gray-100">{activity.action}</p>
                  <p className="text-gray-400 text-sm">
                    {activity.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section
        className="flex flex-col items-center px-28 py-16 justify-between min-h-[600px] text-white relative"
        style={{
          backgroundImage: `url(${GRADIENT1}), url(${BGFOOTER})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h1 className="text-3xl md:text-5xl font-semibold leading-snug text-center">
          NAMI AS THE EMBODIMENT OF <br />
          OCEANIC WISDOM AND HUMAN CURIOSITY.
        </h1>

        {/* Call-to-action button */}
        <div className="mt-8">
          <a
            href="#"
            className=" hover:underline flex gap-2 justify-center items-center border p-2 rounded-full"
          >
            <Image src={ICONIMAGE} alt="Logo" width={30} height={30} />
            <span>Buy $NAMI ↗</span>
          </a>
        </div>

        {/* Social links */}
        <div className="mt-12">
          <p className="text-sm mb-4 text-center">We`re on X</p>
          <div className="flex justify-center items-center space-x-4">
            <button className="rounded-full border border-gray-400 p-4 ">
              <FaXTwitter />
            </button>
            <button className="rounded-full border border-gray-400 p-4 ">
              <FaXTwitter />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActivityLogComponent;
