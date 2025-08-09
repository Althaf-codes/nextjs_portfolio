'use client'

import React, { useEffect, useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

interface Step {
  title: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  { title: "Step 1", icon: <FaCheckCircle /> },
  { title: "Step 2", icon: <FaCheckCircle /> },
  { title: "Step 3", icon: <FaCheckCircle /> },
];

const ScrollStepper: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const stepperRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0); // Track the scroll progress

  const handleScroll = () => {
    if (stepperRef.current) {
      const { top, height } = stepperRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollDistance = Math.max(0, viewportHeight - top);
      const scrollPercentage = Math.min(1, scrollDistance / height); // Cap at 100%
      setScrollProgress(scrollPercentage * 100); // Convert to percentage

      // Determine which step is currently visible
      const stepIndex = Math.floor(scrollPercentage * steps.length);
      setCurrentStep(stepIndex);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen w-64 mx-auto">
      <div ref={stepperRef} className="h-full flex flex-col items-center">
        <div className="relative h-full w-1 bg-gray-300">
          {/* The animated line that fills based on scroll */}
          <div
            className="absolute top-0 left-0 w-full bg-green-500"
            style={{ height: `${scrollProgress}%`, transition: "height 0.2s ease-out" }}
          ></div>
        </div>

        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center mt-10 transition-all duration-300 ${
              index <= currentStep ? "text-green-500" : "text-gray-300"
            }`}
          >
            {/* Animate the icons when they become visible */}
            <div
              className={`p-2 bg-white rounded-full border-2 border-green-500 transition-transform ${
                index === currentStep ? "transform scale-125" : ""
              }`}
            >
              {step.icon}
            </div>
            <p className="mt-2 text-lg">{step.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollStepper;
