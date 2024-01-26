/**
 * @param {string[]} values
 * @param {boolean} isTheadContained
 * @param {string} textReplacingIfBlank
 * @return {string}
*/
function getTableByValues(values, isTheadContained, textReplacingIfBlank="💩"){
  const prefix = "<table>";
  const suffix = "</table>";
  const thead_start = "<thead>";
  const thead_end = "</thead>";
  const tbody_start = "<tbody>";
  const tbody_end = "</tbody>";
  let is_thead_added = false;
  let is_tbody_added = false;
  let html = `${prefix}\n`;
  let tmp_tr = "";
  let isTh = false;
  if(!isTheadContained){
    is_thead_added = true;
    is_tbody_added = true;
  }
  for(let i = 0; i < values.length; i++){
    isTh = false;
    if(i === 0){
      isTh = true;
      if(!is_thead_added){
        html += thead_start;
      }
    }
    if(is_thead_added && !is_tbody_added){
      html += tbody_start;
      is_tbody_added = true;
    }
    tmp_tr = getTrByRow(values[i], isTh, textReplacingIfBlank);
    html += `${tmp_tr}\n`;
    if(!is_thead_added){
      html += thead_end;
      is_thead_added = true;
    }
  }
  if(values.length !== 1 && isTheadContained){
    html += tbody_end;
  }
  html += suffix;
  return html;
}

/**
 * @param {string[]} row
 * @param {boolean} isTh
 * @param {string} textReplacingIfBlank
 * @return {string}
*/
function getTrByRow(row, isTh, textReplacingIfBlank="💩"){
  let element;
  // let tdArray = [];
  let tr = "";
  let tagTd = "td";
  if(isTh){
    tagTd = "th";
    textReplacingIfBlank = "";
  }
  const tagTr = "tr";
  for(let i = 0; i< row.length; i++){
    element = closeByTag(tagTd, row[i], textReplacingIfBlank);
    // element = `${tagTd}${row[i]}/${tagTd}`;
    tr += element;
  }
  // tr = `${tagTr}${tr}/${tagTr}`;
  tr = closeByTag(tagTr, tr, "");
  return tr;
}

/**
 * @param {string} tag without &lt; and &gt;
 * @param {string} innerText
 * @param {string} textReplacingIfBlank
 * @return {string}
*/
function closeByTag(tag, innerText, textReplacingIfBlank="💩"){
  // isObjectTypeをライブラリ化して持ってくる。tag
  if(tag[0] === "<"){
    throw Error("Initial of tag mustn't be \"<\".");
  }
  if(tag[tag.length - 1] === ">"){
    throw Error("End of tag mustn't be \">\".");
  }
  // isObjectTypeをライブラリ化して持ってくる。innerText

  let initialOfTag = "<";
  let endOfTag = ">";
  let formerTag = `${initialOfTag}${tag}${endOfTag}`;
  let latterTag = `${initialOfTag}/${tag}${endOfTag}`;
  let displayText = innerText;
  if(displayText === ""){
    displayText = textReplacingIfBlank;
  }
  let element = `${formerTag}${displayText}${latterTag}`;
  return element;
}

function getCsvByValues(values, sep=","){
  let csv = "";
  let tmp_row = "";
  for(let i = 0; i < values.length; i++){
    tmp_row = getCsvByRow(values[i], sep);
    csv += `${tmp_row}\n`;
  }
  return csv;
}

function getCsvByRow(row, sep=","){
  let csv = "";
  for(let i = 0; i< row.length; i++){
    csv += row[i];
    if(i !== row.length - 1){
      csv += sep;
    }
  }
  return csv;
}

function getUrlByValues(values){
  let urls_text = "";
  // let tmp_row = "";
  if(values.length === 0){
    throw Error("Length of values must be over 0.");
  }
  if(values[0].length !== 2){
    throw Error("Length of values[0] must be 2.");
  }
  for(let i = 0; i < values.length; i++){
    urls_text += `<a href=\"${values[i][1]}\">${values[i][0]}</a>\n`
    // tmp_row = getCsvByRow(values[i], sep);
    // csv += `${tmp_row}\n`;
  }
  return urls_text;
}

function getValuesBySelectedArea(){
  const ss = SpreadsheetApp.getActive().getSheetByName(SHEET_NAME_1STw);
  const activeValues = ss.getActiveRange().getValues();
  return activeValues;
}

function mainHtml(){
  const values = getValuesBySelectedArea();
  const html = getTableByValues(values, true, "");
  console.log(html);
  return html;
}

function mainCsv(){
  const values = getValuesBySelectedArea();
  const csv = getCsvByValues(values, ",");
  console.log(csv);
  return csv;
}

function mainTsv(){
  const values = getValuesBySelectedArea();
  const tsv = getCsvByValues(values, "\t");
  console.log(tsv);
  return tsv;
}

function mainUrl(){
  const values = getValuesBySelectedArea();
  const url = getUrlByValues(values);
  console.log(url);
  return url;
}
