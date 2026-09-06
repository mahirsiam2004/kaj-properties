interface Props { light?: boolean; }

export function Logo({ light = false }: Props) {
  return (
    <img
      className={`w-20 lg:w-15 opacity-100 block transition-all duration-300 ${light ? 'brightness-0 invert' : 'brightness-0'}`}
      src="/logo1.png"
      alt="Kaz Properties"
    />
  );
}
