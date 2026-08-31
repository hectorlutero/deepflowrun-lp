"use client";

import { useEffect, useState } from "react";
import { DEMO_SLIDES } from "./copy";
import { ChannelMock, DemoWhatsAppSlide } from "./mocks";

export function DemoCarousel() {
  const [active, setActive] = useState(0);
  const slide = DEMO_SLIDES[active];

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % DEMO_SLIDES.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="ba-demo">
      <div className={`ba-demo-slide ba-demo-slide--active`}>
        <p className="ba-demo-label">{slide.label}</p>
        {slide.channel === "whatsapp" ? (
          <DemoWhatsAppSlide user={slide.user} agent={slide.agent} tag={slide.tag} />
        ) : (
          <ChannelMock
            channel={slide.channel}
            user={slide.user}
            agent={slide.agent}
            sub={slide.tag || undefined}
          />
        )}
      </div>

      <div className="ba-demo-dots" aria-label="Slides da demo">
        {DEMO_SLIDES.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={`ba-demo-dot ${i === active ? "ba-demo-dot--active" : ""}`}
            aria-label={`Slide ${i + 1}: ${s.label}`}
            aria-current={i === active ? "true" : undefined}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  );
}
