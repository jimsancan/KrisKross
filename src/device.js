// const size = {
//     mobile: '425px',
//     tablet: '768px',
//     desktop: '1024px',
// }

const size = { //bootstrap breakpoints
    mobile: '576px',
    tablet: '768px',
    desktop: '992px'
}

export const device = {
    min : {
        mobile: `(min-width: ${size.mobile})`,
        tablet: `(min-width: ${size.tablet})`,
        desktop: `(min-width: ${size.desktop})`,
    },
    max : {
        mobile: `(max-width: ${size.mobile})`,
        tablet: `(max-width: ${size.tablet})`,
        desktop: `(max-width: ${size.desktop})`,
    },
};