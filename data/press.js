const highlights = [
  {
    source: 'New York Times',
    href: 'https://www.nytimes.com/2021/08/23/us/wildfires-carbon-offsets.html',
    date: '08-23-2021',
  },
  {
    source: 'Bloomberg',
    href: 'https://www.bloomberg.com/news/features/2021-08-11/the-fictitious-world-of-carbon-neutral-fossil-fuel?srnd=green',
    date: '08-10-2021',
  },
  {
    source: 'CNBC',
    href: 'https://www.cnbc.com/video/2021/07/22/carbon-offsets-private-market-is-completely-unregulated-says-policy-expert.html',
    date: '07-22-2021',
  },
  {
    source: 'Planet Money',
    href: 'https://www.npr.org/2021/05/07/994774148/emission-impossible',
    date: '05-07-2021',
  },
  {
    source: 'ProPublica',
    href: 'https://www.propublica.org/article/the-climate-solution-actually-adding-millions-of-tons-of-co2-into-the-atmosphere',
    date: '04-29-2021',
  },
]

const press = [
  {
    source: ['Fast Company'],
    href: 'https://www.fastcompany.com/90680321/these-carbon-capturing-robotic-seaweed-farms-are-like-planting-forests-in-the-ocean',
    title:
      'These carbon-capturing robotic seaweed farms are like planting forests in the ocean',
    authors: ['Adele Peters'],
    date: '09-27-2021',
    format: 'print',
  },
  {
    source: ['MIT Tech Review'],
    href: 'https://www.technologyreview.com/2021/09/19/1035889/kelp-carbon-removal-seaweed-sinking-climate-change/',
    title:
      'Companies hoping to grow carbon-sucking kelp may be rushing ahead of the science',
    authors: ['James Temple'],
    date: '09-19-2021',
    format: 'print',
  },
  {
    source: ['Los Angeles Times'],
    href: 'https://www.latimes.com/politics/story/2021-09-08/what-is-the-california-climate-credit-does-it-cut-pollution',
    title:
      'Burned trees and billions in cash: How a California climate program lets companies keep polluting',
    authors: ['Evan Halper'],
    date: '09-08-2021',
    format: 'print',
  },
  {
    source: ['Financial Times'],
    href: 'https://www.ft.com/content/cfaa16bf-ce5d-4543-ac9c-9d9234e10e9d',
    title:
      'Carbon offsets: A license to pollute or a path to net zero emissions?',
    authors: ['Camilla Hodgson', 'Billy Nauman'],
    date: '08-30-2021',
    format: 'print',
  },
  {
    source: ['New York Times'],
    href: 'https://www.nytimes.com/2021/08/23/us/wildfires-carbon-offsets.html',
    title:
      'Wildfires are ravaging forests set aside to soak up greenhouse gases',
    authors: ['Winston Choi-Schagrin'],
    date: '08-23-2021',
    format: 'print',
  },
  {
    source: ['USA Today'],
    href: 'https://www.usatoday.com/story/news/nation/2021/08/22/wildfires-burning-up-trees-meant-fight-climate-change/8203005002/',
    title:
      "Wildfires are burning up trees meant to fight climate change: 'It’s definitely not working'",
    authors: ['Janet Wilson', 'Christel Hayes'],
    date: '08-22-2021',
    format: 'print',
  },
  {
    source: ['ProPublica', 'MIT Tech Review'],
    href: 'https://www.propublica.org/article/lawmakers-question-california-cap-and-trade-policies-citing-propublica-report',
    title:
      'Lawmakers question california cap and trade policies, citing ProPublica report',
    authors: ['Lisa Song', 'James Temple'],
    date: '08-20-2021',
    format: 'print',
  },
  {
    source: 'The Guardian',
    href: 'https://www.theguardian.com/environment/2021/aug/20/leon-carbon-neutral-burgers-restaurant-environmental',
    title: 'Scientists raise doubts over Leon’s ‘carbon-neutral’ burgers',
    authors: ['Patrick Greenfield'],
    date: '08-20-2021',
    format: 'print',
  },
  {
    source: ['Der Tagesspiegel'],
    href: 'https://background.tagesspiegel.de/energie-klima/bewegung-am-co2-kompensationsmarkt',
    title: 'Bewegung am CO2-Kompensationsmarkt',
    authors: ['Alicia Prager'],
    date: '08-19-2021',
    format: 'print',
  },
  {
    source: 'Marketplace',
    href: 'https://www.marketplace.org/2021/08/17/emissions-offsets-ease-travel-guilt-but-do-they-reduce-carbon-footprints/',
    title:
      'Emissions offsets ease travel guilt, but do they reduce carbon footprints?',
    authors: ['Amanda Peacher'],
    date: '08-17-2021',
    format: 'audio',
  },
  {
    source: 'California Legislature',
    href: 'https://www.assembly.ca.gov/media/joint-legislative-committee-climate-change-policies-20210817/video',
    title: 'Joint Legislative Committee on Climate Change Policies testimony',
    authors: ['Danny Cullenward'],
    date: '08-17-2021',
    format: 'video',
  },
  {
    source: 'Bloomberg',
    href: 'https://www.bloomberg.com/news/features/2021-08-11/the-fictitious-world-of-carbon-neutral-fossil-fuel?srnd=green',
    title: "How to sell 'carbon neutral' fossil fuel that doesn't exist",
    authors: ['Stephen Stapczynski', 'Akshat Rathi', 'Godfrey Marawanyika'],
    date: '08-10-2021',
    format: 'print',
  },
  {
    source: 'The Energy Gang',
    href: 'https://podcasts.apple.com/us/podcast/as-profits-rise-oil-majors-face-new-pressures/id663379413?i=1000531636031',
    title: 'As profits rise, oil majors face new pressures',
    authors: ['Stephen Lacey', 'Katherine Hamilton', 'Ed Crooks'],
    date: '08-10-2021',
    format: 'audio',
  },
  {
    source: 'River Reporter',
    href: 'https://riverreporter.com/stories/whom-are-we-trying-to-fool,46718',
    title: 'Whom are we trying to fool?',
    authors: ['Carol Roig'],
    date: '08-10-2021',
    format: 'print',
  },
  {
    source: 'Foreign Policy',
    href: 'https://foreignpolicy.com/2021/08/06/climate-conflict-europe-us-green-trade-war/',
    title:
      'Present at the creation of a climate alliance—or a climate conflict',
    authors: ['Adam Tooze'],
    date: '08-06-2021',
    format: 'print',
  },
  {
    source: 'The Independent',
    href: 'https://www.independent.co.uk/climate-change/news/carbon-offsets-microsoft-bp-forests-wildfires-b1897012.html',
    title:
      'Carbon offset programs of companies like Microsoft, BP go up in smoke as wildfires decimate forests',
    authors: ['Sheila Flynn'],
    date: '08-05-2021',
    format: 'print',
  },
  {
    source: 'Financial Times',
    href: 'https://www.ft.com/content/3f89c759-eb9a-4dfb-b768-d4af1ec5aa23',
    title:
      'US forest fires threaten carbon offsets as company-linked trees burn',
    authors: ['Camilla Hodgson'],
    date: '08-03-2021',
    format: 'print',
  },
  {
    source: 'Fast Company',
    href: 'https://www.fastcompany.com/90659827/the-bootleg-fire-is-burning-through-trees-that-are-being-used-as-carbon-offsets?',
    title:
      'The Bootleg fire is burning through trees that are being used as carbon offsets',
    authors: ['Adele Peters'],
    date: '07-28-2021',
    format: 'print',
  },
  {
    source: 'Earther',
    href: 'https://gizmodo.com/western-wildfires-are-sending-carbon-offsets-up-in-smok-1847370861',
    title: 'Western wildfires are sending carbon offsets up in smoke',
    authors: ['Dharna Noor'],
    date: '07-27-2021',
    format: 'print',
  },
  {
    source: 'MIT Tech Review',
    href: 'https://www.technologyreview.com/2021/07/27/1030134/west-coast-wildfires-wiped-out-pandemic-emissions-cuts-climate-change',
    title:
      'The pandemic slashed the West Coast’s emissions. Wildfires already reversed it.',
    authors: ['James Temple'],
    date: '07-27-2021',
    format: 'print',
  },
  {
    source: 'Politico',
    href: 'https://www.politico.com/news/2021/07/27/wildfires-rage-carbon-credits-500830',
    title:
      'Wildfires rage and a tool to combat climate change goes up in smoke',
    authors: ['Debra Kahn'],
    date: '07-27-2021',
    format: 'print',
  },
  {
    source: 'Los Angeles Times',
    href: 'https://www.latimes.com/opinion/story/2021-07-25/climate-change-renewable-energy-technologies-natural-gas-california',
    title:
      'Op-Ed: How California can lead the way on climate-protecting technologies',
    authors: ['David G. Victor', 'Ryan Hanna'],
    date: '07-25-2021',
    format: 'print',
  },
  {
    source: 'CNN',
    href: 'https://www.cnn.com/2021/07/22/weather/bootleg-oregon-fire-carbon-offsets/index.html',
    title: 'Bootleg Fire is burning up carbon offsets',
    authors: ['Daniel Wolfe', 'Tal Yellin'],
    date: '07-22-2021',
    format: 'print',
  },
  {
    source: 'CNBC',
    href: 'https://www.cnbc.com/video/2021/07/22/carbon-offsets-private-market-is-completely-unregulated-says-policy-expert.html',
    title:
      'Carbon offsets private market is completely unregulated, says policy expert',
    authors: ['Kelly Evans'],
    date: '07-22-2021',
    format: 'video',
  },
  {
    source: 'Bloomberg',
    href: 'https://www.bloomberg.com/opinion/articles/2021-07-14/the-winklevoss-s-crypto-carbon-capture-conundrum',
    title: "The Winklevoss's crypto carbon capture conundrum",
    authors: ['Liam Denning'],
    date: '07-14-2021',
    format: 'print',
  },
  {
    source: 'MIT Tech Review',
    href: 'https://www.technologyreview.com/2021/07/08/1027908/carbon-removal-hype-is-a-dangerous-distraction-climate-change/',
    title: 'Carbon removal hype is becoming a dangerous distraction',
    authors: ['James Temple'],
    date: '07-08-2021',
    format: 'print',
  },
  {
    source: 'Grist',
    href: 'https://grist.org/agriculture/us-carbon-removal-capture-offset-forests-farms-trees-soil/',
    title:
      'The US is about to go all-in on paying farmers and foresters to trap carbon',
    authors: ['Nathanael Johnson', 'Ysabelle Kempe'],
    date: '07-07-2021',
    format: 'print',
  },
  {
    source: 'Science Friday',
    href: 'https://www.sciencefriday.com/segments/california-climate-program-co2/',
    title:
      'California’s climate program is actually adding carbon to the atmosphere',
    authors: ['Sophie Bushwick'],
    date: '06-25-2021',
    format: 'audio',
  },
  {
    source: 'E&E News',
    href: 'https://www.eenews.net/climatewire/2021/06/09/stories/1063734519',
    title: 'California knows how to set climate goals. But can it meet them?',
    authors: ['Anne C. Mulkern'],
    date: '06-09-2021',
    format: 'print',
  },
  {
    source: 'KQED',
    href: 'https://www.kqed.org/science/1975164/california-not-doing-as-well-as-it-thinks-in-reducing-carbon-investigation-finds',
    title:
      'California not doing as well as it thinks in reducing carbon, investigation finds',
    authors: ['Kevin Stark'],
    date: '06-07-2021',
    format: 'print',
  },
  {
    source: 'Bloomberg',
    href: 'https://www.bloomberg.com/news/features/2021-06-02/carbon-offsets-new-100-billion-market-faces-disputes-over-trading-rules',
    title: 'Wall Street’s favorite climate solution is mired in disagreements',
    authors: ['Jess Shankleman', 'Akshat Rathi'],
    date: '06-01-2021',
    format: 'print',
  },
  {
    source: 'Bloomberg',
    href: 'https://www.bloomberg.com/news/articles/2021-06-02/carbon-offsets-turning-co2-offsets-into-catnip-for-commodities-traders',
    title: 'Turning carbon offsets into catnip for commodities traders',
    authors: ['Akshat Rathi'],
    date: '06-01-2021',
    format: 'print',
  },
  {
    source: 'MIT Tech Review',
    href: 'https://www.technologyreview.com/2021/05/26/1025402/heirloom-stripe-breakthrough-energy-lowercarbon-carbon-removal/',
    title:
      'A startup using minerals to draw down CO₂ has scored funding — and its first buyer',
    authors: ['James Temple'],
    date: '05-26-2021',
    format: 'print',
  },
  {
    source: 'Wall Street Journal',
    href: 'https://www.wsj.com/articles/nonprofit-seeks-to-trap-carbon-in-the-financial-markets-11621762203',
    title: 'Nonprofit seeks to trap carbon in the financial markets',
    authors: ['Jenna Telesca'],
    date: '05-23-2021',
    format: 'print',
  },
  {
    source: 'AP News',
    href: 'https://apnews.com/article/ca-state-wire-business-environment-and-nature-government-and-politics-0e4c3e0bc1815d0380e5dfc04b253be4',
    title: 'Governor caught between key Democratic blocs on oil setbacks',
    authors: ['Kathleen Ronayne'],
    date: '05-23-2021',
    format: 'print',
  },
  {
    source: 'Quartz',
    href: 'https://qz.com/2009746/not-all-carbon-offsets-are-a-scam-but-many-still-are/',
    title: 'Carbon offsets are going primetime and they’re not ready',
    authors: ['Tim McDonnell'],
    date: '05-20-2021',
    format: 'print',
  },
  {
    source: 'Grist',
    href: 'https://grist.org/climate-energy/lucky-charm/',
    title: 'Meet the startup producing oil to fight climate change',
    authors: ['Emily Pontecorvo'],
    date: '05-18-2021',
    format: 'print',
  },
  {
    source: 'The Middletown Press',
    title:
      'Is it a plan to fight climate change, or a gas tax? The TCI is facing fierce pushback',
    href: 'https://www.middletownpress.com/news/article/Is-it-a-plan-to-fight-climate-change-or-a-gas-16182096.php',
    authors: ['Jan Ellen Spiegel'],
    date: '05-17-2021',
    format: 'print',
  },
  {
    source: 'Canary',
    href: 'https://www.canarymedia.com/articles/bootstrapping-the-market-for-high-priced-high-promise-carbon-removal-tech/',
    title: 'Priming the pump for high-priced, high-promise carbon removal tech',
    authors: ['Jeff St. John'],
    date: '05-17-2021',
    format: 'print',
  },
  {
    source: 'Bloomberg',
    href: 'https://www.bloomberg.com/news/articles/2021-05-13/carbon-offsets-have-a-new-ratings-agency-with-startup-sylvera',
    title: 'Startup that rates carbon offsets finds almost half fall short',
    authors: ['Will Mathis', 'Ivan Levingston'],
    date: '05-12-2021',
    format: 'print',
  },
  {
    source: 'KCRW',
    href: 'https://www.kcrw.com/news/shows/press-play-with-madeleine-brand/gop-coronavirus-climate-change-science-race-music/carbon-offsets-california',
    title:
      'California’s carbon offset program might be pumping millions of tons CO₂ into the air, new study says',
    authors: ['Madeleine Brand'],
    date: '05-12-2021',
    format: 'audio',
  },
  {
    source: 'WBUR',
    href: 'https://www.wbur.org/hereandnow/2021/05/12/may-12-2021-hn-two',
    title: 'Offsetting emissions using forests',
    authors: ["Peter O'Dowd", 'Tonya Mosley'],
    date: '05-12-2021',
    format: 'audio',
  },
  {
    source: 'US News & World Report',
    href: 'https://www.usnews.com/news/best-states/articles/2021-05-10/washington-passed-its-cap-and-trade-climate-legislation-now-what',
    title: 'Washington passed its cap-and-trade climate legislation. Now what?',
    authors: ['Levi Pulkkinen'],
    date: '05-10-2021',
    format: 'print',
  },
  {
    source: 'Pricing Nature',
    href: 'https://pricingnature.substack.com/p/episode-6-carbon-pricing-hits-a-brick-9fb',
    title: 'Carbon pricing hits a brick wall on the left',
    authors: ['Casey R. Pickett', 'Naomi Shimberg', 'Jacob Miller'],
    date: '05-10-2021',
    format: 'audio',
  },
  {
    source: ['MIT Tech Review', 'ProPublica'],
    href: 'https://www.propublica.org/article/a-nonprofit-promised-to-preserve-wildlife-then-it-made-millions-claiming-it-could-cut-down-trees',
    title:
      'A nonprofit promised to preserve wildlife. Then it made millions claiming it could cut down trees.',
    authors: ['Lisa Song', 'James Temple'],
    date: '05-10-2021',
    format: 'print',
  },
  {
    source: 'Planet Money',
    href: 'https://www.npr.org/2021/05/07/994774148/emission-impossible',
    title: 'Emission Impossible',
    authors: ['Julia Simon', 'Amanda Aronczyk'],
    date: '05-07-2021',
    format: 'audio',
  },
  {
    source: 'The New Republic',
    href: 'https://newrepublic.com/article/162313/bp-carbon-offsets-washington-finite-carbon-carlyle',
    title: 'BP’s suspicious support for a carbon market in washington state',
    authors: ['Kate Aronoff'],
    date: '05-06-2021',
    format: 'print',
  },
  {
    source: 'Reuters',
    href: 'https://www.reuters.com/business/environment/california-program-overestimates-climate-benefits-forest-offsets-study-2021-04-30/',
    title:
      'California program overestimates climate benefits of forest offsets',
    authors: ['Peter Henderson'],
    date: '04-30-2021',
    format: 'print',
  },
  {
    source: 'Earther',
    href: 'https://earther.gizmodo.com/california-s-carbon-offset-program-is-a-complete-disast-1846791736',
    title: 'California’s carbon offset program is a complete disaster',
    authors: ['Molly Taft'],
    date: '04-29-2021',
    format: 'print',
  },
  {
    source: 'Verge',
    href: 'https://www.theverge.com/2021/4/29/22410367/forest-offsets-trees-carbon-dioxide-accounting',
    title: 'The math isn’t adding up on forests and CO₂ reductions',
    authors: ['Justine Calma'],
    date: '04-29-2021',
    format: 'print',
  },
  {
    source: ['MIT Tech Review', 'ProPublica'],
    href: 'https://www.propublica.org/article/the-climate-solution-actually-adding-millions-of-tons-of-co2-into-the-atmosphere',
    title:
      'The climate solution actually adding millions of tons of CO₂ into the atmosphere',
    authors: ['Lisa Song', 'James Temple'],
    date: '04-29-2021',
    format: 'print',
  },
  {
    source: 'National Geographic',
    href: 'https://www.nationalgeographic.com/environment/article/biden-wants-to-cut-us-climate-pollution-in-half-heres-how',
    title: 'Biden wants to cut U.S. climate pollution in half—here’s how',
    authors: ['Madeleine Stone'],
    date: '04-22-2021',
    format: 'print',
  },
  {
    source: 'Bloomberg',
    href: 'https://www.bloomberg.com/news/articles/2021-04-13/how-to-think-about-negative-emissions-in-the-climate-fight',
    title: 'How to think about negative emissions in the climate fight',
    authors: ['Akshat Rathi'],
    date: '04-13-2021',
    format: 'print',
  },
  {
    source: 'Energy Policy Now',
    href: 'https://kleinmanenergy.upenn.edu/podcast/a-primer-on-carbon-dioxide-removal/',
    title: 'A primer on carbon dioxide removal',
    authors: ['Andy Stone'],
    date: '03-23-2021',
    format: 'audio',
  },
  {
    source: 'GreenBiz',
    href: 'https://www.greenbiz.com/article/digging-complex-confusing-and-contentious-world-soil-carbon-offsets',
    date: '02-26-2021',
    title:
      'Digging into the complex, confusing and contentious world of soil carbon offsets',
    authors: ['Jim Giles'],
    format: 'print',
  },
  {
    source: 'E&E News',
    href: 'https://www.eenews.net/climatewire/stories/1063723981/',
    date: '02-02-2021',
    title: 'Burned by carbon pricing, Dems chart new course on climate',
    authors: ['Benjamin Storrow', 'Adam Aton'],
    format: 'print',
  },
  {
    source: 'Financial Times',
    href: 'https://www.ft.com/content/de5e8631-bdf2-4c2e-8b7f-83c0c80cdea8',
    date: '01-27-2021',
    title: 'Carney task force confronts concerns over carbon credits market',
    authors: ['Camilla Hodgson'],
    format: 'print',
  },
  {
    source: 'E&E News',
    href: 'https://www.eenews.net/climatewire/stories/1063723085/',
    date: '01-21-2021',
    title: 'Does carbon pricing work? Researchers are skeptical',
    authors: ['Chelsea Harvey'],
    format: 'print',
  },
  {
    source: 'Bloomberg',
    href: 'https://www.bloomberg.com/news/audio/2020-12-21/cullenward-the-jury-is-still-out-on-carbon-credits',
    date: '12-21-2020',
    title: 'The jury is still out on carbon credits',
    authors: ['Caroline Hepker', 'Roger Hearing'],
    format: 'audio',
  },
  {
    source: 'My Climate Journey',
    href: 'https://www.myclimatejourney.co/episodes/jeremy-freeman-danny-cullenward',
    date: '12-19-2020',
    title: 'Episode 139',
    authors: ['Jason Jacobs'],
    format: 'audio',
  },
  {
    source: 'Bloomberg',
    href: 'https://www.bloomberg.com/news/features/2020-12-17/the-real-trees-delivering-fake-climate-progress-for-corporate-america',
    date: '12-17-2020',
    title: 'The real trees delivering fake corporate climate progress',
    authors: ['Ben Elgin', 'Zachary Mider'],
    format: 'print',
  },
  {
    source: 'New York Times',
    href: 'https://www.nytimes.com/2020/12/12/opinion/sunday/biden-climate-change-al-gore.html',
    date: '12-12-2020',
    title: 'Where I find hope',
    authors: ['Al Gore'],
    format: 'print',
  },
  {
    source: 'Bloomberg',
    href: 'https://www.bloomberg.com/features/2020-nature-conservancy-carbon-offsets-trees/',
    date: '12-09-2020',
    title: 'These trees are not what they seem',
    authors: ['Ben Elgin'],
    format: 'print',
  },
  {
    source: 'GreenBiz',
    href: 'https://www.greenbiz.com/article/quest-carbon-offsets-almost-anything-goes',
    date: '11-30-2020',
    title: 'In the quest for carbon offsets, (almost) anything goes',
    authors: ['Jesse Klein'],
    format: 'print',
  },
  {
    source: 'Ars Technica',
    href: 'https://arstechnica.com/science/2020/11/want-to-offset-your-carbon-footprint-heres-what-you-need-to-know/',
    date: '11-25-2020',
    title: 'Want to offset your carbon footprint? Here’s what you need to know',
    authors: ['Scott K. Johnson'],
    format: 'print',
  },
  {
    source: 'Time',
    href: 'https://time.com/collection/best-inventions-2020/5911362/climate-trace/',
    date: '11-19-2020',
    title: 'The best inventions of 2020: The climate cop',
    authors: [],
    format: 'print',
  },
  {
    source: 'Grist',
    href: 'https://grist.org/climate/this-oregon-forest-was-supposed-to-store-carbon-for-100-years-now-its-on-fire/',
    date: '09-18-2020',
    title:
      'This Oregon forest was supposed to store carbon for 100 years. Now it’s on fire.',
    authors: ['Emily Pontecorvo', 'Shannon Osaka'],
    format: 'print',
  },
  {
    source: 'Rolling Stone',
    href: 'https://www.rollingstone.com/politics/politics-features/tree-planting-wont-stop-climate-crisis-1020500/',
    date: '06-25-2020',
    title: 'Why planting trees won’t save us',
    authors: ['Jeff Goodell'],
    format: 'print',
  },
  {
    source: 'E&E News',
    href: 'https://www.eenews.net/climatewire/stories/1063394847/',
    date: '06-16-2020',
    title: 'Bleak cap-and-trade results raise doubts about program',
    authors: ['Anne C. Mulkern'],
    format: 'print',
  },
  {
    source: 'MIT Tech Review',
    href: 'https://www.technologyreview.com/2020/06/03/1002484/why-we-cant-count-on-carbon-sucking-farms-to-slow-climate-change/',
    date: '06-03-2020',
    title: 'Why we can’t count on carbon-sucking farms to slow climate change',
    authors: ['James Temple'],
    format: 'print',
  },
]

export { highlights, press }
