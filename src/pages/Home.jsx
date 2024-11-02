// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/lab3');
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold text-primary">Laboratorium React - Aplikacja Samochodowa</h1>
          <p className="py-6 text-lg text-gray-300">
            Strona główna projektu, który został stworzony w ramach laboratorium React!
            Aplikacja o tematyce motoryzacyjnej pozwala na zarządzanie samochodami: dodawanie, edytowanie, ocenianie 
            oraz przeglądanie szczegółowych informacji o każdym modelu.
          </p>
          <div className="space-y-2">
            <p className="text-gray-400">
              Aplikacja umożliwia również interakcję z poszczególnymi pojazdami, oferując takie funkcje jak ocena pojazdu, 
              sortowanie oraz przeglądanie dostępnych modeli z możliwością szczegółowego wglądu.
            </p>
            <p className="text-gray-400">
              Projekt został zaprojektowany z wykorzystaniem najnowszych technik React oraz stylizacji za pomocą Daisy UI.
            </p>
          </div>
          <button onClick={handleNavigate} className="btn btn-primary mt-8">
            Przeglądaj Samochody
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
