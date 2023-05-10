import React from "react";

export const Card = () => {
  const page = [
    {
      name: "Women Summer Flat Heel",
      img: "https://roselinlin.com/image_cache/resize/335x445/image/catalog/product/2021-07-24/5522f1d969b5590f1b6b3fba477b6169.png",
      price: " Rs.1500.00",
    },

    {
      name: "Women's Pure Color Lace Panel Long Dress",
      img: "https://roselinlin.com/image_cache/resize/335x445/image/catalog/product/2023-03/29/659b622793cff1cae8dae20213a06746.png",
      price: " Rs.2299.00",
    },

    {
      name: "FLAT SANDALS WITH RHINESTONES",
      img: "https://static.zara.net/photos///2023/V/1/1/p/1613/110/800/2/w/750/1613110800_6_5_1.jpg?ts=1677581319871",
      price: "Rs.3,990",
    },

    {
      name: "ORCHID-30ml",
      img: "https://static.zara.net/photos///2023/V/2/1/p/0120/821/999/2/w/750/0120821999_6_1_1.jpg?ts=1679046761214",
      price: "Rs.500.00",
    },

    {
      name: "PLATFORM RUNNING TRAINERS",
      img: "https://static.zara.net/photos///2023/V/1/1/p/5022/110/202/2/w/750/5022110202_6_5_1.jpg?ts=1676369889510",
      price: " Rs.4,999",
    },

    {
      name: "PINK FLAMBÉ 10 ML",
      img: "https://static.zara.net/photos///2023/V/2/1/p/0120/883/999/2/w/750/0120883999_6_1_1.jpg?ts=1679046878132",
      price: "Rs.490.00",
    },

    {
      name: "VIOLET BLOSSOM 180 ML / 6.09 OZ",
      img: "https://static.zara.net/photos///2023/V/2/1/p/0110/413/999/2/w/750/0110413999_6_1_1.jpg?ts=1679046677717",
      price: "Rs.1,290.00",
    },

    {
      name: "STRIPED KNIT TOP",
      img: "https://static.zara.net/photos///2023/V/0/1/p/3471/125/091/2/w/750/3471125091_6_1_1.jpg?ts=1674735676120",
      price: "Rs.2,590.00",
    },

    {
      name: "TOP WITH CUT-OUT DETAIL",
      img: "https://static.zara.net/photos///2023/V/0/1/p/9878/071/251/2/w/750/9878071251_6_1_1.jpg?ts=1675780610873",
      price: "Rs.2,890.00",
    },

    {
      name: "JEANS - Z1975 STRAIGHT",
      img: "https://static.zara.net/photos///2023/V/0/1/p/6164/023/427/17/w/750/6164023427_1_1_1.jpg?ts=1678896501885",
      price: "Rs.2,890.00",
    },

    {
      name: "ZW THE FULL LENGTH HIGH-RISE JEANS",
      img: "https://static.zara.net/photos///2023/V/0/1/p/2553/052/406/2/w/750/2553052406_6_1_1.jpg?ts=1672828537892",
      price: "Rs.3,990.00",
    },

    {
      name: "GIRL PRINT T-SHIRT",
      img: "https://static.zara.net/photos///2023/V/0/1/p/5644/163/250/2/w/750/5644163250_6_1_1.jpg?ts=1680678717284",
      price: "Rs.1,590",
    },

    {
      name: "CROPPED T-SHIRT WITH SLOGAN",
      img: "https://static.zara.net/photos///2023/V/0/1/p/5643/321/060/2/w/750/5643321060_6_1_1.jpg?ts=1679589895185",
      price: "Rs.1,590",
    },
    {
      name: "CROSSBODY BAG WITH METAL PIECE",
      img: "https://static.zara.net/photos///2023/V/1/1/p/6336/110/719/2/w/750/6336110719_6_1_1.jpg?ts=1679910876570",
      price: "Rs.3,290.00",
    },

    {
      name: "SMOCKED TOP",
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F92%2Fce%2F92ce3187d60318530373068589c5a76adf1543fa.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      price: "Rs.1,299.00",
    },

    {
      name: "FRILL-TRIMMED SATIN DRESS",
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F30%2Fde%2F30de474ae8b92d6ecec786b7d2a99eb8b529ad10.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      price: "Rs.2,299.00",
    },

    {
      name: "WOMEN BLUE FLORALFLUTTER SLEEVE SMOCKED MIDI DRESS",
      img: "https://imagescdn.aeo.in/img/app/product/8/805106-9790041.jpg?auto=format",
      price: "Rs.2,599.00",
    },

    {
      name: "WOMEN GOLD TESSEL LAYERING NECKLACE",
      img: "https://imagescdn.aeo.in/img/app/product/3/351199-1727256.jpg?w=317&auto=format",
      price: "Rs.519.00",
    },

    {
      name: "WOMEN GREY BAGGY CARGO JOGGER",
      img: "https://imagescdn.aeo.in/img/app/product/8/860330-10291575.jpg?auto=format",
      price: "Rs.4,999.00",
    },

    {
      name: "FULL LENGTH FLARE TROUSERS",
      img: "https://static.zara.net/photos///2023/V/0/1/p/2053/786/942/2/w/750/2053786942_1_1_1.jpg?ts=1675771028114",
      price: "Rs.2,999.00",
    },

    {
      name: "ULTIMATE MATTE LIQUID LIPSTICK",
      img: "https://static.zara.net/photos///2021/I/2/1/p/4130/326/618/2/w/750/4130326618_6_1_1.jpg?ts=1627917836091",
      price: "Rs.790.00",
    },

    {
      name: "STILETTO DEMI-MATTE LIPSTICK",
      img: "https://static.zara.net/photos///2021/I/2/1/p/4120/319/619/2/w/750/4120319619_6_1_1.jpg?ts=1634717305649",
      price: "Rs.790.00",
    },

    {
      name: "NOURISHING JELLY LIP OIL",
      img: "https://static.zara.net/photos///2021/I/2/1/p/4130/317/642/2/w/750/4130317642_6_1_1.jpg?ts=1633511455342",
      price: "Rs.790.00",
    },

    {
      name: "PINK FLAMB E180 ML / 6.09 OZ",
      img: "https://static.zara.net/photos///2023/V/2/1/p/0120/884/999/2/w/750/0120884999_6_1_1.jpg?ts=1679048751055",
      price: "Rs.990.00",
    },

    {
      name: "PLUSH JOGGING TROUSERS",
      img: "https://static.zara.net/photos///2023/V/0/1/p/1660/824/806/2/w/750/1660824806_6_1_1.jpg?ts=1675786395074",
      price: "Rs.1,790.00",
    },

    {
      name: "MESH RUNNING TRAINERS",
      img: "https://static.zara.net/photos///2023/V/1/1/p/5003/110/032/2/w/750/5003110032_6_1_1.jpg?ts=1679385731687",
      price: "Rs.5,990.00",
    },

    {
      name: "BASIC SOFT TROUSERS",
      img: "https://static.zara.net/photos///2023/V/0/1/p/5039/737/720/2/w/750/5039737720_6_1_1.jpg?ts=1671548568516",
      price: "Rs.5,990.00",
    },

    {
      name: "FUTURE ROSE 90 ML / 3.04 OZ",
      img: "https://static.zara.net/photos///2023/V/2/1/p/0110/432/999/2/w/750/0110432999_6_1_1.jpg?ts=1673262321911",
      price: "Rs.1,590.00",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-4 gap-10 px-12">
        {page?.map((items) => (
          <>
            <div className="border h-[400px] w-full p-2  ">
              <div className="flex justify-center  ">
                <img
                  src={items.img}
                  alt=""
                  className="h-72 w-52 p-2 rounded-2xl   "
                />
              </div>
              <p className="text-xl font-bold text-center">{items.name}</p>

              <p className="text-center mt-2">{items.price}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};








