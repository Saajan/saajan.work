const withPWA = require('next-pwa');
const path = require('path');
const prod = process.env.NODE_ENV === 'production';

module.exports = withPWA({
    pwa: {
        disable: prod ? false : true,
        dest: 'public'
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
})