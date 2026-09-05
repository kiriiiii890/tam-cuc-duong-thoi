import { withBasePath } from "@/lib/basePath";

// Faint floral watermark reused behind every light-background section.
export default function DecorPattern() {
  return (
    <div
      className="decor-pattern"
      aria-hidden="true"
      style={{ backgroundImage: `url('${withBasePath("/images/bg-6.png")}')` }}
    />
  );
}
