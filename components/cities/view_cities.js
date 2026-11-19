// VIEW: відповідає за відображення — будує таблицю та виводить її на сторінку.
export default class ViewCities {
    DOM_TABLE = document.querySelector('.city-table table');

    constructor() {

    }

    renderData({ names, formatData }) {
        const html = `
            ${ this.getTableHead(names) }
            <tbody>
                ${ this.getTableBody(formatData) }
            </tbody>
        `;

        this.DOM_TABLE.innerHTML = html;
    }

    getTableHead([n, name, pop, author]) {
        return `<thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">${ name }</th>
                <th scope="col">${ pop }</th>
                <th scope="col">${ author }</th>
            </tr>
        </thead>`;
    }

    getTableBody(data) {
        return data.map(({ order, city, population, author }) => {
            return `
            <tr>
                <th scope="row">${ order }</th>
                <td>${ city }</td>
                <td>${ population }</td>
                <td>${ author }</td>
            </tr>`;
        }).join('');
    }
}
