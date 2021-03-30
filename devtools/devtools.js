function onCreate(pane) {
  pane.setPage("elements-pane/elements-pane.html");
}

browser.devtools.panels.elements
  .createSidebarPane("Planning Center")
  .then(onCreate);
