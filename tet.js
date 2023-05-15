var axios = require("axios");
var fs = require("fs").promises;
var datta = [];
const jss = [
 {
   "Date": "02-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 18200
 },
 {
   "Date": "03-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 18200
 },
 {
   "Date": "04-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 18000
 },
 {
   "Date": "05-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 18000
 },
 {
   "Date": "06-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 17900
 },
 {
   "Date": "09-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 18100
 },
 {
   "Date": "10-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 17900
 },
 {
   "Date": "11-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 17900
 },
 {
   "Date": "12-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 17900
 },
 {
   "Date": "13-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 18000
 },
 {
   "Date": "16-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 17900
 },
 {
   "Date": "17-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 18100
 },
 {
   "Date": "18-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 18200
 },
 {
   "Date": "19-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 18100
 },
 {
   "Date": "20-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 18000
 },
 {
   "Date": "23-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 18100
 },
 {
   "Date": "24-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 18100
 },
 {
   "Date": "25-01-2023",
   "Expiry": "25-Jan-2023",
   "Strike Price": 17900
 },
 {
   "Date": "27-01-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 17600
 },
 {
   "Date": "30-01-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 17600
 },
 {
   "Date": "31-01-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 17700
 },
 {
   "Date": "01-02-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 17600
 },
 {
   "Date": "02-02-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 17600
 },
 {
   "Date": "03-02-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 17900
 },
 {
   "Date": "06-02-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 17800
 },
 {
   "Date": "07-02-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 17700
 },
 {
   "Date": "08-02-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 17900
 },
 {
   "Date": "09-02-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 17900
 },
 {
   "Date": "10-02-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 17900
 },
 {
   "Date": "13-02-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 17800
 },
 {
   "Date": "14-02-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 17900
 },
 {
   "Date": "15-02-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 18000
 },
 {
   "Date": "16-02-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 18000
 },
 {
   "Date": "17-02-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 17900
 },
 {
   "Date": "20-02-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 17800
 },
 {
   "Date": "21-02-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 17800
 },
 {
   "Date": "22-02-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 17600
 },
 {
   "Date": "23-02-2023",
   "Expiry": "23-Feb-2023",
   "Strike Price": 17500
 },
 {
   "Date": "24-02-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 17500
 },
 {
   "Date": "27-02-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 17400
 },
 {
   "Date": "28-02-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 17300
 },
 {
   "Date": "01-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 17500
 },
 {
   "Date": "02-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 17300
 },
 {
   "Date": "03-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 17600
 },
 {
   "Date": "06-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 17700
 },
 {
   "Date": "08-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 17800
 },
 {
   "Date": "09-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 17600
 },
 {
   "Date": "10-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 17400
 },
 {
   "Date": "13-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 17200
 },
 {
   "Date": "14-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 17000
 },
 {
   "Date": "15-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 17000
 },
 {
   "Date": "16-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 17000
 },
 {
   "Date": "17-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 17100
 },
 {
   "Date": "20-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 17000
 },
 {
   "Date": "21-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 17100
 },
 {
   "Date": "22-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 17200
 },
 {
   "Date": "23-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 17100
 },
 {
   "Date": "24-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 16900
 },
 {
   "Date": "27-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 17000
 },
 {
   "Date": "28-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 17000
 },
 {
   "Date": "29-03-2023",
   "Expiry": "29-Mar-2023",
   "Strike Price": 17100
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
      "&optionType=CE&strikePrice=" +
      jss[i]["Strike Price"] +
      ".00" +
      "&expiryDate=" +
      jss[i]["Expiry"] +
      "&instrumentType=OPTIDX&symbol=NIFTY",
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
        'defaultLang=en; nseQuoteSymbols=[{\"symbol\":\"BHARTIARTL\",\"identifier\":null,\"type\":\"equity\"},{\"symbol\":\"TCS\",\"identifier\":null,\"type\":\"equity\"},{\"symbol\":\"NIFTY\",\"identifier\":null,\"type\":\"equity\"}]; ak_bmsc=9697821DD842EF07CA7B169B1C55F62C~000000000000000000000000000000~YAAQDj/LFyOWwQeIAQAAn/+OFhOiLvsv5HcAyCQhHk3FnqW42Ru15RyaH5adGYnnPiW1+oBaFbV61YBoTwxcAEmpa7GTW/wZrhqVH6y+6qevJRFRWmS7b9YGLo4UgWIGzLl2gLu0QHB+sCDrRPYzUk/vNHkHWDIaPp8+2jPUf4I4n1TQUuEu57ebRlh11mpVd1cHzP/C5XkJkb7hZW2GHKbbkVl8LzQaGvInTxGSlkaBRATrbvKBAooy7uE/9OZ5YRCyhccBWVr0AWsNhKwGVnya5wN9OHBt2UrZwrd+ghUtngv5Nfx1GwBy6VhQaiWA33VOKONra7VNDtXydZDEKReqd9YNIYRjPFN7tACzCs3wrAbB9LunkXwAzwaYFIjaqo+A0Utv2wDZU1Sy1Q==; nsit=XgHIHjPAd59LF4y8sM1mKG0t; nseappid=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGkubnNlIiwiYXVkIjoiYXBpLm5zZSIsImlhdCI6MTY4NDAwNTY1MiwiZXhwIjoxNjg0MDEyODUyfQ.OoDPfW8p4migeNQH-UahDqEy-AZswT23lW5otjaVYzY; AKA_A2=A; bm_mi=0D6A6B14EB5D48C4762E62515E117F4B~YAAQDj/LF66WwQeIAQAAbwiPFhO7wACxWqc4FvgDvJZtzRzO+tMAgcOB+SRzi/rTyPa7PpGdlEK7pjd2Fe0oOPxgUWyp4dJDGaSEiPTYAcG6erj2VXc2Na/qcTq3h6aK0TIFda70jw9v2iIWnngCGkVFE2IUgeSwcTntf7O6+6xjwPH+0M5fDMeJTGwYHVH9tFbV0fR4uStk8JjQ9xQLJJvPX8jft4bX390b/LPa4Si91JMuPsbMlvNKMYahkTbcqVDt/9jWP1vWogDhYG225A5iwGNzL1u02H3AoXYpN31SwW3OhzEMBHxidVBfdwJrUF7cUZuUuwcPp0lRbNfx6ox0~1; bm_sv=E6EE3CE56C9AE2E2620AA057848C22B2~YAAQDj/LF1eawQeIAQAAOEaPFhPBgqUoASY3SUi0r0fQdf4sHvHaYlJ/ElM85EopGAZkH5cN7s1HTDA7SxNE5m58QYMtgECueMLby+yvYAw1bW7NU65gPZ5j/GOyqgtl5XsAZylndAasFW+nBnBl8mnE9FXwTD0HHPxdKnlZLk3fB2Tvvph2BB9EJTXL7NKkS7/7+QRLh011Dzn8HFGWOQWKTCfkQG2DzAg5llXEt4ZeQU1KwLm9yZePjK78E84vvAI=~1',
      Referer: "https://www.nseindia.com/get-quotes/derivatives?symbol=NIFTY",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
  };

  axios(config).then((response) => {
    if (response.data.data[0]) {
      datta.push({
        date: response.data.data[0]["FH_TIMESTAMP"],
        sp: response.data.data[0]["FH_STRIKE_PRICE"],
        stp: response.data.data[0]["FH_SETTLE_PRICE"],
      });
      //   console.log(response.data.data[0]["FH_STRIKE_PRICE"]);

      //   console.log(response.data.data[0]["FH_CLOSING_PRICE"]);

      //   console.log(response.request.path);
      fs.writeFile("myjsonfilee.json", JSON.stringify(datta));
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
      fs.writeFile("myjsonfilee.json", JSON.stringify(datta));
    }

  });
}
