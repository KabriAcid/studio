(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/placeholder-images.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"placeholderImages\":[{\"id\":\"avatar-1\",\"description\":\"User avatar 1\",\"imageUrl\":\"https://images.unsplash.com/photo-1599566147214-ce487862ea4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxwZXJzb24lMjBmYWNlfGVufDB8fHx8MTc2MTI5MjYxM3ww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"person face\"},{\"id\":\"avatar-2\",\"description\":\"User avatar 2\",\"imageUrl\":\"https://images.unsplash.com/photo-1521146764736-56c929d59c83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxwZXJzb24lMjBmYWNlfGVufDB8fHx8MTc2MTI5MjYxM3ww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"person face\"},{\"id\":\"avatar-3\",\"description\":\"User avatar 3\",\"imageUrl\":\"https://images.unsplash.com/photo-1599566147214-ce487862ea4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxwZXJzb24lMjBmYWNlfGVufDB8fHx8MTc2MTI5MjYxM3ww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"person face\"},{\"id\":\"avatar-4\",\"description\":\"User avatar 4\",\"imageUrl\":\"https://images.unsplash.com/photo-1521146764736-56c929d59c83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxwZXJzb24lMjBmYWNlfGVufDB8fHx8MTc2MTI5MjYxM3ww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"person face\"},{\"id\":\"avatar-5\",\"description\":\"User avatar 5\",\"imageUrl\":\"https://images.unsplash.com/photo-1517462964-21fdcec3f25b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8cGVyc29uJTIwZmFjZXxlbnwwfHx8fDE3NjEyOTI2MTN8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"person face\"},{\"id\":\"avatar-6\",\"description\":\"User avatar 6\",\"imageUrl\":\"https://images.unsplash.com/photo-1725028748781-7adb1df9a943?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxwZXJzb24lMjBmYWNlfGVufDB8fHx8MTc2MTI5MjYxM3ww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"person face\"},{\"id\":\"avatar-7\",\"description\":\"User avatar 7\",\"imageUrl\":\"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBmYWNlfGVufDB8fHx8MTc2MTI5MjYxM3ww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"person face\"},{\"id\":\"avatar-8\",\"description\":\"User avatar 8\",\"imageUrl\":\"https://images.unsplash.com/photo-1695470667338-e7e8608ff048?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxwZXJzb24lMjBmYWNlfGVufDB8fHx8MTc2MTI5MjYxM3ww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"person face\"},{\"id\":\"avatar-9\",\"description\":\"User avatar 9\",\"imageUrl\":\"https://images.unsplash.com/photo-1695470667338-e7e8608ff048?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxwZXJzb24lMjBmYWNlfGVufDB8fHx8MTc2MTI5MjYxM3ww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"person face\"},{\"id\":\"avatar-10\",\"description\":\"User avatar 10\",\"imageUrl\":\"https://images.unsplash.com/photo-1521146764736-56c929d59c83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxwZXJzb24lMjBmYWNlfGVufDB8fHx8MTc2MTI5MjYxM3ww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"person face\"},{\"id\":\"avatar-11\",\"description\":\"User avatar 11\",\"imageUrl\":\"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxwZXJzb24lMjBmYWNlfGVufDB8fHx8MTc2MTI5MjYxM3ww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"person face\"},{\"id\":\"avatar-12\",\"description\":\"User avatar 12\",\"imageUrl\":\"https://images.unsplash.com/photo-1710974481447-fb001ad9ad5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxwZXJzb24lMjBmYWNlfGVufDB8fHx8MTc2MTI5MjYxM3ww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"person face\"}]}"));}}),
"[project]/src/lib/placeholder-images.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PlaceHolderImages": (()=>PlaceHolderImages),
    "heroSlides": (()=>heroSlides)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/placeholder-images.json (json)");
;
const PlaceHolderImages = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$json__$28$json$29$__["default"].placeholderImages;
const heroSlides = [
    {
        id: 'slide-1',
        imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
        alt: 'Students studying together',
        imageHint: 'students learning'
    },
    {
        id: 'slide-2',
        imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop',
        alt: 'Student graduating',
        imageHint: 'student graduation'
    },
    {
        id: 'slide-3',
        imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop',
        alt: 'Students in a classroom',
        imageHint: 'students classroom'
    },
    {
        id: 'slide-4',
        imageUrl: 'https://images.unsplash.com/photo-1576405828234-a8a932c942b9?q=80&w=2070&auto=format&fit=crop',
        alt: 'Happy children smiling',
        imageHint: 'happy children'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/placeholder-data.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "beneficiaries": (()=>beneficiaries),
    "beneficiaryCategories": (()=>beneficiaryCategories),
    "beneficiaryStats": (()=>beneficiaryStats),
    "blogPosts": (()=>blogPosts),
    "contributionStats": (()=>contributionStats),
    "contributorCategories": (()=>contributorCategories),
    "contributors": (()=>contributors),
    "financialStats": (()=>financialStats),
    "heroSlides": (()=>heroSlides),
    "monthlyFinancials": (()=>monthlyFinancials),
    "recentContributions": (()=>recentContributions),
    "teamMembers": (()=>teamMembers),
    "userProfile": (()=>userProfile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/placeholder-images.ts [app-client] (ecmascript)");
;
const getAvatar = (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaceHolderImages"].find((img)=>img.id === id)?.imageUrl || '';
const financialStats = [
    {
        title: 'Total Contributions',
        value: '₦22,615,945',
        change: '+20.1% from last month',
        changeType: 'increase'
    },
    {
        title: 'Total Disbursed',
        value: '₦14,375,200',
        change: '+18.3% from last month',
        changeType: 'increase'
    },
    {
        title: 'Active Beneficiaries',
        value: '+152',
        change: '+3 from last month',
        changeType: 'increase'
    },
    {
        title: 'New Contributors',
        value: '+12',
        change: '-2 from last month',
        changeType: 'decrease'
    }
];
const beneficiaryStats = [
    {
        title: 'Total Beneficiaries',
        value: '152',
        change: '+12 this month',
        changeType: 'increase'
    },
    {
        title: 'Active Beneficiaries',
        value: '130',
        change: '+3 this month',
        changeType: 'increase'
    },
    {
        title: 'Total Disbursed',
        value: '₦14,375,200',
        change: '+18.3% from last month',
        changeType: 'increase'
    },
    {
        title: 'Avg. Disbursement',
        value: '₦94,573',
        change: '+2.5% from last month',
        changeType: 'increase'
    }
];
const contributionStats = [
    {
        title: 'Contributions This Month',
        value: '₦4,271,000',
        change: '+15.2% vs last month',
        changeType: 'increase'
    },
    {
        title: 'Active Contributors',
        value: '23',
        change: '+2 this month',
        changeType: 'increase'
    },
    {
        title: 'Total Contribution Value',
        value: '₦22,615,945',
        change: '+20.1% from last month',
        changeType: 'increase'
    },
    {
        title: 'Total Contributions',
        value: '112',
        change: '+12 this month',
        changeType: 'increase'
    }
];
const monthlyFinancials = [
    {
        month: 'Jan',
        income: 2000000,
        expenses: 1200000
    },
    {
        month: 'Feb',
        income: 1500000,
        expenses: 699000
    },
    {
        month: 'Mar',
        income: 2500000,
        expenses: 1900000
    },
    {
        month: 'Apr',
        income: 1390000,
        expenses: 1954000
    },
    {
        month: 'May',
        income: 945000,
        expenses: 2400000
    },
    {
        month: 'Jun',
        income: 1195000,
        expenses: 1900000
    },
    {
        month: 'Jul',
        income: 1745000,
        expenses: 2150000
    },
    {
        month: 'Aug',
        income: 1825000,
        expenses: 2050000
    },
    {
        month: 'Sep',
        income: 2075000,
        expenses: 1900000
    },
    {
        month: 'Oct',
        income: 2400000,
        expenses: 1950000
    },
    {
        month: 'Nov',
        income: 2150000,
        expenses: 1750000
    },
    {
        month: 'Dec',
        income: 2450000,
        expenses: 2050000
    }
];
const beneficiaries = [
    {
        id: '1',
        firstName: 'Aisha',
        lastName: 'Mohammed',
        email: 'aisha.m@example.com',
        avatar: getAvatar('avatar-1'),
        phoneNumber: '08012345671',
        program: 'Student',
        enrollmentStatus: 'Active',
        totalPayments: 1250000,
        paymentDate: '2023-05-20',
        lga: 'Yola North',
        state: 'Adamawa',
        class: 'SSS 3',
        paymentType: 'Termly Fees',
        category: 'Orphan'
    },
    {
        id: '2',
        firstName: 'Ibrahim',
        lastName: 'Umar',
        email: 'ibrahim.u@example.com',
        avatar: getAvatar('avatar-2'),
        phoneNumber: '08012345672',
        program: 'Student',
        enrollmentStatus: 'Active',
        totalPayments: 900000,
        paymentDate: '2023-05-18',
        lga: 'Jalingo',
        state: 'Taraba',
        class: 'JSS 1',
        paymentType: 'Registration Fees',
        category: 'Indigent'
    },
    {
        id: '3',
        firstName: 'Fatima',
        lastName: 'Bello',
        email: 'fatima.b@example.com',
        avatar: getAvatar('avatar-3'),
        program: 'Researcher',
        enrollmentStatus: 'Inactive',
        totalPayments: 2500000,
        paymentDate: '2022-12-10',
        lga: 'Mubi North',
        state: 'Adamawa',
        class: 'N/A',
        paymentType: 'Book Grant',
        category: 'Orphan'
    },
    {
        id: '4',
        firstName: 'Zainab',
        lastName: 'Abubakar',
        email: 'zainab.a@example.com',
        avatar: getAvatar('avatar-4'),
        program: 'Student',
        enrollmentStatus: 'Graduated',
        totalPayments: 6000000,
        paymentDate: '2021-06-01',
        lga: 'Wukari',
        state: 'Taraba',
        class: 'Graduated',
        paymentType: 'Termly Fees',
        category: 'Indigent'
    },
    {
        id: '5',
        firstName: 'Ahmed',
        lastName: 'Suleiman',
        email: 'ahmed.s@example.com',
        avatar: getAvatar('avatar-5'),
        program: 'Educator',
        enrollmentStatus: 'Active',
        totalPayments: 1600000,
        paymentDate: '2023-04-30',
        lga: 'Yola South',
        state: 'Adamawa',
        class: 'N/A',
        paymentType: 'Transport',
        category: 'Orphan'
    },
    {
        id: '6',
        firstName: 'Halima',
        lastName: 'Garba',
        email: 'halima.g@example.com',
        avatar: getAvatar('avatar-6'),
        phoneNumber: '08012345676',
        program: 'Student',
        enrollmentStatus: 'Active',
        totalPayments: 750000,
        paymentDate: '2023-05-22',
        lga: 'Sardauna',
        state: 'Taraba',
        class: 'Primary 5',
        paymentType: 'Registration Fees',
        category: 'Indigent'
    }
];
const contributors = [
    {
        id: '1',
        firstName: 'Tunde',
        lastName: 'Adekunle',
        email: 'tunde.a@example.com',
        avatar: getAvatar('avatar-7'),
        phoneNumber: '08012345681',
        category: 'Individual',
        status: 'Active',
        totalContribution: 2500000,
        lastContributionDate: '2023-04-15'
    },
    {
        id: '2',
        firstName: 'Amina',
        lastName: 'Yusuf',
        email: 'amina.y@example.com',
        avatar: getAvatar('avatar-8'),
        category: 'Corporate',
        status: 'Active',
        totalContribution: 12500000,
        lastContributionDate: '2023-03-01'
    },
    {
        id: '3',
        firstName: 'Chinedu',
        lastName: 'Okoro',
        email: 'chinedu.o@example.com',
        avatar: getAvatar('avatar-9'),
        category: 'Foundation',
        status: 'Paused',
        totalContribution: 50000000,
        lastContributionDate: '2022-11-20'
    },
    {
        id: '4',
        firstName: 'Ngozi',
        lastName: 'Obi',
        email: 'ngozi.o@example.com',
        avatar: getAvatar('avatar-10'),
        phoneNumber: '08012345684',
        category: 'Individual',
        status: 'Inactive',
        totalContribution: 500000,
        lastContributionDate: '2021-02-05'
    },
    {
        id: '5',
        firstName: 'Emeka',
        lastName: 'Nwosu',
        email: 'emeka.n@example.com',
        avatar: getAvatar('avatar-11'),
        category: 'Individual',
        status: 'Active',
        totalContribution: 125000,
        lastContributionDate: '2023-05-19'
    }
];
const recentContributions = [
    {
        id: 'c1',
        contributorId: '1',
        amount: 250000,
        date: '2023-05-25',
        type: 'Donation'
    },
    {
        id: 'c2',
        contributorId: '2',
        amount: 1250000,
        date: '2023-05-24',
        type: 'Sponsorship'
    },
    {
        id: 'c3',
        contributorId: '3',
        amount: 5000000,
        date: '2023-05-22',
        type: 'Grant'
    },
    {
        id: 'c4',
        contributorId: '1',
        amount: 250000,
        date: '2023-04-25',
        type: 'Donation'
    },
    {
        id: 'c5',
        contributorId: '5',
        amount: 50000,
        date: '2023-04-20',
        type: 'Membership'
    }
];
const beneficiaryCategories = [
    {
        id: 'ben-cat-1',
        name: 'Student'
    },
    {
        id: 'ben-cat-2',
        name: 'Researcher'
    },
    {
        id: 'ben-cat-3',
        name: 'Educator'
    }
];
const contributorCategories = [
    {
        id: 'con-cat-1',
        name: 'Individual'
    },
    {
        id: 'con-cat-2',
        name: 'Corporate'
    },
    {
        id: 'con-cat-3',
        name: 'Foundation'
    }
];
const userProfile = {
    name: 'Admin User',
    email: 'admin@eduaid.org'
};
const teamMembers = [
    {
        id: 1,
        name: 'Mustapha Buhari',
        role: 'Chairman',
        avatar: getAvatar('avatar-7'),
        bio: 'Leading our organization with a vision for a brighter future for the underserved.'
    },
    {
        id: 2,
        name: 'Alh. Jika Hassan Ardo',
        role: 'Board of Trustee',
        avatar: getAvatar('avatar-8'),
        bio: 'A key member of our board, providing strategic guidance and support for our mission.'
    },
    {
        id: 3,
        name: 'Alhaji Isa',
        role: 'Board of Trustee',
        avatar: getAvatar('avatar-9'),
        bio: 'Dedicated to overseeing our programs and ensuring we reach those most in need.'
    },
    {
        id: 4,
        name: 'Alh. Umar Leme',
        role: 'Member',
        avatar: getAvatar('avatar-10'),
        bio: 'An active member contributing to community outreach and engagement efforts.'
    },
    {
        id: 5,
        name: 'Alh. Dauda',
        role: 'Member',
        avatar: getAvatar('avatar-11'),
        bio: 'Passionate about our cause, working to expand our impact and reach.'
    },
    {
        id: 6,
        name: 'Alh. Yazid',
        role: 'Member',
        avatar: getAvatar('avatar-12'),
        bio: 'A valued member whose contributions are vital to our operational success.'
    }
];
const heroSlides = [
    {
        id: 'slide-1',
        imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
        alt: 'Students studying together',
        imageHint: 'students learning'
    },
    {
        id: 'slide-2',
        imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop',
        alt: 'Student graduating',
        imageHint: 'student graduation'
    },
    {
        id: 'slide-3',
        imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop',
        alt: 'Students in a classroom',
        imageHint: 'students classroom'
    },
    {
        id: 'slide-4',
        imageUrl: 'https://images.unsplash.com/photo-1576405828234-a8a932c942b9?q=80&w=2070&auto=format&fit=crop',
        alt: 'Happy children smiling',
        imageHint: 'happy children'
    }
];
const blogPosts = [
    {
        slug: 'how-we-started',
        title: 'How We Started: The EduAid HQ Story',
        excerpt: 'Discover the inspiration and journey behind our mission to empower students across Nigeria.',
        author: 'Amina Yusuf',
        date: 'October 26, 2023',
        imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop',
        imageHint: 'students classroom',
        content: `
<p>In the heart of Nigeria, where the thirst for knowledge is as vast as the savanna, EduAid HQ was born. It began not in a boardroom, but from a simple, powerful observation: countless brilliant minds were being held back by a single barrier—financial constraints. This is the story of how a small group of passionate individuals decided to rewrite the narrative for a generation of students.</p>
<p>Our journey started in 2005 with a focus on Adamawa and Taraba states. We saw firsthand the struggles of orphans, families in distress, and widows who had no one to turn to. The potential was there, but the opportunity was not. We knew we had to act.</p>
<h3 class="text-2xl font-bold my-4">The First Step</h3>
<p>Our first initiative was small. We sponsored a handful of children at Al-Iman School in Jalingo and Darul-Ulum, providing them with uniforms, books, and the tuition they needed to stay in school. The joy and relief on their faces were all the motivation we needed. We saw that even a small intervention could create a massive ripple effect, not just for the student, but for their entire family and community.</p>
<p>Word began to spread, and so did our mission. With the support of early contributors, we were able to expand our reach to higher institutions, including Taraba State University and Modibbo Adama University. We also began providing critical support to patients at FMC Hospital and assisting widows in our local neighborhoods, ensuring that our impact was felt across different facets of the community.</p>
<h3 class="text-2xl font-bold my-4">Looking Forward</h3>
<p>Today, EduAid HQ is a testament to what can be achieved when a community comes together. We have sponsored hundreds of students, many of whom have gone on to become leaders, innovators, and changemakers in their own right. But our work is far from over. With your continued support, we can reach even more students, unlock more potential, and build a brighter, more equitable future for Nigeria, one student at a time.</p>
`
    },
    {
        slug: 'impact-stories-aisha-mohammed',
        title: 'Impact Stories: Meet Aisha Mohammed',
        excerpt: 'Aisha, one of our first beneficiaries, shares her story of academic success and how EduAid HQ made a difference.',
        author: 'Tunde Adekunle',
        date: 'October 20, 2023',
        imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop',
        imageHint: 'student graduation',
        content: `
<p>Aisha Mohammed always dreamed of becoming a doctor. Growing up in a small village in Taraba, she was a top student with a passion for science. However, when she lost her father, that dream felt impossibly distant. With her mother struggling to support the family, university seemed like a luxury they could not afford.</p>
<p>"I had given up hope," Aisha recalls. "I was preparing to find a small job to help my mother. I thought my education was over." That's when she heard about EduAid HQ. After a rigorous application process, she was selected as one of our first university scholars.</p>
<h3 class="text-2xl font-bold my-4">A New Beginning</h3>
<p>EduAid HQ provided Aisha with a full scholarship that covered her tuition, accommodation, and study materials at Modibbo Adama University. For the first time in years, she could focus entirely on her studies without the burden of financial stress.</p>
<p>"It was like a weight had been lifted off my shoulders," she says. "I could finally dedicate myself to my books. I studied day and night, not just for myself, but for my family and for the people who believed in me."</p>
<p>Aisha excelled in her studies, graduating at the top of her class with a degree in Medicine. Today, Dr. Aisha Mohammed works at a general hospital in her home state, providing vital medical care to her community. She is a role model, an inspiration, and a living testament to the power of education.</p>
<h3 class="text-2xl font-bold my-4">Giving Back</h3>
<p>"EduAid HQ didn't just give me a scholarship; they gave me a future," Aisha says with a smile. "Now, I contribute a portion of my salary back to the organization, so that another young dreamer can have the same chance I did."</p>
<p>Aisha's story is one of many. It showcases the profound and lasting impact that a single act of generosity can have. It's a reminder that when we invest in education, we invest in the future of our communities and our nation.</p>
`
    },
    {
        slug: 'corporate-sponsorship-in-education',
        title: 'The Importance of Corporate Sponsorship in Education',
        excerpt: 'Learn how corporate partnerships are crucial in creating sustainable educational opportunities for the next generation.',
        author: 'Chinedu Okoro',
        date: 'October 15, 2023',
        imageUrl: 'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=2070&auto=format&fit=crop',
        imageHint: 'business handshake',
        content: `
<p>While individual donations are the lifeblood of many non-profits, corporate sponsorships provide the scale and stability needed to create long-term, systemic change. At EduAid HQ, our corporate partners are more than just donors; they are strategic allies in our mission to build a more educated and prosperous Nigeria.</p>
<h3 class="text-2xl font-bold my-4">Why Corporate Partnerships Matter</h3>
<p>Corporate social responsibility (CSR) has evolved beyond simple philanthropy. Today's leading companies understand that investing in communities, particularly in education, is an investment in their own future. A well-educated populace leads to a skilled workforce, a stronger economy, and a more stable society.</p>
<p>Here are a few key reasons why corporate sponsorship is so vital:</p>
<ul>
    <li class="my-2"><strong>Sustainable Funding:</strong> Corporate partnerships often involve multi-year commitments, providing a predictable funding stream that allows organizations like ours to plan and execute long-term projects.</li>
    <li class="my-2"><strong>Expanded Reach:</strong> The resources provided by corporations allow us to support more students and expand our programs into new regions.</li>
    <li class="my-2"><strong>Mentorship and Internships:</strong> Many of our corporate partners offer invaluable internship and mentorship opportunities to our beneficiaries, providing them with real-world experience and professional networks.</li>
    <li class="my-2"><strong>Brand Amplification:</strong> Partnerships amplify our message, raising awareness about the importance of educational equity and encouraging more individuals and organizations to get involved.</li>
</ul>
<h3 class="text-2xl font-bold my-4">A Call to Action for Businesses</h3>
<p>We believe that every business has a role to play in shaping the future. By partnering with EduAid HQ, companies can make a tangible and lasting impact on the lives of young Nigerians. Your support can help us break the cycle of poverty, foster innovation, and build the next generation of leaders.</p>
<p>If your organization is looking for a meaningful way to give back, we invite you to connect with us. Together, we can empower futures and transform a nation.</p>
`
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/blog/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BlogPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/placeholder-data.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
function BlogPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-5xl font-bold font-headline",
                            children: "Our Blog"
                        }, void 0, false, {
                            fileName: "[project]/src/app/blog/page.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground mt-2 text-lg",
                            children: "Stories, updates, and insights from the EduAid HQ team."
                        }, void 0, false, {
                            fileName: "[project]/src/app/blog/page.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/blog/page.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blogPosts"].map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/blog/${post.slug}`,
                                    className: "block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-56 w-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: post.imageUrl,
                                            alt: post.title,
                                            layout: "fill",
                                            objectFit: "cover",
                                            "data-ai-hint": post.imageHint
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/blog/page.tsx",
                                            lineNumber: 27,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/blog/page.tsx",
                                        lineNumber: 26,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/blog/page.tsx",
                                    lineNumber: 25,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-xl font-bold font-headline leading-tight",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/blog/${post.slug}`,
                                                className: "hover:text-primary transition-colors",
                                                children: post.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/blog/page.tsx",
                                                lineNumber: 38,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/blog/page.tsx",
                                            lineNumber: 37,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-muted-foreground pt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "By ",
                                                        post.author
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/blog/page.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 21
                                                }, this),
                                                " • ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: post.date
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/blog/page.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 58
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/blog/page.tsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/blog/page.tsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "flex-grow",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                        children: post.excerpt
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/blog/page.tsx",
                                        lineNumber: 47,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/blog/page.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 pt-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/blog/${post.slug}`,
                                        className: "font-semibold text-primary inline-flex items-center gap-1 group",
                                        children: [
                                            "Read More",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "h-4 w-4 transition-transform group-hover:translate-x-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/blog/page.tsx",
                                                lineNumber: 52,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/blog/page.tsx",
                                        lineNumber: 50,
                                        columnNumber: 18
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/blog/page.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, post.slug, true, {
                            fileName: "[project]/src/app/blog/page.tsx",
                            lineNumber: 24,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/blog/page.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/blog/page.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/blog/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = BlogPage;
var _c;
__turbopack_context__.k.register(_c, "BlogPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_29dfbf2d._.js.map