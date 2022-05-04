/**
 * @param {string[]} values
 * @return {string}
*/

function geHtmlByValues(values){
  let prefix = "<table>";
  let suffix = "</table>";
  let html = `${prefix}\n`;
  let tmp_tr = "";
  let isTh = false;
  for(let i = 0; i < values.length; i++){
    isTh = false;
    if(i === 0){
      isTh = true;
    }
    tmp_tr = getTrByRow(values[i], isTh);
    html += `${tmp_tr}\n`;
  }
  html += suffix;
  return html;
}

/**
 * @param {string[]} row
 * @param {boolean} isTh
 * @return {string}
*/
function getTrByRow(row, isTh){
  let element;
  // let tdArray = [];
  let tr = "";
  let tagTd = "td";
  if(isTh){
    tagTd = "th"
  }
  const tagTr = "tr";
  for(let i = 0; i< row.length; i++){
    element = closeByTag(tagTd, row[i]);
    // element = `${tagTd}${row[i]}/${tagTd}`;
    tr += element;
  }
  // tr = `${tagTr}${tr}/${tagTr}`;
  tr = closeByTag(tagTr, tr);
  return tr;
}

/**
 * @param {string} tag
 * @param {string} innerText
 * @return {string}
*/
function closeByTag(tag, innerText){
  // isObjectTypeをライブラリ化して持ってくる。tag
  if(tag[0] === "<"){
    throw Error("Initial of tag mustn't be \"<\".");
  }
  if(tag[tag.length-1] === ">"){
    throw Error("End of tag mustn't be \">\".");
  }
  // isObjectTypeをライブラリ化して持ってくる。innerText

  let initialOfTag = "<";
  let endOfTag = ">";
  let formerTag = `${initialOfTag}${tag}${endOfTag}`;
  let latterTag = `${initialOfTag}/${tag}${endOfTag}`;
  let element = `${formerTag}${innerText}${latterTag}`;
  return element;
}

function getValuesBySelectedArea(){
  const ss = SpreadsheetApp.getActive().getSheetByName(sheetName1st);
  const activeValues = ss.getActiveRange().getValues();
  console.log(activeValues);
  return activeValues;
}

function main(){
  const values = getValuesBySelectedArea();
  const html = geHtmlByValues(values);
  console.log(html);
}
