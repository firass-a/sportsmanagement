export const dashboardAlerts = [
  { message: "إجازة رياضي تنتهي خلال 7 أيام — محمد أمين", type: "warn" as const, date: "20 ماي 2026" },
  { message: "فترة التحويلات تبدأ غداً", type: "calendar" as const, date: "18 ماي 2026" },
  { message: "تمت إضافة بطولة وطنية جديدة — الجودو", type: "info" as const, date: "15 ماي 2026" },
  { message: "تم اعتماد 15 إجازة رياضية", type: "success" as const, date: "12 ماي 2026" },
  { message: "قرار جديد بخصوص امتحانات الرتب", type: "gavel" as const, date: "10 ماي 2026" },
];

export const dashboardTasks = [
  { task: "مراجعة 18 طلب إجازة جديدة", due: "05/07/2026", priority: "عاجل" },
  { task: "اعتماد بطولة وطنية — الكاراتيه", due: "08/07/2026", priority: "متوسط" },
  { task: "مراجعة تقرير رابطة ولاية وهران", due: "10/07/2026", priority: "متوسط" },
  { task: "تصدير قائمة الإجازات قبل البطولة", due: "12/07/2026", priority: "عاجل" },
];

export const latestTournaments = [
  { name: "البطولة الوطنية للجودو", level: "وطنية", status: "جارية", date: "18 أكتوبر 2026" },
  { name: "البطولة الولائية للكاراتيه — الجزائر", level: "ولائية", status: "قادمة", date: "25 أكتوبر 2026" },
  { name: "كأس الرابطة للتايكواندو", level: "ولائية", status: "قادمة", date: "02 نوفمبر 2026" },
  { name: "البطولة الوطنية للسباحة", level: "وطنية", status: "منتهية", date: "15 يونيو 2026" },
];

export const latestRequests = [
  { name: "أحمد بن صالح", type: "طلب إجازة جديدة", status: "قيد المراجعة", club: "نادي أضواء الرياضة" },
  { name: "كريم بوعزة", type: "طلب تحويل", status: "معلق", club: "نادي النجوم" },
  { name: "سارة مزالي", type: "تجديد إجازة", status: "مقبول", club: "نادي الشباب" },
  { name: "يوسف حمدي", type: "طلب إجازة مدرب", status: "ينقص وثائق", club: "نادي الكيشين" },
];

export const wilayaActivity = [
  { wilaya: "الجزائر", level: "نشط جداً", clubs: 142, licenses: 8420 },
  { wilaya: "وهران", level: "نشط", clubs: 98, licenses: 5210 },
  { wilaya: "قسنطينة", level: "نشط", clubs: 76, licenses: 4180 },
  { wilaya: "سطيف", level: "متوسط", clubs: 54, licenses: 2890 },
  { wilaya: "بجاية", level: "ضعيف", clubs: 32, licenses: 1240 },
];

export const federationStats = [
  { label: "الرابطات النشطة", value: 48 },
  { label: "النوادي المسجلة", value: 620 },
  { label: "الرياضيون المرخصون", value: "18,450" },
  { label: "المدربون المعتمدون", value: "1,275" },
  { label: "الحكام المعتمدون", value: 860 },
  { label: "الإجازات المفعلة", value: "16,930" },
  { label: "التحويلات قيد الدراسة", value: 72 },
];

export const federationExecutive = [
  { name: "محمد الأمين بن صالح", role: "رئيس الاتحادية", phone: "0550 000 001", status: "نشط" },
  { name: "فاطمة زهراوي", role: "نائبة الرئيس", phone: "0550 000 002", status: "نشط" },
  { name: "كريم بوعزة", role: "الأمين العام", phone: "0550 000 003", status: "نشط" },
  { name: "سارة مزالي", role: "أمينة المال", phone: "0550 000 004", status: "نشط" },
  { name: "يوسف حمدي", role: "مسؤول المنافسات", phone: "0550 000 005", status: "نشط" },
];

export const federationAssembly = [
  { name: "الجمعية العامة العادية 2026", date: "15/03/2026", attendees: 186, decisions: 12, status: "منجز" },
  { name: "الجمعية العامة الاستثنائية — الميزانية", date: "22/05/2026", attendees: 142, decisions: 8, status: "منجز" },
  { name: "الجمعية العامة — اعتماد اللائحة", date: "10/09/2026", attendees: 0, decisions: 0, status: "قادمة" },
  { name: "جلسة استماع — الرابطات", date: "05/11/2026", attendees: 0, decisions: 0, status: "قادمة" },
];

export const federationCommittees = [
  { name: "اللجنة التقنية — الجودو", sport: "الجودو", members: 9, head: "عبد الرحمن قاسmi", status: "نشطة" },
  { name: "اللجنة التقنية — الكاراتيه", sport: "الكاراتيه", members: 7, head: "نادية بن عودة", status: "نشطة" },
  { name: "اللجنة التقنية — التaيكواندو", sport: "التايكواندو", members: 8, head: "رachid مرzوق", status: "نشطة" },
  { name: "لجنة الحكام الوطنية", sport: "جميع الاختصاصات", members: 12, head: "سamir بوzian", status: "نشطة" },
  { name: "لجنة التحكيم والانضباط", sport: "—", members: 5, head: "ليلى حمدي", status: "قيد التنفيذ" },
];

export const federationDocuments = [
  { title: "النظام الأساسي للاتحادية", type: "قانون", version: "v3.2", date: "01/01/2026", status: "معتمد" },
  { title: "لائحة الإجازات الرياضية", type: "لائحة", version: "v2.1", date: "15/02/2026", status: "معتمد" },
  { title: "قواعد التحويلات بين النوادي", type: "قرار", version: "v1.4", date: "20/03/2026", status: "معتمد" },
  { title: "دليل تنظيم البطولات الوطنية", type: "دليل", version: "v2.0", date: "10/04/2026", status: "معتمد" },
  { title: "لائحة امتحانات الرتب", type: "لائحة", version: "v1.8", date: "—", status: "قيد المراجعة" },
];

export const federationLeagues = [
  { name: "الرابطة الولائية — الجزائر", wilaya: "الجزائر", clubs: 34, licenses: 1280, status: "نشطة" },
  { name: "الرابطة الولائية — وهران", wilaya: "وهران", clubs: 28, licenses: 980, status: "نشطة" },
  { name: "الرابطة الولائية — قسنطينة", wilaya: "قسنطينة", clubs: 22, licenses: 760, status: "تحتاج تحديثاً" },
  { name: "الرابطة الولائية — سطيف", wilaya: "سطيف", clubs: 18, licenses: 540, status: "نشطة" },
  { name: "الرابطة الولائية — بجاية", wilaya: "بجاية", clubs: 16, licenses: 420, status: "نشطة" },
  { name: "الرابطة الولائية — عنابة", wilaya: "عنابة", clubs: 14, licenses: 380, status: "نشطة" },
  { name: "الرابطة الولائية — باتنة", wilaya: "باتنة", clubs: 12, licenses: 310, status: "تحتاج تحديثاً" },
  { name: "الرابطة الولائية — تلمسان", wilaya: "تلمسان", clubs: 11, licenses: 290, status: "نشطة" },
  { name: "الرابطة الولائية — مستغانم", wilaya: "مستغانم", clubs: 9, licenses: 240, status: "نشطة" },
  { name: "الرابطة الولائية — بشار", wilaya: "بشار", clubs: 6, licenses: 120, status: "تحتاج تحديثاً" },
];

export const leagueStats = [
  { label: "النوادي المنخرطة", value: 34 },
  { label: "الرياضيون المرخصون", value: "1,280" },
  { label: "الإجازات في انتظار المراجعة", value: 37 },
  { label: "التحويلات المعلقة", value: 12 },
  { label: "المنافسات الجارية", value: 4 },
  { label: "التربصات المبرمجة", value: 3 },
];

export const leagueAlerts = [
  { message: "37 إجازة في انتظار المراجعة — يلزم المعالجة", type: "warning" as const },
  { message: "نادي شباب الكيشين — ينقص وثائق الانخراط", type: "warning" as const },
];

export const leagueLicenseTrend = [
  { month: "مارس", licenses: 920, athletes: 860 },
  { month: "أبريل", licenses: 980, athletes: 910 },
  { month: "ماي", licenses: 1050, athletes: 980 },
  { month: "يونيو", licenses: 1120, athletes: 1040 },
  { month: "يوليو", licenses: 1180, athletes: 1100 },
  { month: "أغسطس", licenses: 1280, athletes: 1180 },
];

export const leagueSportDistribution = [
  { name: "الجودو", value: 28, color: "#2D5CFE", count: 358 },
  { name: "الكاراتيه", value: 22, color: "#27AE60", count: 282 },
  { name: "التايكواندو", value: 18, color: "#F2994A", count: 230 },
  { name: "السباحة", value: 15, color: "#9B51E0", count: 192 },
  { name: "أخرى", value: 17, color: "#64748b", count: 218 },
];

export const leagueTasks = [
  { task: "مراجعة 37 طلب إجازة", priority: "عاجل", due: "10/07/2026" },
  { task: "اعتماد قائمة المشاركين — بطولة الجودو", priority: "عاجل", due: "12/07/2026" },
  { task: "متابعة وثائق نادي الكيشين", priority: "متوسط", due: "18/07/2026" },
  { task: "إعداد تقرير التحويلات — Q2", priority: "متوسط", due: "25/07/2026" },
];

export const leaguePendingLicenses = [
  { name: "أحمد بن صالح", club: "نادي أضواء الرياضة", status: "قيد المراجعة" },
  { name: "كريم بوعزة", club: "نادي النجوم", status: "في الانتظار" },
  { name: "سارة مزالي", club: "نادي الشباب", status: "قيد المراجعة" },
  { name: "يوسف حمدي", club: "نادي الكيشين", status: "ينقص وثائق" },
  { name: "فاطمة زهراوي", club: "نادي الاتحاد", status: "في الانتظار" },
];

export const leagueUpcomingTournaments = [
  { name: "بطولة ولاية الجزائر — الجودو", date: "25 أكتوبر 2026", status: "قادمة" },
  { name: "كأس الرابطة — الكاراتيه", date: "02 نوفمبر 2026", status: "قادمة" },
  { name: "بطولة التايكواندو", date: "15 نوفمبر 2026", status: "قائمة" },
  { name: "سباق السباحة الولائي", date: "01 ديسمبر 2026", status: "قادمة" },
];

export const leagueClubs = [
  { name: "نادي أضواء الرياضة", branches: 8, athletes: 186, licenses: 172, status: "نشط" },
  { name: "نادي النجوم الرياضي", branches: 5, athletes: 124, licenses: 118, status: "نشط" },
  { name: "نادي شباب الكيشين", branches: 6, athletes: 98, licenses: 89, status: "ينقص وثائق" },
  { name: "نادي الاتحاد", branches: 4, athletes: 76, licenses: 71, status: "نشط" },
  { name: "نادي الأمل الرياضي", branches: 3, athletes: 64, licenses: 58, status: "نشط" },
  { name: "نادي النصر", branches: 5, athletes: 92, licenses: 84, status: "نشط" },
  { name: "نادي الشباب الرياضي", branches: 4, athletes: 71, licenses: 65, status: "نشط" },
  { name: "نادي المستقبل", branches: 2, athletes: 48, licenses: 42, status: "قيد المراجعة" },
  { name: "نادي الوحدة", branches: 3, athletes: 55, licenses: 50, status: "نشط" },
  { name: "نادي الفتح", branches: 4, athletes: 68, licenses: 61, status: "نشط" },
];

export const leagueExecutive = [
  { name: "عبد الرحمن بن علي", role: "رئيس الرابطة", phone: "0550 100 001", status: "نشط" },
  { name: "نادية كريم", role: "نائبة الرئيس", phone: "0550 100 002", status: "نشط" },
  { name: "سمير بوزيان", role: "الأمين العام", phone: "0550 100 003", status: "نشط" },
  { name: "ليلى حمدي", role: "أمينة المال", phone: "0550 100 004", status: "نشط" },
  { name: "ياسين مرابط", role: "مسؤول المنافسات", phone: "0550 100 005", status: "نشط" },
];

export const leagueAssemblyDecisions = [
  { decision: "اعتماد الميزانية السنوية 2026/2027", date: "12/06/2026", votes: "28/34", status: "مصادق" },
  { decision: "تحديث لائحة الانخراط", date: "05/05/2026", votes: "31/34", status: "مصادق" },
  { decision: "فتح باب التحويلات الولائية", date: "20/04/2026", votes: "26/34", status: "مصادق" },
  { decision: "إنشاء لجنة امتحانات الرتب", date: "15/03/2026", votes: "30/34", status: "مصادق" },
];

export const leagueReports = [
  { title: "تقرير الإجازات — الربع الثاني 2026", type: "إجازات", date: "30/06/2026", status: "مكتمل" },
  { title: "تقرير المنافسات الولائية", type: "منافسات", date: "15/06/2026", status: "قيد التنفيذ" },
  { title: "تقرير التحويلات — ماي 2026", type: "تحويلات", date: "01/06/2026", status: "مكتمل" },
  { title: "تقرير التربصات والتكوين", type: "تربصات", date: "20/05/2026", status: "مكتمل" },
];

export const officialClubsStats = [
  { label: "النوادي النشطة", value: "1,248" },
  { label: "الفروع المعتمدة", value: "3,420" },
  { label: "الرياضيون المسجلون", value: "32,146" },
  { label: "الإجازات السارية", value: "45,782" },
];

export const officialClubsList = [
  { name: "نادي أضواء الرياضة", wilaya: "الجزائر", sport: "متعدد", athletes: 186, status: "نشط" },
  { name: "نادي النجوم", wilaya: "وهران", sport: "الجودو", athletes: 124, status: "نشط" },
  { name: "نادي الشباب الرياضي", wilaya: "قسنطينة", sport: "الكاراتيه", athletes: 98, status: "في انتظار اعتماد" },
  { name: "نادي الاتحاد", wilaya: "سطيف", sport: "التايكواندو", athletes: 76, status: "نشط" },
  { name: "نادي النصر الرياضي", wilaya: "عنابة", sport: "السباحة", athletes: 112, status: "نشط" },
  { name: "نادي الأمل", wilaya: "باتنة", sport: "الجودو", athletes: 68, status: "نشط" },
  { name: "نادي الفتح", wilaya: "تلمسان", sport: "الكاراتيه", athletes: 84, status: "نشط" },
  { name: "نادي المستقبل", wilaya: "بجاية", sport: "التايكواندو", athletes: 52, status: "قيد المراجعة" },
];


export const officialClubBranches = [
  { club: "نادي أضواء الرياضة", branch: "الجودو", wilaya: "الجزائر", athletes: 42, coach: "عبد الرحمن قاسمي", status: "معتمد" },
  { club: "نادي أضواء الرياضة", branch: "الكاراتيه", wilaya: "الجزائر", athletes: 38, coach: "نادية بن عودة", status: "معتمد" },
  { club: "نادي النجوم", branch: "الجودو", wilaya: "وهران", athletes: 56, coach: "سمير بوزيان", status: "معتمد" },
  { club: "نادي الشباب الرياضي", branch: "الكاراتيه", wilaya: "قسنطينة", athletes: 34, coach: "رشيد مرزوق", status: "قيد المراجعة" },
  { club: "نادي الاتحاد", branch: "التايكواندو", wilaya: "سطيف", athletes: 28, coach: "ليلى حمدي", status: "معتمد" },
  { club: "نادي النصر الرياضي", branch: "السباحة", wilaya: "عنابة", athletes: 48, coach: "ياسين مرابط", status: "معتمد" },
];

export const officialClubAthletes = [
  { name: "رياض بن شريف", club: "نادي أضواء الرياضة", branch: "الجودو", category: "تحت 73 كغ", license: "LIC-2026-45821", status: "نشط" },
  { name: "أمينة بوزريف", club: "نادي النجوم", branch: "الكاراتيه", category: "سيدات +61 كغ", license: "LIC-2026-45830", status: "نشط" },
  { name: "مهند قاسمي", club: "نادي الاتحاد", branch: "التايكواندو", category: "تحت 68 كغ", license: "LIC-2026-45831", status: "نشط" },
  { name: "ليلى مرزوق", club: "نادي النصر الرياضي", branch: "السباحة", category: "100م حرة", license: "LIC-2026-45832", status: "نشط" },
  { name: "يوسف بنالي", club: "نادي الشباب الرياضي", branch: "الكاراتيه", category: "تحت 75 كغ", license: "LIC-2026-45833", status: "إجازة منتهية" },
  { name: "نور الهدى عبدلله", club: "نادي الأمل", branch: "الجودو", category: "سيدات -57 كغ", license: "LIC-2026-45834", status: "نشط" },
];

export const officialClubCoaches = [
  { name: "عبد الرحمن قاسمي", club: "نادي أضواء الرياضة", branch: "الجودو", diploma: "درجة 4 دان", license: "LIC-C-2026-1201", status: "معتمد" },
  { name: "نادية بن عودة", club: "نادي أضواء الرياضة", branch: "الكاراتيه", diploma: "درجة 3 دان", license: "LIC-C-2026-1202", status: "معتمد" },
  { name: "سمير بوزيان", club: "نادي النجوم", branch: "الجودو", diploma: "حزام أسود 3 دان", license: "LIC-C-2026-1203", status: "معتمد" },
  { name: "رشيد مرزوق", club: "نادي الشباب الرياضي", branch: "الكاراتيه", diploma: "درجة 2 دان", license: "LIC-C-2026-1204", status: "قيد المراجعة" },
  { name: "ليلى حمدي", club: "نادي الاتحاد", branch: "التايكواندو", diploma: "حزام أحمر", license: "LIC-C-2026-1205", status: "معتمد" },
  { name: "ياسين مرابط", club: "نادي النصر الرياضي", branch: "السباحة", diploma: "مدرب ماستر", license: "LIC-C-2026-1206", status: "معتمد" },
];

export const officialClubReferees = [
  { name: "يوسف حمدي", club: "نادي الفتح", branch: "الجودو", level: "وطني", missions: 18, license: "LIC-R-2026-801", status: "نشط" },
  { name: "سامي بوعلام", club: "نادي النجوم", branch: "الكاراتيه", level: "ولائي", missions: 12, license: "LIC-R-2026-802", status: "نشط" },
  { name: "فاطمة زهراوي", club: "نادي الاتحاد", branch: "التايكواندو", level: "وطني", missions: 9, license: "LIC-R-2026-803", status: "نشط" },
  { name: "بكار عبدلله", club: "نادي أضواء الرياضة", branch: "الجودو", level: "دولي", missions: 4, license: "LIC-R-2026-804", status: "قيد التجديد" },
];

export const officialClubLicenses = [
  { holder: "رياض بن شريف", type: "رياضي", club: "نادي أضواء الرياضة", number: "LIC-2026-45821", expiry: "31/08/2027", status: "معتمدة" },
  { holder: "عبد الرحمن قاسمي", type: "مدرب", club: "نادي أضواء الرياضة", number: "LIC-C-2026-1201", expiry: "31/08/2027", status: "معتمدة" },
  { holder: "يوسف حمدي", type: "حكم", club: "نادي الفتح", number: "LIC-R-2026-801", expiry: "31/08/2027", status: "معتمدة" },
  { holder: "رشيد مرزوق", type: "مدرب", club: "نادي الشباب الرياضي", number: "LIC-C-2026-1204", expiry: "—", status: "قيد المراجعة" },
];

export const officialClubTransfers = [
  { athlete: "محمد أمين", from: "نادي الأمل", to: "نادي أضواء الرياضة", type: "نهائي", date: "02/07/2026", status: "قيد المراجعة" },
  { athlete: "يوسف بنالي", from: "نادي الشباب الرياضي", to: "نادي النجوم", type: "إعارة", date: "28/06/2026", status: "معتمد" },
  { athlete: "نور الهدى عبدلله", from: "نادي الأمل", to: "نادي الفتح", type: "نهائي", date: "15/06/2026", status: "معتمد" },
];

export const officialClubParticipations = [
  { club: "نادي أضواء الرياضة", tournament: "البطولة الوطنية للجودو", athletes: 18, coach: "عبد الرحمن قاسمي", date: "18/10/2026", status: "مسجل" },
  { club: "نادي النجوم", tournament: "البطولة الوطنية للجودو", athletes: 14, coach: "سمير بوزيان", date: "18/10/2026", status: "قيد المراجعة" },
  { club: "نادي الشباب الرياضي", tournament: "البطولة الولائية للكاراتيه", athletes: 12, coach: "رشيد مرزوق", date: "25/10/2026", status: "مسجل" },
  { club: "نادي النصر الرياضي", tournament: "البطولة الوطنية للسباحة", athletes: 22, coach: "ياسين مرابط", date: "15/06/2026", status: "منتهي" },
];

export const officialClubDocuments = [
  { title: "نظام الأساسي — نادي أضواء الرياضة", type: "قانون", version: "v2.0", date: "01/01/2026", status: "معتمد" },
  { title: "لائحة الانخراط الرسمية", type: "لائحة", version: "v1.3", date: "15/02/2026", status: "معتمد" },
  { title: "قاعدة البيانات المحدثة", type: "بيانات", version: "2026", date: "10/03/2026", status: "معتمد" },
  { title: "وثيقة اعتماد الفرع — قسنطينة", type: "وثيقة", version: "—", date: "—", status: "ناقص" },
];

export const nationalTeamStaff = [
  { name: "كريم بوعزة", role: "المدرب الرئيسي", sport: "الجودو", status: "نشط" },
  { name: "نادية كريم", role: "مدربة الكاراتيه", sport: "الكاراتيه", status: "نشط" },
  { name: "سمير بوزيان", role: "مدرب التايكواندو", sport: "التايكواندو", status: "نشط" },
  { name: "ليلى حمدي", role: "طبيب الفريق", sport: "جميع الاختصاصات", status: "نشط" },
];

export const nationalTeamInternational = [
  { event: "بطولة شمال أفريقيا — كاراتيه", place: "الدار البيضاء", date: "12/12/2026", athletes: 6, status: "مسجل" },
  { event: "بطولة العالم — جودو", place: "الدوحة", date: "05/09/2026", athletes: 4, status: "قادم" },
  { event: "كأس العالم — تايكوندو", place: "باكو", date: "20/11/2026", athletes: 3, status: "قادم" },
];

export const nationalTeamResults = [
  { event: "بطولة المتوسط — جودو", athlete: "رياض بن شريف", medal: "ذهبية", category: "تحت 73 كغ", date: "15/06/2026" },
  { event: "بطولة المتوسط — كاراتيه", athlete: "أمينة بوزريف", medal: "فضية", category: "سيدات +61 كغ", date: "20/05/2026" },
  { event: "كأس العالم — تايكوندو", athlete: "مهند قاسمي", medal: "برونزية", category: "تحت 68 كغ", date: "10/04/2026" },
];

export const nationalTeamDocuments = [
  { title: "قائمة المستدعين — تربص أغسطس", type: "قائمة", date: "01/08/2026", status: "معتمد" },
  { title: "البرنامج التدريبي الوطني", type: "برنامج", date: "15/07/2026", status: "معتمد" },
  { title: "تقرير المشاركة الدولية", type: "تقرير", date: "—", status: "قيد الإعداد" },
];

export const campParticipants = [
  { name: "رياض بن شريف", camp: "تربص وطني — الجودو", club: "نادي أضواء الرياضة", role: "رياضي", status: "مؤكد" },
  { name: "عبد الرحمن قاسمي", camp: "تربص وطني — الجودو", club: "نادي أضواء الرياضة", role: "مدرب", status: "مؤكد" },
  { name: "أمينة بوزريف", camp: "تربص ولائي — الكاراتيه", club: "نادي النجوم", role: "رياضية", status: "مؤكد" },
  { name: "يوسف حمدي", camp: "تربص تحكيم وطني", club: "نادي الفتح", role: "حكم", status: "مؤكد" },
];

export const campAttendance = [
  { camp: "تربص تحكيم وطني", date: "10/07/2026", present: 26, absent: 2, rate: "92.8%" },
  { camp: "تربص إعداد — الفريق الوطني", date: "23/07/2026", present: 22, absent: 2, rate: "91.6%" },
  { camp: "تربص ولائي — السباحة", date: "13/08/2026", present: 17, absent: 1, rate: "94.4%" },
];

export const campReports = [
  { camp: "تربص تحكيم وطني", author: "يوسف حمدي", due: "15/07/2026", status: "غير مكتمل" },
  { camp: "تربص إعداد — الفريق الوطني", author: "كريم بوعزة", due: "30/07/2026", status: "قيد الإعداد" },
  { camp: "تربص ولائي — السباحة", author: "ياسين مرابط", due: "18/08/2026", status: "قيد الإعداد" },
];

export const examCandidates = [
  { name: "رياض بن شريف", exam: "امتحان الحزام الأصفر — الجودو", club: "نادي أضواء الرياضة", rank: "حزام أصفر", status: "مسجل" },
  { name: "يوسف بنالي", exam: "امتحان الحزام الأصفر — الجودو", club: "نادي الشباب الرياضي", rank: "حزام أصفر", status: "مسجل" },
  { name: "أمينة بوزريف", exam: "امتحان الدرجة الثانية — الكاراتيه", club: "نادي النجوم", rank: "درجة 2 دان", status: "مسجل" },
  { name: "مهند قاسمي", exam: "امتحان الرتبة — التايكواندو", club: "نادي الاتحاد", rank: "حزام أزرق", status: "ناجح" },
];

export const examCommittees = [
  { exam: "امتحان الحزام الأصفر — الجودو", head: "عبد الرحمن قاسمي", members: 5, date: "20/09/2026", status: "مكونة" },
  { exam: "امتحان الدرجة الأولى — الكاراتيه", head: "نادية بن عودة", members: 4, date: "05/10/2026", status: "قيد التشكيل" },
];

export const examResultsList = [
  { candidate: "مهند قاسمي", exam: "امتحان الرتبة — التايكواندو", score: "82/100", result: "ناجح", date: "12/06/2026" },
  { candidate: "يوسف بنالي", exam: "امتحان الحزام البرتقالي — الجودو", score: "74/100", result: "ناجح", date: "15/05/2026" },
  { candidate: "سارة مزالي", exam: "امتحان الدرجة الأولى — الكاراتيه", score: "58/100", result: "راسب", date: "05/10/2025" },
];

export const examCertificates = [
  { holder: "مهند قاسمي", rank: "حزام أزرق", exam: "امتحان الرتبة — تايكوندو", issued: "20/06/2026", status: "صادرة" },
  { holder: "يوسف بنالي", rank: "حزام برتقالي", exam: "امتحان الجودو", issued: "22/05/2026", status: "صادرة" },
  { holder: "أمينة بوزريف", rank: "درجة 2 دان", exam: "امتحان الكاراتيه", issued: "—", status: "قيد الطباعة" },
];

export const settingsCategories = [
  { name: "صغار", ageMin: 6, ageMax: 9, status: "نشط" },
  { name: "وسط", ageMin: 10, ageMax: 13, status: "نشط" },
  { name: "كبار", ageMin: 14, ageMax: 17, status: "نشط" },
  { name: "شباب", ageMin: 18, ageMax: 21, status: "نشط" },
  { name: "كبار محترفون", ageMin: 22, ageMax: 35, status: "نشط" },
  { name: "فئة أ", ageMin: 36, ageMax: 45, status: "نشط" },
  { name: "فئة ب", ageMin: 46, ageMax: 99, status: "نشط" },
];

export const settingsRanks = [
  { sport: "الجودو", ranks: 10, highest: "حزام أسود 5 دان", status: "معتمد" },
  { sport: "الكاراتيه", ranks: 8, highest: "درجة 5 دان", status: "معتمد" },
  { sport: "التايكواندو", ranks: 6, highest: "حزام أحمر", status: "معتمد" },
];

export const settingsSports = [
  { name: "الجودو", type: "فردي", clubs: 420, status: "نشط" },
  { name: "الكاراتيه", type: "فردي", clubs: 310, status: "نشط" },
  { name: "التايكواندو", type: "فردي", clubs: 280, status: "نشط" },
  { name: "السباحة", type: "فردي", clubs: 190, status: "نشط" },
  { name: "الملاكمة", type: "فردي", clubs: 48, status: "نشط" },
];

export const settingsLicenseTemplates = [
  { name: "إجازة رياضي", version: "v3.1", fields: 12, status: "معتمد" },
  { name: "إجازة مدرب", version: "v2.4", fields: 10, status: "معتمد" },
  { name: "إجازة حكم", version: "v2.0", fields: 8, status: "معتمد" },
  { name: "إجازة مدرب متخصص", version: "v1.2", fields: 9, status: "قيد المراجعة" },
];

export const nationalLicenseTrend = [
  { month: "مارس", licenses: 38200, athletes: 35100 },
  { month: "أبريل", licenses: 40100, athletes: 36800 },
  { month: "ماي", licenses: 41800, athletes: 38200 },
  { month: "يونيو", licenses: 43200, athletes: 39400 },
  { month: "يوليو", licenses: 44500, athletes: 40600 },
  { month: "أغسطس", licenses: 45782, athletes: 41800 },
];

export const nationalSportDistribution = [
  { name: "الجودو", value: 26, color: "#2D5CFE", count: 11903 },
  { name: "الكاراتيه", value: 22, color: "#27AE60", count: 10072 },
  { name: "التايكواندو", value: 18, color: "#F2994A", count: 8241 },
  { name: "السباحة", value: 14, color: "#9B51E0", count: 6410 },
  { name: "أخرى", value: 20, color: "#64748b", count: 9156 },
];

export const licensesStats = [
  { label: "الإجازات المفعلة", value: "45,782" },
  { label: "في انتظار المراجعة", value: 312 },
  { label: "تحتاج وثائق", value: 89 },
  { label: "مرفوضة", value: 24 },
  { label: "منتهية الصلاحية", value: 156 },
  { label: "تجديدات هذا الموسم", value: "8,420" },
];

export const licensesList = [
  { name: "أحمد بن صالح", type: "رياضي", club: "نادي أضواء الرياضة", number: "LIC-2026-45821", status: "معتمدة", expiry: "31/08/2027" },
  { name: "كريم بوعزة", type: "مدرب", club: "نادي النجوم", number: "LIC-2026-45822", status: "قيد المراجعة", expiry: "—" },
  { name: "سارة مزالي", type: "رياضية", club: "نادي الشباب", number: "LIC-2026-45823", status: "تحتاج وثائق", expiry: "—" },
  { name: "يوسف حمدي", type: "حكم", club: "نادي الكيشين", number: "LIC-2026-45824", status: "معتمدة", expiry: "31/08/2027" },
  { name: "فاطمة زهراوي", type: "رياضية", club: "نادي الاتحاد", number: "LIC-2026-45825", status: "قيد المراجعة", expiry: "—" },
  { name: "محمد أمين", type: "رياضي", club: "نادي النصر", number: "LIC-2026-45826", status: "معتمدة", expiry: "31/08/2027" },
  { name: "نادية كريم", type: "مدربة", club: "نادي الأمل", number: "LIC-2026-45827", status: "تحتاج وثائق", expiry: "—" },
  { name: "سمير بوزيان", type: "حكم", club: "نادي الفتح", number: "LIC-2026-45828", status: "معتمدة", expiry: "31/08/2027" },
];

export const transfersStats = [
  { label: "طلبات جديدة", value: 38 },
  { label: "تحويلات واردة", value: 22 },
  { label: "تحويلات صادرة", value: 16 },
  { label: "قيد دراسة الرابطة", value: 28 },
  { label: "معتمدة", value: 142 },
  { label: "مرفوضة", value: 8 },
];

export const transfersList = [
  { athlete: "محمد أمين", from: "نادي أضواء الرياضة", to: "نادي النجوم", type: "نهائي", date: "02/07/2026", status: "قيد المراجعة" },
  { athlete: "فاطمة زهراوي", from: "نادي الشباب", to: "نادي الاتحاد", type: "إعارة", date: "28/06/2026", status: "معتمد" },
  { athlete: "كريم بوعزة", from: "نادي الكيشين", to: "نادي أضواء الرياضة", type: "نهائي", date: "25/06/2026", status: "ينقص وثائق" },
  { athlete: "سارة مزالي", from: "نادي النجوم", to: "نادي النصر", type: "إعارة", date: "20/06/2026", status: "قيد المراجعة" },
  { athlete: "يوسف حمدي", from: "نادي الاتحاد", to: "نادي الفتح", type: "نهائي", date: "15/06/2026", status: "معتمد" },
  { athlete: "أحمد بن صالح", from: "نادي الأمل", to: "نادي الوحدة", type: "نهائي", date: "10/06/2026", status: "مرفوض" },
  { athlete: "ليلى حمدي", from: "نادي المستقبل", to: "نادي الشباب", type: "إعارة", date: "05/06/2026", status: "قيد المراجعة" },
  { athlete: "ياسين مرابط", from: "نادي الفتح", to: "نادي الكيشين", type: "نهائي", date: "01/06/2026", status: "معتمد" },
];

export const tournamentsStats = [
  { label: "البطولات الجارية", value: 58 },
  { label: "التسجيل مفتوح", value: 12 },
  { label: "النوادي المشاركة", value: 842 },
  { label: "الرياضيون المسجلون", value: "12,480" },
  { label: "البطولات القادمة", value: 24 },
  { label: "تقارير غير مكتملة", value: 6 },
];

export const tournamentsList = [
  { name: "البطولة الوطنية للجودو", level: "وطنية", clubs: 48, athletes: 620, registration: "مفتوح", date: "18/10/2026" , status: "جارية" },
  { name: "البطولة الولائية للكاراتيه", level: "ولائية", clubs: 22, athletes: 286, registration: "مفتوح", date: "25/10/2026" , status: "قادمة" },
  { name: "كأس الرابطة — التايكواندو", level: "ولائية", clubs: 18, athletes: 198, registration: "مغلق", date: "02/11/2026" , status: "قادمة" },
  { name: "البطولة الوطنية للسباحة", level: "وطنية", clubs: 32, athletes: 410, registration: "مغلق", date: "15/06/2026" , status: "منتهية" },
  { name: "كأس الجزائر — جودو", level: "وطنية", clubs: 36, athletes: 480, registration: "مغلق", date: "20/05/2026" , status: "منتهية" },
  { name: "بطولة شمال أفريقيا — كاراتيه", level: "دولية", clubs: 12, athletes: 96, registration: "مفتوح", date: "12/12/2026" , status: "قادمة" },
];

export const tournamentRegistrations = [
  { tournament: "البطولة الوطنية للجودو", club: "نادي أضواء الرياضة", athletes: 18, coach: "كريم بوعزة", submitted: "28/06/2026", deadline: "15/09/2026", status: "معتمد" },
  { tournament: "البطولة الوطنية للجودو", club: "نادي النجوم", athletes: 14, coach: "نادية كريم", submitted: "30/06/2026", deadline: "15/09/2026", status: "قيد المراجعة" },
  { tournament: "البطولة الولائية للكاراتيه", club: "نادي الشباب", athletes: 12, coach: "سمir بوzian", submitted: "01/07/2026", deadline: "20/09/2026", status: "معتمد" },
  { tournament: "البطولة الولائية للكاراتيه", club: "نادي الاتحاد", athletes: 9, coach: "ياسين مرابط", submitted: "03/07/2026", deadline: "20/09/2026", status: "ينقص وثائق" },
  { tournament: "بطولة شمال أفريقيا — كاراتيه", club: "نادي الفتح", athletes: 6, coach: "ليلى حمدي", submitted: "05/07/2026", deadline: "01/11/2026", status: "قيد المراجعة" },
];

export const tournamentDraws = [
  { tournament: "البطولة الوطنية للجودو", pool: "المجموعة أ — تحت 73 كغ", participants: 8, date: "15/10/2026", status: "تمت القرعة" },
  { tournament: "البطولة الوطنية للجودو", pool: "المجموعة ب — تحت 81 كغ", participants: 8, date: "15/10/2026", status: "تمت القرعة" },
  { tournament: "البطولة الولائية للكاراتيه", pool: "الدور التمهيدي", participants: 16, date: "20/10/2026", status: "قيد الإعداد" },
  { tournament: "كأس الرابطة — التايكواندو", pool: "ربع النهائي", participants: 8, date: "28/10/2026", status: "لم تُجرَ بعد" },
];

export const tournamentResults = [
  { tournament: "البطولة الوطنية للسباحة", category: "100م حرة — رجال", first: "أحمد بن صالح", second: "كريم بوعزة", third: "يوسف حمدي", date: "15/06/2026" },
  { tournament: "البطولة الوطنية للسباحة", category: "200م حرة — سيدات", first: "سارة مزالي", second: "فاطمة زهراوي", third: "نادية كريم", date: "15/06/2026" },
  { tournament: "كأس الجزائر — جودو", category: "تحت 73 كغ", first: "محمد أمين", second: "ياسين مرابط", third: "أحمد بن صالح", date: "20/05/2026" },
  { tournament: "كأس الجزائر — جودو", category: "تحت 81 كغ", first: "كريم بوعزة", second: "سمir بوzian", third: "يوسف حمدي", date: "20/05/2026" },
];

export const tournamentRankings = [
  { rank: 1, club: "نادي أضواء الرياضة", gold: 12, silver: 8, bronze: 5, points: 186 },
  { rank: 2, club: "نادي النجوم", gold: 9, silver: 6, bronze: 7, points: 152 },
  { rank: 3, club: "نادي الشباب", gold: 7, silver: 9, bronze: 4, points: 128 },
  { rank: 4, club: "نادي الاتحاد", gold: 5, silver: 4, bronze: 8, points: 98 },
  { rank: 5, club: "نادي النصر", gold: 4, silver: 5, bronze: 3, points: 76 },
];

export const tournamentReports = [
  { tournament: "كأس الرابطة — التايكواندو", type: "تقرير تنظيم", author: "يوسف حمدي", due: "10/07/2026", status: "غير مكتمل" },
  { tournament: "البطولة الولائية للكاراتيه", type: "تقرير نتائج", author: "نادية كريم", due: "05/11/2026", status: "غير مكتمل" },
  { tournament: "البطولة الوطنية للجودو", type: "قائمة المشاركين", author: "كريم بوعزة", due: "01/10/2026", status: "غير مكتمل" },
  { tournament: "بطولة شمال أفريقيا — كاراتيه", type: "تقرير مالي", author: "سارة مزالي", due: "15/12/2026", status: "غير مكتمل" },
  { tournament: "البطولة الوطنية للسباحة", type: "تقرير طبي", author: "ليلى حمدي", due: "20/06/2026", status: "غير مكتمل" },
  { tournament: "كأس الجزائر — جودو", type: "تقرير تحكيم", author: "سمir بوzian", due: "25/05/2026", status: "غير مكتمل" },
  { tournament: "البطولة الوطنية للسباحة", type: "تقرير نتائج", author: "ياسين مرابط", due: "18/06/2026", status: "مكتمل" },
  { tournament: "كأس الجزائر — جودو", type: "تقرير نتائج", author: "كريم بوعزة", due: "22/05/2026", status: "مكتمل" },
];

export const tournamentsOngoingSummary = [
  { name: "البطولة الوطنية للجودو", phase: "التسجيل مفتوح", clubs: 48, date: "18/10/2026" },
  { name: "بطولة ولاية الجزائر — جودو", phase: "دور المجموعات", clubs: 22, date: "جارية الآن" },
  { name: "كأس الرابطة — كاراتيه", phase: "ربع النهائي", clubs: 16, date: "جارية الآن" },
];

export const tournamentsUpcomingSummary = [
  { name: "البطولة الولائية للكاراتيه", date: "25/10/2026", registration: "مفتوح" },
  { name: "كأس الرابطة — التايكواندو", date: "02/11/2026", registration: "مغلق" },
  { name: "بطولة شمال أفريقيا — كاراتيه", date: "12/12/2026", registration: "مفتوح" },
];

export const trainingCampsStats = [
  { label: "التربصات القادمة", value: 8 },
  { label: "التربصات الجارية", value: 3 },
  { label: "المشاركون", value: "1,240" },
  { label: "التقارير المعلقة", value: 4 },
];

export const trainingCampsList = [
  { name: "تربص وطني — الجودو", place: "الجزائر", period: "15–20/08/2026", participants: 86, status: "قادم" },
  { name: "تربص ولائي — الكاراتيه", place: "وهران", period: "01–05/09/2026", participants: 42, status: "قادم" },
  { name: "تربص تحكيم وطني", place: "قسنطينة", period: "10–12/07/2026", participants: 28, status: "جاري" },
  { name: "تربص إعداد — الفريق الوطني", place: "سطيف", period: "22–28/07/2026", participants: 24, status: "جاري" },
  { name: "تربص مدربين — التايكواندو", place: "عنابة", period: "05–08/09/2026", participants: 36, status: "قادم" },
  { name: "تربص ولائي — السباحة", place: "وهران", period: "12–15/08/2026", participants: 18, status: "منتهي" },
];


export const rankExamsPlans = [
  {
    name: "امتحان الحزام الأصفر — الجودو",
    sport: "الجودو",
    rank: "حزام أصفر",
    date: "2026-09-20",
    registrationDeadline: "2026-09-05",
    venue: "قاعة الأمل — الجزائر",
    wilaya: "الجزائر",
    registered: 68,
    capacity: 86,
    committeeHead: "عبد الرحمن قاسمي",
    status: "التسجيل مفتوح",
    phase: "التسجيل",
  },
  {
    name: "امتحان الدرجة الثانية — الكاراتيه",
    sport: "الكاراتيه",
    rank: "درجة 2 دان",
    date: "2026-10-22",
    registrationDeadline: "2026-10-08",
    venue: "قاعة موح مدين — وهران",
    wilaya: "وهران",
    registered: 32,
    capacity: 38,
    committeeHead: "نادية بن عودة",
    status: "التسجيل مفتوح",
    phase: "التسجيل",
  },
  {
    name: "امتحان الدرجة الأولى — الكاراتيه",
    sport: "الكاراتيه",
    rank: "درجة 1 دان",
    date: "2026-10-05",
    registrationDeadline: "2026-09-20",
    venue: "قاعة الأمل — قسنطينة",
    wilaya: "قسنطينة",
    registered: 41,
    capacity: 54,
    committeeHead: "نادية بن عودة",
    status: "قادم",
    phase: "تشكيل اللجنة",
  },
  {
    name: "امتحان الحزام البرتقالي — الجودو",
    sport: "الجودو",
    rank: "حزام برتقالي",
    date: "2026-11-15",
    registrationDeadline: "2026-11-01",
    venue: "قاعة الأمل — سطيف",
    wilaya: "سطيف",
    registered: 12,
    capacity: 64,
    committeeHead: "سمير بوزيان",
    status: "قادم",
    phase: "الإعلان",
  },
  {
    name: "امتحان الرتبة — التايكواندو",
    sport: "التايكواندو",
    rank: "حزام أزرق",
    date: "2026-06-12",
    registrationDeadline: "2026-05-28",
    venue: "قاعة الأمل — عنابة",
    wilaya: "عنابة",
    registered: 72,
    capacity: 72,
    committeeHead: "ليلى حمدي",
    status: "منتهي",
    phase: "الشهادات",
  },
];

export const rankExamDeadlines = [
  { label: "إغلاق تسجيل الحزام الأصفر", date: "2026-09-05", exam: "امتحان الجودو", daysLeft: 52, urgent: false },
  { label: "تشكيل لجنة الدرجة الأولى — كاراتيه", date: "2026-09-25", exam: "امتحان الكاراتيه", daysLeft: 72, urgent: false },
  { label: "إغلاق تسجيل الدرجة الثانية", date: "2026-10-08", exam: "امتحان الكاراتيه", daysLeft: 85, urgent: false },
  { label: "نشر قائمة المرشحين — جودو", date: "2026-09-12", exam: "امتحان الجودو", daysLeft: 59, urgent: true },
];

export const rankExamsStats = [
  { label: "امتحانات قادمة", value: 6 },
  { label: "المرشحون", value: 420 },
  { label: "الناجحون", value: "1,860" },
  { label: "الشهادات الصادرة", value: "1,820" },
];

export const rankExamsList = [
  { name: "امتحان الحزام الأصفر — الجودو", date: "20/09/2026", candidates: 86, rank: "حزام أصفر", status: "التسجيل مفتوح" },
  { name: "امتحان الدرجة الأولى — الكاراتيه", date: "05/10/2026", candidates: 54, rank: "درجة 1 دان", status: "قادم" },
  { name: "امتحان الرتبة — التايكواندو", date: "12/06/2026", candidates: 72, rank: "حزام أزرق", status: "منتهي" },
  { name: "امتحان الحزام البرتقالي — الجودو", date: "15/11/2026", candidates: 64, rank: "حزام برتقالي", status: "قادم" },
  { name: "امتحان الدرجة الثانية — الكاراتيه", date: "22/10/2026", candidates: 38, rank: "درجة 2 دان", status: "التسجيل مفتوح" },
];

export const nationalTeamStats = [
  { label: "القائمة الموسعة", value: 86 },
  { label: "المستدعون", value: 24 },
  { label: "المنافسات الدولية", value: 5 },
  { label: "الميداليات الدولية", value: 18 },
];

export const nationalTeamList = [
  { name: "رياض بن شريف", sport: "الجودو", category: "تحت 73 كغ", status: "مستدعى", rank: "حزام أسود 2 دان" },
  { name: "أمينة بوزريف", sport: "الكاراتيه", category: "سيدات +61 كغ", status: "مستدعى", rank: "درجة 3 دان" },
  { name: "مهند قاسمي", sport: "التايكواندو", category: "تحت 68 كغ", status: "مرشح", rank: "حزام أحمر" },
  { name: "ليلى مرزوق", sport: "السباحة", category: "100م حرة", status: "مستدعى", rank: "—" },
  { name: "ياسين حميدي", sport: "الجودو", category: "تحت 81 كغ", status: "مرشح", rank: "حزام أسود 1 دان" },
  { name: "نور الهدى بن عودة", sport: "الكاراتيه", category: "سيدات -55 كغ", status: "مستدعى", rank: "درجة 2 دان" },
];

export const statisticsInsights = [
  "الرابطات التي لديها أكبر عدد من الإجازات غير المعالجة: الجزائر، وهران، قسنطينة",
  "نسبة معالجة الإجازات هذا الموسم: 94.2%",
  "أعلى نشاط تسجيل: الجودو (+12%)، الكاراتيه (+8%)",
  "عدد التحويلات خلال الموسم: 218 (142 معتمد، 8 مرفوض)",
];

export const albumItems = [
  { title: "البطولة الوطنية للجودو 2026", type: "صور", count: 48, date: "15/06/2026" },
  { title: "تربص وطني — الكاراتيه", type: "فيديو", count: 12, date: "20/05/2026" },
  { title: "امتحانات الرتب — التايكواندو", type: "صور", count: 36, date: "12/06/2026" },
  { title: "تتويج الفريق الوطني", type: "فيديو", count: 8, date: "01/04/2026" },
];


export const nationalAlbumStats = [
  { label: "الألبومات", value: 24 },
  { label: "الصور", value: "2,840" },
  { label: "الفيديوهات", value: 186 },
  { label: "بانتظار المراجعة", value: 12 },
];

export const nationalAlbums = [
  { id: "na1", name: "البطولة الوطنية للجودو 2026", type: "بطولة", branch: "الجودو", photos: 48, videos: 6, date: "2026-06-15", status: "منشور", image: "/images/album/judo-throw.png", imagePosition: "center 20%" },
  { id: "na2", name: "تربص وطني — الكاراتيه", type: "تربص", branch: "الكاراتيه", photos: 36, videos: 4, date: "2026-05-20", status: "منشور", image: "/images/album/warm-up.png", imagePosition: "center 40%" },
  { id: "na3", name: "امتحانات الرتب — التايكواندو", type: "امتحان", branch: "التايكواندو", photos: 28, videos: 2, date: "2026-06-12", status: "منشور", image: "/images/album/boxing-semifinal.png", imagePosition: "center" },
  { id: "na4", name: "تتويج الفريق الوطني", type: "تتويج", branch: "جميع الاختصاصات", photos: 52, videos: 8, date: "2026-04-01", status: "منشور", image: "/images/album/graduation-trophy.png", imagePosition: "center" },
  { id: "na5", name: "كأس الجزائر — الجودو", type: "بطولة", branch: "الجودو", photos: 42, videos: 5, date: "2026-05-20", status: "منشور", image: "/images/album/judo-throw.png", imagePosition: "center 30%" },
  { id: "na6", name: "البطولة الوطنية للسباحة", type: "بطولة", branch: "السباحة", photos: 34, videos: 3, date: "2026-06-15", status: "قيد المراجعة", image: "/images/album/warm-up.png", imagePosition: "center" },
];

export const nationalGalleryItems = [
  { id: "ng1", title: "رمية حاسمة — الجودو", album: "البطولة الوطنية للجودو 2026", date: "2026-06-15", category: "بطولة", image: "/images/album/judo-throw.png" },
  { id: "ng2", title: "تمرين الإحماء — تربص وطني", album: "تربص وطني — الكاراتيه", date: "2026-05-20", category: "تربص", image: "/images/album/warm-up.png" },
  { id: "ng3", title: "تتويج البطل الوطني", album: "تتويج الفريق الوطني", date: "2026-04-01", category: "تتويج", image: "/images/album/graduation-trophy.png" },
  { id: "ng4", title: "امتحان الحزام الأزرق", album: "امتحانات الرتب — التايكواندو", date: "2026-06-12", category: "امتحان", image: "/images/album/boxing-semifinal.png" },
  { id: "ng5", title: "نهائي كأس الجزائر", album: "كأس الجزائر — الجودو", date: "2026-05-20", category: "بطولة", image: "/images/album/judo-throw.png" },
  { id: "ng6", title: "انطلاق السباق النهائي", album: "البطولة الوطنية للسباحة", date: "2026-06-15", category: "سباحة", image: "/images/album/warm-up.png" },
  { id: "ng7", title: "احتفال التتويج الرسمي", album: "تتويج الفريق الوطني", date: "2026-04-01", category: "تتويج", image: "/images/album/graduation-trophy.png" },
  { id: "ng8", title: "تقنية الرمي — الجودو", album: "كأس الجزائر — الجودو", date: "2026-05-20", category: "بطولة", image: "/images/album/judo-throw.png" },
];

export const nationalVideoItems = [
  { id: "nv1", title: "ملخص البطولة الوطنية للجودو", album: "البطولة الوطنية للجودو 2026", date: "2026-06-15", duration: "8:24", image: "/images/album/judo-throw.png" },
  { id: "nv2", title: "تربص وطني — الكاراتيه", album: "تربص وطني — الكاراتيه", date: "2026-05-20", duration: "5:12", image: "/images/album/warm-up.png" },
  { id: "nv3", title: "حفل التتويج الوطني", album: "تتويج الفريق الوطني", date: "2026-04-01", duration: "14:30", image: "/images/album/graduation-trophy.png" },
  { id: "nv4", title: "امتحانات الرتب — ملخص", album: "امتحانات الرتب — التايكواندو", date: "2026-06-12", duration: "3:48", image: "/images/album/boxing-semifinal.png" },
];

export const statisticsOverviewStats = [
  { label: "إجمالي الإجازات", value: "45,782" },
  { label: "الرياضيون المسجلون", value: "32,146" },
  { label: "النوادي النشطة", value: "1,248" },
  { label: "البطولات هذا الموسم", value: 58 },
];
export const settingsStats = [
  { label: "المواسم الرياضية", value: 3 },
  { label: "الفئات العمرية", value: 7 },
  { label: "الرتب المعتمدة", value: 24 },
  { label: "نماذج الإجازات", value: 6 },
];

export const settingsSeasons = [
  { name: "2026 / 2027", status: "نشط", start: "01/09/2026", end: "31/08/2027" },
  { name: "2025 / 2026", status: "مؤرشف", start: "01/09/2025", end: "31/08/2026" },
];

export const federationAlerts = [
  { message: "3 رابطات تحتاج تحديث الوثائق القانونية", type: "warning" as const },
  { message: "تم اعتماد بطولة وطنية جديدة", type: "success" as const },
];

export const licensesAlerts = [
  { message: "312 إجازة في انتظار المراجعة", type: "warning" as const },
  { message: "89 ملف ينقصه وثائق إلزامية", type: "warning" as const },
];

export const licensesTasks = [
  { task: "مراجعة 312 طلب إجازة معلق", priority: "عاجل", due: "10/07/2026" },
  { task: "متابعة 89 ملف ناقص الوثائق", priority: "عاجل", due: "12/07/2026" },
  { task: "تصدير تقرير الإجازات الشهري", priority: "متوسط", due: "20/07/2026" },
];

export const transfersAlerts = [
  { message: "28 تحويلاً قيد دراسة الرابطة — يلزم المعالجة", type: "warning" as const },
  { message: "فترة التحويلات الصيفية مفتوحة حتى 31/08/2026", type: "success" as const },
];

export const transfersTasks = [
  { task: "مراجعة 28 طلب تحويل معلق", priority: "عاجل", due: "08/07/2026" },
  { task: "متابعة وثائق كريم بوعزة", priority: "عاجل", due: "10/07/2026" },
  { task: "إشعار النوادي بالفترة الصيفية", priority: "متوسط", due: "15/07/2026" },
];
