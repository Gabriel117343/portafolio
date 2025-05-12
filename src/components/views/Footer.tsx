import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-20 bg-gray-900 text-gray-300">
      <div className="flex items-center space-x-2">
        <small className="text-sm">
          © 2025 - Todos los derechos reservados |{" "}
          <Link
            href="https://github.com/gabriel117343"
            target="_blank"
            aria-label="Ir a mi perfil de GitHub"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Gabriel Soliz
          </Link>
        </small>
      </div>
    </footer>
  );
};
