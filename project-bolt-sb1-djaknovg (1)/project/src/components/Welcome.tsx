import React, { useEffect, useState } from 'react';

const Welcome: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-gray-900 opacity-50"></div>
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.5})`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
      <div className="relative z-10 container mx-auto px-4 flex items-center">
        <div className="w-1/2">
          <div className="overflow-hidden">
            <h1
              className={`text-5xl md:text-7xl font-bold mb-8 transition-transform duration-1000 ${
                visible ? 'translate-y-0' : 'translate-y-full'
              }`}
            >
              Welcome
            </h1>
          </div>
          <div className="overflow-hidden">
            <h2
              className={`text-3xl md:text-5xl font-medium mb-12 transition-transform duration-1000 delay-300 ${
                visible ? 'translate-y-0' : 'translate-y-full'
              }`}
            >
              This is <span className="text-indigo-400">Snehith</span>
            </h2>
          </div>
          <div
            className={`transition-opacity duration-1000 delay-1000 ${
              visible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <button
              onClick={() => {
                document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore My Skills
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <img
            src="https://media-hosting.imagekit.io/7eb37a01b11241ba/photo.jpg?Expires=1840561484&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=mcOxp2IFIjf2XAKzbiqJ0-QSc2lj4~jbk1KOXkhWdMStnt0xYgYGsTGerusccrb3S1GyNgntToh02pkO45EkvK2rOg~zFKYy6RJ8D7EAnLQbmESjqPyJZ0LvZL5CeTS2pLhgFQRzsWyBn2I91Q4GBs~A0ZJ-2Z2ivQPSAwUI6o-y1tWkVv4ormE-yOo0QKdswYP1-~Fal1MXUizgafT1JfADUiFynkPJapxohGdzZP117dEqVqxvW9HKh2JLRZ58UqmGt2hWLsoH6szGK01QrjDKauNz7OIv9B8yx2sH0D9VKtWgNpGtOXDtjyXy2akEmP5Cp7RnXst7hccAJK8PTA__"
            alt="Snehith"
            className="w-96 h-96 object-cover rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
