
export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About FruitMart</h1>

        <div className="mb-12">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1470"
            alt="Fruit Market"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Welcome to FruitMart, your premier destination for fresh,
              high-quality fruits. Established in 2024, we've been committed to
              bringing the finest selection of fruits directly from local
              farmers to your table.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="mb-6">
              Our mission is to promote healthy living by making fresh,
              nutritious fruits accessible to everyone. We believe in supporting
              local farmers and sustainable farming practices while delivering
              the best quality products to our customers.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">
                Quality: We never compromise on the quality of our fruits
              </li>
              <li className="mb-2">
                Freshness: Daily deliveries ensure maximum freshness
              </li>
              <li className="mb-2">
                Sustainability: Supporting eco-friendly farming practices
              </li>
              <li className="mb-2">
                Community: Building strong relationships with local farmers
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Our Promise</h2>
            <p className="mb-6">
              We guarantee the freshness and quality of all our products. If
              you're not completely satisfied with your purchase, we'll make it
              right - that's our promise to you.
            </p>
          </div>
        </div>

        <h2>Our Team</h2>
        <div className="text-center">
          {team.map((member) => (
            <div key={member.id}>
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const team = [
  {
    name: "John Smith",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
  },
  {
    name: "Sarah Johnson",
    role: "Operations Manager",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  },
  {
    name: "Michael Brown",
    role: "Head of Procurement",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
  },
  {
    name: "Emily Davis",
    role: "Customer Relations",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
  },
];
