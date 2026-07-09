// ============================================================
//  জামালপুর সেন্ট্রাল হাসপাতাল লিমিটেড
//  data.js — সমস্ত তথ্য এখানে সংরক্ষিত
//  Future additions: just add new entries to the arrays below.
// ============================================================

const HOSPITAL = {
  name: "জামালপুর সেন্ট্রাল হাসপাতাল লিমিটেড",
  tagline: "রোগ অনুযায়ী সঠিক ডাক্তার খুঁজুন",
  phone: "০১৭১১-০০০০০০",
  address: "জামালপুর, ময়মনসিংহ বিভাগ, বাংলাদেশ",
  emergency: "০১৯১১-০০০০০০"
};

// ─────────────────────────────────────────────
//  DEPARTMENTS
// ─────────────────────────────────────────────
const DEPARTMENTS = [
  { id: "neuro",       name: "নিউরোমেডিসিন",         icon: "" },
  { id: "ent",         name: "নাক-কান-গলা (ENT)",     icon: "" },
  { id: "dental",      name: "দন্ত",            icon: "" },
  { id: "cardio",      name: "হৃদরোগ",          icon: "" },
  { id: "pulmo",       name: "বক্ষব্যাধি বিভাগ",       icon: "" },
  { id: "gastro",      name: "গ্যাস্ট্রোএন্টারোলজি",   icon: "" },
  { id: "hepato",      name: "হেপাটোলজি (লিভার)",     icon: "" },
  { id: "nephro",      name: "নেফ্রোলজি (কিডনি)",     icon: "" },
  { id: "uro",         name: "ইউরোলজি",               icon: "" },
  { id: "gynae",       name: "স্ত্রীরোগ ও প্রসূতি",    icon: "" },
  { id: "ortho",       name: "অর্থোপেডিক্স",           icon: "" },
  { id: "dermo",       name: "চর্মরোগ",          icon: "" },
  { id: "endo",        name: "এন্ডোক্রাইনোলজি",       icon: "" },
  { id: "pediatric",   name: "শিশু",             icon: "" },
  { id: "medicine",    name: "মেডিসিন",          icon: "" },
  { id: "psychiatry",  name: "মানসিক রোগ",       icon: "" },
  { id: "surgery",     name: "সার্জারি",          icon: "" },
  { id: "thyroid",     name: "থাইরয়েড",         icon: "" },
];

// ─────────────────────────────────────────────
//  DOCTORS
// ─────────────────────────────────────────────
const DOCTORS = [

{
  id: "d01",
  name: "অধ্যাপক ডাঃ খাজা মাসুম কবীর",
  designation: "প্রফেসর (সার্জারি)",
  department: "surgery",
  degrees: `এমবিবিএস, বিসিএস (স্বাস্থ্য), এফসিপিএস (সার্জারি)
এমএস (ইউরোলজি)
অধ্যাপক (সার্জাারি)
শহিদ সৈয়দ নজরুল ইসলাম মেডিকেল কলেজ ও হাসপাতাল, কিশোরগঞ্জ`,
  diseases: [],
  schedule: [
    { day: "শনিবার", time: "বিকাল ৫:০০ টা – রাত ১০:০০ টা" },
    { day: "রবিবার", time: "বিকাল ৫:০০ টা – রাত ১০:০০ টা" },
    { day: "সোমবার", time: "বিকাল ৫:০০ টা – রাত ১০:০০ টা" }
  ],
  chamber: "২০২"
},

{
  id: "d02",
  name: "ডাঃ মোহাম্মদ শফিকুল্লাহ আকবর",
  designation: "সহযোগী অধ্যাপক (মেডিসিন)",
  department: "medicine",
  degrees: `এমবিবিএস, বিসিএস (স্বাস্থ্য)
এফসিপিএস (মেডিসিন)
সহযোগী অধ্যাপক (মেডিসিন)
জামালপুর মেডিকেল কলেজ হাসপাতাল`,
  diseases: [],
  schedule: [
    { day: "শুক্রবার", time: "সকাল ১০ টা – রাত ৮ টা পর্যন্ত" },
    { day: "শনিবার", time: "বিকাল ৩ টা – রাত ৮ টা পর্যন্ত" }
  ],
  chamber: "২০১"
},

{
  id: "d03",
  name: "ডাঃ মোঃ হারুন-অর-রশিদ",
  designation: "সহকারী অধ্যাপক (ইএনটি)",
  department: "ent",
  degrees: `এমবিবিএস, বিসিএস (স্বাস্থ্য)
ডিএলও (বিএসএমএমইউ)
সহকারী অধ্যাপক (ইএনটি)
জামালপুর মেডিকেল কজেল হাসপাতাল`,
  diseases: [],
  schedule: [
    { day: "শনি - সোমবার", time: "বিকাল ৩ টা – রাত ৮ টা পর্যন্ত" },
    { day: "শুক্রবার", time: "দুপুর ১২ টা – বিকাল ৫ টা পর্যন্ত" },
  ],
  chamber: "২০৭",
  phone: ""
},

{
  id: "d04",
  name: "ডাঃ ইসরাত জাহান চৌধুরী",
  designation: "চর্ম, এলার্জি ও যৌন রোগ বিশেষজ্ঞ",
  department: "dermo",
  degrees: `এমবিবিএস (সিএমসি), বিসিএস (স্বাস্থ্য)
ডিডিভি (ডার্মাটোলজি)
জামালপুর মেডিকেল কলেজ হাসপাতাল`,
  diseases: [],
  schedule: [
    { day: "শুক্র ও শনিবার", time: "বিকাল ৩ টা – রাত ৮ টা পর্যন্ত" },
  ],
  chamber: "২০৩",
  phone: ""
},

{
  id: "d05",
  name: "ডাঃ আসমা সরকার সূচনা",
  designation: "সহকারী অধ্যাপক (গাইনী-অবস্)",
  department: "gynae",
  degrees: `এমবিবিএস, এফসিপিএস (গাইনী-অবস্)
সহকারী অধ্যাপক (গাইনী-অবস্)
জামালপুর মেডিকেল কলেজ হাসপাতাল`,
  diseases: [],
  schedule: [
    { day: "শনি - বৃহস্পতিবার", time: "বিকাল ৩ টা – রাত ৮ টা পর্যন্ত" },
    { day: "শুক্রবার", time: "সকাল ১১ টা – রাত ৮ টা পর্যন্ত" }
  ],
  chamber: "২০৪",
  phone: ""
},

{
  id: "d06",
  name: "ডাঃ মোঃ মুর্শিদুল হক",
  designation: "সহকারী অধ্যাপক (অর্থো-সার্জারি)",
  department: "ortho",
  degrees: `এমবিবিএস, বিসিএস (স্বাস্থ্য)
ডি-অর্থো (অর্থো-সার্জারি)
সহকারী অধ্যাপক (অর্থো-সার্জারি)
২৫০ শয্যা জেনারেল হাসপাতাল, জামালপুর`,
  diseases: [],
  schedule: [
    { day: "শনি - বৃহস্পতিবার", time: "বিকাল ৩ টা – রাত ৮ টা পর্যন্ত" },
  ],
  chamber: "১০৫",
  phone: ""
},

{
  id: "d07",
  name: "ডাঃ মোঃ মঞ্জুরুল হক",
  designation: "সহকারী অধ্যাপক (গ্যাস্ট্রোএন্টারোলজি)",
  department: "gastro",
  degrees: `এমবিবিএস, বিসিএস (স্বাস্থ্য)
এমডি (গ্যাস্ট্রোএন্টারোলজি), বিএসএমএমইউ
এমএসিজি (আমেরিকা), এমআরসিপি (পার্ট-১) ইউকে
সহকারী অধ্যাপক (গ্যাস্ট্রোএন্টারোলজি)
জামালপুর মেডিকেল কলেজ হাসপাতাল`,
  diseases: [],
  schedule: [
    { day: "শনি, রবি, সোম ও বুধবার", time: "বিকাল ৩ টা – রাত ৮ টা পর্যন্ত" },
    { day: "মঙ্গলবার ও শুক্রবার", time: "বিকাল ৫ টা – রাত ৮ টা পর্যন্ত" }
  ],
  chamber: "২১০",
  phone: ""
},

{
  id: "d08",
  name: "ডাঃ মোঃ ফজলুল কারীম",
  designation: "সহযোগী অধ্যাপক (কার্ডিওলজি)",
  department: "cardio",
  degrees: `এমবিবিএস, এমসিপিএস (মেডিসিন)
এমডি (কার্ডিওলজি)
সহযোগী অধ্যাপক (কার্ডিওলজি)
জামালপুর মেডিকেল কলেজ হাসপাতাল`,
  diseases: [],
  schedule: [
    { day: "শনি - বৃহস্পতিবার", time: "বিকাল ৩ টা – রাত ৮ টা পর্যন্ত" },
    { day: "শুক্রবার", time: "সকাল ১১ টা – রাত ৮ টা পর্যন্ত" }
  ],
  chamber: "২০৫",
  phone: ""
},

{
  id: "d09",
  name: "ডাঃ আঞ্জুমান আরা",
  designation: "সহকারী অধ্যাপক",
  department: "pediatric",
  degrees: `এমবিবিএস, বিসিএস (স্বাস্থ্য)
এমডি (শিশু)
সহকারী অধ্যাপক
জামালপুর মেডিকেল কলেজ হাসপাতাল`,
  diseases: [],
  schedule: [
    { day: "প্রতিদিন", time: "বিকাল ৪ – সন্ধ্যা ৭ টা পর্যন্ত" }
  ],
  chamber: "৫০১",
  phone: ""
},

{
  id: "d10",
  name: "ডাঃ মোঃ তাজুল ইসলাম",
  designation: "সহযোগী অধ্যাপক (শিশু)",
  department: "pediatric",
  degrees: `এমবিবিএস, এফসিপিএস (শিশু)
সহযোগী অধ্যাপক (শিশু)
জামালপুর মেডিকেল কলেজ হাসপাতাল`,
  diseases: [],
  schedule: [
    { day: "শনি - বৃহস্পতিবার", time: "সন্ধ্যা ৭ টা – রাত ৯ টা পর্যন্ত" },
    { day: "শুক্রবার", time: "বিকাল ৫ টা – রাত ৮ টা পর্যন্ত" }
  ],
  chamber: "৫০১",
  phone: ""
},

{
  id: "d11",
  name: "ডাঃ মুহাম্মদ মাহমুদুল হাসান (বিপ্লব)",
  designation: "সহকারী অধ্যাপক (রেসপিরেটরী মেডিসিন)",
  department: "pulmo",
  degrees: `এমবিবিএস, বিসিএস (স্বাস্থ্য)
ডিটিসিডি, সিসিডি (বারডেম)
সহকারী অধ্যাপক (রেসপিরেটরী মেডিসিন)
জামালপুর মেডিকেল কলেজ হাসপাতাল`,
  diseases: [],
  schedule: [
    { day: "প্রতিদিন", time: "বিকাল ৩ টা – রাত ৮ টা পর্যন্ত" }
  ],
  chamber: "২০৬",
  phone: ""
},

{
  id: "d12",
  name: "ডাঃ এস ডি তিথি",
  designation: "ওরাল এন্ড মেক্সিলোফেসিয়াল সার্জন",
  department: "dental",
  degrees: `বিডিএস, পিজিটি (কনজারভেটিভ বিএসএমএমইউ)
পিজিটি (ওরাল এন্ড মেক্সিলোফেসিয়াল সার্জন)
সিপিআর (ঢাকা মেডিকেল কলেজ হাসপাতাল)
ওরাল এন্ড মেক্সিলোফেসিয়াল সার্জন`,
  diseases: [],
  schedule: [
    { day: "প্রতিদিন", time: "বিকাল ৩ টা – রাত ৮ টা পর্যন্ত" }
  ],
  chamber: "৫০৩",
  phone: ""
},

{
  id: "d13",
  name: "ডাঃ মোঃ সাদিকুর রহমান (জামিল)",
  designation: "মেডিসিন বিশেষজ্ঞ ও কনসালটেন্ট",
  department: "medicine",
  degrees: `এমবিবিএস (ঢাকা), বিসিএস (স্বাস্থ্য)
এমসিপিএস (মেডিসিন), এফসিপিএস (মেডিসিন) এফপি
এমডি (ইন্টারনাল মেডিসিন)
বাংলাদেশ মেডিকেল বিশ্ববিদ্যালয় (পিজি হাসপাতাল), ঢাকা
মেডিসিন বিশেষজ্ঞ ও কনসালটেন্ট
জামালপুর মেডিকেল কলেজ হাসপাতাল`,
  diseases: [],
  schedule: [
    { day: "রবি, মঙ্গল ও বৃহস্পতিবার", time: "বিকাল ৩ টা – সন্ধ্যা ৬ টা পর্যন্ত" }
  ],
  chamber: "২০১",
  phone: ""
},

{
  id: "d14",
  name: "ডাঃ মোঃ ইসমাইল হোসেন",
  designation: "সিনিয়র কনসালটেন্ট (চর্ম ও যৌন)",
  department: "dermo",
  degrees: `এমবিবিএস, ডিডিভি (পিজি হাসপাতাল)
এমপিএইচ (এইচএম)
সিনিয়র কনসালটেন্ট (চর্ম ও যৌন)
২৫০ শয্যা জেনারেল হাসপাতাল, জামালপুর`,
  diseases: [],
  schedule: [
    { day: "রবি - বৃহস্পতিবার", time: "বিকাল ৩ টা – রাত ৮ টা পর্যন্ত" }
  ],
  chamber: "২০৩",
  phone: ""
},

{
  id: "d15",
  name: "ডাঃ মোঃ নাজমুস সাদাত",
  designation: "নিউরোমেডিসিন বিশেষজ্ঞ",
  department: "neuro",
  degrees: `এমবিবিএস, বিসিএস (স্বাস্থ্য)
এমডি (নিউরোলজি), সিসিডি (বারডেম)
নিউরোমেডিসিন বিশেষজ্ঞ
ময়মনসিংহ মেডিকেল কলেজ ও হাসপাতাল`,
  diseases: [],
  schedule: [
    { day: "সোমবার", time: "বিকাল ৩ টা – রাত ৮ টা পর্যন্ত" }
  ],
  chamber: "২০২",
  phone: ""
},

{
  id: "d16",
  name: "ডাঃ পলাশ দত্ত",
  designation: "মেডিসিন, কিডনি রোগ বিশেষজ্ঞ ও ডায়াবেটোলজিস্ট",
  department: "nephro",
  degrees: `এমবিবিএস, বিসিএস (স্বাস্থ্য)
এমডি (নেফ্রোলজি), সিসিডি (বারডেম)
এফসিপিএস (মেডিসিন)
পিজিটি (হৃদরোগ, নিউরোমেডিসিন)
মেডিসিন, কিডনি রোগ বিশেষজ্ঞ ও ডায়াবেটোলজিস্ট
জামালপুর মেডিকেল কলেজ হাসপাতাল`,
  diseases: [],
  schedule: [
    { day: "সোমবার", time: "বিকাল ৩ টা – সন্ধ্যা ৬ টা পর্যন্ত" }
  ],
  chamber: "২০১",
  phone: ""
},

{
  id: "d17",
  name: "ডাঃ মাহফুজ আলম খান (রাতুল)",
  designation: "সহকারী অধ্যাপক (শিশু সার্জারি)",
  department: "child-surgery",
  degrees: `এমবিবিএস, বিসিএস (স্বাস্থ্য)
এমএস (শিশু সার্জারি), বিএসএমএমইউ
সহকারী অধ্যাপক (শিশু সার্জারি)
জামালপুর মেডিকেল কলেজ হাসপাতাল`,
  diseases: [],
  schedule: [
    { day: "মঙ্গলবার", time: "বিকাল ৩ টা – রাত ৮ টা পর্যন্ত" }
  ],
  chamber: "২০২",
  phone: ""
},

{
  id: "d18",
  name: "অধ্যাপক ডাঃ মোঃ গোলাম রব্বানী",
  designation: "অধ্যাপক ও বিভাগীয় প্রধান, কিডনি রোগ বিভাগ",
  department: "nephro",
  degrees: `এমবিবিএস, বিসিএস (স্বাস্থ্য)
এমপিএইচ (বিএসএমএমইউ)
এমএসিপি (মেডিসিন-আমেরিকা)
অধ্যাপক ও বিভাগীয় প্রধান
কিডনি রোগ বিভাগ
ময়মনসিংহ মেডিকেল কলেজ ও হাসপাতাল`,
  diseases: [],
  schedule: [
    { day: "বুধবার", time: "সকাল ১০ টা – বিকাল ৫ টা পর্যন্ত" }
  ],
  chamber: "২০২",
  phone: ""
},

{
  id: "d19",
  name: "ডাঃ মোঃ নূর নবী সিদ্দিকী",
  designation: "কনসালটেন্ট সার্জন",
  department: "surgery",
  degrees: `এমবিবিএস, সিসিডি (বারডেম)
এফসিপিএস (সার্জারি)
২৫ তম বিসিএস (স্বাস্থ্য)
কনসালটেন্ট সার্জন
(প্রাত্তন) ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল`,
  diseases: [],
  schedule: [
    { day: "বৃহস্পতিবার ও শুক্রবার", time: "বিকাল ৩ টা – সন্ধ্যা ৬ টা পর্যন্ত" }
  ],
  chamber: "২০৬",
  phone: ""
},

{
  id: "d20",
  name: "ডাঃ আব্দুল্লাহ আল রাগীব",
  designation: "থাইরয়েড, হরমোন অভিজ্ঞ ও ডায়াবেটোলজিস্ট",
  department: "endocrinology",
  degrees: `এমবিবিএস, সিসিডি (বারডেম), ডি.ই.এম (ইন কোর্স)
থাইরয়েড, হরমোন ও ডায়াবেটিস বিভাগ
ময়মনসিংহ মেডিকেল কলেজ ও হাসপাতাল`,
  diseases: [],
  schedule: [
    { day: "শুক্রবার", time: "সকাল ১০ টা – সন্ধ্যা ৬ টা পর্যন্ত" }
  ],
  chamber: "২১৪",
  phone: ""
},

{
  id: "d21",
  name: "ডাঃ জি ডি মন্ডল",
  designation: "সহযোগী অধ্যাপক (নিউরোলজি)",
  department: "neuro",
  degrees: `এমবিবিএস, এমডি (নিউরোলজি)
সহযোগী অধ্যাপক (নিউরোলজি)
ন্যাশনাল ইনস্টিটিউট অব নিউরোসায়েন্সেস, ঢাকা (এক্স)`,
  diseases: [],
  schedule: [
    { day: "শুক্রবার", time: "সকাল ৮ টা – বিকাল ৩ টা পর্যন্ত" }
  ],
  chamber: "২০২",
  phone: ""
},

{
  id: "d22",
  name: "ডাঃ মোঃ শফিউল আলম বাবুল",
  designation: "সহকারী অধ্যাপক (ইউরোলজি)",
  department: "urology",
  degrees: `এমবিবিএস, বিসিএস (স্বাস্থ্য)
এম.এস (ইউরোলজি), ইউআরসি (সিঙ্গাপুর)
সহকারী অধ্যাপক (ইউরোলজি)
ন্যাশনাল ইনস্টিটিউট অব কিডনি ডিজিজেস অ্যান্ড ইউরোলজি, ঢাকা`,
  diseases: [],
  schedule: [
    { day: "শুক্রবার", time: "সকাল ১১ টা – বিকাল ৫ টা পর্যন্ত" }
  ],
  chamber: "২১০",
  phone: ""
},

{
  id: "d23",
  name: "ডাঃ মোঃ আমিনুল ইসলাম",
  designation: "সহকারী অধ্যাপক (অর্থোপেডিক্স বিভাগ)",
  department: "ortho",
  degrees: `এমবিবিএস (ডিইউ), বিসিএস (স্বাস্থ্য)
এমএস (অর্থো-সার্জারি), এফএসিএস (আমেরিকা)
মেম্বার (এ ও ট্রমা এন্ড স্পাইন) সুইজারল্যান্ড
উচ্চতর প্রশিক্ষণ (এ ও ট্রমা এন্ড স্পাইন) শ্রীলংকা, ভারত, ইন্দোনেশিয়া ও মালয়েশিয়া
সহকারী অধ্যাপক (অর্থোপেডিক্স বিভাগ)
ময়মনসিংহ মেডিকেল কলেজ ও হাসপাতাল`,
  diseases: [],
  schedule: [
    { day: "শুক্রবার", time: "সকাল ১০ টা – বিকাল ৪ টা পর্যন্ত" }
  ],
  chamber: "১০৫",
  phone: ""
},

{
  id: "d24",
  name: "অধ্যাপক ডাঃ শেখ মুহাম্মদ আলী ইমাম",
  designation: "অধ্যাপক ও বিভাগীয় প্রধান - মনোরোগ বিভাগ",
  department: "psychiatry",
  degrees: `এমবিবিএস, এমফিল (সাইকিয়েট্রি), BSMMU
নিউরো মেডিসিনে বিশেষ প্রশিক্ষণ প্রাপ্ত
অধ্যাপক ও বিভাগীয় প্রধান - মনোরোগ বিভাগ
জামালপুর মেডিকেল কলেজ হাসপাতাল`,
  diseases: [],
  schedule: [
    { day: "বুধবার", time: "বিকাল ৪ টা – রাত ৮ টা পর্যন্ত" }
  ],
  chamber: "২১১",
  phone: ""
},

{
  id: "d25",
  name: "অধ্যাপক ডাঃ গুলনার বেগম",
  designation: "অধ্যাপক (রেডিওলজি এন্ড ইমেজিং)",
  department: "radiology",
  degrees: `এমবিবিএস, বিসিএস (স্বাস্থ্য)
এমডি (রেডিওলজি এন্ড ইমেজিং)
অধ্যাপক (রেডিওলজি এন্ড ইমেজিং)
ময়মনসিংহ মেডিকেল কলেজ ও হাসপাতাল`,
  diseases: [],
  schedule: [
    { day: "বুধবার", time: "সকাল ১০ টা – দুপুর ১ টা পর্যন্ত" }
  ],
  chamber: "২১৫",
  phone: ""
},

{
  id: "d26",
  name: "ডাঃ আহম্মদ আলী আকন্দ",
  designation: "অ্যাজমা ও বক্ষব্যাধি বিশেষজ্ঞ",
  department: "pulmo",
  degrees: `এমবিবিএস (ঢাকা), ডিটিসিডি (ডিইউ)
(অবঃ) সিনিয়র কনসালটেন্ট
বক্ষব্যাধি ক্লিনিক
জামালপুর`,
  diseases: [],
  schedule: [
    { day: "শনি - বৃহস্পতিবার", time: "দুপুর ২ টা – সন্ধ্যা ৭ টা পর্যন্ত" }
  ],
  chamber: "২০৬",
  phone: ""
},

{
  id: "d27",
  name: "ডাঃ মোঃ ওয়েস করনী",
  designation: "সহকারী অধ্যাপক (প্যাথলজি)",
  department: "pathology",
  degrees: `এমবিবিএস, বিসিএস (স্বাস্থ্য)
এমডি (প্যাথলজি)
সহকারী অধ্যাপক (প্যাথলজি)
হিস্টো ও সাইটো প্যাথলজিস্ট`,
  diseases: [],
  schedule: [
    { day: "সোমবার", time: "বিকাল ৩ টা – সন্ধ্যা ৭ টা পর্যন্ত" }
  ],
  chamber: "২০৭",
  phone: ""
},

{
  id: "d28",
  name: "ডাঃ আশরাফুল ইসলাম রাজিব",
  designation: "নাক-কান-গলা রোগ বিশেষজ্ঞ ও হেড-নেক সার্জন",
  department: "ent",
  degrees: `এমবিবিএস (সিওমেক), বিসিএস (স্বাস্থ্য), সিসিডি (বারডেম)
এমসিপিএস (ইএনটি এন্ড হেড-নেক সার্জারি)
এফসিপিএস (নাক-কান-গলা ও হেড-নেক সার্জারি)
নাক-কান-গলা রোগ বিশেষজ্ঞ ও হেড-নেক সার্জন
জাতীয় নাক-কান-গলা ইনস্টিটিউট ও হাসপাতাল
তেজগাঁও, ঢাকা`,
  diseases: [],
  schedule: [
    { day: "বৃহস্পতিবার", time: "বিকাল ৩ টা – সন্ধ্যা ৬ টা পর্যন্ত" }
  ],
  chamber: "২০৭",
  phone: ""
},

{
  id: "d29",
  name: "ডাঃ মোহাম্মদ তৌহিদুল ইসলাম (রাজিব)",
  designation: "ইমারজেন্সি মেডিকেল অফিসার",
  department: "medicine",
  degrees: `এমবিবিএস (ঢাকা), বিসিএস (স্বাস্থ্য), এফসিপিএস (শেষ-পর্ব)
এমডি (বক্ষব্যাধি কোর্স), পিজিটি (নিউরোলজি)
ইমারজেন্সি মেডিকেল অফিসার
২৫০ শয্যা জেনারেল হাসপাতাল, জামালপুর
প্রাত্তন-মেডিসিন বিভাগ, বাংলাদেশ মেডিকেল বিশ্ববিদ্যালয়, ঢাকা
সহকারী রেজিস্ট্রার, ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল`,
  diseases: [],
  schedule: [
    { day: "বৃহস্পতিবার", time: "দুপুর ২ টা – বিকাল ৪:৩০ মিনিট পর্যন্ত" }
  ],
  chamber: "২১৪",
  phone: ""
}
];

// ─────────────────────────────────────────────
//  DISEASES
// ─────────────────────────────────────────────
const DISEASES = [
  // ── মস্তিষ্ক (Brain) – neuro ──
  { id:"dis01", name:"মাথা ব্যথা",           nameEn:"Headache",          bodyPart:"brain",   department:"neuro",    keywords:["মাথা","ব্যথা","headache","মাথাব্যথা"] },
  { id:"dis02", name:"মাইগ্রেন",             nameEn:"Migraine",          bodyPart:"brain",   department:"neuro",    keywords:["মাইগ্রেন","migraine","আধা মাথা ব্যথা"] },
  { id:"dis03", name:"স্ট্রোক",              nameEn:"Stroke",            bodyPart:"brain",   department:"neuro",    keywords:["স্ট্রোক","stroke","প্যারালাইসিস"] },
  { id:"dis04", name:"মৃগীরোগ (এপিলেপসি)", nameEn:"Epilepsy",          bodyPart:"brain",   department:"neuro",    keywords:["মৃগী","এপিলেপসি","epilepsy","খিচুনি"] },
  { id:"dis05", name:"পার্কিনসন রোগ",        nameEn:"Parkinson's",       bodyPart:"brain",   department:"neuro",    keywords:["পার্কিনসন","parkinson","হাত কাঁপা"] },
  { id:"dis06", name:"মাথা ঘোরা",            nameEn:"Vertigo / Dizziness",bodyPart:"brain",  department:"neuro",    keywords:["মাথা ঘোরা","ভার্টিগো","vertigo","dizziness"] },
  { id:"dis07", name:"স্মৃতিভ্রংশ / আলঝেইমার",nameEn:"Alzheimer's / Dementia",bodyPart:"brain",department:"neuro",keywords:["স্মৃতিভ্রংশ","আলঝেইমার","alzheimer","dementia","ভুলে যাওয়া"] },
  { id:"dis08", name:"স্মৃতিভ্রংশ / আলঝেইমার",nameEn:"Alzheimer's / Dementia",bodyPart:"brain",department:"neuro",keywords:["স্মৃতিভ্রংশ","আলঝেইমার","alzheimer","dementia","ভুলে যাওয়া"] },
  { id:"dis09", name:"স্মৃতিভ্রংশ / আলঝেইমার",nameEn:"Alzheimer's / Dementia",bodyPart:"brain",department:"neuro",keywords:["স্মৃতিভ্রংশ","আলঝেইমার","alzheimer","dementia","ভুলে যাওয়া"] },
  { id:"dis10", name:"স্মৃতিভ্রংশ / আলঝেইমার",nameEn:"Alzheimer's / Dementia",bodyPart:"brain",department:"neuro",keywords:["স্মৃতিভ্রংশ","আলঝেইমার","alzheimer","dementia","ভুলে যাওয়া"] },

  // ── কান (Ear) – ent ──
  { id:"dis11", name:"কানে ব্যথা",           nameEn:"Ear Pain",          bodyPart:"ear",    department:"ent",      keywords:["কান","ব্যথা","ear","pain","কান ব্যথা"] },
  { id:"dis12", name:"কানে কম শোনা",         nameEn:"Hearing Loss",      bodyPart:"ear",    department:"ent",      keywords:["কান","শুনতে","hearing","loss","বধির"] },
  { id:"dis13", name:"কানের পর্দা ফাটা",     nameEn:"Tympanic Rupture",  bodyPart:"ear",    department:"ent",      keywords:["পর্দা","কান","tympanic","rupture"] },
  { id:"dis14", name:"নাক বন্ধ",             nameEn:"Nasal Congestion",  bodyPart:"nose",   department:"ent",      keywords:["নাক","বন্ধ","nasal","congestion","সর্দি"] },
  { id:"dis15", name:"নাক দিয়ে রক্ত পড়া",  nameEn:"Epistaxis",         bodyPart:"nose",   department:"ent",      keywords:["নাক","রক্ত","epistaxis","নাকে রক্ত"] },
  { id:"dis16", name:"গলা ব্যথা",            nameEn:"Sore Throat",       bodyPart:"throat", department:"ent",      keywords:["গলা","ব্যথা","throat","sore","গলা ব্যথা"] },
  { id:"dis17", name:"টনসিল",               nameEn:"Tonsillitis",        bodyPart:"throat", department:"ent",      keywords:["টনসিল","tonsil","গলা ফোলা"] },

  // ── দাঁত (Dental) ──
  { id:"dis19", name:"দাঁত ব্যথা",           nameEn:"Toothache",         bodyPart:"teeth",  department:"dental",   keywords:["দাঁত","ব্যথা","toothache","দন্ত"] },
  { id:"dis20", name:"দাঁতের মাড়ি ফুলা",   nameEn:"Gum Disease",       bodyPart:"teeth",  department:"dental",   keywords:["মাড়ি","gum","ফুলা","bleeding gum"] },
  { id:"dis21", name:"দাঁত ভাঙা / পড়ে যাওয়া",nameEn:"Tooth Fracture",  bodyPart:"teeth",  department:"dental",   keywords:["দাঁত ভাঙা","tooth fracture"] },
  { id:"dis22", name:"মুখের আলসার",          nameEn:"Mouth Ulcer",       bodyPart:"mouth",  department:"dental",   keywords:["মুখ","আলসার","ulcer","mouth","মুখের ঘা"] },

  // ── হৃদয় (Heart) – cardio ──
  { id:"dis23", name:"বুকে ব্যথা",           nameEn:"Chest Pain",        bodyPart:"heart",  department:"cardio",   keywords:["বুক","ব্যথা","chest","pain","হার্ট"] },
  { id:"dis24", name:"হার্ট অ্যাটাক",        nameEn:"Heart Attack",      bodyPart:"heart",  department:"cardio",   keywords:["হার্ট অ্যাটাক","heart attack","মায়োকার্ডিয়াল"] },
  { id:"dis25", name:"উচ্চ রক্তচাপ",        nameEn:"Hypertension",      bodyPart:"heart",  department:"cardio",   keywords:["উচ্চ রক্তচাপ","blood pressure","hypertension","বিপি"] },
  { id:"dis26", name:"হৃদস্পন্দন অনিয়মিত",  nameEn:"Arrhythmia",        bodyPart:"heart",  department:"cardio",   keywords:["হৃদস্পন্দন","arrhythmia","irregular"] },
  { id:"dis27", name:"হার্ট ফেইলিউর",       nameEn:"Heart Failure",     bodyPart:"heart",  department:"cardio",   keywords:["হার্ট ফেইলিউর","heart failure","শ্বাসকষ্ট"] },
  { id:"dis28", name:"এনজাইনা",             nameEn:"Angina",            bodyPart:"heart",  department:"cardio",   keywords:["এনজাইনা","angina","বুকে চাপ"] },
  { id:"dis29", name:"কোলেস্টেরল বৃদ্ধি",   nameEn:"High Cholesterol",  bodyPart:"heart",  department:"cardio",   keywords:["কোলেস্টেরল","cholesterol","রক্তের চর্বি"] },

  // ── ফুসফুস (Lung) – pulmo ──
  { id:"dis32", name:"হাঁপানি / অ্যাজমা",   nameEn:"Asthma",            bodyPart:"lung",   department:"pulmo",    keywords:["হাঁপানি","অ্যাজমা","asthma","শ্বাস","শ্বাসকষ্ট"] },
  { id:"dis33", name:"যক্ষ্মা (টিবি)",       nameEn:"Tuberculosis",      bodyPart:"lung",   department:"pulmo",    keywords:["যক্ষ্মা","টিবি","tb","tuberculosis"] },
  { id:"dis34", name:"নিউমোনিয়া",           nameEn:"Pneumonia",         bodyPart:"lung",   department:"pulmo",    keywords:["নিউমোনিয়া","pneumonia","ফুসফুস"] },
  { id:"dis35", name:"ব্রংকাইটিস",          nameEn:"Bronchitis",        bodyPart:"lung",   department:"pulmo",    keywords:["ব্রংকাইটিস","bronchitis","কাশি","কফ"] },

  // ── পেট (Stomach / Intestine) – gastro ──
  { id:"dis36", name:"পেটে ব্যথা",          nameEn:"Abdominal Pain",     bodyPart:"stomach",department:"gastro",   keywords:["পেট","ব্যথা","abdominal","pain","stomach"] },
  { id:"dis37", name:"গ্যাস্ট্রিক আলসার",  nameEn:"Gastric Ulcer",      bodyPart:"stomach",department:"gastro",   keywords:["গ্যাস্ট্রিক","ulcer","আলসার","gastric"] },
  { id:"dis38", name:"ডায়রিয়া",           nameEn:"Diarrhea",           bodyPart:"intestine",department:"gastro", keywords:["ডায়রিয়া","diarrhea","পাতলা পায়খানা"] },
  { id:"dis39", name:"বদহজম",             nameEn:"Indigestion",          bodyPart:"stomach",department:"gastro",   keywords:["বদহজম","indigestion","হজম","অম্বল","এসিডিটি"] },
  { id:"dis40", name:"কোলন ক্যান্সার",     nameEn:"Colon Cancer",        bodyPart:"intestine",department:"gastro", keywords:["কোলন","ক্যান্সার","colon cancer"] },

  // ── লিভার – hepato ──
  { id:"dis41", name:"জন্ডিস",             nameEn:"Jaundice",            bodyPart:"liver",   department:"hepato",  keywords:["জন্ডিস","jaundice","হলুদ চোখ","yellow"] },
  { id:"dis42", name:"হেপাটাইটিস বি/সি",  nameEn:"Hepatitis B/C",       bodyPart:"liver",   department:"hepato",  keywords:["হেপাটাইটিস","hepatitis","লিভার"] },
  { id:"dis43", name:"লিভার সিরোসিস",     nameEn:"Liver Cirrhosis",      bodyPart:"liver",   department:"hepato",  keywords:["সিরোসিস","cirrhosis","liver","লিভার"] },

  // ── কিডনি – nephro ──
  { id:"dis44", name:"কিডনি পাথর",        nameEn:"Kidney Stone",         bodyPart:"kidney",  department:"nephro",  keywords:["কিডনি","পাথর","stone","kidney"] },
  { id:"dis45", name:"কিডনি বিকলতা",     nameEn:"Kidney Failure",        bodyPart:"kidney",  department:"nephro",  keywords:["কিডনি","বিকলতা","failure","kidney"] },
  { id:"dis46", name:"নেফ্রোটিক সিনড্রোম",nameEn:"Nephrotic Syndrome",  bodyPart:"kidney",  department:"nephro",  keywords:["নেফ্রোটিক","nephrotic","প্রস্রাবে প্রোটিন"] },
  { id:"dis47", name:"মূত্রনালীর সংক্রমণ",nameEn:"UTI",                  bodyPart:"urinary", department:"nephro",  keywords:["ইউটিআই","uti","মূত্রনালী","প্রস্রাবে জ্বালা"] },

  // ── ইউরোলজি ──
  { id:"dis48", name:"প্রস্টেট বড় হওয়া", nameEn:"Prostate Enlargement",bodyPart:"male",    department:"uro",     keywords:["প্রস্টেট","prostate","পুরুষ","প্রস্রাব"] },
  { id:"dis49", name:"মূত্রথলির পাথর",    nameEn:"Bladder Stone",        bodyPart:"urinary", department:"uro",     keywords:["মূত্রথলি","bladder","stone","পাথর"] },
  { id:"dis50", name:"কিডনি সংক্রান্ত অপারেশন",nameEn:"Renal Surgery",  bodyPart:"kidney",  department:"uro",     keywords:["কিডনি","অপারেশন","surgery","renal"] },
  { id:"dis51", name:"পুরুষ প্রজনন সমস্যা",nameEn:"Male Infertility",   bodyPart:"male",    department:"uro",     keywords:["পুরুষ","সন্তান","infertility","male"] },

  // ── স্ত্রীরোগ – gynae ──
  { id:"dis52", name:"মাসিক সমস্যা",      nameEn:"Menstrual Problem",    bodyPart:"female",  department:"gynae",   keywords:["মাসিক","menstrual","period","ঋতুচক্র"] },
  { id:"dis53", name:"গর্ভকালীন জটিলতা",  nameEn:"Pregnancy Complications",bodyPart:"female",department:"gynae",   keywords:["গর্ভ","pregnancy","প্রসব","জটিলতা"] },
  { id:"dis54", name:"জরায়ু সমস্যা",     nameEn:"Uterine Problem",       bodyPart:"female",  department:"gynae",   keywords:["জরায়ু","uterus","uterine"] },
  { id:"dis55", name:"পলিসিস্টিক ওভারি", nameEn:"PCOS",                  bodyPart:"female",  department:"gynae",   keywords:["পলিসিস্টিক","pcos","ওভারি","ovary"] },
  { id:"dis56", name:"সন্তান না হওয়া",   nameEn:"Female Infertility",    bodyPart:"female",  department:"gynae",   keywords:["সন্তান","infertility","বন্ধ্যাত্ব"] },
  { id:"dis57", name:"স্তন সমস্যা",       nameEn:"Breast Problem",        bodyPart:"female",  department:"gynae",   keywords:["স্তন","breast","টিউমার"] },
  { id:"dis58", name:"প্রসব পরবর্তী সমস্যা",nameEn:"Postpartum Issues",  bodyPart:"female",  department:"gynae",   keywords:["প্রসব পরবর্তী","postpartum"] },

  // ── হাড় / জয়েন্ট – ortho ──
  { id:"dis59", name:"হাড় ভাঙা",          nameEn:"Bone Fracture",        bodyPart:"bone",    department:"ortho",   keywords:["হাড়","ভাঙা","fracture","bone"] },
  { id:"dis60", name:"গাঁটে ব্যথা (আর্থ্রাইটিস)",nameEn:"Arthritis",   bodyPart:"bone",    department:"ortho",   keywords:["গাঁট","আর্থ্রাইটিস","arthritis","জয়েন্ট","ব্যথা"] },
  { id:"dis61", name:"মেরুদণ্ডের ব্যথা",  nameEn:"Spinal Pain",          bodyPart:"bone",    department:"ortho",   keywords:["মেরুদণ্ড","spinal","back pain","কোমর ব্যথা"] },
  { id:"dis62", name:"হাঁটু ব্যথা",        nameEn:"Knee Pain",            bodyPart:"leg",     department:"ortho",   keywords:["হাঁটু","knee","pain","ব্যথা"] },
  { id:"dis63", name:"কাঁধে ব্যথা",        nameEn:"Shoulder Pain",        bodyPart:"hand",    department:"ortho",   keywords:["কাঁধ","shoulder","pain","ব্যথা"] },

  // ── চর্মরোগ – dermo ──
  { id:"dis64", name:"চুলকানি",            nameEn:"Itching / Rash",       bodyPart:"skin",    department:"dermo",   keywords:["চুলকানি","itching","rash","চামড়া"] },
  { id:"dis65", name:"একজিমা",            nameEn:"Eczema",                bodyPart:"skin",    department:"dermo",   keywords:["একজিমা","eczema","চামড়া"] },
  { id:"dis66", name:"সোরিয়াসিস",         nameEn:"Psoriasis",            bodyPart:"skin",    department:"dermo",   keywords:["সোরিয়াসিস","psoriasis"] },
  { id:"dis67", name:"ফাঙ্গাল ইনফেকশন",  nameEn:"Fungal Infection",      bodyPart:"skin",    department:"dermo",   keywords:["ফাঙ্গাল","fungal","দাদ","ringworm"] },
  { id:"dis68", name:"ব্রণ / অ্যাকনে",   nameEn:"Acne",                  bodyPart:"skin",    department:"dermo",   keywords:["ব্রণ","acne","পিম্পল","মুখে দাগ"] },

  // ── ডায়াবেটিস / এন্ডোক্রাইন – endo ──
  { id:"dis69", name:"ডায়াবেটিস",         nameEn:"Diabetes",             bodyPart:"general", department:"endo",    keywords:["ডায়াবেটিস","diabetes","blood sugar","চিনি"] },
  { id:"dis70", name:"রক্তে চিনি কম",     nameEn:"Hypoglycemia",          bodyPart:"general", department:"endo",    keywords:["হাইপোগ্লাইসেমিয়া","hypoglycemia","রক্তে চিনি কম"] },
  { id:"dis71", name:"স্থূলতা / ওবেসিটি",nameEn:"Obesity",               bodyPart:"general", department:"endo",    keywords:["স্থূলতা","obesity","মোটা","ওজন বেশি"] },
  { id:"dis72", name:"থাইরয়েড সমস্যা",   nameEn:"Thyroid Problem",       bodyPart:"thyroid", department:"thyroid", keywords:["থাইরয়েড","thyroid","গলার সামনে","ঢোক গেলা"] },
  { id:"dis73", name:"হাইপোথাইরয়েডিজম",  nameEn:"Hypothyroidism",        bodyPart:"thyroid", department:"thyroid", keywords:["হাইপোথাইরয়েড","hypothyroid","ক্লান্তি"] },
  { id:"dis74", name:"হাইপারথাইরয়েডিজম",nameEn:"Hyperthyroidism",        bodyPart:"thyroid", department:"thyroid", keywords:["হাইপারথাইরয়েড","hyperthyroid","ওজন কমা"] },

  // ── শিশু – pediatric ──
  { id:"dis75", name:"শিশুর জ্বর",         nameEn:"Child Fever",          bodyPart:"children",department:"pediatric",keywords:["শিশু","জ্বর","child","fever"] },
  { id:"dis76", name:"শিশুর কাশি",         nameEn:"Child Cough",          bodyPart:"children",department:"pediatric",keywords:["শিশু","কাশি","child","cough"] },
  { id:"dis77", name:"শিশুর ডায়রিয়া",    nameEn:"Child Diarrhea",       bodyPart:"children",department:"pediatric",keywords:["শিশু","ডায়রিয়া","child","diarrhea"] },
  { id:"dis78", name:"শিশুর পুষ্টিহীনতা", nameEn:"Malnutrition",         bodyPart:"children",department:"pediatric",keywords:["পুষ্টিহীনতা","malnutrition","শিশু"] },
  { id:"dis79", name:"শিশুর অটিজম",        nameEn:"Autism",               bodyPart:"children",department:"pediatric",keywords:["অটিজম","autism","শিশু"] },

  // ── সাধারণ মেডিসিন – medicine ──
  { id:"dis80", name:"জ্বর",               nameEn:"Fever",                bodyPart:"general", department:"medicine", keywords:["জ্বর","fever","তাপমাত্রা","গরম"] },
  { id:"dis81", name:"দুর্বলতা / ক্লান্তি",nameEn:"Weakness / Fatigue",  bodyPart:"general", department:"medicine", keywords:["দুর্বলতা","ক্লান্তি","weakness","fatigue","শক্তিহীন"] },
  { id:"dis82", name:"রক্তশূন্যতা (অ্যানিমিয়া)",nameEn:"Anemia",        bodyPart:"general", department:"medicine", keywords:["অ্যানিমিয়া","anemia","রক্তশূন্যতা","রক্ত কম"] },
  { id:"dis83", name:"ভিটামিনের ঘাটতি",   nameEn:"Vitamin Deficiency",   bodyPart:"general", department:"medicine", keywords:["ভিটামিন","vitamin","deficiency","ঘাটতি"] },

  // ── মানসিক রোগ – psychiatry ──
  { id:"dis84", name:"বিষণ্নতা (ডিপ্রেশন)",nameEn:"Depression",          bodyPart:"mental",  department:"psychiatry",keywords:["বিষণ্নতা","depression","মন খারাপ","মানসিক"] },
  { id:"dis85", name:"উদ্বেগ (অ্যাংজাইটি)",nameEn:"Anxiety",            bodyPart:"mental",  department:"psychiatry",keywords:["উদ্বেগ","অ্যাংজাইটি","anxiety","ভয়"] },
  { id:"dis86", name:"ঘুমের সমস্যা (ইনসোমনিয়া)",nameEn:"Insomnia",     bodyPart:"mental",  department:"psychiatry",keywords:["ঘুম","ইনসোমনিয়া","insomnia","ঘুমাতে পারি না"] },
  { id:"dis87", name:"মাদকাসক্তি",         nameEn:"Addiction",           bodyPart:"mental",  department:"psychiatry",keywords:["মাদক","addiction","নেশা","আসক্তি"] },
];

// ─────────────────────────────────────────────
//  BODY PARTS
// ─────────────────────────────────────────────
const BODY_PARTS = [
  { id:"brain",     name:"মস্তিষ্ক",         icon:"", departments:["neuro"],               svgX:200, svgY:55  },
  { id:"ear",       name:"কান",              icon:"", departments:["ent"],                 svgX:180, svgY:95  },
  { id:"nose",      name:"নাক",              icon:"", departments:["ent"],                 svgX:200, svgY:110 },
  { id:"mouth",     name:"মুখ",              icon:"", departments:["dental","ent"],         svgX:200, svgY:130 },
  { id:"teeth",     name:"দাঁত",             icon:"", departments:["dental"],              svgX:200, svgY:140 },
  { id:"throat",    name:"গলা",              icon:"", departments:["ent"],                 svgX:200, svgY:155 },
  { id:"thyroid",   name:"থাইরয়েড",          icon:"", departments:["thyroid","endo"],      svgX:200, svgY:165 },
  { id:"heart",     name:"হৃদয়",             icon:"", departments:["cardio"],              svgX:185, svgY:210 },
  { id:"lung",      name:"ফুসফুস",           icon:"", departments:["pulmo"],               svgX:215, svgY:205 },
  { id:"liver",     name:"লিভার",            icon:"", departments:["hepato","gastro"],     svgX:215, svgY:240 },
  { id:"stomach",   name:"পাকস্থলী",          icon:"", departments:["gastro"],              svgX:200, svgY:260 },
  { id:"intestine", name:"অন্ত্র",            icon:"", departments:["gastro"],              svgX:200, svgY:285 },
  { id:"kidney",    name:"কিডনি",            icon:"", departments:["nephro","uro"],        svgX:215, svgY:270 },
  { id:"urinary",   name:"মূত্রনালী",          icon:"", departments:["nephro","uro"],        svgX:200, svgY:310 },
  { id:"male",      name:"পুরুষ প্রজনন",      icon:"", departments:["uro"],                 svgX:200, svgY:335 },
  { id:"female",    name:"মহিলা প্রজনন",      icon:"", departments:["gynae"],               svgX:200, svgY:335 },
  { id:"skin",      name:"ত্বক / চামড়া",     icon:"", departments:["dermo"],               svgX:160, svgY:200 },
  { id:"bone",      name:"হাড় / জয়েন্ট",    icon:"", departments:["ortho"],               svgX:160, svgY:250 },
  { id:"hand",      name:"হাত / কাঁধ",       icon:"", departments:["ortho"],               svgX:145, svgY:230 },
  { id:"leg",       name:"পা / হাঁটু",        icon:"", departments:["ortho"],               svgX:195, svgY:370 },
  { id:"foot",      name:"পায়ের পাতা",        icon:"", departments:["ortho"],               svgX:195, svgY:410 },
  { id:"mental",    name:"মানসিক স্বাস্থ্য",  icon:"", departments:["psychiatry"],          svgX:230, svgY:65  },
  { id:"general",   name:"সাধারণ রোগ",        icon:"", departments:["medicine","endo"],     svgX:230, svgY:160 },
  { id:"children",  name:"শিশু স্বাস্থ্য",    icon:"", departments:["pediatric"],           svgX:160, svgY:320 },
];

// ─────────────────────────────────────────────
//  HELPER LOOKUP MAPS (generated at runtime)
// ─────────────────────────────────────────────
function buildLookups() {
  const deptMap   = {};  // id → dept object
  const doctorMap = {};  // id → doctor object
  const diseaseMap= {};  // id → disease object
  const partMap   = {};  // id → body part object

  DEPARTMENTS.forEach(d => deptMap[d.id]    = d);
  DOCTORS.forEach(d     => doctorMap[d.id]  = d);
  DISEASES.forEach(d    => diseaseMap[d.id] = d);
  BODY_PARTS.forEach(b  => partMap[b.id]    = b);

  // diseases by department
  const diseasesByDept = {};
  DISEASES.forEach(d => {
    if (!diseasesByDept[d.department]) diseasesByDept[d.department] = [];
    diseasesByDept[d.department].push(d);
  });

  // doctors by department
  const doctorsByDept = {};
  DOCTORS.forEach(d => {
    if (!doctorsByDept[d.department]) doctorsByDept[d.department] = [];
    doctorsByDept[d.department].push(d);
  });

  // diseases by body part
  const diseasesByPart = {};
  DISEASES.forEach(d => {
    if (!diseasesByPart[d.bodyPart]) diseasesByPart[d.bodyPart] = [];
    diseasesByPart[d.bodyPart].push(d);
  });

  return { deptMap, doctorMap, diseaseMap, partMap, diseasesByDept, doctorsByDept, diseasesByPart };
}
