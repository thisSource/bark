import Image from "next/image";

function ServiceCard(company) {
  return (
    <div className="bg-[#bfcfb1] overflow-hidden font-Josefin text-gray-700 mb-10">
        <div className="flex flex-row justify-center">
            <Image
              src={company.image}
              width="70"
              height="70"
              alt="service symbol"
            />
        </div>
        <div className="py-4 px-4 text-xl text-center font-Josefin">
          <p className="font-bold">{company.name}</p>
          <p className="font-normal text-base">{company.offer}</p>
        </div>
    </div>
  );
}

export default ServiceCard;
