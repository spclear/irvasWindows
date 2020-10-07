const { setActiveElement, displayOnlyOne } = require("../common/tabs");

function configureTabs(contentSelector, linkSelector, linkClass, initialIndex = 0) {
  const links = document.querySelectorAll(linkSelector);
  let activeTabIndex = initialIndex;
  console.log(links);
  
  displayOnlyOne(contentSelector, activeTabIndex);
  setActiveElement(linkSelector, activeTabIndex, linkClass);

  links.forEach((item, index) => {
    item.addEventListener('click', () => {
      activeTabIndex = index;
      displayOnlyOne(contentSelector, activeTabIndex);
      setActiveElement(linkSelector, activeTabIndex, linkClass);
    })
  })
}

export default configureTabs;