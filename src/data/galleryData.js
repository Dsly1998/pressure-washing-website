import gallery11 from "../images/gallery11.png";
import gallery12 from "../images/gallery12.png";
import gallery22 from "../images/gallery22.png";
import gallery21 from "../images/gallery21.png";
import gallery31 from "../images/gallery31.png";
import gallery32 from "../images/gallery32.png";
import gallery33 from "../images/gallery33.png";
import before41 from "../images/before41.jpg";
import after41 from "../images/after41.jpg";
import before51 from "../images/before51.jpg";
import after51 from "../images/after51.jpg";
import before61 from "../images/before61.jpg";
import after61 from "../images/after61.jpg";
import beforeDriveway from "../images/beforeDriveway1224.png";
import afterDriveway from "../images/afterDriveway1224.png";
import beforeSidewalk from "../images/beforeSidewalk1224.png";
import afterSidewalk from "../images/afterSidewalk1224.png";

export const galleryData = [
  {
    id: 'logo',
    image: gallery32,
    alt: "Red Line & Blue Logo",
    caption: "Red Line & Blue Pressure Washing",
    type: 'single'
  },
  {
    id: 'driveway',
    before: {
      image: beforeDriveway,
      alt: "Driveway Before Cleaning",
      caption: "Before"
    },
    after: {
      image: afterDriveway,
      alt: "Driveway After Cleaning",
      caption: "After"
    },
    type: 'comparison'
  },
  {
    id: 'sidewalk',
    before: {
      image: beforeSidewalk,
      alt: "Sidewalk Before Cleaning",
      caption: "Before"
    },
    after: {
      image: afterSidewalk,
      alt: "Sidewalk After Cleaning",
      caption: "After"
    },
    type: 'comparison'
  },
  {
    id: 'gallery3',
    before: {
      image: gallery33,
      alt: "Surface Before Cleaning",
      caption: "Before"
    },
    after: {
      image: gallery31,
      alt: "Surface After Cleaning",
      caption: "After"
    },
    type: 'comparison'
  },
  {
    id: 'gallery2',
    before: {
      image: gallery22,
      alt: "Area Before Cleaning",
      caption: "Before"
    },
    after: {
      image: gallery21,
      alt: "Area After Cleaning",
      caption: "After"
    },
    type: 'comparison'
  },
  {
    id: 'gallery1',
    before: {
      image: gallery11,
      alt: "Surface Before Cleaning",
      caption: "Before"
    },
    after: {
      image: gallery12,
      alt: "Surface After Cleaning",
      caption: "After"
    },
    type: 'comparison'
  },
  {
    id: 'before41',
    before: {
      image: before41,
      alt: "Area Before Cleaning",
      caption: "Before"
    },
    after: {
      image: after41,
      alt: "Area After Cleaning",
      caption: "After"
    },
    type: 'comparison'
  },
  {
    id: 'before51',
    before: {
      image: before51,
      alt: "Surface Before Cleaning",
      caption: "Before"
    },
    after: {
      image: after51,
      alt: "Surface After Cleaning",
      caption: "After"
    },
    type: 'comparison'
  },
  {
    id: 'before61',
    before: {
      image: before61,
      alt: "Area Before Cleaning",
      caption: "Before"
    },
    after: {
      image: after61,
      alt: "Area After Cleaning",
      caption: "After"
    },
    type: 'comparison'
  }
];

export const getGallerySlides = () => {
  return galleryData.map(item => {
    if (item.type === 'single') {
      return [{
        image: item.image,
        alt: item.alt,
        caption: item.caption
      }];
    }
    return [
      {
        image: item.before.image,
        alt: item.before.alt,
        caption: item.before.caption
      },
      {
        image: item.after.image,
        alt: item.after.alt,
        caption: item.after.caption
      }
    ];
  });
}; 