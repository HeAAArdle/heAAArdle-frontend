import { useNavigate } from "react-router-dom";
import ErrorIcon from "../../icons/ErrorIcon";
import Button from "../simple/Button";

type ErrorProps = {
  errNo: number;
  errMsg: string;
};

const Error = ({ errNo, errMsg }: ErrorProps) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center p-12 gap-8 bg-neutral-950 rounded-3xl shadow-2xl shadow-primary-950/60">
      <div className="flex flex-col items-center justify-center gap-3 text-[18px] lato-regular text-white whitespace-nowrap">
        <ErrorIcon className="w-30 h-30" />
        <span className="text-4xl text-fail-300 dm-sans-400 font-bold">
          {errNo} Error
        </span>
        {errMsg}
      </div>
      <Button text="Refresh" type="primary" onClick={() => navigate("/")} />
    </div>
  );
};

export default Error;
