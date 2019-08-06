import React, { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: "I'm content of section 1"
  },
  {
    tab: "Section 2",
    content: "I'm content of section 2"
  }
];

export const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};