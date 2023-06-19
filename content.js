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
  let rows = [];
  let col = 0;
  let row = 0;
  if (jQuery) {
    jQuery(
      "#f7808fdf-c04b-45ea-9e0b-ec8850b86db7:last div[class='f9-widget-grid-content'] div[class='f9-widget-grid-content-wrapper'] div[class='f9-widget-grid-content-inner'] div[class='f9-widget-grid-contents-center'] div[class='f9-widget-grid-contents-center-inner'] div[class^='f9-widget-grid-row']"
    )
      .children()
      .each(function (index) {
        if (rows[row] == undefined) {
          rows[row] = [];
        }
        rows[row].push(
          $(this).text() //+ "la clase actual es: " + $(this).attr("class")
        );
        if ($(this).attr("class") == "f9-widget-grid-cell stretch") {
          row++;
        }
      });
  } else {
    console.log("Error: jQuery library failed to load!");
    return 0;
  }

  return rows;
}

/*
https://script.google.com/a/macros/noom.com/s/AKfycbw8lRty-W4KAMyBLr3MdxtCGwobVldN4tzSSiH_ydFshhZM4FnaIj6cZ4PuCiXnw75weg/exec
https://script.google.com/a/macros/telusinternational.com/s/AKfycbwzaEro4pUxG9ftswFAY-RQVyVbI5T9zg1P4P6CTh4rJTyYefLb4nxB538mK56rGvlwYA/exec
wolffang.son@telusinternational.com
EBG Raw*/
