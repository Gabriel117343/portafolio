"use client";

import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { twMerge } from "tailwind-merge";
// importar los tipos de tailwind css

interface RevealOnScrollProps {
  children: ReactNode;
  hiddenClass?: string;
  visibleClass?: string;
  triggerOnce?: boolean;
  threshold?: number;
  className?: string;
}

// Nota: Al inspeccionar el DOM, todos los elementos son revelados al mismo tiempo, debido a que El navegador a menudo “resalta” y desplaza automáticamente el nodo en el DOM tree.

/**
 * Props for RevealOnScroll.
 * @param children     Contenido que se revelará al entrar en vista.
 * @param hiddenClass  Clases Tailwind para el estado oculto.
 * @param visibleClass Clases Tailwind para el estado visible.
 * @param triggerOnce  Si es true, la animación solo ocurre una vez.
 * @param threshold    Umbral de visibilidad (0 a 1).
 * @param className    Clases extra para el contenedor externo.
 */
export function RevealOnScroll({
  children,
  hiddenClass = "",
  visibleClass = "",
  triggerOnce = true,
  threshold = 0.1,
  className,
  // técnica deprecada ahora se usa sr-only
  // showBeforeHydrate = false,
}: RevealOnScrollProps) {
  const { ref, inView } = useInView({ triggerOnce, threshold });

  // es necesario asegurarse de que haya una opacidad inicial para evitar que el elemento se vea al cargar la página
  // y luego se aplique la animación. Esto es especialmente importante para el SSR.
  const hiddenClassMerge = twMerge("opacity-0 translate-y-12", hiddenClass);
  const visibleClassMerge = twMerge("opacity-100 translate-y-0", visibleClass);

  return (
    <div
      ref={ref}
      className={twMerge(
        // siempre aplicamos la transición
        "transition-all duration-700 ease-out",
        // alternamos hidden/visible
        inView ? visibleClassMerge : hiddenClassMerge,
        // más clases que pase el usuario
        className
      )}
    >
      {/* Siempre renderizamos el contenido completo de forma oculta para SEO */}
      <div className="sr-only" aria-hidden="true">
        {children}
      </div>

      {/* Versión animada que se muestra al hacer inView */}
      {children}
      {}
    </div>
  );
}
