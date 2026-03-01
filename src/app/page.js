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
    <section className="bg-white rounded-2xl shadow-sm border p-4 md:p-6">
      <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">
        {title}
      </h2>

      <div className="space-y-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b pb-2 text-sm md:text-base"
          >
            <span className="text-gray-700">{item.name}</span>
            <span className="font-semibold text-black">
              ₦{item.price.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      {/* Hero Image */}
      <div className="w-full">
        <img
          src="/413424f3-06db-4630-b838-30111ec0e395.JPG"
          className="w-full h-48 md:h-64 object-cover"
          alt="Limah's Place Salon"
        />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 mt-6 space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          Limah’s Place Salon
        </h1>

        <Section title="Salon Services" data={salonServices} />
        <Section title="Spa Services" data={spaServices} />
        <Section title="Facial Services" data={facialServices} />
        <Section title="Lash Services" data={lashServices} />
        <Section title="Products & Extensions" data={productServices} />
      </div>
    </main>
  );
}