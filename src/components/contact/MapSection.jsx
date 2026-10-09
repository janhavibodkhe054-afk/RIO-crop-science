import React from "react";

const MapSection = () => {
  return (
    <section className="w-full">
      <div className="w-full h-[300px] sm:h-[350px] lg:h-[400px] overflow-hidden">
        <iframe
          title="Rio Crop Science Location"
          src="https://www.google.com/maps?q=A-116%20L%2C%20Chhatrapati%20Sambhajinagar%2C%20Aurangabad%20431001%2C%20Maharashtra%2C%20India&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
};

export default MapSection;