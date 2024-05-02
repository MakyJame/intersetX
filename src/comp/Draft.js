import React, { useState } from 'react';
import { differenceInDays, format } from 'date-fns'; // Sử dụng thư viện date-fns cho việc xử lý ngày tháng

function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Draft() {
    const [loanAmount, setLoanAmount] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate] = useState(new Date()); // Ngày kết thúc lãi suất là ngày hiện tại

    const handleCalculateInterest = () => {
        const daysDiff = differenceInDays(endDate, startDate) + 1;
        const dailyInterest = loanAmount * (interestRate / 100) / 30; // Lãi suất hàng tháng
        const totalInterest = dailyInterest * daysDiff;
        // Hiển thị kết quả
        alert(`Số ngày đã vay: ${daysDiff}, Số tiền lãi tính đến ${format(endDate, 'dd/MM/yyyy')}: ${formatNumber(totalInterest)}`);
    };

    return (
        <div>
            <h1>Loan Interest Calculator</h1>
            <label>Số tiền vay:</label>
            <input type="text" value={formatNumber(loanAmount)} onChange={(e) => setLoanAmount(e.target.value.replace(/,/g, ''))} />
            <label>Lãi suất hàng tháng (%):</label> {/* Sửa thành lãi suất hàng tháng */}
            <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
            <label>Ngày bắt đầu vay:</label>
            <input type="date" value={format(startDate, 'yyyy-MM-dd')} onChange={(e) => setStartDate(new Date(e.target.value))} />
            <button onClick={handleCalculateInterest}>Tính tiền lãi</button>
        </div>
    );
}

export default Draft;
