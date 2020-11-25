export const handleStyle = (styles, mode, modeClass) => {
    if(mode) {
        styles.push(modeClass)
    }
    return styles.join(' ')
}