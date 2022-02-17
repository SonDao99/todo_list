import isToday from 'date-fns/isToday'

const todoItem = (name, status = 'none', date = 'none') => {

    const toggleStatus = () => {
        if (status === 'none') {
            status = 'done';
        } else {
            status = 'none';
        }
    }

    const getStatus = () => {
        return status;
    }

    const setDate = (newDate) => {
        date = newDate;
    }

    const getDate = () => {
        return date;
    }

    return {name, toggleStatus, getStatus, setDate, getDate}
}

export default todoItem;