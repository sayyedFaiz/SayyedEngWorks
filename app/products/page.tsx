import Reveal from '../../components/Reveal';

export default function Products() {
  const products = [
    { name: 'Product 1', price: 2499.99, amount: 12, category: 'Tanks', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=800' },
    { name: 'Product 2', price: 499.5, amount: 50, category: 'Piping', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=800' },
    { name: 'Product 3', price: 1599.0, amount: 8, category: 'Food Processing', image: 'https://images.unsplash.com/photo-1565689157206-0fddef7589a2?q=80&w=800' },
    { name: 'Product 4', price: 129.99, amount: 120, category: 'Machined Parts', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800' },
    { name: 'Product 5', price: 3199.0, amount: 5, category: 'Thermal', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800' },
    { name: 'Product 6', price: 899.0, amount: 24, category: 'Structural', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800' },
    { name: 'Product 7', price: 749.0, amount: 10, category: 'Laboratory', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=800' },
    { name: 'Product 8', price: 39.95, amount: 300, category: 'Marine', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=800' },
    { name: 'Product 9', price: 1899.0, amount: 15, category: 'Industrial', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=800' }
  ];

  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <Reveal>
          <div className="text-center mb-12">
            <h1 className="reveal text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Products
            </h1>
            <p className="reveal text-neutral-600 text-lg max-w-3xl mx-auto">
              Browse available items. Each card shows name, price, amount and category.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 reveal-stagger">
            {products.map((p, index) => (
              <div key={index} className="reveal bg-white border border-neutral-200 rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative w-full h-64 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${p.image})` }}
                  ></div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold text-blue-900">{p.name}</h3>
                    <span className="text-xs bg-blue-50 text-blue-800 border border-blue-200 rounded-full px-2 py-1">{p.category}</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Price</span>
                      <span className="font-semibold text-neutral-800">${p.price.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Amount</span>
                      <span className="font-semibold text-neutral-800">{p.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Category</span>
                      <span className="text-neutral-700">{p.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </Reveal>
      </div>
    </main>
  );
}
