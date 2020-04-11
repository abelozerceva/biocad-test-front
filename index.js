'use strict'

let reportsList = [
    {
        data: '04.10.19', 
        time: '10:23',
        solution: ['В1: № 2000460789536: pH 1.09', 'В2: № 2000460789536: pH 2.00', 'В3: № 2000460789536: pH 4.01',
                    'В4: № 2000460789536: pH 7.00', 'В5: № 2000460789536: pH 9.21'],
        slope: 98.7,
        offset: -0.3,
        user: 'Иванов Генадий Петрович'
    },
    {
        data: '04.10.19', 
        time: '10:23',
        solution: ['В1: № 2000460789536: pH 1.09', 'В2: № 2000460789536: pH 2.00', 'В3: № 2000460789536: pH 4.01',
                    'В4: № 2000460789536: pH 7.00', 'В5: № 2000460789536: pH 9.21'],
        slope: 95.7,
        offset: -0.8,
        user: 'Петров Иван Генадьевич'
    },
    {
        data: '04.10.19', 
        time: '10:23',
        solution: ['В1: № 2000460789536: pH 1.09', 'В2: № 2000460789536: pH 2.00', 'В3: № 2000460789536: pH 4.01',
                    'В4: № 2000460789536: pH 7.00', 'В5: № 2000460789536: pH 9.21'],
        slope: 98.7,
        offset: -0.3,
        user: 'Петров Генадий Иванович'
    },
    {
        data: '04.10.19', 
        time: '10:23',
        solution: ['В1: № 2000460789536: pH 1.09', 'В2: № 2000460789536: pH 2.00', 'В3: № 2000460789536: pH 4.01',
                    'В4: № 2000460789536: pH 7.00', 'В5: № 2000460789536: pH 9.21'],
        slope: 90.1,
        offset: -0.5,
        user: 'Генадьев Иван Петрович'
    }
];
// image of success check
function success() {
    return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0C3.58892 0 0 3.58862 0 8C0 12.4114 3.58892 16 8 16C12.4111 16 16 12.4114 16 8C16 3.58862 12.4111 0 8 0ZM12.46 5.332L7.53692 10.8705C7.41569 11.0068 7.24677 11.0769 7.07662 11.0769C6.94154 11.0769 6.80585 11.0326 6.69231 10.9422L3.61538 8.48062C3.35015 8.26862 3.30708 7.88123 3.51938 7.61569C3.73138 7.35015 4.11908 7.30708 4.38431 7.51938L7.00492 9.61569L11.54 4.51385C11.7652 4.25969 12.1548 4.23692 12.4086 4.46277C12.6628 4.68892 12.6858 5.07785 12.46 5.332Z" fill="#6BAE45"/>
            </svg>`;
}
// image of error check
function error() {
    return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.6594 2.34038C10.5389 -0.780136 5.4612 -0.780444 2.34038 2.34038C-0.780447 5.46121 -0.78014 10.5386 2.34038 13.6595C5.46089 16.7803 10.5386 16.7803 13.6594 13.6595C16.78 10.5386 16.78 5.4609 13.6594 2.34038ZM11.1561 11.1561C10.9157 11.3966 10.526 11.3966 10.2856 11.1561L7.99991 8.87047L5.60558 11.2648C5.36516 11.5052 4.97544 11.5052 4.73502 11.2648C4.4946 11.0244 4.4946 10.6347 4.73502 10.3943L7.12936 7.99992L4.84369 5.71425C4.60327 5.47383 4.60327 5.0838 4.84369 4.84369C5.08411 4.60327 5.47382 4.60327 5.71424 4.84369L7.99991 7.12936L10.1766 4.95266C10.417 4.71224 10.8067 4.71224 11.0472 4.95266C11.2876 5.19308 11.2876 5.5828 11.0472 5.82322L8.87047 7.99992L11.1561 10.2856C11.3966 10.526 11.3966 10.9157 11.1561 11.1561Z" fill="#D10000"/>
            </svg> `;
}
// report table row
function report(report) {
    return `<tr>
            <td> ${report.data} <br> ${report.time} </td>
            <td> ${report.solution.map((el) => `${el} <br>`).join('')} </td>
            <td> 
                <table>
                    <td> ${report.slope} </td>
                    <td> ${report.slope >= 95 && report.slope <= 105 ? success() : error()} </td>
                </table>
            </td>
            <td> 
                <table>
                    <td> ${report.offset} </td>
                    <td> ${report.offset >= -20 && report.offset <= 20 ? success() : error()} </td>
                </table>
            </td>
            <td> ${report.user} </td>
        </tr>  `;
}
// all reports
function reportTable() {
    return `${reportsList.map((el) => report(el)).join('')} `;
};

let tableReports = $('.report table tbody');

tableReports[0].innerHTML = reportTable();

// search button
$('.filter-devices .search').click(() => {
    let device = $('.filter-devices input')[0].value;
    console.log(device);
});
// generate report button
$('.report-filters .generate-report').click((el) => {
    let filterParams = {
        period: $('.report-filters form .start-text')[0].innerText,
        radioBtn: document.filtersReport.group1.value
    };
    console.log(filterParams);

    // change table title
    $('.report table caption')[0].innerText = ucFirst(filterParams.radioBtn) + ' report';
});

function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}