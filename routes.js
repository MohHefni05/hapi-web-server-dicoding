const routes = [
    {
        method: 'GET',
        path: '/',
        // request yang menampung permintaan dari client
        // dan h adalah response Toolkit objek yang menampung method  untuk menanggapi  permintaan
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method';
        },
    },
    {
        // kegunaan ? pada {name?} agar ketika kita tidak mengisi pergi tidak pergi ke route yg any*
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = "stranger" } = request.params;
            const { lang } = request.query;

            if(lang === 'id') {
                return `Hai, ${name}!`;
            }

            return `hello, ${name}`;
        }
    },
    {
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
        const { username, password } = request.payload;
        return `Welcome ${username}!`;
    },
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },

];

module.exports = routes;