const startTime = new Date();

startTime.setMonth(4);
startTime.setDate(10);
startTime.setHours(0);
startTime.setMinutes(0);
startTime.setSeconds(0);

const tobeIdentified = [
  "Xeraphinite",
  "rjhot",
  "ssxgit",
  "sumukeio",
  "ziwh",
  "JasonQiu",
  "yeanli95",
  "yunli2015",
  "linearindep",
  "liandmin",
  "290473174@qq.com",
  "Huzhixin00",
  "Leah-Luo",
  "HackBL",
  "mozro.0327",
  "liucy0417",
  "watermelonDrip",
  "wonderful1234",
  "SWUFEzyf",
  "suffocatingly0",
  "christ36",
  "awarmdevil",
  "NchuYJ",
  "zc-githubs",
  "paopaohua",
  "Critsu",
  "Placeholder",
  "Levix",
  "newVincentFong",
  "cyaoyao",
  "cengjingeng",
  "hengyi666",
  "fzzfgbw",
  "Erika2001",
  "1998yyh",
  "LexieLiu01",
  "javanlu123",
  "chelseachen007",
  "yuris304",
  "fangyh",
  "fyyjyx-github",
];

module.exports = {
  startTime: startTime.getTime(),
  secret: process.env.secret,
  clientId: "c16b80e7b58a5a007157",
  db: [
    {
      login: "azl397985856",
    },
    {
      login: "Yueqi-19",
    },
    {
      login: "rfhklwt",
    },
    {
      login: "Liuqibaa",
    },
    {
      login: "Mvbbb",
    },
    {
      login: "nanwy",
    },
    {
      login: "XiaoY0324",
    },
  ].concat(
    tobeIdentified.map((name) => ({
      login: name,
    }))
  ),
};
