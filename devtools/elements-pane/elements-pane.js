browser.storage.local.get(null).then((result) => {
  document.getElementById("root").innerHTML = `${result.inspectedElement}`;
});
