import React from "react";
// import ProductCardSpecs from './ProductCardSpecs.jsx';

export default function ProductCard(props) {
  //dummy url for now
  // const imageURL =
  //   'https://images.unsplash.com/photo-1541562232579-512a21360020?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80';
  const { name, price, specs, imageURL, rating, prime } = props;

  const isPrime = (prime) => {
    if (prime)
      return (
        <p className='flex h-20 text-center'>
          <img
            className=' flex object-scale-down h-10 w-20 mx-auto'
            src='https://qph.cf2.quoracdn.net/main-qimg-227bd435134f40c302b9955d96eabaff'
          />
        </p>
      );
    else
      return (
        <p className='flex h-20 text-center'>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Regular
          Delivery
        </p>
      );
  };

  const renderStars = (rating) => {
    const stars = [];
    let starRating = rating;
    for (let i = 5; i > 0; i--) {
      if (starRating >= 1 && i - starRating >= 0) {
        stars.push(
          <img
            className=' flex object-scale-down h-12 w-12'
            key={i}
            src='https://img.freepik.com/free-vector/start_53876-25533.jpg?w=2000'
            alt='Full Star'
          />
        );
      } else if (starRating >= 0.5) {
        stars.push(
          <img
            className='flex object-scale-down h-7 w-7 mt-2.5 ml-1'
            key={i}
            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOUAAADcCAMAAAC4YpZBAAAAnFBMVEX/////zwD/1AH/xQH/0gD+yQD/zgD/zAD/wQL/1gL/2j3/2lj+yAD/0QD+wgH71gH//vr//fP/+eP/+OH//O//883/1Tf/66v/8sj/2VH//vf/6J//99z/4X//7bP/+uj/3m7/0yr/5ZP/6aT/3GP/8L//5Ir/88v/5pf/9dX/33P/10n/217/5Iz/1Tr/7bLx1jD21CD14WL06oCxfKyvAAAMrElEQVR4nN2dCXujthaGg+MITxNSL4l3DMTGu5Pb9v//t4sdHSEEEqAN4+/p05lpM7He6Oh82vX0ZFeHte/7k8++5Y+1qcB3XHSVi8JR04UxJd9FDgi5x6aLY0SDccp444w+mi6Sfg2cLGSCiYZNF0q7IhYywXQeLQn5ecgEM2y6WHo1cqm8k+RZ/Ht32XTBtCoELq/719NwAuH7WJX5QSA7nb+u/2GD/4P7SHn2CxHIX8onbCvoq+GS6RS0yS6hnOKGihoumUatIPd0CCU4i7tqtmga9Y3SqgTKNQ7ZcbNF06cDXZVA2Yf8c2i2cNoUUrmHUEI/AW0aLZs2DTJVSSgD96HMZJ+pSkL59PpQZuJRNkJTgpl4TRZOl2Jwxg5D+VBm8p0NWIrygcxkCVXZzVE+kJkcoaPeyVESMwkbK50mDajRSI4SRp2o7WaygJFkp4DyaYYrc99Y+fTIYasyQwlm4jRWPi1ibYShBC9146YKqEUnNvcwlDig0ampAupQzkZYyjmYSZunuY653MNQwle02Uygppwul3III5NBQ2VUV95GcpTQcltsJhHThS2ijNtuJnFB7slRgqO21kxORVWZowQz+W6kjMoaFVZljrLlZuLnewRFlMRMWrk4Pc+NRjiUpOvQRjNZF9lIEWWrzSQ/GuFRxu2d5prmRyM8yhabyWtx7imk3Ld1ZDIstpFiykFbzYRjI8WUbTWTPsdGOJRgJu7ceklVxLMRDiVMTaOF7YIqqXA0IqBs5chkx809HEoyzTW1XFIVcW2ES9lCMwkEVcmhhKVctz37Zrf83MOjhGV55NstqrwENsKnhC0WqC1mMhFVJY+ydWYisBEBZcvM5FOUe/iULRuZnIVVyafEWxLRzGZhZRUgYVXyKWF7aSvMZCvoEQgpW2UmQhsRUoKZuPe/af9HaCNCSrI1eG2vuJIai3OPkBLvo0WRveLKqcRGxJStGZlsSnKPmLIlZvIBHRhuVQopycgksFZiGV1Kq1JICaFw52bilNhIGSUZmdyzmax4E+pVKYmZTCyVWEbi0UgVyns2k3mwnK7WX2FJF7YCJXSd0OyyWE+Xo8ZX+/rBYbra++HJu550vh14Lm+VpZSQv27Hp6/f1Rsf/csq3gV9e231Y7iMJwv/fIq830KkbETCqiyjDPLfDgFxdJodF4vVcmnCaPr94Wc8+fI33x4iaEWnRkEiyDLKtF+RFwLg5NOjje+v4+lSsYY/hod4vT++niKnChklYcCWUkIfsURpDXun2Wa/nnyOhhUnxvrz5S5eb/1z5EFTq4pGfb4QspSy6AR1NeDkX97J9/fx9DDg1PBgFX57leKxTOKqLKecuAqfDzXsetFmxdZtEKp8a/iE6z+eJ8w9FSj7l+3mO3JUf+JX2jCTphauPGESJkn9Jep2S/gqUmJ9BMv4Z+FvZpHnygIjl+pDHas1eOpvJ2xXsq5XEp4KlLSCw+5nvw2TRFg3XbhhTUj0W2vOtdIq1Zo+ylSDpJf1s96Gr+OKSQQwVwJIdIvIW60pgGmkpPVx2MWL7XEmruHfoB3k/8/vF1dvag1RppoHw91qcgnPp4Ie2W1Int59cau1bmmSvEPKDPHyM15f/JkDIXo9rUs2BaL6ieQuKYliuIUmqcy4fKampZRPAdTfhASspZq0SQk1iEKyOGoL0iYlzO9GTxGu1oekhFM7ZNbtISmhOZJ1jYeknAElzEjZSrE2KfFUfWKYcGeCtcq0SAkz9ReyadMapj1KH1ZdDvQExINRbmCi/zqDTTo/JTOMLaPsk6sU3Z/rn0/IKqYdyoBcpYgPkM0dq5hWKA/pyAsuQxhRgzHz3VkblFQrTM81DD2LmBYoFymkR22RGtAzva2n9FPIKDMl2/+mML0/f9pM+ZpC5vaHn9M5Lrf3ZhDUMOU8vYy36LrhtJ4d1Ou9vzmGQM1SBmmKcQsv9PqiZiyfe4neUNcAqVFKykFcztaEnxTTu2H2es9uErt6SU1SrigH+eR90TT9SXhvPdCb29VJapByn0I6gk22SwrzpZfqXSOpOcoj5SDCXRcfqXF6bi+r5xdHB6oxyte0U1e2j49KxB7q5ZRUqtNRQzVESTtIWP7llHGi9zznFfX5JenWy7KaoRw6JQ7CymcdpVjPSbVeI7gurBFK2kF+qv2VRd5RuErqNYHt1KA1QUk5COI6CP8v0Y4ihn1LaL3fuhUDG6Cs6CCsDhxHqYCb8L65LnKuS59/aJmjrOwgrKgRZ85RahC/PyfMLy+33Q9u9yb9lLPUQeqeUaUSc5Jq368lfqd+6eV/Kf4zBY0nR1/1MlJDY5knT17pVKtDRiiHZWOQMtGO8nanlLv6DsJqTaXal7ukrDQGKRM9RlHH1E/5JecgrJYOlWrvjlLaQVjRk3vovij7s+pjkFLNtGHqpaQdJFT/dkddjqKVclR3DFKmvSZH0UmpwUFYxXTn/S4oJzJjkDIdtDiKPkrKQTyNL58FkQZH0UYZppBjrWeH+if1VKuL8iQ/BilV6Kpi6qH8UBuDlOlCpdqXNwk5Oii1OwirnwzmS23poKR61qYe/NjR26QboTTiIKyoSU8JTHXKLTUGMfh2Jv0eKbJOSTlIZPZGJ2qepC6mIiVlZrrnjvLypTHVSmjYQVgt6FRrjZIaz7tW7gyOJTGVKD3jDsLqkO5xs0ZJjs+bcxBWpI3UshMlSrh9LrL4+jJskK4Dqdgu8eZsmxeMzKxT4tsarL4jAI2kFqXamAT/YC3eyUVubrFYl/iCI/kp9NqC+4zdWlKjxPe3W3xHctMA5dz6ZVXgljYpySEmrSQCkat+rVLiM1vWbp5fSQWsKuXK8i1OfiOUQ3Jk1I7GjVCSM5Q6UfjqyzVLZUqc2S29vLxriBIei7JzV/CXXMAqU+IeF9rqhOFq1hAlvuDc0pPEcn0CdUryipKNG9mXks1SnRJfImfl4WVyZ3xdKVPCJQs27p0PyTyTlBQo8bWt6KyRhid4fN6rK2VK+GikD4Yncg9uA5T4KgkLF7LHqDlKfP83Mj8jC5fG14bUQDmyNpE3bpAyvePFsObSAauDEh//Mf66/UE6+eigxLPdxu9jX0gHrA7KT0sTeedGKW1N5EEXphlKuPTEcL9gJN8stVD6VjrsK/kUq4US90kMv+1xlG+WWigDcvuSScHybFdCOiifIhxLmngKBQ8YeY1RwkSeyUcv4OHg5ijXFjrsFw11OVMqoI2V95NCs8SUDnIdlRlVCyvv4CNSlDDJkLSqmXyzOhlfeT+oNEuK0kHoIlsGmMjb6QTLaK3SLEnI/nLKhq35lfeNSrP0nKwkwxZuZTTXYYcC6oC8piGpFQ/TK++BfMDmGaXD1vRE3kqW0mPYqLA91d5XBxN5plbefUnKDCSK1jRn/bA1vfL+LU4+neLfZBlvuXFLPy6BvJphi/+eoYm8ObhlretRaEjkvv7m1eGMfpWgZtieja687whldTHBms69xUzY1ujK4Ak2Q6/0wkp7pxwOK9sPQNn95hfZsDW78g4r7VUZmWA9sxEWSIat2ZV3p17AcoM1FRO2fsWwNbnyvqzVLIXBmooJ22pDz63BiTxYae+WI7LBuuGnw+A1G7ZV9hKaXHkPqzdLJljFg6T6YYt7mkZW3iOnImXFYE31lQlbp/xkPvwUdWBl9VG1WVYO1lRM2H6XhS0OK1f/2ZK4WrPMBKtbEqzUd8+G7VEcthNjE3nbKs2SCdY66SGbbR3hiMPcRN64nJLNrPXuEmDDVuQT+Iu0d9hhpV3QLJnMWv/gx5QJW77rzwytvMOrlJ2/OerIB2uqbLblD5RNrbzDSjsPUilYUyVhS3G6Y07Y7gxN5J2FlNSt9NfMqnJKKY4yYRsWhu3A0Mo7rivv76KsoyNYU+1RJmwLF2TNrLwL+gRMZi3+4df7sE0mbKOCsPWN9Atg7SA/gma6AXrGCbuysF0ZST+fHEomWPUt9y/EYYvXETRTHgqNhOmzhjqvFBKH7cRIXQ7y83dJg8xkVl7Wl9Zn5HJ/hnCyVvPCO9RaWplMn9XEVDcTtmnyhpV/3WMv2ALj/PO/m/7JMJYNImQ1Z8IWG/EBdvrrvmqDvDuOxv/+99+/UTZYzZ2JPGTD9jztPy3JVSb6D0mnz7Qwj9xWGdyraJ0J2+vBFHLzhf65yhE9LqI/1jd9VGcQct7sNjGJtyjCrDbppqrDuPCzpfcmiBTmPgpZOA3wq3X+JWhTa+5+FjMJVjOfU6Q5G7ausQ2HUyrvIPfb/OEVWgeH4kS893K0aDL+fVnbRSfTO+Tz+hnjZ8zdaGE45QXT9Xa7j7Xegln9w+Mv31/Etcdb/wf0XVU+cLW7pwAAAABJRU5ErkJggg=='
            alt='Half Star'
          />
        );
      } else {
        stars.push(
          <img
            className='flex object-scale-down h-8 w-8 mt-2 ml-1'
            key={i}
            src='data:image/png;base64,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'
          />
        );
      }
      starRating = starRating - 1;
    }

    return stars;
  };
  // creating key array so we can use map to render the product card specs
  // these show up underneath the product card name, image, and price
  // this is not an ideal method but due for MVP purposes it's what we've got lol
  // let keyArr = [];
  // let results = [];
  // if(specs){
  //   keyArr = Object.keys(specs);
  //   // filter out the name, price, and category since these are already displayed
  //   results = keyArr.filter(ele => ele !== 'img' && ele !== 'category' && ele !== 'price' && ele !== 'productname');
  // }

  return (
    <div className=''>
      <div className='border max-h-70 w-80 bg-white'>
        <img className='block mx-auto' src={imageURL}></img>
        <h1 className='text-[24px] mx-7 font-amazonEmber line-clamp-3 hover:line-clamp-none'>
          {name}
        </h1>
        <p className='text-center text-[40px] mx-7 font-amazonEmber'>
          ${price}
        </p>
        <p className='flex justify-evenly text-center text-[20px] mx-7'>
          {renderStars(rating)}
        </p>
        <p className='text-center text-[20px] mx-7 font-amazonEmber'>
          {rating}
        </p>
        <p className='text-center text-[20px] mx-7'>{isPrime(prime)}</p>
        {/* <div className='grid grid-cols-2 m-4'></div> */}
      </div>
    </div>
  );
}

/*    IDEAS
  NAME OF PRODUCT (MINUS WEIRD ASS TECH SPECS IN TITLE?)
  card div holds an image, scaled down to fit the card
  MAKER, sony etc
  price, ordered from least to greatest
  specs bolded, and printed either in line or if we stick to 4 specs, we can do 4 corners of a div?
  space between for cards,
  overflow y axis

  

  specs = [{"spec": "specValue"}, {"spec2: specValue2"}]
  or
  specs = [["spec": "specValue"], ["spec2: specValue2"]]
  or
  specs = {
    spec1: spec1value
    spec2: spec2value
    etc
  }
*/
