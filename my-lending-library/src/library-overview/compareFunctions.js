export function compare_alphabetical(a, b) {
    if (a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase()) {
        return -1
    }
    if (a.title.toLocaleLowerCase() > b.title.toLocaleLowerCase()) {
        return 1
    }
    return 0
}

export function compare_chronological_date_last_read(a, b) {
    const a_date = new Date(a.last_read)
    const b_date = new Date(b.last_read)

    if (a_date < b_date) {
        return -1
    }
    if (a_date > b_date) {
        return 1
    }
    return 0
}

export function compare_reverse_chronological_date_last_read(a, b) {
    const a_date = new Date(a.last_read)
    const b_date = new Date(b.last_read)

    if (a_date < b_date) {
        return 1
    }
    if (a_date > b_date) {
        return -1
    }
    return 0
}

export function compare_rating_low_to_high(a, b) {
    if (a.personal_rating < b.personal_rating) {
        return -1
    }
    if (a.personal_rating > b.personal_rating) {
        return 1
    }
    return 0
}

export function compare_rating_high_to_low(a, b) {
    if (a.personal_rating < b.personal_rating) {
        return 1
    }
    if (a.personal_rating > b.personal_rating) {
        return -1
    }
    return 0
}
