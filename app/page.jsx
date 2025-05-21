import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gradient-background2">
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Watermark Wizard</h1>
        </div>
      </header>
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-semibold mb-4">
              Add Professional Watermarks to Your Images
            </h2>
            <div className="flex justify-center items-center">
              <Image src="/image.jpg" alt="Image" height={200} width={200}

                className="rounded-lg h-[500px] w-[500px]" />
            </div>
            <p className="text-lg text-gray-300 mb-8 mt-4">
              Upload an image, add a text or logo watermark, and customize its position, size, and opacity.
            </p>
            <Link href="/editor">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition">
                Start Watermarking
              </button>
            </Link>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Watermark Wizard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}