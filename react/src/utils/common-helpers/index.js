

export function getTotalPages(pageSize,totalTickets){
    if(totalTickets < pageSize){
        return 1
    }else{
        if(totalTickets%pageSize===0){
            return totalTickets/pageSize
        }else{
            return Math.floor(totalTickets/pageSize) + 1 
        }
    }
}

export function getPaginatedTickets(pageSize,tickets,totalPages){
    let paginatedArray=[]
    for (let i = totalPages; i > 0; i--) {
        paginatedArray.push(tickets.splice(0, pageSize));
    }

    return paginatedArray
}