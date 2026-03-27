import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-white min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero section  */}
        <section className=" container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-black mb-6 text-6xl font-bold">
              A better way to track your job application.
            </h1>
            <p className=" text-muted-foreground">
              Capture, organize, and manage your job search in one place.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
