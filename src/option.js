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
    "id",
    "img",
    "name",
    "category",
    "brand",
    "model",
    "sku",
    "purchase_price",
    "selling_price",
    "quantity",
    "reorder_level",
    "supplier",
    "supplier_contact",
    "location",
    "last_restock",
    "warranty_expiry",
    "qr_code",
    "status",
    "notes"
];



export const productData = [
    {
        "id": "PROD-2023-001",
        "image": "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&auto=format",
        "name": "Office Chair",
        "category": "Furniture",
        "brand": "Autobind",
        "model": "AC-2023",
        "sku": "FURN-CH-001",
        "purchase_price": 4500,
        "selling_price": 6000,
        "quantity": 25,
        "reorder_level": 5,
        "supplier": "Rahman Furniture",
        "supplier_contact": "01712-345678",
        "location": "Store Room-1",
        "last_restock": "2023-11-15",
        "warranty_expiry": "2025-11-15",
        "qr_code": "PROD-2023-001-QR",
        "notes": "Executive model with lumbar support"
    },
    {
        "id": "PROD-2023-002",
        "image": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format",
        "name": "Desktop Computer",
        "category": "Electronics",
        "brand": "Walton",
        "model": "Primo H5",
        "sku": "ELEC-DT-002",
        "purchase_price": 35000,
        "selling_price": 42000,
        "quantity": 8,
        "reorder_level": 2,
        "supplier": "Star Tech",
        "supplier_contact": "01987-654321",
        "location": "IT Department",
        "last_restock": "2023-10-20",
        "warranty_expiry": "2024-10-20",
        "qr_code": "PROD-2023-002-QR",
        "specs": "i5, 8GB RAM, 256GB SSD"
    },
    
    {
        "id": "PROD-2023-003",
        "image": "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-1.2.1&auto=format",
        "name": "Ceiling Fan",
        "category": "Electrical",
        "brand": "Minister",
        "model": "CF-56",
        "sku": "ELEC-CF-003",
        "purchase_price": 3200,
        "selling_price": 4000,
        "quantity": 15,
        "reorder_level": 3,
        "supplier": "RFL Electronics",
        "supplier_contact": "01876-543210",
        "location": "Floor 2 Storage",
        "last_restock": "2023-11-01",
        "warranty_expiry": "2026-11-01",
        "qr_code": "PROD-2023-003-QR",
        "specs": "56-inch, 3-speed"
    },
    {
        "id": "PROD-2023-002",
        "image": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format",
        "name": "Desktop Computer",
        "category": "Electronics",
        "brand": "Walton",
        "model": "Primo H5",
        "sku": "ELEC-DT-002",
        "purchase_price": 35000,
        "selling_price": 42000,
        "quantity": 8,
        "reorder_level": 2,
        "supplier": "Star Tech",
        "supplier_contact": "01987-654321",
        "location": "IT Department",
        "last_restock": "2023-10-20",
        "warranty_expiry": "2024-10-20",
        "qr_code": "PROD-2023-002-QR",
        "specs": "i5, 8GB RAM, 256GB SSD"
    },
    {
        "id": "PROD-2023-004",
        "image": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-1.2.1&auto=format",
        "name": "Office Desk",
        "category": "Furniture",
        "brand": "Partex",
        "model": "OD-2023",
        "sku": "FURN-DK-004",
        "purchase_price": 8500,
        "selling_price": 11000,
        "quantity": 10,
        "reorder_level": 2,
        "supplier": "Akij Furniture",
        "supplier_contact": "01666-789012",
        "location": "Store Room-2",
        "last_restock": "2023-10-15",
        "warranty_expiry": "N/A",
        "qr_code": "PROD-2023-004-QR",
        "specs": "L-shaped, 160x120cm"
    },
    {
        "id": "PROD-2023-002",
        "image": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format",
        "name": "Desktop Computer",
        "category": "Electronics",
        "brand": "Walton",
        "model": "Primo H5",
        "sku": "ELEC-DT-002",
        "purchase_price": 35000,
        "selling_price": 42000,
        "quantity": 8,
        "reorder_level": 2,
        "supplier": "Star Tech",
        "supplier_contact": "01987-654321",
        "location": "IT Department",
        "last_restock": "2023-10-20",
        "warranty_expiry": "2024-10-20",
        "qr_code": "PROD-2023-002-QR",
        "specs": "i5, 8GB RAM, 256GB SSD"
    },
    {
        "id": "PROD-2023-004",
        "image": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-1.2.1&auto=format",
        "name": "Office Desk",
        "category": "Furniture",
        "brand": "Partex",
        "model": "OD-2023",
        "sku": "FURN-DK-004",
        "purchase_price": 8500,
        "selling_price": 11000,
        "quantity": 10,
        "reorder_level": 2,
        "supplier": "Akij Furniture",
        "supplier_contact": "01666-789012",
        "location": "Store Room-2",
        "last_restock": "2023-10-15",
        "warranty_expiry": "N/A",
        "qr_code": "PROD-2023-004-QR",
        "specs": "L-shaped, 160x120cm"
    },
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
    { id: 1, date: '2023-10-01', paymentType: 'Cash', paidAmount: '$100.00', dueAmount: '$0.00', payableAmount: '$100.00' },
    { id: 2, date: '2023-10-02', paymentType: 'Credit Card', paidAmount: '$200.00', dueAmount: '$50.00', payableAmount: '$250.00' },
    { id: 3, date: '2023-10-03', paymentType: 'Bank Transfer', paidAmount: '$150.00', dueAmount: '$0.00', payableAmount: '$150.00' },
    { id: 4, date: '2023-10-04', paymentType: 'Cash', paidAmount: '$300.00', dueAmount: '$100.00', payableAmount: '$400.00' },
    { id: 5, date: '2023-10-05', paymentType: 'Credit Card', paidAmount: '$250.00', dueAmount: '$0.00', payableAmount: '$250.00' },
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

export const expiredTh = [
    "SQU",
    "Product",
    "Manufacturer Date",
    "Expiry Date",
    ""
];

export const expiredData = [
    {
        SQU: '#001', Product: 'Milk', image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        ManufacturerDate: '2023-01-01', ExpiryDate: '2023-02-01'
    },
    { SQU: '#002', Product: 'Bread', image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D", ManufacturerDate: '2023-01-05', ExpiryDate: '2023-01-15' },
    { SQU: '#003', Product: 'Eggs', image: "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D", ManufacturerDate: '2023-01-10', ExpiryDate: '2023-01-20' },
    { SQU: '#004', Product: 'Cheese', image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D", ManufacturerDate: '2023-01-15', ExpiryDate: '2023-02-15' },
    { SQU: '#005', Product: 'Yogurt', image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D", ManufacturerDate: '2023-01-20', ExpiryDate: '2023-02-20' }
]

export const lowStockTh = [
    "Warehouse",
    "Store",
    "Product Name",
    "Category",
    "SkU",
    "Qty",
    "qty Alert",
    ""
]

export const lowstockData = [
    { Warehouse: 'Warehouse A', Store: 'Store 1', ProductName: 'Laptop', image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D", Category: 'Electronics', SkU: 'LAP123', Qty: 5, qtyAlert: 10 },
    { Warehouse: 'Warehouse B', Store: 'Store 2', ProductName: 'Smartphone', image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D", Category: 'Electronics', SkU: 'SMP456', Qty: 3, qtyAlert: 5 },
    { Warehouse: 'Warehouse C', Store: 'Store 3', ProductName: 'Tablet', image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D", Category: 'Electronics', SkU: 'TAB789', Qty: 8, qtyAlert: 10 },
    { Warehouse: 'Warehouse D', Store: 'Store 4', ProductName: 'Headphones', image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D", Category: 'Accessories', SkU: 'HPD012', Qty: 2, qtyAlert: 5 },
    { Warehouse: 'Warehouse E', Store: 'Store 5', ProductName: 'Charger', image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D", Category: 'Accessories', SkU: 'CHR345', Qty: 1, qtyAlert: 3 }
];

export const categoryTh = [
    "Category",
    "Category slug",
    "Created On",
    "Status",
    ""
]

export const sortOption = [
    "This Month",
    "This Year",
    "This Week",
    "Last Month",
]

export const categoryData = [
    { Category: 'Electronics', CategorySlug: 'electronics', CreatedOn: '2023-01-01', status: 'active' },
    { Category: 'Clothing', CategorySlug: 'clothing', CreatedOn: '2023-02-15', status: 'active' },
    { Category: 'Home Appliances', CategorySlug: 'home-appliances', CreatedOn: '2023-03-10', status: 'Inactive' },
    { Category: 'Books', CategorySlug: 'books', CreatedOn: '2023-04-20', status: 'active' },
    { Category: 'Sports Equipment', CategorySlug: 'sports-equipment', CreatedOn: '2023-05-05', status: 'active' }
];


export const PrintQrData = [
    {
        image: "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        ProductName: "Nike Jordan",
        sku: "PT002",
        code: "HG3FK",
        refNumber: "32RRR554",
        qty: 4,
    },
    {
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        ProductName: "Adidas Pro",
        sku: "PT010",
        code: "AD9ZP",
        refNumber: "12XBB789",
        qty: 2,
    },
];


export const QRCodeTd = [
    "Product",
    "SKU",
    "Code",
    "REference Number",
    "Qty",
    ""
]


export const userData = [
    {
        "id": 1,
        "name": "Sajib Islam",
        "role": "Inventory Admin",
        "department": "Medicine",
        "status": "active",
        "avatar": "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
        "id": 2,
        "name": "Tanjina Akter",
        "role": "Store Manager",
        "department": "Surgery",
        "status": "pending",
        "avatar": "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
        "id": 3,
        "name": "Jubayer Hossain",
        "role": "Procurement Officer",
        "department": "Pediatrics",
        "status": "active",
        "avatar": "https://randomuser.me/api/portraits/women/63.jpg"
    },
    {
        "id": 4,
        "name": "Fatema Akhtar",
        "role": "IT Support",
        "department": "Radiology",
        "status": "pending",
        "avatar": "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
        "id": 5,
        "name": "Ahmed Rahman",
        "role": "Department Head",
        "department": "Cardiology",
        "status": "active",
        "avatar": "https://randomuser.me/api/portraits/women/88.jpg"
    }
]

export const topSupplierTh = [
    "SL",
    "Name",
    "Amount"
]

export const topSupplierData = [
    {
        sl: 1,
        name: "Akij Furniture Ltd.",
        amount: "৳ 1,50,000",
        location: "Dhaka, Bangladesh",
        img: "https://i.pravatar.cc/100?img=15",
        growth: "+12% vs last month",
        growthColor: "text-green-600"
    },
    {
        sl: 2,
        name: "Singer Bangladesh",
        amount: "৳ 1,10,000",
        location: "Chattogram, Bangladesh",
        img: "https://i.pravatar.cc/100?img=21",
        growth: "+9% vs last month",
        growthColor: "text-green-600"
    },
    {
        sl: 3,
        name: "RFL Plastics",
        amount: "৳ 95,000",
        location: "Narsingdi, Bangladesh",
        img: "https://i.pravatar.cc/100?img=31",
        growth: "+5% vs last month",
        growthColor: "text-green-600"
    },
    {
        sl: 4,
        name: "Walton Electronics",
        amount: "৳ 85,000",
        location: "Gazipur, Bangladesh",
        img: "https://i.pravatar.cc/100?img=41",
        growth: "-3% vs last month",
        growthColor: "text-red-600"
    },
    {
        sl: 5,
        name: "Bashundhara Paper",
        amount: "৳ 60,000",
        location: "Dhaka, Bangladesh",
        img: "https://i.pravatar.cc/100?img=51",
        growth: "+2% vs last month",
        growthColor: "text-green-600"
    }
];