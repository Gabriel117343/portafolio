"use client";

import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { twMerge } from "tailwind-merge";

interface RevealOnScrollOwnProps {
  children: ReactNode;
  hiddenClass?: string;
  visibleClass?: string;
  triggerOnce?: boolean;
  threshold?: number;
  className?: string;

  key?: string;
  /** Tipo de elemento HTML o componente React a renderizar */
  as?: ElementType;
}

/**
 * `htmlProps` agrupa TODOS los atributos válidos del elemento
 * elegido en `as` (div, section, article, …).
 */
type RevealOnScrollProps<C extends ElementType> = RevealOnScrollOwnProps & {
  htmlProps?: Omit<ComponentPropsWithoutRef<C>, keyof RevealOnScrollOwnProps>;
};

// Nota: Al inspeccionar el DOM, todos los elementos son revelados al mismo tiempo, debido a que El navegador a menudo “resalta” y desplaza automáticamente el nodo en el DOM tree.

/**
 * RevealOnScroll es un componente polimórfico que envuelve su contenido
 * en un IntersectionObserver y alterna clases Tailwind al entrar en viewport.
 * @param children     Contenido que se revelará al entrar en vista.
 * @param hiddenClass  Clases Tailwind para el estado oculto.
 * @param visibleClass Clases Tailwind para el estado visible.
 * @param triggerOnce  Si es true, la animación solo ocurre una vez.
 * @param threshold    Umbral de visibilidad (0 a 1).
 * @param className    Clases extra para el contenedor externo.
 * @param as - Tipo de elemento (div, section, article, etc.). Por defecto 'div'.
 */
export function RevealOnScroll<C extends ElementType = "div">({
  as,
  children,
  hiddenClass = "",
  visibleClass = "",
  triggerOnce = true,
  threshold = 0.1,
  className,

  htmlProps,
  key,
  // técnica deprecada ahora se usa sr-only
  // showBeforeHydrate = false,
}: RevealOnScrollProps<C>) {
  const { ref, inView } = useInView({ triggerOnce, threshold });

  // es necesario asegurarse de que haya una opacidad inicial para evitar que el elemento se vea al cargar la página
  // y luego se aplique la animación. Esto es especialmente importante para el SSR.
  const hiddenClassMerge = twMerge("opacity-0 translate-y-12", hiddenClass);
  const visibleClassMerge = twMerge("opacity-100 translate-y-0", visibleClass);
  const Component = as ?? "div";

  return (
    <Component
      {...htmlProps}
      key={key}
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
      {children}
    </Component>
  );
}
