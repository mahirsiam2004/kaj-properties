interface Props {
  light?: boolean;
  className?: string;
}

export function Logo({ light = false, className = '' }: Props) {
  return (
    <img
      className={`w-24 sm:w-28 lg:w-32 xl:w-36 block transition-all duration-300 ${className}`}
      src="/logo1.png"
      alt="Kaz Properties"
    />
  );
}
