const VisualizzazioneEsperienze = ({ esperienze, deleteEsperienza }) => {
  return (
    <div>
      <h2>Le tue esperienze lavorative</h2>
      <ul>
        {esperienze.map((exp) => (
          <li key={exp._id}>
            <h4>
              {exp.role} at {exp.company}
            </h4>
            <p>{exp.description}</p>
            <p>
              <strong>Da:</strong> {exp.startDate} <strong>A:</strong>{" "}
              {exp.endDate}
            </p>
            <button onClick={() => deleteEsperienza(exp._id)}>Elimina</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VisualizzazioneEsperienze;
