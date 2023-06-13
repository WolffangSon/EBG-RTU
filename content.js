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
  table =[]
  //let col = 0;
  let rows = [];
  let col = 0;
  if (jQuery) {
    jQuery(
      "#f7808fdf-c04b-45ea-9e0b-ec8850b86db7:last div[class='f9-widget-grid-content'] div[class='f9-widget-grid-content-wrapper'] div[class='f9-widget-grid-content-inner'] div[class='f9-widget-grid-contents-left docked']"
    ).each(function (index) {
      if (rows[col] == undefined) {
        rows[col] = [];
      }
      rows[col].push($(this).text());
      if ($(this).attr("id") == "f9-widget-grid-row") {
        col++;
      }
    });
  } else {
    console.log("Error: jQuery library failed to load!");
    return 0;
  }

  return rows;
}//$('[id^="foo"]')

/*function constructTable(){
  let table=[];
  let col=0;
  let row=0;
  if (jQuery){// User name and timestamp array
    jQuery("#f7808fdf-c04b-45ea-9e0b-ec8850b86db7:last div[class='f9-widget-grid-content'] div[class='f9-widget-grid-content-wrapper'] div[class='f9-widget-grid-content-inner'] div[class='f9-widget-grid-contents-left docked'] div")
    if(table[row]==undefined){
      table[row]=[];
    }
    table[row].push($(this).text)
    col ++;
    jQuery("#f7808fdf-c04b-45ea-9e0b-ec8850b86db7:last div[class='f9-widget-grid-content'] div[class='f9-widget-grid-content-wrapper'] div[class='f9-widget-grid-content-inner'] div[class='f9-widget-grid-contents-center'] div[class='f9-widget-grid-contents-center-inner'] div")
    
  }
}*/

/*function constructData() {
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