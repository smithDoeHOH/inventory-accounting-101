import { supabase } from "../lib/supabase";

const Home = async () => {
  // Fetch message from Supabase
  const res = await supabase.from("pings").select("message").single();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold">Infrastructure Stack Connected</h1>
      <p className="mt-4 text-emerald-500 font-mono">
        {res.data?.message || "Connecting to database..."}
      </p>
    </main>
  );
};

export default Home;
