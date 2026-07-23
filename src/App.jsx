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
    <div className="min-h-screen w-full flex flex-col bg-[var(--bg)] text-[var(--text)] font-sans">

      {/* Header */}
      <header className="border-b border-[var(--border)] py-8 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight m-0 text-[var(--text-h)]">
          Game<span className="text-[var(--accent)]">.exe</span>
        </h1>
        <p className="text-xs md:text-sm text-[var(--text)] mt-2 uppercase tracking-widest opacity-70">
          Sistem Rekomendasi Game — Berbasis Mood & Multi-Kriteria
        </p>
      </header>

      {/* Main Box */}
      <main className="max-w-2xl w-full mx-auto my-8 p-6 md:p-8 bg-[var(--bg)] border border-[var(--border)] rounded-2xl shadow-[var(--shadow)] flex-grow box-border">

        {/* Progress Bar */}
        <div className="w-full bg-[var(--code-bg)] h-2 rounded-full mb-8 overflow-hidden">
          <div
            className="bg-[var(--accent)] h-full rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        {!resultKey ? (
          /* Screen Pertanyaan */
          <div>
            <div className="mb-6">
              <span className="text-xs font-medium bg-[var(--accent-bg)] text-[var(--accent)] px-2.5 py-1 rounded-full uppercase inline-block mb-4 tracking-wide">
                Tahap 0{stepCount}
              </span>
              <h2 className="text-xl md:text-2xl font-medium text-[var(--text-h)] text-left tracking-tight leading-snug">
                {currentData.text}
              </h2>
            </div>

            <div className="space-y-3">
              {currentData.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="w-full text-left p-4 rounded-xl border border-[var(--border)] bg-[var(--bg)] hover:border-[var(--accent-border)] hover:bg-[var(--accent-bg)] transition-colors duration-150 text-sm font-medium text-[var(--text-h)] flex justify-between items-center box-border group"
                >
                  <span>{option.text}</span>
                  <span className="text-[var(--text)] opacity-50 group-hover:opacity-100 group-hover:text-[var(--accent)] transition-opacity duration-150">
                    &rarr;
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Screen Hasil Akhir */
          <div className="text-left">
            <div className="mb-6">
              <span className="text-xs font-medium text-[var(--accent)] uppercase tracking-widest">
                Rekomendasi untukmu
              </span>
              <h2 className="text-2xl font-semibold m-0 mt-1 text-[var(--text-h)] tracking-tight">
                {recommendations[resultKey].title}
              </h2>
            </div>

            <div className="bg-[var(--code-bg)] text-[var(--text)] px-3 py-2 rounded-lg font-mono text-xs mb-6 border border-[var(--border)]">
              rule_triggered: {recommendations[resultKey].rule}
            </div>

            <div className="space-y-6">
              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--code-bg)] box-border">
                <span className="text-xs font-medium uppercase tracking-wide text-[var(--text)] opacity-60 block mb-1.5">
                  Info Game
                </span>
                <p className="text-sm text-[var(--text-h)] m-0 leading-relaxed">
                  {recommendations[resultKey].specs}
                </p>
              </div>

              <div>
                <span className="text-xs font-medium uppercase tracking-wide text-[var(--text)] opacity-60 block mb-2">
                  Sinopsis / Alasan
                </span>
                <p className="text-sm text-[var(--text)] leading-relaxed m-0">
                  {recommendations[resultKey].desc}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--border)] flex justify-end">
              <button
                onClick={handleRestart}
                className="px-5 py-2.5 rounded-xl bg-[var(--accent)] hover:opacity-90 text-white font-medium text-sm transition-opacity duration-150"
              >
                Cari game lain
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}