import React from "react";
import ParallaxSplitText from "./ParallaxSplitText.jsx";

const ResultsSection = () => {
  const stats = [
    {
      value: "95",
      symbol: "%",
      label:
        "Clients continue working with SinnexTech due to reliable delivery, clear communication, and measurable results.",
    },
    {
      value: "20",
      symbol: "+",
      label:
        "Digital solutions successfully delivered across healthcare, SaaS, and enterprise platforms.",
      lowOpacityValue: true,
    },
    {
      value: "99",
      symbol: "%",
      label:
        "Client satisfaction driven by performance-focused development and long-term technical support.",
    },
  ];

  return (
    <section className="text-black py-10 lg:py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-[1500px] mx-auto border-t border-black/10 ">
        {/* Top Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-5 py-6 mb-10 lg:mb-32">
          <div className="lg:w-[60%]">
            <p className="text-[10px] mb-6 uppercase tracking-[0.2em] font-bold text-black flex items-center gap-2">
              <span className="text-sm">✱</span> Results
            </p>
            <h2 className="font-monosansnarrow text-[11vw] sm:text-[9vw] md:text-[4.5rem] lg:text-[10rem] leading-[1] md:leading-[1.1] font-black uppercase tracking-tighter">
              <ParallaxSplitText className="tracking-wide" text="Impact" />
              <ParallaxSplitText
                className="tracking-wide opacity-50"
                text="you can feel"
              />
            </h2>
          </div>

          <div className="lg:w-1/3 pt-1 lg:pt-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Clear and effortless interactions build trust. That trust
              translates into better performance, higher conversions and
              stronger customer relationships and you see that directly in the
              numbers.
            </p>
            <a
              href="/about"
              className="group w-fit relative flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full text-[11px] font-bold uppercase tracking-widest overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10">Learn More About Us</span>
              <span className="text-lg relative z-10 group-hover:rotate-45 transition-transform duration-500">
                ✦
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col py-5 lg:py-10 ${
                index !== 0 ? "md:border-l border-black/10 md:pl-12" : ""
              } ${index !== 2 ? "pr-12" : ""}`}
            >
              <h3 className="text-8xl font-mononarrowbold md:text-[9rem] font-medium tracking-tighter mb-6 flex items-baseline">
                {/* Number Styling */}
                <span
                  className={
                    stat.lowOpacityValue ? "opacity-50" : "opacity-100"
                  }
                >
                  {stat.value}
                </span>
                <span
                  className={
                    stat.symbol === "+" ? "opacity-100 ml-2" : "opacity-50 ml-2"
                  }
                >
                  {stat.symbol}
                </span>
              </h3>
              <p className="text-sm text-gray-600 max-w-[280px] leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
