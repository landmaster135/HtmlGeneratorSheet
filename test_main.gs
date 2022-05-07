// let tester = new TestGAS.TestGasExecutor();
let tester = TestGAS.createExecutor();

class Test_main{
  test_getHtmlByValues_1_1(){
    const values = [ [ '', 'Python', 'GAS', 'GitHub', 'JavaScript' ]
                    , [ '', '', '', '', '' ]
                  ];
    const textReplacingIfBlank = "";
    const actual = getHtmlByValues(values, textReplacingIfBlank);
    const expected = `<table>
<tr><th></th><th>Python</th><th>GAS</th><th>GitHub</th><th>JavaScript</th></tr>
<tr><td></td><td></td><td></td><td></td><td></td></tr>
</table>`;
    tester.assertEquals(actual, expected);
  }

  test_getHtmlByValues_1_2(){
    const values = [ [ '', 'Python', 'GAS', 'GitHub', 'JavaScript' ] ];
    const textReplacingIfBlank = "";
    const actual = getHtmlByValues(values, textReplacingIfBlank);
    const expected = `<table>
<tr><th></th><th>Python</th><th>GAS</th><th>GitHub</th><th>JavaScript</th></tr>
</table>`;
    tester.assertEquals(actual, expected);
  }

  test_getHtmlByValues_1_3(){
    const values = [ [ '' ] ];
    const textReplacingIfBlank = "";
    const actual = getHtmlByValues(values, textReplacingIfBlank);
    const expected = `<table>
<tr><th></th></tr>
</table>`;
    tester.assertEquals(actual, expected);
  }

  test_getHtmlByValues_2_1(){
    const values = [ [ '', 'Python', 'GAS', 'GitHub', 'JavaScript' ]
                    , [ '', '', '', '', '' ]
                  ];
    const actual = getHtmlByValues(values);
    const expected = `<table>
<tr><th></th><th>Python</th><th>GAS</th><th>GitHub</th><th>JavaScript</th></tr>
<tr><td>💩</td><td>💩</td><td>💩</td><td>💩</td><td>💩</td></tr>
</table>`;
    tester.assertEquals(actual, expected);
  }

  test_getTrByRow_1_1(){
    const row = [1, 2, 3];
    const isTh = false;
    const textReplacingIfBlank = "";
    const actual = getTrByRow(row, isTh, textReplacingIfBlank);
    const expected = "<tr><td>1</td><td>2</td><td>3</td></tr>";
    tester.assertEquals(actual, expected);
  }

  test_getTrByRow_1_2(){
    const row = [1, 2, 3];
    const isTh = true;
    const textReplacingIfBlank = "";
    const actual = getTrByRow(row, isTh, textReplacingIfBlank);
    const expected = "<tr><th>1</th><th>2</th><th>3</th></tr>";
    tester.assertEquals(actual, expected);
  }

  test_closeByTag_1_1(){
    const tag = "a";
    const innerText = "test";
    const textReplacingIfBlank = "";
    const actual = closeByTag(tag, innerText, textReplacingIfBlank);
    const expected = "<a>test</a>";
    tester.assertEquals(actual, expected);
  }

  test_closeByTag_1_2(){
    const tag = "a";
    const innerText = "test";
    const textReplacingIfBlank = "";
    const actual = closeByTag(tag, innerText, textReplacingIfBlank);
    const expected = "<a>test<//a>";
    tester.assertNotEquals(actual, expected);
  }

  test_closeByTag_2_1(){
    const tag = "<a href=";
    const innerText = "test";
    const textReplacingIfBlank = "";
    tester.assertError(closeByTag, [tag, innerText, textReplacingIfBlank], Error);
  }

  test_closeByTag_2_2(){
    const tag = "<a href=";
    const innerText = "test";
    tester.assertError(closeByTag, [tag, innerText], Error);
  }

  test_closeByTag_3_1(){
    const tag = "a href=\"\">";
    const innerText = "test";
    const textReplacingIfBlank = "";
    tester.assertError(closeByTag, [tag, innerText, textReplacingIfBlank], Error);
  }

  test_closeByTag_3_2(){
    const tag = "a href=\"\">";
    const innerText = "test";
    tester.assertError(closeByTag, [tag, innerText], Error);
  }

}

function execute_Test_main(){
  let failureFuncs = tester.executeTestGas(Test_main);
}
