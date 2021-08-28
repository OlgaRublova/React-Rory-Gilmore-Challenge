const paginate = (items) => {
    const itemsPerPage = 30;
    let pages = Math.ceil(items.length / itemsPerPage);
    if (items.length < itemsPerPage) {
        pages = 0;
    }

    const newItems = Array.from({length: pages}, (_, index) => {
        const start = index * itemsPerPage;
        return items.slice(start, start + itemsPerPage)
    })
    return newItems;
}

export default paginate;