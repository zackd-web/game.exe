// App.jsx
import React from 'react';
import { useCinemaQuiz } from './useCinemaQuiz'; // Mengambil logika state
import { recommendations } from './recomendations'; // Mengambil logika state

export default function App() {
  // Panggil semua fungsi dan state dari custom hook
  const {
    currentData,
    stepCount,
    resultKey,
    handleOptionClick,
    handleRestart,
    progressPercentage
  } = useCinemaQuiz();

  return (
    <div className="bg-[#ffff00] font-mono min-h-screen flex flex-col justify-between w-full m-0 text-black p-4 box-border select-none">
      
      {/* Header Brutalist */}
      <header className="bg-black text-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center w-full box-border">
        <h1 className="text-3xl md:text-5xl font-black tracking-tighter m-0 text-[#00ff00]">
          GAME.EXE
        </h1>
        <p className="text-xs md:text-sm text-[#ffff00] font-bold mt-2 uppercase tracking-widest">
          Sistem Rekomendasi Game / Berbasis Mood & Multi-Kriteria
        </p>
      </header>

      {/* Main Box Brutalist */}
      <main className="max-w-2xl mx-auto my-8 p-6 bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex-grow w-full box-border">
        
        {/* Progress Bar */}
        <div className="w-full bg-white h-6 border-4 border-black mb-8 p-0.5 box-border">
          <div 
            className="bg-[#00ff00] h-full border-r-2 border-black transition-all duration-200" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        {!resultKey ? (
          /* Screen Pertanyaan */
          <div>
            <div className="mb-6">
              <span className="text-sm font-black bg-black text-white px-2 py-1 uppercase inline-block mb-3">
                TAHAP _0{stepCount}
              </span>
              <h2 className="text-xl md:text-2xl font-black text-black border-b-4 border-black pb-3 p-0 text-left tracking-tight">
                {currentData.text}
              </h2>
            </div>

            <div className="space-y-3">
              {currentData.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="w-full text-left p-4 border-4 border-black rounded-none text-black bg-[#2754F5] hover:bg-[#00ff00] transition-colors duration-100 text-sm font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none flex justify-between items-center box-border"
                >
                  <span className="uppercase">{option.text}</span>
                  <span className="font-black text-base">[-&gt;]</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Screen Hasil Akhir */
          <div className="text-left">
            <div className="bg-[#00ff00] text-black p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
              <h2 className="text-2xl font-black m-0 tracking-tighter">REKOMENDASI GAME UNTUKMU:</h2>
            </div>
            
            <div className="bg-black text-[#00ff00] p-3 border-4 border-black font-bold text-xs uppercase mb-6 tracking-tight box-border">
              LOG_RULE_TERPICU // {recommendations[resultKey].rule}
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-black uppercase underline decoration-4 decoration-[#ff5722]">
                {recommendations[resultKey].title}
              </h3>
              
              <div className="bg-[#ffff00] p-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] box-border">
                <span className="text-xs font-black uppercase block mb-1">
                  [ INFO GAME ]
                </span>
                <p className="text-sm text-black font-black m-0 leading-relaxed">
                  {recommendations[resultKey].specs}
                </p>
              </div>

              <div>
                <span className="text-xs font-black bg-black text-white px-2 py-0.5 uppercase block mb-2 w-max">
                  SINOPSIS / ALASAN_
                </span>
                <p className="text-sm text-black font-bold leading-relaxed m-0 text-justify">
                  {recommendations[resultKey].desc}
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-4 border-t-4 border-black flex justify-end">
              <button 
                onClick={handleRestart}
                className="px-6 py-3 bg-[#ffff00] hover:bg-black hover:text-[#00ff00] border-4 border-black text-black font-black text-sm transition-colors duration-150 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              >
                CARI GAME LAIN ()
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}