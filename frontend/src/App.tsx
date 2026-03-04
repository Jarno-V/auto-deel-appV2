import ServerStatusForm from "./components/server_status_form";
export default function App() {
  return (
    <>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-2">
      <h1 className="text-3xl font-bold text-blue-600 underline">
        Het werkt!
      </h1>
        <ServerStatusForm />
    </div>
    </>
  );
}
