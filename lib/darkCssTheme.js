// creating the css theme that will be generated along side the HTML as to not rely on a 3rd party cdn
const darkCSSTheme = `
* {
    margin: 0px;
    padding: 0px;
  }
  
  body {
    width: 100%;
    height: auto;
  }
  
  body > header {
    width: 100%;
    text-align: center;
  }
  
  header > h1 {
    width: 100%;
    padding: 35px 0px;
    background-color: #202121;
    color: #f9fafb;
    font-family: monospace;
    text-transform: uppercase;
  }
  
  body > main {
    width: calc(100% - 150px);
    padding: 75px;
    min-height: calc(100vh - 200px);
    height: auto;
    display: flex;
    flex-flow: row wrap;
    background-color: #2a2b2b;
    gap: 25px;
    justify-content: center;
    align-items: center;
  }
  
  main > article {
    flex: 1 1 calc(33% - 25px);
    text-align: center;
    background-color: #202121;
    height: auto;
    color: #f9fafb;
    min-width: 300px;
  }
  
  main > article.manager {
    border: 2px solid #f58870;
  }
  
  main > article.engineer {
    border: 2px solid #40b1e5;
  }
  
  main > article.intern {
    border: 2px solid #7f7ebc;
  }
  
  main > article > header {
    width: 100%;
    height: 30px;
    padding: 25px 0px;
    font-family: monospace;
    font-size: 25px;
    line-height: 25px;
    color: #f9fafb;
    text-transform: uppercase;
    position: relative;
  }
  
  header > span {
    font-size: 18px;
    position: absolute;
    bottom: 5px;
    left: 5px;
  }
  
  header.manager {
    background-color: #f58870;
  }
  
  header.engineer {
    background-color: #40b1e5;
  }
  
  header.intern {
    background-color: #7f7ebc;
  }
  
  article a {
    color: #f9fafb;
  }
  
  article hr {
    display: block;
    width: 100%;
    height: 3px;
    background-color: #202121;
    border: none;
  }
  
  article .textInfo {
    height: auto;
    display: block;
    margin: 10px;
    padding: 25px 10px;
    font-size: 14pt;
  }
  
  article .textInfo span {
    font-size: 18pt;
    line-height: 22pt;
    font-family: "Courier New", Courier, monospace;
    text-transform: uppercase;
    font-weight: 500;
  }
  
  article.manager .textInfo {
    background-color: #f58870;
  }
  
  article.engineer .textInfo {
    background-color: #40b1e5;
  }
  
  article.intern .textInfo {
    background-color: #7f7ebc;
  }
  
  article > footer {
    height: auto;
    width: calc(100% - 20px);
    margin: 0px 10px 10px 10px;
  }
  
  article > footer > p {
    width: 100%;
    text-align: center;
    font-family: "Courier New", Courier, monospace;
    padding: 22.5px;
  }
  
  article.manager footer {
    background-color: #f58870;
  }
  
  article.engineer footer {
    background-color: #40b1e5;
  }
  
  article.intern footer {
    background-color: #7f7ebc;
  }
  
  body > footer {
    width: 100%;
    background-color: #202121;
  }
  
  body > footer > p {
    width: 100%;
    padding: 25px;
    font-size: 18px;
    text-align: center;
    color: #f9fafb;
  }
  
  body > footer a {
    color: #f9fafb;
    text-decoration: underline;
    margin: 5px 0px 0px 0px;
    display: block;
  }`
// Defines the css theme as the export for usage in other places in the application.
module.exports = darkCSSTheme;