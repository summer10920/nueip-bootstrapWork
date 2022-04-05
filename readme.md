# 人易科技 前端上機測驗題

本專案為為上機測驗考題，根據部分描述提供說明

## 美化它，並說明要表達的感覺/主題，訂定的風格、配色

為資料型表格之行政類型使用，版面欄位僅五組不多，資料呈現較少上較為留白空處偏多空洞：

- 考量資料欄位大多簡短，捨棄框線之設計使空白處呈現簡約清爽風格，資料閱讀性更加延展。
- 同上，因配合步驟 4 需求已有底色需求，無框線的缺點能根據互動性顯色作為框線範圍代表。
- 主色（黃）：並延伸 9 種深淺表示。以陽光的暖色調去柔化資料操作的機器化感受。
- 配色（灰黑白）：保留文字色的清爽，局部重點提示色以 hover 來標示。
- 調整操作按鈕靠齊右側，呈現一致方向操作區域位置。
- 另優化搜尋之 UI 方式，改為任何完整字段皆可比對搜尋，風格更簡潔清爽直覺。

## 將 index.html 中的 js 程式碼分離成檔案 demo.js，並增加 style.css 檔案

使用 SCSS 與 ES6 完成編譯，同時未使用 jQuery.js 完成測驗。檔案說明如下：

- /scss/bootstrap.scss - `Bootstrap v5.1.3 source`
- /scss/style.scss - `custom style source`
- /bootstrap.css - `Bootstrap v5.1.3 Complier`
- /style.css - `custom style complier`
- /demo.js - `custom javascript`
- online css link - `Google Font 思源黑體繁體 & Roboto`

## 刪除鍵補上確認 Dialog，且新增/修改/刪除的 dialog 使用 bootstrap Modal 實現 (bootstrap 取代 jQueryUI)

請參閱 [GitPage](https://summer10920.github.io/nueip-bootstrapWork/)

## 表格 (table) 奇偶數列而有不同的底色，且滑鼠移到表格資料上時，以滑鼠指到的格子為中心，十字線上的 列/欄 都要變色 （列欄變色各得分 50%)

```txt
| | 色 | | |
| 色 | 鼠 | 色 | 色 |
| | 色 | | |
```

![](https://imgur.com/QTqoxei.gif)

## 加二個欄位：手機，電子信箱，並實作 欄位驗証及錯誤訊息顯示

- 必填：中文姓名、手機、信箱、性別
- 格式：手機、信箱
> ※ 註：手機填寫時為 10 碼數字，格式後面處理

> ※ 註：清單及編輯表單都要做

請參閱 [GitPage](https://summer10920.github.io/nueip-bootstrapWork/)

## 特效實作 & 資料處理
- bootstrap tooltip：滑鼠「移到」人名上面時，顯示說明文字，內容格式： [性別] 中文名子（英文名子） （字串串接）
- bootstrap popover：滑鼠「點擊」手機上面時，顯示手機資訊，內容格式： 聯絡方式：xxxx-xxx-xxx （字串格式轉換）

請參閱 [GitPage](https://summer10920.github.io/nueip-bootstrapWork/)

## 實作 bootstrap RWD 效果

請參閱 [GitPage](https://summer10920.github.io/nueip-bootstrapWork/)

## 提高 Javascript 檔物件化程度

請參閱 [GitHub/demo.js](https://github.com/summer10920/nueip-bootstrapWork/blob/master/demo.js)

## 實作 ajax
採 ES6 fetch 方式完成 Ajax 操作 CRUD。說明如下：

### getitem 
- 讀取全部與搜尋共用同 Method，判斷關鍵字存在與否進行不同 URL 位置請求。取得資料透過 refreshTable 函式完成表格更新。
- 讀取全部時，以分離的`/ajax/sql.json`來做示範 ajax 取回。
- 關鍵字搜尋操作時，本由後端完成提供搜尋結果。
- 同上，提供找不到之結果以及有效輸入。一組字串比對搜索所有完整符合之字串表格重新輸出。

>搜尋結果為了呈現 UI/UX 資料完整性，額外透過 JS 完成可完整字段搜尋之代碼。

![](https://imgur.com/6uNlh5v.gif)

### delitem
刪除操作，跟隨 RESTful 標準提供 URL 指定 id 刪除。假想 state=200 則更新物件 data 並重新輸出。

### mdyitem
修改操作，跟隨 RESTful 標準提供 URL 指定 id 更新。假想 state=200 則更新物件 data 並重新輸出。

### additem
新增操作，跟隨 RESTful 標準提供 URL 傳送資料。假想 state=200 並獲取資料庫所在 id，更新物件 data 並重新輸出。

>新增結果為了呈現 UI/UX 資料完整性，假想 id 為最後筆數 id 值加 1。

## 增加自定特效，並說明其內容 （需 4 個特效，1 個佔 25%)

1. 優化 - Popovers 互動
增加題目要求之外，提供點選非 Popovers 指定處進行自動關閉。
![](https://imgur.com/QTqoxei.gif)

2. 標題互動 - 使用偽元素與 background-clip 操作，完成同時字底雙變化效果。
![](https://imgur.com/kZxk30A.gif)

3. 文字動畫 - 小趣味，發生未預期結果時提供緩和的尷尬感。
![](https://imgur.com/dBmKi8h.gif)

4. 響應式的滾軸提供 - 因表格的響應缺點，在指定寬度下改提供Scroll Bar來瀏覽表格。
![](https://imgur.com/IkF0Wyc.gif)


```txt
※ 美化：選擇要表達的感覺/主題，然後訂定風格、確定配色
※ 本範例為前端工程師練習題，只專注版面、美化、頁面行為，不需管後端資料
※ 頁面編碼: UTF-8
```