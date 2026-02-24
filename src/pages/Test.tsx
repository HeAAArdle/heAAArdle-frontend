// import { useState } from "react";
// import Archive from "../components/simple/Archive";

import Error from "../components/modals/Error";

const Test = () => {
  // const [text, setText] = useState("");

  return (
    <div className="h-full flex items-center justify-center w-full">
      <div className="h-full flex flex-col items-center justify-center w-96 gap-4">
        <Error errMsg="User has already played today's HeAAArdle" errNo={403} />
      </div>
    </div>
  );
};

export default Test;
