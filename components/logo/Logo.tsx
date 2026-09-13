interface Props {
  light?: boolean;
  className?: string;
}

export function Logo({ light = false, className = '' }: Props) {
  return (
    <img
      className={`w-16 sm:w-20 lg:w-24 xl:w-28 block transition-all duration-300 ${className}`}
      src="/logo1.png"
      alt="Kaz Properties"
    />
  );
}
