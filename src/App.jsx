import cvPdf from './assets/CV_MOKHTARI_RAYAN_Datascientist_aiengineer.pdf'

const navigation = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#projets-savoir-faire', label: 'Projets & Savoir-faire' },
  { href: '#cv-detaille', label: 'CV detaille' },
  { href: '#curiosites', label: 'Bibliotheque & Curiosites' },
  { href: '#contact', label: 'Contact' },
]

const profileFacts = [
  { label: 'Localisation', value: 'Ile-de-France, Paris' },
  { label: 'Telephone', value: '07 49 86 10 89', href: 'tel:+33749861089' },
  {
    label: 'Email',
    value: 'mokhtarirayan04@gmail.com',
    href: 'mailto:mokhtarirayan04@gmail.com',
  },
  { label: 'Recherche active', value: 'CDI Data Scientist / Ingenieur IA' },
  {
    label: 'GitHub',
    value: 'github.com/RayanMokhtar',
    href: 'https://github.com/RayanMokhtar',
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/rayan-mokhtari04',
    href: 'https://www.linkedin.com/in/rayan-mokhtari04/',
    external: true,
  },
]

const missionCards = [
  {
    company: 'Bouygues Telecom',
    role: 'Ingenieur IA en apprentissage',
    period: 'Sept. 2024 - Aujourd hui',
    points: [
      'Conception d agents intelligents (LangChain, LangGraph) pour l analyse d incidents et la reduction du temps de resolution.',
      'Optimisation de process metiers et analyse de patrimoine telecom via background tasks (orchestration de traitements asynchrones).',
      'RAG hybride (FAISS + BM25 + Graph-RAG + RAPTOR) et industrialisation en architecture microservices (React, FastAPI, RDS, Docker, Kubernetes/OpenShift).',
    ],
  },
  {
    company: 'Data Panel',
    role: 'Ingenieur ML/IA Freelance',
    period: 'Juin 2025 - Aujourd hui',
    points: [
      'Conseil en strategie data: architecture cible, gouvernance de la qualite de donnees, cadrage KPI et standardisation des flux.',
      'Architecture GCP avec Firebase/Firestore, BigQuery, Cloud Scheduler et analytics Power BI.',
      'Missions ML: detection d anomalies menages (non supervise), anomalies de prix (methode des 3 sigmas), suivi qualite et fiabilite des pipelines.',
    ],
  },
  {
    company: 'RS Telecom (ESN)',
    role: 'Developpeur IA & Python Full-Stack (Stage)',
    period: 'Avr. 2024 - Aout 2024',
    points: [
      'Moteur de generation de leads (NLP, extraction de mots-cles, Selenium).',
      'Moteur de recherche de CV intelligent avec Elasticsearch et BM25.',
      'Integration au site existant avec Django et APIs metier.',
    ],
  },
]

const projects = [
  {
    name: 'VisionAssist',
    period: '2025 - En cours',
    stack: ['Jetson Nano', 'RT-DETR', 'TensorRT', 'RAG', 'STT/TTS', 'MQTT'],
    details: [
      'Detection d objets, tracking robuste et assistance contextuelle pour personnes malvoyantes.',
      'Pipeline local pour inference temps reel et communication embarquee.',
    ],
    link: 'https://github.com/RayanMokhtar/VisionAssist',
  },
  {
    name: 'Fire&FloodAI / Segmentation satellite',
    period: '2024 - 2025',
    stack: ['U-Net', 'CNN-LSTM', 'OpenCV', 'Computer Vision'],
    details: [
      'Traitement d images satellitaires, segmentation semantique et prediction spatio-temporelle.',
      'Comparaison d approches CNN+LSTM et Transformers.',
    ],
    link: 'https://github.com/RayanMokhtar/Segmentation_images_satellites_Neural_networks',
  },
  {
    name: 'AI Wargame',
    period: 'En cours',
    stack: ['Reinforcement Learning', 'Simulation', 'Decision AI'],
    details: [
      'Developpement d agents autonomes apprenant des strategies adaptatives en environnement competitif.',
    ],
    link: 'https://github.com/RayanMokhtar/AI-Wargame',
  },
  {
    name: 'OLAP & MDX Cube',
    period: '2026',
    stack: ['OLAP', 'MDX', 'BI', 'Analyse multidimensionnelle'],
    details: [
      'Modelisation de cubes OLAP et interrogation MDX pour analyses business avancees.',
    ],
    link: 'https://github.com/RayanMokhtar/mdx_cube_olap',
  },
  {
    name: 'Text processing articles recherche',
    period: '2026',
    stack: ['NLP', 'Word2Vec', 'Doc2Vec', 'GloVe', 'SciBERT'],
    details: [
      'Pipeline NLP complet pour exploration scientifique, representation vectorielle et recherche semantique.',
    ],
    link: 'https://github.com/RayanMokhtar/text_processing_articles_recherche',
  },
  {
    name: 'AlarmSystem & Embarque',
    period: '2025',
    stack: ['STM32', 'Python', 'Systemes embarques', 'Robotique'],
    details: [
      'Conception de systemes embarques et logique de monitoring temps reel.',
      'Pont entre logique hardware et moteur d inference logiciel.',
    ],
    link: 'https://github.com/RayanMokhtar/AlarmSystem',
  },
  {
    name: 'AEROPRICE',
    period: 'Projet Full-Stack',
    stack: ['PHP', 'APIs', 'Database', 'Deploiement web'],
    details: [
      'Developpement full-stack et mise en ligne de la plateforme.',
    ],
    link: 'https://aeroprice.alwaysdata.net',
  },
]

const savoirFaire = [
  {
    title: 'IA generative & NLP applique',
    items: [
      'RAG hybride: contextuel + semantique, BM25, FAISS, Graph-RAG, RAPTOR',
      'Embeddings et modeles: Word2Vec, Doc2Vec, GloVe, SciBERT',
      'Moteurs d inference, extraction d information, agents cognitifs',
    ],
  },
  {
    title: 'Data engineering & BI',
    items: [
      'OLAP, MDX, ETL/ELT, data quality, gouvernance de donnees',
      'BigQuery, Firestore/Firebase, Cloud Scheduler, Power BI',
      'SQL, data warehousing, pipelines analytics de production',
    ],
  },
  {
    title: 'ML, data mining & modelisation',
    items: [
      'Algorithmes ML supervises/non supervises, detection d anomalies',
      'Data mining sur car accidents, prediction de tendances, segmentation image',
      'Evaluation, explicabilite et optimisation de performance des modeles',
    ],
  },
  {
    title: 'Architecture cloud, full-stack et MLOps',
    items: [
      'React, FastAPI, Django, microservices, APIs REST',
      'Docker, Kubernetes, OpenShift, CI/CD, MLflow, Kubeflow',
      'Conception d applications robustes de la R&D jusqu au deploiement',
    ],
  },
  {
    title: 'Systemes embarques & robotique',
    items: [
      'Jetson, STM32, Raspberry Pi, communication MQTT',
      'Vision artificielle, suivi temps reel, calcul au plus proche du capteur',
      'Couplage software/hardware pour systemes intelligents hybrides',
    ],
  },
]

const cvTimeline = [
  {
    year: '2021',
    title: 'Baccalaureat mathematiques - Mention tres bien',
    skills: [
      'Base solide en mathematiques, logique et raisonnement.',
      'Premiers projets techniques structures.',
    ],
  },
  {
    year: '2022',
    title: 'ESTIN - classes preparatoires informatique',
    skills: [
      'Algorithmique avancee, structures de donnees, C/C++, Java.',
      'Fondamentaux reseaux, securite, systemes et architecture machine.',
    ],
  },
  {
    year: '2023',
    title: 'CY Cergy - transition vers la data et IA',
    skills: [
      'Data science, statistiques appliquees, premiers pipelines ML.',
      'Prise en main de Python data stack, visualisation et analyse.',
    ],
  },
  {
    year: '2024',
    title: 'Stage RS Telecom + debut alternance Bouygues',
    skills: [
      'NLP applique, moteur de recherche intelligent, integration web Django.',
      'Debut des systemes agents, RAG et industrialisation IA en entreprise.',
    ],
  },
  {
    year: '2025',
    title: 'Freelance Data Panel + projets IA avances',
    skills: [
      'Conseil strategie data et architecture cloud orientee qualite de donnees.',
      'Developpement projets IA: VisionAssist, AI-Wargame, data mining, OLAP/MDX.',
    ],
  },
  {
    year: '2026',
    title: 'Consolidation expertise et recherche CDI',
    skills: [
      'Montage de solutions IA de bout en bout: modelisation, MLOps, deploiement.',
      'Specialisation en inference, systemes hybrides et produits data a impact metier.',
    ],
  },
]

const spokenLanguages = [
  'Francais C2',
  'Anglais B2 oral / C1 ecrit',
  'Berbere (Kabyle) C2',
  'Arabe C2',
]

const curiosityShelves = [
  {
    title: 'Strategie, IA et prospective',
    items: [
      'La guerre des intelligences',
      'Trilogie de Yuval Noah Harari',
      'Livres IA: introduction PyTorch, scikit-learn et modelisation moderne',
      'Conferences sur IA generative, inference et systemes intelligents',
    ],
  },
  {
    title: 'Romans, enquete et pensee critique',
    items: [
      'Romans de Yasmina Khadra',
      'Agatha Christie',
      'Lecture orientee analyse, deduction et vision strategique',
    ],
  },
  {
    title: 'Culture visuelle et imagination',
    items: [
      'BD et mangas: SNK, Dragon Ball et univers narratifs forts',
      'Interet pour la construction de mondes, la strategie et les dynamiques humaines',
    ],
  },
  {
    title: 'Exploration technique personnelle',
    items: [
      'Robotique, embarque, systemes temps reel et simulation',
      'Inference engine, experimentation hardware/software, prototypes iteratifs',
      'Echecs, mathematiques et logique comme entrainement analytique',
    ],
  },
]

function App() {
  const year = new Date().getFullYear()

  return (
    <div className="app">
      <div className="aurora aurora-left" aria-hidden="true"></div>
      <div className="aurora aurora-right" aria-hidden="true"></div>

      <nav className="top-nav reveal" aria-label="Navigation principale">
        <a className="brand" href="#accueil">
          RM
        </a>
        <ul className="nav-links">
          {navigation.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <header className="section hero reveal delay-1" id="accueil">
        <p className="chip">Disponible pour CDI en IA / Data</p>
        <h1 className="hero-title">MOKHTARI Rayan - Data Scientist</h1>
        <p className="hero-subtitle">
          Je concois des solutions IA de la recherche jusqu au deploiement
          industriel, avec un focus fort sur la valeur metier, la robustesse et
          la scalabilite.
        </p>
        <p className="hero-summary">
          Accueil centre sur mon experience terrain: industrialisation de systemes
          IA, optimisation de process, architecture data cloud et projets
          appliques en entreprise comme en freelance.
        </p>

        <div className="action-row">
          <a className="action-button" href={cvPdf} target="_blank" rel="noreferrer">
            Consulter mon CV
          </a>
          <a className="action-button secondary" href={cvPdf} download="CV_MOKHTARI_Rayan.pdf">
            Telecharger mon CV
          </a>
          <a
            className="action-button secondary"
            href="https://github.com/RayanMokhtar"
            target="_blank"
            rel="noreferrer"
          >
            Voir GitHub
          </a>
        </div>

        <ul className="profile-grid" aria-label="informations personnelles">
          {profileFacts.map((fact) => (
            <li className="profile-card" key={fact.label}>
              <p>{fact.label}</p>
              {fact.href ? (
                <a
                  href={fact.href}
                  target={fact.external ? '_blank' : undefined}
                  rel={fact.external ? 'noreferrer' : undefined}
                >
                  {fact.value}
                </a>
              ) : (
                <span>{fact.value}</span>
              )}
            </li>
          ))}
        </ul>

        <div className="experience-snapshot">
          {missionCards.map((mission) => (
            <article className="snapshot-card" key={mission.company}>
              <div className="card-head">
                <h3>{mission.company}</h3>
                <span>{mission.period}</span>
              </div>
              <p className="card-role">{mission.role}</p>
              <ul className="bullet-list">
                {mission.points.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </header>

      <main>
        <section className="section reveal delay-2" id="projets-savoir-faire">
          <div className="section-header">
            <p>Execution technique</p>
            <h2>Projets & Savoir-faire</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="card-head">
                  <h3>{project.name}</h3>
                  <span>{project.period}</span>
                </div>
                <div className="tag-row">
                  {project.stack.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="bullet-list">
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                  Voir le projet
                </a>
              </article>
            ))}
          </div>

          <div className="savoir-grid">
            {savoirFaire.map((block) => (
              <article className="skill-card" key={block.title}>
                <h3>{block.title}</h3>
                <ul className="bullet-list">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal delay-3" id="cv-detaille">
          <div className="section-header">
            <p>Parcours detaille</p>
            <h2>CV detaille annee par annee</h2>
          </div>

          <div className="cv-actions">
            <a className="action-button" href={cvPdf} target="_blank" rel="noreferrer">
              Ouvrir le CV PDF
            </a>
            <a className="action-button secondary" href={cvPdf} download="CV_MOKHTARI_Rayan.pdf">
              Telecharger le CV
            </a>
          </div>

          <div className="cv-preview-wrap">
            <object className="cv-preview" data={cvPdf} type="application/pdf">
              <p>
                Apercu PDF non disponible ici. Ouvre le fichier directement:
                <a href={cvPdf} target="_blank" rel="noreferrer">
                  CV MOKHTARI Rayan
                </a>
              </p>
            </object>
          </div>

          <div className="timeline-grid cv-timeline">
            {cvTimeline.map((step) => (
              <article className="education-card" key={step.year}>
                <div className="card-head">
                  <h3>{step.year}</h3>
                  <span>Progression</span>
                </div>
                <p className="card-role">{step.title}</p>
                <ul className="bullet-list">
                  {step.skills.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="language-row">
            {spokenLanguages.map((lang) => (
              <span className="tag" key={lang}>
                {lang}
              </span>
            ))}
          </div>
        </section>

        <section className="section reveal" id="curiosites">
          <div className="section-header">
            <p>Culture personnelle</p>
            <h2>Bibliotheque & Curiosites</h2>
          </div>
          <div className="curiosity-grid">
            {curiosityShelves.map((shelf) => (
              <article className="interest-card" key={shelf.title}>
                <h3>{shelf.title}</h3>
                <ul className="bullet-list">
                  {shelf.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="section contact-section reveal delay-1" id="contact">
        <h2>Ouvert a un CDI en IA / Data</h2>
        <p>
          Je recherche un poste CDI en data science, IA generative ou ingenierie
          ML. Je peux intervenir sur la chaine complete: cadrage metier,
          modelisation, industrialisation, deploiement et suivi production.
        </p>
        <div className="contact-grid">
          <a href="mailto:mokhtarirayan04@gmail.com">mokhtarirayan04@gmail.com</a>
          <a href="tel:+33749861089">07 49 86 10 89</a>
          <a href="https://github.com/RayanMokhtar" target="_blank" rel="noreferrer">
            github.com/RayanMokhtar
          </a>
          <a
            href="https://www.linkedin.com/in/rayan-mokhtari04/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/rayan-mokhtari04
          </a>
        </div>
        <small>{year} MOKHTARI Rayan - Portfolio React statique.</small>
      </footer>
    </div>
  )
}

export default App
