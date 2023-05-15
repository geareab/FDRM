var axios = require("axios");
var fs = require("fs").promises;
var datta = [];
const jss = [
 {
   "Date": "02-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 575
 },
 {
   "Date": "03-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 600
 },
 {
   "Date": "04-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 600
 },
 {
   "Date": "05-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 610
 },
 {
   "Date": "06-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 615
 },
 {
   "Date": "09-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 610
 },
 {
   "Date": "10-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 605
 },
 {
   "Date": "11-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 600
 },
 {
   "Date": "12-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 600
 },
 {
   "Date": "13-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 605
 },
 {
   "Date": "16-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 605
 },
 {
   "Date": "17-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 610
 },
 {
   "Date": "18-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 605
 },
 {
   "Date": "19-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 605
 },
 {
   "Date": "20-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 590
 },
 {
   "Date": "23-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 590
 },
 {
   "Date": "24-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 590
 },
 {
   "Date": "25-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 585
 },
 {
   "Date": "27-01-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 590
 },
 {
   "Date": "30-01-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 590
 },
 {
   "Date": "31-01-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 585
 },
 {
   "Date": "01-02-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 515
 },
 {
   "Date": "02-02-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 495
 },
 {
   "Date": "03-02-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 490
 },
 {
   "Date": "06-02-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 485
 },
 {
   "Date": "07-02-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 485
 },
 {
   "Date": "08-02-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 510
 },
 {
   "Date": "09-02-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 520
 },
 {
   "Date": "10-02-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 525
 },
 {
   "Date": "13-02-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 515
 },
 {
   "Date": "14-02-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 515
 },
 {
   "Date": "15-02-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 520
 },
 {
   "Date": "16-02-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 515
 },
 {
   "Date": "17-02-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 505
 },
 {
   "Date": "20-02-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 510
 },
 {
   "Date": "21-02-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 500
 },
 {
   "Date": "22-02-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 495
 },
 {
   "Date": "23-02-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 485
 },
 {
   "Date": "24-02-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 485
 },
 {
   "Date": "27-02-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 490
 },
 {
   "Date": "28-02-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 490
 },
 {
   "Date": "01-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 490
 },
 {
   "Date": "02-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 485
 },
 {
   "Date": "03-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 490
 },
 {
   "Date": "06-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 495
 },
 {
   "Date": "08-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 495
 },
 {
   "Date": "09-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 490
 },
 {
   "Date": "10-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 490
 },
 {
   "Date": "13-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 480
 },
 {
   "Date": "14-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 475
 },
 {
   "Date": "15-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 470
 },
 {
   "Date": "16-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 465
 },
 {
   "Date": "17-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 475
 },
 {
   "Date": "20-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 465
 },
 {
   "Date": "21-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 485
 },
 {
   "Date": "22-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 500
 },
 {
   "Date": "23-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 500
 },
 {
   "Date": "24-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 490
 },
 {
   "Date": "27-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 495
 },
 {
   "Date": "28-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 490
 },
 {
   "Date": "29-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 495
 }
]

for (i = 0; i < jss.length; i++) {
  config = {
    method: "get",
    timeout: 4000,
    url:
      "https://www.nseindia.com/api/historical/fo/derivatives?&from=" +
      jss[i]["Date"] +
      "&to=" +
      jss[i]["Date"] +
      "&optionType=PE&strikePrice=" +
      jss[i]["Strike Price"] +
      ".00" +
      "&expiryDate=" +
      jss[i]["Expiry"] +
      "&instrumentType=OPTSTK&symbol=HDFCLIFE",
    headers: {
      accept: "*/*",
      "accept-language": "en-GB,en;q=0.9,en-US;q=0.8",
      "sec-ch-ua":
        '"Chromium";v="112", "Microsoft Edge";v="112", "Not:A-Brand";v="99"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      cookie:
        'defaultLang=en; AKA_A2=A; ak_bmsc=95998D139E43C9B8757F0BFD95FB8D6E~000000000000000000000000000000~YAAQ1SdzaInT6gKIAQAAM439FhO/lmDfaHi91jCoVI7ORHJn7DecSEa43W1Uggs1P7BbVRanK/Cun65VEH+K3QrJxTLkam+LR75qcWhJS3mARQmoi2CzL7wNxwneZ6q3y86L6bTqb5RUra+bazyNMAhUQAGgsrQRZFJVlyIIea7REY0UVvVzYs2GWMgqwslCZoJAwOlQjJDiBC6jN46zd+9++SIbxldyaGu4/3Kph2EdCz3+19hID6qhZW2hCFO0lCL55QNrH0x/S0CkSs0gfelEPKtrZzGsxBUOB9qcX4vt8GRQOdkNeNYfkdPcHkAYT/p6jPqxdxiI77axPTRzV9Hm4SF2VKDa07Iph7g5BXVLmh52vQbvja5Q8o0XdHk2xsOdFm1cOhj4z2CO; nsit=EtKUHqlw23eYaw_mQmNm9CDc; nseappid=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGkubnNlIiwiYXVkIjoiYXBpLm5zZSIsImlhdCI6MTY4NDAxMzE1NSwiZXhwIjoxNjg0MDIwMzU1fQ.GUGc3kZcTROofu3P3nSaFP_qQurC5W-Fgs4RfrPkD1g; bm_mi=B04486FB4B6BE76B21F360DEE41235A7~YAAQ1SdzaOAi6wKIAQAAF4YBFxOXAwSmC3ZzLzCH0YZlx9LeeOfZma4BQwlHpwUHK/4asUhCQJd+YAbryO/4yyMcAC5Wz61bnx0TKRYVSVRKekHZJRmAmXdpKADYfCzLpdhBEJ80vlV+1dbhl69Od5pOzyIuA0sBNyCi5pJ2ilhY43bo3UIwh8oeCZWnJwtWutq0TtUt4Fa2sN7D7uW1WObbImvJy3OXEPHYFI6b9+t7ZV5OTzjH9e9vkBuNOelSVlaBfL4JcEYQ2BRHDU6tYGv97gd9pmzuj5E1nKwC9J3gQgCzIqKpOHWvVhnb6nGCbqKxStzuPVXTs6bAcx83N942wz4t~1; nseQuoteSymbols=[{\"symbol\":\"BHARTIARTL\",\"identifier\":null,\"type\":\"equity\"},{\"symbol\":\"NIFTY\",\"identifier\":null,\"type\":\"equity\"},{\"symbol\":\"TCS\",\"identifier\":null,\"type\":\"equity\"},{\"symbol\":\"TATASTEEL\",\"identifier\":null,\"type\":\"equity\"}]; bm_sv=2DBF1813CC3234F42DE268395B67B940~YAAQ1SdzaIo+6wKIAQAAa+QCFxNcD4nlhVIHGXLQnHXrbExuAtrjg2KwF2W/jwz8vk3Trf9l6EfL7oIWMiouUxH9GB2eP0xgX6RzwO/PKYAZY/tMbp6DYFo++Fh1ZjhvFQBqVZ2v1f1laIXY5I8iiHNgXaRcL0ZUIPAoyy6WCre944EpVLWU4A7mLcRQbevVv1te5HXnzweYyvagwH4+72COFBn+GzUmaFBJDrrrCEQ7qcVd3DozVtM7sp04bM5aeuuY~1',
      Referer: "https://www.nseindia.com/get-quotes/derivatives?symbol=TATASTEEL",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
  };

  axios(config).then((response) => {
    console.log(response.request.path)
    if (response.data.data[0]) {
      datta.push({
        date: response.data.data[0]["FH_TIMESTAMP"],
        sp: response.data.data[0]["FH_STRIKE_PRICE"],
        stp: response.data.data[0]["FH_SETTLE_PRICE"],
      });
      //   console.log(response.data.data[0]["FH_STRIKE_PRICE"]);

      //   console.log(response.data.data[0]["FH_CLOSING_PRICE"]);

      //   console.log(response.request.path);
      fs.writeFile("myjsonfile.json", JSON.stringify(datta));
    }
    if (!response.data.data[0]) {
      datta.push({
        date: response.request.path.substring(37, 47),
        sp: response.request.path[36],
        stp: "-",
      });
      //   console.log(response.data.data[0]["FH_STRIKE_PRICE"]);

      //   console.log(response.data.data[0]["FH_CLOSING_PRICE"]);

      //   console.log(response.request.path);
      fs.writeFile("myjsonfile.json", JSON.stringify(datta));
    }
  });
}
