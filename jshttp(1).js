{
//Type 0-xml、 1-json 、2-爬虫源 、3-自定义爬虫 、4-服务器爬虫。
"spider":"./fm.jar",
//"spider":"./pg.jar",
"logo": "https://raw.githubusercontent.com/sqspot/tac/main/謝分享.gif",
"lives":[

{"name":"綜合版 ijk","type":0,"url":"https://raw.githubusercontent.com/sqspot/tac/main/4gtv.txt","ua":"Mozilla/5.0(WindowsNT10.0;Win64;x64)AppleWebKit/537.36(KHTML,likeGecko)Chrome/108.0.0.0Safari/537.36","playerType":1,"epg":"https://epg.112114.xyz/?ch={name}&date={date}","logo":"https://epg.112114.xyz/logo/{name}.png","ads":["static-mozai.4gtv.tv","s3t3d2y8.afcdn.net"]},
{"name":"綜合版 exo","type":0,"url":"https://raw.githubusercontent.com/sqspot/tac/main/4gtv.txt","ua":"Mozilla/5.0(WindowsNT10.0;Win64;x64)AppleWebKit/537.36(KHTML,likeGecko)Chrome/108.0.0.0Safari/537.36","playerType":2,"epg":"https://epg.112114.xyz/?ch={name}&date={date}","logo":"https://epg.112114.xyz/logo/{name}.png","ads":["static-mozai.4gtv.tv","s3t3d2y8.afcdn.net"]},
{"name":"smart ijk","boot":false,"pass":true,"url":"https://t4.doube.eu.org/smt.txt","logo":"https://live.fanmingming.com/tv/{name}.png","playerType":1,"header":{"CLIENT-IP":"127.0.0.1","X-FORWARDED-FOR":"127.0.0.1"}},
{"name":"smart exo","boot":false,"pass":true,"url":"https://t4.doube.eu.org/smt.txt","logo":"https://live.fanmingming.com/tv/{name}.png","playerType":2,"header":{"CLIENT-IP":"127.0.0.1","X-FORWARDED-FOR":"127.0.0.1"}},
{"name":"安博 ijk","type":0,"url":"https://tang.hz.cz/zb/anbo?token=cb70f1ae","playerType":1},	
{"name":"安博 exo","type":0,"url":"https://tang.hz.cz/zb/anbo?token=cb70f1ae","playerType":2},	
{"name":"台湾 ijk","type":0,"url":"https://raw.githubusercontent.com/shawn82/fm/main/lib/taiwan.m3u","playerType":1},	
{"name":"台湾 exo","type":0,"url":"https://raw.githubusercontent.com/shawn82/fm/main/lib/taiwan.m3u","playerType":2},	
{"name":"Gather ijk","type":0,"url":"https://tv.iill.top/m3u/Gather","playerType":1},
{"name":"Gather exo","type":0,"url":"https://tv.iill.top/m3u/Gather","playerType":2},
{"name":"美国","type":0,"url":"https://raw.githubusercontent.com/shawn82/fm/main/lib/us.m3u8","playerType":2},
{"name":"飛龍影視","type":0,"playerType":1,"url":"https://gitlab.com/tvtg/vip/-/raw/main/fl2024.txt","epg":"http://epg.112114.xyz/?ch={name}&date={date}"},
{"name":"smt","type":0,"playerType":1,"url":"https://raw.githubusercontent.com/sqspot/tac/main/smt.txt","epg":"http://epg.112114.xyz/?ch={name}&date={date}"},
{"name":"4GTV豪華版 ijk",
"type":0,
"url":"https://raw.githubusercontent.com/sqspot/tac/main/4GTV豪華版.txt",
"ua":"Mozilla/5.0 (Linux; Android 11; M2101K9C Build/RKQ1.201112.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/76.0.3809.89 Mobile Safari/537.36 T7/12.16 SearchCraft/3.9.1 (Baidu; P1 11)",
"playerType":1,
"epg":"https://epg.112114.xyz/?ch={name}&date={date}",
"logo":"https://epg.112114.xyz/logo/{name}.png",
"ads":["static-mozai.4gtv.tv",
"s3t3d2y8.afcdn.net"]}

],
"sites" : [
{"key":"drpy","name":"🔥豆瓣(評分 0~10分)　　 🔥祝大家🤩好運🐉總來💯","type":3,"api":"./lib/drpy2.min.js","ext":"./js/豆瓣.js"},
{"key":"優質网","name":"🈚🔥優質zyk","type":0,"api":"https://api.1080zyku.com/inc/api.php","searchable":1,"changeable":1},
{"key":"魔都XML","name":"🈚🔥魔都XML","type":0,"api":"https://www.mdzyapi.com/api.php/provide/vod/at/xml/","searchable":1,"changeable":1},
{"key":"魔都JSON","name":"🈚🔥魔都JSON","type":1,"api":"https://www.mdzyapi.com/api.php/provide/vod/?ac=list","searchable":1,"changeable":1},
{"key":"量子網","name":"🈚🏆量子lz","type":1,"api":"http://cj.lziapi.com/api.php/provide/vod/","playUrl":"","searchable":1,"quickSearch":1,"categories":["国产剧","国产动漫","泰国剧","台湾剧","香港剧","欧美剧","韩国剧","日本剧","动漫","体育","剧情片","动作片","爱情片","喜剧片"]},
{"key":"暴风影视","name":"🈚🏆暴风bf","type":1,"playerType":2,"searchable":1,"changeable":1,"api":"http://app.bfzyapi.com/api.php/provide/vod/","playUrl":"","categories":["短剧","国产剧","国产动漫","动作片","科幻片","剧情片","喜剧片","爱情片","恐怖片","战争片","香港剧","台湾剧","日本剧","欧美剧","泰国剧","日本动漫","综艺频道","大陆综艺","港台综艺","日本综艺","新马泰综艺","纪录片"]},
{"key":"ikun网","name":"🈚🏆ikun","type":0,"api":"https://ikunzyapi.com/api.php/provide/vod/from/ikm3u8/at/xml","searchable":1,"changeable":1},
{"key":"夜貓_csp_Kuaikan","name":"🈚😾快看影视","type":3,"api":"csp_Kuaikan","searchable":1,"changeable":1,"jar":"./Xymz.jar"},
{"key":"U酷網","name":"🈚🏆U酷","type":1,"api":"https://api.ukuapi.com/api.php/provide/vod/","searchable":1,"changeable":1},
{"key":"ikanbotsq","name":"🈵爱看机器人sq","type":3,"api":"./lib/drpy2.min.js","ext":"./js/ikanbotsq.js","searchable":1,"changeable":1},
{"key":"索尼","name":"👑索尼","type":0,"api":"https://suoniapi.com/api.php/provide/vod/from/snm3u8/at/xml/","searchable":1,"changeable":1},
{"key":"最大","name":"👑最大","type":0,"api":"https://api.zuidapi.com/api.php/provide/vod/from/zuidam3u8/at/xml","searchable":1,"changeable":1},
！{"key":"lf_search","name":"🔎lf_搜索影片3","type":3,"searchable":0,"changeable":1,"quickSearch":0,"filterable":0,"api":"./lib/lf_search3_min.js"},
{"key":"drpy__豆瓣","name":"豆瓣🏛[DRPY]","type":3,"api":"./lib/drpy2.min.js","ext":"https://raw.githubusercontent.com/hjdhnx/dr_py/main/js/drpy.js"},
{"key":"PTT","name":"👑PTT采集综合","type":3,"api":"csp_PTT","searchable":1,"changeable":1},
{"key":"夜貓_drpy_xb","name":"👑小宝影视","type":3,"playerType":2,"api":"./lib/drpy2.min.js","ext":"./js/小宝影院2.js","searchable":1,"changeable":1},
{"key":"黑木耳","name":"👑黑木耳1","type":1,"api":"https://www.heimuer.tv/api.php/provide/vod","searchable":1,"changeable":1},
{"key": "heimuer","name": "👑黑木耳2","type": 1,"api": "https://json.heimuer.xyz/api.php/provide/vod/","searchable": 1,"quickSearch": 1,"filterable": 0,"header": {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"}},
{"key":"heimuerai","name":"黑木耳ai","type":1,"api":"https://json.heimuer.xyz/api.php/provide/vod/","searchable":1,"quickSearch":1,"filterable":0,"header":{"User-Agent":"Mozilla/5.0(WindowsNT10.0;Win64;x64)AppleWebKit/537.36(KHTML,likeGecko)Chrome/108.0.0.0Safari/537.36"},"ext":{"search":{"url":"https://json.heimuer.xyz/api.php/provide/vod/","params":{"ac":"list","wd":"{wd}"}},"detail":{"url":"https://json.heimuer.xyz/api.php/provide/vod/","params":{"ac":"detail","ids":"{ids}"}},"list":{"url":"https://json.heimuer.xyz/api.php/provide/vod/","params":{"ac":"list","pg":"{pg}"}}}},
{"key":"快车網","name":"👑快车kc","type":1,"api":"https://caiji.kczyapi.com/api.php/provide/vod/","searchable":1,"changeable":1},
{"key":"haiwaibaai","name":"海外吧ai","type":1,"api":"https://hw8.live/api.php/provide/vod/","searchable":1,"quickSearch":1,"filterable":0},
//{"key":"应用商店","name":"应用商店","type":3,"api":"csp_Market","searchable":0,"changeable":0,"ext":"./js/market.json","style":{"type":"rect","ratio":1}},
{"key":"非凡网","name":"🔥非凡ff","type":0,"api":"http://cj.ffzyapi.com/api.php/provide/vod/from/ffm3u8/at/xml/","searchable":1,"changeable":1},
{"key":"天空网","name":"👑天空tk","type":0,"api":"https://api.tiankongapi.com/api.php/provide/vod/at/xml/","searchable":1,"changeable":1},
{"key":"多瑙影视","name":"🈵多瑙影视♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/多瑙影视.js","searchable":1,"changeable":1},
{"key":"豪华","name":"🌅豪华hh","type":0,"api":"https://hhzyapi.com/api.php/provide/vod/from/hhm3u8/at/xml","searchable":1,"changeable":1},
{"key":"红牛","name":"🏆红牛hn","type":0,"api":"https://www.hongniuzy2.com/api.php/provide/vod/at/xml/","searchable":1,"changeable":1},
{"key":"八戒网","name":"🏆八戒bj","type":1,"api":"http://cj.bajiecaiji.com/inc/apijson_vod.php","searchable":1,"changeable":1},
{"key":"夜貓_短剧tv","name":"😾采集短剧","type":3,"api":"csp_XBPQ","ext":{"搜索链接":"http://www.duanjutv.cc/vodsearch/{wd}----------{pg}---.html","线路标题":"<h3*>&&</h3>","线路数组":"\"moretext-mutedpull-right\">&&</ul>","播放数组":"\"moretext-mutedpull-right\">&&</ul>","播放链接":"http+://www.duanjutv.cc+href='&&'","直接播放":"0","分类":"抖音短剧$20#快手短剧$21#视频号短剧$22#热播短剧$23","分类链接":"http://www.duanjutv.cc/vodtype/{cateId}-{catePg}.html;;m"},"jar":"./Xymz.jar","searchable":1,"changeable":1},
{"key":"夜貓_csp_红狐狸影视","name":"😾狐狸影视","type":3,"api":"csp_XBPQ","ext":{"分类url":"https://honghuli.com/leibiao/{cateId}-{area}-------{catePg}---{year}.html","分类":"电影$1#电视剧$2#综艺$3#动漫$4"},"jar":"./Xymz.jar"},
{"key":"drpy_js_360影视","name":"官源🏛360","type":3,"api":"./lib/drpy2.min.js","ext":"./js/360影视.js","searchable":1,"changeable":1},
{"key":"drpy_js_百忙无果","name":"官源🏛芒果","type":3,"api":"./lib/drpy2.min.js","ext":"./js/百忙无果.js","searchable":1,"changeable":1},
{"key":"drpy_js_奇珍异兽","name":"官源🏛爱奇艺🍭","type":3,"api":"./lib/drpy2.min.js","ext":"./js/奇珍异兽.js","searchable":1,"changeable":1},
{"key":"drpy_js_腾云驾雾","name":"官源🏛腾讯","type":3,"api":"./lib/drpy2.min.js","ext":"./js/腾云驾雾.js","searchable":1,"changeable":1},
{"key":"drpy_js_优酷","name":"官源🏛优酷","type":3,"api":"./lib/drpy2.min.js","ext":"./js/优酷.js","searchable":1,"changeable":1},
{"key":"金鷹网","name":"🌕金鷹jyz","type":0,"api":"https://jyzyapi.com/provide/vod/from/jinyingm3u8/at/xml/","searchable":1,"changeable":1},
{"key":"闪电","name":"😰闪电sd","type":1,"api":"http://sdzyapi.com/api.php/provide/vod/","searchable":1,"changeable":1},
{"key":"金鹰影视e","name":"😰金鹰影视","type":1,"api":"https://jinyingzy.com/provide/vod/from/jinyingm3u8/","searchable":1,"changeable":1},
{"key":"无尽网","name":"🌟无尽wj","type":0,"api":"https://api.wujinapi.me/api.php/provide/vod/from/wjm3u8/at/xml/","searchable":1,"changeable":1},
{"key":"飞兔影视js","name":"飞兔影视♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/飞兔影视.js","searchable":1,"changeable":1},
{"key":"金曼影视js","name":"金曼影视♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/金曼影视.js","searchable":1,"changeable":1},
{"key":"量子影视js","name":"量子影视♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/量子影视.js","playerType":"1","searchable":1,"changeable":1},
{"key":"酷云77js","name":"酷云77♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/酷云77.js","searchable":1,"changeable":1},
{"key":"蜥蜴影视js","name":"蜥蜴影视♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/蜥蜴影视.js","searchable":1,"changeable":1},
{"key":"纽约影院js","name":"纽约影院♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/纽约影院.js","searchable":1,"changeable":1},
{"key":"磁力熊[磁]js","name":"磁力熊[磁]♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/磁力熊[磁].js","searchable":1,"changeable":1},
{"key":"电影先生[V2]js","name":"电影先生[V2]♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/电影先生[V2].js","searchable":1,"changeable":1},
{"key":"爱迪影视js","name":"爱迪影视♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/爱迪影视.js","searchable":1,"changeable":1},
{"key":"爱迪[V2]js","name":"爱迪[V2]♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/爱迪[V2].js","searchable":1,"changeable":1},
{"key":"朴樱影视js","name":"朴樱影视♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/朴樱影视.js","searchable":1,"changeable":1},
{"key":"我爱跟剧js","name":"我爱跟剧♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/我爱跟剧.js","searchable":1,"changeable":1},
{"key":"思古影视js","name":"思古影视♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/思古影视.js","searchable":1,"changeable":1},
{"key":"布雷蓝光[V2]js","name":"布雷蓝光[V2]♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/布雷蓝光[V2].js","searchable":1,"changeable":1},
{"key":"小狗影院js","name":"小狗影院♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/小狗影院.js","searchable":1,"changeable":1},
{"key":"子子影视js","name":"子子影视♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/子子影视.js","searchable":1,"changeable":1},
{"key":"奇珍异兽js","name":"奇珍异兽♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/奇珍异兽.js","searchable":1,"changeable":1},
{"key":"多瑙影视js","name":"多瑙影视♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/多瑙影视.js","searchable":1,"changeable":1},
{"key":"厂长js","name":"厂长♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/厂长.js","searchable":1,"changeable":1},
{"key":"华乐影院js","name":"华乐影院♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/华乐影院.js","searchable":1,"changeable":1},
{"key":"北极狐[V2]js","name":"北极狐[V2]♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/北极狐[V2].js","searchable":1,"changeable":1},
{"key":"优酷js","name":"优酷♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/优酷.js","searchable":1,"changeable":1},
{"key":"两个BTjs","name":"两个BT♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/两个BT.js","searchable":1,"changeable":1},
{"key":"UM电影[V2]js","name":"UM电影[V2]♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/UM电影[V2].js","searchable":1,"changeable":1},
{"key":"NY影院js","name":"NY影院♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/NY影院.js","searchable":1,"changeable":1},
{"key":"gazejs","name":"gaze♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/gaze.js","searchable":1,"changeable":1},
{"key":"EMO蓝光[V2]js","name":"EMO蓝光[V2]♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/EMO蓝光[V2].js","searchable":1,"changeable":1},
{"key":"7喜影院js","name":"7喜影院♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/7喜影院.js","searchable":1,"changeable":1},
{"key":"69美剧js","name":"69美剧♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/69美剧.js","searchable":1,"changeable":1},
{"key":"4K电影网js","name":"4K电影网♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/4K电影网.js","searchable":1,"changeable":1},
{"key":"360影视js","name":"360影视♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/360影视.js","searchable":1,"changeable":1},
{"key":"天空影视js","name":"天空影视♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/天空影视.js","searchable":1,"changeable":1},
{"key":"星空影视js","name":"星空影视♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/星空影视.js","searchable":1,"changeable":1},
{"key":"萌蛋蛋[V2]js","name":"萌蛋蛋[V2]♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/萌蛋蛋[V2].js","searchable":1,"changeable":1},
{"key": "Youtube台灣新聞","name": "😰YouTube台灣新聞","type": 3,"style":{ "type":"oval" ,"searchable":1,"changeable":1},"api": "./Mud.js","ext": "./YouTube.txt","searchable":1,"changeable":1},
{"key":"直播转点播","name":"❤💻網路第四台txt格式","type":3,"style":{ "type":"oval" },"api":"./lib/live2cms.js","ext":"./live2tv_sq.txt"},
{"key":"直播转点播2","name":"❤💻網路第四台m3u格式","type":3,"searchable":0,"api":"./lib/live2vod.js","ext":"./live2tv_sq.m3u"},
{"key":"直播转点播s","name":"❤💻網路第四台txt♒","type":3,"style":{ "type":"oval" },"api":"./lib/live2cms.js","ext":"./live2tv_sq_s.txt"},
{"key":"直播转点播s2","name":"❤💻網路第四台m3u♒","type":3,"searchable":0,"api":"./lib/live2vod.js","ext":"./live2tv_sq_s.m3u"},
{"key":"ikanbot2","name":"爱看机器人2","type":3,"api":"./lib/drpy2.min.js","ext":"./js/ikanbot2.js"},
{"key":"ikanbot3","name":"爱看机器人3","type":3,"api":"./lib/drpy2.min.js","ext":"./js/ikanbot3.js"}
],
"parses":[
{"name":"解析聚合","type":3,"url":"Demo"},
{"name":"Json并发","type":2,"url":"Parallel"},
{"name":"Json轮询","type":2,"url":"Sequence"},
{"name":"modujx01","type":0,"url":"https://jiexi.modujx01.com/?url="},
{"name":"777","type":0,"url":"https://jx.777jiexi.com/player/?url="},
{"name":"17号线","type":0,"url":"https://www.yemu.xyz/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"看看","type":0,"url":"https://jx.m3u8.pw/?url="},
{"name":"360資源資源","type":0,"url":"https://www.360jiexi.com/player/?url="},
{"name":"暴風資源","type":0,"url":"https://bfzyplayer.com/player/?url="},
{"name":"非凡資源","type":0,"url":"https://bfzyplayer.com/player/?url="},
{"name":"豪華資源","type":0,"url":"https://hhjiexi.com/play/?url="},
{"name":"量子資源","type":0,"url":"https://lziplayer.com/?url="},
{"name":"櫻花資源","type":0,"url":"https://jx.yhzybf.com/player/jx.php?url="},
{"name":"ikun資源","type":0,"url":"https://www.ikdmjx.com/?url="},
{"name":"tv資源","type":0,"url":"https://jx.m3u8.tv/jiexi/?url="},
{"name":"博民資源","type":0,"url":"https://www.bmm3u8.com/?url="},
{"name":"A01","type":0,"url":"http://api.apii.top/?v="},
{"name":"A05","type":0,"url":"http://www.wpsseo.cn/line.php?n=7&url="},
{"name":"超嗅探","type":3,"url":"Web"},
{"name":"西瓜嗅探1","type":0,"url":"https://t1.qlplayer.cyou/player/analysis.php?v=","ext":{"flag":["qq","腾讯","企鹅","IQiYi","qiyi","爱奇艺","奇艺","youku","YouKu","优酷","sohu","SoHu","搜狐","letv","LeShi","乐视","imgo","mgtv","MangGuo","芒果","SLYS4k","BYGA","luanzi","AliS","dxzy","bilibili","QEYSS","xigua","西瓜视频","腾讯视频","奇艺视频","优酷视频","芒果视频","乐视视频"],"header":{"User-Agent":"Dart/3.0(dart:io)"}}},
{"name":"西瓜嗅探2","type":0,"url":"https://t1.qlplayer.cyou/player/?url=","ext":{"flag":["qq","腾讯","企鹅","IQiYi","qiyi","爱奇艺","奇艺","youku","YouKu","优酷","sohu","SoHu","搜狐","letv","LeShi","乐视","imgo","mgtv","MangGuo","芒果","SLYS4k","BYGA","luanzi","AliS","dxzy","bilibili","QEYSS","xigua","西瓜视频","腾讯视频","奇艺视频","优酷视频","芒果视频","乐视视频"],"header":{"User-Agent":"Dart/3.0(dart:io)"}}},{"name":"高清嗅探","type":0,"url":"https://jx.xmflv.com?url=","ext":{"flag":["qq","腾讯","企鹅","IQiYi","qiyi","爱奇艺","奇艺","youku","YouKu","优酷","sohu","SoHu","搜狐","letv","LeShi","乐视","imgo","mgtv","MangGuo","芒果","SLYS4k","BYGA","luanzi","AliS","dxzy","bilibili","QEYSS","xigua","西瓜视频","腾讯视频","奇艺视频","优酷视频","芒果视频","乐视视频"],"header":{"User-Agent":"Dart/3.0(dart:io)"}}},
{"name":"夜幕嗅探","type":0,"url":"https://www.yemu.xyz/?url=","ext":{"flag":["qq","腾讯","企鹅","IQiYi","qiyi","爱奇艺","奇艺","youku","YouKu","优酷","sohu","SoHu","搜狐","letv","LeShi","乐视","imgo","mgtv","MangGuo","芒果","SLYS4k","BYGA","luanzi","AliS","dxzy","bilibili","QEYSS","xigua","西瓜视频","腾讯视频","奇艺视频","优酷视频","芒果视频","乐视视频"],"header":{"User-Agent":"Dart/3.0(dart:io)"}}},
{"name":"爱心笔记本","type":4,"url":"http://119.91.123.253:2345/Api/yun.php?url="},
{"name":"魏晓芳","type":1,"url":"https://svip.renrenmi.cc:2222/api/?key=ogGC18CjsACNo60r3E&url="},
{"name":"奧斯卡資源","type":0,"url":"https://aosikazyplayurl.com/?url="},
{"name":"色色虎資源","type":0,"url":"https://jx.jxsesehuzy.com/?url="},
{"name":"好色資源","type":0,"url":"https://haosezyplayurl.com/?url="},
{"name":"fuqi","type":1,"url":"https://play.fuqizhishi.com/maotv/API.php?appkey=xiongdimenbieguaiwodingbuzhulegailekey07201538&url="},
{"name":"盘古","type":0,"url":"https://www.m3u8.tv.cdn.8old.cn/jx.php?url="},
{"name":"左岸","type":1,"url":"http://110.42.2.115:880/analysis/json/?uid=2100&my=fgjnoqstLMRUZ03489&url=","ext":{"flag":["qq","qiyi","mgtv","youku","letv","sohu","xigua","1905","优播线路","腾播线路"],"header":{"User-Agent":"Dart/2.14(dart:io)"}}},
{"name":"太空","type":1,"url":"http://124.222.68.182/jiexi/4kJX.php/?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","sohu","搜狐","letv","乐视","mgtv","芒果","CL4K","renrenmi","ltnb","bilibili","1905","xigua"]}},
{"name":"未知","type":1,"url":"http://106.52.218.221:88/?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"随便1","type":1,"url":"http://cl.yjhan.com:8090/home/api?type=ys&uid=821518&key=aghlmnyBFIJMPRX489&url="},
{"name":"随便2","type":1,"url":"https://www.nfjx.xyz/home/api?type=ys&uid=5767995&key=ijkmovxDEHIJPQRW69&url="},
{"name":"LTRX","type":1,"url":"https://svip.spchat.top/api/?type=ys&key=bKemW41JnxmQb4l67h&url=","ext":{"flag":["rx"]}},
{"name":"OJBK","type":0,"url":"https://jmwl.qd234.cn/v/?v=","ext":{"flag":["ltnb","renrenmi","rx","xfyun","muxm3u8","xigua","xueren","qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","bilibili","哔哩哔哩","哔哩","pptv","PPTV","sohu","letv"]}},
{"name":"parwix1","type":0,"url":"https://jx.parwix.com:4433/player/?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"parwix2","type":0,"url":"https://jx.parwix.com:4433/player/analysis.php?v=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"线路m9","type":1,"url":"https://api.m3u8.tv:5678/home/api?type=ys&uid=1931000&key=gktuvyzABEORSYZ135&url="},
{"name":"线路NX","type":1,"url":"https://vip.nxflv.com/home/api?uid=701203&key=bltuyCEFKLTX013679&url="},
{"name":"①秒播","type":1,"url":"https://jx.hfyrw.com/mao.go?url="},
{"name":"②秒播","type":1,"url":"http://27.124.4.42:4567/jhjson/ceshi.php?url=","ext":{"flag":["qiyi","qq","letv","sohu","youku","mgtv","bilibili","wasu","xigua","1905"]}},
{"name":"③秒播","url":"http://81.71.48.249:4456/jsonc/293shipin.php?url=","type":1,"i":"77","ext":{"flag":["qiyi","爱奇艺","奇艺","qq","腾讯","youku","优酷","pptv","PPTV","letv","乐视","bilibili","哔哩哔哩","哔哩","mgtv","芒果"]}},
{"name":"④秒播","type":1,"url":"http://106.55.234.91:4433/?url=","ext":{"flag":["qiyi","qq","letv","sohu","youku","mgtv","bilibili","wasu","xigua","1905"]}},
{"name":"⑤秒播","type":1,"url":"http://81.71.48.249:4456/jsonc/longxia.php?url=","ext":{"flag":["qq","qiyi","mgtv","youku","letv","sohu","xigua","1905"],"header":{"User-Agent":"Dart/2.14(dart:io)"}}},
{"name":"⑦秒播","type":1,"url":"https://app.okmedcos.com/4k/?url="},
{"name":"⑧秒播","type":1,"url":"https://jie.1z1.cc/api/?key=HdMmTMfyf1uTOQUL0b&url="},
{"name":"Pro","type":1,"url":"http://api.vip123kan.vip/?url=","ext":{"flag":["youku","优酷","mgtv","芒果","qq","腾讯","qiyi","爱奇艺","qq","奇艺"]}},
{"name":"2","type":1,"url":"https://jx.mczdyw.com/xg.php?url=","ext":{"flag":["mgtv","芒果"]}},
{"name":"3","type":1,"url":"https://www.aiaine.com/api/?key=kVqmG5dAQ5dZTcECw8&url=","ext":{"flag":["youku","优酷","mgtv","芒果","qq","腾讯","qiyi","爱奇艺","qq","奇艺"]}},
{"name":"4","type":1,"url":"https://svip.rongxingvr.top/api/?key=niBgMGXVdCQhsmeEBK&url=","ext":{"flag":["youku","优酷","mgtv","芒果","qq","腾讯","qiyi","爱奇艺","qq","奇艺"]}},
{"name":"8","type":1,"url":"https://app.iminna.com/jx/?url=","ext":{"flag":["youku","优酷","mgtv","芒果","qq","腾讯","qiyi","爱奇艺","qq","奇艺"]}},
{"name":"飓风影院2","type":1,"url":"https://vvip.funsline.cn/api/?key=3xWfEoDf4V9p9Y20CR&url=","ext":{"flag":["ziqie","youku","优酷","qiyi","爱奇艺","奇艺","mgtv","芒果","qq","腾讯"]}},
{"name":"我爱电影网","type":1,"url":"https://jhpc.manduhu.com/j1217.php?url=","ext":{"flag":["qiyi","爱奇艺","奇艺","mgtv","芒果","youku","优酷","pptv","PPTV"]}},
{"name":"王牌","type":1,"url":"https://za.kuanjv.com/?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","搜狐","sohu","letv","乐视","bilibili","哔哩哔哩","哔哩","xigua","西瓜"]}},
{"name":"盘古解析","type":1,"url":"https://json.pangujiexi.com:12345/json.php?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果"]}},
{"name":"杰森","type":0,"url":"https://jx.jsonplayer.com/player/?url="}, 
{"name":"A12","type":0,"url":"https://jx.quankan.app/?url="},
{"name":"A14","type":0,"url":"https://www.pangujiexi.com/pangu/?url="},
{"name":"9号线","url":"https://www.8090g.cn/?url="},
{"name":"12号线","type":0,"url":"https://jx.m3u8.tv/jiexi/?url=","ext":{"flag":["qq","腾讯","qiyi","iqiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"👉嗅探👈就是破解中，請等候一會👈","type":0,"url":"http://pandown.pro/app/ysmjx.php?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"],"header":{"User-Agent":"okhttp/4.1.0"}}}
],
"flags":["youku","qq","iqiyi","qiyi","letv","sohu","tudou","pptv","mgtv","wasu"],
"wallpaper":"./黑色.jpeg",
"rules": [
{"name": "proxy","hosts": [  "raw.githubusercontent.com",  "googlevideo.com",  "googleapis.com",  "cdn.v82u1l.com",  "cdn.iz8qkg.com",  "cdn.kin6c1.com",  "c.biggggg.com",  "c.olddddd.com",  "haiwaikan.com",  "www.histar.tv",  "youtube.com",  "uhibo.com",  ".*boku.*",  ".*nivod.*",  ".*ulivetv.*"]},
{"name": "火山嗅探","hosts": [  "huoshan.com"],"regex": [  "item_id="]},
{"name": "抖音嗅探","hosts": [  "douyin.com"],"regex": [  "is_play_url="]},
{"name": "農民嗅探","hosts": [  "toutiaovod.com"],"regex": [  "video/tos/cn"]},
{"name": "七新嗅探","hosts": [  "api.52wyb.com"],"regex": [  "m3u8?pt=m3u8"]},
{"name": "毛驢點擊","hosts": [  "www.maolvys.com"],"script": [  "document.getElementsByClassName('swal-button swal-button--confirm')[0].click()"]}
],
"ads": ["static-mozai.4gtv.tv","s3t3d2y8.afcdn.net"]

}