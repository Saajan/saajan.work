import React, { useState, useEffect } from 'react';
import { Bar, Bubble } from 'react-chartjs-2';
import { BubbleWrapper } from './styled.jsx';

const techList = [{
    label: 'React.js',
    data: [{ x: 2014, y: 7, r: 90 }],
    backgroundColor: 'rgba(75,192,192,0.5)',
}, {
    label: 'Angular.js',
    data: [{ x: 2015, y: 4, r: 80 }],
    backgroundColor: 'rgba(75,192,192,0.5)',
}, {
    label: 'Node.js',
    data: [{ x: 2013, y: 7, r: 80 }],
    backgroundColor: 'rgba(242, 65, 80,0.5)',
}, {
    label: 'Rust',
    data: [{ x: 2020, y: 1, r: 10 }],
    backgroundColor: 'rgba(242, 65, 80,0.5)',
},{
    label: 'ElasticSearch',
    data: [{ x: 2020, y: 1, r: 30 }],
    backgroundColor: 'rgba(75,192,192,0.5)',
}, {
    label: 'Microsoft Bot Framework',
    data: [{ x: 2018, y: 3, r: 70 }],
    backgroundColor: 'rgba(242, 65, 80,0.5)',
}, {
    label: 'React-Native',
    data: [{ x: 2017, y: 4, r: 70 }],
    backgroundColor: 'rgba(242, 65, 80,0.5)',
}, {
    label: 'Docker',
    data: [{ x: 2017, y: 4, r: 40 }],
    backgroundColor: 'rgba(242, 65, 80,0.5)',
}, {
    label: 'Puppeteer',
    data: [{ x: 2018, y: 2, r: 50 }],
    backgroundColor: 'rgba(242, 65, 80,0.5)',
}, {
    label: 'MongoDB',
    data: [{ x: 2016, y: 3, r: 40 }],
    backgroundColor: 'rgba(75,192,192,0.5)',
}, {
    label: 'MySQL',
    data: [{ x: 2018, y: 2, r: 30 }],
    backgroundColor: 'rgba(75,192,192,0.5)',
}, {
    label: 'Grunt.js',
    data: [{ x: 2014, y: 3, r: 50 }],
    backgroundColor: 'rgba(252, 207, 13,0.5)',

}, {
    label: 'Gulp.js',
    data: [{ x: 2015, y: 2, r: 50 }],
    backgroundColor: 'rgba(252, 207, 13,0.5)',

}, {
    label: 'Wordpress',
    data: [{ x: 2014, y: 4, r: 50 }],
    backgroundColor: 'rgba(75,192,192,0.5)',

}, {
    label: 'AWS',
    data: [{ x: 2016, y: 4, r: 50 }],
    backgroundColor: 'rgba(242, 65, 80,0.5)',

}, {
    label: 'Heroku',
    data: [{ x: 2016, y: 3, r: 60 }],
    backgroundColor: 'rgba(242, 65, 80,0.5)',

}, {
    label: 'Git',
    data: [{ x: 2014, y: 7, r: 80 }],
    backgroundColor: 'rgba(75,192,192,0.5)',

}, {
    label: 'Jenkins',
    data: [{ x: 2018, y: 3, r: 30 }],
    backgroundColor: 'rgba(242, 65, 80,0.5)',

}, {
    label: 'Nginx',
    data: [{ x: 2017, y: 4, r: 60 }],
    backgroundColor: 'rgba(242, 65, 80,0.5)',

}, {
    label: 'Express',
    data: [{ x: 2015, y: 6, r: 60 }],
    backgroundColor: 'rgba(242, 65, 80,0.5)',

}, {
    label: 'Django',
    data: [{ x: 2019, y: 2, r: 20 }],
    backgroundColor: 'rgba(242, 65, 80,0.5)',
}, {
    label: 'Styled-Components',
    data: [{ x: 2018, y: 3, r: 60 }],
    backgroundColor: 'rgba(252, 207, 13,0.5)',
}, {
    label: 'Adobe Photoshop',
    data: [{ x: 2012, y: 8, r: 40 }],
    backgroundColor: 'rgba(75,192,192,0.5)',
}, {
    label: 'Javascript',
    data: [{ x: 2013, y: 7, r: 90 }],
    backgroundColor: 'rgba(75,192,192,0.5)',
},
{
    label: 'Redux',
    data: [{ x: 2017, y: 4, r: 80 }],
    backgroundColor: 'rgba(252, 207, 13,0.5)',

},{
    label: 'Next.js',
    data: [{ x: 2019, y: 2, r: 80 }],
    backgroundColor: 'rgba(252, 207, 13,0.5)',

},{
    label: 'GraphQL',
    data: [{ x: 2019, y: 2, r: 50 }],
    backgroundColor: 'rgba(252, 207, 13,0.5)',

},{
    label: 'PWA',
    data: [{ x: 2019, y: 2, r: 70 }],
    backgroundColor: 'rgba(252, 207, 13,0.5)',

},{
    label: 'Sass',
    data: [{ x: 2019, y: 2, r: 80 }],
    backgroundColor: 'rgba(252, 207, 13,0.5)',

}];

const libraryList = [
    {
        label: 'D3.js',
        data: [{ x: 2016, y: 3, r: 40 }],
        backgroundColor: 'rgba(75,192,192,0.5)',
    }, {
        label: 'Antd',
        data: [{ x: 2018, y: 3, r: 80 }],
        backgroundColor: 'rgba(75,192,192,0.5)',

    }, {
        label: 'Bootstrap',
        data: [{ x: 2014, y: 4, r: 80 }],
        backgroundColor: 'rgba(75,192,192,0.5)',

    }, {
        label: 'Semantic-UI',
        data: [{ x: 2015, y: 2, r: 50 }],
        backgroundColor: 'rgba(75,192,192,0.5)',

    },
    {
        label: 'Redux-Saga',
        data: [{ x: 2020, y: 2, r: 50 }],
        backgroundColor: 'rgba(242, 65, 80,0.5)',

    },
    {
        label: 'Redux Thunk',
        data: [{ x: 2019, y: 1, r: 60 }],
        backgroundColor: 'rgba(242, 65, 80,0.5)',

    },
    {
        label: 'Date-fns',
        data: [{ x: 2019, y: 2, r: 60 }],
        backgroundColor: 'rgba(252, 207, 13,0.5)',

    },
    {
        label: 'Material-UI',
        data: [{ x: 2017, y: 2, r: 60 }],
        backgroundColor: 'rgba(75,192,192,0.5)',

    },
    {
        label: 'Native-base',
        data: [{ x: 2019, y: 2, r: 60 }],
        backgroundColor: 'rgba(242, 65, 80,0.5)',

    },
    {
        label: 'React-navigation',
        data: [{ x: 2019, y: 2, r: 80 }],
        backgroundColor: 'rgba(242, 65, 80,0.5)',

    },
    {
        label: 'Chart.js',
        data: [{ x: 2020, y: 1, r: 60 }],
        backgroundColor: 'rgba(75,192,192,0.5)',

    },
    {
        label: 'Axios',
        data: [{ x: 2018, y: 2, r: 60 }],
        backgroundColor: 'rgba(252, 207, 13,0.5)',

    },
    {
        label: 'Socket.io',
        data: [{ x: 2017, y: 2, r: 40 }],
        backgroundColor: 'rgba(252, 207, 13,0.5)',

    },
    {
        label: 'Framer Motion',
        data: [{ x: 2020, y: 1, r: 40 }],
        backgroundColor: 'rgba(242, 65, 80,0.5)',

    },
]

const createData = (list) => {
    const dataSet = [];

    list.map((tech) => {
        dataSet.push({
            label: tech.label,
            data: tech.data,
            lineTension: 0.1,
            backgroundColor: tech.backgroundColor,
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
        });
    });
    return {
        datasets: dataSet
    };
}

const TechMap = () => {
    const [dataList, setDataList] = useState({
        tech: techList,
        library: libraryList
    });
    const techData = createData(dataList.tech);
    const libraryData = createData(dataList.library);
    const options = {
        scales: {
            xAxes: [{
                display: true,
                labelString: 'Started Learning',
                offsetGridLines: true,
                ticks: {
                    callback: function (value, i) {
                        return value;
                    },
                },
                gridLines: {
                    display: false,
                },
            }],
            yAxes: [{
                display: true,
                labelString: 'Years of Experience',
                offsetGridLines: true,
                gridLines: {
                    display: false,
                },
            }]
        },
        legend: {
            display: true,
            position: 'right'
        }
    };
    return (
        <BubbleWrapper>
            <h3>Skill Sets</h3>
            <Bubble
                options={options}
                data={techData}
                width={400}
                height={200}
            />
            <h3>Library Used</h3>
            <Bubble
                options={options}
                data={libraryData}
                width={400}
                height={200}
            />
        </BubbleWrapper>
    );
};

export default TechMap;