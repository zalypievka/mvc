// MODEL: відповідає за дані — завантажує їх і перетворює у зручний формат.
export default class ModelCities {
    // Посилання на опубліковану Google Таблицю (Файл → Поділитися → Опублікувати в Інтернеті → TSV).
    // Якщо залишити порожнім, використовуються дані з DEMO_DATA нижче (формат такий самий).
    URL = '';
    SEP_LINE = '\r\n';
    SEP_CELL = '\t';

    // Власний набір даних (перший рядок — назви колонок), до якого входить прізвище автора
    DEMO_DATA = [
        ['order', 'city', 'population', 'author'],
        ['1', 'Київ', '2800000', 'Богінський'],
        ['2', 'Харків', '1419000', 'Богінський'],
        ['3', 'Одеса', '993120', 'Богінський'],
        ['4', 'Дніпро', '966400', 'Богінський'],
        ['5', 'Львів', '721301', 'Богінський'],
    ].map(row => row.join('\t')).join('\r\n');

    constructor() {

    }

    loadData() {
        if (this.URL) {
            return fetch(this.URL).then(r => r.text());
        }
        return Promise.resolve(this.DEMO_DATA);
    }

    parseData(d) {
        const tableArr = d.split(this.SEP_LINE).map(r => r.split(this.SEP_CELL));
        const names = tableArr.shift();

        const formatData = tableArr.map(el => {
            const city = {};
            names.forEach((name, i) => city[name] = el[i]);

            return city;
        });

        this.formatData = formatData;
        this.names = names;

        return { names, formatData };
    }
}
