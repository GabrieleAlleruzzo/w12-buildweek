import React from "react";
import { Button } from "react-bootstrap";

const ImprovedProfileBody = () => {
  return (
    <div>
      <h5 className="mb-3">Migliora il tuo profilo con Premium</h5>

      <div className="mb-3">
        <strong>Aggiungi un pulsante personalizzato su LinkedIn</strong>
        <br />
        <span>
          Promuovi le visite al tuo sito web, al tuo portfolio e altro.
        </span>
      </div>

      <div className="mb-3">
        <strong>Usa l’assistente di scrittura del profilo con IA</strong>
        <br />
        <span>
          Fai risaltare il tuo profilo con l’aiuto dell’intelligenza
          artificiale.
        </span>
      </div>

      <div className="mb-3">
        <strong>Mostra sezioni del profilo in alto</strong>
        <br />
        <span>Mostra i dettagli principali nella sezione in primo piano.</span>
      </div>

      <p className="text-muted" style={{ fontSize: "0.9rem" }}>
        1 mese gratis con assistenza 24/7. Annulli in qualsiasi momento. Ti
        invieremo un promemoria 7 giorni prima della fine del periodo di prova.
      </p>

      <div className="d-flex justify-content-end">
        <Button variant="warning" className="rounded-pill">
          Prova Premium per 0 EUR
        </Button>
      </div>
    </div>
  );
};

export default ImprovedProfileBody;
