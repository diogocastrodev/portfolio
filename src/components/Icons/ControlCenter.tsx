import controlCenterPng from "@public/controlCenter.png";

interface props {
  options?: React.HTMLAttributes<HTMLImageElement>;
}

export default function ControlCenter({ options }: props) {
  return (
    <>
      <img src={controlCenterPng.src} alt="" {...options} />
    </>
  );
}
