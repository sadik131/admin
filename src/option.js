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
    "Image",
    // "Product Code",
    "Product Name",
    "Category",
    "Price",
    "Discount Price",
    "Quantity",
    "Unit",
    "Description",
    "Status",
    "Publish Date",
    "Actions"
];


export const productData = [
    {
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        // productCode: 'PRD001',
        productName: 'Wireless Headphones',
        category: 'Electronics',
        price: '99.99',
        discountPrice: '79.99',
        quantity: '25',
        unit: 'pcs',
        description: 'Noise cancelling over-ear headphones with 30-hour battery life.',
        status: 'Available',
        publishDate: '2025-07-28',
    },
    {
        // productCode: 'PRD002',
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        productName: 'Smartwatch Pro',
        category: 'Wearables',
        price: '149.99',
        discountPrice: '129.99',
        quantity: '50',
        unit: 'pcs',
        description: 'Fitness tracking smartwatch with heart rate monitor and GPS.',
        status: 'Available',
        publishDate: '2025-07-25',
    },
    {
        // productCode: 'PRD003',
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        productName: 'Gaming Laptop',
        category: 'Computers',
        price: '1199.99',
        discountPrice: '999.99',
        quantity: '10',
        unit: 'pcs',
        description: 'High performance gaming laptop with RTX 4060 and 16GB RAM.',
        status: 'Unavailable',
        publishDate: '2025-07-20',
    },
    {
        // id: 'PRD004',
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        productName: 'Electric Kettle',
        category: 'Home Appliances',
        price: '29.99',
        discountPrice: '24.99',
        quantity: '75',
        unit: 'pcs',
        description: '1.7L fast boiling electric kettle with auto shut-off.',
        status: 'Available',
        publishDate: '2025-07-22',
    },
];
