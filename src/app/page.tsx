import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="">
      <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">
        Rashid Ameer
      </h2>
      <p className="font-2xl mx-auto max-w-2xl text-lg text-gray-800">
        👋 Hi there, I am <strong>Rashid</strong>. I am a Frontend developer
        capable of making fast, responsive and user-friendly websites.
        Currently, looking for an opportunity where I can put my expertise to
        practice.
      </p>

      <Posts />
    </main>
  );
}
