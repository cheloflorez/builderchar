import React, { useEffect, useState } from "react";

export const CharacterLoadingState = ({ onComplete }) => {

  const loadingTexts = {
    en: [
      { main: "Initializing character core...", sub: "Inicializando núcleo del personaje..." },
      { main: "Loading stat engine...", sub: "Cargando motor de estadísticas..." },
      { main: "Syncing skill trees...", sub: "Sincronizando árboles de habilidades..." },
      { main: "Preparing UI modules...", sub: "Preparando módulos de interfaz..." },
      { main: "Finalizing build...", sub: "Finalizando configuración..." }
    ]
  };

  const steps = loadingTexts.en;

  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + 2;

        setCurrentStep(Math.min(Math.floor(next / 20), 4));

        if (next >= 100) {
          clearInterval(interval);
          onComplete?.();
          return 100;
        }

        return next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="flex items-center justify-center min-h-[500px]">
      <div className="w-full max-w-lg p-10 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_60px_rgba(139,92,246,0.3)]">

        {/* Title */}
        <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6 text-center">
          Initializing Build System
        </h2>

        {/* Steps */}
        <div className="space-y-4 mb-6 font-mono">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                index <= currentStep
                  ? "opacity-100"
                  : "opacity-40"
              }`}
            >
              <div className={`flex items-center gap-2 text-sm ${
                index <= currentStep ? "text-cyan-300" : "text-slate-500"
              }`}>
                <span>
                  {index < currentStep ? "✔" : index === currentStep ? "➜" : "•"}
                </span>
                <span>{step.main}</span>
              </div>

              {/* Sub text */}
              <div className="ml-6 text-xs text-slate-500 tracking-wide">
                {step.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden border border-white/10">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 transition-all duration-200 shadow-[0_0_20px_rgba(139,92,246,0.6)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage */}
        <div className="text-center mt-3 text-xs text-slate-400 tracking-wider">
          {Math.floor(progress)}% COMPLETE
        </div>

      </div>
    </div>
  );
};