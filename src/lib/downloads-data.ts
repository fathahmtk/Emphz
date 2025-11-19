
export type TechnicalDownload = {
  id: string;
  title: string;
  description: string;
  fileUrl: string; 
};

export const technicalDownloads: TechnicalDownload[] = [
    {
        "id": "datasheet-enclosures",
        "title": "GRP Electrical Enclosures Datasheet",
        "description": "Complete technical specifications for our standard electrical enclosures.",
        "fileUrl": "/downloads/EMPHZ-Datasheet-GRP-Enclosures.pdf"
    },
    {
        "id": "datasheet-kiosks",
        "title": "GRP Kiosks Datasheet",
        "description": "Features, dimensions, and options for our GRP utility and industrial kiosks.",
        "fileUrl": "/downloads/EMPHZ-Datasheet-GRP-Kiosks.pdf"
    },
    {
        "id": "installation-guide",
        "title": "Standard Installation Guide",
        "description": "General guide for site preparation and installation of EMPHZ GRP products.",
        "fileUrl": "/downloads/EMPHZ-Installation-Guide.pdf"
    },
    {
        "id": "compliance-pack",
        "title": "ISO & Compliance Pack",
        "description": "Our ISO 9001, 14001, and other relevant compliance certificates.",
        "fileUrl": "/downloads/EMPHZ-Compliance-Pack.pdf"
    }
];

