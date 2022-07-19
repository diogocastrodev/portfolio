import controlCenterPng from "../../assets/controlCenter.png";

interface props {
  options?: React.HTMLAttributes<HTMLImageElement>;
}

export default function ControlCenter({ options }: props) {
  return (
    <>
      <img src={controlCenterPng} alt="" {...options} />
    </>
  );
}
