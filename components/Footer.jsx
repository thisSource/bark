import Link from "next/link";


const titleStyle = "p-0.5 font-bold font-Josefin";
const itemStyle = "p-0.5 font-Josefin hover:text-blue-700 hover:underline cursor-pointer";

const about = [
  {
    id: "1",
    name: "PROJEKT",
    href: "/howitworks",
    style: titleStyle,
  },
  {
    id: "2",
    name: "Kullavik",
    href: "/howitworks",
    style: itemStyle,
  },
  {
    id: "3",
    name: "Boden",
    href: "/fund",
    style: itemStyle,
  },
  {
    id: "4",
    name: "Villa Aston",
    href: "/about",
    style: itemStyle,
  },
  {
    id: "5",
    name: "Trädgårdskonst",
    href: "/legal",
    style: itemStyle,
  },
];

const business = [
  {
    id: "1",
    name: "OM FÖRETAGET",
    href: "/business",
    style: titleStyle,
  },
  {
    id: "2",
    name: "Magnus Bark",
    href: "/business",
    style: itemStyle,
  },
  {
    id: "3",
    name: "F-skatt",
    href: "/dashboard",
    style: itemStyle,
  },
];

const contact = [
  {
    id: "1",
    name: "FRÅGOR OCH SVAR",
    href: "/contact",
    style: titleStyle,
  },
  {
    id: "2",
    name: "Kontaka oss",
    href: "/contact",
    style: itemStyle,
  },
  {
    id: "3",
    name: "F.A.Q",
    href: "/faq",
    style: itemStyle,
  },
];

function Footer() {

  return (
    <div className="ml-10">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 mt-3 mb-10 text-sm">
      <Link href="/">
            <a className="mr-20 text-black text-base font-Josefin hover:bg-gray-100 hover:underline curser-pointer">
              BARK.SE
            </a>
          </Link>
        {/* <div>
          {about.map((item) => (
            <Link key={item.id} href={item.href} passHref>
              <div className="mt-1">
                <a className={item.style}>{item.name}</a>
              </div>
            </Link>
          ))}
        </div> */}
        <div>
          {business.map((item) => (
            <Link key={item.id} href={item.href} passHref>
              <div className="mt-1">
                <a className={item.style}>{item.name}</a>
              </div>
            </Link>
          ))}
        </div>
        <div>
          {contact.map((item) => (
            <Link key={item.id} href={item.href} passHref>
              <div className="mt-1">
                <a className={item.style}>{item.name}</a>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
