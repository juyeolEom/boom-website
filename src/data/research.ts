export const researchAreas = [
  {
    slug: "biomedical-optics",
    title: "Biomedical Optics",
    description: "We develop optical imaging technologies to explore living systems, understand disease, and bring new insights to medicine.",
    topics: [
      {
        id: "oct-catheter-imaging",
        title: "OCT & Catheter-based Imaging",
        shortTitle: "OCT & Catheter Imaging",
        lead: "Developing optical systems to reveal tissue structure and biochemical information.",
        paragraphs: [
          "We develop optical coherence tomography (OCT) systems and catheter-based imaging technologies to reveal tissue structure and complementary biochemical information. Our work spans benchtop instruments and miniature probes, combining optical design, scanning, and multimodal detection.",
          "We design illumination, signal collection, and fiber-based interfaces to improve image quality and adapt imaging systems to different measurement settings. Integrating OCT with fluorescence lifetime imaging (OCT-FLIm) brings structural and biochemical information together, providing a platform for biomedical research and clinical imaging.",
        ],
        images: [
          { file: "catheter-system.webp", caption: "OCT-FLIm brings tissue structure and biochemical information together.", alt: "Combined OCT and fluorescence lifetime imaging catheter system" },
          { file: "benchtop-oct.webp", caption: "Benchtop OCT reveals tissue structure in 3D.", alt: "Benchtop OCT volume, en face view, and cross-section of tissue alongside a histology image" },
        ],
      },
      {
        id: "cardiovascular-imaging",
        title: "Cardiovascular Imaging & Theranostics",
        shortTitle: "Cardiovascular Imaging",
        lead: "Understanding blood vessels beyond their shape.",
        paragraphs: [
          "Understanding vascular disease requires information about both the structure of a blood vessel and the composition of its lesions. We develop intravascular OCT (IV-OCT) and combine OCT with fluorescence lifetime imaging (OCT-FLIm) or near-infrared fluorescence (NIRF) to explore these features together.",
          "By linking detailed images with biochemical information, we aim to improve the assessment of atherosclerotic plaques. Alongside imaging, we investigate light-activated, targeted approaches to treatment, connecting the detection of disease with the study of therapeutic response.",
        ],
        images: [{ file: "cardiovascular-imaging.webp", caption: "IV-OCT reveals the inside of a blood vessel in 3D.", alt: "Three-dimensional optical image of the inner wall of a coronary artery" }],
      },
      {
        id: "optical-biopsy",
        title: "Optical Biopsy & Label-free Imaging",
        shortTitle: "Optical Biopsy",
        lead: "Reading the information already present in tissue.",
        paragraphs: [
          "Tissue carries optical signatures that can reveal its structure and biochemical state. We use OCT, natural fluorescence, fluorescence lifetime imaging (FLIm), and Raman spectroscopy to explore these features without adding labels.",
          "By combining optical images with quantitative analysis, we study how tissue changes with disease. Our research spans tissue specimens and biological models, building imaging approaches that can support tissue assessment and the understanding of biological processes.",
        ],
        images: [
          { file: "optical-biopsy.webp", caption: "OCT reveals patterns within thyroid tissue.", alt: "An optical image of thyroid tissue beside a corresponding histology image" },
          { file: "optical-biopsy-2.webp", caption: "Label-free microscopy reveals tissue organization.", alt: "Color-coded microscopic image showing layers and structures within tissue" },
        ],
      },
      {
        id: "three-dimensional-microscopy",
        title: "Advanced 3D & Multimodal Microscopy",
        shortTitle: "3D & Multimodal Microscopy",
        lead: "Seeing more of the structure and complexity of living systems.",
        paragraphs: [
          "Cells and tissues are three-dimensional, and different imaging methods reveal different parts of their story. We develop multiphoton, light-sheet, and multimodal microscopes to bring these complementary views together.",
          "By designing illumination and detection as an integrated system, we work to improve imaging speed, signal quality, and access to deeper structures. The result is a richer view of biological organization, from fine cellular features to larger tissue volumes.",
        ],
        images: [
          { file: "brain-microscopy.webp", caption: "Two-photon light-sheet microscopy traces structures across brain tissue.", alt: "Fluorescence microscopy reveals neural structures in a mouse brain section" },
          { file: "multimodal-microscopy.webp", caption: "Different views reveal complementary features of the same tissue.", alt: "Six complementary three-dimensional optical views of skin tissue" },
        ],
      },
      {
        id: "ai-for-optical-imaging",
        title: "AI for Optical Imaging",
        shortTitle: "AI for Optical Imaging",
        lead: "Turning complex optical data into clearer, more useful information.",
        paragraphs: [
          "Weak signals, noise, and complex tissue structures can make optical images difficult to acquire and interpret. We develop AI methods that draw on the properties of optical signals and the spatial and temporal information within images.",
          "Our research connects image restoration with quantitative analysis, from reducing noise while preserving fine structures to identifying tissue features and disease-related patterns. We aim to make optical imaging more informative for biological research and medical applications.",
        ],
        images: [
          { file: "ai-imaging.webp", caption: "AI helps bring fine structures into clearer view.", alt: "Three-dimensional fluorescence images before and after AI noise reduction" },
          { file: "ai-analysis.webp", caption: "AI highlights tissue features in spectroscopic OCT.", alt: "Optical vessel images showing expert annotations and AI analysis of lipid regions" },
        ],
      },
    ],
  },
  {
    slug: "optical-metrology",
    title: "Optical Metrology",
    description: "We use light to measure surfaces, track alignment and deformation, and reveal material properties without physical contact.",
    topics: [
      {
        id: "surface-metrology",
        title: "3D Surface & Precision Metrology",
        shortTitle: "3D Surface Metrology",
        lead: "Measuring shape and detail without touching the surface.",
        paragraphs: [
          "Small, complex surfaces demand measurements that are both precise and efficient. We develop optical methods that reconstruct three-dimensional shape and resolve subtle differences in height across a sample.",
          "Our approach combines confocal detection, interferometry, and image processing to capture surface information across materials with different reflective properties. By bringing shape and color together, we create detailed representations for applications ranging from industrial inspection to biomedical measurement.",
        ],
        images: [{ file: "surface-metrology.webp", caption: "Capturing the shape and color of complex surfaces.", alt: "Photographs, height maps, and color 3D reconstructions of a circuit board and dental model" }],
      },
      {
        id: "optical-inspection",
        title: "Optical Alignment & Deformation Measurement",
        shortTitle: "Alignment & Deformation",
        lead: "Tracking small changes in position and shape.",
        paragraphs: [
          "Small shifts and deformations can make precise alignment difficult, especially when a sample moves during measurement. We develop camera-based optical methods that locate reference markers and measure how their positions change across a surface.",
          "By combining synchronized image acquisition, optical calibration, and image processing, we turn these measurements into a map of in-plane displacement. This approach supports real-time tracking of substrate deformation and provides the information needed for accurate alignment.",
        ],
        images: [{ file: "optical-alignment.webp", caption: "Optical reference markers reveal small alignment errors.", alt: "Optical reference markers and image analysis for measuring alignment errors" }],
      },
      {
        id: "material-characterization",
        title: "Spectroscopic & Material Characterization",
        shortTitle: "Material Characterization",
        lead: "Learning what a material is made of through its response to light.",
        paragraphs: [
          "Samples that look similar can have very different compositions and optical properties. We study how light interacts with materials to uncover information that appearance alone cannot provide.",
          "Our research uses Raman spectroscopy and other optical measurements to analyze chemical signatures and local material properties. By improving instrument design and signal processing, we work toward practical ways to map composition and characterize both chemical and biological samples.",
        ],
        images: [{ file: "raman-analysis.webp", caption: "Light reveals differences in material composition.", alt: "A tissue sample and Raman map showing distinct fat and muscle regions" }],
      },
    ],
  },
];
