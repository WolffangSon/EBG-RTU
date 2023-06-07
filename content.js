chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
  switch (request.type) {
    case "activate":
      sendResponse({ status: "alive" });
      break;
    case "requestData":
      let rows = constructData();
      sendResponse({ status: "success", data: rows });
      break;
    default:
      sendResponse({ status: "error" });
  }
});

function constructData() {
  let col = 0;
  let rows = [];
  if (jQuery) {
    jQuery(
      "#f7808fdf-c04b-45ea-9e0b-ec8850b86db7:last div[class='f9-widget-grid-content'] div[class='f9-widget-grid-content-wrapper'] div[class='f9-widget-grid-content-inner'] div[class='f9-widget-grid-contents-left docked'] div"
    ).each(function (index) {
      if (rows[col] == undefined) {
        rows[col] = [];
      }
      rows[col].push($(this).text());
      if ($(this).attr("class") == "f9-widget-grid-contents-center") {
        col++;
      }
    });
  } else {
    console.log("Error: jQuery library failed to load!");
    return 0;
  }

  return rows;
}
