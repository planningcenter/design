function onCreate(pane) {
  browser.devtools.inspectedWindow.eval("$0.tagName").then((result) => {
    alert(result);
    return pane.setPage("elements-pane/elements-pane.html");
  });
}

browser.devtools.panels.elements
  .createSidebarPane("Planning Center")
  .then(onCreate);
