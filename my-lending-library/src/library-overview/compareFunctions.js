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
    // TODO: new Date() isn't working here, can't read ISO8601?
    const a_date = new Date(a)
    const b_date = new Date(b)
    console.log(a_date, b_date)
    if (a_date.last_read < b_date.last_read) {
        return -1
    }
    if (a_date.last_read > b_date.last_read) {
        return 1
    }
    return 0
}

export function compare_reverse_chronological_date_last_read(a, b) {
    // TODO: new Date() isn't working here, can't read ISO8601?
    const a_date = new Date(a)
    const b_date = new Date(b)
    console.log(a_date, b_date)
    if (a_date.last_read < b_date.last_read) {
        return 1
    }
    if (a_date.last_read > b_date.last_read) {
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
