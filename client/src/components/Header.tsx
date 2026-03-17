export default function Header() {
  return (
    <header className="relative h-80 md:h-96 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663421651881/kJP6GeF3uSdshSCLYE9g7P/hero-pizzaria-AKHkCdeqJcPrNfQdm9hvAx.webp')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 animate-fade-in-down">
          Pizzaria Franca
        </h1>
        <p className="text-lg md:text-xl text-white/90 animate-fade-in-down animation-delay-200">
          O melhor sabor da região 🍕
        </p>
      </div>
    </header>
  );
}
