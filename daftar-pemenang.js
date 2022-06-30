var swiper = new Swiper(".swiper-pememang", {
    slidesPerView: 2.2,
    spaceBetween: 15,
    breakpoints: {
        // desktop
        1024: {
          slidesPerView: 2.2,
          spaceBetween: 15
        },
        // Ipad
        720: {
          slidesPerView: 1.8,
          spaceBetween: 15
        },
        // Mobile
        320: {
            slidesPerView: 1.1,
            spaceBetween: 10,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
//   swiper testimoni

// datatable
var dataSet_apartemen = [
    [
        "1",
        "YULIANA",
        "10643***"
    ]
];
var dataSet_iphone = [
    [
        "1",
        "IGNATIO IMMANUEL",
        "10890***"
    ],
    [
        "2",
        "DR DR TONY",
        "11089***"
    ],
    [
        "3",
        "ENDANG YUNARNI",
        "11304***"
    ],
];
var dataSet_ps5 = [
    [
        "1",
        "ERWIN PRASETYO",
        "11911***"
    ],
    [
        "2",
        "YUDHISTIRA PRATAMA",
        "11737***"
    ],
    [
        "3",
        "DINDA SULISTIANINGRUM",
        "11761***"
    ],
];
var dataSet_tv = [
    [
        "1",
        "ANDREW YANUAR S",
        "11029***"
    ],
    [
        "2",
        "AGUS RESPATI",
        "11751***"
    ],
    [
        "3",
        "OKKY WAHYUDI",
        "11708***"
    ],
    [
        "4",
        "STACK RACHEL FIONA",
        "11669***"
    ],
    [
        "5",
        "FARIS FAHDIAN",
        "11857***"
    ],
];
var dataSet_motor = [
    [
        "1",
        "TITANY NENY NUGROHO",
        "10490***"
    ],
    [
        "2",
        "EKA AGUSTIN HERRYARTO",
        "11871***"
    ],
    [
        "3",
        "SUBAROTO",
        "10524***"
    ],
    [
        "4",
        "THE MELIYANA WIJAYA",
        "10400***"
    ],
    [
        "5",
        "MICKY AZHARNI",
        "10370***"
    ],
];
var dataSet_sepeda = [
    [
        "1",
        "BIANCA ADINEGORO LUTFI",
        "30932***"
    ],
    [
        "2",
        "SARIAH SARIAH",
        "11133***"
    ],
    [
        "3",
        "FRANSISKUS ABADI",
        "64073***"
    ],
    [
        "4",
        "WAHYU WIJAYA",
        "66832***"
    ],
    [
        "5",
        "ANTONIUS ANGGORO",
        "52923***"
    ],
    [
        "6",
        "RUSMEILINA",
        "80918***"
    ],
    [
        "7",
        "KAILASH P VASANDANI",
        "85579***"
    ],
    [
        "8",
        "SEPTI SUSANTI",
        "76830***"
    ],
    [
        "9",
        "MOCH ANDI APRILIANSYAH",
        "11529***"
    ],
    [
        "10",
        "MEILANNY RUNTURAMBI",
        "11543***"
    ],
    [
        "11",
        "DODI SETIAWAN",
        "11507***"
    ],
    [
        "12",
        "RAJINDER SINGH",
        "10916***"
    ],
    [
        "13",
        "ANDREAS VIKHAR",
        "10899***"
    ],
    [
        "14",
        "EVAN DWI WICHAKSONO",
        "10850***"
    ],
    [
        "15",
        "AGUNG YUDHANTARA",
        "10572***"
    ],
    [
        "16",
        "TOMMY FAJAR SETYAWAN",
        "10527***"
    ],
    [
        "17",
        "KATHLEEN H JULIA T",
        "10505***"
    ],
    [
        "18",
        "PETRUS RAMOS APULAN",
        "10686***"
    ],
    [
        "19",
        "DODDY IRAWAN",
        "10641***"
    ],
    [
        "20",
        "ANDI",
        "10684***"
    ],
];
var dataSet_purifier = [
    [
        "1",
        "CHOIRUL IMAM MA'RUF",
        "11690***"
    ],
    [
        "2",
        "MUHAMMAD FUAD HUSSEN",
        "11701***"
    ],
    [
        "3",
        "IRWAN CAHYA NUGRAHA",
        "11640***"
    ],
    [
        "4",
        "MICHAEL OEI",
        "11419***"
    ],
    [
        "5",
        "HARI KISNANTO",
        "11449***"
    ],
    [
        "6",
        "AGUS SALIM",
        "11368***"
    ],
    [
        "7",
        "MAYA SOEWANDI MM",
        "11682***"
    ],
    [
        "8",
        "ARMELIA FITRI",
        "11534***"
    ],
    [
        "9",
        "ALEXSANDER ALEXSANDER",
        "11461***"
    ],
    [
        "10",
        "JOSEPHUS D A BATOEK",
        "12009***"
    ],
];
var dataSet_vacuum = [
    [
        "1",
        "DANTON GINTING MUNTHE",
        "11123***"
    ],
    [
        "2",
        "VENA FARSTHADANI",
        "10118***"
    ],
    [
        "3",
        "IWAN FADILLAH",
        "25892***"
    ],
    [
        "4",
        "BAYU AJI",
        "10197***"
    ],
    [
        "5",
        "TUMPAL PRAKASA SARAGI",
        "10019***"
    ],
    [
        "6",
        "ESTY LINGGARSIH",
        "10052***"
    ],
    [
        "7",
        "MANFRED PIETRUSCHKA",
        "10094***"
    ],
    [
        "8",
        "JURI ARDIANTO",
        "11392***"
    ],
    [
        "9",
        "ARYA NARADANA",
        "11438***"
    ],
    [
        "10",
        "NATA ROH PEROLIHEN MANIK",
        "11470***"
    ],
];
var dataSet_superwifi = [
    [
        "1",
        "SULISTYORINI",
        "10981***"
    ],
    [
        "2",
        "TAN PIETJOENG",
        "10959***"
    ],
    [
        "3",
        "KEMENKO BIDANG KEMARITIMAN",
        "10434***"
    ],
    [
        "4",
        "ENDRAMAWAN",
        "10386***"
    ],
    [
        "5",
        "MELIANTHA OLIVIA",
        "10986***"
    ],
    [
        "6",
        "YULIANTO EKO PRABOWO",
        "11295***"
    ],
    [
        "7",
        "JOHANNES SUSANTO",
        "11086***"
    ],
    [
        "8",
        "POLMAN ARITONANG",
        "11268***"
    ],
    [
        "9",
        "JERRY BERNARD",
        "10765***"
    ],
    [
        "10",
        "ZALI ARIFIN",
        "10726***"
    ],
    [
        "11",
        "ANDRIE KUSUMA WARDHANI",
        "10738***"
    ],
    [
        "12",
        "ARDY",
        "10945***"
    ],
    [
        "13",
        "EDDY ATENG",
        "10843***"
    ],
    [
        "14",
        "JOHANES TANUKUSUMAH",
        "10858***"
    ],
    [
        "15",
        "WIYATNO WIYATNO",
        "11613***"
    ],
    [
        "16",
        "TRI EDWINSYAH YUDHA",
        "11486***"
    ],
    [
        "17",
        "RESMARIAMIN HALOHO",
        "11505***"
    ],
    [
        "18",
        "NUR FITRIYANI",
        "11625***"
    ],
    [
        "19",
        "SRIONO SRIONO",
        "11577***"
    ],
    [
        "20",
        "TJIPTO BASOEKI",
        "11427***"
    ],
    [
        "21",
        "SIGIT UTOMO",
        "11438***"
    ],
    [
        "22",
        "RUSDIYATI LAILI NAHARA",
        "11347***"
    ],
    [
        "23",
        "DIDIK SISWANTORO",
        "11502***"
    ],
    [
        "24",
        "NOVIE INDAH RIZQIE",
        "11517***"
    ],
    [
        "25",
        "RUDI ARDIYANTO",
        "11451***"
    ],
    [
        "26",
        "PRIMA YUNITA",
        "10057***"
    ],
    [
        "27",
        "IR ADITYA LUKMANSYAH",
        "10093***"
    ],
    [
        "28",
        "TONY BANYUKADJA",
        "10018***"
    ],
    [
        "29",
        "THERESIA SETIATI",
        "10141***"
    ],
    [
        "30",
        "VICTOR BORIS DALIMARTIN",
        "10191***"
    ],
    [
        "31",
        "GONA URSULA MARZYA G",
        "10128***"
    ],
    [
        "32",
        "JULIANA MARIA L TOBING",
        "11095***"
    ],
    [
        "33",
        "RICO MULIAWAN",
        "11131***"
    ],
    [
        "34",
        "KELVIN WIBAWA",
        "11161***"
    ],
    [
        "35",
        "M.ANWAR",
        "10027***"
    ],
    [
        "36",
        "MARINA",
        "10043***"
    ],
    [
        "37",
        "OTO HIDAYAT",
        "10010***"
    ],
    [
        "38",
        "JUFRI",
        "10539***"
    ],
    [
        "39",
        "MUHTHIATI ARIASTUTI",
        "10984***"
    ],
    [
        "40",
        "LIDYA LARASATI",
        "11002***"
    ],
    [
        "41",
        "MURSJID RIDWAN",
        "10159***"
    ],
    [
        "42",
        "SANDI SANUSI",
        "10099***"
    ],
    [
        "43",
        "SIZA RISMAYANTI",
        "11858***"
    ],
    [
        "44",
        "NURDIN ABDUL AZIZ",
        "11618***"
    ],
    [
        "45",
        "MASRIANI CHRISTIN",
        "92754***"
    ],
    [
        "46",
        "MUHAMMAD RIDWAN",
        "11556***"
    ],
    [
        "47",
        "FARUQ ALAMUDI",
        "11710***"
    ],
    [
        "48",
        "AMINUDIN",
        "11143***"
    ],
    [
        "49",
        "ANTHONY ROBERT MENZIES",
        "11194***"
    ],
    [
        "50",
        "CHIPPY AHWIL",
        "35328***"
    ],
];
var dataSet_wifixtender = [
    [
        "1",
        "FIFI FIANA",
        "31831***"
    ],
    [
        "2",
        "MUHAMMAD MICHAEL KILLIAN",
        "11160***"
    ],
    [
        "3",
        "HARDIANSYAH",
        "67919***"
    ],
    [
        "4",
        "JULFARZAH",
        "70650***"
    ],
    [
        "5",
        "ROBERTUS TAMTOMO",
        "64675***"
    ],
    [
        "6",
        "IRWAN KURNIA",
        "88541***"
    ],
    [
        "7",
        "MAHDI HARIS",
        "90897***"
    ],
    [
        "8",
        "ANI SUSETYA",
        "83252***"
    ],
    [
        "9",
        "BONG INDARTO",
        "10710***"
    ],
    [
        "10",
        "MARSELINO FAU",
        "11562***"
    ],
    [
        "11",
        "LIES NUNIK PUJIATI",
        "10765***"
    ],
    [
        "12",
        "STEFANUS KRISTIONO MUKRI",
        "10957***"
    ],
    [
        "13",
        "I PUTU EVAN DIATMIKA SAPUTRA",
        "11600***"
    ],
    [
        "14",
        "ANDI SUSANTO",
        "10885***"
    ],
    [
        "15",
        "A DANIEL HARI WIBOWO",
        "10601***"
    ],
    [
        "16",
        "RIZKY ADI SAPUTRO",
        "11319***"
    ],
    [
        "17",
        "SHON BYUNG TAK",
        "10542***"
    ],
    [
        "18",
        "RAHASTO WINOTO",
        "11458***"
    ],
    [
        "19",
        "HENRY HADINATA PURWOTO",
        "11429***"
    ],
    [
        "20",
        "SUHARTONO",
        "10623***"
    ],
    [
        "21",
        "PAIMAN PAIMAN",
        "11949***"
    ],
    [
        "22",
        "DRS LILIEK RACHMADI",
        "11907***"
    ],
    [
        "23",
        "NURCAHYA BASUKI",
        "11382***"
    ],
    [
        "24",
        "MUHAMMAD IQBAL",
        "11531***"
    ],
    [
        "25",
        "AGATO P P SIMAMORA",
        "11516***"
    ],
    [
        "26",
        "KELLY LIVIANA",
        "11481***"
    ],
    [
        "27",
        "NURIDA",
        "11057***"
    ],
    [
        "28",
        "PETRUS KANISIUS WIYOGA",
        "11690***"
    ],
    [
        "29",
        "AGUSTINUS PUTUT",
        "11708***"
    ],
    [
        "30",
        "I WAYAN I WAYAN DIARTA",
        "11881***"
    ],
    [
        "31",
        "FERIYANTO FERIYANTO",
        "11789***"
    ],
    [
        "32",
        "JULI CHIANG",
        "10589***"
    ],
    [
        "33",
        "MARGARET SALIM",
        "11378***"
    ],
    [
        "34",
        "SENTOT JULIANDU",
        "11280***"
    ],
    [
        "35",
        "ROY SUGIOWANTONO",
        "11454***"
    ],
    [
        "36",
        "FREEDOY SINAGA",
        "11472***"
    ],
    [
        "37",
        "YOVANKA RISVANI PUTRI",
        "11395***"
    ],
    [
        "38",
        "IMAM MUSLIH",
        "11927***"
    ],
    [
        "39",
        "IKA ERLINA HARUN",
        "71886***"
    ],
    [
        "40",
        "ANDI",
        "67430***"
    ],
    [
        "41",
        "TEGUH SUPARMONO",
        "94454***"
    ],
    [
        "42",
        "AHMAD",
        "92848***"
    ],
    [
        "43",
        "RIZALDI",
        "79767***"
    ],
    [
        "44",
        "ERLIA ERLIA",
        "11786***"
    ],
    [
        "45",
        "MARYASA HAIKAL",
        "10303***"
    ],
    [
        "46",
        "JENIFER WIDIAWATI",
        "10275***"
    ],
    [
        "47",
        "FERDY KRISDIONO",
        "10130***"
    ],
    [
        "48",
        "ADI KUSTIADI",
        "10113***"
    ],
    [
        "49",
        "SUDARMAJI AH SUDARMAJI AH",
        "11708***"
    ],
    [
        "50",
        "MUHAMAD ADE ZULIANTO",
        "12027***"
    ],
    [
        "51",
        "SARAH KARMILA",
        "10509***"
    ],
    [
        "52",
        "SADIMIN SADIMIN",
        "12052***"
    ],
    [
        "53",
        "NASRUL",
        "10341***"
    ],
    [
        "54",
        "MUSBIKAH MUSBIKAH",
        "11945***"
    ],
    [
        "55",
        "NI NYOMAN SUWESI ERAWATI",
        "11926***"
    ],
    [
        "56",
        "REVIANTO JANUAR",
        "10124***"
    ],
    [
        "57",
        "SUGIHIN VIONANDA",
        "10151***"
    ],
    [
        "58",
        "CHANDRA WIBOWO",
        "11708***"
    ],
    [
        "59",
        "ENDANG HARJANTI",
        "10029***"
    ],
    [
        "60",
        "SOLIHIN",
        "10060***"
    ],
    [
        "61",
        "OCTO CHANDRA F",
        "11608***"
    ],
    [
        "62",
        "TARINAH TARINAH",
        "11879***"
    ],
    [
        "63",
        "SAHRIA HENDARSIN",
        "10371***"
    ],
    [
        "64",
        "MAHMUT ARIYANTO",
        "10356***"
    ],
    [
        "65",
        "FRANS HASJIM",
        "10180***"
    ],
    [
        "66",
        "KUN KRYSTYANTORO UTOMO",
        "11856***"
    ],
    [
        "67",
        "LILI SETIYATI",
        "11814***"
    ],
    [
        "68",
        "AYU ANDHINI",
        "11286***"
    ],
    [
        "69",
        "SUSI NOVALINA",
        "11359***"
    ],
    [
        "70",
        "SUGIANTO SUGIANTO",
        "11340***"
    ],
    [
        "71",
        "HANNY MIDLENA DENALDA",
        "53184***"
    ],
    [
        "72",
        "VICO ALEXIS TANI",
        "68110***"
    ],
    [
        "73",
        "MARIE AVELIN KONTERIUS",
        "11507***"
    ],
    [
        "74",
        "KUKUH BUDI UTOMO",
        "11495***"
    ],
    [
        "75",
        "ADRIANSJAH NASUTION",
        "16690***"
    ],
    [
        "76",
        "IWAN SURYOLAKSONO ST",
        "11428***"
    ],
    [
        "77",
        "PRABOWO",
        "28130***"
    ],
    [
        "78",
        "RENTI LARASATI",
        "11464***"
    ],
    [
        "79",
        "NURJANAH NURJANAH",
        "12192***"
    ],
    [
        "80",
        "NURHAYANI NURHAYANI",
        "12145***"
    ],
    [
        "81",
        "IWAN MANALU",
        "11205***"
    ],
    [
        "82",
        "HARDI SUTEDJA",
        "96994***"
    ],
    [
        "83",
        "EDWIN BUDIANTO",
        "90932***"
    ],
    [
        "84",
        "IWAN HALIM",
        "97959***"
    ],
    [
        "85",
        "EFRIDANTI",
        "10131***"
    ],
    [
        "86",
        "STEFANUS BUDDHY",
        "10093***"
    ],
    [
        "87",
        "MIRANDA DHYTA NOFARA",
        "10148***"
    ],
    [
        "88",
        "IRVAN RACHMAT",
        "10016***"
    ],
    [
        "89",
        "PHEBE UTAMA",
        "10000***"
    ],
    [
        "90",
        "SUHARTO SETIAWAN",
        "11902***"
    ],
    [
        "91",
        "ANDRI MARTIN",
        "57288***"
    ],
    [
        "92",
        "YULIUS SH MH",
        "48568***"
    ],
    [
        "93",
        "DRA AGUSTINI NUGROHO",
        "45344***"
    ],
    [
        "94",
        "MADE SULANDRY",
        "72498***"
    ],
    [
        "95",
        "ILHAM FIRMANSYAH",
        "63635***"
    ],
    [
        "96",
        "MULYANIH",
        "10889***"
    ],
    [
        "97",
        "DELFITA ANGGRAINI",
        "10559***"
    ],
    [
        "98",
        "LIE SUSANTO",
        "10524***"
    ],
    [
        "99",
        "IKA HERAWATI",
        "10542***"
    ],
    [
        "100",
        "H SONNY SATRIA SETIAWAN",
        "10674***"
    ],
];

$(document).ready(function() {
	$('#list-pemenang').DataTable( {
        dom: "<'row'<'col-sm-12 col-md-12'f>>" + "<'row'<'col-sm-12'tr>>" + "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        responsive          : true,
        paging              : false,
        searching           : false,
        bInfo               : false,
        scrollY             : '50vh',
        scrollCollapse      : true,
        processing          : true,
        language            : { 
            search              : '', 
            searchPlaceholder   : "Search...",
            emptyTable          : "Hasil pencarian tidak ditemukan",
            zeroRecords         : "Hasil pencarian tidak ditemukan",
        },
		data: dataSet_apartemen,
		columns: [
			{ title: "No" },
			{ title: "Nama Pemenang" },
      		{ title: "No. Pelanggan"},
		]
	});
} );
$(document).ready(function() {
	$('#list-pemenang-iphone').DataTable( {
        dom: "<'row'<'col-sm-12 col-md-12'f>>" + "<'row'<'col-sm-12'tr>>" + "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        responsive          : true,
        paging              : false,
        searching           : false,
        bInfo               : false,
        scrollY             : '50vh',
        scrollCollapse      : true,
        processing          : true,
        language            : { 
            search              : '', 
            searchPlaceholder   : "Search...",
            emptyTable          : "Hasil pencarian tidak ditemukan",
            zeroRecords         : "Hasil pencarian tidak ditemukan",
        },
		data: dataSet_iphone,
		columns: [
			{ title: "No" },
			{ title: "Nama Pemenang" },
      		{ title: "No. Pelanggan"},
		]
	});
} );
$(document).ready(function() {
	$('#list-pemenang-ps5').DataTable( {
        dom: "<'row'<'col-sm-12 col-md-12'f>>" + "<'row'<'col-sm-12'tr>>" + "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        responsive          : true,
        paging              : false,
        searching           : false,
        bInfo               : false,
        scrollY             : '50vh',
        scrollCollapse      : true,
        processing          : true,
        language            : { 
            search              : '', 
            searchPlaceholder   : "Search...",
            emptyTable          : "Hasil pencarian tidak ditemukan",
            zeroRecords         : "Hasil pencarian tidak ditemukan",
        },
		data: dataSet_ps5,
		columns: [
			{ title: "No" },
			{ title: "Nama Pemenang" },
      		{ title: "No. Pelanggan"},
		]
	});
} );
$(document).ready(function() {
	$('#list-pemenang-tv').DataTable( {
        dom: "<'row'<'col-sm-12 col-md-12'f>>" + "<'row'<'col-sm-12'tr>>" + "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        responsive          : true,
        paging              : false,
        searching           : false,
        bInfo               : false,
        scrollY             : '50vh',
        scrollCollapse      : true,
        processing          : true,
        language            : { 
            search              : '', 
            searchPlaceholder   : "Search...",
            emptyTable          : "Hasil pencarian tidak ditemukan",
            zeroRecords         : "Hasil pencarian tidak ditemukan",
        },
		data: dataSet_tv,
		columns: [
			{ title: "No" },
			{ title: "Nama Pemenang" },
      		{ title: "No. Pelanggan"},
		]
	});
} );
$(document).ready(function() {
	$('#list-pemenang-motor').DataTable( {
        dom: "<'row'<'col-sm-12 col-md-12'f>>" + "<'row'<'col-sm-12'tr>>" + "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        responsive          : true,
        paging              : false,
        searching           : false,
        bInfo               : false,
        scrollY             : '50vh',
        scrollCollapse      : true,
        processing          : true,
        language            : { 
            search              : '', 
            searchPlaceholder   : "Search...",
            emptyTable          : "Hasil pencarian tidak ditemukan",
            zeroRecords         : "Hasil pencarian tidak ditemukan",
        },
		data: dataSet_motor,
		columns: [
			{ title: "No" },
			{ title: "Nama Pemenang" },
      		{ title: "No. Pelanggan"},
		]
	});
} );
$(document).ready(function() {
	$('#list-pemenang-sepeda').DataTable( {
        dom: "<'row'<'col-sm-12 col-md-12'f>>" + "<'row'<'col-sm-12'tr>>" + "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        responsive          : true,
        paging              : false,
        searching           : true,
        bInfo               : false,
        scrollY             : '50vh',
        scrollCollapse      : true,
        processing          : true,
        language            : { 
            search              : '', 
            searchPlaceholder   : "Search...",
            emptyTable          : "Hasil pencarian tidak ditemukan",
            zeroRecords         : "Hasil pencarian tidak ditemukan",
        },
		data: dataSet_sepeda,
		columns: [
			{ title: "No" },
			{ title: "Nama Pemenang" },
      		{ title: "No. Pelanggan"},
		]
	});

    $('.dataTables_filter input[type="search"]').
    attr('placeholder','Cari nama Anda disini ....');
} );
$(document).ready(function() {
	$('#list-pemenang-purifier').DataTable( {
        dom: "<'row'<'col-sm-12 col-md-12'f>>" + "<'row'<'col-sm-12'tr>>" + "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        responsive          : true,
        paging              : false,
        searching           : true,
        bInfo               : false,
        scrollY             : '50vh',
        scrollCollapse      : true,
        processing          : true,
        language            : { 
            search              : '', 
            searchPlaceholder   : "Search...",
            emptyTable          : "Hasil pencarian tidak ditemukan",
            zeroRecords         : "Hasil pencarian tidak ditemukan",
        },
		data: dataSet_purifier,
		columns: [
			{ title: "No" },
			{ title: "Nama Pemenang" },
      		{ title: "No. Pelanggan"},
		]
	});

    $('.dataTables_filter input[type="search"]').
    attr('placeholder','Cari nama Anda disini ....');
} );
$(document).ready(function() {
	$('#list-pemenang-vacuum').DataTable( {
        dom: "<'row'<'col-sm-12 col-md-12'f>>" + "<'row'<'col-sm-12'tr>>" + "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        responsive          : true,
        paging              : false,
        searching           : false,
        bInfo               : false,
        scrollY             : '50vh',
        scrollCollapse      : true,
        processing          : true,
        language            : { 
            search              : '', 
            searchPlaceholder   : "Search...",
            emptyTable          : "Hasil pencarian tidak ditemukan",
            zeroRecords         : "Hasil pencarian tidak ditemukan",
        },
		data: dataSet_vacuum,
		columns: [
			{ title: "No" },
			{ title: "Nama Pemenang" },
      		{ title: "No. Pelanggan"},
		]
	});

    $('.dataTables_filter input[type="search"]').
    attr('placeholder','Cari nama Anda disini ....');
} );
$(document).ready(function() {
	$('#list-pemenang-superwifi').DataTable( {
        dom: "<'row'<'col-sm-12 col-md-12'f>>" + "<'row'<'col-sm-12'tr>>" + "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        responsive          : true,
        paging              : false,
        searching           : true,
        bInfo               : false,
        scrollY             : '50vh',
        scrollCollapse      : true,
        processing          : true,
        language            : { 
            search              : '', 
            searchPlaceholder   : "Search...",
            emptyTable          : "Hasil pencarian tidak ditemukan",
            zeroRecords         : "Hasil pencarian tidak ditemukan",
        },
		data: dataSet_superwifi,
		columns: [
			{ title: "No" },
			{ title: "Nama Pemenang" },
      		{ title: "No. Pelanggan"},
		]
	});

    $('.dataTables_filter input[type="search"]').
    attr('placeholder','Cari nama Anda disini ....');
} );
$(document).ready(function() {
	$('#list-pemenang-wifixtender').DataTable( {
        dom: "<'row'<'col-sm-12 col-md-12'f>>" + "<'row'<'col-sm-12'tr>>" + "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        responsive          : true,
        paging              : false,
        searching           : true,
        bInfo               : false,
        scrollY             : '50vh',
        scrollCollapse      : true,
        processing          : true,
        language            : { 
            search              : '', 
            searchPlaceholder   : "Search...",
            emptyTable          : "Hasil pencarian tidak ditemukan",
            zeroRecords         : "Hasil pencarian tidak ditemukan",
        },
		data: dataSet_wifixtender,
		columns: [
			{ title: "No" },
			{ title: "Nama Pemenang" },
      		{ title: "No. Pelanggan"},
		]
	});

    $('.dataTables_filter input[type="search"]').
    attr('placeholder','Cari nama Anda disini ....');
} );
