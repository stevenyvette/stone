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
    var filepath='graph/'+file;
    document.getElementById("show-file-name").innerHTML="Network ID: "+" "+file;
    //document.getElementById("graph-reshape-nav").style.display="block";
    //document.getElementById("graph-remove-nav").style.display="block";
    //document.getElementById("relationship-reshape-nav").style.display="block";
    //document.getElementById("relationship-remove-nav").style.display="block";

    //forced_chart
    forced_chart = echarts.init(document.getElementById("graph"));
    forced_chart.showLoading();
    $.get(filepath, function (xml) {
        echart_forced = echarts.dataTool.gexf.parse(xml);
        forced_chart.hideLoading();
        categories = [];
        for (var i = 0; i < 10; i++) {
            categories[i] = {
                name: 'Group' + i,
            };
        }
        echart_forced.nodes.forEach(function (node) {
            node.itemStyle = null;
            node.value = node.weight;
            node.category = node.attributes.modularity_class;
            node.symbolSize = node.weight*1.3;
            node.draggable = true;
            node.label = {
                normal: {
                    show: node.weight > 15
                }
            };
        });
        forced_chart_option = {
            title: {
                text: file,
                subtext: 'nodes: each node represent a person'+'\n'
                +'links: each link represent a relationship between two persons',
                bottom: '20px',
                left: 'right'
            },
            tooltip: {
                formatter:function (params) {
                    if (params.value) {
                        return 'Name: '+ params.name + ' </br>'
                           + 'Node ID:' + promatrix[params.dataIndex][0]+'</br>'
                           + 'Degree:' + promatrix[params.dataIndex][4]+'</br>'
                           + 'Weight:' + promatrix[params.dataIndex][2]+'</br>'
                           + 'Role:' + params.data.category;
                    }
                    else {
                        return 'Link Id:' + params.dataIndex+' </br>'
                           + 'A relationship between:</br>'
                           +promatrix[parseInt(params.data.source)][1] + ' and '+promatrix[parseInt(params.data.target)][1];
                    }
                },
            },
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
                },
                
                tooltip: {
                    show: true,
                    formatter: '快捷按键:快速显示、隐藏属于',
                }
            }],
            series : [
                {
                    name: 'Les Miserables',
                    type: 'graph',
                    layout: 'force',
                    data: echart_forced.nodes,
                    links: echart_forced.links,
                    categories: categories,
                    symbol:'image://images/avtar.png',
                    roam: true,
                    focusNodeAdjacency:true,
                    draggable:true,
                    label: {
                        normal: {
                            position: 'top',
                            formatter: '{b}' //a为系列名，b为数据名，c为数据值
                        },
                        emphasis:{
                            position: 'top',
                            formatter: '{b}'
                        }
                    },
                    force: {
                        repulsion: 1200,
                        gravity: 0.1,
                        edgeLength:30,

                    },
                    lineStyle:{
                        normal:{
                            width:1,
                        },
                        emphasis:{
                            width:3,
                            color:'#FFD700'
                        }
                    },
                }
            ],
        };

        forced_chart.setOption(forced_chart_option);
        window.addEventListener("resize", function () {
            forced_chart.resize(); 
            pocc_chart.resize();
            degree_bc.resize(); 
        });
        //window.onresize = mychart.resize;
    }, 'xml');


    //degree_bc chart
    degree_bc = echarts.init(document.getElementById("degree-bc"));
    degree_bc.showLoading();
    degree_bc_option = {
        title : {
            text: 'Degree Distribution Chart',
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
                    return 'INFO' + ' :<br/>'
                       + 'Degree:'+params.value[0]+'</br>'
                       + 'Percent:'+parseFloat(params.value[1]).toFixed(3);
                }
                else {
                    return 'INFO' + ' :<br/>'
                       + params.name + ' : '
                       + parseFloat(params.value).toFixed(3) ;
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
            data: ['nodes'],
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
                name : 'Percent',
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
                name:'nodes',
                type:'scatter',
                data: [[36,0.012,'Valjean'],
                    [22,0.012,'Gavroche'],
                    [19,0.012,'Marius'],
                    [17,0.012,'Javert'],
                    [16,0.012,'Thenardier'],
                    [15,0.026,'Fantine'],
                    [13,0.026,'Courfeyrac'],
                    [12,0.026,'Bahorel'],
                    [11,0.039,'MmeThenardier'],
                    [10,0.065,'Myriel'],
                    [9,0.039,'Tholomyes'],
                    [8,0.052,'Bamatabois'],
                    [7,0.130,'Listolier'],
                    [6,0.065,'Judge'],
                    [4,0.039,'Fauchelevent'],
                    [3,0.078,'Toussaint'],
                    [2,0.130,'Child2'],
                    [1,0.221,'MotherPlutarch'],
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
        ]
    };

    degree_bc.hideLoading();
    degree_bc.setOption(degree_bc_option);

    //环形图
    count=0;
    mychart = echarts.init(document.getElementById("echart-forced"));
    mychart.showLoading();

    $.get(filepath, function (xml) {
        echart_circular = echarts.dataTool.gexf.parse(xml);

        init_matrix(echart_circular);
        ori_matrix(echart_circular);
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
        echart_circular.nodes.forEach(function (node) {
            node.itemStyle = null;
            node.value = node.symbolSize;
            node.category = node.attributes.modularity_class;
            node.degree = node.attributes.degree;
            node.draggable = false;
            node.label = {
                normal: {
                    show: node.symbolSize > 30
                }
            };
        });
        option = {
            title: {
                text: file,
                subtext: 'nodes: each node represent a person'+'\n'
                +'links: each link represent a relationship between two persons',
                bottom: '10px',
                left: 'right'
            },
            tooltip: {
                formatter:function (params) {
                    if (params.value) {
                        return 'Node: '+ params.name + ' <br/>'
                           + 'Node ID:' + promatrix[params.dataIndex][0]+'</br>'
                           + 'Degree:' + promatrix[params.dataIndex][4]+'</br>'
                           + 'Weight:' + promatrix[params.dataIndex][2]+'</br>'
                           + 'Role:' + params.data.category;
                    }
                    else {
                        return 'Link Id:' + params.dataIndex+' <br/>'
                           + 'source: '+promatrix[params.data.source][1] + '</br>'
                           + 'target: '+promatrix[params.data.target][1];
                    }
                }
            },
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
            animationEasingUpdate: 'quinticInOut',
            series : [
                {
                    name: 'air-traffic',
                    type: 'graph',
                    layout: 'circular',
                    data: echart_circular.nodes,
                    links: echart_circular.links,
                    categories: categories,
                    roam: true,                    
                    focusNodeAdjacency:true,
                    label: {
                        normal: {
                            show:true,
                            position: 'top',
                            formatter: '{b}' //a为系列名，b为数据名，c为数据值
                        },
                        emphasis:{
                            show:true,
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
                max: 10,
                interval: 1,
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
    console.log(predict);

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


    forced_chart_remove=echarts.init(document.getElementById("graph-remove"));
    forced_chart_reshape=echarts.init(document.getElementById("graph-reshape"));
    mychart_remove = echarts.init(document.getElementById("relationship-remove"));
    mychart_reshape = echarts.init(document.getElementById("relationship-reshape"));


    var delete_node_id = parseInt(document.getElementById('delete-node-id').value);

    //categories[delete_node_id] = '';
    if(delete_node_id<count&&promatrix[delete_node_id][2]!=0){
        Candidate(delete_node_id,k,count);

        for(var i=0;i<option.series[0].data.length;i++){
            if(option.series[0].data[i]["id"]==delete_node_id){
                option.series[0].data[i].itemStyle={normal:{color:"red"}};
                //option.series[0].data.splice(i,1);
            }
        }
        for(var i=0;i<forced_chart_option.series[0].data.length;i++){
            if(forced_chart_option.series[0].data[i]["id"]==delete_node_id){
                console.log(forced_chart_option.series[0].data[i]);
                forced_chart_option.series[0].data[i].itemStyle={normal:{color:"red"},emphasis:{symbol:'image://images/avtar.png'}};
                forced_chart_option.series[0].data[i].symbol='circle';

                //forced_chart_option.series[0].data.splice(i,1);
            }
        }
        for (var i = 0; i<option.series[0].links.length;i++){
            if((option.series[0].links[i]["source"]==delete_node_id || option.series[0].links[i]["target"]==delete_node_id)){
                option.series[0].links[i]='';
            }
        }
        for (var i = 0; i<forced_chart_option.series[0].links.length;i++){
            if((forced_chart_option.series[0].links[i]["source"]==delete_node_id || forced_chart_option.series[0].links[i]["target"]==delete_node_id)){
                forced_chart_option.series[0].links[i]='';
            }
        }


        document.getElementById('delete-node-id').value='';
        console.log('成功删除id为 '+delete_node_id+' 的节点！');
        //console.log(option.series[0].data);
        mychart.setOption(option);
        mychart_remove.setOption(option);
        forced_chart_remove.setOption(forced_chart_option);
        
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

        //根据predict开始reshape
        if(predict!=-1){
            for(var i=0;i<count;i++){
                if(adjmatrix[delete_node_id][i]==1&&adjmatrix[predict][i]!=1){
                    adjmatrix[delete_node_id][i]=0;
                    adjmatrix[i][delete_node_id]=0;
                    adjmatrix[i][predict]=1;
                    adjmatrix[predict][i]=1;
                    promatrix[i][4]=degree(i,-1);
                    forced_chart_option.series[0].links.push({source:i,target:predict});
                    option.series[0].links.push({source:i,target:predict});
                }
            }
            promatrix[predict][4]=degree(predict,-1);
            forced_chart_option.series[0].data[predict].symbol='circle';
            forced_chart_option.series[0].data[predict].itemStyle={normal:{color:'green'}};
            option.series[0].data[predict].itemStyle={normal:{color:'green'}};


            mychart_reshape.setOption(option);
            forced_chart_reshape.setOption(forced_chart_option);
        }


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
    //document.getElementById("graph-remove").style.display="none";
    document.getElementById("graph-reshape").style.display="none";
    document.getElementById("relationship-remove").style.display="none";
    document.getElementById("relationship-reshape").style.display="none";

    window.addEventListener("resize", function () {
            forced_chart_remove.resize(); 
            forced_chart_reshape.resize();
            mychart_remove.resize(); 
            mychart_reshape.resize();
        });

    
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
            data:['POCC','CC']
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

