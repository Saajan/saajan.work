import React, { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';
import { BubbleWrapper, ChartWrapper } from './styled.jsx';

const techList = {
    "categories": [
        {
            "name": "JS Library / Framework"
        },
        {
            "name": "CSS Library / Framework"
        },
        {
            "name": "Charting"
        },
        {
            "name": "Mobile App"
        },
        {
            "name": "Web Backend"
        },
        {
            "name": "Devops"
        },
        {
            "name": "Database"
        },
        {
            "name": "Tools / Softwares"
        },
        {
            "name": "Language"
        }
    ],
    nodes: [{
        id: 0,
        name: 'React.js',
        x: -200,
        y: 10,
        symbolSize: 10,
        value: 2,
        category: 0
    }, {
        id: 1,
        name: 'Angular.js',
        x: -200,
        y: 20,
        symbolSize: 3,
        value: 2,
        category: 0
    }, {
        id: 2,
        name: 'Node.js',
        x: -100,
        y: 30,
        symbolSize: 8,
        value: 2,
        category: 2
    }, {
        id: 3,
        name: 'Rust',
        x: 100,
        y: 40,
        symbolSize: 1,
        value: 2,
        category: 6
    }, {
        id: 4,
        name: 'ElasticSearch',
        x: 100,
        y: 50,
        symbolSize: 2,
        value: 2,
        category: 5
    }, {
        id: 5,
        name: 'Microsoft Bot Framework',
        x: 100,
        y: 60,
        symbolSize: 4,
        value: 2,
        category: 5
    }, {
        id: 6,
        name: 'React-Native',
        x: 100,
        y: 70,
        symbolSize: 6,
        value: 2,
        category: 1
    }, {
        id: 7,
        name: 'Docker',
        x: 100,
        y: 80,
        symbolSize: 6,
        value: 2,
        category: 5
    }, {
        id: 8,
        name: 'Puppeteer',
        x: 100,
        y: 90,
        symbolSize: 5,
        value: 2,
        category: 5
    }, {
        id: 9,
        name: 'MongoDB',
        x: 100,
        y: 100,
        symbolSize: 6,
        value: 2,
        category: 4
    }, {
        id: 10,
        name: 'MySQL',
        x: 100,
        y: 10,
        symbolSize: 6,
        value: 2,
        category: 4
    }, {
        id: 11,
        name: 'Grunt.js',
        x: 100,
        y: 20,
        symbolSize: 5,
        value: 2,
        category: 5

    }, {
        id: 12,
        name: 'Gulp.js',
        x: 50,
        y: 30,
        symbolSize: 5,
        value: 2,
        category: 5

    }, {
        id: 13,
        name: 'Wordpress',
        x: 100,
        y: 40,
        symbolSize: 5,
        value: 2,
        category: 5

    }, {
        id: 14,
        name: 'AWS',
        x: 100,
        y: 0,
        symbolSize: 5,
        value: 2,
        category: 3

    }, {
        id: 15,
        name: 'Heroku',
        x: 100,
        y: 50,
        symbolSize: 8,
        value: 2,
        category: 3

    }, {
        id: 16,
        name: 'Git',
        x: 100,
        y: 60,
        symbolSize: 8,
        value: 2,
        category: 5

    }, {
        id: 18,
        name: 'Nginx',
        x: 100,
        y: 70,
        symbolSize: 6,
        value: 2,
        category: 3

    }, {
        id: 19,
        name: 'Express',
        x: 100,
        y: 80,
        symbolSize: 6,
        value: 2,
        category: 2

    }, {
        id: 20,
        name: 'Django',
        x: 100,
        y: 90,
        symbolSize: 4,
        value: 2,
        category: 0
    }, {
        id: 22,
        name: 'Adobe Photoshop',
        x: 100,
        y: 10,
        symbolSize: 6,
        value: 2,
        category: 0
    }, {
        id: 23,
        name: 'Javascript',
        x: -100,
        y: 20,
        symbolSize: 10,
        value: 2,
        category: 0
    },
    {
        id: 24,
        name: 'Redux',
        x: -100,
        y: 30,
        symbolSize: 8,
        value: 2,
        category: 0

    }, {
        id: 25,
        name: 'Next.js',
        x: -100,
        y: 40,
        symbolSize: 7,
        value: 2,
        category: 0

    }, {
        id: 26,
        name: 'GraphQL',
        x: -100,
        y: 50,
        symbolSize: 6,
        value: 2,
        category: 0

    }, {
        id: 27,
        name: 'PWA',
        x: -100,
        y: 60,
        symbolSize: 6,
        value: 2,
        category: 0

    },
    {
        id: 33,
        name: 'Redux-Saga',
        x: -100,
        y: 20,
        symbolSize: 7,
        value: 2,
        category: 0

    },
    {
        id: 34,
        name: 'Redux Thunk',
        x: -100,
        y: 30,
        symbolSize: 6,
        value: 2,
        category: 0

    },
    {
        id: 37,
        name: 'Native-base',
        x: -100,
        y: 50,
        symbolSize: 5,
        value: 2,
        category: 1

    },
    {
        id: 38,
        name: 'React-navigation',
        x: -100,
        y: 60,
        symbolSize: 5,
        value: 2,
        category: 1

    },
    {
        id: 39,
        name: 'Chart.js',
        x: -50,
        y: 0,
        symbolSize: 7,
        value: 2,
        category: 2

    },
    {
        id: 43,
        name: 'Apache Echarts',
        x: -50,
        y: 0,
        symbolSize: 7,
        value: 2,
        category: 2

    },
     {
        id: 29,
        name: 'D3.js',
        x: -50,
        y: 80,
        symbolSize: 4,
        value: 2,
        category: 2
    },
    {
        id: 41,
        name: 'Socket.io',
        x: -100,
        y: 70,
        symbolSize: 5,
        value: 2,
        category: 2

    },
    {
        id: 36,
        name: 'Material-UI',
        x: -100,
        y: 100,
        symbolSize: 6,
        value: 2,
        category: 1

    },
    {
        id: 42,
        name: 'Framer Motion',
        x: -100,
        y: 100,
        symbolSize: 3,
        value: 2,
        category: 1

    },
    {
        id: 21,
        name: 'Styled-Components',
        x: 50,
        y: 100,
        symbolSize: 6,
        value: 2,
        category: 1
    },
    {
        id: 28,
        name: 'Sass',
        x: 55,
        y: 100,
        symbolSize: 7,
        value: 2,
        category: 1
    }, {
        id: 30,
        name: 'Antd',
        x: 60,
        y: 100,
        symbolSize: 9,
        value: 2,
        category: 1

    }, {
        id: 31,
        name: 'Bootstrap',
        x: 65,
        y: 100,
        symbolSize: 9,
        value: 2,
        category: 1

    }, {
        id: 32,
        name: 'Semantic-UI',
        x: 70,
        y: 100,
        symbolSize: 7,
        value: 2,
        category: 1

    }],
    "links": [
        {
            "source": "1",
            "target": "0"
        }]
};

const TechMap = () => {
    const graph = techList;
    console.log({ graph });
    const options = {
        tooltip: {},
        legend: [
            {
                data: graph.categories.map(function (a) {
                    return a.name;
                })
            }
        ],
        series: [
            {
                name: 'Skill',
                type: 'graph',
                layout: 'none',
                data: graph.nodes,
                links: graph.links,
                categories: graph.categories,
                roam: true,
                label: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                },
                labelLayout: {
                    hideOverlap: true
                },
                scaleLimit: {
                    min: 0.4,
                    max: 2
                },
                lineStyle: {
                    color: 'source',
                    curveness: 0.3
                }
            }
        ]
    };
    return (
        <BubbleWrapper>
            <h3>Skill Graph</h3>
            <ChartWrapper>
                <ReactEcharts option={options}  />
            </ChartWrapper>
        </BubbleWrapper>
    );
};

export default TechMap;