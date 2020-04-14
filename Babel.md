[前端中的编译原理 - 从零打造一个实用的 Babel 插件](https://mp.weixin.qq.com/s?__biz=MzA4ODUzNTE2Nw==&mid=2451046377&idx=1&sn=23884a3a0f80c011a2968ac8f2afa3be&chksm=87cbe6f9b0bc6fef9673eab42dbe001fd2dac53f156964d107dc28ef3d1e296188a9cacea4a3&mpshare=1&scene=1&srcid=&sharer_sharetime=1569543956672&sharer_shareid=966f440169937ddeabee7cec964be6bc&key=370134afbc2f89abf9653597e3dac8f514b362712cc07a37d57261b00fecd6624199fda6f595961b5d3d0f822d77455e10387832e68701530071ec0408932a6b6730ee774d8dcdfc0bfd4e9b00abb6a7&ascene=1&uin=NTY4MTYyOTM1&devicetype=Windows+10&version=62060833&lang=zh_CN&pass_ticket=K00VWae9ocLUtONCk1cOk%2FMT3pFaHo3uWjf5d8YILzoiVVj3yOvcHCsNZcIAWRUk)
## 砸场子的Roma

1. window.addEventListener("DOMContentLoaded", onDOMContentLoaded, false);
1. onDOMContentLoaded
1. transformScriptTags
1. runScripts
1. loadScripts
  1. check
  1. 如果有src从远程加载，获取content
  1. 最终是获取content内容
1. run$1
  1. transformCode
  1. script（有content）转换成text 
    1. buildBabelOptions
    1. transform$1
    1. transformRunner.sync
  1. => script.text appendTo head