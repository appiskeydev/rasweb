export class ProjectDashboardDb
{
    public static projects = [
        {
            'name': 'ACME Corp. Backend App'
        },
        {
            'name': 'ACME Corp. Frontend App'
        },
        {
            'name': 'Creapond'
        },
        {
            'name': 'Withinpixels'
        }
    ];

    public static widgets = {
       
    dueTask: {
        ranges: {
            dy: "Yesterday",
                dt: "Today",
                    dtm: "Tomorrow",
                        thisWeek: null,
                            lastWeek: null,
                                twoWeeks: null
        },
        currentRange: "dt",
            data: {
            label: "",
                countObj: {
                dy: 21,
                    dt: 25,
                        dtm: 19,
                            thisWeek: null,
                                lastWeek: null,
                                    twoWeeks: null,
                                        thisW: 0,
                                            lastW: 0,
                                                twoW: 0
            },
            count: 0,
                extra: {
                label: "Completed",
                    countObj: {
                    dy: 6,
                        dt: 7,
                            dtm: 0,
                                thisWeek: null,
                                    lastWeek: null,
                                        twoWeeks: null,
                                            thisW: 0,
                                                lastW: 0,
                                                    twoW: 0
                },
                count: 0
            }
        },
        detail: "You can show some detailed information about this widget in here."
    },
    overdueTask: {
        title: "Overdue",
            data: {
            label: "TASKS",
                countObj: null,
                    count: 4,
                        extra: {
                label: "Yesterday\'s overdue",
                    countObj: null,
                        count: 2
            }
        },
        detail: "You can show some detailed information about this widget in here."
    },
    openIssue: {
        title: "Issues",
            data: {
            label: "OPEN",
                countObj: null,
                    count: 32,
                        extra: {
                label: "Closed today",
                    countObj: null,
                        count: 0
            }
        },
        detail: "You can show some detailed information about this widget in here."
    },
    feature: {
        title: "Features",
            data: {
            label: "PROPOSALS",
                countObj: null,
                    count: 42,
                        extra: {
                label: "Implemented",
                    countObj: null,
                        count: 8
            }
        },
        detail: "You can show some detailed information about this widget in here."
    },
    projectIssue: {
        title: "Project Issues",
            ranges: {
            dy: null,
                dt: null,
                    dtm: null,
                        thisWeek: "This Week",
                            lastWeek: "Last Week",
                                twoWeeks: "Two Weeks Ago"
        },
        mainChart: {
            thisWeek: [
                {
                    name: "Mon",
                    series: [
                        {
                            name: "issues",
                            value: 42
                        },
                        {
                            name: "closed issues",
                            value: 11
                        }
                    ]
                },
                {
                    name: "Tue",
                    series: [
                        {
                            name: "issues",
                            value: 28
                        },
                        {
                            name: "closed issues",
                            value: 10
                        }
                    ]
                },
                {
                    name: "Wed",
                    series: [
                        {
                            name: "",
                            value: 2
                        },
                        {
                            name: "closed issues",
                            value: 8
                        }
                    ]
                },
                {
                    name: "Thu",
                    series: [
                        {
                            name: "issues",
                            value: 34
                        },
                        {
                            name: "closed issues",
                            value: 11
                        }
                    ]
                },
                {
                    name: "Fri",
                    series: [
                        {
                            name: "issues",
                            value: 20
                        },
                        {
                            name: "closed issues",
                            value: 8
                        }
                    ]
                },
                {
                    name: "Sat",
                    series: [
                        {
                            name: "issues",
                            value: 25
                        },
                        {
                            name: "closed issues",
                            value: 10
                        },
                        {
                            name: "issues",
                            value: 22
                        }
                    ]
                },
                {
                    name: "Sun",
                    series: [
                        {
                            name: "closed issues",
                            value: 17
                        }
                    ]
                }
            ],
                lastWeek: [
                    {
                        name: "Mon",
                        series: [
                            {
                                name: "issues",
                                value: 37
                            },
                            {
                                name: "closed issues",
                                value: 12
                            }
                        ]
                    },
                    {
                        name: "Thu",
                        series: [
                            {
                                name: "issues",
                                value: 24
                            },
                            {
                                name: "closed issues",
                                value: 8
                            }
                        ]
                    },
                    {
                        name: "Wed",
                        series: [
                            {
                                name: "issues",
                                value: 51
                            },
                            {
                                name: "closed issues",
                                value: 7
                            }
                        ]
                    },
                    {
                        name: "",
                        series: [
                            {
                                name: "issues",
                                value: 51
                            },
                            {
                                name: "closed issues",
                                value: 13
                            }
                        ]
                    },
                    {
                        name: "Fri",
                        series: [
                            {
                                name: "issues",
                                value: 29
                            },
                            {
                                name: "closed issues",
                                value: 7
                            }
                        ]
                    },
                    {
                        name: "Sat",
                        series: [
                            {
                                name: "issues",
                                value: 17
                            },
                            {
                                name: "closed issues",
                                value: 6
                            }
                        ]
                    },
                    {
                        name: "Sun",
                        series: [
                            {
                                name: "issues",
                                value: 31
                            },
                            {
                                name: "closed issues",
                                value: 10
                            }
                        ]
                    }
                ],
                    twoWeeksAgo: [
                        {
                            name: "Mon",
                            series: [
                                {
                                    name: "issues",
                                    value: 37
                                },
                                {
                                    name: "closed issues",
                                    value: 9
                                }
                            ]
                        },
                        {
                            name: "Tue",
                            series: [
                                {
                                    name: "issues",
                                    value: 32
                                },
                                {
                                    name: "closed issues",
                                    value: 12
                                }
                            ]
                        },
                        {
                            name: "Wed",
                            series: [
                                {
                                    name: "issues",
                                    value: 43
                                },
                                {
                                    name: "closed issues",
                                    value: 9
                                }
                            ]
                        },
                        {
                            name: "Thu",
                            series: [
                                {
                                    name: "issues",
                                    value: 27
                                },
                                {
                                    name: "closed issues",
                                    value: 12
                                }
                            ]
                        },
                        {
                            name: "Fri",
                            series: [
                                {
                                    name: "issues",
                                    value: 18
                                },
                                {
                                    name: "issues",
                                    value: 43
                                }
                            ]
                        },
                        {
                            name: "Sat",
                            series: [
                                {
                                    name: "issues",
                                    value: 24
                                },
                                {
                                    name: "closed issues",
                                    value: 8
                                }
                            ]
                        },
                        {
                            name: "Sun",
                            series: [
                                {
                                    name: "issues",
                                    value: 20
                                },
                                {
                                    name: "closed issues",
                                    value: 16
                                }
                            ]
                        }
                    ],
                        name: null,
                            value: 0,
                                list: [
                                    [
                                        {
                                            name: "Mon",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 42
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 11
                                                }
                                            ]
                                        },
                                        {
                                            name: "Tue",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 28
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 10
                                                }
                                            ]
                                        },
                                        {
                                            name: "Wed",
                                            series: [
                                                {
                                                    name: "",
                                                    value: 2
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 8
                                                }
                                            ]
                                        },
                                        {
                                            name: "Thu",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 34
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 11
                                                }
                                            ]
                                        },
                                        {
                                            name: "Fri",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 20
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 8
                                                }
                                            ]
                                        },
                                        {
                                            name: "Sat",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 25
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 10
                                                },
                                                {
                                                    name: "issues",
                                                    value: 22
                                                }
                                            ]
                                        },
                                        {
                                            name: "Sun",
                                            series: [
                                                {
                                                    name: "closed issues",
                                                    value: 17
                                                }
                                            ]
                                        }
                                    ],
                                    [
                                        {
                                            name: "Mon",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 37
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 12
                                                }
                                            ]
                                        },
                                        {
                                            name: "Thu",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 24
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 8
                                                }
                                            ]
                                        },
                                        {
                                            name: "Wed",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 51
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 7
                                                }
                                            ]
                                        },
                                        {
                                            name: "",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 51
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 13
                                                }
                                            ]
                                        },
                                        {
                                            name: "Fri",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 29
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 7
                                                }
                                            ]
                                        },
                                        {
                                            name: "Sat",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 17
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 6
                                                }
                                            ]
                                        },
                                        {
                                            name: "Sun",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 31
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 10
                                                }
                                            ]
                                        }
                                    ],
                                    [
                                        {
                                            name: "Mon",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 37
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 9
                                                }
                                            ]
                                        },
                                        {
                                            name: "Tue",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 32
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 12
                                                }
                                            ]
                                        },
                                        {
                                            name: "Wed",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 43
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 9
                                                }
                                            ]
                                        },
                                        {
                                            name: "Thu",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 27
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 12
                                                }
                                            ]
                                        },
                                        {
                                            name: "Fri",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 18
                                                },
                                                {
                                                    name: "issues",
                                                    value: 43
                                                }
                                            ]
                                        },
                                        {
                                            name: "Sat",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 24
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 8
                                                }
                                            ]
                                        },
                                        {
                                            name: "Sun",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 20
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 16
                                                }
                                            ]
                                        }
                                    ]
                                ]
        },
        supporting: {
            created: {
                label: "CREATED",
                    count: {
                    dy: 0,
                        dt: 0,
                            dtm: 0,
                                thisWeek: null,
                                    lastWeek: null,
                                        twoWeeks: null,
                                            thisW: 54,
                                                lastW: 46,
                                                    twoW: 48
                },
                chart: {
                    thisWeek: [
                        {
                            name: "Created",
                            series: [
                                {
                                    name: "Mon",
                                    value: 3
                                },
                                {
                                    name: "Tue",
                                    value: 2
                                },
                                {
                                    name: "Wed",
                                    value: 1
                                },
                                {
                                    name: "Thu",
                                    value: 4
                                },
                                {
                                    name: "Fri",
                                    value: 5
                                },
                                {
                                    name: "Sat",
                                    value: 4
                                },
                                {
                                    name: "Sun",
                                    value: 7
                                }
                            ]
                        }
                    ],
                        lastWeek: [
                            {
                                name: "Created",
                                series: [
                                    {
                                        name: "Mon",
                                        value: 6
                                    },
                                    {
                                        name: "Tue",
                                        value: 3
                                    },
                                    {
                                        name: "Wed",
                                        value: 7
                                    },
                                    {
                                        name: "Thu",
                                        value: 5
                                    },
                                    {
                                        name: "Fri",
                                        value: 5
                                    },
                                    {
                                        name: "Sat",
                                        value: 4
                                    },
                                    {
                                        name: "Sat",
                                        value: 7
                                    }
                                ]
                            }
                        ],
                            twoWeeksAgo: [
                                {
                                    name: "CREATED",
                                    series: [
                                        {
                                            name: "Mon",
                                            value: 5
                                        },
                                        {
                                            name: "Tue",
                                            value: 8
                                        },
                                        {
                                            name: "Wed",
                                            value: 5
                                        },
                                        {
                                            name: "Thu",
                                            value: 6
                                        },
                                        {
                                            name: "Tue",
                                            value: 8
                                        },
                                        {
                                            name: "Sat",
                                            value: 8
                                        },
                                        {
                                            name: "Sun",
                                            value: 7
                                        }
                                    ]
                                }
                            ]
                }
            },
            closed: {
                label: "CLOSED",
                    count: {
                    dy: 0,
                        dt: 0,
                            dtm: 0,
                                thisWeek: null,
                                    lastWeek: null,
                                        twoWeeks: null,
                                            thisW: 26,
                                                lastW: 31,
                                                    twoW: 27
                },
                chart: {
                    thisWeek: [
                        {
                            name: "Created",
                            series: [
                                {
                                    name: "Mon",
                                    value: 3
                                },
                                {
                                    name: "Tue",
                                    value: 2
                                },
                                {
                                    name: "Wed",
                                    value: 1
                                },
                                {
                                    name: "Thu",
                                    value: 4
                                },
                                {
                                    name: "Fri",
                                    value: 5
                                },
                                {
                                    name: "Sat",
                                    value: 4
                                },
                                {
                                    name: "Sun",
                                    value: 7
                                }
                            ]
                        }
                    ],
                        lastWeek: [
                            {
                                name: "Created",
                                series: [
                                    {
                                        name: "Mon",
                                        value: 6
                                    },
                                    {
                                        name: "Tue",
                                        value: 3
                                    },
                                    {
                                        name: "Wed",
                                        value: 7
                                    },
                                    {
                                        name: "Thu",
                                        value: 5
                                    },
                                    {
                                        name: "Fri",
                                        value: 5
                                    },
                                    {
                                        name: "Sat",
                                        value: 4
                                    },
                                    {
                                        name: "Sat",
                                        value: 7
                                    }
                                ]
                            }
                        ],
                            twoWeeksAgo: [
                                {
                                    name: "CREATED",
                                    series: [
                                        {
                                            name: "Mon",
                                            value: 5
                                        },
                                        {
                                            name: "Tue",
                                            value: 8
                                        },
                                        {
                                            name: "Wed",
                                            value: 5
                                        },
                                        {
                                            name: "Thu",
                                            value: 6
                                        },
                                        {
                                            name: "Tue",
                                            value: 8
                                        },
                                        {
                                            name: "Sat",
                                            value: 8
                                        },
                                        {
                                            name: "Sun",
                                            value: 7
                                        }
                                    ]
                                }
                            ]
                }
            },
            reOpened: {
                label: "RE-OPENED",
                    count: {
                    dy: 0,
                        dt: 0,
                            dtm: 0,
                                thisWeek: null,
                                    lastWeek: null,
                                        twoWeeks: null,
                                            thisW: 2,
                                                lastW: 5,
                                                    twoW: 4
                },
                chart: {
                    thisWeek: [
                        {
                            name: "Created",
                            series: [
                                {
                                    name: "Mon",
                                    value: 3
                                },
                                {
                                    name: "Tue",
                                    value: 2
                                },
                                {
                                    name: "Wed",
                                    value: 1
                                },
                                {
                                    name: "Thu",
                                    value: 4
                                },
                                {
                                    name: "Fri",
                                    value: 5
                                },
                                {
                                    name: "Sat",
                                    value: 4
                                },
                                {
                                    name: "Sun",
                                    value: 7
                                }
                            ]
                        }
                    ],
                        lastWeek: [
                            {
                                name: "Created",
                                series: [
                                    {
                                        name: "Mon",
                                        value: 6
                                    },
                                    {
                                        name: "Tue",
                                        value: 3
                                    },
                                    {
                                        name: "Wed",
                                        value: 7
                                    },
                                    {
                                        name: "Thu",
                                        value: 5
                                    },
                                    {
                                        name: "Fri",
                                        value: 5
                                    },
                                    {
                                        name: "Sat",
                                        value: 4
                                    },
                                    {
                                        name: "Sat",
                                        value: 7
                                    }
                                ]
                            }
                        ],
                            twoWeeksAgo: [
                                {
                                    name: "CREATED",
                                    series: [
                                        {
                                            name: "Mon",
                                            value: 5
                                        },
                                        {
                                            name: "Tue",
                                            value: 8
                                        },
                                        {
                                            name: "Wed",
                                            value: 5
                                        },
                                        {
                                            name: "Thu",
                                            value: 6
                                        },
                                        {
                                            name: "Tue",
                                            value: 8
                                        },
                                        {
                                            name: "Sat",
                                            value: 8
                                        },
                                        {
                                            name: "Sun",
                                            value: 7
                                        }
                                    ]
                                }
                            ]
                }
            },
            wontFix: {
                label: "WON\'T FIX",
                    count: {
                    dy: 0,
                        dt: 0,
                            dtm: 0,
                                thisWeek: null,
                                    lastWeek: null,
                                        twoWeeks: null,
                                            thisW: 4,
                                                lastW: 3,
                                                    twoW: 6
                },
                chart: {
                    thisWeek: [
                        {
                            name: "Created",
                            series: [
                                {
                                    name: "Mon",
                                    value: 3
                                },
                                {
                                    name: "Tue",
                                    value: 2
                                },
                                {
                                    name: "Wed",
                                    value: 1
                                },
                                {
                                    name: "Thu",
                                    value: 4
                                },
                                {
                                    name: "Fri",
                                    value: 5
                                },
                                {
                                    name: "Sat",
                                    value: 4
                                },
                                {
                                    name: "Sun",
                                    value: 7
                                }
                            ]
                        }
                    ],
                        lastWeek: [
                            {
                                name: "Created",
                                series: [
                                    {
                                        name: "Mon",
                                        value: 6
                                    },
                                    {
                                        name: "Tue",
                                        value: 3
                                    },
                                    {
                                        name: "Wed",
                                        value: 7
                                    },
                                    {
                                        name: "Thu",
                                        value: 5
                                    },
                                    {
                                        name: "Fri",
                                        value: 5
                                    },
                                    {
                                        name: "Sat",
                                        value: 4
                                    },
                                    {
                                        name: "Sat",
                                        value: 7
                                    }
                                ]
                            }
                        ],
                            twoWeeksAgo: [
                                {
                                    name: "CREATED",
                                    series: [
                                        {
                                            name: "Mon",
                                            value: 5
                                        },
                                        {
                                            name: "Tue",
                                            value: 8
                                        },
                                        {
                                            name: "Wed",
                                            value: 5
                                        },
                                        {
                                            name: "Thu",
                                            value: 6
                                        },
                                        {
                                            name: "Tue",
                                            value: 8
                                        },
                                        {
                                            name: "Sat",
                                            value: 8
                                        },
                                        {
                                            name: "Sun",
                                            value: 7
                                        }
                                    ]
                                }
                            ]
                }
            },
            needsTest: {
                label: "NEEDS TEST",
                    count: {
                    dy: 0,
                        dt: 0,
                            dtm: 0,
                                thisWeek: null,
                                    lastWeek: null,
                                        twoWeeks: null,
                                            thisW: 8,
                                                lastW: 7,
                                                    twoW: 10
                },
                chart: {
                    thisWeek: [
                        {
                            name: "Created",
                            series: [
                                {
                                    name: "Mon",
                                    value: 3
                                },
                                {
                                    name: "Tue",
                                    value: 2
                                },
                                {
                                    name: "Wed",
                                    value: 1
                                },
                                {
                                    name: "Thu",
                                    value: 4
                                },
                                {
                                    name: "Fri",
                                    value: 5
                                },
                                {
                                    name: "Sat",
                                    value: 4
                                },
                                {
                                    name: "Sun",
                                    value: 7
                                }
                            ]
                        }
                    ],
                        lastWeek: [
                            {
                                name: "Created",
                                series: [
                                    {
                                        name: "Mon",
                                        value: 6
                                    },
                                    {
                                        name: "Tue",
                                        value: 3
                                    },
                                    {
                                        name: "Wed",
                                        value: 7
                                    },
                                    {
                                        name: "Thu",
                                        value: 5
                                    },
                                    {
                                        name: "Fri",
                                        value: 5
                                    },
                                    {
                                        name: "Sat",
                                        value: 4
                                    },
                                    {
                                        name: "Sat",
                                        value: 7
                                    }
                                ]
                            }
                        ],
                            twoWeeksAgo: [
                                {
                                    name: "CREATED",
                                    series: [
                                        {
                                            name: "Mon",
                                            value: 5
                                        },
                                        {
                                            name: "Tue",
                                            value: 8
                                        },
                                        {
                                            name: "Wed",
                                            value: 5
                                        },
                                        {
                                            name: "Thu",
                                            value: 6
                                        },
                                        {
                                            name: "Tue",
                                            value: 8
                                        },
                                        {
                                            name: "Sat",
                                            value: 8
                                        },
                                        {
                                            name: "Sun",
                                            value: 7
                                        }
                                    ]
                                }
                            ]
                }
            },
            fixed: {
                label: "FIXED",
                    countObj: {
                    dy: 0,
                        dt: 0,
                            dtm: 0,
                                thisWeek: null,
                                    lastWeek: null,
                                        twoWeeks: null,
                                            thisW: 14,
                                                lastW: 17,
                                                    twoW: 21
                },
                chart: {
                    thisWeek: [
                        {
                            name: "Created",
                            series: [
                                {
                                    name: "Mon",
                                    value: 3
                                },
                                {
                                    name: "Tue",
                                    value: 2
                                },
                                {
                                    name: "Wed",
                                    value: 1
                                },
                                {
                                    name: "Thu",
                                    value: 4
                                },
                                {
                                    name: "Fri",
                                    value: 5
                                },
                                {
                                    name: "Sat",
                                    value: 4
                                },
                                {
                                    name: "Sun",
                                    value: 7
                                }
                            ]
                        }
                    ],
                        lastWeek: [
                            {
                                name: "Created",
                                series: [
                                    {
                                        name: "Mon",
                                        value: 6
                                    },
                                    {
                                        name: "Tue",
                                        value: 3
                                    },
                                    {
                                        name: "Wed",
                                        value: 7
                                    },
                                    {
                                        name: "Thu",
                                        value: 5
                                    },
                                    {
                                        name: "Fri",
                                        value: 5
                                    },
                                    {
                                        name: "Sat",
                                        value: 4
                                    },
                                    {
                                        name: "Sat",
                                        value: 7
                                    }
                                ]
                            }
                        ],
                            twoWeeksAgo: [
                                {
                                    name: "CREATED",
                                    series: [
                                        {
                                            name: "Mon",
                                            value: 5
                                        },
                                        {
                                            name: "Tue",
                                            value: 8
                                        },
                                        {
                                            name: "Wed",
                                            value: 5
                                        },
                                        {
                                            name: "Thu",
                                            value: 6
                                        },
                                        {
                                            name: "Tue",
                                            value: 8
                                        },
                                        {
                                            name: "Sat",
                                            value: 8
                                        },
                                        {
                                            name: "Sun",
                                            value: 7
                                        }
                                    ]
                                }
                            ]
                }
            }
        }
    },
    taskDistriibution: {
        title: "Task Distribution",
            ranges: {
            dy: null,
                dt: null,
                    dtm: null,
                        thisWeek: "This Week",
                            lastWeek: "Last Week",
                                twoWeeks: "Two Weeks Ago"
        },
        mainChart: {
            thisWeek: [
                {
                    name: "Mon",
                    series: [
                        {
                            name: "issues",
                            value: 42
                        },
                        {
                            name: "closed issues",
                            value: 11
                        }
                    ]
                },
                {
                    name: "Tue",
                    series: [
                        {
                            name: "issues",
                            value: 28
                        },
                        {
                            name: "closed issues",
                            value: 10
                        }
                    ]
                },
                {
                    name: "Wed",
                    series: [
                        {
                            name: "",
                            value: 2
                        },
                        {
                            name: "closed issues",
                            value: 8
                        }
                    ]
                },
                {
                    name: "Thu",
                    series: [
                        {
                            name: "issues",
                            value: 34
                        },
                        {
                            name: "closed issues",
                            value: 11
                        }
                    ]
                },
                {
                    name: "Fri",
                    series: [
                        {
                            name: "issues",
                            value: 20
                        },
                        {
                            name: "closed issues",
                            value: 8
                        }
                    ]
                },
                {
                    name: "Sat",
                    series: [
                        {
                            name: "issues",
                            value: 25
                        },
                        {
                            name: "closed issues",
                            value: 10
                        },
                        {
                            name: "issues",
                            value: 22
                        }
                    ]
                },
                {
                    name: "Sun",
                    series: [
                        {
                            name: "closed issues",
                            value: 17
                        }
                    ]
                }
            ],
                lastWeek: [
                    {
                        name: "Mon",
                        series: [
                            {
                                name: "issues",
                                value: 37
                            },
                            {
                                name: "closed issues",
                                value: 12
                            }
                        ]
                    },
                    {
                        name: "Thu",
                        series: [
                            {
                                name: "issues",
                                value: 24
                            },
                            {
                                name: "closed issues",
                                value: 8
                            }
                        ]
                    },
                    {
                        name: "Wed",
                        series: [
                            {
                                name: "issues",
                                value: 51
                            },
                            {
                                name: "closed issues",
                                value: 7
                            }
                        ]
                    },
                    {
                        name: "",
                        series: [
                            {
                                name: "issues",
                                value: 51
                            },
                            {
                                name: "closed issues",
                                value: 13
                            }
                        ]
                    },
                    {
                        name: "Fri",
                        series: [
                            {
                                name: "issues",
                                value: 29
                            },
                            {
                                name: "closed issues",
                                value: 7
                            }
                        ]
                    },
                    {
                        name: "Sat",
                        series: [
                            {
                                name: "issues",
                                value: 17
                            },
                            {
                                name: "closed issues",
                                value: 6
                            }
                        ]
                    },
                    {
                        name: "Sun",
                        series: [
                            {
                                name: "issues",
                                value: 31
                            },
                            {
                                name: "closed issues",
                                value: 10
                            }
                        ]
                    }
                ],
                    twoWeeksAgo: [
                        {
                            name: "Mon",
                            series: [
                                {
                                    name: "issues",
                                    value: 37
                                },
                                {
                                    name: "closed issues",
                                    value: 9
                                }
                            ]
                        },
                        {
                            name: "Tue",
                            series: [
                                {
                                    name: "issues",
                                    value: 32
                                },
                                {
                                    name: "closed issues",
                                    value: 12
                                }
                            ]
                        },
                        {
                            name: "Wed",
                            series: [
                                {
                                    name: "issues",
                                    value: 43
                                },
                                {
                                    name: "closed issues",
                                    value: 9
                                }
                            ]
                        },
                        {
                            name: "Thu",
                            series: [
                                {
                                    name: "issues",
                                    value: 27
                                },
                                {
                                    name: "closed issues",
                                    value: 12
                                }
                            ]
                        },
                        {
                            name: "Fri",
                            series: [
                                {
                                    name: "issues",
                                    value: 18
                                },
                                {
                                    name: "issues",
                                    value: 43
                                }
                            ]
                        },
                        {
                            name: "Sat",
                            series: [
                                {
                                    name: "issues",
                                    value: 24
                                },
                                {
                                    name: "closed issues",
                                    value: 8
                                }
                            ]
                        },
                        {
                            name: "Sun",
                            series: [
                                {
                                    name: "issues",
                                    value: 20
                                },
                                {
                                    name: "closed issues",
                                    value: 16
                                }
                            ]
                        }
                    ],
                        name: null,
                            value: 0,
                                list: [
                                    [
                                        {
                                            name: "Mon",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 42
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 11
                                                }
                                            ]
                                        },
                                        {
                                            name: "Tue",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 28
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 10
                                                }
                                            ]
                                        },
                                        {
                                            name: "Wed",
                                            series: [
                                                {
                                                    name: "",
                                                    value: 2
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 8
                                                }
                                            ]
                                        },
                                        {
                                            name: "Thu",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 34
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 11
                                                }
                                            ]
                                        },
                                        {
                                            name: "Fri",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 20
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 8
                                                }
                                            ]
                                        },
                                        {
                                            name: "Sat",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 25
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 10
                                                },
                                                {
                                                    name: "issues",
                                                    value: 22
                                                }
                                            ]
                                        },
                                        {
                                            name: "Sun",
                                            series: [
                                                {
                                                    name: "closed issues",
                                                    value: 17
                                                }
                                            ]
                                        }
                                    ],
                                    [
                                        {
                                            name: "Mon",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 37
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 12
                                                }
                                            ]
                                        },
                                        {
                                            name: "Thu",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 24
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 8
                                                }
                                            ]
                                        },
                                        {
                                            name: "Wed",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 51
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 7
                                                }
                                            ]
                                        },
                                        {
                                            name: "",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 51
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 13
                                                }
                                            ]
                                        },
                                        {
                                            name: "Fri",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 29
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 7
                                                }
                                            ]
                                        },
                                        {
                                            name: "Sat",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 17
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 6
                                                }
                                            ]
                                        },
                                        {
                                            name: "Sun",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 31
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 10
                                                }
                                            ]
                                        }
                                    ],
                                    [
                                        {
                                            name: "Mon",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 37
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 9
                                                }
                                            ]
                                        },
                                        {
                                            name: "Tue",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 32
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 12
                                                }
                                            ]
                                        },
                                        {
                                            name: "Wed",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 43
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 9
                                                }
                                            ]
                                        },
                                        {
                                            name: "Thu",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 27
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 12
                                                }
                                            ]
                                        },
                                        {
                                            name: "Fri",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 18
                                                },
                                                {
                                                    name: "issues",
                                                    value: 43
                                                }
                                            ]
                                        },
                                        {
                                            name: "Sat",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 24
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 8
                                                }
                                            ]
                                        },
                                        {
                                            name: "Sun",
                                            series: [
                                                {
                                                    name: "issues",
                                                    value: 20
                                                },
                                                {
                                                    name: "closed issues",
                                                    value: 16
                                                }
                                            ]
                                        }
                                    ]
                                ]
        },
        footerLeft: {
            title: "Tasks Added",
                count: {
                dy: 0,
                    dt: 0,
                        dtm: 0,
                            thisWeek: null,
                                lastWeek: null,
                                    twoWeeks: null,
                                        thisW: 594,
                                            lastW: 526,
                                                twoW: 487
            }
        },
        footerRight: {
            title: "Tasks Completed",
                count: {
                dy: 0,
                    dt: 0,
                        dtm: 0,
                            thisWeek: null,
                                lastWeek: null,
                                    twoWeeks: null,
                                        thisW: 193,
                                            lastW: 260,
                                                twoW: 287
            }
        }
    },
    schedule: {
        title: "Schedule",
            ranges: {
            dy: null,
                dt: "Today",
                    dtm: "Tomorrow",
                        thisWeek: null,
                            lastWeek: null,
                                twoWeeks: null
        },
        schedule: {
            today: [
                {
                    title: "Group Meeting",
                    time: "In 32 minutes",
                    loaction: "Room 1B"
                },
                {
                    title: "Coffee Break",
                    time: "10:30 AM",
                    loaction: "Room 1A"
                },
                {
                    title: "Public Beta Release",
                    time: "11:00 AM",
                    loaction: "Room 1B"
                },
                {
                    title: "Lunch",
                    time: "12:10 PM",
                    loaction: "Room 1B"
                },
                {
                    title: "Dinner with David",
                    time: "17:30 PM",
                    loaction: "Room 1B"
                },
                {
                    title: "Jane\'s Birthday Party",
                    time: "19:30 PM",
                    loaction: "Room 1B"
                },
                {
                    title: "Overseer\'s Retirement Party",
                    time: "21:30 PM",
                    loaction: "Room 1B"
                }
            ],
                tomorrow: [
                    {
                        title: "Marketing Meeting",
                        time: "In 32 minutes"
                    },
                    {
                        title: "Public Announcement",
                        time: "In 32 minutes"
                    },
                    {
                        title: "Lunch",
                        time: "In 32 minutes"
                    },
                    {
                        title: "Meeting with Beta Testers",
                        time: "In 32 minutes"
                    },
                    {
                        title: "Live Stream",
                        time: "In 32 minutes"
                    },
                    {
                        title: "Release Party",
                        time: "In 32 minutes"
                    },
                    {
                        title: "CEO\'s Party",
                        time: ""
                    }
                ]
        }
    },
    budgetDistribution: {
        title: "Budget Distribution",
            mainChart: []
    },
    budgetSpent: {
        title: "Spent",
            ranges: {
            dy: null,
                dt: null,
                    dtm: null,
                        thisWeek: "This Week",
                            lastWeek: "Last week",
                                twoWeeks: "Two Weeks Ago"
        },
        weeklySpent: {
            title: "' Weekly Spent",
                count: {
                dy: 0,
                    dt: 0,
                        dtm: 0,
                            thisWeek: "3,630.15",
                                lastWeek: "1,445.34",
                                    twoWeeks: "2,682.85",
                                        thisW: 0,
                                            lastW: 0,
                                                twoW: 0
            },
            chart: {
                thisWeek: [
                    {
                        name: "Created",
                        series: [
                            {
                                name: "Mon",
                                value: 3
                            },
                            {
                                name: "Tue",
                                value: 2
                            },
                            {
                                name: "Wed",
                                value: 1
                            },
                            {
                                name: "Thu",
                                value: 4
                            },
                            {
                                name: "Fri",
                                value: 5
                            },
                            {
                                name: "Sat",
                                value: 4
                            },
                            {
                                name: "Sun",
                                value: 7
                            }
                        ]
                    }
                ],
                    lastWeek: [
                        {
                            name: "Created",
                            series: [
                                {
                                    name: "Mon",
                                    value: 6
                                },
                                {
                                    name: "Tue",
                                    value: 3
                                },
                                {
                                    name: "Wed",
                                    value: 7
                                },
                                {
                                    name: "Thu",
                                    value: 5
                                },
                                {
                                    name: "Fri",
                                    value: 5
                                },
                                {
                                    name: "Sat",
                                    value: 4
                                },
                                {
                                    name: "Sat",
                                    value: 7
                                }
                            ]
                        }
                    ],
                        twoWeeksAgo: [
                            {
                                name: "CREATED",
                                series: [
                                    {
                                        name: "Mon",
                                        value: 5
                                    },
                                    {
                                        name: "Tue",
                                        value: 8
                                    },
                                    {
                                        name: "Wed",
                                        value: 5
                                    },
                                    {
                                        name: "Thu",
                                        value: 6
                                    },
                                    {
                                        name: "Tue",
                                        value: 8
                                    },
                                    {
                                        name: "Sat",
                                        value: 8
                                    },
                                    {
                                        name: "Sun",
                                        value: 7
                                    }
                                ]
                            }
                        ]
            }
        },
        totalSpent: {
            title: "'TOTAL SPENT",
                count: {
                dy: 0,
                    dt: 0,
                        dtm: 0,
                            thisWeek: "34,758.34",
                                lastWeek: "31,128.19",
                                    twoWeeks: "29,682.85",
                                        thisW: 0,
                                            lastW: 0,
                                                twoW: 0
            },
            chart: {
                thisWeek: [
                    {
                        name: "Created",
                        series: [
                            {
                                name: "Mon",
                                value: 3
                            },
                            {
                                name: "Tue",
                                value: 2
                            },
                            {
                                name: "Wed",
                                value: 1
                            },
                            {
                                name: "Thu",
                                value: 4
                            },
                            {
                                name: "Fri",
                                value: 5
                            },
                            {
                                name: "Sat",
                                value: 4
                            },
                            {
                                name: "Sun",
                                value: 7
                            }
                        ]
                    }
                ],
                    lastWeek: [
                        {
                            name: "Created",
                            series: [
                                {
                                    name: "Mon",
                                    value: 6
                                },
                                {
                                    name: "Tue",
                                    value: 3
                                },
                                {
                                    name: "Wed",
                                    value: 7
                                },
                                {
                                    name: "Thu",
                                    value: 5
                                },
                                {
                                    name: "Fri",
                                    value: 5
                                },
                                {
                                    name: "Sat",
                                    value: 4
                                },
                                {
                                    name: "Sat",
                                    value: 7
                                }
                            ]
                        }
                    ],
                        twoWeeksAgo: [
                            {
                                name: "CREATED",
                                series: [
                                    {
                                        name: "Mon",
                                        value: 5
                                    },
                                    {
                                        name: "Tue",
                                        value: 8
                                    },
                                    {
                                        name: "Wed",
                                        value: 5
                                    },
                                    {
                                        name: "Thu",
                                        value: 6
                                    },
                                    {
                                        name: "Tue",
                                        value: 8
                                    },
                                    {
                                        name: "Sat",
                                        value: 8
                                    },
                                    {
                                        name: "Sun",
                                        value: 7
                                    }
                                ]
                            }
                        ]
            }
        },
        remaining: {
            title: "REMAINING",
                count: {
                dy: 0,
                    dt: 0,
                        dtm: 0,
                            thisWeek: "89.241,66",
                                lastWeek: "92.871,81",
                                    twoWeeks: "94.317,15",
                                        thisW: 0,
                                            lastW: 0,
                                                twoW: 0
            },
            chart: {
                thisWeek: [
                    {
                        name: "Created",
                        series: [
                            {
                                name: "Mon",
                                value: 3
                            },
                            {
                                name: "Tue",
                                value: 2
                            },
                            {
                                name: "Wed",
                                value: 1
                            },
                            {
                                name: "Thu",
                                value: 4
                            },
                            {
                                name: "Fri",
                                value: 5
                            },
                            {
                                name: "Sat",
                                value: 4
                            },
                            {
                                name: "Sun",
                                value: 7
                            }
                        ]
                    }
                ],
                    lastWeek: [
                        {
                            name: "Created",
                            series: [
                                {
                                    name: "Mon",
                                    value: 6
                                },
                                {
                                    name: "Tue",
                                    value: 3
                                },
                                {
                                    name: "Wed",
                                    value: 7
                                },
                                {
                                    name: "Thu",
                                    value: 5
                                },
                                {
                                    name: "Fri",
                                    value: 5
                                },
                                {
                                    name: "Sat",
                                    value: 4
                                },
                                {
                                    name: "Sat",
                                    value: 7
                                }
                            ]
                        }
                    ],
                        twoWeeksAgo: [
                            {
                                name: "CREATED",
                                series: [
                                    {
                                        name: "Mon",
                                        value: 5
                                    },
                                    {
                                        name: "Tue",
                                        value: 8
                                    },
                                    {
                                        name: "Wed",
                                        value: 5
                                    },
                                    {
                                        name: "Thu",
                                        value: 6
                                    },
                                    {
                                        name: "Tue",
                                        value: 8
                                    },
                                    {
                                        name: "Sat",
                                        value: 8
                                    },
                                    {
                                        name: "Sun",
                                        value: 7
                                    }
                                ]
                            }
                        ]
            }
        },
        totalRemaining: {
            title: "TOTAL BUDGET",
                count: "124.000,00"
        },
        totalBudget: {
            title: "TOTAL BUDGET",
                count: "124.000,00"
        }
    },
    budgetDetail: {
        title: "Budget Details",
            table: {
            rows: [
                [
                    {
                        value: "Wireframing",
                        classes: "primary",
                        icon: "",
                        avatar: "",
                        name: "",
                        position: "",
                        office: "",
                        email: "",
                        phone: ""
                    },
                    {
                        value: "$14,880.00",
                        classes: "text-bold",
                        icon: "",
                        avatar: "",
                        name: "",
                        position: "",
                        office: "",
                        email: "",
                        phone: ""
                    },
                    {
                        value: "$14,000.00",
                        classes: "",
                        icon: "",
                        avatar: "",
                        name: "",
                        position: "",
                        office: "",
                        email: "",
                        phone: ""
                    },
                    {
                        value: "%94.08",
                        classes: "text-success",
                        icon: "trending_up",
                        avatar: "",
                        name: "",
                        position: "",
                        office: "",
                        email: "",
                        phone: ""
                    },
                    {
                        value: "$880.00",
                        classes: "",
                        icon: "",
                        avatar: "",
                        name: "",
                        position: "",
                        office: "",
                        email: "",
                        phone: ""
                    },
                    {
                        value: "%5.92",
                        classes: "",
                        icon: "",
                        avatar: "",
                        name: "",
                        position: "",
                        office: "",
                        email: "",
                        phone: ""
                    }
                ],
                [
                    {
                        value: "Design",
                        classes: "green",
                        icon: "",
                        avatar: "",
                        name: "",
                        position: "",
                        office: "",
                        email: "",
                        phone: ""
                    },
                    {
                        value: "$21,080.00",
                        classes: "text-bold",
                        icon: "",
                        avatar: "",
                        name: "",
                        position: "",
                        office: "",
                        email: "",
                        phone: ""
                    },
                    {
                        value: "$17,240.34",
                        classes: "",
                        icon: "",
                        avatar: "",
                        name: "",
                        position: "",
                        office: "",
                        email: "",
                        phone: ""
                    },
                    {
                        value: "%81.78",
                        classes: "text-success",
                        icon: "trending_up",
                        avatar: "",
                        name: "",
                        position: "",
                        office: "",
                        email: "",
                        phone: ""
                    },
                    {
                        value: "$3,839.66",
                        classes: "",
                        icon: "",
                        avatar: "",
                        name: "",
                        position: "",
                        office: "",
                        email: "",
                        phone: ""
                    },
                    {
                        value: "%18.22",
                        classes: "",
                        icon: "",
                        avatar: "",
                        name: "",
                        position: "",
                        office: "",
                        email: "",
                        phone: ""
                    }
                ],
                [
                    {
                        value: "Extra",
                        classes: "orange",
                        icon: "",
                        avatar: "",
                        name: "",
                        position: "",
                        office: "",
                        email: "",
                        phone: ""
                    },
                    {
                        value: "$18,600.00",
                        classes: "text-bold",
                        icon: "",
                        avatar: "",
                        name: "",
                        position: "",
                        office: "",
                        email: "",
                        phone: ""
                    },
                    {
                        value: "$0.00",
                        classes: "",
                        icon: "",
                        avatar: "",
                        name: "",
                        position: "",
                        office: "",
                        email: "",
                        phone: ""
                    },
                    {
                        value: "$0.00",
                        classes: "text-info",
                        icon: "trending_flat",
                        avatar: "",
                        name: "",
                        position: "",
                        office: "",
                        email: "",
                        phone: ""
                    },
                    {
                        value: "$34,720.00",
                        classes: "",
                        icon: "",
                        avatar: "",
                        name: "",
                        position: "",
                        office: "",
                        email: "",
                        phone: ""
                    },
                    {
                        value: "%100.00",
                        classes: "",
                        icon: "",
                        avatar: "",
                        name: "",
                        position: "",
                        office: "",
                        email: "",
                        phone: ""
                    }
                ]
            ],
                columns: [
                    {
                        title: "Budget Type"
                    },
                    {
                        title: "Total Budget"
                    },
                    {
                        title: "Spent ($)"
                    },
                    {
                        title: "Spent (%)"
                    },
                    {
                        title: "Remaining ($)"
                    },
                    {
                        title: "Remaining (%)"
                    }
                ]
        }
    },
    teamMember: {
        title: "Team Members",
            table: {
            rows: [
                {
                    value: "",
                    classes: "",
                    icon: "",
                    avatar: "assets/images/avatars/james.jpg",
                    name: "Jack Gilbert",
                    position: "Design Manager",
                    office: "Johor Bahru",
                    email: "jgilbert48@mail.com",
                    phone: "+16 298 032 7774"
                },
                {
                    value: "",
                    classes: "",
                    icon: "",
                    avatar: "assets/images/avatars/katherine.jpg",
                    name: "Kathy Anderson",
                    position: "Recruiting Manager",
                    office: "Solţānābād",
                    email: "kanderson49@mail.com.br",
                    phone: "+23 572 311 1136"
                },
                {
                    value: "",
                    classes: "",
                    icon: "",
                    avatar: "Wireframing",
                    name: "primary",
                    position: "primary",
                    office: "primary",
                    email: "primary",
                    phone: "primary"
                },
                {
                    value: "",
                    classes: "",
                    icon: "",
                    avatar: "assets/images/avatars/andrew.jpg",
                    name: "Mark Turner",
                    position: "Recruiting Manager",
                    office: "Neftegorsk",
                    email: "mturner4a@mail.com",
                    phone: "+01 139 803 9263"
                },
                {
                    value: "",
                    classes: "",
                    icon: "",
                    avatar: "assets/images/avatars/jane.jpg",
                    name: "Kathryn Martinez",
                    position: "Director of Sales",
                    office: "Palekastro",
                    email: "kmartinez4b@mail.com",
                    phone: "+25 467 022 5393"
                },
                {
                    value: "",
                    classes: "",
                    icon: "",
                    avatar: "assets/images/avatars/alice.jpg",
                    name: "Annie Gonzales",
                    position: "Actuary",
                    office: "Candon",
                    email: "agonzales4c@mail.edu",
                    phone: "+99 891 619 7138"
                },
                {
                    value: "",
                    classes: "",
                    icon: "",
                    avatar: "assets/images/avatars/vincent.jpg",
                    name: "Howard King",
                    position: "Human Resources",
                    office: "Bergen op Zoom",
                    email: "hking4d@mail.gov",
                    phone: "+46 984 348 1409"
                },
                {
                    value: "",
                    classes: "",
                    icon: "",
                    avatar: "assets/images/avatars/joyce.jpg",
                    name: "Elizabeth Dixon",
                    position: "Electrical Engineer",
                    office: "Písečná",
                    email: "edixon4e@mail.gov",
                    phone: "+33 332 067 9063"
                },
                {
                    value: "",
                    classes: "",
                    icon: "",
                    avatar: "assets/images/avatars/danielle.jpg",
                    name: "Dorothy Morris",
                    position: "Office Assistant",
                    office: "Magsaysay",
                    email: "dmorris4f@mail.com",
                    phone: "+05 490 958 6120"
                },
                {
                    value: "",
                    classes: "",
                    icon: "",
                    avatar: "assets/images/avatars/carl.jpg",
                    name: "Mark Gonzales",
                    position: "Quality Control",
                    office: "Matsue-shi",
                    email: "mgonzales4g@mail.com",
                    phone: "+03 168 394 9935"
                },
                {
                    value: "",
                    classes: "",
                    icon: "",
                    avatar: "assets/images/avatars/profile.jpg",
                    name: "Catherine Rogers",
                    position: "Programmer Analyst",
                    office: "Kangar",
                    email: "crogers4h@mail.com",
                    phone: "+86 235 407 5373"
                },
                {
                    value: "",
                    classes: "",
                    icon: "",
                    avatar: "assets/images/avatars/garry.jpg",
                    name: "Ruth Grant",
                    position: "Community Outreach",
                    office: "Beaune",
                    email: "rgrant4i@mail.pl",
                    phone: "+36 288 083 8460"
                },
                {
                    value: "",
                    classes: "",
                    icon: "",
                    avatar: "assets/images/avatars/james.jpg",
                    name: "Phyllis Gutierrez",
                    position: "Administrative Assistant",
                    office: "Shlissel’burg",
                    email: "pgutierrez4j@mail.net",
                    phone: "+52 749 861 9304"
                },
                {
                    value: "",
                    classes: "",
                    icon: "",
                    avatar: "assets/images/avatars/alice.jpg",
                    name: "Lillian Morris",
                    position: "Media Planner",
                    office: "Berlin",
                    email: "lmorris4k@mail.de",
                    phone: "+59 695 110 3856"
                },
                {
                    value: "",
                    classes: "",
                    icon: "",
                    avatar: "Wireframing",
                    name: "primary",
                    position: "primary",
                    office: "primary",
                    email: "primary",
                    phone: "primary"
                },
                {
                    value: "",
                    classes: "",
                    icon: "",
                    avatar: "assets/images/avatars/vincent.jpg",
                    name: "Jeremy Anderson",
                    position: "Systems Engineer",
                    office: "Lũng Hồ",
                    email: "janderson4l@mail.uk",
                    phone: "+40 384 115 1448"
                },
                {
                    value: "",
                    classes: "",
                    icon: "",
                    avatar: "assets/images/avatars/carl.jpg",
                    name: "Arthur Lawrence",
                    position: "Nurse Practicioner",
                    office: "Sarkanjut",
                    email: "alawrence4m@mail.com",
                    phone: "+36 631 599 7867"
                },
                {
                    value: "",
                    classes: "",
                    icon: "",
                    avatar: "assets/images/avatars/andrew.jpg",
                    name: "David Simmons",
                    position: "Social Worker",
                    office: "Ushumun",
                    email: "dsimmons4n@mail.com",
                    phone: "+01 189 681 4417"
                },
                {
                    value: "",
                    classes: "",
                    icon: "",
                    avatar: "assets/images/avatars/danielle.jpg",
                    name: "Daniel Johnston",
                    position: "Help Desk",
                    office: "São Carlos",
                    email: "djohnston4o@mail.gov",
                    phone: "+60 028 943 7919"
                },
                {
                    value: "",
                    classes: "",
                    icon: "",
                    avatar: "assets/images/avatars/joyce.jpg",
                    name: "Ann King",
                    position: "Internal Auditor",
                    office: "Liren",
                    email: "aking4p@mail.com",
                    phone: "+91 103 932 6545"
                },
                {
                    value: "",
                    classes: "",
                    icon: "",
                    avatar: "assets/images/avatars/james.jpg",
                    name: "Phillip Franklin",
                    position: "VP Accounting",
                    office: "Soba",
                    email: "pfranklin4q@mail.com",
                    phone: "+25 820 986 7626"
                },
                {
                    value: "",
                    classes: "",
                    icon: "",
                    avatar: "assets/images/avatars/garry.jpg",
                    name: "Gary Gonzalez",
                    position: "Speech Pathologist",
                    office: "Gangkou",
                    email: "ggonzalez4r@mail.cc",
                    phone: "+10 862 046 7916"
                }
            ],
                columns: [
                    {
                        title: "avatar"
                    },
                    {
                        title: "name"
                    },
                    {
                        title: "position"
                    },
                    {
                        title: "office"
                    },
                    {
                        title: "email"
                    },
                    {
                        title: "phone"
                    }
                ]
        }
    }
        }
    
        'weatherWidget': {
            'locations'      : {
                'NewYork': {
                    'name'           : 'New York',
                    'icon'           : 'icon-rainy2',
                    'temp'           : {
                        'C': '22',
                        'F': '72'
                    },
                    'windSpeed'      : {
                        'KMH': 12,
                        'MPH': 7.5
                    },
                    'windDirection'  : 'NW',
                    'rainProbability': '98%',
                    'next3Days'      : [
                        {
                            'name': 'Sunday',
                            'icon': 'icon-rainy',
                            'temp': {
                                'C': '21',
                                'F': '70'
                            }
                        },
                        {
                            'name': 'Sunday',
                            'icon': 'icon-cloudy',
                            'temp': {
                                'C': '19',
                                'F': '66'
                            }
                        },
                        {
                            'name': 'Tuesday',
                            'icon': 'icon-windy3',
                            'temp': {
                                'C': '24',
                                'F': '75'
                            }
                        }
                    ]
                
            },
            'currentLocation': 'NewYork',
            'tempUnit'       : 'C',
            'speedUnit'      : 'KMH'
        }
    };
}
