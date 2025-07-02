import React from "react";
import Image from "next/image";

import theProgramaticProgramerImg from "@public/images/books/the-pragmatic-programmer.jpg";
import emotionalIntelligenceImg from "@public/images/books/inteligencia-emocional.jpg";
import eloquentJSImg from "@public/images/books/javascript-elocuente.jpg";
import youDontKnowJSImg from "@public/images/books/scope-closures.jpg";
export const BooksSection = () => {
  const books = [
    {
      id: 1,
      title: "The Pragmatic Programmer",
      author: "Andy Hunt & Dave Thomas",
      description:
        "Este libro cambió mi forma de pensar sobre el código. Aprendí a escribir software pensando en la adaptabilidad, responsabilidad y evolución del proyecto, valores claves en el desarrollo web profesional.",
      cover: theProgramaticProgramerImg,
    },
    {
      id: 2,
      title: "Emotional Intelligence",
      author: "Daniel Goleman",
      description:
        "Comprendí habilidades emocionales cruciales para el trabajo en equipo, liderazgo y toma de decisiones bajo presión. Este enfoque ha fortalecido mi forma de abordar los desafíos diarios del desarrollo web.",
      cover: emotionalIntelligenceImg,
    },
    {
      id: 3,
      title: "You Don't Know JS Yet: Scope & Closures",
      author: "Kyle Simpson",
      description:
        "Me ayudó a profundizar en los fundamentos de JavaScript. Comprendí el alcance léxico, closures y el comportamiento del motor de JS, lo que mejoró significativamente mi habilidad para escribir código robusto y entendible.",
      cover: youDontKnowJSImg,
    },
    {
      id: 4,
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      description:
        "Este libro me dio una base sólida en JavaScript. Aprendí desde los fundamentos hasta conceptos avanzados, lo cual ha sido esencial en mi camino como desarrollador web frontend.",
      cover: eloquentJSImg,
    },
  ];

  return (
    <section
      id="books"
      className="relative h-full w-full px-6 md:px-12 lg:px-24 py-16  group/books bg-[#121230]/60 backdrop-blur-md "
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-200 relative z-10">
        Libros Destacados
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 w-full overflow-x-scroll">
        {books.map((book) => (
          <article
            key={book.id}
            className="border border-gray-600 rounded-2xl overflow-hidden shadow-xl bg-[#121230]/60 backdrop-blur-md hover:shadow-2xl transition-shadow duration-300 ease-in-out"
          >
            <Image
              src={book.cover}
              alt={book.title}
              placeholder="blur"
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-gray-200">
              <h3 className="text-2xl font-semibold mb-2">{book.title}</h3>
              <p className="text-gray-400 mb-4">by {book.author}</p>
              <p className="text-sm leading-relaxed text-gray-300">
                {book.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
