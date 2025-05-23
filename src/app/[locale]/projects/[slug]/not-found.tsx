"use client";
import React from "react";
import Link from "next/link";

const NoFoundProject = () => {
  return (
    <>
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-md mx-auto text-center space-y-6"></div>
        <div className="relative">
          <h1 className="text-7xl font-bold text-white/10">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
            Proyecto no encontrado
          </h2>
        </div>

        <p className="text-lg text-gray-400 mt-4">
          El proyecto que buscas no existe o ha sido eliminado.
        </p>

        <div className="bg-gray-800/50 rounded-lg p-4 mt-6 border border-gray-700">
          <small className="text-gray-500 italic">
            El slug ingresado existe pero no se ha encontrado el proyecto
          </small>
        </div>

        <Link href="/projects" className="mt-8 inline-block">
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200 transform hover:scale-105 cursor-pointer">
            Volver a proyectos
          </button>
        </Link>
      </div>
    </>
  );
};

export default NoFoundProject;
