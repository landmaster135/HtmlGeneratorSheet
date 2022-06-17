/**
   * onOpen
*/
function onOpen(){
  const menuName = "HTML表示処理";
  const objActions = [
    {name: "選択範囲をTableで出力", functionName: "displayResultOfMainHtml"}
    , {name: "選択範囲をCSVで出力", functionName: "displayResultOfMainCsv"}
  ];
  LandmasterLibraryGas.onOpenToAddMenu(menuName, objActions);
}

function displayResultOfMainHtml(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const html = HtmlService.createTemplateFromFile("index_html")
    .evaluate()
    .setTitle(SITE_TITLE)
    .addMetaTag("viewport", "width=device-width, initial-scale=1");
  ss.show(html);
}

function displayResultOfMainCsv(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const html = HtmlService.createTemplateFromFile("index_csv")
    .evaluate()
    .setTitle(SITE_TITLE)
    .addMetaTag("viewport", "width=device-width, initial-scale=1");
  ss.show(html);
}

