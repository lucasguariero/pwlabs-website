"use client";

import { useEffect, useState, type FormEvent } from "react";
import { WHATSAPP_URL } from "@/lib/data";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function BudgetModal({ open, onClose }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = `Olá, vim pelo site da PWlabs.%0A%0ANome: ${name}%0AEmail: ${email}%0AMensagem: ${message}`;
    const url = WHATSAPP_URL.replace(/[^/]+$/, "") + text;
    window.open(url, "_blank");
  }

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Formulário de orçamento"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-panel">
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>

        <span className="eyebrow" style={{ marginBottom: 12 }}>
          Solicitar orçamento
        </span>
        <h3
          className="font-serif font-medium leading-[1.1] mb-6"
          style={{ fontSize: 28, color: "var(--cream)" }}
        >
          Me conta o que você precisa.
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="budget-name">Nome</label>
            <input
              id="budget-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
            />
          </div>
          <div className="form-field">
            <label htmlFor="budget-email">E-mail</label>
            <input
              id="budget-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="voce@empresa.com"
            />
          </div>
          <div className="form-field">
            <label htmlFor="budget-message">Mensagem</label>
            <textarea
              id="budget-message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Conte rapidamente o que você precisa…"
            />
          </div>

          <button
            type="submit"
            className="btn-primary w-full justify-center mt-3"
            style={{ width: "100%", justifyContent: "center" }}
          >
            Enviar pelo WhatsApp
            <svg
              className="arrow"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 12h15" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
