count = 0;
adjmatrix = new Array();
promatrix = new Array();
re_adjmatrix = new Array();
re_promatrix = new Array();
candidate = new Array();
var R;
var echart_forced;
var echart_bar_pocc;
var option;
var eff = 0;
var re_eff = 0;
var tmp = 0;
var maxn=99,INF=9999,k=1,t=0.85;
var predict = -1,max=0;
var dic = new Array();

function show(file){
    set_block_1();
    //degree_bc chart
    degree_bc = echarts.init(document.getElementById("degree-bc"));
    degree_bc.showLoading();
    degree_bc_option = {
        title : {
            text: 'Degree-BC Chart',
            subtext: '',
        },
        grid: {
            left: '3%',
            right: '7%',
            bottom: '3%',
            containLabel: true
        },
        tooltip : {
            trigger: 'axis',
            showDelay : 0,
            formatter : function (params) {
                if (params.value.length > 1) {
                    return params.value[2] + ' :<br/>'
                       + 'Degree:'+params.value[0]+' '
                       + 'BC:'+parseFloat(params.value[1]).toFixed(2);
                }
                else {
                    return params.seriesName + ' :<br/>'
                       + params.name + ' : '
                       + parseFloat(params.value).toFixed(2) ;
                }
            },
            axisPointer:{
                show: true,
                type : 'cross',
                lineStyle: {
                    type : 'dashed',
                    width : 1
                }
            }
        },
        legend: {
            data: ['Airport','男性'],
            left: 'right'
        },
        xAxis : [
            {
                type : 'value',
                name : 'Degree',
                scale:true,
                axisLabel : {
                    formatter: '{value} '
                },
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                name : 'BC',
                scale:true,
                axisLabel : {
                    formatter: '{value} '
                },
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                }
            }
        ],
        series : [
            {
                name:'Airport',
                type:'scatter',
                data: [[2,2.98,'NGQ'],
                        [1,2.933333333,'FUO'],
                        [1,2.921212121,'YUS'],
                        [1,2.812121212,'HTN'],
                        [1,2.812121212,'KCA'],
                        [1,2.812121212,'KRY'],
                        [1,2.812121212,'AAT'],
                        [1,2.812121212,'TCG'],
                        [1,2.812121212,'NLT'],
                        [2,2.806060606,'HEK'],
                        [3,2.8,'JGD'],
                        [3,2.8,'OHE'],
                        [3,2.696969697,'WUZ'],
                        [1,2.684848485,'ENH'],
                        [1,2.648484848,'LCX'],
                        [1,2.624242424,'SYM'],
                        [1,2.624242424,'WNH'],
                        [1,2.624242424,'BSD'],
                        [1,2.624242424,'LNJ'],
                        [2,2.509090909,'GOQ'],
                        [3,2.503030303,'JGN'],
                        [2,2.503030303,'GXH'],
                        [1,2.484848485,'DCY'],
                        [1,2.484848485,'KGT'],
                        [3,2.466666667,'JNZ'],
                        [2,2.460606061,'LZY'],
                        [2,2.460606061,'BPX'],
                        [4,2.436363636,'SHP'],
                        [2,2.43030303,'AKU'],
                        [2,2.43030303,'ZAT'],
                        [2,2.43030303,'YIN'],
                        [3,2.4,'IQN'],
                        [3,2.393939394,'JUZ'],
                        [2,2.387878788,'PZI'],
                        [2,2.387878788,'HJJ'],
                        [2,2.387878788,'HZH'],
                        [3,2.381818182,'MXZ'],
                        [4,2.375757576,'DNH'],
                        [3,2.375757576,'LLF'],
                        [4,2.36969697,'TCZ'],
                        [4,2.345454545,'DLU'],
                        [3,2.339393939,'AEB'],
                        [2,2.321212121,'ZHY'],
                        [5,2.315151515,'KRL'],
                        [3,2.309090909,'XIC'],
                        [4,2.309090909,'NBS'],
                        [2,2.303030303,'CHG'],
                        [5,2.296969697,'TVS'],
                        [4,2.290909091,'KHG'],
                        [3,2.284848485,'DDG'],
                        [3,2.272727273,'XIL'],
                        [5,2.266666667,'MDG'],
                        [5,2.266666667,'YNJ'],
                        [4,2.266666667,'JXA'],
                        [4,2.260606061,'HLH'],
                        [4,2.254545455,'RLK'],
                        [4,2.242424242,'NZH'],
                        [8,2.236363636,'JHG'],
                        [4,2.236363636,'NDG'],
                        [4,2.23030303,'WUA'],
                        [6,2.23030303,'JMU'],
                        [7,2.224242424,'HLD'],
                        [5,2.224242424,'DIG'],
                        [4,2.218181818,'JIU'],
                        [7,2.2,'HSN'],
                        [8,2.2,'TGO'],
                        [4,2.2,'GYS'],
                        [5,2.2,'TEN'],
                        [4,2.193939394,'YIC'],
                        [10,2.187878788,'CIF'],
                        [5,2.187878788,'ACX'],
                        [7,2.187878788,'WEF'],
                        [7,2.181818182,'DAT'],
                        [4,2.181818182,'ENY'],
                        [7,2.175757576,'BFJ'],
                        [6,2.16969697,'HMI'],
                        [6,2.16969697,'HDG'],
                        [7,2.163636364,'AQG'],
                        [5,2.157575758,'JZH'],
                        [7,2.157575758,'HYN'],
                        [6,2.157575758,'DOY'],
                        [5,2.145454545,'DAX'],
                        [7,2.145454545,'NNY'],
                        [10,2.139393939,'NTG'],
                        [9,2.133333333,'FUG'],
                        [9,2.121212121,'XFN'],
                        [4,2.115151515,'LUM'],
                        [8,2.115151515,'WUS'],
                        [9,2.115151515,'LYA'],
                        [11,2.103030303,'YNZ'],
                        [6,2.103030303,'NAO'],
                        [11,2.096969697,'DYG'],
                        [7,2.096969697,'YBP'],
                        [6,2.096969697,'JIQ'],
                        [8,2.096969697,'CGD'],
                        [7,2.084848485,'UYN'],
                        [14,2.084848485,'LYI'],
                        [7,2.084848485,'JGS'],
                        [11,2.078787879,'CIH'],
                        [8,2.078787879,'JDZ'],
                        [11,2.078787879,'HIA'],
                        [11,2.066666667,'LZO'],
                        [12,2.054545455,'LYG'],
                        [10,2.048484848,'KOW'],
                        [8,2.042424242,'WXN'],
                        [14,2.036363636,'LXA'],
                        [15,2.036363636,'JJN'],
                        [12,2.036363636,'ZHA'],
                        [15,2.036363636,'XUZ'],
                        [14,2.024242424,'WUX'],
                        [13,2.024242424,'LZH'],
                        [9,2.024242424,'JNG'],
                        [15,2.018181818,'TXN'],
                        [13,2.018181818,'YTY'],
                        [13,2.006060606,'YIH'],
                        [21,2,'SWA'],
                        [15,2,'BHY'],
                        [16,2,'MIG'],
                        [19,1.975757576,'YNT'],
                        [17,1.963636364,'BAV'],
                        [25,1.957575758,'CGQ'],
                        [18,1.957575758,'CZX'],
                        [14,1.957575758,'YIW'],
                        [37,1.939393939,'NAY'],
                        [18,1.933333333,'YCU'],
                        [19,1.927272727,'XNN'],
                        [24,1.927272727,'LJG'],
                        [19,1.921212121,'DSN'],
                        [30,1.915151515,'ZUH'],
                        [30,1.890909091,'NNG'],
                        [29,1.890909091,'HFE'],
                        [28,1.884848485,'NGB'],
                        [28,1.878787879,'WNZ'],
                        [34,1.866666667,'HAK'],
                        [35,1.860606061,'KWL'],
                        [34,1.848484848,'FOC'],
                        [30,1.848484848,'LHW'],
                        [28,1.848484848,'INC'],
                        [37,1.848484848,'SYX'],
                        [33,1.848484848,'KHN'],
                        [33,1.836363636,'SJW'],
                        [34,1.836363636,'HET'],
                        [38,1.818181818,'URC'],
                        [45,1.818181818,'HRB'],
                        [33,1.818181818,'TNA'],
                        [48,1.812121212,'DLC'],
                        [48,1.812121212,'SHE'],
                        [41,1.806060606,'TAO'],
                        [41,1.775757576,'NKG'],
                        [44,1.763636364,'KWE'],
                        [42,1.763636364,'TYN'],
                        [43,1.751515152,'TSN'],
                        [47,1.739393939,'CGO'],
                        [54,1.739393939,'XMN'],
                        [52,1.709090909,'HGH'],
                        [53,1.690909091,'WUH'],
                        [59,1.654545455,'CSX'],
                        [62,1.654545455,'SHA'],
                        [71,1.63030303,'KMG'],
                        [70,1.593939394,'PVG'],
                        [74,1.56969697,'CKG'],
                        [73,1.56969697,'SZX'],
                        [77,1.539393939,'XIY'],
                        [84,1.490909091,'CTU'],
                        [94,1.442424242,'CAN'],
                        [108,1.35,'PEK'],
                ],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值',valueIndex: 0},
                        {type : 'average', name: '平均值',valueIndex:1},
                    ]
                }
            },
            /*
            {
                name:'男性',
                type:'scatter',
                data: [[174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8],
                    [181.5, 74.8], [184.0, 86.4], [184.5, 78.4], [175.0, 62.0], [184.0, 81.6],
                    [180.0, 76.6], [177.8, 83.6], [192.0, 90.0], [176.0, 74.6], [174.0, 71.0],
                    [184.0, 79.6], [192.7, 93.8], [171.5, 70.0], [173.0, 72.4], [176.0, 85.9],
                    [176.0, 78.8], [180.5, 77.8], [172.7, 66.2], [176.0, 86.4], [173.5, 81.8],
                    [178.0, 89.6], [180.3, 82.8], [180.3, 76.4], [164.5, 63.2], [173.0, 60.9],
                    [183.5, 74.8], [175.5, 70.0], [188.0, 72.4], [189.2, 84.1], [172.8, 69.1],
                    [170.0, 59.5], [182.0, 67.2], [170.0, 61.3], [177.8, 68.6], [184.2, 80.1],
                    [186.7, 87.8], [171.4, 84.7], [172.7, 73.4], [175.3, 72.1], [180.3, 82.6],
                    [182.9, 88.7], [188.0, 84.1], [177.2, 94.1], [172.1, 74.9], [167.0, 59.1],
                    [169.5, 75.6], [174.0, 86.2], [172.7, 75.3], [182.2, 87.1], [164.1, 55.2],
                    [163.0, 57.0], [171.5, 61.4], [184.2, 76.8], [174.0, 86.8], [174.0, 72.2],
                    [177.0, 71.6], [186.0, 84.8], [167.0, 68.2], [171.8, 66.1], [182.0, 72.0],
                    [167.0, 64.6], [177.8, 74.8], [164.5, 70.0], [192.0, 101.6], [175.5, 63.2],
                    [171.2, 79.1], [181.6, 78.9], [167.4, 67.7], [181.1, 66.0], [177.0, 68.2],
                    [174.5, 63.9], [177.5, 72.0], [170.5, 56.8], [182.4, 74.5], [197.1, 90.9],
                    [180.1, 93.0], [175.5, 80.9], [180.6, 72.7], [184.4, 68.0], [175.5, 70.9],
                    [180.6, 72.5], [177.0, 72.5], [177.1, 83.4], [181.6, 75.5], [176.5, 73.0],
                    [175.0, 70.2], [174.0, 73.4], [165.1, 70.5], [177.0, 68.9], [192.0, 102.3],
                    [176.5, 68.4], [169.4, 65.9], [182.1, 75.7], [179.8, 84.5], [175.3, 87.7],
                    [184.9, 86.4], [177.3, 73.2], [167.4, 53.9], [178.1, 72.0], [168.9, 55.5],
                    [157.2, 58.4], [180.3, 83.2], [170.2, 72.7], [177.8, 64.1], [172.7, 72.3],
                    [165.1, 65.0], [186.7, 86.4], [165.1, 65.0], [174.0, 88.6], [175.3, 84.1],
                    [185.4, 66.8], [177.8, 75.5], [180.3, 93.2], [180.3, 82.7], [177.8, 58.0],
                    [177.8, 79.5], [177.8, 78.6], [177.8, 71.8], [177.8, 116.4], [163.8, 72.2],
                    [188.0, 83.6], [198.1, 85.5], [175.3, 90.9], [166.4, 85.9], [190.5, 89.1],
                    [166.4, 75.0], [177.8, 77.7], [179.7, 86.4], [172.7, 90.9], [190.5, 73.6],
                    [185.4, 76.4], [168.9, 69.1], [167.6, 84.5], [175.3, 64.5], [170.2, 69.1],
                    [190.5, 108.6], [177.8, 86.4], [190.5, 80.9], [177.8, 87.7], [184.2, 94.5],
                    [176.5, 80.2], [177.8, 72.0], [180.3, 71.4], [171.4, 72.7], [172.7, 84.1],
                    [172.7, 76.8], [177.8, 63.6], [177.8, 80.9], [182.9, 80.9], [170.2, 85.5],
                    [167.6, 68.6], [175.3, 67.7], [165.1, 66.4], [185.4, 102.3], [181.6, 70.5],
                    [172.7, 95.9], [190.5, 84.1], [179.1, 87.3], [175.3, 71.8], [170.2, 65.9],
                    [193.0, 95.9], [171.4, 91.4], [177.8, 81.8], [177.8, 96.8], [167.6, 69.1],
                    [167.6, 82.7], [180.3, 75.5], [182.9, 79.5], [176.5, 73.6], [186.7, 91.8],
                    [188.0, 84.1], [188.0, 85.9], [177.8, 81.8], [174.0, 82.5], [177.8, 80.5],
                    [171.4, 70.0], [185.4, 81.8], [185.4, 84.1], [188.0, 90.5], [188.0, 91.4],
                    [182.9, 89.1], [176.5, 85.0], [175.3, 69.1], [175.3, 73.6], [188.0, 80.5],
                    [188.0, 82.7], [175.3, 86.4], [170.5, 67.7], [179.1, 92.7], [177.8, 93.6],
                    [175.3, 70.9], [182.9, 75.0], [170.8, 93.2], [188.0, 93.2], [180.3, 77.7],
                    [177.8, 61.4], [185.4, 94.1], [168.9, 75.0], [185.4, 83.6], [180.3, 85.5],
                    [174.0, 73.9], [167.6, 66.8], [182.9, 87.3], [160.0, 72.3], [180.3, 88.6],
                    [167.6, 75.5], [186.7, 101.4], [175.3, 91.1], [175.3, 67.3], [175.9, 77.7],
                    [175.3, 81.8], [179.1, 75.5], [181.6, 84.5], [177.8, 76.6], [182.9, 85.0],
                    [177.8, 102.5], [184.2, 77.3], [179.1, 71.8], [176.5, 87.9], [188.0, 94.3],
                    [174.0, 70.9], [167.6, 64.5], [170.2, 77.3], [167.6, 72.3], [188.0, 87.3],
                    [174.0, 80.0], [176.5, 82.3], [180.3, 73.6], [167.6, 74.1], [188.0, 85.9],
                    [180.3, 73.2], [167.6, 76.3], [183.0, 65.9], [183.0, 90.9], [179.1, 89.1],
                    [170.2, 62.3], [177.8, 82.7], [179.1, 79.1], [190.5, 98.2], [177.8, 84.1],
                    [180.3, 83.2], [180.3, 83.2]
                ],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'},
                        { xAxis: 170 }
                    ]
                }
            }
            */
        ]
    };

    degree_bc.hideLoading();
    degree_bc.setOption(degree_bc_option);

    //map_chart
    map_chart = echarts.init(document.getElementById("map"));
    map_chart.showLoading();
    var geoCoordMap = {
        'PEK':[116.584556,40.08011],
        'CTU':[103.947086,30.57852],
        'XIY':[108.751592,34.44711],
        'CKG':[106.641678,29.71921],
        'KMG':[102.743536,24.99236],
        'CAN':[113.298786,23.39243],
        'SZX':[113.810664,22.63925],
        'HGH':[120.434453,30.22950],
        'PVG':[121.805214,31.14337],
        'XMN':[118.127739,24.54403],
        'SHA':[121.336319,31.19787],
        'CSX':[113.219633,28.18915],
        'WUH':[114.2081,30.78375],
        'CGO':[113.840889,34.51967],
        'TAO':[120.374436,36.26610],
        'NKG':[118.862025,31.74204],
        'KWE':[106.800703,26.53852],
        'TSN':[117.346183,39.12435],
        'URC':[87.474244,43.90710],
        'TNA':[117.215992,36.85721],
        'DLC':[121.5386,38.96566],
        'HRB':[126.250328,45.62340],
        'SHE':[123.2901,41.382],
        'FOC':[119.663272,25.93506],
        'TYN':[112.628428,37.74689],
        'SYX':[109.412272,18.30289],
        'HAK':[110.458961,19.93485],
        'NNG':[108.172442,22.60826],
        'KWL':[110.039197,25.21810],
        'HET':[111.824103,40.85142],
        'LHW':[103.617,36.11],
        'KHN':[115.9,28.86],
        'SJW':[114.6973,38.28068],
        'WNZ':[120.852,27.912],
        'NAY':[116.387778,39.782],
        'HFE':[117.298436,31.78001],
        'NGB':[121.461906,29.82668],
        'INC':[106.009167,38.48194],
        'ZUH':[113.376,22.006],
        'LJG':[100.23333,26.88333],
        'CGQ':[125.1201,43.541],
        'XNN':[102.043,36.527],
        'YNT':[121.371667,37.40166],
        'JJN':[118.59,24.796],
        'WUX':[120.429,31.494],
        'CZX':[119.711667,31.94166],
        'SWA':[116.683,23.],
        'YCU':[110.993,35.01],
        'BAV':[109.997,40.5],
        'LXA':[90.911944,29.29777],
        'DSN':[110.033,39.8],
        'YIH':[111.441,30.67],
        'JHG':[100.759611,21.97391],
        'TXN':[118.256,29.733],
        'MIG':[104.741,31.428],
        'BHY':[109.294,21.539],
        'DYG':[110.443,29.102],
        'ZHA':[110.358,21.214],
        'YTY':[119.715,32.561],
        'YIW':[120.032,29.344],
        'NTG':[120.976,32.070],
        'LYI':[118.412,35.046],
        'XUZ':[117.11,34.1],
        'JZH':[103.683,32.85],
        'JDZ':[117.176,29.338],
        'HLD':[119.825,49.20499],
        'CIH':[113.126,36.247],
        'LYG':[119.25,34.5],
        'CIF':[118.908,42.23],
        'WUS':[118.001,27.701],
        'LZH':[109.391,24.207],
        'HYN':[121.429,28.562],
        'YNZ':[120.125,33.385],
        'XFN':[112.291,32.150],
        'TGO':[122.2,43.556],
        'LZO':[105.393,28.852],
        'KOW':[114.912,25.825],
        'KHG':[76.019956,39.54292],
        'HSN':[122.362,29.934],
        'WXN':[108.406,30.836],
        'UYN':[109.731,38.269],
        'HIA':[119.1478,33.777],
        'FUG':[115.816667,32.],
        'DAT':[113.482,40.060],
        'YNJ':[129.451258,42.882],
        'YBP':[104.544444,28.80027],
        'KRL':[86.1289,41.697],
        'JNG':[116.533,35.41],
        'HMI':[93.6692,42.841],
        'LYA':[112.28,34.4],
        'JMU':[130.465389,46.84339],
        'JGS':[114.7375,26.899],
        'DAX':[107.5,31.],
        'WUA':[106.799444,39.79444],
        'NNY':[112.615,32.980],
        'NDG':[123.918131,47.23962],
        'MDG':[129.568889,44.52388],
        'GYS':[105.702,32.391],
        'CGD':[111.64,28.918],
        'BFJ':[105.426,27.25],
        'XIL':[115.964,43.915],
        'WEF':[119.119,36.646],
        'SHP':[119.731,39.968],
        'JIQ':[108.83,29.51],
        'HLH':[122.017,46.08],
        'DNH':[94.4818,40.09],
        'DLU':[100.319444,25.64944],
        'DIG':[99.6772,27.793],
        'AQG':[117.0502,30.582],
        'YIC':[114.3081,27.803],
        'TVS':[118.002389,39.71744],
        'NAO':[106.062,30.75],
        'LUM':[98.5317,24.401],
        'JXA':[130.99667,45.3061],
        'JUZ':[118.899,28.965],
        'JIU':[115.983,29.73],
        'IQN':[107.603,35.799],
        'HTN':[79.864933,37.03852],
        'HDG':[114.43,36.52],
        'DOY':[118.2819,37.271],
        'ACX':[104.9587,25.088],
        'XIC':[102.184361,27.98908],
        'TEN':[109.31,27.88],
        'TCZ':[98.483591,24.93865],
        'RLK':[107.738889,40.92638],
        'NZH':[117.329444,49.56666],
        'LZY':[94.3353,29.303],
        'JNZ':[121.062,41.101],
        'JGN':[98.3414,39.856],
        'ENY':[109.554,36.636],
        'DDG':[124.2866,40.025],
        'AKU':[80.2917,41.262],
        'YIN':[81.3303,43.955],
        'PZI':[101.799,26.5],
        'NBS':[127.548889,42.08805],
        'JGD':[124.117,50.37],
        'DCY':[100.0533,29.323],
        'ZAT':[103.755,27.325],
        'WUZ':[111.248,23.456],
        'SYM':[100.959,22.793],
        'OHE':[122.427,52.91],
        'MXZ':[116.133,24.3],
        'LLF':[111.612222,26.34555],
        'HZH':[109.039,26.20],
        'HJJ':[109.699722,27.44138],
        'HEK':[127.3,50.2],
        'ENH':[109.485,30.320],
        'CHG':[120.435,41.538],
        'BPX':[97.1083,30.553],
        'AEB':[106.96,23.7],
        'ZHY':[105.1544,37.572],
        'YUS':[97.125,32.82],
        'WNH':[104.243056,23.37583],
        'TCG':[83.3408,46.672],
        'NLT':[83.380278,43.43305],
        'NGQ':[80.052778,32.1002],
        'LNJ':[100.025,23.73833],
        'KRY':[84.883,45.61],
        'KCA':[82.9869,41.718],
        'GXH':[102.3719,34.490],
        'GOQ':[98.867,34.63],
        'FUO':[113.28333,23.13333],
        'BSD':[99.168333,25.05333],
        'AAT':[88.116667,47.86666],
        'LCX':[116.746389,25.67416],
        'KGT':[101.734722,30.1],
    };
    var Data=[
        [{name:'CGO'},{name:'HGH',value:10}],
        [{name:'JHG'},{name:'KMG',value:10}],
        [{name:'CKG'},{name:'XIY',value:10}],
        [{name:'CGO'},{name:'URC',value:9}],
        [{name:'CKG'},{name:'KMG',value:9}],
        [{name:'KHG'},{name:'URC',value:9}],
        [{name:'URC'},{name:'XIY',value:9}],
        [{name:'XIY'},{name:'XNN',value:9}],
        [{name:'CAN'},{name:'HGH',value:9}],
        [{name:'DLC'},{name:'HGH',value:9}],
        [{name:'KMG'},{name:'XIY',value:8}],
        [{name:'HGH'},{name:'PEK',value:8}],
        [{name:'KWE'},{name:'XIY',value:8}],
        [{name:'CTU'},{name:'KMG',value:8}],
        [{name:'HRB'},{name:'TSN',value:8}],
        [{name:'FOC'},{name:'NKG',value:8}],
        [{name:'HGH'},{name:'TAO',value:8}],
        [{name:'CTU'},{name:'HGH',value:8}],
        [{name:'HGH'},{name:'KMG',value:8}],
        [{name:'KMG'},{name:'NKG',value:8}],
        [{name:'LHW'},{name:'URC',value:8}],
        [{name:'KMG'},{name:'XMN',value:8}],
        [{name:'NKG'},{name:'XMN',value:8}],
        [{name:'CSX'},{name:'KMG',value:8}],
        [{name:'CSX'},{name:'XMN',value:8}],
        [{name:'KMG'},{name:'WUH',value:8}],
        [{name:'INC'},{name:'PEK',value:8}],
        [{name:'KMG'},{name:'KWE',value:7}],
        [{name:'HGH'},{name:'SJW',value:7}],
        [{name:'CTU'},{name:'WUH',value:7}],
        [{name:'CTU'},{name:'XIY',value:7}],
        [{name:'CKG'},{name:'SHA',value:7}],
        [{name:'DLC'},{name:'PVG',value:7}],
        [{name:'HGH'},{name:'SYX',value:7}],
        [{name:'XIY'},{name:'XMN',value:7}],
        [{name:'TNA'},{name:'XIY',value:7}],
        [{name:'CTU'},{name:'TNA',value:7}],
        [{name:'CSX'},{name:'XIY',value:7}],
        [{name:'TAO'},{name:'XIY',value:7}],
        [{name:'WUH'},{name:'XMN',value:7}],
        [{name:'PEK'},{name:'SHA',value:7}],
        [{name:'CKG'},{name:'LJG',value:7}],
        [{name:'CKG'},{name:'XNN',value:7}],
        [{name:'CTU'},{name:'SHA',value:7}],
        [{name:'CTU'},{name:'SZX',value:7}],
        [{name:'CGO'},{name:'KMG',value:7}],
        [{name:'SHE'},{name:'TAO',value:7}],
        [{name:'DLC'},{name:'TSN',value:7}],
        [{name:'NNG'},{name:'WUH',value:7}],
        [{name:'CKG'},{name:'LXA',value:7}],
        [{name:'HGH'},{name:'KWL',value:7}],
        [{name:'TSN'},{name:'XIY',value:7}],
        [{name:'HRB'},{name:'TNA',value:7}],
        [{name:'SHA'},{name:'SZX',value:7}],
        [{name:'HFE'},{name:'XMN',value:7}],
        [{name:'PVG'},{name:'XIY',value:7}],
        [{name:'SHA'},{name:'TSN',value:7}],
        [{name:'CTU'},{name:'JZH',value:7}],
        [{name:'HGH'},{name:'XIY',value:7}],
        [{name:'CGO'},{name:'KWE',value:7}],
        [{name:'CKG'},{name:'TSN',value:7}],
        [{name:'CAN'},{name:'SHA',value:7}],
        [{name:'CAN'},{name:'CKG',value:7}],
        [{name:'KWL'},{name:'PVG',value:7}],
        [{name:'KWL'},{name:'XIY',value:7}],
        [{name:'CKG'},{name:'HGH',value:6}],
        [{name:'DLC'},{name:'TNA',value:6}],
        [{name:'CAN'},{name:'PVG',value:6}],
        [{name:'CGO'},{name:'HRB',value:6}],
        [{name:'CKG'},{name:'PVG',value:6}],
        [{name:'CTU'},{name:'PVG',value:6}],
        [{name:'HGH'},{name:'KWE',value:6}],
        [{name:'KMG'},{name:'TNA',value:6}],
        [{name:'HGH'},{name:'SHE',value:6}],
        [{name:'CTU'},{name:'TSN',value:6}],
        [{name:'HTN'},{name:'URC',value:6}],
        [{name:'PEK'},{name:'XMN',value:6}],
        [{name:'CSX'},{name:'NKG',value:6}],
        [{name:'TAO'},{name:'WUH',value:6}],
        [{name:'NNG'},{name:'XMN',value:6}],
        [{name:'CTU'},{name:'XMN',value:6}],
        [{name:'CKG'},{name:'PEK',value:6}],
        [{name:'CAN'},{name:'WNZ',value:6}],
        [{name:'HRB'},{name:'TAO',value:6}],
        [{name:'CKG'},{name:'URC',value:6}],
        [{name:'NKG'},{name:'XIY',value:6}],
        [{name:'HAK'},{name:'HGH',value:6}],
        [{name:'CAN'},{name:'XMN',value:6}],
        [{name:'HET'},{name:'TSN',value:6}],
        [{name:'CSX'},{name:'CTU',value:6}],
        [{name:'CGO'},{name:'DLC',value:6}],
        [{name:'KWE'},{name:'SHA',value:6}],
        [{name:'KMG'},{name:'PEK',value:6}],
        [{name:'CSX'},{name:'FOC',value:6}],
        [{name:'CKG'},{name:'KWL',value:6}],
        [{name:'SHA'},{name:'URC',value:6}],
        [{name:'KMG'},{name:'LJG',value:6}],
        [{name:'LHW'},{name:'XIY',value:6}],
        [{name:'INC'},{name:'XIY',value:6}],
        [{name:'CTU'},{name:'KWE',value:6}],
        [{name:'KMG'},{name:'SZX',value:6}],
        [{name:'NKG'},{name:'SHE',value:6}],
        [{name:'SZX'},{name:'TSN',value:6}],
        [{name:'CAN'},{name:'NKG',value:6}],
        [{name:'SHA'},{name:'TAO',value:6}],
        [{name:'CKG'},{name:'SZX',value:6}],
        [{name:'KWL'},{name:'XMN',value:6}],
        [{name:'CGO'},{name:'CKG',value:6}],
        [{name:'CAN'},{name:'CTU',value:6}],
        [{name:'CSX'},{name:'KWE',value:6}],
        [{name:'HGH'},{name:'SZX',value:6}],
        [{name:'CGO'},{name:'KWL',value:6}],
        [{name:'CKG'},{name:'WUH',value:6}],
        [{name:'CKG'},{name:'CSX',value:6}],
        [{name:'KMG'},{name:'NNG',value:6}],
        [{name:'HRB'},{name:'PEK',value:6}],
        [{name:'SHA'},{name:'XMN',value:6}],
        [{name:'PVG'},{name:'TAO',value:6}],
        [{name:'KMG'},{name:'PVG',value:6}],
        [{name:'PVG'},{name:'SHE',value:5}],
        [{name:'CKG'},{name:'WNZ',value:5}],
        [{name:'CTU'},{name:'LXA',value:5}],
        [{name:'CTU'},{name:'LJG',value:5}],
        [{name:'DLC'},{name:'PEK',value:5}],
        [{name:'PEK'},{name:'XIY',value:5}],
        [{name:'SHE'},{name:'TNA',value:5}],
        [{name:'INC'},{name:'PVG',value:5}],
        [{name:'PEK'},{name:'WUH',value:5}],
        [{name:'KWL'},{name:'PEK',value:5}],
        [{name:'CKG'},{name:'SYX',value:5}],
        [{name:'CGO'},{name:'HAK',value:5}],
        [{name:'WNZ'},{name:'XIY',value:5}],
        [{name:'HRB'},{name:'PVG',value:5}],
        [{name:'HGH'},{name:'TYN',value:5}],
        [{name:'CAN'},{name:'KMG',value:5}],
        [{name:'HLD'},{name:'PEK',value:5}],
        [{name:'CTU'},{name:'XNN',value:5}],
        [{name:'HGH'},{name:'LJG',value:5}],
        [{name:'LHW'},{name:'PEK',value:5}],
        [{name:'FOC'},{name:'XIY',value:5}],
        [{name:'KWE'},{name:'SZX',value:5}],
        [{name:'CAN'},{name:'TAO',value:5}],
        [{name:'CTU'},{name:'TAO',value:5}],
        [{name:'HGH'},{name:'XMN',value:5}],
        [{name:'CKG'},{name:'NKG',value:5}],
        [{name:'JHG'},{name:'LJG',value:5}],
        [{name:'NGB'},{name:'PEK',value:5}],
        [{name:'HAK'},{name:'NKG',value:5}],
        [{name:'FOC'},{name:'TNA',value:5}],
        [{name:'HET'},{name:'HLD',value:5}],
        [{name:'CTU'},{name:'HAK',value:5}],
        [{name:'CTU'},{name:'URC',value:5}],
        [{name:'CGQ'},{name:'PEK',value:5}],
        [{name:'PEK'},{name:'XNN',value:5}],
        [{name:'CAN'},{name:'HAK',value:5}],
        [{name:'CGQ'},{name:'PVG',value:5}],
        [{name:'SYX'},{name:'XMN',value:5}],
        [{name:'HGH'},{name:'TSN',value:5}],
        [{name:'CKG'},{name:'XMN',value:5}],
        [{name:'PVG'},{name:'SZX',value:5}],
        [{name:'CSX'},{name:'HGH',value:5}],
        [{name:'CTU'},{name:'PEK',value:5}],
        [{name:'CSX'},{name:'SHA',value:5}],
        [{name:'DLC'},{name:'XIY',value:5}],
        [{name:'CTU'},{name:'NKG',value:5}],
        [{name:'KWE'},{name:'PVG',value:5}],
        [{name:'CSX'},{name:'TSN',value:5}],
        [{name:'CTU'},{name:'TYN',value:5}],
        [{name:'CTU'},{name:'SYX',value:5}],
        [{name:'CKG'},{name:'HAK',value:5}],
        [{name:'NNG'},{name:'SZX',value:5}],
        [{name:'CSX'},{name:'SYX',value:5}],
        [{name:'CGQ'},{name:'NKG',value:5}],
        [{name:'CKG'},{name:'KWE',value:5}],
        [{name:'FOC'},{name:'HAK',value:5}],
        [{name:'CKG'},{name:'TNA',value:5}],
        [{name:'CSX'},{name:'NGB',value:5}],
        [{name:'DLC'},{name:'TAO',value:5}],
        [{name:'CGO'},{name:'XNN',value:5}],
        [{name:'NNG'},{name:'XIY',value:5}],
        [{name:'HAK'},{name:'PVG',value:5}],
        [{name:'FOC'},{name:'PEK',value:5}],
        [{name:'NGB'},{name:'TAO',value:5}],
        [{name:'HAK'},{name:'PEK',value:5}],
        [{name:'CGO'},{name:'XMN',value:5}],
        [{name:'CAN'},{name:'TNA',value:5}],
        [{name:'SHA'},{name:'XIY',value:5}],
        [{name:'KMG'},{name:'SHA',value:5}],
        [{name:'CAN'},{name:'XIY',value:5}],
        [{name:'NKG'},{name:'SZX',value:5}],
        [{name:'LJG'},{name:'XIY',value:5}],
        [{name:'CSX'},{name:'PEK',value:5}],
        [{name:'SZX'},{name:'XIY',value:5}],
        [{name:'KHN'},{name:'SZX',value:5}],
        [{name:'CGQ'},{name:'TNA',value:5}],
        [{name:'KWE'},{name:'WUH',value:5}],
        [{name:'CGO'},{name:'SYX',value:5}],
        [{name:'HRB'},{name:'XIY',value:5}],
        [{name:'CAN'},{name:'HFE',value:5}],
        [{name:'SHA'},{name:'SJW',value:5}],
        [{name:'PEK'},{name:'TAO',value:5}],
        [{name:'HRB'},{name:'YNT',value:5}],
        [{name:'CAN'},{name:'TSN',value:5}],
        [{name:'TSN'},{name:'XMN',value:5}],
        [{name:'CAN'},{name:'KHN',value:5}],
        [{name:'CGQ'},{name:'TAO',value:5}],
        [{name:'PVG'},{name:'SYX',value:5}],
        [{name:'HGH'},{name:'WUH',value:5}],
        [{name:'SHE'},{name:'XIY',value:5}],
        [{name:'CGO'},{name:'TAO',value:5}],
        [{name:'DLC'},{name:'NKG',value:5}],
        [{name:'NNG'},{name:'SHA',value:5}],
        [{name:'ZUH'},{name:'PVG',value:5}],
        /*
        [{name:'KHN'},{name:'PEK',value:4}],
        [{name:'CTU'},{name:'FOC',value:4}],
        [{name:'CKG'},{name:'KHN',value:4}],
        [{name:'CAN'},{name:'JJN',value:4}],
        [{name:'DLC'},{name:'TYN',value:4}],
        [{name:'HSN'},{name:'JJN',value:4}],
        [{name:'TSN'},{name:'WUH',value:4}],
        [{name:'CGO'},{name:'CTU',value:4}],
        [{name:'CSX'},{name:'LHW',value:4}],
        [{name:'PVG'},{name:'XMN',value:4}],
        [{name:'KWL'},{name:'NKG',value:4}],
        [{name:'SZX'},{name:'TAO',value:4}],
        [{name:'SHA'},{name:'WUH',value:4}],
        [{name:'CGO'},{name:'NNG',value:4}],
        [{name:'SJW'},{name:'SZX',value:4}],
        [{name:'CAN'},{name:'HET',value:4}],
        [{name:'SZX'},{name:'WNZ',value:4}],
        [{name:'CTU'},{name:'LHW',value:4}],
        [{name:'TAO'},{name:'TYN',value:4}],
        [{name:'KWE'},{name:'NKG',value:4}],
        [{name:'KMG'},{name:'SJW',value:4}],
        [{name:'FOC'},{name:'ZUH',value:4}],
        [{name:'UYN'},{name:'XIY',value:4}],
        [{name:'TAO'},{name:'WNZ',value:4}],
        [{name:'HFE'},{name:'TAO',value:4}],
        [{name:'KWL'},{name:'NGB',value:4}],
        [{name:'LJG'},{name:'PEK',value:4}],
        [{name:'CAN'},{name:'PEK',value:4}],
        [{name:'CGO'},{name:'LHW',value:4}],
        [{name:'CGO'},{name:'FOC',value:4}],
        [{name:'CSX'},{name:'TNA',value:4}],
        [{name:'PEK'},{name:'SHE',value:4}],
        [{name:'SJW'},{name:'TAO',value:4}],
        [{name:'HAK'},{name:'KMG',value:4}],
        [{name:'CTU'},{name:'WUX',value:4}],
        [{name:'SHA'},{name:'YNT',value:4}],
        [{name:'DLC'},{name:'WUH',value:4}],
        [{name:'PEK'},{name:'SYX',value:4}],
        [{name:'SHA'},{name:'TYN',value:4}],
        [{name:'SZX'},{name:'TYN',value:4}],
        [{name:'KHN'},{name:'KMG',value:4}],
        [{name:'SJW'},{name:'XIY',value:4}],
        [{name:'INC'},{name:'WUH',value:4}],
        [{name:'TNA'},{name:'XMN',value:4}],
        [{name:'CTU'},{name:'HFE',value:4}],
        [{name:'WNZ'},{name:'WUH',value:4}],
        [{name:'NGB'},{name:'SZX',value:4}],
        [{name:'FOC'},{name:'KWL',value:4}],
        [{name:'LHW'},{name:'TYN',value:4}],
        [{name:'HFE'},{name:'XIY',value:4}],
        [{name:'CZX'},{name:'SZX',value:4}],
        [{name:'NNG'},{name:'SYX',value:4}],
        [{name:'HAK'},{name:'SZX',value:4}],
        [{name:'HET'},{name:'TNA',value:4}],
        [{name:'XMN'},{name:'ZUH',value:4}],
        [{name:'KRL'},{name:'URC',value:4}],
        [{name:'NNG'},{name:'PEK',value:4}],
        [{name:'PEK'},{name:'SZX',value:4}],
        [{name:'FOC'},{name:'SHA',value:4}],
        [{name:'SZX'},{name:'XMN',value:4}],
        [{name:'KMG'},{name:'TYN',value:4}],
        [{name:'CAN'},{name:'KWE',value:4}],
        [{name:'MDG'},{name:'PEK',value:4}],
        [{name:'JJN'},{name:'SZX',value:4}],
        [{name:'FOC'},{name:'NNG',value:4}],
        [{name:'KWE'},{name:'PEK',value:4}],
        [{name:'HGH'},{name:'JJN',value:4}],
        [{name:'CKG'},{name:'NNG',value:4}],
        [{name:'CGO'},{name:'SZX',value:4}],
        [{name:'CKG'},{name:'INC',value:4}],
        [{name:'PEK'},{name:'PVG',value:4}],
        [{name:'HAK'},{name:'NNG',value:4}],
        [{name:'PEK'},{name:'URC',value:4}],
        [{name:'CTU'},{name:'KWL',value:4}],
        [{name:'CGO'},{name:'TSN',value:4}],
        [{name:'HGH'},{name:'TNA',value:4}],
        [{name:'DLC'},{name:'NGB',value:4}],
        [{name:'SYX'},{name:'WUH',value:4}],
        [{name:'HFE'},{name:'SZX',value:4}],
        [{name:'SZX'},{name:'TNA',value:4}],
        [{name:'PVG'},{name:'WUH',value:4}],
        [{name:'CTU'},{name:'KHN',value:4}],
        [{name:'CAN'},{name:'WUH',value:4}],
        [{name:'CAN'},{name:'WUX',value:4}],
        [{name:'PEK'},{name:'YIH',value:4}],
        [{name:'INC'},{name:'URC',value:4}],
        [{name:'HFE'},{name:'KMG',value:4}],
        [{name:'CSX'},{name:'TAO',value:4}],
        [{name:'SYX'},{name:'SZX',value:4}],
        [{name:'CAN'},{name:'CGO',value:4}],
        [{name:'SZX'},{name:'WUH',value:4}],
        [{name:'HET'},{name:'HGH',value:4}],
        [{name:'SZX'},{name:'WUX',value:4}],
        [{name:'LHW'},{name:'TNA',value:4}],
        [{name:'SHA'},{name:'ZUH',value:4}],
        [{name:'KWE'},{name:'SYX',value:4}],
        [{name:'HET'},{name:'PEK',value:4}],
        [{name:'SHE'},{name:'TYN',value:4}],
        [{name:'CTU'},{name:'WNZ',value:4}],
        [{name:'SHA'},{name:'SWA',value:4}],
        [{name:'CTU'},{name:'LZY',value:4}],
        [{name:'KHN'},{name:'XIY',value:4}],
        [{name:'CSX'},{name:'HAK',value:4}],
        [{name:'CSX'},{name:'WNZ',value:4}],
        [{name:'CTU'},{name:'DCY',value:4}],
        [{name:'CKG'},{name:'WUX',value:4}],
        [{name:'TNA'},{name:'URC',value:4}],
        [{name:'HGH'},{name:'NNG',value:4}],
        [{name:'PEK'},{name:'YNT',value:4}],
        [{name:'PEK'},{name:'WNZ',value:4}],
        [{name:'CKG'},{name:'SJW',value:4}],
        [{name:'CSX'},{name:'NNG',value:4}],
        [{name:'TAO'},{name:'XMN',value:4}],
        [{name:'TNA'},{name:'WUH',value:4}],
        [{name:'PVG'},{name:'NNG',value:4}],
        [{name:'PVG'},{name:'WNZ',value:3}],
        [{name:'KMG'},{name:'KWL',value:3}],
        [{name:'SHE'},{name:'WUH',value:3}],
        [{name:'HAK'},{name:'WUH',value:3}],
        [{name:'PEK'},{name:'ZUH',value:3}],
        [{name:'HRB'},{name:'SZX',value:3}],
        [{name:'DLC'},{name:'HFE',value:3}],
        [{name:'CAN'},{name:'SYX',value:3}],
        [{name:'CKG'},{name:'JZH',value:3}],
        [{name:'KMG'},{name:'WNZ',value:3}],
        [{name:'PEK'},{name:'WUA',value:3}],
        [{name:'PEK'},{name:'WUX',value:3}],
        [{name:'CAN'},{name:'FOC',value:3}],
        [{name:'SZX'},{name:'XFN',value:3}],
        [{name:'CKG'},{name:'FOC',value:3}],
        [{name:'FOC'},{name:'TAO',value:3}],
        [{name:'CAN'},{name:'HYN',value:3}],
        [{name:'KHN'},{name:'NNG',value:3}],
        [{name:'CTU'},{name:'XIC',value:3}],
        [{name:'FOC'},{name:'KMG',value:3}],
        [{name:'SHE'},{name:'SJW',value:3}],
        [{name:'CZX'},{name:'PEK',value:3}],
        [{name:'SZX'},{name:'YIH',value:3}],
        [{name:'CSX'},{name:'TYN',value:3}],
        [{name:'CAN'},{name:'NGB',value:3}],
        [{name:'HAK'},{name:'KHN',value:3}],
        [{name:'HRB'},{name:'KHN',value:3}],
        [{name:'CKG'},{name:'NGB',value:3}],
        [{name:'KWE'},{name:'ZUH',value:3}],
        [{name:'KMG'},{name:'TSN',value:3}],
        [{name:'KMG'},{name:'TAO',value:3}],
        [{name:'CGO'},{name:'CGQ',value:3}],
        [{name:'HRB'},{name:'SJW',value:3}],
        [{name:'HAK'},{name:'KWL',value:3}],
        [{name:'HAK'},{name:'KWE',value:3}],
        [{name:'KHN'},{name:'XMN',value:3}],
        [{name:'HET'},{name:'WUH',value:3}],
        [{name:'LJG'},{name:'WUH',value:3}],
        [{name:'DLC'},{name:'HRB',value:3}],
        [{name:'NKG'},{name:'NNG',value:3}],
        [{name:'CTU'},{name:'NGB',value:3}],
        [{name:'WUX'},{name:'XMN',value:3}],
        [{name:'SHE'},{name:'SZX',value:3}],
        [{name:'URC'},{name:'WUH',value:3}],
        [{name:'CZX'},{name:'HRB',value:3}],
        [{name:'NKG'},{name:'TAO',value:3}],
        [{name:'BAV'},{name:'SJW',value:3}],
        [{name:'CGO'},{name:'INC',value:3}],
        [{name:'CIH'},{name:'TYN',value:3}],
        [{name:'LHW'},{name:'WUH',value:3}],
        [{name:'DLU'},{name:'KMG',value:3}],
        [{name:'PVG'},{name:'TSN',value:3}],
        [{name:'HAK'},{name:'ZUH',value:3}],
        [{name:'HMI'},{name:'URC',value:3}],
        [{name:'CAN'},{name:'HRB',value:3}],
        [{name:'CTU'},{name:'PZI',value:3}],
        [{name:'TYN'},{name:'URC',value:3}],
        [{name:'JJN'},{name:'NKG',value:3}],
        [{name:'HET'},{name:'XIL',value:3}],
        [{name:'HET'},{name:'XIY',value:3}],
        [{name:'CTU'},{name:'SJW',value:3}],
        [{name:'HGH'},{name:'LHW',value:3}],
        [{name:'FOC'},{name:'WUH',value:3}],
        [{name:'PVG'},{name:'YNT',value:3}],
        [{name:'SHA'},{name:'WNZ',value:3}],
        [{name:'JZH'},{name:'PVG',value:3}],
        [{name:'NKG'},{name:'YNT',value:3}],
        [{name:'CGO'},{name:'HET',value:3}],
        [{name:'IQN'},{name:'LHW',value:3}],
        [{name:'DIG'},{name:'KMG',value:3}],
        [{name:'CSX'},{name:'HFE',value:3}],
        [{name:'TXN'},{name:'XMN',value:3}],
        [{name:'KHN'},{name:'TAO',value:3}],
        [{name:'KMG'},{name:'LUM',value:3}],
        [{name:'NGB'},{name:'XMN',value:3}],
        [{name:'FOC'},{name:'KWE',value:3}],
        [{name:'CAN'},{name:'NNG',value:3}],
        [{name:'JMU'},{name:'PEK',value:3}],
        [{name:'PEK'},{name:'TYN',value:3}],
        [{name:'CTU'},{name:'SHE',value:3}],
        [{name:'AKU'},{name:'URC',value:3}],
        [{name:'CAN'},{name:'TYN',value:3}],
        [{name:'CKG'},{name:'LHW',value:3}],
        [{name:'WUX'},{name:'XIY',value:3}],
        [{name:'KWE'},{name:'XMN',value:3}],
        [{name:'DAT'},{name:'TYN',value:3}],
        [{name:'BAV'},{name:'TSN',value:3}],
        [{name:'KMG'},{name:'LHW',value:3}],
        [{name:'CKG'},{name:'TYN',value:3}],
        [{name:'NKG'},{name:'SYX',value:3}],
        [{name:'CGO'},{name:'PEK',value:3}],
        [{name:'NKG'},{name:'TYN',value:3}],
        [{name:'HRB'},{name:'NKG',value:3}],
        [{name:'CTU'},{name:'SWA',value:3}],
        [{name:'CTU'},{name:'INC',value:3}],
        [{name:'WUH'},{name:'XIY',value:3}],
        [{name:'KHN'},{name:'KWE',value:3}],
        [{name:'HAK'},{name:'XMN',value:3}],
        [{name:'PVG'},{name:'ZHA',value:3}],
        [{name:'BAV'},{name:'PEK',value:3}],
        [{name:'KHN'},{name:'ZUH',value:3}],
        [{name:'FOC'},{name:'SYX',value:3}],
        [{name:'CGO'},{name:'PVG',value:3}],
        [{name:'CSX'},{name:'HET',value:3}],
        [{name:'CTU'},{name:'HET',value:3}],
        [{name:'KHN'},{name:'TNA',value:3}],
        [{name:'KWE'},{name:'WNZ',value:3}],
        [{name:'SYX'},{name:'WNZ',value:3}],
        [{name:'CGO'},{name:'SHE',value:3}],
        [{name:'CGO'},{name:'SHA',value:3}],
        [{name:'HFE'},{name:'TYN',value:3}],
        [{name:'KMG'},{name:'SYM',value:3}],
        [{name:'KMG'},{name:'SYX',value:3}],
        [{name:'SHE'},{name:'XMN',value:3}],
        [{name:'SYX'},{name:'XIY',value:3}],
        [{name:'WUS'},{name:'XMN',value:3}],
        [{name:'CSX'},{name:'JJN',value:3}],
        [{name:'DLC'},{name:'SZX',value:3}],
        [{name:'DYG'},{name:'PVG',value:3}],
        [{name:'CTU'},{name:'NNG',value:3}],
        [{name:'PEK'},{name:'YNJ',value:3}],
        [{name:'PEK'},{name:'SWA',value:3}],
        [{name:'SHA'},{name:'TNA',value:3}],
        [{name:'PEK'},{name:'YIW',value:3}],
        [{name:'PEK'},{name:'TGO',value:3}],
        [{name:'TAO'},{name:'YNJ',value:3}],
        [{name:'CGQ'},{name:'WUH',value:3}],
        [{name:'NDG'},{name:'PEK',value:3}],
        [{name:'CZX'},{name:'SHE',value:3}],
        [{name:'SHP'},{name:'SJW',value:3}],
        [{name:'CGQ'},{name:'YNT',value:3}],
        [{name:'CAN'},{name:'CGQ',value:3}],
        [{name:'LXA'},{name:'XIY',value:3}],
        [{name:'DYG'},{name:'PEK',value:3}],
        [{name:'ENH'},{name:'WUH',value:3}],
        [{name:'KHN'},{name:'PVG',value:3}],
        [{name:'CAN'},{name:'YNT',value:3}],
        [{name:'HFE'},{name:'PEK',value:3}],
        [{name:'NKG'},{name:'PEK',value:3}],
        [{name:'JJN'},{name:'KWE',value:3}],
        [{name:'FOC'},{name:'SZX',value:3}],
        [{name:'SHA'},{name:'SYX',value:3}],
        [{name:'TAO'},{name:'TSN',value:3}],
        [{name:'CAN'},{name:'SJW',value:3}],
        [{name:'CTU'},{name:'YNT',value:3}],
        [{name:'JJN'},{name:'SHA',value:3}],
        [{name:'JGN'},{name:'LHW',value:3}],
        [{name:'CAN'},{name:'CZX',value:3}],
        [{name:'CKG'},{name:'YIH',value:3}],
        [{name:'HET'},{name:'NKG',value:3}],
        [{name:'KOW'},{name:'PEK',value:3}],
        [{name:'FOC'},{name:'HFE',value:3}],
        [{name:'WUH'},{name:'YNT',value:3}],
        [{name:'DSN'},{name:'XIY',value:3}],
        [{name:'NNG'},{name:'ZUH',value:3}],
        [{name:'KWL'},{name:'SZX',value:3}],
        [{name:'CKG'},{name:'TAO',value:3}],
        [{name:'JJN'},{name:'WUH',value:3}],
        [{name:'HET'},{name:'SHE',value:3}],
        [{name:'CKG'},{name:'ZUH',value:3}],
        [{name:'CTU'},{name:'CZX',value:3}],
        [{name:'CIF'},{name:'HET',value:3}],
        [{name:'CAN'},{name:'SHE',value:3}],
        [{name:'HET'},{name:'TGO',value:3}],
        [{name:'CAN'},{name:'NTG',value:3}],
        [{name:'SHA'},{name:'LHW',value:3}],
        [{name:'LHW'},{name:'PVG',value:3}],
        [{name:'CSX'},{name:'PVG',value:3}],
        [{name:'PVG'},{name:'SHP',value:2}],
        [{name:'HRB'},{name:'JGD',value:2}],
        [{name:'PVG'},{name:'TYN',value:2}],
        [{name:'FOC'},{name:'HGH',value:2}],
        [{name:'CTU'},{name:'KRL',value:2}],
        [{name:'PEK'},{name:'XIL',value:2}],
        [{name:'SHE'},{name:'WUX',value:2}],
        [{name:'HET'},{name:'HRB',value:2}],
        [{name:'CTU'},{name:'ZHA',value:2}],
        [{name:'SHA'},{name:'SHE',value:2}],
        [{name:'DAX'},{name:'KMG',value:2}],
        [{name:'CAN'},{name:'YCU',value:2}],
        [{name:'LHW'},{name:'TSN',value:2}],
        [{name:'DLC'},{name:'NTG',value:2}],
        [{name:'PEK'},{name:'WUS',value:2}],
        [{name:'CAN'},{name:'GYS',value:2}],
        [{name:'DYG'},{name:'XIY',value:2}],
        [{name:'BHY'},{name:'HGH',value:2}],
        [{name:'JDZ'},{name:'XIY',value:2}],
        [{name:'FOC'},{name:'JDZ',value:2}],
        [{name:'NAY'},{name:'NGB',value:2}],
        [{name:'NAY'},{name:'NZH',value:2}],
        [{name:'DAX'},{name:'PEK',value:2}],
        [{name:'KHN'},{name:'SHA',value:2}],
        [{name:'SJW'},{name:'URC',value:2}],
        [{name:'CAN'},{name:'YBP',value:2}],
        [{name:'SZX'},{name:'YIC',value:2}],
        [{name:'PVG'},{name:'TVS',value:2}],
        [{name:'JUZ'},{name:'SZX',value:2}],
        [{name:'GYS'},{name:'PEK',value:2}],
        [{name:'CAN'},{name:'URC',value:2}],
        [{name:'HET'},{name:'SJW',value:2}],
        [{name:'BAV'},{name:'SHA',value:2}],
        [{name:'CIF'},{name:'NAY',value:2}],
        [{name:'CKG'},{name:'HYN',value:2}],
        [{name:'PEK'},{name:'TNA',value:2}],
        [{name:'HRB'},{name:'NAY',value:2}],
        [{name:'WXN'},{name:'XMN',value:2}],
        [{name:'LHW'},{name:'YCU',value:2}],
        [{name:'LYI'},{name:'NAY',value:2}],
        [{name:'CZX'},{name:'XMN',value:2}],
        [{name:'CGO'},{name:'DSN',value:2}],
        [{name:'JNZ'},{name:'PVG',value:2}],
        [{name:'CZX'},{name:'KMG',value:2}],
        [{name:'HSN'},{name:'PEK',value:2}],
        [{name:'HFE'},{name:'PVG',value:2}],
        [{name:'URC'},{name:'XNN',value:2}],
        [{name:'CGO'},{name:'TNA',value:2}],
        [{name:'NDG'},{name:'TAO',value:2}],
        [{name:'CKG'},{name:'NTG',value:2}],
        [{name:'HET'},{name:'WUA',value:2}],
        [{name:'SYX'},{name:'TSN',value:2}],
        [{name:'SYX'},{name:'TNA',value:2}],
        [{name:'PEK'},{name:'YCU',value:2}],
        [{name:'CGQ'},{name:'TSN',value:2}],
        [{name:'CKG'},{name:'HFE',value:2}],
        [{name:'LYG'},{name:'SHA',value:2}],
        [{name:'CIH'},{name:'NAY',value:2}],
        [{name:'KWE'},{name:'TNA',value:2}],
        [{name:'CSX'},{name:'DYG',value:2}],
        [{name:'LYI'},{name:'SHE',value:2}],
        [{name:'LYI'},{name:'SHA',value:2}],
        [{name:'FUG'},{name:'PEK',value:2}],
        [{name:'HRB'},{name:'TGO',value:2}],
        [{name:'LYG'},{name:'NAY',value:2}],
        [{name:'PEK'},{name:'YBP',value:2}],
        [{name:'DAT'},{name:'PEK',value:2}],
        [{name:'CAN'},{name:'NAY',value:2}],
        [{name:'CSX'},{name:'SWA',value:2}],
        [{name:'CTU'},{name:'HRB',value:2}],
        [{name:'CZX'},{name:'TYN',value:2}],
        [{name:'DLU'},{name:'JHG',value:2}],
        [{name:'ENY'},{name:'NAY',value:2}],
        [{name:'KHN'},{name:'KOW',value:2}],
        [{name:'DNH'},{name:'LHW',value:2}],
        [{name:'CSX'},{name:'HJJ',value:2}],
        [{name:'PEK'},{name:'RLK',value:2}],
        [{name:'HGH'},{name:'SWA',value:2}],
        [{name:'XMN'},{name:'YNZ',value:2}],
        [{name:'KMG'},{name:'TCZ',value:2}],
        [{name:'CSX'},{name:'WUX',value:2}],
        [{name:'HRB'},{name:'NGB',value:2}],
        [{name:'JGS'},{name:'PEK',value:2}],
        [{name:'DLC'},{name:'SJW',value:2}],
        [{name:'JIU'},{name:'XMN',value:2}],
        [{name:'JJN'},{name:'PVG',value:2}],
        [{name:'HET'},{name:'HLH',value:2}],
        [{name:'TNA'},{name:'TYN',value:2}],
        [{name:'CAN'},{name:'LZO',value:2}],
        [{name:'BPX'},{name:'CTU',value:2}],
        [{name:'DDG'},{name:'PEK',value:2}],
        [{name:'CKG'},{name:'CZX',value:2}],
        [{name:'KCA'},{name:'URC',value:2}],
        [{name:'HAK'},{name:'NGB',value:2}],
        [{name:'JIU'},{name:'PEK',value:2}],
        [{name:'KMG'},{name:'YCU',value:2}],
        [{name:'CAN'},{name:'JZH',value:2}],
        [{name:'SHA'},{name:'TXN',value:2}],
        [{name:'TAO'},{name:'WUS',value:2}],
        [{name:'HGH'},{name:'INC',value:2}],
        [{name:'KMG'},{name:'NGB',value:2}],
        [{name:'CGQ'},{name:'CTU',value:2}],
        [{name:'FUO'},{name:'NAY',value:2}],
        [{name:'CZX'},{name:'NAY',value:2}],
        [{name:'CAN'},{name:'YIH',value:2}],
        [{name:'JDZ'},{name:'SHA',value:2}],
        [{name:'PVG'},{name:'YNJ',value:2}],
        [{name:'KMG'},{name:'WNH',value:2}],
        [{name:'FOC'},{name:'WUX',value:2}],
        [{name:'WUH'},{name:'XNN',value:2}],
        [{name:'DLC'},{name:'WUX',value:2}],
        [{name:'NTG'},{name:'XMN',value:2}],
        [{name:'HSN'},{name:'NAY',value:2}],
        [{name:'JDZ'},{name:'XMN',value:2}],
        [{name:'DAT'},{name:'NAY',value:2}],
        [{name:'HLH'},{name:'PEK',value:2}],
        [{name:'PEK'},{name:'TXN',value:2}],
        [{name:'ACX'},{name:'NAY',value:2}],
        [{name:'TYN'},{name:'XMN',value:2}],
        [{name:'XNN'},{name:'YUS',value:2}],
        [{name:'CIH'},{name:'PEK',value:2}],
        [{name:'NGB'},{name:'TSN',value:2}],
        [{name:'HET'},{name:'NAY',value:2}],
        [{name:'BAV'},{name:'XIY',value:2}],
        [{name:'CGQ'},{name:'NGB',value:2}],
        [{name:'WXN'},{name:'XIY',value:2}],
        [{name:'SHA'},{name:'YIH',value:2}],
        [{name:'TSN'},{name:'YNT',value:2}],
        [{name:'DYG'},{name:'NKG',value:2}],
        [{name:'CTU'},{name:'TXN',value:2}],
        [{name:'CAN'},{name:'LJG',value:2}],
        [{name:'DSN'},{name:'PEK',value:2}],
        [{name:'NKG'},{name:'SJW',value:2}],
        [{name:'KWL'},{name:'TYN',value:2}],
        [{name:'SYX'},{name:'TYN',value:2}],
        [{name:'CSX'},{name:'SZX',value:2}],
        [{name:'SYX'},{name:'ZUH',value:2}],
        [{name:'CGO'},{name:'MIG',value:2}],
        [{name:'CAN'},{name:'DAX',value:2}],
        [{name:'TNA'},{name:'WNZ',value:2}],
        [{name:'CTU'},{name:'YCU',value:2}],
        [{name:'BHY'},{name:'PEK',value:2}],
        [{name:'XMN'},{name:'YIH',value:2}],
        [{name:'HZH'},{name:'KWE',value:2}],
        [{name:'CGO'},{name:'WNZ',value:2}],
        [{name:'CGQ'},{name:'INC',value:2}],
        [{name:'XIY'},{name:'YNT',value:2}],
        [{name:'KWE'},{name:'LJG',value:2}],
        [{name:'NAY'},{name:'ZHA',value:2}],
        [{name:'JNZ'},{name:'TAO',value:2}],
        [{name:'HGH'},{name:'YNT',value:2}],
        [{name:'NKG'},{name:'SWA',value:2}],
        [{name:'NTG'},{name:'PEK',value:2}],
        [{name:'WUH'},{name:'YTY',value:2}],
        [{name:'JDZ'},{name:'PEK',value:2}],
        [{name:'CTU'},{name:'ZUH',value:2}],
        [{name:'TAO'},{name:'YCU',value:2}],
        [{name:'NAY'},{name:'UYN',value:2}],
        [{name:'GYS'},{name:'SZX',value:2}],
        [{name:'CAN'},{name:'LYI',value:2}],
        [{name:'CKG'},{name:'DYG',value:2}],
        [{name:'PEK'},{name:'YTY',value:2}],
        [{name:'HLD'},{name:'NAY',value:2}],
        [{name:'MIG'},{name:'PVG',value:2}],
        [{name:'FUG'},{name:'SHA',value:2}],
        [{name:'HYN'},{name:'SZX',value:2}],
        [{name:'JUZ'},{name:'XMN',value:2}],
        [{name:'CIF'},{name:'TSN',value:2}],
        [{name:'JXA'},{name:'TAO',value:2}],
        [{name:'NAY'},{name:'NDG',value:2}],
        [{name:'XMN'},{name:'YTY',value:2}],
        [{name:'DSN'},{name:'NAY',value:2}],
        [{name:'BAV'},{name:'NAY',value:2}],
        [{name:'KMG'},{name:'ZAT',value:2}],
        [{name:'CKG'},{name:'TXN',value:2}],
        [{name:'CAN'},{name:'LHW',value:2}],
        [{name:'JDZ'},{name:'SZX',value:2}],
        [{name:'DNH'},{name:'URC',value:2}],
        [{name:'WUH'},{name:'WUX',value:2}],
        [{name:'CSX'},{name:'URC',value:2}],
        [{name:'NAY'},{name:'XIL',value:2}],
        [{name:'INC'},{name:'TNA',value:2}],
        [{name:'HYN'},{name:'PEK',value:2}],
        [{name:'KHN'},{name:'NAY',value:2}],
        [{name:'CSX'},{name:'HYN',value:2}],
        [{name:'NAY'},{name:'WNZ',value:2}],
        [{name:'KRY'},{name:'URC',value:2}],
        [{name:'GYS'},{name:'HGH',value:2}],
        [{name:'HFE'},{name:'KWE',value:2}],
        [{name:'LZH'},{name:'PEK',value:2}],
        [{name:'HEK'},{name:'HRB',value:2}],
        [{name:'JGS'},{name:'SHA',value:2}],
        [{name:'BHY'},{name:'CKG',value:2}],
        [{name:'JJN'},{name:'PEK',value:2}],
        [{name:'URC'},{name:'YCU',value:2}],
        [{name:'SHE'},{name:'WNZ',value:2}],
        [{name:'CIF'},{name:'PEK',value:2}],
        [{name:'TSN'},{name:'YCU',value:2}],
        [{name:'KWL'},{name:'TNA',value:2}],
        [{name:'NGB'},{name:'SYX',value:2}],
        [{name:'HMI'},{name:'KRL',value:2}],
        [{name:'CGQ'},{name:'HGH',value:2}],
        [{name:'WNZ'},{name:'ZUH',value:2}],
        [{name:'TYN'},{name:'XIY',value:2}],
        [{name:'CGQ'},{name:'SZX',value:2}],
        [{name:'CAN'},{name:'WXN',value:2}],
        [{name:'NAY'},{name:'NNY',value:2}],
        [{name:'INC'},{name:'TYN',value:2}],
        [{name:'URC'},{name:'YIN',value:2}],
        [{name:'JUZ'},{name:'NAY',value:2}],
        [{name:'CTU'},{name:'UYN',value:2}],
        [{name:'CKG'},{name:'NAY',value:2}],
        [{name:'AAT'},{name:'URC',value:2}],
        [{name:'HYN'},{name:'ZUH',value:2}],
        [{name:'PVG'},{name:'URC',value:2}],
        [{name:'NAY'},{name:'WUA',value:2}],
        [{name:'MIG'},{name:'SZX',value:2}],
        [{name:'CIH'},{name:'CTU',value:2}],
        [{name:'DDG'},{name:'TAO',value:2}],
        [{name:'HAK'},{name:'TSN',value:2}],
        [{name:'LJG'},{name:'NKG',value:2}],
        [{name:'DSN'},{name:'TYN',value:2}],
        [{name:'SYX'},{name:'WUX',value:2}],
        [{name:'BAV'},{name:'CGO',value:2}],
        [{name:'KWL'},{name:'SHA',value:2}],
        [{name:'HLH'},{name:'NAY',value:2}],
        [{name:'HGH'},{name:'YCU',value:2}],
        [{name:'AKU'},{name:'CTU',value:2}],
        [{name:'NTG'},{name:'SZX',value:2}],
        [{name:'SZX'},{name:'YBP',value:2}],
        [{name:'NAY'},{name:'SZX',value:2}],
        [{name:'CSX'},{name:'NAY',value:2}],
        [{name:'CTU'},{name:'KHG',value:2}],
        [{name:'BSD'},{name:'KMG',value:2}],
        [{name:'MIG'},{name:'PEK',value:2}],
        [{name:'BHY'},{name:'KMG',value:2}],
        [{name:'NAY'},{name:'SHA',value:2}],
        [{name:'HSN'},{name:'XMN',value:2}],
        [{name:'KMG'},{name:'MIG',value:2}],
        [{name:'CAN'},{name:'JDZ',value:2}],
        [{name:'CAN'},{name:'WUS',value:2}],
        [{name:'CZX'},{name:'FOC',value:2}],
        [{name:'PEK'},{name:'YIC',value:2}],
        [{name:'NTG'},{name:'SHE',value:2}],
        [{name:'KHN'},{name:'NGB',value:2}],
        [{name:'SJW'},{name:'YNT',value:2}],
        [{name:'FOC'},{name:'HRB',value:2}],
        [{name:'PEK'},{name:'ZHA',value:2}],
        [{name:'TYN'},{name:'WUH',value:2}],
        [{name:'KWL'},{name:'SJW',value:2}],
        [{name:'CHG'},{name:'PEK',value:2}],
        [{name:'PVG'},{name:'YCU',value:2}],
        [{name:'XIY'},{name:'YTY',value:2}],
        [{name:'CTU'},{name:'NAY',value:2}],
        [{name:'HRB'},{name:'TYN',value:2}],
        [{name:'TXN'},{name:'TYN',value:2}],
        [{name:'HFE'},{name:'HRB',value:2}],
        [{name:'CSX'},{name:'LZO',value:2}],
        [{name:'SZX'},{name:'YCU',value:2}],
        [{name:'BFJ'},{name:'NAY',value:2}],
        [{name:'BHY'},{name:'PVG',value:2}],
        [{name:'TCG'},{name:'URC',value:2}],
        [{name:'PVG'},{name:'WXN',value:2}],
        [{name:'CTU'},{name:'JHG',value:2}],
        [{name:'CGO'},{name:'ZUH',value:2}],
        [{name:'NGB'},{name:'SWA',value:2}],
        [{name:'IQN'},{name:'NAY',value:2}],
        [{name:'BAV'},{name:'CAN',value:2}],
        [{name:'FOC'},{name:'PVG',value:2}],
        [{name:'JIQ'},{name:'KMG',value:2}],
        [{name:'LXA'},{name:'PEK',value:2}],
        [{name:'SZX'},{name:'ZHA',value:2}],
        [{name:'HET'},{name:'TYN',value:2}],
        [{name:'KHN'},{name:'NKG',value:2}],
        [{name:'SZX'},{name:'YNT',value:2}],
        [{name:'CTU'},{name:'JDZ',value:2}],
        [{name:'CKG'},{name:'WUS',value:2}],
        [{name:'HRB'},{name:'YNZ',value:2}],
        [{name:'DNH'},{name:'XIY',value:2}],
        [{name:'CTU'},{name:'YIW',value:2}],
        [{name:'CTU'},{name:'YIN',value:2}],
        [{name:'INC'},{name:'SJW',value:2}],
        [{name:'NAY'},{name:'XMN',value:2}],
        [{name:'HGH'},{name:'HRB',value:2}],
        [{name:'TNA'},{name:'YNT',value:2}],
        [{name:'PEK'},{name:'XFN',value:2}],
        [{name:'JNG'},{name:'SHA',value:2}],
        [{name:'INC'},{name:'NKG',value:2}],
        [{name:'JMU'},{name:'TAO',value:2}],
        [{name:'KWE'},{name:'KWL',value:2}],
        [{name:'NTG'},{name:'TSN',value:2}],
        [{name:'CKG'},{name:'YTY',value:2}],
        [{name:'CSX'},{name:'LJG',value:2}],
        [{name:'BAV'},{name:'TYN',value:2}],
        [{name:'KMG'},{name:'LNJ',value:2}],
        [{name:'HET'},{name:'PVG',value:2}],
        [{name:'NGB'},{name:'WUH',value:2}],
        [{name:'NLT'},{name:'URC',value:2}],
        [{name:'PEK'},{name:'YNZ',value:2}],
        [{name:'NAY'},{name:'XFN',value:2}],
        [{name:'KWE'},{name:'XUZ',value:2}],
        [{name:'HET'},{name:'SHA',value:2}],
        [{name:'DAX'},{name:'SZX',value:2}],
        [{name:'KWE'},{name:'NNG',value:2}],
        [{name:'JXA'},{name:'PEK',value:2}],
        [{name:'SWA'},{name:'YIW',value:2}],
        [{name:'HMI'},{name:'PEK',value:2}],
        [{name:'LXA'},{name:'XNN',value:2}],
        [{name:'DLC'},{name:'LYG',value:2}],
        [{name:'CSX'},{name:'MIG',value:2}],
        [{name:'INC'},{name:'XNN',value:2}],
        [{name:'XIY'},{name:'ENY',value:2}],
        [{name:'DSN'},{name:'INC',value:1}],
        [{name:'BAV'},{name:'PVG',value:1}],
        [{name:'FOC'},{name:'HIA',value:1}],
        [{name:'CKG'},{name:'PZI',value:1}],
        [{name:'KWL'},{name:'SYX',value:1}],
        [{name:'CGD'},{name:'XIY',value:1}],
        [{name:'CTU'},{name:'YTY',value:1}],
        [{name:'KMG'},{name:'XIC',value:1}],
        [{name:'CTU'},{name:'JJN',value:1}],
        [{name:'CGO'},{name:'SWA',value:1}],
        [{name:'SHE'},{name:'XUZ',value:1}],
        [{name:'CKG'},{name:'DLC',value:1}],
        [{name:'KWL'},{name:'ZUH',value:1}],
        [{name:'CSX'},{name:'TXN',value:1}],
        [{name:'CKG'},{name:'JHG',value:1}],
        [{name:'CSX'},{name:'LYI',value:1}],
        [{name:'PVG'},{name:'XNN',value:1}],
        [{name:'NNY'},{name:'SZX',value:1}],
        [{name:'CTU'},{name:'DSN',value:1}],
        [{name:'CAN'},{name:'HDG',value:1}],
        [{name:'TSN'},{name:'XNN',value:1}],
        [{name:'KHN'},{name:'SYX',value:1}],
        [{name:'KMG'},{name:'WXN',value:1}],
        [{name:'CIH'},{name:'HAK',value:1}],
        [{name:'CAN'},{name:'DYG',value:1}],
        [{name:'MIG'},{name:'NKG',value:1}],
        [{name:'CIH'},{name:'WUH',value:1}],
        [{name:'HRB'},{name:'JXA',value:1}],
        [{name:'JGN'},{name:'XIY',value:1}],
        [{name:'DLC'},{name:'KMG',value:1}],
        [{name:'KMG'},{name:'KOW',value:1}],
        [{name:'MXZ'},{name:'SZX',value:1}],
        [{name:'HFE'},{name:'LJG',value:1}],
        [{name:'CSX'},{name:'TEN',value:1}],
        [{name:'LZO'},{name:'PVG',value:1}],
        [{name:'CTU'},{name:'TCZ',value:1}],
        [{name:'TAO'},{name:'TXN',value:1}],
        [{name:'LYI'},{name:'PVG',value:1}],
        [{name:'TSN'},{name:'UYN',value:1}],
        [{name:'NGB'},{name:'WEF',value:1}],
        [{name:'KWL'},{name:'WNZ',value:1}],
        [{name:'DOY'},{name:'PVG',value:1}],
        [{name:'LHW'},{name:'NNG',value:1}],
        [{name:'CTU'},{name:'LYG',value:1}],
        [{name:'KHN'},{name:'SHE',value:1}],
        [{name:'HRB'},{name:'INC',value:1}],
        [{name:'LYA'},{name:'PEK',value:1}],
        [{name:'LYI'},{name:'WUH',value:1}],
        [{name:'KHN'},{name:'TYN',value:1}],
        [{name:'CGO'},{name:'KRL',value:1}],
        [{name:'NKG'},{name:'TGO',value:1}],
        [{name:'LCX'},{name:'SHA',value:1}],
        [{name:'KMG'},{name:'ZHA',value:1}],
        [{name:'NAO'},{name:'XIY',value:1}],
        [{name:'KHN'},{name:'LYA',value:1}],
        [{name:'CAN'},{name:'CIH',value:1}],
        [{name:'SHA'},{name:'WUS',value:1}],
        [{name:'SHP'},{name:'TAO',value:1}],
        [{name:'CAN'},{name:'YTY',value:1}],
        [{name:'KWE'},{name:'SWA',value:1}],
        [{name:'HFE'},{name:'YNT',value:1}],
        [{name:'CKG'},{name:'SHE',value:1}],
        [{name:'BAV'},{name:'SHE',value:1}],
        [{name:'FUG'},{name:'XIY',value:1}],
        [{name:'DLC'},{name:'FUG',value:1}],
        [{name:'CAN'},{name:'JIQ',value:1}],
        [{name:'CGO'},{name:'NNY',value:1}],
        [{name:'WUZ'},{name:'ZUH',value:1}],
        [{name:'HET'},{name:'NZH',value:1}],
        [{name:'CKG'},{name:'ZAT',value:1}],
        [{name:'LJG'},{name:'MIG',value:1}],
        [{name:'CTU'},{name:'DLU',value:1}],
        [{name:'CAN'},{name:'DLC',value:1}],
        [{name:'CGO'},{name:'LJG',value:1}],
        [{name:'BAV'},{name:'CSX',value:1}],
        [{name:'AQG'},{name:'SHA',value:1}],
        [{name:'HGH'},{name:'LYG',value:1}],
        [{name:'AQG'},{name:'HAK',value:1}],
        [{name:'YIW'},{name:'ZUH',value:1}],
        [{name:'HGH'},{name:'LYI',value:1}],
        [{name:'DLC'},{name:'SHP',value:1}],
        [{name:'HIA'},{name:'HRB',value:1}],
        [{name:'SWA'},{name:'ZUH',value:1}],
        [{name:'KOW'},{name:'SZX',value:1}],
        [{name:'SJW'},{name:'XMN',value:1}],
        [{name:'HGH'},{name:'TGO',value:1}],
        [{name:'DIG'},{name:'LXA',value:1}],
        [{name:'KWE'},{name:'TYN',value:1}],
        [{name:'KOW'},{name:'SHA',value:1}],
        [{name:'HGH'},{name:'YIH',value:1}],
        [{name:'SHE'},{name:'WEF',value:1}],
        [{name:'HLH'},{name:'SHE',value:1}],
        [{name:'AEB'},{name:'CAN',value:1}],
        [{name:'DYG'},{name:'SZX',value:1}],
        [{name:'NGB'},{name:'XIY',value:1}],
        [{name:'HGH'},{name:'NNY',value:1}],
        [{name:'JXA'},{name:'SHE',value:1}],
        [{name:'LYG'},{name:'XUZ',value:1}],
        [{name:'XFN'},{name:'XMN',value:1}],
        [{name:'SJW'},{name:'SYX',value:1}],
        [{name:'CZX'},{name:'DYG',value:1}],
        [{name:'LZO'},{name:'XIY',value:1}],
        [{name:'KMG'},{name:'ZUH',value:1}],
        [{name:'KMG'},{name:'NAO',value:1}],
        [{name:'SHE'},{name:'YNT',value:1}],
        [{name:'SHE'},{name:'YNZ',value:1}],
        [{name:'SWA'},{name:'ZHA',value:1}],
        [{name:'CTU'},{name:'LZH',value:1}],
        [{name:'LZO'},{name:'SZX',value:1}],
        [{name:'CKG'},{name:'ENY',value:1}],
        [{name:'LYG'},{name:'SHE',value:1}],
        [{name:'PEK'},{name:'WEF',value:1}],
        [{name:'GOQ'},{name:'XIY',value:1}],
        [{name:'PEK'},{name:'UYN',value:1}],
        [{name:'HIA'},{name:'SHA',value:1}],
        [{name:'BHY'},{name:'HAK',value:1}],
        [{name:'HLD'},{name:'TGO',value:1}],
        [{name:'CGO'},{name:'YTY',value:1}],
        [{name:'CGQ'},{name:'NBS',value:1}],
        [{name:'DOY'},{name:'HRB',value:1}],
        [{name:'JNG'},{name:'XIY',value:1}],
        [{name:'DLC'},{name:'XMN',value:1}],
        [{name:'JGD'},{name:'OHE',value:1}],
        [{name:'SJW'},{name:'TVS',value:1}],
        [{name:'CAN'},{name:'DOY',value:1}],
        [{name:'CKG'},{name:'KRL',value:1}],
        [{name:'HET'},{name:'RLK',value:1}],
        [{name:'BFJ'},{name:'CKG',value:1}],
        [{name:'HFE'},{name:'ZUH',value:1}],
        [{name:'KOW'},{name:'ZUH',value:1}],
        [{name:'HSN'},{name:'PVG',value:1}],
        [{name:'CTU'},{name:'LUM',value:1}],
        [{name:'FUG'},{name:'TSN',value:1}],
        [{name:'CAN'},{name:'LUM',value:1}],
        [{name:'CTU'},{name:'KOW',value:1}],
        [{name:'HFE'},{name:'TXN',value:1}],
        [{name:'CAN'},{name:'NAO',value:1}],
        [{name:'CKG'},{name:'HET',value:1}],
        [{name:'SJW'},{name:'WNZ',value:1}],
        [{name:'GXH'},{name:'XIY',value:1}],
        [{name:'SZX'},{name:'XUZ',value:1}],
        [{name:'CSX'},{name:'XUZ',value:1}],
        [{name:'LZH'},{name:'PVG',value:1}],
        [{name:'HAK'},{name:'LZO',value:1}],
        [{name:'AEB'},{name:'KWL',value:1}],
        [{name:'LZO'},{name:'PEK',value:1}],
        [{name:'KMG'},{name:'YIC',value:1}],
        [{name:'KMG'},{name:'YIH',value:1}],
        [{name:'KMG'},{name:'YIW',value:1}],
        [{name:'SHE'},{name:'TSN',value:1}],
        [{name:'JJN'},{name:'YIW',value:1}],
        [{name:'MIG'},{name:'XIY',value:1}],
        [{name:'CGO'},{name:'HFE',value:1}],
        [{name:'HGH'},{name:'LZO',value:1}],
        [{name:'RLK'},{name:'XIY',value:1}],
        [{name:'KMG'},{name:'XUZ',value:1}],
        [{name:'TSN'},{name:'ZUH',value:1}],
        [{name:'CKG'},{name:'CTU',value:1}],
        [{name:'LYG'},{name:'WUH',value:1}],
        [{name:'JHG'},{name:'TCZ',value:1}],
        [{name:'CAN'},{name:'LZH',value:1}],
        [{name:'CZX'},{name:'KWL',value:1}],
        [{name:'LJG'},{name:'SZX',value:1}],
        [{name:'SZX'},{name:'URC',value:1}],
        [{name:'DSN'},{name:'TSN',value:1}],
        [{name:'CIF'},{name:'SHE',value:1}],
        [{name:'DLC'},{name:'WEF',value:1}],
        [{name:'CAN'},{name:'MXZ',value:1}],
        [{name:'BHY'},{name:'KWL',value:1}],
        [{name:'NBS'},{name:'PEK',value:1}],
        [{name:'TAO'},{name:'WUX',value:1}],
        [{name:'KWE'},{name:'LZO',value:1}],
        [{name:'CSX'},{name:'ZHA',value:1}],
        [{name:'NGB'},{name:'SJW',value:1}],
        [{name:'FOC'},{name:'TSN',value:1}],
        [{name:'HEK'},{name:'OHE',value:1}],
        [{name:'CAN'},{name:'YIW',value:1}],
        [{name:'NBS'},{name:'SHE',value:1}],
        [{name:'CKG'},{name:'HDG',value:1}],
        [{name:'DLC'},{name:'MDG',value:1}],
        [{name:'CTU'},{name:'JGS',value:1}],
        [{name:'LYI'},{name:'WNZ',value:1}],
        [{name:'CSX'},{name:'SJW',value:1}],
        [{name:'XIY'},{name:'YBP',value:1}],
        [{name:'SHA'},{name:'YNZ',value:1}],
        [{name:'DAT'},{name:'SHE',value:1}],
        [{name:'WUH'},{name:'ZUH',value:1}],
        [{name:'DLC'},{name:'JNG',value:1}],
        [{name:'HRB'},{name:'NZH',value:1}],
        [{name:'BAV'},{name:'WUH',value:1}],
        [{name:'KWE'},{name:'LHW',value:1}],
        [{name:'CSX'},{name:'LLF',value:1}],
        [{name:'XMN'},{name:'XUZ',value:1}],
        [{name:'LHW'},{name:'SHE',value:1}],
        [{name:'HRB'},{name:'YTY',value:1}],
        [{name:'HLD'},{name:'JGD',value:1}],
        [{name:'CGO'},{name:'JJN',value:1}],
        [{name:'CAN'},{name:'MIG',value:1}],
        [{name:'HGH'},{name:'KOW',value:1}],
        [{name:'LXA'},{name:'MIG',value:1}],
        [{name:'HAK'},{name:'HFE',value:1}],
        [{name:'CGQ'},{name:'CKG',value:1}],
        [{name:'SZX'},{name:'TEN',value:1}],
        [{name:'KHG'},{name:'XIY',value:1}],
        [{name:'KHN'},{name:'TSN',value:1}],
        [{name:'FUG'},{name:'XMN',value:1}],
        [{name:'CGD'},{name:'HAK',value:1}],
        [{name:'CAN'},{name:'CSX',value:1}],
        [{name:'JIQ'},{name:'SHA',value:1}],
        [{name:'TSN'},{name:'URC',value:1}],
        [{name:'DLC'},{name:'JMU',value:1}],
        [{name:'DAX'},{name:'PVG',value:1}],
        [{name:'JMU'},{name:'PVG',value:1}],
        [{name:'LYI'},{name:'PEK',value:1}],
        [{name:'INC'},{name:'LHW',value:1}],
        [{name:'HDG'},{name:'SHA',value:1}],
        [{name:'NNG'},{name:'WNZ',value:1}],
        [{name:'NGB'},{name:'YIH',value:1}],
        [{name:'CIH'},{name:'XMN',value:1}],
        [{name:'LXA'},{name:'NGQ',value:1}],
        [{name:'JNG'},{name:'PEK',value:1}],
        [{name:'HYN'},{name:'WUH',value:1}],
        [{name:'CGQ'},{name:'XIY',value:1}],
        [{name:'HRB'},{name:'WNZ',value:1}],
        [{name:'CAN'},{name:'TXN',value:1}],
        [{name:'LYI'},{name:'YIW',value:1}],
        [{name:'SHA'},{name:'YIC',value:1}],
        [{name:'BAV'},{name:'CIF',value:1}],
        [{name:'SYX'},{name:'YIH',value:1}],
        [{name:'BPX'},{name:'LXA',value:1}],
        [{name:'CSX'},{name:'YNT',value:1}],
        [{name:'CSX'},{name:'YNZ',value:1}],
        [{name:'ACX'},{name:'CAN',value:1}],
        [{name:'KWL'},{name:'LJG',value:1}],
        [{name:'HET'},{name:'TAO',value:1}],
        [{name:'JMU'},{name:'SHE',value:1}],
        [{name:'HFE'},{name:'SHE',value:1}],
        [{name:'DSN'},{name:'HRB',value:1}],
        [{name:'SZX'},{name:'YTY',value:1}],
        [{name:'LJG'},{name:'SJW',value:1}],
        [{name:'BHY'},{name:'CTU',value:1}],
        [{name:'CZX'},{name:'XIY',value:1}],
        [{name:'SZX'},{name:'WXN',value:1}],
        [{name:'DLC'},{name:'YTY',value:1}],
        [{name:'AQG'},{name:'PEK',value:1}],
        [{name:'LYI'},{name:'XIY',value:1}],
        [{name:'HRB'},{name:'XUZ',value:1}],
        [{name:'CAN'},{name:'NNY',value:1}],
        [{name:'CAN'},{name:'JNG',value:1}],
        [{name:'AQG'},{name:'XMN',value:1}],
        [{name:'CTU'},{name:'DIG',value:1}],
        [{name:'HMI'},{name:'XIY',value:1}],
        [{name:'PVG'},{name:'XFN',value:1}],
        [{name:'LZO'},{name:'NNG',value:1}],
        [{name:'WUH'},{name:'XFN',value:1}],
        [{name:'NGB'},{name:'SHE',value:1}],
        [{name:'LUM'},{name:'PEK',value:1}],
        [{name:'CKG'},{name:'LZH',value:1}],
        [{name:'INC'},{name:'RLK',value:1}],
        [{name:'CIF'},{name:'HLD',value:1}],
        [{name:'DLC'},{name:'YNZ',value:1}],
        [{name:'HGH'},{name:'JHG',value:1}],
        [{name:'DLU'},{name:'KWE',value:1}],
        [{name:'KWE'},{name:'MIG',value:1}],
        [{name:'CAN'},{name:'FUG',value:1}],
        [{name:'CAN'},{name:'TEN',value:1}],
        [{name:'SZX'},{name:'TXN',value:1}],
        [{name:'CGO'},{name:'NGB',value:1}],
        [{name:'LJG'},{name:'NNG',value:1}],
        [{name:'CSX'},{name:'SHE',value:1}],
        [{name:'HRB'},{name:'OHE',value:1}],
        [{name:'XMN'},{name:'YIW',value:1}],
        [{name:'PVG'},{name:'YBP',value:1}],
        [{name:'KMG'},{name:'YBP',value:1}],
        [{name:'CGQ'},{name:'TYN',value:1}],
        [{name:'HFE'},{name:'SWA',value:1}],
        [{name:'XIY'},{name:'YNZ',value:1}],
        [{name:'HAK'},{name:'SWA',value:1}],
        [{name:'HIA'},{name:'WNZ',value:1}],
        [{name:'ENY'},{name:'PEK',value:1}],
        [{name:'LHW'},{name:'SJW',value:1}],
        [{name:'CSX'},{name:'CZX',value:1}],
        [{name:'HRB'},{name:'JNG',value:1}],
        [{name:'LHW'},{name:'LXA',value:1}],
        [{name:'LJG'},{name:'TCZ',value:1}],
        [{name:'AQG'},{name:'CAN',value:1}],
        [{name:'PVG'},{name:'TNA',value:1}],
        [{name:'CAN'},{name:'LYG',value:1}],
        [{name:'JIQ'},{name:'PEK',value:1}],
        [{name:'CAN'},{name:'LYA',value:1}],
        [{name:'HAK'},{name:'ZHA',value:1}],
        [{name:'CGQ'},{name:'SJW',value:1}],
        [{name:'SHA'},{name:'XUZ',value:1}],
        [{name:'ACX'},{name:'KWE',value:1}],
        [{name:'KMG'},{name:'XNN',value:1}],
        [{name:'KWE'},{name:'YIH',value:1}],
        [{name:'JJN'},{name:'NNG',value:1}],
        [{name:'DLC'},{name:'FOC',value:1}],
        [{name:'CGQ'},{name:'HET',value:1}],
        [{name:'HET'},{name:'URC',value:1}],
        [{name:'INC'},{name:'LXA',value:1}],
        [{name:'KWE'},{name:'TEN',value:1}],
        [{name:'DSN'},{name:'WUH',value:1}],
        [{name:'CKG'},{name:'LYA',value:1}],
        [{name:'TYN'},{name:'YCU',value:1}],
        [{name:'SYX'},{name:'ZHA',value:1}],
        [{name:'CAN'},{name:'SWA',value:1}],
        [{name:'CGQ'},{name:'FOC',value:1}],
        [{name:'CTU'},{name:'HDG',value:1}],
        [{name:'CAN'},{name:'KWL',value:1}],
        [{name:'NDG'},{name:'PVG',value:1}],
        [{name:'NNY'},{name:'SHA',value:1}],
        [{name:'CTU'},{name:'WXN',value:1}],
        [{name:'CGO'},{name:'UYN',value:1}],
        [{name:'IQN'},{name:'XIY',value:1}],
        [{name:'TVS'},{name:'TYN',value:1}],
        [{name:'KWL'},{name:'LHW',value:1}],
        [{name:'KMG'},{name:'LYA',value:1}],
        [{name:'LZH'},{name:'SZX',value:1}],
        [{name:'KWL'},{name:'SWA',value:1}],
        [{name:'NTG'},{name:'WUH',value:1}],
        [{name:'NKG'},{name:'YCU',value:1}],
        [{name:'XIY'},{name:'YIW',value:1}],
        [{name:'INC'},{name:'KWL',value:1}],
        [{name:'XIY'},{name:'YIH',value:1}],
        [{name:'INC'},{name:'KWE',value:1}],
        [{name:'LJG'},{name:'SHA',value:1}],
        [{name:'HLD'},{name:'HRB',value:1}],
        [{name:'CHG'},{name:'DLC',value:1}],
        [{name:'DAT'},{name:'PVG',value:1}],
        [{name:'PEK'},{name:'TEN',value:1}],
        [{name:'JGS'},{name:'XIY',value:1}],
        [{name:'NGB'},{name:'ZUH',value:1}],
        [{name:'PVG'},{name:'WEF',value:1}],
        [{name:'CKG'},{name:'YCU',value:1}],
        [{name:'CSX'},{name:'DLC',value:1}],
        [{name:'HFE'},{name:'KWL',value:1}],
        [{name:'SWA'},{name:'SYX',value:1}],
        [{name:'FOC'},{name:'TYN',value:1}],
        [{name:'CGQ'},{name:'KHN',value:1}],
        [{name:'BAV'},{name:'CTU',value:1}],
        [{name:'DSN'},{name:'SHE',value:1}],
        [{name:'CSX'},{name:'YCU',value:1}],
        [{name:'MDG'},{name:'SHE',value:1}],
        [{name:'HDG'},{name:'PVG',value:1}],
        [{name:'HFE'},{name:'SYX',value:1}],
        [{name:'DYG'},{name:'TSN',value:1}],
        [{name:'DDG'},{name:'PVG',value:1}],
        [{name:'SYX'},{name:'YTY',value:1}],
        [{name:'BFJ'},{name:'SZX',value:1}],
        [{name:'LHW'},{name:'SZX',value:1}],
        [{name:'BFJ'},{name:'KMG',value:1}],
        [{name:'MDG'},{name:'PVG',value:1}],
        [{name:'TGO'},{name:'TNA',value:1}],
        [{name:'JGS'},{name:'SZX',value:1}],
        [{name:'HAK'},{name:'TXN',value:1}],
        [{name:'NNG'},{name:'WUZ',value:1}],
        [{name:'HRB'},{name:'WUH',value:1}],
        [{name:'BFJ'},{name:'SHA',value:1}],
        [{name:'CAN'},{name:'XFN',value:1}],
        [{name:'CZX'},{name:'DLC',value:1}],
        [{name:'HGH'},{name:'ZUH',value:1}],
        [{name:'CKG'},{name:'SWA',value:1}],
        [{name:'CSX'},{name:'INC',value:1}],
        [{name:'KMG'},{name:'LXA',value:1}],
        [{name:'SHE'},{name:'YIW',value:1}],
        [{name:'CGO'},{name:'KHN',value:1}],
        [{name:'INC'},{name:'XUZ',value:1}],
        [{name:'HGH'},{name:'XFN',value:1}],
        [{name:'CTU'},{name:'XUZ',value:1}],
        [{name:'DLC'},{name:'HIA',value:1}],
        [{name:'DSN'},{name:'KMG',value:1}],
        [{name:'URC'},{name:'YIW',value:1}],
        [{name:'CGO'},{name:'YIW',value:1}],
        [{name:'TXN'},{name:'XIY',value:1}],
        [{name:'MDG'},{name:'TAO',value:1}],
        [{name:'CZX'},{name:'ZUH',value:1}],
        [{name:'DLC'},{name:'TXN',value:1}],
        [{name:'BAV'},{name:'URC',value:1}],
        [{name:'LYG'},{name:'PEK',value:1}],
        [{name:'GOQ'},{name:'XNN',value:1}],
        [{name:'CIF'},{name:'NKG',value:1}],
        [{name:'LZH'},{name:'ZUH',value:1}],
        [{name:'HAK'},{name:'TYN',value:1}],
        [{name:'CTU'},{name:'JNG',value:1}],
        [{name:'CAN'},{name:'JIU',value:1}],
        [{name:'FOC'},{name:'LYG',value:1}],
        [{name:'DAT'},{name:'XIY',value:1}],
        [{name:'AQG'},{name:'WUH',value:1}],
        [{name:'HRB'},{name:'YIW',value:1}],
        [{name:'LLF'},{name:'SZX',value:1}],
        [{name:'GXH'},{name:'LXA',value:1}],
        [{name:'LHW'},{name:'NKG',value:1}],
        [{name:'CGD'},{name:'XMN',value:1}],
        [{name:'KOW'},{name:'XMN',value:1}],
        [{name:'KWL'},{name:'NNG',value:1}],
        [{name:'CTU'},{name:'NNY',value:1}],
        [{name:'HRB'},{name:'JMU',value:1}],
        [{name:'CSX'},{name:'YTY',value:1}],
        [{name:'HET'},{name:'KHN',value:1}],
        [{name:'WUH'},{name:'YCU',value:1}],
        [{name:'KHG'},{name:'NGQ',value:1}],
        [{name:'INC'},{name:'KMG',value:1}],
        [{name:'CGQ'},{name:'HFE',value:1}],
        [{name:'CKG'},{name:'ZHA',value:1}],
        [{name:'CKG'},{name:'XIC',value:1}],
        [{name:'CAN'},{name:'HJJ',value:1}],
        [{name:'CAN'},{name:'XUZ',value:1}],
        [{name:'LJG'},{name:'TNA',value:1}],
        [{name:'DLC'},{name:'YNJ',value:1}],
        [{name:'DLC'},{name:'YNT',value:1}],
        [{name:'CSX'},{name:'XNN',value:1}],
        [{name:'KWE'},{name:'XNN',value:1}],
        [{name:'TSN'},{name:'TXN',value:1}],
        [{name:'KWE'},{name:'URC',value:1}],
        [{name:'HIA'},{name:'XIY',value:1}],
        [{name:'KWL'},{name:'TSN',value:1}],
        [{name:'HSN'},{name:'LYG',value:1}],
        [{name:'INC'},{name:'JGN',value:1}],
        [{name:'DLC'},{name:'XUZ',value:1}],
        [{name:'DNH'},{name:'HGH',value:1}],
        [{name:'NKG'},{name:'XNN',value:1}],
        [{name:'BHY'},{name:'LYA',value:1}],
        [{name:'BHY'},{name:'CGO',value:1}],
        [{name:'NKG'},{name:'PVG',value:1}],
        [{name:'DSN'},{name:'SJW',value:1}],
        [{name:'CGQ'},{name:'YNJ',value:1}],
        [{name:'SWA'},{name:'WUH',value:1}],
        [{name:'HFE'},{name:'NNG',value:1}],
        [{name:'PEK'},{name:'ZHY',value:1}],
        [{name:'CIH'},{name:'DAT',value:1}],
        [{name:'HSN'},{name:'SZX',value:1}],
        [{name:'BFJ'},{name:'KWE',value:1}],
        [{name:'KMG'},{name:'UYN',value:1}],
        [{name:'CAN'},{name:'CGD',value:1}],
        [{name:'CTU'},{name:'KGT',value:1}],
        [{name:'CKG'},{name:'DOY',value:1}],
        [{name:'CAN'},{name:'ZHA',value:1}],
        [{name:'LZH'},{name:'XMN',value:1}],
        [{name:'KMG'},{name:'LZO',value:1}],
        [{name:'KMG'},{name:'LZH',value:1}],
        [{name:'WUA'},{name:'XIY',value:1}],
        [{name:'CGD'},{name:'SZX',value:1}],
        [{name:'JNG'},{name:'KMG',value:1}],
        [{name:'ACX'},{name:'CKG',value:1}],
        [{name:'AQG'},{name:'CKG',value:1}],
        [{name:'KMG'},{name:'LLF',value:1}],
        [{name:'DSN'},{name:'HET',value:1}],
        [{name:'CGD'},{name:'SHA',value:1}],
        [{name:'CSX'},{name:'LZH',value:1}],
        [{name:'CSX'},{name:'HRB',value:1}],
        [{name:'BHY'},{name:'SJW',value:1}],
        [{name:'KWE'},{name:'TAO',value:1}],
        [{name:'CAN'},{name:'TVS',value:1}],
        [{name:'CIH'},{name:'SHA',value:1}],
        [{name:'HET'},{name:'INC',value:1}],
        [{name:'KHN'},{name:'WUH',value:1}],
        [{name:'DLC'},{name:'DOY',value:1}],
        [{name:'DLC'},{name:'HET',value:1}],
        [{name:'XNN'},{name:'ZHY',value:1}],
        [{name:'MIG'},{name:'XNN',value:1}],
        [{name:'HGH'},{name:'WEF',value:1}],
        [{name:'KWL'},{name:'WUH',value:1}],
        [{name:'HIA'},{name:'PEK',value:1}],
        [{name:'LZH'},{name:'SHA',value:1}],
        [{name:'KWE'},{name:'WUZ',value:1}],
        [{name:'SYX'},{name:'YCU',value:1}],
        [{name:'DIG'},{name:'JHG',value:1}],
        [{name:'AEB'},{name:'CKG',value:1}],
        [{name:'LYA'},{name:'SHE',value:1}],
        [{name:'LYA'},{name:'SHA',value:1}],
        [{name:'HIA'},{name:'TSN',value:1}],
        [{name:'PVG'},{name:'SJW',value:1}],
        [{name:'NAO'},{name:'SZX',value:1}],
        [{name:'CAN'},{name:'WEF',value:1}],
        [{name:'NKG'},{name:'URC',value:1}],
        [{name:'HAK'},{name:'XIY',value:1}],
        [{name:'FUG'},{name:'WNZ',value:1}],
        [{name:'DOY'},{name:'PEK',value:1}],
        [{name:'CAN'},{name:'HZH',value:1}],
        [{name:'DLC'},{name:'HDG',value:1}],
        [{name:'CGO'},{name:'NKG',value:1}],
        [{name:'CAN'},{name:'DIG',value:1}],
        [{name:'MIG'},{name:'SYX',value:1}],
        [{name:'CKG'},{name:'XUZ',value:1}],
        [{name:'DLC'},{name:'KHN',value:1}],
        [{name:'PVG'},{name:'TGO',value:1}],
        [{name:'NNG'},{name:'SWA',value:1}],
        [{name:'JIU'},{name:'SHA',value:1}],
        [{name:'FOC'},{name:'XUZ',value:1}],
        [{name:'SYX'},{name:'YBP',value:1}],
        [{name:'BHY'},{name:'CAN',value:1}],
        [{name:'CTU'},{name:'YIH',value:1}],
        [{name:'DSN'},{name:'URC',value:1}],
        [{name:'HGH'},{name:'URC',value:1}],
        [{name:'HGH'},{name:'JNZ',value:1}],
        [{name:'CGD'},{name:'PEK',value:1}],
        [{name:'HMI'},{name:'PVG',value:1}],
        [{name:'NAO'},{name:'PVG',value:1}],
        [{name:'LXA'},{name:'LZY',value:1}],
        [{name:'BHY'},{name:'CSX',value:1}],
        [{name:'KHN'},{name:'WNZ',value:1}],
        [{name:'JNG'},{name:'SHE',value:1}],
        [{name:'CIF'},{name:'HRB',value:1}],
        [{name:'HIA'},{name:'SZX',value:1}],
        [{name:'NZH'},{name:'PEK',value:1}],
        [{name:'CGO'},{name:'HMI',value:1}],
        [{name:'CTU'},{name:'JIQ',value:1}],
        [{name:'HFE'},{name:'LHW',value:1}],
        [{name:'BFJ'},{name:'CAN',value:1}],
        [{name:'WUH'},{name:'YNZ',value:1}],
        [{name:'LYI'},{name:'SZX',value:1}],
        [{name:'LZH'},{name:'WUH',value:1}],
        [{name:'DYG'},{name:'TYN',value:1}],
        [{name:'JZH'},{name:'XIY',value:1}],
        [{name:'BHY'},{name:'XIY',value:1}],
        [{name:'CKG'},{name:'DSN',value:1}],
        [{name:'MIG'},{name:'SHE',value:1}],
        [{name:'CSX'},{name:'DSN',value:1}],
        [{name:'BHY'},{name:'SZX',value:1}],
        [{name:'DSN'},{name:'HGH',value:1}],
        [{name:'MXZ'},{name:'ZUH',value:1}],
        [{name:'CKG'},{name:'JIQ',value:1}],
        [{name:'KWL'},{name:'SHE',value:1}],
        [{name:'JGS'},{name:'XMN',value:1}],
        [{name:'CKG'},{name:'XFN',value:1}],
        [{name:'CAN'},{name:'HIA',value:1}],
        [{name:'KHN'},{name:'SJW',value:1}],
        [{name:'NBS'},{name:'TSN',value:1}],
        [{name:'PEK'},{name:'WXN',value:1}],
        [{name:'CKG'},{name:'HIA',value:1}],
        [{name:'DLC'},{name:'TVS',value:1}],
        [{name:'TSN'},{name:'TYN',value:1}],
        [{name:'CIH'},{name:'TSN',value:1}],
        [{name:'CAN'},{name:'JGS',value:1}],
        [{name:'LJG'},{name:'TYN',value:1}],
        [{name:'HAK'},{name:'WNZ',value:1}],
        [{name:'CSX'},{name:'ZUH',value:1}],
        [{name:'FUG'},{name:'HGH',value:1}],
        [{name:'WUS'},{name:'XIY',value:1}],
        [{name:'NAO'},{name:'PEK',value:1}],
        [{name:'DSN'},{name:'NKG',value:1}],
        [{name:'HRB'},{name:'YCU',value:1}],
        [{name:'ACX'},{name:'PVG',value:1}],
        [{name:'CGD'},{name:'KMG',value:1}],
        [{name:'DLC'},{name:'LYA',value:1}],
        [{name:'LJG'},{name:'NGB',value:1}],
        [{name:'DLC'},{name:'LYI',value:1}],
        [{name:'CIF'},{name:'DLC',value:1}],
        [{name:'TNA'},{name:'WUS',value:1}],
        [{name:'CAN'},{name:'KOW',value:1}],
        [{name:'BAV'},{name:'NKG',value:1}],
        [{name:'LZH'},{name:'SYX',value:1}],
        [{name:'PVG'},{name:'SWA',value:1}],
        [{name:'YNZ'},{name:'NTG',value:1}],
        [{name:'HAK'},{name:'SHA',value:1}],
        [{name:'SHA'},{name:'INC',value:1}],
        [{name:'CAN'},{name:'YNZ',value:1}],
        [{name:'MIG'},{name:'SHA',value:1}],
*/
    ];
    var BJData = [
        [{name:'PEK'}, {name:'HGH',value:95}],
        [{name:'PEK'}, {name:'INC',value:90}],
        [{name:'PEK'}, {name:'SHA',value:80}],
        [{name:'PEK'}, {name:'XMN',value:70}],
        [{name:'PEK'}, {name:'CKG',value:60}],
        [{name:'PEK'}, {name:'KMG',value:50}],
        [{name:'PEK'}, {name:'HRB',value:40}],
        [{name:'PEK'}, {name:'DLC',value:30}],
        [{name:'PEK'}, {name:'XIY',value:20}],
        [{name:'PEK'}, {name:'WUH',value:10}]
    ];
    var SHData = [
        [{name:'PVG'},{name:'DLC',value:95}],
        [{name:'PVG'},{name:'XIY',value:90}],
        [{name:'PVG'},{name:'KWL',value:80}],
        [{name:'PVG'},{name:'CAN',value:70}],
        [{name:'PVG'},{name:'CKG',value:60}],
        [{name:'PVG'},{name:'CTU',value:50}],
        [{name:'PVG'},{name:'TAO',value:40}],
        [{name:'PVG'},{name:'KMG',value:30}],
        [{name:'PVG'},{name:'SHE',value:20}],
        [{name:'PVG'},{name:'INC',value:10}]
    ];
    var GZData = [
        [{name:'CAN'},{name:'HGH',value:95}],
        [{name:'CAN'},{name:'SHA',value:90}],
        [{name:'CAN'},{name:'CKG',value:80}],
        [{name:'CAN'},{name:'PVG',value:70}],
        [{name:'CAN'},{name:'WNZ',value:60}],
        [{name:'CAN'},{name:'XMN',value:50}],
        [{name:'CAN'},{name:'NKG',value:40}],
        [{name:'CAN'},{name:'CTU',value:30}],
        [{name:'CAN'},{name:'KMG',value:20}],
        [{name:'CAN'},{name:'TAO',value:10}]
    ];

    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push([{
                    name: dataItem[0].name,
                    coord: fromCoord
                }, {
                    name: dataItem[1].name,
                    coord: toCoord
                }]);
            }
        }
        return res;
    };

    var color = ['#46bee9','#a6c84c', '#ffa022', '#46bee9'];
    var series = [];
    [['ALL',Data],['PEK', BJData], ['PVG', SHData], ['CAN', GZData]].forEach(function (item, i) {
        if(i!=0){
            var data1 = item[1].map(function (dataItem) {
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                });
            data1.push({name:item[0],value:geoCoordMap[item[0]].concat([100])})
            series.push({
                name: item[0] + ' Top10',
                type: 'lines',
                zlevel: 1,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.7,
                    color: '#fff',
                    symbolSize: 3
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 0,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0] + ' Top10',
                type: 'lines',
                zlevel: 2,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: planePath,
                    symbolSize: 15
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 1,
                        opacity: 0.4,
                        curveness: 0.2
                    },
                    emphasis:{
                        width:2,
                        color:color[i+1]
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0] + ' Top10',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbolSize: function (val) {
                    return val[2] / 8;
                },
                itemStyle: {
                    normal: {
                        color: color[i]
                    }
                },
                data: data1,
            });}
        else{
            var data1=item[1].map(function (dataItem) {
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                });
            var data2=item[1].map(function (dataItem) {
                if(dataItem[0].value){
                    return {
                        name: dataItem[0].name,
                        value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                    };
                }
                else{
                    return {
                        name: dataItem[0].name,
                        value: geoCoordMap[dataItem[0].name].concat([10])
                    };
                }
                });
            var datax=data1.concat(data2);
            series.push({
                name: item[0],
                type: 'lines',
                zlevel: 1,
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 0,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0],
                type: 'lines',
                zlevel: 2,
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 1,
                        opacity: 0.4,
                        curveness: 0.2
                    },
                    emphasis:{
                        width:2,
                        color:color[1]
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0],
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbolSize: function (val) {
                    return val[2] / 8;
                },
                itemStyle: {
                    normal: {
                        color: color[i]
                    }
                },
                data: datax,
            });
        }
    });
    
    map_option = {
        backgroundColor: '#404a59',
        title : {
            text: 'Chinese Air Route',
            subtext: '',
            left: 'center',
            textStyle : {
                color: '#fff'
            }
        },
        tooltip : {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            data:['ALL','PEK Top10', 'PVG Top10', 'CAN Top10'],
            textStyle: {
                color: '#fff'
            },
            selectedMode: 'single'
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: true,
                    textStyle:{
                        color:'#46bee9'
                    }
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#404a59'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            },
            silent:true,
        },
        series: series
    };
    map_chart.hideLoading();
    map_chart.setOption(map_option);

    count=0;
    mychart = echarts.init(document.getElementById("echart-forced"));
    mychart.showLoading();

    var filepath='graph/'+file;
    document.getElementById("show-file-name").innerHTML="Network ID: "+" "+file;

    $.get(filepath, function (xml) {
        echart_forced = echarts.dataTool.gexf.parse(xml);

        init_matrix(echart_forced);
        ori_matrix(echart_forced);
        update_table();
        efficiency();


        set_init();

        mychart.hideLoading();
        categories = [];
        for (var i = 0; i < 10; i++) {
            categories[i] = {
                name: 'Group' + i,
            };
        }
        echart_forced.nodes.forEach(function (node) {
            node.itemStyle = null;
            node.value = node.symbolSize;
            node.category = node.attributes.modularity_class;
            node.degree = node.attributes.degree;
            node.draggable = false;
            node.label = {
                normal: {
                    show: node.degree > 50
                }
            };
        });
        option = {
            title: {
                text: file,
                subtext: 'Default layout',
                top: 'bottom',
                left: 'right'
            },
            tooltip: {},
            toolbox:{
                show: true,
                feature: {
                    dataView: {
                        //默认显示的是第一列 id {b}  第二列 value {c}（数据值）
                        readOnly: false,
                        optionToContent: function(opt) {
                            var series = opt.series;
                            var table = '<table style="width:100%;text-align:center"><tbody><tr>'
                                         + '<td>节点id</td>'
                                         + '<td>节点weight</td>'
                                         + '</tr>';
                            for (var i = 0;i < count; i++) {
                                table += '<tr>'
                                         + '<td>' + promatrix[i][0] + '</td>'
                                         + '<td>' + promatrix[i][2] + '</td>'
                                         + '</tr>';
                            }
                            table += '</tbody></table>';
                            return table;
                        }
                    },
                    restore: {},
                    saveAsImage: {},
                },
                itemSize:20,
                orient:'vertical',

            },
            legend: [{
                // selectedMode: 'single',
                data: categories.map(function (a) {
                    return a.name;
                }),
                selected:{},
                textStyle:{
                    color:'gray',
                }
            }],
            animationDuration: 1500,
            animationEasingUpdate: 'quvaricInOut',
            series : [
                {
                    name: 'air-traffic',
                    type: 'graph',
                    layout: 'circular',
                    data: echart_forced.nodes,
                    links: echart_forced.links,
                    categories: categories,
                    roam: true,
                    label: {
                        normal: {
                            position: 'top',
                            formatter: '{b}' //a为系列名，b为数据名，c为数据值
                        },
                        emphasis:{
                            position: 'top',
                            formatter: '{c}'
                        }
                    },
                    lineStyle:{
                        normal: {
                        curveness: 0.3
                        }
                    },
                    /*
                    force: {
                        repulsion: 1000
                    }
                    */
                }
            ],
            silent:true,
            lineStyle:{
                normal:{
                    width:2,
                    curveness:0.3
                },
                emphasis:{
                    width:3,
                    color:'#FFD700'
                }
            },
        };

        mychart.setOption(option);
        window.addEventListener("resize", function () {
            mychart.resize(); 
            pocc_chart.resize(); 
        });
        //window.onresize = mychart.resize;
    }, 'xml');
}

function show_rv_rp(delete_node_id){
    rv_rp_line_chart = echarts.init(document.getElementById("rv-rp-line-chart"));
    rv_rp_line_chart.showLoading();

    option_rv_rp = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['RV','RP']
        },
        toolbox: {
            show: true,
            feature: {
                //dataZoom: {},
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            },

        },
        xAxis:  [
            {
                type: 'category',
                data: []
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'RV',
                min: 0,
                max: 2,
                interval: 0.4,
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                type: 'value',
                name: 'RP',
                min: 0,
                max: 1,
                interval: 0.2,
                axisLabel: {
                    formatter: '{value}'
                }
            }
        ],
        dataZoom: [
            {
                type: 'slider',
                show: true,
                xAxisIndex: [0],
                start: 0,
                end: 100
            },
            
        ],
        series: [
            {
                name:'RV',
                type:'line',
                data:[],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        //{type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'RP',
                type:'line',
                data:[],
                yAxisIndex:1,
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        //{type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'},
                        [{
                            symbol: 'arrow',
                            label: {
                                normal: {
                                    formatter: '最大值'
                                }
                            },
                            type: 'max',
                            name: '最大值'
                        }, {
                            symbol: 'circle',
                            x: '60%',
                            y: '50%'
                        }]
                    ]
                },
            }
        ]
    };

    for(var i=0;i<count;i++){
        option_rv_rp.xAxis[0].data.push(i);
        option_rv_rp.series[0].data.push(ReplacementValue(i,delete_node_id,count).toFixed(2) );
        option_rv_rp.series[1].data.push(ReplaceProbability(i,delete_node_id,count).toFixed(2) );

    }
    //console.log(option_rv_rp.xAxis[0].data);
    //console.log(option_rv_rp.series[0].data);

    rv_rp_line_chart.hideLoading();

    rv_rp_line_chart.setOption(option_rv_rp);
    window.onresize = rv_rp_line_chart.resize;
}

function init_matrix(graph){
    graph.nodes.forEach(function (node) {
            dic[node.id]=count;
            count+=1;
        });
    tmp = count;
    //console.log(count);
    //初始化数组

    for (var i=0;i<count;i++){
        adjmatrix[i] = new Array();
        promatrix[i] = new Array();
        re_promatrix[i] = new Array();
        re_adjmatrix[i] = new Array();
    }

    for (var i=0;i<count;i++){
        for (var j=0;j<count;j++){
            adjmatrix[i][j] = 0;
            re_adjmatrix[i][j] = 0;
        }
    }

    for (var i=0;i<count;i++){
        for (var j=0;j<5;j++){
            if (j==1){
                promatrix[i][j] = '';
                re_promatrix[i][j] = '';
            }
            else{
                promatrix[i][j] = 0;
                re_promatrix[i][j] = 0;
            }
        }
    }
}

function ori_matrix(graph){
    graph.links.forEach(function(edge){
        var i = dic[edge.source];
        var j = dic[edge.target];
        adjmatrix[i][j] = adjmatrix[j][i] = 1;
    });
    graph.nodes.forEach(function (node) {
        promatrix[dic[node.id]][0] = dic[node.id];
        promatrix[dic[node.id]][1] = node.name;
        promatrix[dic[node.id]][2] = node.weight;
        promatrix[dic[node.id]][3] = node.attributes.modularity_class;
        promatrix[dic[node.id]][4] = degree(dic[node.id],-1);
    });

    

    //console.log(adjmatrix);
    //console.log(promatrix);

    POCC(count);
}

function node_remove(){
    
    var x = document.getElementById('remove-id').value;
    y = document.getElementById('remove-id-info');
    y.value = x;
    R=parseInt(x);
    reshape_matrix(R);

    var text='Group'+R;
    option.legend[0].selected[text] = false;
    mychart.setOption(option);
}

function node_add(){
    var add_node_id = count++;
    var add_node_name = document.getElementById('add-node-name').value;
    var add_node_group = parseInt(document.getElementById('add-node-group').value);
    var add_node_weight = parseInt(document.getElementById('add-node-weight').value);

    //更新 adjmatrix % promatrix
    var newadj=new Array();
    for(var i=0;i<count;i++)
        newadj.push(0);
    adjmatrix.push(newadj);

    for(var i=0;i<count-1;i++){
        adjmatrix[i].push(0);
    }
    var newpro=new Array(add_node_id,add_node_name,add_node_weight,add_node_group,degree(add_node_id,-1));
    promatrix.push(newpro);

    //更新promatrix table 信息
    update_table();

    //添加category信息
    categories.push({name:'节点'+add_node_id});
    option.legend[0].data.push("Group"+add_node_id);

    //添加节点信息
    option.series[0].data.push({id: add_node_id, name: add_node_name,label:{normal:{show: true}}, weight: add_node_weight, symbolSize: 5*add_node_weight, draggable:false, value: add_node_weight, category: add_node_group});

    //y = document.getElementById('add-node-id');
    console.log('成功添加id为 '+add_node_id+' 的节点！');
    mychart.setOption(option);
    console.log(adjmatrix);
    console.log(promatrix);
    document.getElementById('add-node-name').value='';
    document.getElementById('add-node-weight').value='';
    document.getElementById('add-node-group').value='';
}

function node_delete () {
    set_block_2();

    var delete_node_id = parseInt(document.getElementById('delete-node-id').value);

    //categories[delete_node_id] = '';
    if(delete_node_id<count&&promatrix[delete_node_id][2]!=0){
        Candidate(delete_node_id,k,count);

        for(var i=0;i<count;i++){
            if(adjmatrix[delete_node_id][i]==1){
                adjmatrix[delete_node_id][i]=0;
                adjmatrix[i][delete_node_id]=0;
                promatrix[i][4]=degree(i,-1);
            }
        }
        

        for(var i=0;i<option.series[0].data.length;i++){
            if(option.series[0].data[i]["id"]==delete_node_id){
                option.series[0].data.splice(i,1);
            }
        }
        for (var i = 0; i<option.series[0].links.length;i++){
            if((option.series[0].links[i]["source"]==delete_node_id || option.series[0].links[i]["target"]==delete_node_id)){
                option.series[0].links[i]='';
            }
        }

        document.getElementById('delete-node-id').value='';
        console.log('成功删除id为 '+delete_node_id+' 的节点！');
        //console.log(option.series[0].data);
        mychart.setOption(option);
        for(var i=0;i<count;i++){
            console.log("ReplacementValue of "+i+" is: "+ReplacementValue(i,delete_node_id,count));
            console.log("ReplaceProbability of "+i+" is: "+ReplaceProbability(i,delete_node_id,count));
            if(ReplaceProbability(i,delete_node_id,count)>0){
                //option_candidate.legend.data.push("node "+i);
                option_candidate.series[0].data.push({value:ReplaceProbability(i,delete_node_id,count).toFixed(3),name:"node "+i});
            }
        }
        if(option_candidate.series[0].data.length==0){
            option_candidate.series[0].data.push({value:0,name:"No Candidates"});
        }

        candidate_chart.setOption(option_candidate);

        show_rv_rp(delete_node_id);
        promatrix[delete_node_id][2]=0;
        promatrix[delete_node_id][3]=0;
        promatrix[delete_node_id][4]=0;
        update_table();
        window.addEventListener("resize", function () {
            mychart.resize(); 
            pocc_chart.resize();
            rv_rp_line_chart.resize();
            candidate_chart.resize();
        });
    }
    else{
        alert("节点不存在!");
    }
    
}

function link_add(){
    var add_link_source = document.getElementById('add-link-source').value;
    var add_link_target = document.getElementById('add-link-target').value; 

    if(add_link_source<count&&add_link_target<count&&adjmatrix[add_link_source][add_link_target]==0){
        adjmatrix[add_link_target][add_link_source]=1;
        adjmatrix[add_link_source][add_link_target]=1;
        promatrix[add_link_source][4]++;
        promatrix[add_link_target][4]++;
        update_table();

        //添加连边信息
        option.series[0].links.push({source:add_link_source,target:add_link_target});

        //更新 adjmatrix & promatrix
        adjmatrix[add_link_target][add_link_source]=1;
        adjmatrix[add_link_source][add_link_target]=1;
        promatrix[add_link_target][4]=degree(add_link_target,-1);
        promatrix[add_link_source][4]=degree(add_link_source,-1);
        console.log('成功添加连边： '+add_link_source+'   to   '+add_link_target);
    }
    else if(add_link_source>=count||add_link_target>=count){
        alert("节点不存在!")
    }
    else{
        alert("连边已存在!");
    }

    mychart.setOption(option);
    document.getElementById('add-link-source').value='';
    document.getElementById('add-link-target').value='';  
}

function link_delete(){
    delete_link_source = document.getElementById('delete-link-source').value;
    delete_link_target = document.getElementById('delete-link-target').value;

    //更新 adjmatrix & promatrix
    if(delete_link_source<count&&delete_link_target<count&&adjmatrix[delete_link_target][delete_link_source]==1){
        adjmatrix[delete_link_source][delete_link_target]=0;
        adjmatrix[delete_link_target][delete_link_source]=0;
        promatrix[delete_link_source][4]=degree(delete_link_source,-1);
        promatrix[delete_link_target][4]=degree(delete_link_target,-1);
        console.log('成功删除连边： '+delete_link_source+'   to   '+delete_link_target);
        update_table();
        for (var i = 0; i<option.series[0].links.length;i++){
            if((option.series[0].links[i]["source"]==delete_link_source && option.series[0].links[i]["target"]==delete_link_target)||(option.series[0].links[i]["source"]==delete_link_target&& option.series[0].links[i]["target"]==delete_link_source)){
                option.series[0].links[i]='';
            }
        }
        mychart.setOption(option);
    }
    else{
        alert("连边不存在!");
    }

    document.getElementById('delete-link-source').value='';
    document.getElementById('delete-link-target').value='';
}

//更新promatrix table
function update_table(){

    //var content="";
    var table_content=new Array();
    for(var i=0;i<count;i++){
        //content+="<tr><td>"+promatrix[i][0]+"</td><td>"+promatrix[i][1]+"</td><td>"+promatrix[i][2]+"</td><td>"+promatrix[i][3]+"</td><td>"+promatrix[i][4]+"</td></tr>";
        table_content.push([promatrix[i][0],promatrix[i][1],promatrix[i][2],promatrix[i][3],promatrix[i][4]]);
    }
    //document.getElementById("promatrix-table").innerHTML=content;
    $(document).ready(function () {
        $('#dataTables-example').dataTable({
            bDestroy:true,
            data:table_content,
        });
    });
}

function reshape_matrix(r){
    graph.links.forEach(function(edge){
        var i = dic[edge.source];
        var j = dic[edge.target];
        if(i==r||j==r)
            re_adjmatrix[i][j] = re_adjmatrix[j][i] = 0;
        else
            re_adjmatrix[i][j] = re_adjmatrix[j][i] = 1;
    });

    graph.nodes.forEach(function (node) {
        node.id = dic[node.id];
        if(node.id!=r){
            re_promatrix[node.id][0] = node.id;
            re_promatrix[node.id][1] = node.name;
            re_promatrix[node.id][2] = node.weight;
            re_promatrix[node.id][3] = node.attributes.modularity_class;
            re_promatrix[node.id][4] = degree(node.id,r);
        }
        else
            re_promatrix[node.id][0] = r;
    });


    //console.log(re_adjmatrix);
    //console.log(re_promatrix);
}

function degree(v,r){
    var tmp=0;
    for(var i=0;i<count;i++){
        if(adjmatrix[v][i]==1&&i!=r)
            tmp+=1;
    }
    return tmp;
}

function efficiency(){
    for (var i=0;i<count;i++)
        eff += promatrix[i][2] * promatrix[i][4]
    //console.log("efficiency of the network is: "+eff);
}

function re_efficiency () {
    for(var i=0;i<count;i++)
        re_eff+= re_promatrix[i][2] * re_promatrix[i][4]
}

//Dijkstra算法，传入源顶点
function Dijkstra(v,r,n){        //Dijkstra算法，传入源顶点

    var parent=new Array();           //每个顶点的父亲节点，可以用于还原最短路径树
    var visited=[];         //用于判断顶点是否已经在最短路径树中，或者说是否已找到最短路径
    var d = new Array();               //源点到每个顶点估算距离，最后结果为源点到所有顶点的最短路。
    var q = new Array();

    for(var i = 0; i < n; i++)     //初始化
    {
        d.push({id:i,weight:INF});          //估算距离置INF
        parent[i] = -1;             //每个顶点都无父亲节点
        visited[i] = false;
     }

     d[v].weight = 0;                //源点到源点最短路权值为0
     q.push(d[v]);                   //压入队列中

     while(q.length!=0)               //算法的核心，队列空说明完成了操作
     {
         var cd = q.pop();
         //node cd = q.top();          //取最小估算距离顶点

         var u = cd.id;

         if(visited[u])
             continue;

         visited[u] = true;

         //松弛操作·

         for(var j = 0; j <n; j++) //找所有与他相邻的顶点，进行松弛操作，更新估算距离，压入队列。
         {
            //console.log(j);
             if(j != u && !visited[j] && d[j].weight > d[u].weight+adjmatrix[u][j]&&adjmatrix[u][j]!=0)
             {
                d[j].weight = d[u].weight+adjmatrix[u][j];
                //cout<<j<<" "<<d[j].weight<<endl;
                parent[j] = u;
                q.push(d[j]);
            }
        }
     }
     return d[r].weight;
}

function POCC(count){
    var pocc;
    var a = new Array();

    pocc_chart = echarts.init(document.getElementById("pocc-bar-chart"));
    pocc_chart.showLoading();
    option_pocc = {
        tooltip: {
            trigger: 'axis'
        },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        legend: {
            data:['POCC','CC','平均温度']
        },
        xAxis: [
            {
                type: 'category',
                data: [],
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'POCC',
                min: 0,
                max: 1,
                interval: 0.1,
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                type: 'value',
                name: 'CC',
                min: 0,
                max: 1,
                interval: 0.2,
                axisLabel: {
                    formatter: '{value} '
                }
            }
        ],
        dataZoom: [
            {
                type: 'slider',
                show: true,
                xAxisIndex: [0],
                start: 0,
                end: 100
            },
            
        ],
        series: [
            {
                name:'POCC',
                type:'bar',
                data:[],
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                },
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
            },
            {
                name:'CC',
                type:'bar',
                yAxisIndex: 1,
                data:[],
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                },
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
            },
            /*{
                name:'平均温度',
                type:'line',
                data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }*/
        ]
    };

    for(var i = 0;i < count;i++){
        a[i] = 0;
        option_pocc.xAxis[0].data.push(i);
    }

    for(var i=0;i<count;i++){ //i为目标点
        var num1=0,num2=0;

        for(var j=0;j<count;j++){ //其余点到i的距离
            if((Dijkstra(j,i,count)<=k)&&(j!=i)){
                a[j]+=1;
                num1+=1;
            }
        }

        for(var p=0;p<count-1;p++){
            for(var m=p+1;m<count;m++){
                if((a[p]==1)&&(a[m]==1)&&(adjmatrix[p][m]==1))
                    num2+=1;
            }
        }

        if(num2<=1){
            option_pocc.series[0].data.push(0);
            //console.log("POCC of Vertix "+i+" is: 0")
        }
        else{
            pocc=2*num2/(num1*(num1-1));
            option_pocc.series[0].data.push(pocc.toFixed(3) );
            //console.log("POCC of Vertix "+i+" is: "+pocc);
        }

        option_pocc.series[1].data.push(cc(i).toFixed(3) );
        
        for(var l=0;l<count;l++)
            a[l]=0;

    }
    
    pocc_chart.hideLoading();

    pocc_chart.setOption(option_pocc);
    window.onresize = pocc_chart.resize;
    return pocc;
}

//聚类系数
function cc(i){
    var c=0;
    var tmp=0;
    for(var j =0;j<count;j++){
        if(adjmatrix[i][j]==1){
            for(var k=0;k<count;k++){
                if(adjmatrix[k][j]==1&&adjmatrix[k][i]==1){
                    tmp++;
                }
            }
        }
    }
    if(promatrix[i][4]!=1)
        c=tmp/(promatrix[i][4]*(promatrix[i][4]-1));
    else
        c=0;
    return c;
}

//计算WRP（weighted removal pagerank）
function WRP(v,r,count){
    var totalweight=0;
    var wrp=0;
    var singleweight=promatrix[v][2]; // weight of v

    if(v==r)
        return 0;

    for(var i=0;i<count;i++)
        totalweight+=promatrix[i][2];  //total weight of all vertices

    totalweight-=(promatrix[r][2]); //total weight of all vertices except r

    wrp+=(1-t)*singleweight/totalweight;

    for(var j=0;j<count;j++){
        if(j!=r&&adjmatrix[v][j]==1){
            wrp+=t/((count-1)*degree(j,r));
        }
    }
    //console.log(wrp);
    return wrp;
}

//计算replacement value
function ReplacementValue(v,r,count){
    var rv=0;
    var a=new Array(0.8,0.2);

    if(v==r)
        return 0;
    rv = a[0]*WRP(v,r,count);

    for(var i=1;i<2;i++){
        rv += a[i]*promatrix[v][2];
    }
    //console.log(rv);
    return rv;
}

function Candidate(r,k,count){
    var flag=false;
    for(var i = 0;i < count;i++)
        candidate[i] = 0;

    candidate_chart = echarts.init(document.getElementById("candidate-pie-chart"));
    candidate_chart.showLoading();
    option_candidate = {
        title : {
            text: 'Candidates & ReplaceProbability',
            x:'left'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            x : 'center',
            y : 'bottom',
            data:[]
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel']
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'Candidates for node '+r,
                type:'pie',
                radius : [20, 110],
                center : ['50%', 200],
                roseType : 'radius',
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                lableLine: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:[]
            },
        ]
    };
    candidate_chart.hideLoading();

    candidate_chart.setOption(option_candidate);
    window.onresize = candidate_chart.resize;


    for(var i=0;i<count;i++){
        if(i!=r)
            if(promatrix[i][2]<=promatrix[r][2])
                if(Dijkstra(i,r,count)<=k)
                    if(WRP(i,r,count)>=0){             
                        candidate[i]=i;
                        flag=true;
                    }
    }

    if(!flag){
        console.log("There is no candidate for the node "+r);
        //ui->result_cal->append(a);
    }
    else{
        console.log("The Candidate Set of node "+r+" is");
        //ui->result_cal->append(a);

        var b="";
        for(var i=0;i<count;i++)
            if(candidate[i]!=0)
                b = b + candidate[i] + " ";
        //ui->result_cal->append(b);
        console.log(b);
    }


    //ui->result_cal->append("");
}

function ReplaceProbability(v,r,count){
    var p=0,tmp=0;

    if(v==r)
        return 0;

    for(var i=0;i<count;i++){
        if(candidate[i]==i)
            tmp+=ReplacementValue(i,r,count);
    }

    if(candidate[v]!=0){
        p=ReplacementValue(v,r,count)/tmp;
        if(p>max){
            predict=v;
            max=p;
        }
    }    
    else
        p=0;
    return p;
}

