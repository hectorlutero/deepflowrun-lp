import type { ImgHTMLAttributes } from "react";

type LogoMarkProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "alt" | "width" | "height"
> & {
  size?: number;
  alt?: string;
};

export function LogoMark({
  size = 36,
  alt = "DeepFlowRun",
  ...rest
}: LogoMarkProps) {
  return (
    <img
      src="/brand/logo-mark.svg"
      alt={alt}
      width={size}
      height={size}
      decoding="async"
      {...rest}
    />
  );
}

export function Wordmark({
  className,
  size = 18,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <span
      className={className}
      style={{ fontSize: size, letterSpacing: "0.02em" }}
    >
      <span style={{ fontWeight: 800 }}>DeepFlow</span>
      <span style={{ fontWeight: 400, opacity: 0.86 }}>Run</span>
    </span>
  );
}
