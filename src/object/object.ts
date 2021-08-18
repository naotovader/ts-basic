export default function objectSample() {
  const a: object = {
    name: "Naotovader",
    age: 27,
  };
  // a.name

  // オブジェクトリテラル記法で型定義
  let country: {
    language: string;
    name: string;
  } = {
    language: "Japanese",
    name: "Japan",
  };

  console.log("Object object sample 1:", country);

  country = {
    language: "English",
    name: "United states of america",
  };

  console.log("Object object sample 2:", country);

  // オプショナルとreadonly

  const Shinonome: {
    age: number;
    lastname: string;
    readonly firstName: string;
    gender?: string;
  } = {
    age: 27,
    lastname: "Shinonome",
    firstName: "nano",
  };

  Shinonome.gender = "male";
  Shinonome.lastname = "kamado";
  // Shinonome.firstName = 'tanjiro'

  console.log("Object object sample 3:", Shinonome);

  //インデックスシグネチャ

  const capitals: {
    [countryname: string]: string;
  } = {
    Japan: "Tokyo",
    Korea: "Seoul",
  };

  capitals.China = "Beijing";
  capitals.Canada = "Ottawa";

  console.log("Object object sample 4:", capitals);
}
