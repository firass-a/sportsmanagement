export const literaryStats = [
  { label: "التقارير المنشأة", value: 12 },
  { label: "التقرير الحالي", value: "78%" },
  { label: "التقارير المعتمدة", value: 9 },
  { label: "النشاطات المدرجة", value: 46 },
  { label: "الصور المرفقة", value: 185 },
  { label: "الفروع المكتملة", value: "8/10" },
  { label: "الإنجازات المسجلة", value: 23 },
];

export const literaryAlerts = [
  { message: "التقرير السنوي 2026 قيد الإعداد — نسبة الإنجاز 78%.", type: "info" },
  { message: "4 ملاحظات قيد المعالجة قبل الاعتماد.", type: "warning" },
  { message: "فرعا كرة اليد والتايكواندو لم يرسلا تقاريرهم بعد.", type: "warning" },
];

export const literaryReports = [
  { title: "التقرير الأدبي السنوي 2026", type: "سنوي", period: "2026", status: "قيد المراجعة", progress: "78%" },
  { title: "تقرير نهاية العهدة 2024-2028", type: "عهدة", period: "2024-2028", status: "مسودة", progress: "35%" },
  { title: "تقرير فرع كرة القدم — ربيع 2026", type: "فرع", period: "Q2/2026", status: "معتمد", progress: "100%" },
];

export const literaryActivities = [
  { title: "تربص تحضيري — الجودو", date: "2026-06-10", branch: "الجودو", photos: 24, status: "معتمد" },
  { title: "بطولة ولائية — كرة القدم", date: "2026-05-22", branch: "كرة القدم", photos: 18, status: "معتمد" },
  { title: "اجتماع المكتب التنفيذي", date: "2026-07-15", branch: "إداري", photos: 6, status: "قيد المراجعة" },
];

export const financialStats = [
  { label: "إجمالي الإيرادات", value: "2.85M دج" },
  { label: "إجمالي المصاريف", value: "2.12M دج" },
  { label: "الرصيد الحالي", value: "730K دج" },
  { label: "الاشتراكات المحصلة", value: "420K دج" },
  { label: "الإعانات", value: "1.5M دج" },
  { label: "فواتير غير مسددة", value: "125K دج" },
  { label: "تنفيذ الميزانية", value: "86%" },
];

export const financialAlerts = [
  { message: "125,000 دج من الفواتير في انتظار التسديد.", type: "warning" },
  { message: "مصاريف النقل تجاوزت الميزانية التقديرية بـ 45,000 دج.", type: "warning" },
  { message: "إيراد إعانة البلدية بقيمة 500,000 دج تم اعتماده.", type: "success" },
];

export const financialIncome = [
  { number: "2026-INC-014", type: "إعانة", source: "بلدية الكيشين", amount: "500,000 دج", date: "2026-06-01", status: "معتمد" },
  { number: "2026-INC-022", type: "اشتراكات", source: "رياضيون", amount: "85,000 دج", date: "2026-06-28", status: "مؤكد" },
  { number: "2026-INC-031", type: "رعاية", source: "شركة محلية", amount: "120,000 دج", date: "2026-07-02", status: "معتمد" },
];

export const financialExpenses = [
  { number: "2026-EXP-088", type: "تجهيزات", beneficiary: "مورد رياضي", amount: "180,000 دج", date: "2026-06-15", status: "مسدد" },
  { number: "2026-EXP-095", type: "نقل", beneficiary: "شركة نقل", amount: "45,000 دج", date: "2026-06-20", status: "قيد التنفيذ" },
  { number: "2026-EXP-102", type: "بطولات", beneficiary: "رابطة الجudo", amount: "32,000 دج", date: "2026-07-01", status: "في انتظار الموافقة" },
];

export const statisticsStats = [
  { label: "إجمالي الرياضيين", value: 248 },
  { label: "الرياضيون النشطون", value: 221 },
  { label: "المدربون", value: 26 },
  { label: "الحكام", value: 18 },
  { label: "البطاقات المفعلة", value: 205 },
  { label: "التدريبات المنجزة", value: 314 },
  { label: "متوسط الحضور", value: "89%" },
];

export const statisticsAlerts = [
  { message: "انخفاض حضور فرع كرة اليد خلال آخر أسبوعين.", type: "warning" },
  { message: "فرع الجودو حقق أعلى عدد ميداليات هذا الموسم.", type: "success" },
];

export const branchComparison = [
  { branch: "كرة القدم", athletes: 96, trainings: 102, attendance: "88%", championships: 6, achievements: "14 فوز" },
  { branch: "الجودو", athletes: 54, trainings: 84, attendance: "92%", championships: 8, achievements: "12 ميدالية" },
  { branch: "الكاراتيه", athletes: 41, trainings: 63, attendance: "86%", championships: 5, achievements: "7 ميداليات" },
  { branch: "السباحة", athletes: 26, trainings: 42, attendance: "90%", championships: 3, achievements: "4 ميداليات" },
];

export const albumStats = [
  { label: "عدد الألبومات", value: 42 },
  { label: "إجمالي الصور", value: 1285 },
  { label: "إجمالي الفيديوهات", value: 96 },
  { label: "محتوى معلق", value: 18 },
  { label: "صور في التقرير الأدبي", value: 185 },
  { label: "نشاطات دون توثيق", value: 6 },
  { label: "أكثر فرع توثيقاً", value: "الجودو" },
];

export const albumAlerts = [
  { message: "18 صورة/فيديو في انتظار المراجعة والاعتماد.", type: "warning" },
  { message: "6 نشاطات لم يتم توثيقها بالصور بعد.", type: "info" },
];

export const albums = [
  {
    id: "a1",
    name: "بطولة ولائية — كرة القدم",
    type: "بطولة",
    branch: "كرة القدم",
    photos: 48,
    videos: 4,
    date: "2026-05-22",
    status: "منشور",
    image: "/images/album/football-tournament.png",
    imagePosition: "center 55%",
  },
  {
    id: "a2",
    name: "تدريبات الجودو — يونيو",
    type: "تدريب",
    branch: "الجودو",
    photos: 62,
    videos: 2,
    date: "2026-06-30",
    status: "منشور",
    image: "/images/album/judo-throw.png",
    imagePosition: "center 20%",
  },
  {
    id: "a3",
    name: "حفل التتويج السنوي",
    type: "تتويج",
    branch: "جميع الفروع",
    photos: 85,
    videos: 8,
    date: "2026-07-01",
    status: "قيد المراجعة",
    image: "/images/album/graduation-trophy.png",
    imagePosition: "center",
  },
  {
    id: "a4",
    name: "جلسة الإحماء — التدريبات الصيفية",
    type: "تدريب",
    branch: "جميع الفروع",
    photos: 34,
    videos: 3,
    date: "2026-07-08",
    status: "منشور",
    image: "/images/album/warm-up.png",
    imagePosition: "center 40%",
  },
  {
    id: "a5",
    name: "نصف نهائي — بطولة الملاكمة",
    type: "بطولة",
    branch: "الملاكمة",
    photos: 28,
    videos: 1,
    date: "2026-06-18",
    status: "منشور",
    image: "/images/album/boxing-semifinal.png",
    imagePosition: "center",
  },
  {
    id: "a6",
    name: "مسابقات رمي القذيفة",
    type: "بطولة",
    branch: "ألعاب القوى",
    photos: 22,
    videos: 2,
    date: "2026-06-25",
    status: "منشور",
    image: "/images/album/throwing.png",
    imagePosition: "center 30%",
  },
];

export const albumGalleryItems = [
  { id: "p1", title: "لحظة حاسمة — نصف النهائي", album: "بطولة ولائية — كرة القدم", date: "2026-05-22", type: "photo", category: "بطولة", image: "/images/album/football-tournament.png" },
  { id: "p2", title: "تمرين الإحماء الجماعي", album: "جلسة الإحماء — التدريبات الصيفية", date: "2026-07-08", type: "photo", category: "إحماء", image: "/images/album/warm-up.png" },
  { id: "p3", title: "احتفال التخرج والتتويج", album: "حفل التتويج السنوي", date: "2026-07-01", type: "photo", category: "تتويج", image: "/images/album/graduation-trophy.png" },
  { id: "p4", title: "الوصول للمرمى", album: "بطولة ولائية — كرة القدم", date: "2026-05-22", type: "photo", category: "بطولة", image: "/images/album/football-tournament.png" },
  { id: "p5", title: "تقنية الرمي — الجودو", album: "تدريبات الجودو — يونيو", date: "2026-06-30", type: "photo", category: "جودو", image: "/images/album/judo-throw.png" },
  { id: "p6", title: "إحماء قبل التدريب", album: "جلسة الإحماء — التدريبات الصيفية", date: "2026-07-08", type: "photo", category: "إحماء", image: "/images/album/warm-up.png" },
  { id: "p7", title: "نصف نهائي — الملاكمة", album: "نصف نهائي — بطولة الملاكمة", date: "2026-06-18", type: "photo", category: "ملاكمة", image: "/images/album/boxing-semifinal.png" },
  { id: "p8", title: "لحظة رفع الكأس", album: "حفل التتويج السنوي", date: "2026-07-01", type: "photo", category: "تتويج", image: "/images/album/graduation-trophy.png" },
  { id: "p9", title: "رمي القذيفة", album: "مسابقات رمي القذيفة", date: "2026-06-25", type: "photo", category: "رمي", image: "/images/album/throwing.png" },
  { id: "p10", title: "رمي الجودو", album: "تدريبات الجودو — يونيو", date: "2026-06-30", type: "photo", category: "جودو", image: "/images/album/judo-throw.png" },
];

export const albumVideoItems = [
  { id: "v1", title: "ملخص البطولة الولائية", album: "بطولة ولائية — كرة القدم", date: "2026-05-22", duration: "4:32", image: "/images/album/football-tournament.png" },
  { id: "v2", title: "جلسة تدريب الجودو", album: "تدريبات الجودو — يونيو", date: "2026-06-30", duration: "2:18", image: "/images/album/judo-throw.png" },
  { id: "v3", title: "حفل التتويج — كامل", album: "حفل التتويج السنوي", date: "2026-07-01", duration: "12:05", image: "/images/album/graduation-trophy.png" },
  { id: "v4", title: "نصف نهائي الملاكمة", album: "نصف نهائي — بطولة الملاكمة", date: "2026-06-18", duration: "3:45", image: "/images/album/boxing-semifinal.png" },
];

export const digitalCardsStats = [
  { label: "إجمالي البطاقات", value: 332 },
  { label: "مفعلة 2026", value: 285 },
  { label: "انتظار التفعيل", value: 28 },
  { label: "وثائق ناقصة", value: 11 },
  { label: "بطاقات رياضيين", value: 248 },
  { label: "بطاقات مدربين", value: 26 },
  { label: "بطاقات حكام", value: 18 },
];

export const digitalCardsAlerts = [
  { message: "28 بطاقة في انتظار التفعيل السنوي لسنة 2026.", type: "warning" },
  { message: "11 بطاقة تحتوي على وثائق ناقصة.", type: "warning" },
];

export const digitalCardsList = [
  { name: "محمد أمين", type: "رياضي", number: "QR-2024-01024", branch: "الجودو", activation: "مفعلة لسنة 2026", docs: "مكتملة" },
  { name: "كريم مدرب", type: "مدرب", number: "QR-2022-00089", branch: "كرة القدم", activation: "مفعلة لسنة 2026", docs: "مكتملة" },
  { name: "سامي حكم", type: "حكم", number: "QR-2023-00156", branch: "الكاراتيه", activation: "في انتظار التفعيل", docs: "ناقصة وثائق" },
];

export const refereesStats = [
  { label: "إجمالي الحكام", value: 18 },
  { label: "الحكام النشطون", value: 15 },
  { label: "بطاقات مفعلة", value: 14 },
  { label: "تحتاج تفعيل", value: 4 },
  { label: "مهمات هذا الشهر", value: 26 },
  { label: "متاحون للمنافسات", value: 11 },
  { label: "شهادات منتهية", value: 2 },
];

export const refereesAlerts = [
  { message: "2 حكم لديهم شهادات منتهية أو ناقصة.", type: "warning" },
  { message: "4 بطاقات حكام تحتاج تفعيلاً سنوياً.", type: "warning" },
];

export const refereesList = [
  { name: "ياسين بن عودة", branch: "كرة القدم", rank: "حكم رئيسي", level: "ولائي", missions: 12, rating: "ممتاز", status: "نشط" },
  { name: "رشيد قاسم", branch: "الكاراتيه", rank: "حكم مساعد", level: "جهوي", missions: 8, rating: "جيد جداً", status: "نشط" },
  { name: "نادر بوعلام", branch: "كرة السلة", rank: "حكم طاولة", level: "ولائي", missions: 6, rating: "جيد", status: "نشط" },
];

export type PlanningEvent = {
  id: string;
  title: string;
  date: string;
  time?: string;
  place?: string;
  person?: string;
  role?: string;
  status?: string;
};

export const refereeMissions: PlanningEvent[] = [
  { id: "rm1", title: "مباراة كرة السلة — فئة الأواسط", date: "2026-07-18", time: "17:00", place: "القاعة متعددة الرياضات", person: "نادر بوعلام", role: "حكم طاولة", status: "مؤكدة" },
  { id: "rm2", title: "نزالات الجودو — دورة داخلية", date: "2026-07-20", time: "10:00", place: "قاعة الفنون القتالية", person: "رشيد قاسم", role: "حكم مساعد", status: "مؤكدة" },
  { id: "rm3", title: "بطولة كاراتيه — فئة الأشبال", date: "2026-07-22", time: "09:00", place: "قاعة الفنون القتالية", person: "رشيد قاسم", role: "حكم رئيسي", status: "مؤكدة" },
  { id: "rm4", title: "مباراة كرة القدم — دوري داخلي", date: "2026-07-25", time: "16:00", place: "ملعب البلدية", person: "ياسين بن عودة", role: "حكم رئيسي", status: "مؤكدة" },
  { id: "rm5", title: "تكوين الحكام — جلسة نظرية", date: "2026-07-28", time: "18:30", place: "قاعة الاجتماعات", person: "ياسين بن عودة", role: "مدرب حكام", status: "مبرمجة" },
  { id: "rm6", title: "مباراة كرة السلة — ناشئين", date: "2026-09-18", time: "17:00", place: "القاعة المغطاة", person: "نادر بوعلام", role: "حكم طاولة", status: "مؤكدة" },
  { id: "rm7", title: "نزالات الجودو — بطولة ولائية", date: "2026-09-05", time: "08:30", place: "قاعة الفنون القتالية", person: "رشيد قاسم", role: "حكم مساعد", status: "مكتملة" },
];

export const trainingsStats = [
  { label: "تدريبات اليوم", value: 8 },
  { label: "تدريبات الأسبوع", value: 31 },
  { label: "المنجزة", value: 25 },
  { label: "الحاضرون اليوم", value: 164 },
  { label: "الغيابات", value: 18 },
  { label: "متوسط الحضور", value: "89%" },
  { label: "تقارير معلقة", value: 4 },
];

export const trainingsAlerts = [
  { message: "4 تقارير تدريبية لم يتم رفعها بعد.", type: "warning" },
  { message: "تدريب كرة اليد الساعة 17:00 — القاعة محجوزة.", type: "info" },
];

export const trainingSessions = [
  { title: "تدريب فريق الأشبال — كرة القدم", date: "2026-07-15", time: "09:00", place: "ملعب البلدية", coach: "مدرب الأشبال", branch: "كرة القدم", attendance: "22/24", status: "منجز" },
  { title: "حصة كاراتيه — فئة الأشبال", date: "2026-07-15", time: "10:30", place: "قاعة الفنون القتالية", coach: "مدرب الكاراتيه", branch: "الكاراتيه", attendance: "14/16", status: "منجز" },
  { title: "تدريب كرة اليد — ناشئين", date: "2026-07-15", time: "16:00", place: "قاعة مغطاة", coach: "مدرب كرة اليد", branch: "كرة اليد", attendance: "—", status: "مبرمج" },
  { title: "تدريب فريق الأشبال — كرة القدم", date: "2026-07-15", time: "17:00", place: "ملعب البلدية", coach: "مدرب الأشبال", branch: "كرة القدم", attendance: "22/24", status: "مبرمج" },
  { title: "حصة جودو — فئة الأواسط", date: "2026-07-15", time: "18:00", place: "قاعة الفنون القتالية", coach: "مدرب الجودو", branch: "الجودو", attendance: "18/20", status: "مبرمج" },
  { title: "تدريب كرة السلة — ناشئين", date: "2026-07-14", time: "17:30", place: "قاعة مغطاة", coach: "مدرب كرة السلة", branch: "كرة السلة", attendance: "16/18", status: "منجز" },
];

export const trainingReports = [
  { session: "تدريب كرة اليد — ناشئين", date: "2026-07-14", coach: "مدرب كرة اليد", attendance: "76%", status: "لم يُرفع" },
  { session: "حصة تايكواندو — أصاغر", date: "2026-07-14", coach: "مدرب التايكواندو", attendance: "82%", status: "قيد المراجعة" },
  { session: "تدريب كرة السلة — ناشئين", date: "2026-07-14", coach: "مدرب كرة السلة", attendance: "89%", status: "معتمد" },
  { session: "حصة سباحة — أصاغر", date: "2026-07-13", coach: "مدرب السباحة", attendance: "94%", status: "مرسل" },
];

export const championshipsStats = [
  { label: "بطولات نشطة", value: 6 },
  { label: "بطولات قادمة", value: 4 },
  { label: "المشاركات", value: 18 },
  { label: "المباريات القادمة", value: 12 },
  { label: "الميداليات", value: 15 },
  { label: "غير مؤهلين", value: 3 },
  { label: "تقارير ناقصة", value: 2 },
];

export const championshipsAlerts = [
  { message: "3 رياضيين غير مؤهلين بسبب البطاقة أو الوثائق.", type: "warning" },
  { message: "بطولة ولائية كرة القدم بعد 3 أيام — تحقق من قائمة الفريق.", type: "info" },
];

export const championshipsList = [
  { name: "بطولة ولائية — كرة القدم", level: "ولائي", branch: "كرة القدم", date: "2026-07-12", registrationDeadline: "2026-07-08", venue: "ملعب الولاية", participants: 22, roster: "20/22", status: "قادمة", phase: "تحضير القائمة" },
  { name: "بطولة وطنية — الجودو", level: "وطني", branch: "الجودو", date: "2026-08-05", participants: 8, status: "قادمة" },
  { name: "دوري داخلي — كرة اليد", level: "داخلي", branch: "كرة اليد", date: "2026-07-20", participants: 14, status: "نشطة" },
];

export const championshipResults = [
  { athlete: "محمد أمين", event: "بطولة ولائية — الجودو", result: "ذهبية", rank: "1", branch: "الجودو" },
  { athlete: "إلياس كريم", event: "سباق 100 م", result: "برونزية", rank: "3", branch: "ألعاب القوى" },
  { athlete: "فريق الأشبال", event: "دوري كرة القدم", result: "4 انتصارات", rank: "2", branch: "كرة القدم" },
];

export const dashboardTasks = [
  { task: "تفعيل 18 بطاقة رقمية", priority: "عالية", due: "2026-07-20" },
  { task: "رفع تقرير تدريب كرة اليد", priority: "متوسطة", due: "2026-07-16" },
  { task: "اعتماد التقرير الأدبي السنوي", priority: "عالية", due: "2026-07-30" },
];

export const dashboardCalendar = [
  { time: "17:00", title: "تدريب كرة القدم — الأشبال", type: "تدريب" },
  { time: "18:00", title: "تدريب جودو — الأواسط", type: "تدريب" },
  { time: "19:30", title: "اجتماع المكتب التنفيذي", type: "اجتماع" },
  { time: "20:00", title: "غلق تسجيل بطولة ولائية", type: "بطولة" },
];

export type ScheduleResource = {
  id: string;
  name: string;
  sports: string;
  icon: "football" | "court" | "martial" | "pool" | "office";
};

export type ScheduleEvent = {
  id: string;
  resourceId: string;
  title: string;
  subtitle: string;
  startHour: number;
  endHour: number;
  variant: "session" | "active" | "festival" | "meeting";
};

export const scheduleResources: ScheduleResource[] = [
  { id: "field", name: "ملعب البلدية", sports: "كرة القدم، كرة اليد", icon: "football" },
  { id: "hall", name: "القاعة المغطاة", sports: "كرة السلة، كرة الطائرة", icon: "court" },
  { id: "dojo", name: "قاعة الفنون القتالية", sports: "جودو، كاراتيه، تايكواندو", icon: "martial" },
  { id: "pool", name: "المسبح", sports: "سباحة", icon: "pool" },
  { id: "office", name: "قاعة الاجتماعات", sports: "إداري", icon: "office" },
];

export const scheduleEvents: ScheduleEvent[] = [
  { id: "e1", resourceId: "field", title: "كرة القدم", subtitle: "حصة تعليمية — الأشبال", startHour: 9, endHour: 10.5, variant: "session" },
  { id: "e2", resourceId: "hall", title: "كرة السلة", subtitle: "حصة تدريبية — ناشئين", startHour: 9, endHour: 10, variant: "session" },
  { id: "e3", resourceId: "pool", title: "سباحة", subtitle: "فئة الأصاغر", startHour: 10, endHour: 11, variant: "session" },
  { id: "e4", resourceId: "dojo", title: "كاراتيه", subtitle: "حصة تعليمية", startHour: 11, endHour: 12.5, variant: "session" },
  { id: "e5", resourceId: "field", title: "كرة اليد", subtitle: "تدريب — فئة الأواسط", startHour: 14, endHour: 15.5, variant: "active" },
  { id: "e6", resourceId: "hall", title: "مهرجان رياضي مفتوح", subtitle: "بطولة داخلية", startHour: 15, endHour: 18, variant: "festival" },
  { id: "e7", resourceId: "field", title: "كرة القدم", subtitle: "تدريب الأشبال", startHour: 17, endHour: 18.5, variant: "session" },
  { id: "e8", resourceId: "dojo", title: "الجودو", subtitle: "فئة الأواسط", startHour: 18, endHour: 19.5, variant: "session" },
  { id: "e9", resourceId: "office", title: "اجتماع المكتب التنفيذي", subtitle: "مراجعة شهرية", startHour: 19.5, endHour: 20.5, variant: "meeting" },
  { id: "e10", resourceId: "office", title: "غلق التسجيل", subtitle: "بطولة ولائية — كرة القدم", startHour: 20, endHour: 21, variant: "meeting" },
];

/** Mock current time for the live indicator (14:15) */
export const scheduleCurrentHour = 14.25;

export const SCHEDULE_HOUR_START = 9;
export const SCHEDULE_HOUR_END = 23;

export const dashboardAiInsights = [
  "يوجد انخفاض في حضور فرع كرة اليد خلال آخر أسبوعين.",
  "18 بطاقة رقمية تحتاج إلى تفعيل سنوي.",
  "فرع الجودو حقق أعلى عدد من الميداليات هذا الموسم.",
  "4 تدريبات منجزة دون تقارير.",
];

export const investmentsStats = [
  { label: "إجمالي المشاريع", value: 12 },
  { label: "قيد الدراسة", value: 3 },
  { label: "قيد التنفيذ", value: 4 },
  { label: "مكتملة", value: 3 },
  { label: "مؤجلة", value: 2 },
  { label: "الميزانية الإجمالية", value: "18.5M دج" },
  { label: "نسبة الإنجاز", value: "62%" },
];

export const investmentsAlerts = [
  { message: "مشروع تهيئة القاعة متعددة الرياضات تجاوز الميزانية بـ 200,000 دج.", type: "warning" },
  { message: "مشروع تجهيز قاعة الجودو في انتظار اعتماد المكتب التنفيذي.", type: "info" },
  { message: "3 مشاريع بدون مصدر تمويل مكتمل.", type: "warning" },
];

export const investmentProjects = [
  { name: "تهيئة قاعة متعددة الرياضات", type: "رياضي", branch: "جميع الفروع", budget: "4,000,000 دج", spent: "2,100,000 دج", progress: "55%", status: "قيد التنفيذ" },
  { name: "تجهيز قاعة الجودو", type: "رياضي", branch: "الجودو", budget: "1,800,000 دج", spent: "0 دج", progress: "15%", status: "في انتظار الموافقة" },
  { name: "اقتناء حافلة النادي", type: "نقل", branch: "إداري", budget: "6,500,000 دج", spent: "6,500,000 دج", progress: "100%", status: "مستلم نهائياً" },
];

export const investmentFunding = [
  { source: "بلدية الكيشين", project: "تهيئة القاعة متعددة الرياضات", type: "إعانة", amount: "2,500,000 دج", received: "1,800,000 دج", status: "مستلم جزئياً" },
  { source: "ميزانية النادي", project: "تجهيز قاعة الجودو", type: "ذاتي", amount: "800,000 دج", received: "0 دج", status: "في انتظار" },
];

export const investmentProposals = [
  { branch: "الجودو", requester: "مسؤول فرع الجودو", title: "اقتناء بساطات إضافية", cost: "450,000 دج", priority: "مهم", status: "قيد الدراسة" },
  { branch: "كرة القدم", requester: "مدرب الأشبال", title: "تركيب إضاءة ملعب", cost: "320,000 دج", priority: "متوسط", status: "مرسلة" },
];

export const literaryMonthlyActivities = [
  { month: "ينا", count: 4 },
  { month: "فبر", count: 6 },
  { month: "مار", count: 5 },
  { month: "أبر", count: 8 },
  { month: "ماي", count: 7 },
  { month: "يون", count: 9 },
  { month: "يول", count: 7 },
];

export const literaryBranchDistribution = [
  { name: "كرة القدم", value: 28, color: "#f37021", count: 13 },
  { name: "الجودو", value: 22, color: "#1a6fd4", count: 10 },
  { name: "كرة اليد", value: 17, color: "#27AE60", count: 8 },
  { name: "التايكواندو", value: 15, color: "#9B51E0", count: 7 },
  { name: "أخرى", value: 18, color: "#94a3b8", count: 8 },
];

export const financialMonthlyTrend = [
  { month: "ينا", income: 320000, expenses: 280000 },
  { month: "فبر", income: 410000, expenses: 295000 },
  { month: "مار", income: 380000, expenses: 310000 },
  { month: "أبر", income: 520000, expenses: 340000 },
  { month: "ماي", income: 450000, expenses: 360000 },
  { month: "يون", income: 705000, expenses: 385000 },
  { month: "يول", income: 205000, expenses: 150000 },
];

export const financialIncomeBreakdown = [
  { name: "إعانات", value: 53, color: "#1a6fd4", count: 1500000 },
  { name: "اشتراكات", value: 15, color: "#f37021", count: 420000 },
  { name: "رعاية", value: 12, color: "#27AE60", count: 340000 },
  { name: "أخرى", value: 20, color: "#94a3b8", count: 590000 },
];

export const financialExpenseBreakdown = [
  { name: "تجهيزات", value: 35, color: "#f37021", count: 742000 },
  { name: "نقل", value: 18, color: "#1a6fd4", count: 382000 },
  { name: "بطولات", value: 15, color: "#27AE60", count: 318000 },
  { name: "إدارة", value: 22, color: "#9B51E0", count: 466000 },
  { name: "أخرى", value: 10, color: "#94a3b8", count: 212000 },
];

export const investmentStatusDistribution = [
  { name: "قيد التنفيذ", value: 33, color: "#1a6fd4", count: 4 },
  { name: "قيد الدراسة", value: 25, color: "#f37021", count: 3 },
  { name: "مكتملة", value: 25, color: "#27AE60", count: 3 },
  { name: "مؤجلة", value: 17, color: "#94a3b8", count: 2 },
];

export const investmentBudgetTrend = [
  { month: "ينا", planned: 800000, spent: 620000 },
  { month: "فبر", planned: 950000, spent: 780000 },
  { month: "مار", planned: 1100000, spent: 920000 },
  { month: "أبر", planned: 1200000, spent: 1050000 },
  { month: "ماي", planned: 1400000, spent: 1180000 },
  { month: "يون", planned: 1600000, spent: 1350000 },
  { month: "يول", planned: 900000, spent: 720000 },
];

export const documentsStats = [
  { label: "إجمالي الوثائق", value: 486 },
  { label: "ملفات PDF", value: 372 },
  { label: "القوانين والأنظمة", value: 24 },
  { label: "في انتظار المراجعة", value: 7 },
  { label: "معتمدة", value: 412 },
  { label: "مؤرشفة", value: 96 },
  { label: "مساحة التخزين", value: "2.4 GB" },
];

export const documentsAlerts = [
  { message: "7 وثائق في انتظار المراجعة والاعتماد.", type: "warning" },
  { message: "3 وثائق تنتهي صلاحيتها خلال 30 يوماً.", type: "warning" },
  { message: "تم اعتماد النسخة الجديدة من النظام الداخلي.", type: "success" },
];

export const documentsList = [
  { id: "d1", title: "القانون الأساسي للنادي", type: "قانون", folder: "القوانين والأنظمة", version: "03", date: "2026-09-15", size: "2.4 MB", status: "معتمد" },
  { id: "d2", title: "النظام الداخلي للنادي", type: "نظام داخلي", folder: "القوانين والأنظمة", version: "02", date: "2026-09-15", size: "1.8 MB", status: "معتمد" },
  { id: "d3", title: "محضر اجتماع المكتب التنفيذي — يوليو", type: "محضر", folder: "المكتب التنفيذي", version: "01", date: "2026-07-15", size: "890 KB", status: "معتمد" },
  { id: "d4", title: "تقرير مالي — النصف الأول 2026", type: "تقرير مالي", folder: "التقارير المالية", version: "01", date: "2026-07-01", size: "3.2 MB", status: "في انتظار المراجعة" },
  { id: "d5", title: "التقرير الأدبي السنوي 2026", type: "تقرير أدبي", folder: "التقارير الأدبية", version: "01", date: "2026-07-10", size: "5.1 MB", status: "في انتظار المراجعة" },
  { id: "d6", title: "عقد اعتماد النادي", type: "اعتماد", folder: "وثائق اعتماد النادي", version: "01", date: "2024-09-01", size: "1.2 MB", status: "معتمد" },
];

export const documentFolders = [
  { id: "f1", name: "القوانين والأنظمة", files: 24, subfolders: 3, color: "blue", icon: "law" },
  { id: "f2", name: "المكتب التنفيذي", files: 68, subfolders: 5, color: "orange", icon: "executive" },
  { id: "f3", name: "الجمعية العامة", files: 42, subfolders: 4, color: "navy", icon: "assembly" },
  { id: "f4", name: "الفروع الرياضية", files: 156, subfolders: 12, color: "green", icon: "branch" },
  { id: "f5", name: "التقارير الأدبية", files: 31, subfolders: 6, color: "purple", icon: "report" },
  { id: "f6", name: "التقارير المالية", files: 28, subfolders: 4, color: "amber", icon: "finance" },
];

export const settingsStats = [
  { label: "اكتمال ملف النادي", value: "92%" },
  { label: "الفروع النشطة", value: 10 },
  { label: "المستخدمون النشطون", value: 34 },
  { label: "البطاقات المفعلة", value: 205 },
  { label: "القوانين المرفوعة", value: 8 },
  { label: "الإشعارات المفعلة", value: 12 },
  { label: "آخر تعديل", value: "اليوم 15:30" },
];

export const settingsAlerts = [
  { message: "فترة التفعيل السنوي 2026-2027 لم تُحدَّد بعد.", type: "warning" },
  { message: "فرع كرة اليد لا يملك مسؤولاً معيّناً.", type: "warning" },
  { message: "ملف النادي مكتمل بنسبة 92% — يرجى رفع وثيقة الاعتماد.", type: "info" },
];

export const settingsUsers = [
  { name: "رئيس النادي", role: "رئيس النادي", branch: "إداري", status: "نشط", lastLogin: "2026-07-15" },
  { name: "الأمين العام", role: "أمين عام", branch: "إداري", status: "نشط", lastLogin: "2026-07-15" },
  { name: "مسؤول فرع الجودو", role: "مسؤول فرع", branch: "الجودو", status: "نشط", lastLogin: "2026-07-14" },
];

export const settingsBranches = [
  { name: "كرة القدم", type: "جماعية", manager: "مسؤول كرة القدم", coach: "مدرب الأشبال", athletes: 96, status: "نشط" },
  { name: "الجودو", type: "فردية", manager: "مسؤول الجودو", coach: "مدرب الجودو", athletes: 54, status: "نشط" },
  { name: "الكاراتيه", type: "فردية", manager: "مسؤول الكاراتيه", coach: "مدرب الكاراتيه", athletes: 41, status: "نشط" },
];

export const settingsAuditLog = [
  { user: "رئيس النادي", action: "تعديل فترة التفعيل السنوي", section: "البطاقات الرقمية", date: "2026-07-15 15:30" },
  { user: "الأمين العام", action: "إضافة فرع السباحة", section: "الفروع الرياضية", date: "2026-07-14 10:15" },
  { user: "مسؤول النظام", action: "تغيير صلاحيات مستخدم", section: "الصلاحيات", date: "2026-07-13 09:00" },
  { user: "الأمين العام", action: "تحديث بيانات النادي", section: "بيانات النادي", date: "2026-07-12 16:45" },
];

export const settingsRoles = [
  { role: "رئيس النادي", users: 1, permissions: "صلاحيات كاملة", color: "navy" },
  { role: "الأمين العام", users: 1, permissions: "إدارة + اجتماعات + محاضر", color: "blue" },
  { role: "مسؤول فرع", users: 8, permissions: "فرعه + تدريبات + رياضيون", color: "orange" },
  { role: "مدرب", users: 22, permissions: "فريقه + حضور + تقارير", color: "green" },
  { role: "مسؤول نظام", users: 2, permissions: "إعدادات + مستخدمون", color: "purple" },
];

export const settingsNotifications = [
  { label: "تذكير التفعيل السنوي للبطاقات", enabled: true, channel: "داخل المنصة + بريد" },
  { label: "إشعار اجتماع قادم", enabled: true, channel: "داخل المنصة" },
  { label: "تنبيه وثائق ناقصة", enabled: true, channel: "داخل المنصة" },
  { label: "تقرير أسبوعي للإدارة", enabled: false, channel: "بريد إلكتروني" },
  { label: "رسائل SMS للأولياء", enabled: false, channel: "رسالة قصيرة" },
];

export const settingsActivation = {
  season: "2026-2027",
  start: "2026-09-01",
  end: "2027-08-31",
  cardsActivated: 205,
  cardsPending: 27,
  status: "في انتظار التفعيل",
};

export const coachesStats = [
  { label: "إجمالي المدربين", value: 26 },
  { label: "المدربون النشطون", value: 22 },
  { label: "مدربون رئيسيون", value: 10 },
  { label: "مدربون مساعدون", value: 8 },
  { label: "محضرون بدنيون", value: 3 },
  { label: "بطاقات تحتاج تفعيل", value: 4 },
  { label: "وثائق ناقصة", value: 3 },
];

export const coachesAlerts = [
  { message: "4 بطاقات مدربين تحتاج إلى تفعيل سنوي لسنة 2026.", type: "warning" },
  { message: "3 شهادات تدريب منتهية أو قريبة من الانتهاء.", type: "warning" },
  { message: "فرع كرة اليد بدون مدرب رئيسي معيّن.", type: "info" },
];

export const coachesList = [
  { name: "كريم بن سالم", number: "COH-0012", card: "QR-2022-00089", branch: "كرة القدم", role: "مدرب رئيسي", team: "أواسط أ", sportType: "جماعية", certificate: "معتمد", activation: "مفعلة 2026", attendance: "94%", status: "نشط" },
  { name: "ياسين عودة", number: "COH-0018", card: "QR-2021-00045", branch: "الجودو", role: "مدرب", team: "أشبال وأواسط", sportType: "فردية", certificate: "مدرب معتمد", activation: "مفعلة 2026", attendance: "91%", status: "نشط" },
  { name: "نبيل قاسم", number: "COH-0022", card: "QR-2023-00102", branch: "الكاراتيه", role: "مدرب مساعد", team: "الأواسط", sportType: "فردية", certificate: "متقدم", activation: "في انتظار التفعيل", attendance: "88%", status: "نشط" },
  { name: "رشيد بوعلام", number: "COH-0008", card: "QR-2020-00031", branch: "كرة السلة", role: "مدرب رئيسي", team: "ناشئين", sportType: "جماعية", certificate: "خبير", activation: "مفعلة 2026", attendance: "96%", status: "نشط" },
  { name: "سامي حميدي", number: "COH-0026", card: "QR-2024-00201", branch: "كرة اليد", role: "محضر بدني", team: "—", sportType: "جماعية", certificate: "معتمد", activation: "وثائق ناقصة", attendance: "82%", status: "نشط" },
];

export const coachEvaluations = [
  { name: "كريم بن سالم", branch: "كرة القدم", period: "موسم 2025-2026", attendance: "94%", reports: "منتظم", results: "4 انتصارات", rating: "ممتاز" },
  { name: "ياسين عودة", branch: "الجودو", period: "موسم 2025-2026", attendance: "91%", reports: "منتظم", results: "12 ميدالية", rating: "جيد جداً" },
  { name: "نبيل قاسم", branch: "الكاراتيه", period: "موسم 2025-2026", attendance: "88%", reports: "تقرير معلق", results: "7 ميداليات", rating: "جيد" },
];

export const coachReports = [
  { title: "تقرير تدريب أسبوعي — كرة القدم", coach: "كريم بن سالم", branch: "كرة القدم", date: "2026-07-14", type: "أسبوعي", status: "معتمد" },
  { title: "تقرير قبل المنافسة — الجودو", coach: "ياسين عودة", branch: "الجودو", date: "2026-07-12", type: "قبل المنافسة", status: "مرسل" },
  { title: "تقرير تدريب يومي — الكاراتيه", coach: "نبيل قاسم", branch: "الكاراتيه", date: "2026-07-13", type: "يومي", status: "مسودة" },
];

export const coachActivationList = [
  { name: "نبيل قاسم", branch: "الكاراتيه", card: "QR-2023-00102", docs: "ناقصة", contract: "ساري", status: "في انتظار التفعيل" },
  { name: "سامي حميدي", branch: "كرة اليد", card: "QR-2024-00201", docs: "شهادة منتهية", contract: "موسمي", status: "في انتظار الوثائق" },
  { name: "فواد مرزوق", branch: "السباحة", card: "QR-2023-00188", docs: "مكتملة", contract: "ساري", status: "في انتظار الاعتماد" },
];

export const coachCertificates = [
  { name: "كريم بن سالم", certificate: "مدرب UEFA B", issuer: "رابطة كرة القدم", issued: "2022-06-01", expiry: "2027-06-01", status: "سارية" },
  { name: "ياسين عودة", certificate: "مدرب جودو معتمد", issuer: "الرابطة الوطنية", issued: "2021-03-15", expiry: "2026-03-15", status: "قريبة الانتهاء" },
  { name: "نبيل قاسم", certificate: "مدرب كاراتيه", issuer: "الاتحادية", issued: "2023-09-01", expiry: "2025-09-01", status: "منتهية" },
];
