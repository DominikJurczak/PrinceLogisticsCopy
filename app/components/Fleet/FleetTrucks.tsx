import { useRef } from "react";
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/image-gallery.css'
import type { GalleryItem, ImageGalleryRef } from "react-image-gallery";



const images: GalleryItem[] = [
    {
        original: './images/Fleet/Gallery/1.png',
        thumbnail: './images/Fleet/Gallery/1.png',
    },
    {
        original: './images/Fleet/Gallery/2.png',
        thumbnail: './images/Fleet/Gallery/2.png',
    },
    {
        original: './images/Fleet/Gallery/3.png',
        thumbnail: './images/Fleet/Gallery/3.png',
    },
    {
        original: './images/Fleet/Gallery/4.png',
        thumbnail: './images/Fleet/Gallery/4.png',
    },
    {
        original: './images/Fleet/Gallery/5.png',
        thumbnail: './images/Fleet/Gallery/5.png',
    },

]


const FleetTrucks = () => {

    const galleryRef = useRef<ImageGalleryRef>(null)

return (
  <div className="w-full max-w-7xl mx-auto px-6 py-16 flex flex-col gap-16">

    <div className="grid  gap-12 items-center">

      <div className="flex justify-center">
        <img
          src="./images/Fleet/vnl-780.png"
          alt="Volvo VNL 780"
          className="w-1/2 object-contain drop-shadow-2xl hover:scale-105 transition duration-500"
        />
      </div>

      <div>

        <div className="overflow-hidden rounded-xl border border-gray-200 shadow-lg">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th
                  colSpan={2}
                  className="p-4 text-center text-lg font-bold tracking-wide bg-gray-300"
                >
                  VOLVO VNL 780
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-gray-50">
                <td className="p-4 font-medium">Engine</td>
                <td className="p-4 text-gray-600 text-center">VOLVO D13 (455hp)</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Torque</td>
                <td className="p-4 text-gray-600 text-center">1420–2050 lb-ft</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 font-medium">Transmission</td>
                <td className="p-4 text-gray-600 text-center">Volvo I-Shift (12-speed)</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">GVWR</td>
                <td className="p-4 text-gray-600 text-center">~52,000 – 53,200 lbs</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 font-medium">Front axle</td>
                <td className="p-4 text-gray-600 text-center">12,000 – 13,200 lbs</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Rear axle</td>
                <td className="p-4 text-gray-600 text-center">40,000 lbs (Tandem)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 font-medium">Fuel</td>
                <td className="p-4 text-gray-600 text-center">Dual 100–150 gallon tanks</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div className="max-w-4xl mx-auto text-center">
      <p className="text-gray-600 leading-relaxed text-lg">
        The Volvo VNL 780 is a heavy-duty Class 8 sleeper truck
        (typically 77-inch high-roof condo) produced roughly between
        2003–2017, known for long-haul comfort and aerodynamics.
        It features 12.8L–16.1L engines (Volvo D13/D16, Cummins ISX15)
        producing 400–600 hp, 12-speed I-Shift automated manual
        transmissions, and 6x4 axle configurations.
      </p>
    </div>

    <div className="mt-8">
      <h2 className="text-3xl font-bold text-center mb-8 tracking-wide">
        OUR TRUCK DRIVERS GALLERY
      </h2>

      <div className="rounded-xl overflow-hidden">
        <ImageGallery
          ref={galleryRef}
          items={images}
          showFullscreenButton={false}
          showBullets={false}
          showPlayButton={false}
        />
      </div>
    </div>

  </div>
);
}
 
export default FleetTrucks;