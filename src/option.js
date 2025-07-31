export const classOptions = [
    'Play', 'Nursery', 'One', 'Two', 'Three',
    'Four', 'Five',
];

export const role = [
    "Super admin",
    "Admin",
    "User"
]

export const gender = [
    "Male",
    "Female",
    "Other"
]

export const Religion = [
    "Islam",
    "Hindu",
    "Christian",
    "Buddhist",
    "Other"
]
export const subject = [
    "Mathematics",
    "Science",
    "English",
    "History",
    "Geography",
]
export const section = [
    "pink",
    "blue",
    "green",
    "yellow",
]


export const examData = [
    { id: '#0021', examName: 'Class Test', subject: 'English', grade: 'A', percent: '99.00 > 100', date: '22/02/2019' },
    { id: '#0022', examName: 'Class Test', subject: 'English', grade: 'A', percent: '99.00 > 100', date: '22/02/2019' },
    { id: '#0023', examName: 'Class Test', subject: 'Chemistry', grade: 'A', percent: '99.00 > 100', date: '22/02/2019' },
    { id: '#0024', examName: 'Class Test', subject: 'English', grade: 'A', percent: '99.00 > 100', date: '22/02/2019' },
    { id: '#0025', examName: 'Class Test', subject: 'Chemistry', grade: 'A', percent: '99.00 > 100', date: '22/02/2019' },
    { id: '#0026', examName: 'Class Test', subject: 'Chemistry', grade: 'D', percent: '70.00 > 100', date: '22/02/2019' },
    { id: '#0027', examName: 'Class Test', subject: 'English', grade: 'C', percent: '80.00 > 100', date: '22/02/2019' },
    { id: '#0028', examName: 'Class Test', subject: 'English', grade: 'B', percent: '99.00 > 100', date: '22/02/2019' },
    { id: '#0029', examName: 'First Semister', subject: 'English', grade: 'A', percent: '99.00 > 100', date: '22/02/2019' },
];

export const expenseData = [
    { id: '#0021', expense: 'Exam Fees', amount: '$150.00', status: 'Paid', email: 'akkhorachool@gmail.com', date: '22/02/2019' },
    { id: '#0022', expense: 'Semester Fees', amount: '$350.00', status: 'Due', email: 'akkhorachool@gmail.com', date: '22/02/2019' },
    { id: '#0023', expense: 'Exam Fees', amount: '$150.00', status: 'Paid', email: 'akkhorachool@gmail.com', date: '22/02/2019' },
    { id: '#0024', expense: 'Exam Fees', amount: '$150.00', status: 'Due', email: 'akkhorachool@gmail.com', date: '22/02/2019' },
    { id: '#0025', expense: 'Exam Fees', amount: '$150.00', status: 'Paid', email: 'akkhorachool@gmail.com', date: '22/02/2019' },
    { id: '#0026', expense: 'Semester Fees', amount: '$350.00', status: 'Due', email: 'akkhorachool@gmail.com', date: '22/02/2019' },
    { id: '#0027', expense: 'Exam Fees', amount: '$150.00', status: 'Paid', email: 'akkhorachool@gmail.com', date: '22/02/2019' },
];

export const category = [
    "Electronics",
    "Clothing",
    "Home Appliances",
    "Books",
    "Sports Equipment",
    "Beauty Products",
    "Toys & Games",
    "Automotive Parts"
]

export const productStatus = [
    "Available",
    "Out of Stock",
    "Discontinued"
]

export const brand = [
    "Brand A",
    "Brand B",
    "Brand C",
    "Brand D",
]

export const unit = [
    "Kilogram",
    "Liter",
    "Piece",
    "Box",
    "Pack"
]

export const quantity = [
    "1",
    "2",
    "3",
    "4",
    "5"
]


export const productTableHeaders = [
    "image",
    "productName",
    "sku",
    "category_type",
    "brand",
    "model_number",
    "serial_number",
    "quantity",
    "reorder_level",
    "warehouse_location",
    "purchase_date",
    "purchase_price",
    "supplier_name",
    "supplier_contact",
    "purchase_receipt",
    "warranty_period",
    "warranty_start_date",
    "warranty_end_date",
    "warranty_terms",
    "warranty_document",
    "assigned_to",
    "status",
    "usage_status",
    "notes",
    "publishDate",
    "Action"
];



export const productData = [
    {
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        productName: "Wireless Headphones",
        sku: "WH-1001",
        category_type: "Electronics",
        brand: "SoundMax",
        model_number: "SM-HX500",
        serial_number: "SN-WH123456",
        quantity: 25,
        reorder_level: 10,
        warehouse_location: "A1-Section-3",
        purchase_date: "2024-12-15",
        purchase_price: 70.00,
        supplier_name: "TechSupply Ltd.",
        supplier_contact: "01711223344",
        purchase_receipt: "/receipts/wh-1001.pdf",
        warranty_period: "12 months",
        warranty_start_date: "2024-12-15",
        warranty_end_date: "2025-12-14",
        warranty_terms: "Covers manufacturing defects only.",
        warranty_document: "/warranty/wh-1001.pdf",
        assigned_to: "Marketing Department",
        status: "active",
        usage_status: "in_use",
        notes: "Issued for campaign team use.",
        publishDate: "2025-07-28"
    },
    {
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        productName: "Smartwatch Pro",
        sku: "SW-PRO-2025",
        category_type: "Wearables",
        brand: "FitGear",
        model_number: "FG-SP2025",
        serial_number: "SN-SW789654",
        quantity: 50,
        reorder_level: 15,
        warehouse_location: "B2-Rack-7",
        purchase_date: "2025-01-10",
        purchase_price: 120.00,
        supplier_name: "WearableWorld Inc.",
        supplier_contact: "01833445566",
        purchase_receipt: "/receipts/smartwatch-pro.pdf",
        warranty_period: "24 months",
        warranty_start_date: "2025-01-10",
        warranty_end_date: "2027-01-09",
        warranty_terms: "Includes battery replacement for 2 years.",
        warranty_document: "/warranty/sw-pro.pdf",
        assigned_to: "Sales Team",
        status: "active",
        usage_status: "in_use",
        notes: "Batch distributed to senior sales executives.",
        publishDate: "2025-07-25"
    },
    {
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        productName: "Gaming Laptop",
        sku: "GL-RTX4060",
        category_type: "Computers",
        brand: "Xenon",
        model_number: "XEN-GL4060",
        serial_number: "SN-GL456321",
        quantity: 10,
        reorder_level: 5,
        warehouse_location: "C3-Bay-1",
        purchase_date: "2025-03-05",
        purchase_price: 950.00,
        supplier_name: "GameGear Supplies",
        supplier_contact: "01555667788",
        purchase_receipt: "/receipts/gaming-laptop.pdf",
        warranty_period: "18 months",
        warranty_start_date: "2025-03-05",
        warranty_end_date: "2026-09-04",
        warranty_terms: "Covers GPU and motherboard only.",
        warranty_document: "/warranty/gl.pdf",
        assigned_to: "Graphics Department",
        status: "inactive",
        usage_status: "under_repair",
        notes: "Overheating issue reported; sent for inspection.",
        publishDate: "2025-07-20"
    },
    {
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        productName: "Electric Kettle",
        sku: "EK-17L",
        category_type: "Home Appliances",
        brand: "HomeTech",
        model_number: "HT-KETTLE17",
        serial_number: "SN-EK778899",
        quantity: 75,
        reorder_level: 20,
        warehouse_location: "D4-Shelf-6",
        purchase_date: "2025-04-18",
        purchase_price: 22.00,
        supplier_name: "HomeEase Traders",
        supplier_contact: "01999887766",
        purchase_receipt: "/receipts/kettle-17l.pdf",
        warranty_period: "6 months",
        warranty_start_date: "2025-04-18",
        warranty_end_date: "2025-10-17",
        warranty_terms: "Covers electrical faults and body damage.",
        warranty_document: "/warranty/kettle-17l.pdf",
        assigned_to: "Cafeteria",
        status: "active",
        usage_status: "in_use",
        notes: "Used daily in cafeteria staff kitchen.",
        publishDate: "2025-07-22"
    }
];

export const tableHead = [
    { id: 'id', label: 'SL' },
    { id: 'name', label: 'Name' },
    { id: 'amount', label: 'Amount' }
];
export const RecentTableHead = [
    { id: '1', label: 'SL' },
    { id: '2', label: 'Date' },
    { id: '3', label: 'Payment Type' },
    { id: '4', label: 'Paid Amount' },
    { id: '5', label: 'Due Amount' },
    { id: '6', label: 'Payable Amount' },
];

export const RechentData = [
    {id:1, date: '2023-10-01', paymentType: 'Cash', paidAmount: '$100.00', dueAmount: '$0.00', payableAmount: '$100.00'},
    {id:2, date: '2023-10-02', paymentType: 'Credit Card', paidAmount: '$200.00', dueAmount: '$50.00', payableAmount: '$250.00'},
    {id:3, date: '2023-10-03', paymentType: 'Bank Transfer', paidAmount: '$150.00', dueAmount: '$0.00', payableAmount: '$150.00'},
    {id:4, date: '2023-10-04', paymentType: 'Cash', paidAmount: '$300.00', dueAmount: '$100.00', payableAmount: '$400.00'},
    {id:5, date: '2023-10-05', paymentType: 'Credit Card', paidAmount: '$250.00', dueAmount: '$0.00', payableAmount: '$250.00'},
];
export const suppliers = [
    { id: 1, name: "Esther Howard", amount: "$30,00.00" },
    { id: 2, name: "Wade Warren", amount: "$40,00.00" },
    { id: 3, name: "Jenny Wilson", amount: "$50,00.00" },
    { id: 4, name: "Kristin Watson", amount: "$60,00.00" },
    { id: 5, name: "Kristin Watson", amount: "$60,00.00" },
    { id: 6, name: "Kristin Watson", amount: "$60,00.00" }
];
export const customers = [
    {
        id: 1,
        name: "Esther Howard",
        amount: "$3,250.00",
        lastPurchase: "2023-05-15",
        status: "Regular"
    },
    {
        id: 2,
        name: "Wade Warren",
        amount: "$4,180.50",
        lastPurchase: "2023-06-22",
        status: "Premium"
    },
    {
        id: 3,
        name: "Jenny Wilson",
        amount: "$5,320.75",
        lastPurchase: "2023-07-10",
        status: "VIP"
    },
    {
        id: 4,
        name: "Robert Fox",
        amount: "$2,150.00",
        lastPurchase: "2023-08-05",
        status: "New"
    },
    {
        id: 5,
        name: "Kristin Watson",
        amount: "$6,450.90",
        lastPurchase: "2023-08-18",
        status: "Premium"
    },
    {
        id: 6,
        name: "Jacob Jones",
        amount: "$1,980.25",
        lastPurchase: "2023-09-02",
        status: "Regular"
    }
];