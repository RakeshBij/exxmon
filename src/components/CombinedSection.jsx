import React from "react";
import { MainSection } from "./MainSection";
import { SideBar } from "./SideBar";
import { SearchSection } from "./SearchSection";

export const CombinedSection = () => {
  return (
    <>
      <div className="combined">
        <div>
          <SideBar />
        </div>
        <div>
          <MainSection />
        </div>
        <div>
          <SearchSection />
        </div>
      </div>
    </>
  );
};
