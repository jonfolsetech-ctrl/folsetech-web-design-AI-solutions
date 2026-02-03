export default function MapEmbed({ query }: { query?: string }) {
  const q = query ?? "Gonzales LA 70737";
  const src = `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;
  return (
    <iframe
      title={`Map: ${q}`}
      src={src}
      className="w-full h-[420px] border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
