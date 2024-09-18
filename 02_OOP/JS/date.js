class ExtendedDate extends Date {
    showDayMonth() {
        const day = this.getDate();
        const month = this.getMonth();
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return `${day} ${months[month]}`;
    }

    
    isFutureOrCurrent() {
        const now = new Date();
        return this >= now;
    }

    
    isIntercalaryYear() {
        const year = this.getFullYear();
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    
    getNextDate() {
        const nextDate = new Date(this);
        nextDate.setDate(this.getDate() + 1);
        return nextDate;
    }
}


const myDate = new ExtendedDate(2024, 9, 13); //


console.log("Date text:", myDate.showDayMonth()); 
console.log("Future or Current:", myDate.isFutureOrCurrent()); 
console.log("Intercalary Year:", myDate.isIntercalaryYear()); 
console.log("Net date:", myDate.getNextDate());