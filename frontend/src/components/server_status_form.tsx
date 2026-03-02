import { useState, useEffect } from "react";

export default function ServerStatusForm() {
  const [status, setStatus] = useState("Unknown");

  // 2. useEffect zorgt ervoor dat deze code draait zodra de app start.
  useEffect(() => {
    const checkServerStatus = async () => {
      const response = await fetch("http://localhost:4000/api/welkom");
      const data = await response.json();

      if (data.bericht !== "Hallo vanuit je gloednieuwe Express backend! 🎉") setStatus("Error fetching status");
      else setStatus("Online");
    };

    checkServerStatus();
  }, []);

  return (
    <div>
      <h2>Server Status: {status}</h2>
    </div>
  );
}