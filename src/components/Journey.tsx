"use client";
import * as React from "react";
import JourneyContent from "./JourneyContent";
import Button from "./Button";

function Journey() {
  return (
    <section className="flex overflow-hidden flex-col justify-center px-32 py-24 bg-white max-md:px-5">
      <div className="flex flex-wrap gap-0.5 justify-center items-center px-12 w-full max-md:px-5 max-md:max-w-full">
        <JourneyContent />
        <div className="hidden min-md:block flex flex-col flex-1 shrink items-start self-stretch max-md:px-5 px-10 pt-9 pb-3.5 my-auto basis-0 min-w-60 max-md:pl-5 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f50a7569b44cf954d51a79cfdc8bef412045409d?placeholderIfAbsent=true&apiKey=70aeedb357bd49288b0eebacf917c655"
            alt="Dinesh Travels journey"
            className="object-contain w-full rounded-xl aspect-[0.72] max-md:max-w-full max-sm:pl-10 max-sm:w-[550px]"
          />
        </div>
      </div>
      <div className="hidden max-sm:block flex flex-col flex-1 shrink items-start self-stretch px-20 pt-9 pb-3.5 my-auto basis-0 min-w-60 max-md:pl-5 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f50a7569b44cf954d51a79cfdc8bef412045409d?placeholderIfAbsent=true&apiKey=70aeedb357bd49288b0eebacf917c655"
          alt="Dinesh Travels journey"
          className="object-contain w-full rounded-xl aspect-[0.72] max-md:max-w-full max-sm:pl-10 max-sm:w-[550px]"
        />
      </div>
      <Button label="Button Label" />
    </section>
  );
}

export default Journey;
