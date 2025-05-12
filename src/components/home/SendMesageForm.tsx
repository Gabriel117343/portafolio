"use client";
import React, { useState } from "react";
import { RefreshSvg } from "@ui/svg/RefreshSvg";
import Swal from "sweetalert2";

export const SendMesageForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  });

  const [status, setStatus] = useState<null | "enviando" | "enviado" | "error">(
    null
  );

  const TIME_TO_REFRESH_STATUS = 4000;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("enviando");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok || res.status === 200) {
        setStatus("enviado");
        console.log("Mensaje enviado con éxito:", res);

        Swal.fire({
          icon: "success",
          title: "¡Mensaje enviado!",
          text: "Gracias por contactarme. Te responderé pronto.",
          confirmButtonColor: "#3b82f6",
          confirmButtonText: "Aceptar",
        });

        setTimeout(() => {
          setStatus(null);
        }, TIME_TO_REFRESH_STATUS);

        setFormData({ nombre: "", correo: "", asunto: "", mensaje: "" });
      } else {
        throw new Error("Error al enviar");
      }
    } catch {
      setStatus("error");

      Swal.fire({
        icon: "error",
        title: "Error al enviar",
        text: "No se pudo enviar el mensaje. Intenta nuevamente más tarde.",
        confirmButtonColor: "#ef4444",
        confirmButtonText: "Aceptar",
      });

      setTimeout(() => {
        setStatus(null);
      }, TIME_TO_REFRESH_STATUS);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg bg-transparent p-6 rounded-lg shadow-xl backdrop-blur-sm space-y-4 hover:shadow-2xl transition-all duration-800 ease-in-out hover:scale-105 border-2 border-cyan-600/30 hover:border-cyan-600/50 relative z-40 group/form"
    >
      <div className="absolute inset-0 bg-gradient-to-bl from-blue-900/20 to-blue-700/40  -z-10 group-hover/form:from-blue-900/30 w-full h-full" />
      <h3 className="text-2xl font-semibold text-cyan-300/90 hover:text-cyan-400 transition-colors duration-200 text-center mb-8">
        Envíame un mensaje
      </h3>

      <input
        type="text"
        id="nombre"
        name="nombre"
        placeholder="Tu nombre"
        autoComplete="name"
        required
        value={formData.nombre}
        onChange={handleChange}
        className="w-full p-3 bg-blue-950/40 text-white rounded focus:outline-none focus:ring-2 focus:ring-cyan-400/80 ring-gray-100/20 ring-1"
      />
      <input
        type="email"
        name="correo"
        placeholder="Tu correo"
        autoComplete="email"
        required
        value={formData.correo}
        onChange={handleChange}
        className="w-full p-3 bg-blue-950/40 text-white rounded focus:outline-none focus:ring-2 focus:ring-cyan-400/80 ring-gray-100/20 ring-1"
      />
      <input
        type="text"
        name="asunto"
        placeholder="Motivo del mensaje"
        required
        value={formData.asunto}
        onChange={handleChange}
        className="w-full p-3 bg-blue-950/40 text-white rounded focus:outline-none focus:ring-2 focus:ring-cyan-400/80 ring-gray-100/20 ring-1"
      />

      <textarea
        name="mensaje"
        rows={4}
        placeholder="Escribe tu mensaje aquí..."
        required
        value={formData.mensaje}
        onChange={handleChange}
        className="w-full p-3 bg-blue-950/40 text-white rounded focus:outline-none focus:ring-2 focus:ring-cyan-400/80 ring-gray-100/20 ring-1 resize-none"
      />
      <button
        type="submit"
        className="w-full py-3 bg-gradient-to-br from-cyan-600 via-cyan-500 to-cyan-400 hover:to-cyan-500 rounded text-white font-semibold transition cursor-pointer"
      >
        {status === "enviando" ? (
          <span className="flex items-center justify-center gap-2">
            <RefreshSvg className="animate-spin text-gray-200 size-6" />
            Enviando
          </span>
        ) : (
          "Enviar mensaje"
        )}
      </button>
      {status === "enviado" && (
        <p className="text-green-400">¡Mensaje enviado con éxito!</p>
      )}
      {status === "error" && (
        <p className="text-red-400">Hubo un error al enviar el mensaje.</p>
      )}
    </form>
  );
};
