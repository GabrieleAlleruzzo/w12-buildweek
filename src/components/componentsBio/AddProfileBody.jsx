import React, { useState } from "react";

const AddProfiloBody = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const renderArrow = (id) =>
    expandedItem === id ? (
      <i className="bi bi-chevron-up ms-2"></i>
    ) : (
      <i className="bi bi-chevron-down ms-2"></i>
    );

  return (
    <ul className="list-unstyled">
      <li
        className="fw-bold py-2 border-bottom d-flex justify-content-between align-items-center"
        onClick={() => handleItemClick(1)}
        style={{ cursor: "pointer" }}
      >
        <span>Sezioni Principali</span>
        {renderArrow(1)}
      </li>
      {expandedItem === 1 && (
        <ul className="list-unstyled ms-3 mb-3">
          <li>
            <a
              className="text-decoration-none text-dark fw-bold"
              style={{ cursor: "pointer" }}
            >
              Aggiungi informazioni
            </a>
          </li>
          <li>
            <a
              className="text-decoration-none text-dark fw-bold"
              style={{ cursor: "pointer" }}
            >
              Aggiungi grado di formazione
            </a>
          </li>
          <li>
            <a
              className="text-decoration-none text-dark fw-bold"
              style={{ cursor: "pointer" }}
            >
              Aggiungi posizione lavorativa
            </a>
          </li>
          <li>
            <a
              className="text-decoration-none text-dark fw-bold"
              style={{ cursor: "pointer" }}
            >
              Aggiungi servizi
            </a>
          </li>
          <li>
            <a
              className="text-decoration-none text-dark fw-bold"
              style={{ cursor: "pointer" }}
            >
              Aggiungi pausa lavorativa
            </a>
          </li>
          <li>
            <a
              className="text-decoration-none text-dark fw-bold"
              style={{ cursor: "pointer" }}
            >
              Aggiungi competenze
            </a>
          </li>
        </ul>
      )}

      <li
        className="fw-bold py-2 border-bottom d-flex justify-content-between align-items-center"
        onClick={() => handleItemClick(2)}
        style={{ cursor: "pointer" }}
      >
        <span>Sezioni Consigliate</span>
        {renderArrow(2)}
      </li>
      {expandedItem === 2 && (
        <ul className="list-unstyled ms-3 mb-3">
          <li>
            <a
              className="text-decoration-none text-dark fw-bold"
              style={{ cursor: "pointer" }}
            >
              Aggiungi elementi in primo piano
            </a>
          </li>
          <li>
            <a
              className="text-decoration-none text-dark fw-bold"
              style={{ cursor: "pointer" }}
            >
              Aggiungi licenze e certificazioni
            </a>
          </li>
          <li>
            <a
              className="text-decoration-none text-dark fw-bold"
              style={{ cursor: "pointer" }}
            >
              Aggiungi progetti
            </a>
          </li>
          <li>
            <a
              className="text-decoration-none text-dark fw-bold"
              style={{ cursor: "pointer" }}
            >
              Aggiungi corsi
            </a>
          </li>
          <li>
            <a
              className="text-decoration-none text-dark fw-bold"
              style={{ cursor: "pointer" }}
            >
              Aggiungi referenze
            </a>
          </li>
        </ul>
      )}

      <li
        className="fw-bold py-2 border-bottom d-flex justify-content-between align-items-center"
        onClick={() => handleItemClick(3)}
        style={{ cursor: "pointer" }}
      >
        <span>Altro</span>
        {renderArrow(3)}
      </li>
      {expandedItem === 3 && (
        <ul className="list-unstyled ms-3 mb-3">
          <li>
            <a
              className="text-decoration-none text-dark fw-bold"
              style={{ cursor: "pointer" }}
            >
              Aggiungi esperienza di volontariato
            </a>
          </li>
          <li>
            <a
              className="text-decoration-none text-dark fw-bold"
              style={{ cursor: "pointer" }}
            >
              Aggiungi pubblicazioni
            </a>
          </li>
          <li>
            <a
              className="text-decoration-none text-dark fw-bold"
              style={{ cursor: "pointer" }}
            >
              Aggiungi brevetti
            </a>
          </li>
          <li>
            <a
              className="text-decoration-none text-dark fw-bold"
              style={{ cursor: "pointer" }}
            >
              Aggiungi riconoscimenti e premi
            </a>
          </li>
          <li>
            <a
              className="text-decoration-none text-dark fw-bold"
              style={{ cursor: "pointer" }}
            >
              Aggiungi votazioni esame
            </a>
          </li>
          <li>
            <a
              className="text-decoration-none text-dark fw-bold"
              style={{ cursor: "pointer" }}
            >
              Aggiungi lingue
            </a>
          </li>
          <li>
            <a
              className="text-decoration-none text-dark fw-bold"
              style={{ cursor: "pointer" }}
            >
              Aggiungi organizzazioni
            </a>
          </li>
          <li>
            <a
              className="text-decoration-none text-dark fw-bold"
              style={{ cursor: "pointer" }}
            >
              Aggiungi cause
            </a>
          </li>
          <li>
            <a
              className="text-decoration-none text-dark fw-bold"
              style={{ cursor: "pointer" }}
            >
              Aggiungi informazioni di contatto
            </a>
          </li>
        </ul>
      )}
    </ul>
  );
};

export default AddProfiloBody;
