import React from 'react';
import dynamic from 'next/dynamic';

const Plot = dynamic(() => import('react-plotly.js'), {
    ssr: false
});

interface GraphProps {
    width: number;
}

export const WindGraph: React.FC<GraphProps> = ({
    width
}) => {
     

    return (
        <div>
            <Plot
                data={[
                    {
                        "type": "bar",
                        "x": [
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            9,
                            10,
                            11,
                            12,
                            13,
                            14,
                            15,
                            16,
                            17,
                            18,
                            19,
                            20,
                            21,
                            22,
                            23,
                            24,
                            25,
                            26,
                            27,
                            28,
                            29,
                            30,
                            31,
                            32,
                            33,
                            34,
                            35,
                            36,
                            37,
                            38
                        ],
                        "y": [
                            1,
                            0,
                            1,
                            1,
                            4,
                            3,
                            3,
                            6,
                            1,
                            4,
                            1,
                            2,
                            1,
                            4,
                            3,
                            2,
                            3,
                            2,
                            9,
                            14,
                            13,
                            14,
                            22,
                            19,
                            11,
                            10,
                            5,
                            3,
                            3,
                            5,
                            4,
                            5,
                            6,
                            5,
                            4,
                            2,
                            3
                        ],
                        "marker": {
                            "color": "#007ACE"
                        },
                        "showlegend": false,
                        "hoverinfo": "x+y"
                    },
                    {
                        "type": "scatter",
                        "x": [
                            [
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7,
                                8,
                                9,
                                10,
                                11,
                                12,
                                13,
                                14,
                                15,
                                16,
                                17,
                                18,
                                19,
                                20,
                                21,
                                22,
                                23,
                                24,
                                25,
                                26,
                                27,
                                28,
                                29,
                                30,
                                31,
                                32,
                                33,
                                34,
                                35,
                                36,
                                37,
                                38
                            ]
                        ],
                        "y": [
                            0
                        ],
                        "mode": "lines",
                        "line": {
                            "dash": "dash",
                            "color": "#2E5266"
                        },
                        "marker": {
                            "opacity": 0
                        },
                        "visible": true,
                        "name": "Average"
                    },
                    {
                        "type": "scatter",
                        "x": [
                            [
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7,
                                8,
                                9,
                                10,
                                11,
                                12,
                                13,
                                14,
                                15,
                                16,
                                17,
                                18,
                                19,
                                20,
                                21,
                                22,
                                23,
                                24,
                                25,
                                26,
                                27,
                                28,
                                29,
                                30,
                                31,
                                32,
                                33,
                                34,
                                35,
                                36,
                                37,
                                38
                            ]
                        ],
                        "y": [
                            0
                        ],
                        "mode": "lines",
                        "line": {
                            "dash": "dot",
                            "color": "#BD9391"
                        },
                        "marker": {
                            "opacity": 0
                        },
                        "visible": true,
                        "name": "Median"
                    },
                    {
                        "type": "scatter",
                        "mode": "lines",
                        "line": {
                            "color": "#42C4F7"
                        },
                        "y": [
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1.5110546815765338,
                            4.371583672117713,
                            7.146566008550257,
                            9.782941416496755,
                            12.23212005820552,
                            14.451467582174267,
                            16.40552556472131,
                            18.06691922043771,
                            19.416921728139876,
                            20.445663190348405,
                            21.151990882327954,
                            21.543004866248772,
                            21.633308200266864,
                            21.44402302564273,
                            21.001632194833523,
                            20.336710527586614,
                            19.48261026054726,
                            18.474162069240137,
                            17.346446698116655,
                            16.133683414249546,
                            14.868270987767326,
                            13.580005518591644,
                            12.29548796819573,
                            11.037723427648764,
                            9.825904544181963,
                            8.675363569550768
                        ],
                        "x": [
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            9,
                            10,
                            11,
                            12,
                            13,
                            14,
                            15,
                            16,
                            17,
                            18,
                            19,
                            20,
                            21,
                            22,
                            23,
                            24,
                            25,
                            26,
                            27,
                            28,
                            29,
                            30,
                            31,
                            32,
                            33,
                            34,
                            35,
                            36,
                            37,
                            38
                        ],
                        "name": "Rayleigh Fit"
                    }
                ]}
                
                layout={{
                    width,
                    height: width * 0.5 >= 400 ? 400 : width * 0.5,
                    "plot_bgcolor": "#181B23",
                    "paper_bgcolor": "#181B23",
                    "font": {
                        "color": "#fff"
                    },
                    "xaxis": {
                        "title": "Wind Speed (mph)",
                        "showgrid": false,
                        "showline": false,
                        "fixedrange": true
                    },
                    "yaxis": {
                        "showgrid": false,
                        "showline": false,
                        "zeroline": false,
                        "title": "Number of Samples",
                        "fixedrange": true
                    },
                    "autosize": true,
                    "bargap": 0.01,
                    "bargroupgap": 0,
                    "hovermode": "closest",
                    "legend": {
                        "orientation": "h",
                        "yanchor": "bottom",
                        "xanchor": "center",
                        "y": 1,
                        "x": 0.5
                    },
                    "shapes": [
                        {
                            "xref": "x",
                            "yref": "y",
                            "y1": 22.5,
                            "y0": 0,
                            "x0": 22.685723797462455,
                            "x1": 22.685723797462455,
                            "type": "line",
                            "line": {
                                "dash": "dash",
                                "color": "#2E5266",
                                "width": 5
                            }
                        },
                        {
                            "xref": "x",
                            "yref": "y",
                            "y1": 22.5,
                            "y0": 0,
                            "x0": 23.37936615225938,
                            "x1": 23.37936615225938,
                            "type": "line",
                            "line": {
                                "dash": "dot",
                                "color": "#BD9391",
                                "width": 5
                            }
                        }
                    ]
                }}
            />
        </div>
    )
}

