import { useState, useEffect } from "react";

export default function ServerStatusForm() {
  const [status, setStatus] = useState("Unknown");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [apiMessage, setApiMessage] = useState("");
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // 2. useEffect zorgt ervoor dat deze code draait zodra de app start.
  useEffect(() => {
    const checkServerStatus = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/welkom`);
        const data = await response.json();

        if (data.bericht !== "Hallo vanuit je gloednieuwe Express backend! 🎉") setStatus("Error fetching status");
        else setStatus("Online");
      } catch {
        setStatus("Error fetching status");
      }
    };

    checkServerStatus();
  }, []);

  const handleCreateUser = async () => {
    if (!email.trim()) {
      setApiMessage("POST /api/users: email is verplicht.");
      return;
    }

    setLoading(true);
    setApiMessage("");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          name: name.trim() || undefined,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        setApiMessage(`POST /api/users (${response.status}): ${data?.error ?? "Onbekende fout"}`);
        return;
      }

      setApiMessage(`POST /api/users (${response.status}): user aangemaakt met id ${data.id}`);
      setEmail("");
      setName("");
    } catch {
      setApiMessage("POST /api/users: netwerkfout.");
    } finally {
      setLoading(false);
    }
  };

  const handleLoadUsers = async () => {
    setLoading(true);
    setApiMessage("");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/users`);
      const data = await response.json();

      if (!response.ok) {
        setApiMessage(`GET /api/users (${response.status}): ${data?.error ?? "Onbekende fout"}`);
        return;
      }

      setUsers(Array.isArray(data) ? data : []);
      setApiMessage(`GET /api/users (${response.status}): ${Array.isArray(data) ? data.length : 0} users geladen.`);
    } catch {
      setApiMessage("GET /api/users: netwerkfout.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md rounded-xl bg-white p-4 shadow-sm border border-gray-200">
      <h2 className="text-base font-semibold text-gray-800">
        Server Status:{" "}
        <span className={status === "Online" ? "text-green-600" : "text-red-600"}>{status}</span>
      </h2>

      <h3 className="mt-4 text-sm font-medium text-gray-700">Test users API</h3>
      <div className="mt-2 grid gap-2">
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={loading}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-gray-100"
        />
        <input
          type="text"
          placeholder="name (optional)"
          value={name}
          onChange={(event) => setName(event.target.value)}
          disabled={loading}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-gray-100"
        />
      </div>

      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={handleCreateUser}
          disabled={loading}
          className="rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
        >
          Create user
        </button>
        <button
          type="button"
          onClick={handleLoadUsers}
          disabled={loading}
          className="rounded-md bg-gray-700 px-3 py-2 text-sm font-medium text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          Load users
        </button>
      </div>

      {apiMessage && <p className="mt-3 text-sm text-gray-700">{apiMessage}</p>}

      <ul className="mt-3 space-y-1">
        {users.map((user) => (
          <li key={user.id} className="rounded-md bg-gray-50 px-3 py-2 text-sm text-gray-700 border border-gray-200">
            #{user.id} - {user.email} - {user.name ?? "(geen naam)"}
          </li>
        ))}
      </ul>
    </div>
  );
}