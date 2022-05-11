/**
   * onOpen
*/
function onOpen(){
  const menuName = "HTML表示処理";
  const objActions = [
    {name: "選択範囲をTableで出力", functionName: "displayResultOfMain"}
  ];
  LandmasterLibraryGas.onOpenToAddMenu(menuName, objActions);
}

function displayResultOfMain(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const html = HtmlService.createTemplateFromFile("index")
    .evaluate()
    .setTitle(SITE_TITLE)
    .addMetaTag("viewport", "width=device-width, initial-scale=1");
  ss.show(html);
}

