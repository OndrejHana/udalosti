import Image from 'next/image';
import banner from 'public/banner.jpg';

export default function Home() {
  return (
    <>
      <div>
        <Image src={banner} alt="banner" className='banner'/>
        <h1>Dobřichovická alotria</h1>
        <p>Přiďte se zůčastnit jubilejního 20. ročníku jednoho z největších historických a šermířských festivalů v Čechách</p>
      </div>
      <div className="contact">
        <p>Kontakt: hana@spsejecna.cz</p>
      </div>    
    </>
    );
}
