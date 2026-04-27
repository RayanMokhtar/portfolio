export const profileLinks = {
  github: 'https://github.com/RayanMokhtar',
  linkedin: 'https://www.linkedin.com/in/rayan-mokhtari04/',
  email: 'mailto:mokhtarirayan04@gmail.com',
  phone: 'tel:+33749861089',
  phoneDisplay: '07 49 86 10 89',
  emailDisplay: 'mokhtarirayan04@gmail.com',
}

export const siteContent = {
  fr: {
    languageCode: 'fr',
    navigation: [
      { path: '/', label: 'Accueil' },
      { path: '/projects', label: 'Projets' },
      { path: '/skills', label: 'Savoir-faire' },
      { path: '/cv', label: 'CV détaillé' },
      { path: '/library', label: 'Bibliothèque' },
      { path: '/contact', label: 'Contact' },
    ],
    header: {
      role: 'Data Scientist · Ingénieur IA/ML',
      location: 'Île-de-France, Paris',
      cdiLabel: 'Recherche active de CDI',
      languageSwitch: 'English version',
    },
    home: {
      badge: 'Format conférence · Vision, impact, exécution',
      title: 'MOKHTARI Rayan',
      subtitle:
        'Je transforme les idées IA en produits concrets : de la stratégie data à la mise en production industrialisée.',
      summary:
        'Mon approche : comprendre le besoin métier, construire une architecture robuste, entraîner les modèles utiles, puis déployer proprement avec des standards MLOps. Je cherche un CDI où porter des sujets IA ambitieux de bout en bout.',
      cta: {
        cv: 'Voir le CV',
        projects: 'Explorer mes projets',
      },
      highlights: [
        {
          title: 'Bouygues Telecom',
          role: 'Ingénieur IA en apprentissage',
          period: 'Sept. 2024 - Aujourd’hui',
          details: [
            'Conception d’agents intelligents avec LangChain et LangGraph pour l’analyse d’incidents.',
            'Optimisation de processus et analyse de patrimoine via des background tasks pour accélérer les traitements.',
            'Industrialisation d’architectures GenAI : React, FastAPI, RDS, Docker, Kubernetes/OpenShift.',
          ],
        },
        {
          title: 'Data Panel',
          role: 'Ingénieur ML/IA Freelance',
          period: 'Juin 2025 - Aujourd’hui',
          details: [
            'Conseil en stratégie data : gouvernance, qualité de données, structuration des flux.',
            'Architecture cloud data avec Firebase, Firestore, BigQuery et orchestration via Cloud Scheduler.',
            'Développement de modèles de détection d’anomalies et pilotage d’indicateurs de qualité.',
          ],
        },
        {
          title: 'RS Telecom (ESN)',
          role: 'Développeur IA & Python Full-Stack (Stage)',
          period: 'Avr. 2024 - Août 2024',
          details: [
            'Moteur de génération de leads (NLP + Selenium).',
            'Moteur de recherche intelligent de CV (Elasticsearch, BM25).',
            'Intégration full-stack via Django dans un site existant.',
          ],
        },
      ],
      stats: [
        { value: '10+', label: 'projets IA/Data significatifs' },
        { value: '3', label: 'environnements cloud maîtrisés (AWS, GCP, hybride)' },
        { value: 'CDI', label: 'objectif professionnel actuel' },
      ],
    },
    projects: {
      title: 'Projets techniques · Stack mise en avant',
      intro:
        'Chaque projet est présenté avec sa stack technique, son objectif et ses livrables. Les liens pointent directement vers les repositories ou démos.',
      stackLabel: 'Stack technique',
      linkLabel: 'Ouvrir le projet',
      items: [
        {
          name: 'VisionAssist',
          period: '2025 - En cours',
          objective:
            'Assistance intelligente pour personnes malvoyantes avec perception temps réel et interaction vocale.',
          stack: ['Jetson Nano', 'RT-DETR', 'TensorRT', 'RAG', 'STT/TTS', 'MQTT'],
          achievements: [
            'Détection d’objets, suivi temporel et pipeline d’inférence embarquée.',
            'Couplage IA locale + raisonnement contextuel pour une assistance utile sur le terrain.',
          ],
          url: 'https://github.com/RayanMokhtar/VisionAssist',
        },
        {
          name: 'Fire&FloodAI / Segmentation d’images satellitaires',
          period: '2024 - 2025',
          objective:
            'Segmenter des zones sinistrées et modéliser l’évolution spatio-temporelle des risques.',
          stack: ['Computer Vision', 'U-Net', 'CNN-LSTM', 'OpenCV', 'Transformers'],
          achievements: [
            'Pipeline complet : prétraitement, calibration, extraction de features.',
            'Comparaison d’architectures pour améliorer la précision en contexte réel.',
          ],
          url: 'https://github.com/RayanMokhtar/Segmentation_images_satellites_Neural_networks',
        },
        {
          name: 'AI-Wargame (apprentissage par renforcement)',
          period: 'En cours',
          objective:
            'Concevoir des agents capables d’apprendre des stratégies adaptatives dans un environnement compétitif.',
          stack: ['Reinforcement Learning', 'Simulation', 'Décision IA'],
          achievements: [
            'Comparaison de politiques selon robustesse, convergence et anticipation.',
          ],
          url: 'https://github.com/RayanMokhtar/AI-Wargame',
        },
        {
          name: 'Text Processing Articles Recherche',
          period: '2026',
          objective:
            'Construire un moteur de traitement sémantique de corpus scientifiques.',
          stack: ['Word2Vec', 'Doc2Vec', 'GloVe', 'SciBERT', 'NLP pipeline'],
          achievements: [
            'Représentation vectorielle avancée pour recherche d’information pertinente.',
            'Base solide pour un moteur d’inférence orienté documents.',
          ],
          url: 'https://github.com/RayanMokhtar/text_processing_articles_recherche',
        },
        {
          name: 'OLAP / MDX Cube',
          period: '2026',
          objective:
            'Analyser des données multidimensionnelles via modélisation cube et requêtage MDX.',
          stack: ['OLAP', 'MDX', 'BI', 'Modélisation décisionnelle'],
          achievements: [
            'Construction d’un cube analytique pour exploration métier rapide.',
          ],
          url: 'https://github.com/RayanMokhtar/mdx_cube_olap',
        },
        {
          name: 'ETL_Films',
          period: '2025',
          objective:
            'Mettre en place des opérations ETL sur des sources cinématographiques hétérogènes.',
          stack: ['ETL', 'Data Integration', 'SQL', 'Data quality'],
          achievements: [
            'Normalisation de la donnée et consolidation de plusieurs sources.',
            'Préparation d’une base exploitable pour analytics et reporting.',
          ],
          url: 'https://github.com/RayanMokhtar/ETL_Films',
        },
        {
          name: 'AlarmSystem / embarqué',
          period: '2025',
          objective:
            'Développer un système embarqué de monitoring et d’alerte, connecté à une logique logicielle.',
          stack: ['STM32', 'Python', 'Systèmes embarqués', 'Robotique'],
          achievements: [
            'Pont hardware/software pour scénarios temps réel.',
          ],
          url: 'https://github.com/RayanMokhtar/AlarmSystem',
        },
        {
          name: 'AEROPRICE',
          period: 'Projet livré',
          objective:
            'Conception full-stack et mise en ligne d’une plateforme web fonctionnelle.',
          stack: ['PHP', 'APIs REST', 'Base de données', 'Déploiement web'],
          achievements: [
            'Développement des fonctionnalités clés de bout en bout.',
          ],
          url: 'https://aeroprice.alwaysdata.net',
        },
      ],
    },
    skills: {
      title: 'Savoir-faire · Ingénierie et exécution',
      intro:
        'Au-delà des outils, je mets l’accent sur la capacité à livrer une solution stable, explicable et exploitable par les équipes métier.',
      blocks: [
        {
          title: 'IA générative et NLP appliqué',
          items: [
            'RAG hybride : BM25, FAISS, Graph-RAG, RAPTOR.',
            'Embeddings : Word2Vec, Doc2Vec, GloVe, SciBERT.',
            'Agents IA, extraction d’information, moteurs d’inférence.',
          ],
        },
        {
          title: 'Data engineering & BI',
          items: [
            'ETL/ELT, OLAP, MDX, data warehousing.',
            'BigQuery, Firestore/Firebase, Cloud Scheduler, Power BI.',
            'Qualité de données et structuration de pipelines analytiques.',
          ],
        },
        {
          title: 'Machine Learning et Data Mining',
          items: [
            'Algorithmes supervisés/non supervisés et détection d’anomalies.',
            'Data mining accidents, corrélations, modélisation prédictive.',
            'Optimisation et évaluation de performances des modèles.',
          ],
        },
        {
          title: 'MLOps, cloud et architecture produit',
          items: [
            'React, FastAPI, Django, microservices, APIs REST.',
            'Docker, Kubernetes, OpenShift, CI/CD, MLflow, Kubeflow.',
            'Conception orientée production : monitoring, robustesse, scalabilité.',
          ],
        },
        {
          title: 'Systèmes embarqués et robotique',
          items: [
            'Jetson, STM32, Raspberry Pi, MQTT.',
            'Vision artificielle et calcul proche capteur.',
            'Intégration hardware/software pour systèmes intelligents hybrides.',
          ],
        },
      ],
      stackGroups: [
        {
          title: 'Langages',
          values: ['Python', 'Java', 'C/C++', 'C#', 'JavaScript', 'SQL'],
        },
        {
          title: 'IA/ML',
          values: ['PyTorch', 'TensorFlow', 'scikit-learn', 'XGBoost', 'Transformers'],
        },
        {
          title: 'Cloud/Data',
          values: ['GCP', 'AWS hybride', 'BigQuery', 'Firestore', 'Kafka', 'Airflow'],
        },
      ],
    },
    cv: {
      title: 'CV détaillé · progression année par année',
      intro:
        'Cette page synthétise mon évolution académique et technique, avec un accès direct au CV PDF.',
      openCv: 'Ouvrir le CV PDF',
      downloadCv: 'Télécharger le CV',
      timeline: [
        {
          year: '2021',
          title: 'Baccalauréat Mathématiques (Mention Très Bien)',
          items: ['Excellence en logique, algèbre et résolution de problèmes.'],
        },
        {
          year: '2021 - 2023',
          title: 'ESTIN · Classes préparatoires',
          items: [
            'Algorithmique, structures de données, systèmes, réseaux et sécurité.',
            'Bases solides en programmation bas niveau et architecture.',
          ],
        },
        {
          year: '2023 - présent',
          title: 'CY Cergy Paris Université · Master Ingénierie des Données',
          items: [
            'Data science, cloud, MLOps, deep learning, architecture distribuée.',
            'Mise en pratique continue sur projets académiques et professionnels.',
          ],
        },
        {
          year: '2024',
          title: 'RS Telecom + démarrage alternance Bouygues',
          items: [
            'Premières industrialisations IA orientées métier.',
            'Intégration full-stack et montée en complexité des cas d’usage.',
          ],
        },
        {
          year: '2025 - 2026',
          title: 'Data Panel + spécialisation projets IA avancés',
          items: [
            'Conseil data et construction de systèmes IA orientés production.',
            'Renforcement NLP, data mining, inference engines et embarqué.',
          ],
        },
      ],
      languagesTitle: 'Langues',
      languages: [
        'Français C2',
        'Anglais B2 oral / C1 écrit',
        'Berbère (Kabyle) C2',
        'Arabe C2',
      ],
    },
    library: {
      title: 'Bibliothèque stratégique, développement personnel & curiosités',
      intro:
        'Je cultive une veille active entre IA, stratégie, développement personnel, histoire et culture visuelle pour élargir mes angles d’analyse et de décision.',
      shelves: [
        {
          title: 'Intelligence, stratégie et futur',
          items: [
            'La Guerre des intelligences (Laurent Alexandre) : impact géopolitique et économique de l’IA sur les sociétés.',
            'Trilogie de Yuval Noah Harari (Sapiens, Homo Deus, 21 leçons pour le XXIe siècle) : vision long terme des civilisations et des ruptures technologiques.',
            'Livres IA pour progresser concrètement : introductions solides à PyTorch, scikit-learn et à l’ingénierie de l’inférence.',
            'Conférences IA et engineering productif : veille régulière sur les architectures modernes et les retours d’expérience terrain.',
          ],
        },
        {
          title: 'Développement personnel et performance cognitive',
          items: [
            'Libérez votre intelligence (Idriss Aberkane) : méthodes pour apprendre plus vite, mieux relier les savoirs et développer une pensée transversale.',
            'Homo Chaoticus (Didier Raoult) : réflexion sur la complexité, les systèmes instables et l’adaptation dans l’incertitude.',
            'L’Art de la guerre (Sun Tzu) : principes de stratégie, lecture des rapports de force et anticipation des scénarios.',
            'Tao Te Ching (Lao Tseu) : discipline intérieure, simplicité stratégique et intelligence du tempo dans l’action.',
          ],
        },
        {
          title: 'Histoire et civilisations',
          items: [
            'Mythologies grecque et romaine : archétypes, récits fondateurs et lecture symbolique des dynamiques humaines.',
            'Histoire de l’Algérie : trajectoires politiques, culturelles et mémorielles sur le temps long.',
            'Histoire du Vietnam : guerre, résilience nationale et stratégies d’adaptation.',
            'Mythologie nordique : visions du destin, du courage et de la transformation.',
          ],
        },
        {
          title: 'Romans, enquête et esprit critique',
          items: [
            'Yasmina Khadra : récits puissants sur la complexité humaine, l’éthique et les tensions du réel.',
            'Agatha Christie : rigueur de raisonnement, logique d’indices et structuration de l’enquête.',
            'Lectures qui entraînent l’analyse, la structure narrative et la prise de décision sous contrainte.',
          ],
        },
        {
          title: 'Culture graphique et imaginaire',
          items: [
            'BD et mangas : SNK, Dragon Ball et autres univers narratifs à forte intensité stratégique.',
            'Intérêt pour les mécaniques de monde, de tension, de leadership et de transformation des personnages.',
          ],
        },
        {
          title: 'Curiosité technique',
          items: [
            'Robotique, systèmes embarqués, prototypage rapide et expérimentation hardware/software.',
            'Échecs, mathématiques, logique et optimisation de décision en environnement contraint.',
          ],
        },
      ],
    },
    contact: {
      title: 'Construisons un projet IA utile et ambitieux',
      subtitle:
        'Je recherche un CDI en Data Science / IA où je peux prendre des responsabilités techniques de la conception au déploiement.',
      cards: [
        {
          label: 'Email',
          value: profileLinks.emailDisplay,
          href: profileLinks.email,
        },
        {
          label: 'Téléphone',
          value: profileLinks.phoneDisplay,
          href: profileLinks.phone,
        },
        {
          label: 'LinkedIn',
          value: 'rayan-mokhtari04',
          href: profileLinks.linkedin,
        },
        {
          label: 'GitHub',
          value: 'RayanMokhtar',
          href: profileLinks.github,
        },
      ],
      outro:
        'Disponible pour échanger sur un poste CDI, une feuille de route IA ou un audit technique de stack data.',
    },
    footer: {
      text: 'Portfolio de MOKHTARI Rayan · Data Scientist · Ingénieur IA/ML',
    },
  },
  en: {
    languageCode: 'en',
    navigation: [
      { path: '/', label: 'Home' },
      { path: '/projects', label: 'Projects' },
      { path: '/skills', label: 'Expertise' },
      { path: '/cv', label: 'Detailed CV' },
      { path: '/library', label: 'Library' },
      { path: '/contact', label: 'Contact' },
    ],
    header: {
      role: 'Data Scientist · AI/ML Engineer',
      location: 'Paris Region, France',
      cdiLabel: 'Actively looking for a full-time role',
      languageSwitch: 'Version française',
    },
    home: {
      badge: 'Conference-style narrative · Vision, impact, execution',
      title: 'MOKHTARI Rayan',
      subtitle:
        'I turn AI ideas into real products: from data strategy to reliable production deployment.',
      summary:
        'My approach combines business understanding, strong architecture, practical modeling and clean production delivery. I am currently looking for a full-time position where I can own AI products end-to-end.',
      cta: {
        cv: 'Open CV',
        projects: 'Explore projects',
      },
      highlights: [
        {
          title: 'Bouygues Telecom',
          role: 'AI Engineer Apprentice',
          period: 'Sep 2024 - Present',
          details: [
            'Built intelligent agents with LangChain and LangGraph for incident analysis.',
            'Improved operational processes and asset analysis through background task orchestration.',
            'Industrialized GenAI stack: React, FastAPI, RDS, Docker, Kubernetes/OpenShift.',
          ],
        },
        {
          title: 'Data Panel',
          role: 'Freelance ML/AI Engineer',
          period: 'Jun 2025 - Present',
          details: [
            'Data strategy consulting: governance, quality standards and scalable flows.',
            'Cloud data architecture with Firebase, Firestore, BigQuery and Cloud Scheduler.',
            'Anomaly detection models and quality monitoring pipelines.',
          ],
        },
        {
          title: 'RS Telecom (ESN)',
          role: 'AI & Python Full-Stack Developer Intern',
          period: 'Apr 2024 - Aug 2024',
          details: [
            'Lead generation engine using NLP and Selenium automation.',
            'Intelligent CV search engine with Elasticsearch and BM25.',
            'Full-stack integration with Django.',
          ],
        },
      ],
      stats: [
        { value: '10+', label: 'major AI/Data projects' },
        { value: '3', label: 'cloud environments (AWS, GCP, hybrid)' },
        { value: 'FT', label: 'current professional target' },
      ],
    },
    projects: {
      title: 'Projects · Technical stack first',
      intro:
        'Each project highlights its technical stack, goals and delivered outcomes, with direct links to repositories or demos.',
      stackLabel: 'Technical stack',
      linkLabel: 'Open project',
      items: [
        {
          name: 'VisionAssist',
          period: '2025 - Ongoing',
          objective:
            'Smart assistance for visually impaired users with real-time perception and voice interaction.',
          stack: ['Jetson Nano', 'RT-DETR', 'TensorRT', 'RAG', 'STT/TTS', 'MQTT'],
          achievements: [
            'Object detection, temporal tracking and embedded inference pipeline.',
            'Local AI + contextual reasoning for real-world usability.',
          ],
          url: 'https://github.com/RayanMokhtar/VisionAssist',
        },
        {
          name: 'Fire&FloodAI / Satellite segmentation',
          period: '2024 - 2025',
          objective:
            'Segment disaster zones and model spatio-temporal risk evolution.',
          stack: ['Computer Vision', 'U-Net', 'CNN-LSTM', 'OpenCV', 'Transformers'],
          achievements: [
            'End-to-end pipeline: preprocessing, calibration, feature extraction.',
            'Model comparisons for better real-world precision.',
          ],
          url: 'https://github.com/RayanMokhtar/Segmentation_images_satellites_Neural_networks',
        },
        {
          name: 'AI-Wargame (Reinforcement Learning)',
          period: 'Ongoing',
          objective:
            'Design agents learning adaptive strategies in a competitive simulation.',
          stack: ['Reinforcement Learning', 'Simulation', 'AI Decision'],
          achievements: ['Policy comparison on robustness and convergence.'],
          url: 'https://github.com/RayanMokhtar/AI-Wargame',
        },
        {
          name: 'Text Processing Research Articles',
          period: '2026',
          objective: 'Semantic processing engine for scientific corpora.',
          stack: ['Word2Vec', 'Doc2Vec', 'GloVe', 'SciBERT', 'NLP pipeline'],
          achievements: [
            'Advanced vector representation for relevant information retrieval.',
            'Foundation for an inference-oriented document engine.',
          ],
          url: 'https://github.com/RayanMokhtar/text_processing_articles_recherche',
        },
        {
          name: 'OLAP / MDX Cube',
          period: '2026',
          objective:
            'Multidimensional analysis through cube modeling and MDX querying.',
          stack: ['OLAP', 'MDX', 'BI', 'Decision modeling'],
          achievements: ['Built an analytical cube for fast business exploration.'],
          url: 'https://github.com/RayanMokhtar/mdx_cube_olap',
        },
        {
          name: 'ETL_Films',
          period: '2025',
          objective: 'ETL operations on heterogeneous cinema-related data sources.',
          stack: ['ETL', 'Data Integration', 'SQL', 'Data quality'],
          achievements: [
            'Data normalization and multi-source consolidation.',
            'Prepared analytics-ready datasets for reporting.',
          ],
          url: 'https://github.com/RayanMokhtar/ETL_Films',
        },
        {
          name: 'AlarmSystem / Embedded systems',
          period: '2025',
          objective: 'Monitoring and alerting embedded system connected to software logic.',
          stack: ['STM32', 'Python', 'Embedded systems', 'Robotics'],
          achievements: ['Hardware/software bridge for real-time scenarios.'],
          url: 'https://github.com/RayanMokhtar/AlarmSystem',
        },
        {
          name: 'AEROPRICE',
          period: 'Delivered project',
          objective: 'End-to-end full-stack development and deployment.',
          stack: ['PHP', 'REST APIs', 'Database', 'Web deployment'],
          achievements: ['Delivered key features from architecture to production.'],
          url: 'https://aeroprice.alwaysdata.net',
        },
      ],
    },
    skills: {
      title: 'Expertise · Engineering and delivery',
      intro:
        'Beyond tools, I focus on shipping stable, explainable and business-usable AI solutions.',
      blocks: [
        {
          title: 'Applied Generative AI and NLP',
          items: [
            'Hybrid RAG: BM25, FAISS, Graph-RAG, RAPTOR.',
            'Embeddings: Word2Vec, Doc2Vec, GloVe, SciBERT.',
            'AI agents, information extraction and inference engines.',
          ],
        },
        {
          title: 'Data Engineering & BI',
          items: [
            'ETL/ELT, OLAP, MDX, data warehousing.',
            'BigQuery, Firestore/Firebase, Cloud Scheduler, Power BI.',
            'Data quality and production-grade analytics pipelines.',
          ],
        },
        {
          title: 'Machine Learning & Data Mining',
          items: [
            'Supervised/unsupervised ML and anomaly detection.',
            'Accident data mining, correlations and predictive modeling.',
            'Model performance optimization and evaluation.',
          ],
        },
        {
          title: 'MLOps, Cloud and Product Architecture',
          items: [
            'React, FastAPI, Django, microservices, REST APIs.',
            'Docker, Kubernetes, OpenShift, CI/CD, MLflow, Kubeflow.',
            'Production-first design: monitoring, resilience and scalability.',
          ],
        },
        {
          title: 'Embedded Systems and Robotics',
          items: [
            'Jetson, STM32, Raspberry Pi, MQTT.',
            'Computer vision and near-sensor computation.',
            'Hardware/software integration for hybrid intelligent systems.',
          ],
        },
      ],
      stackGroups: [
        {
          title: 'Languages',
          values: ['Python', 'Java', 'C/C++', 'C#', 'JavaScript', 'SQL'],
        },
        {
          title: 'AI/ML',
          values: ['PyTorch', 'TensorFlow', 'scikit-learn', 'XGBoost', 'Transformers'],
        },
        {
          title: 'Cloud/Data',
          values: ['GCP', 'Hybrid AWS', 'BigQuery', 'Firestore', 'Kafka', 'Airflow'],
        },
      ],
    },
    cv: {
      title: 'Detailed CV · Year-by-year progression',
      intro:
        'This page summarizes my academic and technical growth with direct access to my PDF CV.',
      openCv: 'Open PDF CV',
      downloadCv: 'Download CV',
      timeline: [
        {
          year: '2021',
          title: 'Mathematics High School Diploma (High Honors)',
          items: ['Strong foundations in logic, algebra and problem solving.'],
        },
        {
          year: '2021 - 2023',
          title: 'ESTIN · Preparatory classes',
          items: [
            'Advanced algorithms, data structures, systems, networking and security.',
            'Solid low-level engineering fundamentals.',
          ],
        },
        {
          year: '2023 - present',
          title: 'CY Cergy Paris University · Data Engineering Master',
          items: [
            'Data science, cloud, MLOps, deep learning, distributed systems.',
            'Continuous project-based applied learning.',
          ],
        },
        {
          year: '2024',
          title: 'RS Telecom internship + Bouygues apprenticeship',
          items: [
            'First production-focused AI systems delivered in business context.',
            'Full-stack integration and higher complexity use cases.',
          ],
        },
        {
          year: '2025 - 2026',
          title: 'Data Panel freelance + advanced AI specialization',
          items: [
            'Data consulting and production-ready AI systems.',
            'Deeper NLP, data mining, inference engines and embedded systems.',
          ],
        },
      ],
      languagesTitle: 'Languages',
      languages: [
        'French C2',
        'English B2 spoken / C1 written',
        'Berber (Kabyle) C2',
        'Arabic C2',
      ],
    },
    library: {
      title: 'Strategic Library, Personal Growth & Curiosity',
      intro:
        'I maintain active cross-domain curiosity across AI, strategy, personal growth, history and visual culture to sharpen decision-making.',
      shelves: [
        {
          title: 'Intelligence, strategy and foresight',
          items: [
            'La Guerre des intelligences: AI-driven geopolitical and economic shifts.',
            'Yuval Noah Harari trilogy: long-term civilizational perspective on technology transitions.',
            'Hands-on AI books: PyTorch, scikit-learn and inference-focused engineering.',
            'Frequent AI conferences and practical engineering talks.',
          ],
        },
        {
          title: 'Personal development and cognitive performance',
          items: [
            'Libérez votre intelligence (Idriss Aberkane): learning acceleration and cross-domain thinking.',
            'Homo Chaoticus (Didier Raoult): complexity, uncertainty and adaptive reasoning.',
            'The Art of War (Sun Tzu): strategic positioning, anticipation and timing.',
            'Tao Te Ching (Lao Tzu): clarity, discipline and strategic simplicity.',
          ],
        },
        {
          title: 'History and civilizations',
          items: [
            'Greek and Roman mythology: symbolic patterns and foundational narratives.',
            'History of Algeria: political, cultural and memory dynamics over time.',
            'History of Vietnam: war, resilience and adaptive strategy.',
            'Norse mythology: destiny, courage and transformation frameworks.',
          ],
        },
        {
          title: 'Novels and critical thinking',
          items: [
            'Yasmina Khadra',
            'Agatha Christie',
            'Narratives that train analysis, deduction and constrained decision-making.',
          ],
        },
        {
          title: 'Visual culture and imagination',
          items: [
            'Comics and manga: Attack on Titan, Dragon Ball and more',
            'Interest in world-building, strategy and human dynamics',
          ],
        },
        {
          title: 'Technical curiosity',
          items: [
            'Robotics, embedded systems and rapid prototyping',
            'Chess, mathematics and decision optimization',
          ],
        },
      ],
    },
    contact: {
      title: 'Let us build useful and ambitious AI products',
      subtitle:
        'I am looking for a full-time role in Data Science / AI where I can own design, implementation and deployment.',
      cards: [
        {
          label: 'Email',
          value: profileLinks.emailDisplay,
          href: profileLinks.email,
        },
        {
          label: 'Phone',
          value: profileLinks.phoneDisplay,
          href: profileLinks.phone,
        },
        {
          label: 'LinkedIn',
          value: 'rayan-mokhtari04',
          href: profileLinks.linkedin,
        },
        {
          label: 'GitHub',
          value: 'RayanMokhtar',
          href: profileLinks.github,
        },
      ],
      outro:
        'Open to discuss full-time opportunities, AI roadmaps or technical stack reviews.',
    },
    footer: {
      text: 'Portfolio of MOKHTARI Rayan · Data Scientist · AI/ML Engineer',
    },
  },
}
