import React from "react";

/**
 * Render the Alert component
 */
function Alert() {
  return (
    <div className="alert alert-danger" role="alert">
      <h4 className="alert-heading">Connexion error :/</h4>
      <p>
        There is a problem connecting with the server. Please try again later.
      </p>
    </div>
  );
}

export default Alert;
