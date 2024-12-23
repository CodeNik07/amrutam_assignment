import React from "react";

export default function Approach() {
  return (
    <div className="flex flex-col h-fit lg:h-screen py-12 gap-10 px-4">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-3xl font-semibold font-sans border-b-4 lg:border-green-500 w-fit text-center">
          {" "}
          Our Ayurvedic <br className="lg:hidden"/> Approach{" "}
        </h1>
        <p className="w-4/5 lg:w-1/2 text-center px-2">
          At Amrutam we follow a unique and personalized approach to healing.
          Our expert practitioners begin each treatment process by conducting a
          thorough analysis of the patient’s body type, medical history, and
          current health conditions.
        </p>
      </div>
      <div className="flex justify-between overflow-x-auto w-full px-6 gap-4">
        <div className="w-60 flex-shrink-0 lg:w-64 h-72 shadow-md border-t-4 border-green-500 rounded-2xl bg-[#fff7e2] flex flex-col justify-center items-center gap-8">
          <div>
            <div className="bg-[#7d9674] w-16 h-16 rounded-full flex justify-center items-center">
              <p className="text-white font-bold text-3xl">1</p>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-xl font-semibold mb-2">Make Appoinment</h1>
            <p className="text-sm px-6">
              You must make an appointment in advance, to choose the service and
              date.
            </p>
          </div>
        </div>
        <div className="w-60 flex-shrink-0 lg:w-64 h-72 shadow-md border-t-4 border-green-500 rounded-2xl bg-[#fff7e2] flex flex-col justify-center items-center gap-8">
          <div>
            <div className="bg-[#7d9674] w-16 h-16 rounded-full flex justify-center items-center">
              <p className="text-white font-bold text-3xl">2</p>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-xl font-semibold mb-2">Consultation</h1>
            <p className="text-sm px-6">
              The next stage involves a thorough consultation with an Ayurveda
              practitioner.
            </p>
          </div>
        </div>
        <div className="w-60 flex-shrink-0 lg:w-64 h-72 shadow-md border-t-4 border-green-500 rounded-2xl bg-[#fff7e2] flex flex-col justify-center items-center gap-8">
          <div>
            <div className="bg-[#7d9674] w-16 h-16 rounded-full flex justify-center items-center">
              <p className="text-white font-bold text-3xl">3</p>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-xl font-semibold mb-2">Treatment Planning</h1>
            <p className="text-sm px-6">
              The Ayurvedic practitioner creates a personalized treatment plan
              for you
            </p>
          </div>
        </div>
        <div className="w-60 flex-shrink-0 lg:w-64 h-72 shadow-md border-t-4 border-green-500 rounded-2xl bg-[#fff7e2] flex flex-col justify-center items-center gap-8">
          <div>
            <div className="bg-[#7d9674] w-16 h-16 rounded-full flex justify-center items-center">
              <p className="text-white font-bold text-3xl">4</p>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-xl font-semibold mb-2">Maintenance</h1>
            <p className="text-sm px-6">
              These visits allow for assessment of progress, adjustments to the
              treatment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
