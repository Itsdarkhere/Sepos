function ProjectArray() {

    // Contains company and project info packages, everything that is needed
    // Just so that it is as clear and easy to edit as possible

   const projects = [
        {
            name: 'Garden Helsinki',
            index: 0,
            pictures: [
            'https://ik.imagekit.io/s93qwyistj0/pics/garden-1__shZcL7AG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653665002016', 
            'https://ik.imagekit.io/s93qwyistj0/pics/garden-2_PRadA-9Ku.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653665000918',
            'https://ik.imagekit.io/s93qwyistj0/pics/garden-3_JlwQBAaDr.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653665002070', 
            'https://ik.imagekit.io/s93qwyistj0/pics/garden-4_2zWHt0Nzp.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653665001002', 
            'https://ik.imagekit.io/s93qwyistj0/pics/garden-5_Wat64YfhX1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653665000211', 
            'https://ik.imagekit.io/s93qwyistj0/pics/garden-6_DDzL4k_-l.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653665000809'
            ],
            pictures2: [
                'https://ik.imagekit.io/s93qwyistj0/pics-highres/garden-1_hXTY66XIk.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1653664961701', 
                'https://ik.imagekit.io/s93qwyistj0/pics-highres/garden-2_zocuoCkIB.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1653664961278',
                'https://ik.imagekit.io/s93qwyistj0/pics-highres/garden-3_5Nvh6ckQyS.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1653664961435', 
                'https://ik.imagekit.io/s93qwyistj0/pics-highres/garden-4_QcB330_WN.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664961374', 
                'https://ik.imagekit.io/s93qwyistj0/pics-highres/garden-5_UuoZLI9PMC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1653664959597', 
                'https://ik.imagekit.io/s93qwyistj0/pics-highres/garden-6_4LJVnPYIn.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1653664961315'
            ],
            displayImage: [
            "https://ik.imagekit.io/s93qwyistj0/pics-highres/wide-dark-0_6_1WsYopQm.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664957137",
            "https://ik.imagekit.io/s93qwyistj0/pics-highres/0_YFkaAzE8L.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653664963366"
            ],
            finishedIn: '2022',
            website: 'https://www.gardenhelsinki.fi/',
            websiteLinkName: 'www.gardenhelsinki.fi',
            latLong: [60.189984, 24.923550],
            projectPage: '/garden',
            previousProject: ["/hanko", "Hangon Läntinen Laituri"],
            nextProject: ["/turku", "Turun Ratapiha"],
            finnish: {
                finnish: true,
                description: `Garden Helsinki on Töölöön, Nordenskiöldinkadun varrelle suunnitteilla oleva kiinteistökehityshanke. Gardeniin suunnitellaan modernia kansainvälisen tason tapahtuma-areenaa ja sen ympärille kehitettäviä kattavia oheispalveluja sekä jokapäiväisiä palveluita kaupunkilaisten käyttöön. Garden Helsinki on 2020-luvun kiinteistökonsepti, joka tarjoaa huippulaatuisen teknologian ja palveludesignin kautta päivittäisille käyttäjilleen arkea elävöittäviä palvelukokemuksia ja puitteet maailmanluokan tapahtumille.`,
                status: 'Hanketilanne: Kaavoitus valmis, Helsingin kaupungin päätöstä kiinteistön myynnistä odotetaan. Suunnittelu käynnissä, hotellien vuokrasopimus valmis, tavoite aloittaa rakentaminen H1/2025.',
                facts: ['n. 160.000m2', '2 areenaa, monitoimiareena 16000 + mid areena 5000 paikkaa', '2 hotellia, toimistotiloja, liiketiloja, liikuntatiloja, pysäköinti', 'n. 200 asuntoa'],
            },
            english: {
                finnish: false,
                location: '',
                description: `Garden Helsinki is a real estate development project planned for Helsinki Töölö area, 
                along the street Nordenskiöldinkatu. Garden is planned to be a modern international event arena that 
                also includes comprehensive everyday services for the use of urban dwellers. Garden Helsinki is a real 
                estate concept of the 2020s that provides a framework for world-class events and offers it’s users 
                experiences that enliven everyday life through top quality technology and service design.`,
                status: '“Project status: Zoning complete, awaiting the City of Helsinki’s decision on the sale of the property. Planning underway, hotel lease agreement ready, aim to start construction in H1/2025.',
                facts: ['About. 160.000m2', 'Two arena\'s, multipurpose arena 16 000 + mid arena 5 000 seats', 'Two hotels, office and retail spaces, areas for exercise and parking', 'About. 200 apartments'],
            }
        },

        {
            name: 'Turun Ratapiha',
            index: 1,
            pictures: [
            'https://ik.imagekit.io/s93qwyistj0/pics/turku-1_LvL_PsXlR.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664989541', 
            'https://ik.imagekit.io/s93qwyistj0/pics/turku-2__AXcU8Z8X.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664996881', 
            'https://ik.imagekit.io/s93qwyistj0/pics/turku-3_P0bU7C3Jee.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664995274', 
            'https://ik.imagekit.io/s93qwyistj0/pics/turku-4_o6Swe4aOo.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653665001983', 
            'https://ik.imagekit.io/s93qwyistj0/pics/turku-5_9hjeUn1Ni.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664999309',
            'https://ik.imagekit.io/s93qwyistj0/pics/turku-6_a4KrA2-oz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653664991117'
            ],
            pictures2: [
                'https://ik.imagekit.io/s93qwyistj0/pics-highres/turku-1_mYhFu--CL.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664944489', 
                'https://ik.imagekit.io/s93qwyistj0/pics-highres/turku-2_FDR5OcdkZ.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664954788', 
                'https://ik.imagekit.io/s93qwyistj0/pics-highres/turku-3_r0bIPrf1L.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664952537', 
                'https://ik.imagekit.io/s93qwyistj0/pics-highres/turku-4_ILKj-Yr1R.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664962562', 
                'https://ik.imagekit.io/s93qwyistj0/pics-highres/turku-5_LTC_1iOqz.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664959035',
                'https://ik.imagekit.io/s93qwyistj0/pics-highres/turku-6_pckv_lGQsv.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1653664944837'
            ],
            displayImage: [
            "https://ik.imagekit.io/s93qwyistj0/pics-highres/wide-dark-1__npHfnKnt.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653664956615",
            "https://ik.imagekit.io/s93qwyistj0/pics-highres/1_QBjEYVcx48.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653664962257"
            ],
            finishedIn: '2025',
            website: 'https://www.turkuratapiha.fi/',
            websiteLinkName: 'www.turkuratapiha.fi',
            latLong: [60.455062691312634, 22.253384912314225],
            projectPage: '/turku',
            previousProject: ["/garden", "Garden Arena"],
            nextProject: ["/hippos", "Hippos Jyväskylä"],
            finnish: {
                finnish: true,
                status: 'Hanketilanne: Kaavoituksesta tehty valitus käsittelyssä, käsittelyn valmistumisen tavoite Q1/2024. Turun kaupunki ostanut maa-alueet 9/2023, suunnittelu käynnissä, rakentamisen aloituksen tavoite Q1/2025.',
                facts: ['n. 120.000m2', 'Monitoimiareena 10 000 paikkaa', 'Hotelli, toimistotiloja, liiketiloja, digitaalinen elämyskeskus, liikuntatiloja, pysäköinti', 'n. 1 000 asuntoa'],
                description: `Turun Ratapiha -hanke monipuolistaa osaltaan Turun kaupunkikeskustan tapahtuma-, kulttuuri- ja elämystarjontaa, lisää sen vetovoimaisuutta ja yhdistää ratapiha-alueen erottamia kaupunginosia toisiinsa. Elävä kaupunkikeskus tarjoaa ajanmukaiset puitteet elämää rikastuttavien kulttuuri-, viihde- ja liikuntapalvelujen tuottamiseen, työpaikkoja, keskusta-asumista sekä kaupunkilaisten ympärivuotisen olohuoneen.`,
            },
            english: {
                finnish: false,
                facts: ['About. 120.000m2', 'Multipurpose arena with 10 000 seats', 'A hotel, office and retail spaces, digital experience center, areas dedicated for exercise and parking', 'About. 1 000 apartments'],
                status: 'Project status: Appeal made on zoning is under consideration, target for completion of the process is Q1/2024. The City of Turku bought the land areas in 9/2023, planning is underway, target to start construction is Q1/2025.',
                location: 'Location: City of Turku (6.th largest city in Finland), ca. 200km west from Helsinki.',
                description: `The Turku Ratapiha development unites the areas separated by the railway yard area and 
                contributes to expanding the city’s cultural-, events- and experience offerings. 
                A vibrant city center needs jobs, city center living and modern facilities to produce cultural, entertainment and 
                exercise services that enrichen people’s life’s.`,

            }
        },

        {
            name: 'Hippos Jyväskylä',
            index: 2,
            pictures: [
            'https://ik.imagekit.io/s93qwyistj0/pics/hippos-1_Eu-rw1nRNK.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664986190', 
            'https://ik.imagekit.io/s93qwyistj0/pics/hippos-2_ozFmyz1TG.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664999776', 
            'https://ik.imagekit.io/s93qwyistj0/pics/hippos-3_ALEU-6LpL.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653664998390', 
            'https://ik.imagekit.io/s93qwyistj0/pics/hippos-4_nrK3a7qGg.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653664995037', 
            'https://ik.imagekit.io/s93qwyistj0/pics/hippos-5_0oibtc050.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664998495'
            ],
            pictures2: [
                'https://ik.imagekit.io/s93qwyistj0/pics-highres/hippos-1_1KcBRN6BB.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1653664953672', 
                'https://ik.imagekit.io/s93qwyistj0/pics-highres/hippos-2_sqTf93gU6F.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664959786', 
                'https://ik.imagekit.io/s93qwyistj0/pics-highres/hippos-3_tzv3fztLn.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664961545', 
                'https://ik.imagekit.io/s93qwyistj0/pics-highres/hippos-4_AeGDcEOrU.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664949715', 
                'https://ik.imagekit.io/s93qwyistj0/pics-highres/hippos-5_zLxH2PCm-S.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664958011'
            ],
            displayImage: [
            "https://ik.imagekit.io/s93qwyistj0/pics-highres/wide-dark-2_9em74KM1r.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653664958498",
            "https://ik.imagekit.io/s93qwyistj0/pics-highres/2_-ebonMhRi.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653664960613"
            ],
            finishedIn: '2025',
            website: 'https://www.businessjyvaskyla.fi/kehitys/hippos',
            latLong: [62.2366093283036, 25.72246721237655],
            websiteLinkName: 'www.businessjyvaskyla.fi/hippos',
            projectPage: '/hippos',
            previousProject: ["/turku", "Turun Ratapiha"],
            nextProject: ["/hameensaari", "Hämeensaari"],
            finnish: {
                finnish: true,
                status: 'Hanketilanne: Kaavoitus valmis, suunnittelu käynnissä, tavoite aloittaa vaihe 1 rakentaminen Q1/2024 ja vaiheiden 2 ja 3 tavoite aloitus 2024 aikana.',
                description: `Hippos on valmistuessaan paitsi kaupunkilaisten kohtaamispaikka, myös Pohjoismaiden merkittävin liikunnan, urheilun ja huippu-urheilun, terveyden edistämisen sekä hyvinvoinnin ja tapahtumien keskus. Lisäksi se yhdistää liikunnan tutkimuksen ja teknologisen tuotekehityksen kansainvälisesti merkittäväksi kokonaisuudeksi.`,
                facts: ['Jääurheilukeskus, areena 6 000 paikkaa ja 3 harjoitusjäätä',
            'Liikuntakeskus, sisäpeliareena 2000 paikkaa, liikuntatilat n. 20 lajille sekä tutkimustiloja',
            'Osaamiskeskus, opetus-, tutkimus- ja laboratoriotilat, toimistotiloja ja liiketilaa, majoitustilaa ja pysäköintilaitos',
            'n. 150 asuntoa'],
            },
            english: {
                finnish: false,
                status: 'Project status: Zoning complete, planning underway, aim to start construction of phase 1 in Q1/2024 and target to start phases 2 and 3 during 2024.',
                location: 'Location: City of Jyväskylä (7.th largest city in Finland), ca. 250km north from Helsinki) n. 100.000m2',
                description: `On completion Hippos is not only a meeting place for citizens of Jyväskylä, but also the most 
            significant exercise, professional-sports, health, wellbeing and events center in the Nordic countries. At 
            Hippos sports research and technological product development is combined into a world-class entity.`,
                facts: ['Ice sports center, arena with 6 000 seats and 3 practise rinks',
            'Sports center, indoor sports arena with 2 000 seats, areas for about 20 different sports and for sports research, ',
            'Knowledge center, teaching-, research-, and laboratory spaces for the University and the University of applied sciences of Jyväskylä, office spaces, business venues, a hotel and parking',
            'About. 150 apartments'],
            }
        },

        {
            name: 'Hämeensaari',
            index: 3,
            pictures: [
            'https://ik.imagekit.io/s93qwyistj0/pics/hameensaari-1_3XmwA3BOrz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653664991668', 
            'https://ik.imagekit.io/s93qwyistj0/pics/hameensaari-2_K64XyiFwqo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653664992652',
            'https://ik.imagekit.io/s93qwyistj0/pics/hameensaari-3_o_O1xd38NF.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664987496', 
            'https://ik.imagekit.io/s93qwyistj0/pics/hameensaari-4_QExfemw3QG.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664990137', 
            'https://ik.imagekit.io/s93qwyistj0/pics/hameensaari-5_jplEj1XpiQ.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664991207'
            ],
            pictures2: [
                'https://ik.imagekit.io/s93qwyistj0/pics-highres/h%C3%A4meensaari-1_5RB2axMYkR.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1653664948542', 
                'https://ik.imagekit.io/s93qwyistj0/pics-highres/h%C3%A4meensaari-2_DauwKZuig.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1653664946311',
                'https://ik.imagekit.io/s93qwyistj0/pics-highres/h%C3%A4meensaari-3_QVieAIQPk.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1653664946398', 
                'https://ik.imagekit.io/s93qwyistj0/pics-highres/hameensaari-4_oHh9yB0nrB.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664944455', 
                'https://ik.imagekit.io/s93qwyistj0/pics-highres/h%C3%A4meensaari-5_kES_r75IO.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1653664943603'
            ],
            displayImage: [    
            "https://ik.imagekit.io/s93qwyistj0/pics-highres/wide-dark-3_6tO-Z2QrJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653664956895", 
            "https://ik.imagekit.io/s93qwyistj0/pics-highres/3_FZsPHumSV.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664944050"
            ],
            finishedIn: '2028',
            website: 'https://www.hameenlinna.fi/asuminen-ja-ymparisto/kaavoitus/suunnitteluvaraukset/',
            websiteLinkName: 'www.hameenlinna.fi/suunnittelu',
            latLong: [60.99287702675376, 24.46319381233294],
            projectPage: '/hameensaari',
            previousProject: ["/hippos", "Hippos Jyväskylä"],
            nextProject: ["/inkoonranta", "Inkoonranta"],
            finnish: {
                finnish: true,
                facts: ['n. 35.000m2', 'Asuntoja, majoitusta, kaupallisia tiloja, pysäköinti.', 'n. 450 asuntoa'],
                status: 'Hanketilanne: Suunnitteluvaraus ja kehitysvaihe yhdessä kaupungin kanssa käynnissä',
                description: `Hämeenlinnan keskustakehityshanke on vetovoimainen keskustan laadukkain asuinalue ja palveluijen keskittymä. Kokonaisuus muodostuu asunnoista, majoituksesta, kaupallisista palveluista, pysäköintilaitoksesta ja Vanajaveden rannan kaupunkipuistosta.`,
            },
            english: {
                finnish: false,
                description: `The Hämeenlinna downtown development project is an attractive, high-quality residential area in the city center and a concentration of services. The whole consists of apartments, accommodation, commercial services, a parking facility, and an urban park on the shore of Lake Vanajavesi.`,
                location: 'Location: City of Hämeenlinna (14.th largest city in Finland), ca. 100km north from Helsinki',
                facts: ['Approximately 35.000m2', 'Apartments, accommodation, commercial spaces, parking.', 'Approximately 450 apartments'],
                status: 'Project status: Planning reservation and development phase in progress with the city.',
            }
        },
        /*
        {
            name: 'Oulun Ratapiha',
            index: 4,
            pictures: ['/oulu-1', '/oulu-2', '/oulu-3', '/oulu-4', '/oulu-5','/oulu-6'],
            finishedIn: '2021',
            website: '',
            description: `The purpose of the project is to enable the city of Oulu achieve it’s goal of becoming “Capital of 
                Northern Skandinavia”. Placing a multi-use arena in connection with the Oulu railway station brings the area enough 
                events, customers and crowds of people to enable for life improving infrastructure solutions to be constructed.`,
            fin_description: `Hankkeen päämääränä on mahdollistaa merkittävältä osaltaan Oulun kaupungin strategiaa - 
                tavoitetta olla ”Capital Of Northern Skandinavian” Monitoimiareenan sijoittaminen asemakeskuksen yhteyteen tuo alueelle 
                riittävästi tapahtumia, asiakkaita ja ihmisvirtoja, jotta kaupunkilaisten elämää parantavat, 
                radan ylittämiseen ja alittamiseen liittyvät ratkaisut voidaan saada aikaan.`,
            websiteLinkName: '',
            latLong: ['', ''],
            location: 'Location: City of Oulu (5.th largest city in Finland), ca. 600km north from Helsinki',
            facts: ['Multipurpose arena under planning with 10 000 seats', 'Retail-, sports- and office spaces and a hotel', 'Apartments'],
            fin_facts: ['Suunnitteilla monitoimiareena n. 10 000 paikkaa', 'Liiketiloja, toimistotiloja, hotelli, liikuntatiloja', 'Asuntoja'],
            status: 'In the developments stage. Current goals is to get a planning reservation for the land area within 2021, after which the design phase can begin.',
            fin_status: 'Kehitysvaiheessa, Oulun Ratapiha Kehitys Oy:n tavoitteena saada suunnitteluvaraus maa-alueelle 2021 aikana jonka jälkeen suunnitteluvaihe voi käynnistyä',
            projectPage: '/oulu',
            previousProject: ["/hameensaari", "Hämeensaari"],
            nextProject: ["/inkoonranta", "Inkoonranta"]
        },
        */
        {
            name: 'Inkoonranta',
            index: 5,
            pictures: [
            'https://ik.imagekit.io/s93qwyistj0/pics/inkoo-1_OOQ4G-c7sU.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664999270', 
            'https://ik.imagekit.io/s93qwyistj0/pics/inkoo-2_HGfRvkUyd7.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664987989', 
            'https://ik.imagekit.io/s93qwyistj0/pics/inkoo-3_DcGraNLaX.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653664994737', 
            'https://ik.imagekit.io/s93qwyistj0/pics/inkoo-4_KgtPdl1-IO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653664998643', 
            'https://ik.imagekit.io/s93qwyistj0/pics/inkoo-5_1HOQh6zBjC.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664989168', 
            'https://ik.imagekit.io/s93qwyistj0/pics/inkoo-6_cTNtkWSWE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653664996467'
            ],
            pictures2: [
                'https://ik.imagekit.io/s93qwyistj0/pics-highres/inkoo-1_lzKIqYqlY.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1653664950746', 
                'https://ik.imagekit.io/s93qwyistj0/pics-highres/inkoo-2_sgSy_US8r.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1653664952888', 
                'https://ik.imagekit.io/s93qwyistj0/pics-highres/inkoo-3_AQyUbWWSm.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1653664952479', 
                'https://ik.imagekit.io/s93qwyistj0/pics-highres/inkoo-4_e9Rl0HeZ9.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664946919', 
                'https://ik.imagekit.io/s93qwyistj0/pics-highres/inkoo-5_HVuUwpfyM.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664944399', 
                'https://ik.imagekit.io/s93qwyistj0/pics-highres/inkoo-6_Uq0nL1PMsf.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1653664954974'
            ],
            displayImage: [
            "https://ik.imagekit.io/s93qwyistj0/pics-highres/wide-dark-4_MdYRoUAHq9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653664953695", 
            "https://ik.imagekit.io/s93qwyistj0/pics-highres/4_2_UAksGxlg.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653664958435"
            ],
            finishedIn: '2022',
            website: 'https://www.inkoonranta.com',
            websiteLinkName: 'www.inkoonranta.com',
            latLong: [60.04310344758483, 24.00724591227905],
            projectPage: '/inkoonranta',
            previousProject: ["/hameensaari", "Hämeensaari"],
            nextProject: ["/hanko", "Hangon läntinen laituri"],
            finnish: {
                finnish: true,
                status: '',
                description: `Inkoonranta on elämänlaatua meren äärellä. Se on omaa rauhaa ja naapurihenkeä, sulassa sovussa. Iloinen Inkoonranta on valinta, ilman luopumista.`,
                facts: ['Laadukkaita uudisasuntoja', 'Pienkerrostaloasuntoja', 'Rivi- ja erillistaloasuntoja', 'Urheilu ja vapaa-ajan palveluita', 'Inkoon keskustassa meren rannalla'],
            },
            english: {
                finnish: false,
                description: `Inkoonranta development is real quality of life by the ocean. It is tranquality, happiness and community
                spirit. In essence Inkoonranta is a choice without waiver.`,
                location: 'Location: Municipality of Inkoo, ca. 50km west from Helsinki',
                facts: ['Brand new high quality apartments', 'Low-rise apartment houses', 'Row- and detached houses', 'Sports and leisure services', 'In the center of Inkoo, by the ocean'],
                status: '',
            }
        },
        

        {
            name : 'Hangon Läntinen Laituri',
            index: 6,
            pictures: [
            'https://ik.imagekit.io/s93qwyistj0/pics/hanko-1_K6ieMk5cu.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653665001977', 
            'https://ik.imagekit.io/s93qwyistj0/pics/hanko-2_JMS0d_wvC.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653664994460', 
            'https://ik.imagekit.io/s93qwyistj0/pics/hanko-3_rf18bfwSEZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653664993182', 
            'https://ik.imagekit.io/s93qwyistj0/pics/hanko-4_nK2M6XslGb.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664988831',
            'https://ik.imagekit.io/s93qwyistj0/pics/hanko-5_WkEfE23YT.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664991952', 
            'https://ik.imagekit.io/s93qwyistj0/pics/hanko-6_ND1ScMNAQM.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664993359'
            ],
            pictures2: [
                'https://ik.imagekit.io/s93qwyistj0/pics-highres/hanko-1_DB4odN3fVj.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664961782', 
                'https://ik.imagekit.io/s93qwyistj0/pics-highres/hanko-2__fjJFi2u-S.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1653664951318', 
                'https://ik.imagekit.io/s93qwyistj0/pics-highres/hanko-3_j4tsk-XYbK.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1653664949613', 
                'https://ik.imagekit.io/s93qwyistj0/pics-highres/hanko-4_ZmLZWZ5DxU.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664943542',
                'https://ik.imagekit.io/s93qwyistj0/pics-highres/hanko-5_Rh3YHWGEAl.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1653664953424', 
                'https://ik.imagekit.io/s93qwyistj0/pics-highres/hanko-6_mN2IaxuMp.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1653664956869'
            ],
            displayImage: [
            "https://ik.imagekit.io/s93qwyistj0/pics-highres/wide-dark-5_SB-6BWx5Ze.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664938996", 
            "https://ik.imagekit.io/s93qwyistj0/pics-highres/5_we_gUTVZI.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653664959850"
            ],
            finishedIn: '2025',
            website: 'https://www.chyde.fi/hangon_laituri',
            websiteLinkName: 'www.chyde.fi/hangon_laituri',
            latLong: [59.81968268006804, 22.961955571814453],
            projectPage: '/hanko',
            previousProject: ["/inkoonranta", "Inkoonranta"],
            nextProject: ["/garden", "Garden Arena"],
            finnish: {
                finnish: true,
                status: '',
                facts: ['Laadukkaita uudisasuntoja', 'Pienkerrostaloasuntoja', 'Hangon keskustassa meren rannalla'],
                description: `Kuningatarvuorelle, Itäsatamaan, merenrantaan ja Hangon palvelujen ääreen rakennetaan noin 80 – 100 asuntoa, vapaa-ajan ja ympärivuotiseen asumiseen.`,
            },
            english: {
                finnish: false,
                status: '',
                facts: ['High quality apartments', 'Low-rise apartments', 'In the center of Hanko, by the ocean.'],
                description: `80 - 100 beach front apartments will be built for seasonal and year-round living at Kuningatarvuori 
                in the Eastern harbour of Hanko city, right next to all the amenities.`,
                location: 'Location: City of Hanko, ca. 120km west from Helsinki',
            }
        },

    ]

    return projects
}

function CompanyArray() {

    
    const companies = [

        {
            'name': 'NPC',
            'image': 'https://ik.imagekit.io/s93qwyistj0/pics-highres/Untitled%20design%20-%202023-10-17T094442.392_e2ZMJ4si3.png?updatedAt=1697525137341',
            'website': 'https://www.nordicpictures.fi/',
            'displayWebsite': 'nordicpictures.fi',
            'description': 'Nordic Pictures Company Oy is a production company established in 2018, which produces TV series, movies, digital content, music, and consumer products',
            'fin_description': 'Nordic Pictures Company Oy on 2018 perustettu tuotantoyhtiö, joka tuottaa tv-sarjoja, elokuvia, digitaalista sisältöä, musiikkia ja kuluttajatuotteita.'
        },

        {
            'name': 'Luv Kodit Oy',
            'image': 'https://ik.imagekit.io/s93qwyistj0/pics-highres/company-4_i5IWitY1k.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653664942606',
            'website': 'http://www.luvkoti.fi/',
            'displayWebsite': 'luvkoti.fi',
            'description': 'LUV is a new, fresh, entrepeneur drive home sales company. LUV specialises in taking on new entire development projects.',
            'fin_description': 'LUV on uusi, raikas, yrittäjävetoinen asuntomyyntiyhtiö. Erikoisosaamistamme on paneutuminen kokonaisiin, uusiin kiinteistöhankkeisiin. Ja asiakkaidemme kokonaisvaltaiseen, yksilölliseen palveluun.'
        },

        {
            'name': 'Modum Oy',
            'image': 'https://ik.imagekit.io/s93qwyistj0/pics-highres/company-1_VZK1tvB4x.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653664958650',
            'website': 'https://modumdigital.com/en/',
            'displayWebsite': 'modumdigital.fi',
            'description': 'Modum offers a new kind of high-quality professional video and photography production service for product descriptions, presentation and distribution on the web.',
            'fin_description': 'Modum tarjoaa uudenlaista, korkealuokkaista ammattitason video- ja valokuvauspalvelua tuotteiden kuvaamiseen, esittelyyn ja jakeluun verkossa.'
        },


        {
            'name': 'Hög',
            'image': 'https://ik.imagekit.io/s93qwyistj0/pics-highres/company-3_yLMsxDHi5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662619170103',
            'website': 'https://hoglive.fi',
            'displayWebsite': 'hoglive.fi',
            'description': 'Creative audiovisual solutions for tours and events.',
            'fin_description': 'Luovia audiovisuaalisia ratkaisuja kiertueille ja tapahtumiin.'
        },
    
    ]    
    return companies
}

export {ProjectArray, CompanyArray}