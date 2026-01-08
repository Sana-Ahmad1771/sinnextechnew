"use client";

export default function MapSection() {
  return (
    <section className="w-full h-[450px]">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46292.54791963975!2d73.04884158450868!3d33.57170264387163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeb4062e2adc1%3A0x96151197c48f4f32!2sSafeCare%20Training%20%26%20Services!5e0!3m2!1sen!2s!4v1767612425026!5m2!1sen!2s"
                className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      />
    </section>
  );
}
