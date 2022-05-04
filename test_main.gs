// let tester = new TestGAS.TestGasExecutor();
let tester = TestGAS.createExecutor();

class Test_main{
  test_geHtmlByValues_1_1(){
    const values = [ [ '', 'Python', 'GAS', 'GitHub', 'JavaScript' ]
                    , [ '', '', '', '', '' ]
                  ];
    const actual = geHtmlByValues(values);
    const expected = `<table>
<tr><th></th><th>Python</th><th>GAS</th><th>GitHub</th><th>JavaScript</th></tr>
<tr><td></td><td></td><td></td><td></td><td></td></tr>
</table>`;
    tester.assertEquals(actual, expected);
  }

  test_geHtmlByValues_1_2(){
    const values = [ [ '', 'Python', 'GAS', 'GitHub', 'JavaScript' ] ];
    const actual = geHtmlByValues(values);
    const expected = `<table>
<tr><th></th><th>Python</th><th>GAS</th><th>GitHub</th><th>JavaScript</th></tr>
</table>`;
    tester.assertEquals(actual, expected);
  }

  test_geHtmlByValues_1_3(){
    const values = [ [ '' ] ];
    const actual = geHtmlByValues(values);
    const expected = `<table>
<tr><th></th></tr>
</table>`;
    tester.assertEquals(actual, expected);
  }

  test_getTrByRow_1_1(){
    const row = [1, 2, 3];
    const isTh = false;
    const actual = getTrByRow(row, isTh);
    const expected = "<tr><td>1</td><td>2</td><td>3</td></tr>";
    tester.assertEquals(actual, expected);
  }

  test_getTrByRow_1_2(){
    const row = [1, 2, 3];
    const isTh = true;
    const actual = getTrByRow(row, isTh);
    const expected = "<tr><th>1</th><th>2</th><th>3</th></tr>";
    tester.assertEquals(actual, expected);
  }

  test_closeByTag_1_1(){
    const tag = "a";
    const innerText = "test";
    const actual = closeByTag(tag, innerText);
    const expected = "<a>test</a>";
    tester.assertEquals(actual, expected);
  }

  test_closeByTag_1_2(){
    const tag = "a";
    const innerText = "test";
    const actual = closeByTag(tag, innerText);
    const expected = "<a>test<//a>";
    tester.assertNotEquals(actual, expected);
  }

}

// function mmain(){
//   let a = TestGAS.createHoge("aaaa");
//   // let aa = a.
//   let b = a.getFuga();
//   console.log(a)
//   console.log(b)
//   // Hoge.createHoge('fuga').getFuga()
//   let c = TestGAS.createHoge("d").getFuga();
//   console.log(c);
// }


function execute_Test_main(){
  let failureFuncs = tester.executeTestGas(Test_main);
}
