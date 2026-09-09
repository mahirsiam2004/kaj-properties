interface Props { light?: boolean; }

export function Logo({ light = false }: Props) {
  return (
    <img
      className={`w-28 lg:w-32 xl:w-36 opacity-100 block transition-all duration-300 ${light ? 'brightness-0 invert' : 'brightness-0'}`}
      src="/logo1.png"
      alt="Kaz Properties"
    />
  );
}
