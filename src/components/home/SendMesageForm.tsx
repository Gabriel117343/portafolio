import React from "react";

export const SendMesageForm = () => {
  return (
    <form
      action="mailto:"
      method="POST"
      encType="text/plain"
      className="w-full max-w-lg bg-transparent p-6 rounded-lg shadow-xl backdrop-blur-sm space-y-4 hover:shadow-2xl transition-all duration-800 ease-in-out hover:scale-105 border-2 border-cyan-600/30 hover:border-cyan-600/50 relative z-40 group/form"
    >
      <div className="absolute inset-0 bg-gradient-to-bl from-blue-900/20 to-blue-700/40  -z-10 group-hover/form:from-blue-900/30 w-full h-full" />
      <h3 className="text-2xl font-semibold text-cyan-300/90 hover:text-cyan-400 transition-colors duration-200 text-center mb-8">
        Envíame un mensaje
      </h3>
      <input
        type="text"
        name="Nombre"
        placeholder="Tu nombre"
        required
        className="w-full p-3 bg-blue-950/40 text-white rounded focus:outline-none focus:ring-2 focus:ring-cyan-400/80 ring-gray-100/20 ring-1"
      />
      <input
        type="email"
        name="Correo"
        placeholder="Tu correo"
        required
        className="w-full p-3 bg-blue-950/40 text-white rounded focus:outline-none focus:ring-2 focus:ring-cyan-400/80 ring-gray-100/20 ring-1"
      />
      <input
        type="text"
        name="Asunto"
        placeholder="Motivo del mensaje"
        required
        className="w-full p-3 bg-blue-950/40 text-white rounded focus:outline-none focus:ring-2 focus:ring-cyan-400/80 ring-gray-100/20 ring-1"
      />
      <textarea
        name="Mensaje"
        rows={4}
        placeholder="Escribe tu mensaje aquí..."
        required
        className="w-full p-3 bg-blue-950/40 text-white rounded focus:outline-none focus:ring-2 focus:ring-cyan-400/80 ring-gray-100/20 ring-1 resize-none"
      />
      <button
        type="submit"
        className="w-full py-3 bg-gradient-to-br from-cyan-600 via-cyan-500 to-cyan-400 hover:to-cyan-500 rounded text-white font-semibold transition cursor-pointer"
      >
        Enviar mensaje
      </button>
    </form>
  );
};
