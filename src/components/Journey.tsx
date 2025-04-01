"use client";
import * as React from "react";
import JourneyContent from "./JourneyContent";
import Button from "./Button";

function Journey() {
  return (
    <section className="flex overflow-hidden flex-col justify-center mb-12 px-20 max-md:px-5 bg-white">
      <div className="flex flex-wrap gap-0.5 justify-center items-center w-full max-md:max-w-full">
        <JourneyContent />
        <div className="flex flex-col flex-1 shrink items-start self-stretch pt-9 pb-3.5 my-auto basis-0 min-w-60 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f50a7569b44cf954d51a79cfdc8bef412045409d?placeholderIfAbsent=true&apiKey=70aeedb357bd49288b0eebacf917c655"
            alt="Dinesh Travels journey"
            className="object-contain w-full rounded-[20px] aspect-[0.72] max-md:max-w-full"
          />
        </div>
      </div>

      <Button label="Button Label" />
    </section>
  );
}

export default Journey;
