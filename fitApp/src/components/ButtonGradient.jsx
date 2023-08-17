import { useMemo ,memo} from "react";

function ButtonGradient(props) {
  return (
    <button
      // {...props}
      className={`px-7 rounded-full drop-shadow-md text-white ${props.currentProperties} after:absolute after:content-[''] after:top-0 after:left-0 after:duration-700 after:-z-10 after:opacity-0 after:h-full after:w-full after:bg-gradient-to-br ${props.afterProperties} after:rounded-full transition-all ease-in-out duration-700 hover:after:opacity-100`}
      data-aos={props.aos}
      data-aos-duration={props.duration}
      data-aos-delay={props.delay}
    >
      {props.children}
    </button>
  );
}

export default memo(ButtonGradient);
