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
  var table = [];
  let row = 0;
  let col = 0;
  
  if (typeof jQuery !== "undefined") {
    jQuery("#f7808fdf-c04b-45ea-9e0b-ec8850b86db7:last div[class='f9-widget-grid-content'] div[class='f9-widget-grid-content-wrapper'] div[class='f9-widget-grid-content-inner'] div[class='f9-widget-grid-contents-left docked'] div[class='f9-widget-grid-row']")
    .each(function(index) {
      if (table[row] == undefined) {
        table[row] = [];
      }
      
      table[row][col].push($(this).text())// = {
        //text: $(this).text(),
        //class: $(this).attr("class")
      //};
      
      row++;
      
      if ($(this).attr("class") == "f9-widget-grid-contents-center") {
        col++;
      }
    });
    
    jQuery("#f7808fdf-c04b-45ea-9e0b-ec8850b86db7:last div[class='f9-widget-grid-content'] div[class='f9-widget-grid-content-wrapper'] div[class='f9-widget-grid-content-inner'] div[class='f9-widget-grid-contents-center'] div[class='f9-widget-grid-contents-center'] div[class='f9-widget-grid-contents-center-inner'] div[class='f9-widget-grid-row']").each(function(index) {
      table[0][col] = {
        text: $(this).text(),
        class: $(this).attr("class")
      };
      col++;
    });
  } else {
    console.log("Error: jQuery library failed to load!");
    return null;
  }

  return table;
}



/*function constructData() {
  table = [];
  //let col = 0;
  let rows = [];
  let col = 0;
  if (jQuery) {
    jQuery(
      "#f7808fdf-c04b-45ea-9e0b-ec8850b86db7:last div[class='f9-widget-grid-content'] div[class='f9-widget-grid-content-wrapper'] div[class='f9-widget-grid-content-inner'] div[class='f9-widget-grid-contents-left docked'] div[class='f9-widget-grid-row']"
    ).each(function (index) {
      if (rows[col] == undefined) {
        rows[col] = [];
      }
      rows[col].push(
        $(this).text()
         + "\n" + "La clase actual es: " + $(this).attr("class")
      );
      if ($(this).attr("class") == "f9-widget-grid-contents-center") {
        col++;
      }
    });
  } else {
    console.log("Error: jQuery library failed to load!");
    return 0;
  }

  return rows;
} */




//$('[id^="foo"]')

/*
https://script.google.com/a/macros/telusinternational.com/s/AKfycbwzaEro4pUxG9ftswFAY-RQVyVbI5T9zg1P4P6CTh4rJTyYefLb4nxB538mK56rGvlwYA/exec
wolffang.son@telusinternational.com
EBG Raw
function constructData() {
  let table = [];
  let col = 0;
  let row = 0;
  if(jQuery) {
    jQuery("#oRightPaneContent").contents().find("#adherenceListWrapper .tblItem").each(function(index) {
      if(table[row] == undefined) {
        table[row] = [];
      }

      table[row].push($(this).text());
      col ++;

      if(col > 7) {
        row ++;
        col = 0;
      }
    });
  } else {
    console.log('Error: jQuery library failed to load!');
    return 0;
  }

  return table;

}*/
