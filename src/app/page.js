export default function Home() {
  const salonServices = [
    { name: "Weaving", price: 4000 },
    { name: "Washing", price: 3000 },
    { name: "Hair Steaming", price: 10000 },
    { name: "Loosing", price: 3500 },
    { name: "Retouching", price: 4000 },
    { name: "Short Braids (Big Size)", price: 18000 },
    { name: "Short Braids (Medium Size)", price: 20000 },
    { name: "Long Braids (Big Size)", price: 25000 },
    { name: "Long Braids (Small Size)", price: 30000 },
    { name: "Ghana Weaving (Medium)", price: 20000 },
    { name: "Ghana Weaving (Big Size)", price: 15000 },
    { name: "Simple Cornrow (With Your Extension)", price: 10000 },
    { name: "Stitch Braids", price: 20000 },
    { name: "Boho Braids", price: 30000 },
  ];

  const spaServices = [
    { name: "Callus Remover Pedicure", price: 15000 },
    { name: "Jelly Pedicure", price: 20000 },
    { name: "Honey Deep Tissue Pedicure", price: 20000 },
    { name: "Dry Pedicure", price: 10000 },
    { name: "Manicure", price: 10000 },
  ];

  const facialServices = [
    { name: "Acne Facials", price: 15000 },
    { name: "Chin Waxing", price: 10000 },
    { name: "Under Arm Waxing", price: 15000 },
    { name: "Full Face Waxing", price: 20000 },
  ];

  const lashServices = [
    { name: "Lash Extensions - Classic", price: 12000 },
    { name: "Lash Extensions - Hybrid", price: 18000 },
    { name: "Lash Extensions - Volume", price: 25000 },
    { name: "Lash Extensions - Wispy", price: 20000 },
  ];

  const productServices = [
    { name: "Attachments (Big Ones)", price: 6500 },
    { name: "Attachments (Small Ones)", price: 5000 },
    { name: "Mega Growth 2-in-1 Shampoo", price: 6500 },
    { name: "Butterfly Spray (Small)", price: 3000 },
    { name: "Hair Placenta", price: 1000 },
    { name: "Hair Fertilizer", price: 500 },
    { name: "Hair Cream (Small)", price: 1000 },
    { name: "Olive Relaxer", price: 2000 },
    { name: "Mega Growth Relaxer", price: 2000 },
    { name: "Brazilian Wool", price: 1000 },
    { name: "Hair Comb", price: 1000 },
  ];

  const Section = ({ title, data }) => (
    <section className="bg-white/90 backdrop-blur rounded-3xl shadow-md border border-pink-100 p-5 md:p-7 hover:shadow-lg transition">
      <h2 className="text-xl md:text-2xl font-semibold mb-5 text-gray-800 flex items-center gap-2">
        <span className="w-2 h-6 bg-pink-500 rounded-full"></span>
        {title}
      </h2>

      <div className="space-y-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center rounded-xl px-3 py-2 hover:bg-pink-50 transition"
          >
            <span className="text-gray-700 text-sm md:text-base">
              {item.name}
            </span>

            <span className="font-semibold text-sm md:text-base bg-pink-100 text-pink-700 px-3 py-1 rounded-full">
              ₦{item.price.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <main className="min-h-screen bg-linear-to-b from-pink-50 via-white to-pink-50 pb-20">
      
      {/* ✅ Hero */}
      <div className="relative w-full">
        <img
          src="/413424f3-06db-4630-b838-30111ec0e395.JPG"
          className="w-full h-56 md:h-72 object-cover"
          alt="Limah's Place Salon"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* hero text */}
        <div className=" absolute mt-40 inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold drop-shadow">
            Limah’s Place Salon
          </h1>
          <p className="text-sm md:text-base opacity-90 mt-2">
            Beauty • Spa • Glam ✨
          </p>
        </div>
      </div>

      {/* ✅ Content */}
      <div className="max-w-3xl mx-auto px-4 mt-8 space-y-6">
        <Section title="Salon Services" data={salonServices} />
        <Section title="Spa Services" data={spaServices} />
        <Section title="Facial Services" data={facialServices} />
        <Section title="Lash Services" data={lashServices} />
        <Section title="Products & Extensions" data={productServices} />
      </div>


      {/* Floating Social Buttons */}
<div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">

  {/* WhatsApp */}
  <a
    href="https://wa.me/message/FAN7RC5RZYMFG1"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
  >
    {/* WhatsApp Icon */}
      <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="w-5 h-5 fill-white"
  >
    <path d="M16.004 3C8.822 3 3 8.822 3 16.004c0 2.823.92 5.433 2.476 7.555L3 29l5.615-2.421a12.93 12.93 0 007.389 2.313h.006C23.178 28.892 29 23.07 29 15.888 29 8.822 23.178 3 16.004 3zm7.547 18.217c-.319.897-1.588 1.71-2.187 1.808-.566.095-1.284.135-2.074-.118-.479-.15-1.092-.356-1.881-.693-3.31-1.432-5.466-4.772-5.632-4.999-.166-.227-1.35-1.793-1.35-3.422 0-1.63.855-2.431 1.158-2.764.303-.333.66-.417.88-.417.22 0 .44.002.632.012.203.01.474-.077.742.567.319.77 1.082 2.666 1.178 2.86.096.195.16.423.032.683-.128.26-.192.423-.38.651-.188.227-.395.507-.563.682-.188.195-.383.406-.164.798.22.39.98 1.614 2.104 2.613 1.445 1.286 2.663 1.682 3.053 1.871.39.19.618.162.846-.097.227-.26.973-1.135 1.232-1.526.26-.39.52-.325.88-.195.36.13 2.282 1.077 2.673 1.271.39.195.65.292.746.455.096.162.096.942-.223 1.84z" />
  </svg>

    <span className="hidden sm:inline font-medium">
      WhatsApp
    </span>
  </a>

  {/* TikTok */}
  <a
    href="https://www.tiktok.com/@limas__place?_r=1&_t=ZS-94KSMONkUTM"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-black hover:bg-gray-900 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
  >
    {/* TikTok Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-5 h-5 fill-white"
    >
      <path d="M19.589 6.686a4.793 4.793 0 01-3.77-1.885V15.54a5.44 5.44 0 11-4.708-5.393v2.227a3.215 3.215 0 102.483 3.166V2h2.232a4.79 4.79 0 003.763 2.572z"/>
    </svg>

    <span className="hidden sm:inline font-medium">
      TikTok
    </span>
  </a>

</div>
    </main>
  );
}