import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { SendMesageForm } from "@components/home/SendMesageForm";
import Swal from "sweetalert2";

// mock de SweetAlert2
jest.mock("sweetalert2", () => ({ fire: jest.fn() }));

describe("SendMesageForm", () => {
  const textLang = {
    title: "Enviar mensaje",
    name: "Nombre",
    email: "Email",
    message: "Mensaje",
    bigText: "Escribe aquí...",
    buttonText: "Enviar",
    isSending: "Enviando...",
    statusSend: {
      success: {
        title: "¡Éxito!",
        text: "Mensaje enviado.",
        btnConfirmation: "OK",
      },
      error: {
        title: "Error",
        text: "No se pudo enviar.",
        btnConfirmation: "Reintentar",
      },
    },
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("envía con éxito y muestra SweetAlert success", async () => {
    // mock de fetch OK
    global.fetch = jest.fn().mockResolvedValue({ ok: true, status: 200 });

    render(<SendMesageForm textLang={textLang} />);

    // rellenar todos los campos
    fireEvent.change(screen.getByPlaceholderText(textLang.name), {
      target: { value: "Gabriel" },
    });
    fireEvent.change(screen.getByPlaceholderText(textLang.email), {
      target: { value: "gabriel@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(textLang.message), {
      target: { value: "Asunto de prueba" },
    });
    fireEvent.change(screen.getByPlaceholderText(textLang.bigText), {
      target: { value: "¡Hola mundo!" },
    });

    // hacer click en el botón
    const submitBtn = screen.getByRole("button", { name: textLang.buttonText });
    fireEvent.click(submitBtn);

    // esperar que fetch haya sido llamado
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        "/api/send-email",
        expect.objectContaining({
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: expect.any(String),
        })
      );
    });

    // verificar SweetAlert success
    expect(Swal.fire).toHaveBeenCalledWith(
      expect.objectContaining({
        icon: "success",
        title: textLang.statusSend.success.title,
      })
    );
  });

  test("muestra SweetAlert error cuando falla", async () => {
    // mock de fetch NOK
    global.fetch = jest.fn().mockResolvedValue({ ok: false, status: 500 });

    render(<SendMesageForm textLang={textLang} />);

    fireEvent.change(screen.getByPlaceholderText(textLang.name), {
      target: { value: "Gabriel" },
    });
    fireEvent.change(screen.getByPlaceholderText(textLang.email), {
      target: { value: "gabriel@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(textLang.message), {
      target: { value: "Asunto de prueba" },
    });
    fireEvent.change(screen.getByPlaceholderText(textLang.bigText), {
      target: { value: "¡Hola mundo!" },
    });

    const submitBtn = screen.getByRole("button", { name: textLang.buttonText });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(Swal.fire).toHaveBeenCalledWith(
        expect.objectContaining({
          icon: "error",
          title: textLang.statusSend.error.title,
        })
      );
    });
  });
});