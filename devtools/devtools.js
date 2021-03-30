function onCreate(pane) {
  function updateElement() {
    browser.devtools.inspectedWindow
      .eval("$0.tagName")
      .then((result, isException) => {
        if (isException) return sidebar.setObject(isException);

        browser.storage.local.set({ inspectedElement: result }).then(() => {
          return pane.setPage("elements-pane/elements-pane.html");
        });
      });
  }

  updateElement();

  browser.devtools.panels.elements.onSelectionChanged.addListener(
    updateElement
  );
}

browser.devtools.panels.elements
  .createSidebarPane("Planning Center")
  .then(onCreate);
