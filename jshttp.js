{
//Type 0-xml、 1-json 、2-爬虫源 、3-自定义爬虫 、4-服务器爬虫。
"spider":"./custom_spider.jar",
//"spider":"./pg.jar",
"lives":[
{
"name":"4gtv",
"type":0,
"url":"https://raw.githubusercontent.com/sqspot/tac/main/4gtv.txt",
"ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
"playerType": 1,
"epg":"https://epg.112114.xyz/?ch={name}&date={date}",
"logo":"https://epg.112114.xyz/logo/{name}.png"
},
{"name":"安博1",
"type":0,
"url":"https://raw.githubusercontent.com/sqspot/tac/main/live.txt",
"ua": "okhttp/3.15",
"playerType": 1,
"epg":"https://epg.112114.xyz/?ch={name}&date={date}",
"logo":"https://epg.112114.xyz/logo/{name}.png"
},
{"name":"安博3",
"type":0,
"url":"https://raw.githubusercontent.com/sqspot/tac/main/live3.txt",
"ua": "",
"playerType": 1,
"epg":"https://epg.112114.xyz/?ch={name}&date={date}",
"logo":"https://epg.112114.xyz/logo/{name}.png"
}
],
"sites" : [
{"key":"drpy","name":"🔥豆瓣評分🔍搜尋➡簡體字、大陸譯名　　　　　　👉換站源(點我)👈","type":3,"api":"./lib/drpy2.min.js","ext":"./js/豆瓣.js"},
{"key":"lf_search","name":"🔎lf_搜索影片3","type":3,"searchable":0,"changeable":1,"quickSearch":0,"filterable":0,"api":"./lib/lf_search3_min.js"},
{"key":"drpy__豆瓣","name":"豆瓣🏛[DRPY]","type":3,"api":"./lib/drpy2.min.js","ext":"https://raw.githubusercontent.com/hjdhnx/dr_py/main/js/drpy.js"},
{"key":"Youtube","name":"🛗Youtube⏩","type":3,"api":"csp_Youtube","searchable":1,"quickSearch":0,"changeable":0,"ext":{"json":"./youtube.json","type":"直播#新聞#劇集#電影#綜藝#紀錄片#音樂#體育#動物#風光#放鬆#4K#HDR#movie#music#documentary#bbcdocumentary#nationalgeographicdocumentary","keywords":"排行榜,HOT,TRENDS,熱門話題,熱門趨勢,熱門綜藝,熱門電影,熱門電視劇,小姐姐","codecs":""},"style":{"type":"rect","ratio":1.5},"jar":"./pgYT.jar"},
{"key":"Youtube2","name":"👉🔥Youtube台灣🎯👈","type":3,"api":"csp_Youtube","searchable":0,"quickSearch":0,"changeable":0,"ext":{"json":"./youtube2.json","codecs":""},"style":{"type":"rect","ratio":1.5},"jar":"./pgYT.jar"},
{"key":"ikanbotsq","name":"🈵爱看机器人sq","type":3,"api":"./lib/drpy2.min.js","ext":"./js/ikanbotsq.js"},
{"key": "星星","name": "🔥星星|","type": 3,"api": "csp_Star","searchable": 1,"changeable": 0},
{"key":"海外看网","name":"🔥海外看haiwaikan","type":0,"api":"https://haiwaikan.com/api.php/provide/vod/at/xml/?ac=list","searchable":1,"quickSearch":1,"filterable":1},
{"key":"oletv資源f","name":"🔥oletv資源(海外)","type":1,"api":"https://olevod1.com/api.php/provide/vod/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"非凡网","name":"🔥非凡ff","type":0,"api":"http://cj.ffzyapi.com/api.php/provide/vod/from/ffm3u8/at/xml/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"快看网","name":"🔥快看kk","type":0,"api":"https://kuaikan-api.com/api.php/provide/vod/at/xmlsea","searchable":1,"quickSearch":1,"filterable":1},
{"key":"優質网","name":"🔥優質zyk","type":0,"api":"https://api.1080zyku.com/inc/api.php","searchable":1,"quickSearch":1,"filterable":1},
{"key":"索尼","name":"🔥索尼sn","type":1,"api":"https://suoniapi.com/api.php/provide/vod","searchable":1,"quickSearch":1,"filterable":1},
{"key":"天空网","name":"🔥天空tk","type":0,"api":"https://api.tiankongapi.com/api.php/provide/vod/at/xml/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"欧帝影院","name":"🔥欧帝影院","type":3,"api":"./lib/drpy2.min.js","ext":"./js/欧帝影院.js"},
{"key":"泥巴","name":"🔥泥巴","type":3,"api":"csp_Nbys","searchable":1,"filterable":1,"jar":"./top98_1.jar"},
{"key":"多瑙影视","name":"🈵多瑙影视♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/多瑙影视.js"},
{"key":"360資源資源","name":"🔥360資源資源","type":1,"api":"https://360zy.com/api.php/provide/vod/at/json","searchable":1,"quickSearch":1,"filterable":1},
{"key":"豪华","name":"🌅豪华hh","type":0,"api":"https://hhzyapi.com/api.php/provide/vod/from/hhm3u8/at/xml","searchable":1,"quickSearch":1,"filterable":1},
{"key":"欧乐影院","name":"🌅歐樂影院♒","type":3,"api":"./lib/drpy2.min.js","ext":"./js/欧乐影院.js"},
{"key":"奇虎影视e","name":"🌅奇虎影视qz","type":1,"api":"https://caiji.qhzyapi.com/api.php/provide/vod/from/qhm3u8/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"飛速网","name":"🌅飛速fe","type":0,"api":"https://www.feisuzyapi.com/api.php/provide/vod/from/fsm3u8/at/xml","searchable":1,"quickSearch":1,"filterable":1},
{"key":"夜貓_乐视","name":"😾乐视采集","type":1,"api":"https://leshiapi.com/api.php/provide/vod/at/json/","playUrl":"","searchable":1,"changeable":1,"categories":["短剧","国产剧","国产动漫","动画片","动作片","喜剧片","爱情片","科幻片","恐怖片","剧情片","战争片","港台剧","日韩剧","欧美剧","惊悚片","犯罪片","冒险片","悬疑片","武侠片","奇幻片","综艺","其他片"]},
{"key":"暴风影视","name":"🏆暴风bf","type":1,"playerType":2,"searchable":1,"api":"http://app.bfzyapi.com/api.php/provide/vod/","playUrl":"","categories":["短剧","国产剧","国产动漫","动作片","科幻片","剧情片","喜剧片","爱情片","恐怖片","战争片","香港剧","台湾剧","日本剧","欧美剧","泰国剧","日本动漫","综艺频道","大陆综艺","港台综艺","日本综艺","新马泰综艺","纪录片"]},
{"key":"夜貓_飞马影视","name":"🛫if101影视","type":1,"searchable":1,"quickSearch":1,"api":"http://rise.eu.org/api.php/provide/vod/from/if101"},
{"key":"夜貓_drpy_xb","name":"🛫小宝影视(墙外)","type":3,"playerType":2,"api":"./lib/drpy2.min.js","ext":"./js/小宝影院2.js"},
{"key":"夜貓_drpy_ol","name":"🛫欧乐影视(墙外)","type":3,"playerType":2,"api":"./lib/drpy2.min.js","ext":"欧乐影院[飞]2.js"},
{"key":"夜貓_drpy_od","name":"🛫欧帝影视(墙外)","type":3,"playerType":2,"api":"./lib/drpy2.min.js","ext":"./js/欧帝影院2.js"},
{"key":"夜貓_dr_美视网","name":"🛫美视网(飞)","type":3,"playerType":2,"api":"./lib/drpy2.min.js","ext":"美视网2.js"},
{"key":"ikun网","name":"🏆ikun","type":0,"api":"https://ikunzyapi.com/api.php/provide/vod/from/ikm3u8/at/xml","searchable":1,"quickSearch":1,"filterable":1},
{"key":"大漠影视e","name":"🏆大漠dm","type":1,"api":"https://damozy.com/api.php/provide/vod/from/M3U8/","searchable":1,"quickSearch":1,"filterable":1},
{"key": "种子","name": "🏆种子短剧zz","type": 1,"api": "http://zzdj.cc/api.php/provide/vod/","searchable": 1,"quickSearch": 1,"filterable": 1},
{"key":"量子網","name":"🏆量子lz","type":1,"api":"http://cj.lziapi.com/api.php/provide/vod/","playUrl":"","searchable":1,"quickSearch":1,"categories":["国产剧","国产动漫","泰国剧","台湾剧","香港剧","欧美剧","韩国剧","日本剧","动漫","体育","剧情片","动作片","爱情片","喜剧片"]},
{"key":"淘片网","name":"🌕淘片tp","type":0,"api":"https://taopianapi.com/home/cjapi/as/mc10/vod/xml","searchable":1,"quickSearch":1,"filterable":1},
{"key":"U酷網","name":"🏆U酷","type":1,"api":"https://api.ukuapi.com/api.php/provide/vod/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"红牛","name":"🏆红牛hn","type":0,"api":"https://www.hongniuzy2.com/api.php/provide/vod/at/xml/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"八戒网","name":"🏆八戒bj","type":1,"api":"http://cj.bajiecaiji.com/inc/apijson_vod.php","searchable":1,"quickSearch":1,"filterable":1},
{"key":"快播網","name":"🌟快播kb","type":1,"api":"http://www.kuaibozy.com/api.php/provide/vod/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"樱花網","name":"🌟樱花yh","type":1,"api":"https://m3u8.apiyhzy.com/api.php/provide/vod/?ac=list","searchable":1,"quickSearch":1,"filterable":1},
{"key":"68网","name":"🌟6868","type":0,"api":"https://caiji.68zyapi.com/api.php/provide/vod/at/xml/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"if101","name":"🌟if101","type":3,"api":"./lib/drpy2.min.js","ext":"./js/if101.js"},
{"key":"夜貓_YMduanju","name":"😾夜猫短剧","type":3,"api":"csp_YMduanju","jar":"./ymdj.jar","searchable":1,"quickSearch":0,"filterable":0,"jar":"./Xymz.jar"},
{"key":"夜貓_短剧tv","name":"😾采集短剧","type":3,"api":"csp_XBPQ","ext":{"搜索链接":"http://www.duanjutv.cc/vodsearch/{wd}----------{pg}---.html","线路标题":"<h3*>&&</h3>","线路数组":"\"moretext-mutedpull-right\">&&</ul>","播放数组":"\"moretext-mutedpull-right\">&&</ul>","播放链接":"http+://www.duanjutv.cc+href='&&'","直接播放":"0","分类":"抖音短剧$20#快手短剧$21#视频号短剧$22#热播短剧$23","分类链接":"http://www.duanjutv.cc/vodtype/{cateId}-{catePg}.html;;m"},"jar":"./Xymz.jar"},
{"key":"夜貓_南瓜","name":"😾南瓜影视","type":3,"api":"csp_YMng","searchable":1,"quickSearch":1,"playerType":2,"jar":"./Xymz.jar"},
{"key":"夜貓_厂长zy","name":"😾夜猫厂长","type":3,"api":"csp_YMCz","searchable":1,"quickSearch":1,"changeable":0,"jar":"./Xymz.jar"},
{"key":"夜貓_小镇","name":"😾电影小镇","type":3,"api":"csp_XBPQ","searchable":1,"quickSearch":1,"filterable":1,"ext":{"主页url":"http://dyxz.tv","数组":"<divclass=\"stui-vodlist__box\">&&</div>","图片":"data-original=\"&&\"","标题":"title=\"&&\"","链接":"href=\"&&\"","副标题":"<spanclass=\"pic-texttext-right\">&&</span>","搜索url":"http://dyxz.tv/search.php;post;searchword={wd}","搜索模式":"1","搜索数组":"<aclass=\"v-thumbstui-vodlist__thumb&&</a>","搜索图片":"data-original=\"&&\"","搜索标题":"title=\"&&\"","搜索链接":"href=\"&&\"","搜索副标题":"<spanclass=\"pic-texttext-right\">&&</span>","搜索后缀":"/view/","线路数组":"<adata-toggle=\"tab\"&&/a>","线路标题":">&&<","播放数组":"<ulclass=\"stui-content__playlistclearfix&&</ul>","影片年代":"年份：&&</p>","影片地区":"地区：&&<span","影片类型":"类型：&&</a>","导演":"导演：&&</p>","主演":"主演：&&</p>","简介":"更新：&&</p>","播放列表":"<a&&/a>","播放标题":">&&<","播放链接":"href=\"&&\"","免嗅":"0","分类url":"http://dyxz.tv/list/{cateId}_{catePg}.html","分类":"电影$1#电视剧$2#动漫$3#综艺$4"},"jar":"./Xymz.jar"},
{"key":"夜貓_4k影视","name":"😾4K影视","type":3,"api":"csp_XBPQ","ext":{"站名":"4K影院","主页url":"https://www.4kvm.org","头部集合":"User-Agent$Mozilla/5.0(iPhone;CPUiPhoneOS13_2_3likeMacOSX)AppleWebKit/605.1.15(KHTML,likeGecko)Version/13.0.3Mobile/15E148Safari/604.1","热门推荐":"1","起始页":"1","直接播放":"0","倒序播放":"0","图片代理":"0","二次截取":"","数组":"<divclass=\"poster\">&&<divclass=\"texto\">","图片":"src=\"&&\"","标题":"alt=\"&&\"","副标题":"class=\"icon-star2\">&&</div>","链接":"href=\"&&\"","线路数组":"<divclass=\'se-q\'>&&</a>","线路标题":"class=\'title\'>&&</span>","线路链接":"href=\"&&\"","状态":"<divclass=\"extra\">&&</div>","导演":"<divclass=\"persons\">&&演员</h2>[不包含:导演#制片人]","简介":"<p>&&</p>","播放二次截取":"id=\'playernotice&&<divclass=\"sheader\">[替换:class=\'ajax_mode\'>>>videourls:你我\"name\":1集,\"链洁\":\\&mvsource=0\"和他tables:]","播放数组":"videourls:&&tables:[替换:url\":>>链洁\":\\&ep=#name\":>>name\":第#}>>\\&source=0\"和他#{>>你我]","播放列表":"你我&&和他","播放标题":"name\":&&,","播放链接":"链洁\":&&\"","播放链接前缀":"https://www.4kvm.org/artplayer?id=+postid-&&\"","免嗅":"0","播放请求头":"User-Agent$Mozilla/5.0(iPhone;CPUiPhoneOS13_2_3likeMacOSX)AppleWebKit/605.1.15(KHTML,likeGecko)Version/13.0.3Mobile/15E148Safari/604.1","多线数组":"<divclass=\'se-q\'>&&</a>","多线链接":"href=\"&&\"","搜索url":"https://www.4kvm.org/wp-json/dooplay/search/?keyword={wd}&nonce=c1c25fbc3d","搜索模式":"1","搜索数组":"{\"t&&}","搜索图片":"img\":\"&&\"","搜索标题":"itle\":\"&&\"","搜索链接":"url\":\"&&\"","分类url":"https://www.4kvm.org/{cateId}/page/{catePg};;d0","分类":"电影$movies#美剧$classify/meiju#国产剧$classify/guochan#韩剧$classify/hanju#番剧$classify/fanju"},"jar":"./Xymz.jar"},
{"key":"夜貓_蘑菇","name":"😾蘑菇剧场","type":3,"api":"csp_XBPQ","searchable":1,"changeable":1,"ext":{"主页url":"https://moguys.xyz/","分类":"电影$1#电视剧$2#综艺$3#动漫$4","搜索url":"https://moguys.xyz/vodsearch/-------------.html?wd={wd}","分类url":"https://moguys.xyz/show/{cateId}-{area}-{by}-{class}-----{catePg}---{year}.html;;ak"},"jar":"./Xymz.jar"},
{"key":"夜貓_csp_红狐狸影视","name":"😾狐狸影视","type":3,"api":"csp_XBPQ","ext":{"分类url":"https://honghuli.com/leibiao/{cateId}-{area}-------{catePg}---{year}.html","分类":"电影$1#电视剧$2#综艺$3#动漫$4"},"jar":"./Xymz.jar"},
{"key":"夜貓_zying","name":"😾追影影视","type":3,"api":"csp_XBPQ","ext":{"线路数组":"data-hash=\"slide{1}\"&&</small>[排序:4K蓝光]","搜索url":"http://vip.zhuiying.cyou/index.php/vod/search/wd/{wd}.html","分类url":"http://vip.zhuiying.cyou/index.php/vod/show/id/{cateId}/page/{catePg}/are/{are}/by/{by}/class/{class}/lang/{lang}/year/{year}.html","分类":"电影$2#剧集$1#综艺$3#动漫$4#短剧$20#体育$21"},"jar":"./Xymz.jar"},
{"key":"夜貓_nmys","name":"😾农民秒播","type":3,"api":"csp_YMNm","searchable":1,"quickSearch":1,"changeable":0,"ext":"https://d.kstore.space/download/3313/mao/nm","jar":"./Xymz.jar"},
{"key":"夜貓_csp_秒播","name":"😾夜猫秒播","type":3,"api":"csp_XBPQ","searchable":1,"quickSearch":1,"filterable":0,"ext":{"分类":"国产剧&国产动漫&电影&爱情片&恐怖片&战争片&科幻片&动作片&综艺&欧美剧&港台剧&日韩剧","分类值":"14&75&1&26&36&25&30&23&69&15&16&62","分类url":"https://api.zeqaht.com/api.php/provide/vod/?ac=list&ac=detail&t={cateId}&pg={catePg}","数组二次截取":"list\":[&&]","数组":"{&&}[不包含:]","图片":"vod_pic\":\"&&\"","标题":"vod_name\":\"&&\"","副标题":"+vod_remarks\":\"&&\"","链接":"https://api.zeqaht.com/api.php/provide/vod/?ac=list&ac=detail&ids=+vod_id\":&&,","搜索url":"https://api.zeqaht.com/api.php/provide/vod?ac=detail&wd={wd}","搜索模式":"1","搜索二次截取":"list\":[&&]","搜索数组":"{&&}[不包含:]","搜索图片":"vod_pic\"*\"&&\"","搜索标题":"vod_name\"*\"&&\"","搜索副标题":"type_name\":\"&&\"","搜索链接":"https://api.zeqaht.com/api.php/provide/vod/?ac=list&ac=detail&ids=+vod_id\":&&,","影片类型":"vod_class\"*\"&&\"","导演":"vod_director\"*\"&&\"","主演":"vod_actor\"*\"&&\"","简介":"vod_content\"*\"&&\"","线路二次截取":"\"list\":[&&]","线路数组":"<h3class=\"title\">&&</h3>[排序:播放线路3>播放线路2>播放线路4>播放线路5>播放线路6>播放线路1>]","线路标题":"夜猫子秒播+>播放线路</h3>","播放数组":"vod_play_url\":&&,[替换:\">>链表题#$>>题链#\\#>>链表表题]","播放二次截取":"","播放列表":"表&&表","播放标题":"题&&题","播放链接":"链&&链","嗅探词":".m3u8","播放请求头":"User-Agent$Mozilla/5.0(WindowsNT10.0;Win64;x64)AppleWebKit/537.36(KHTML,likeGecko)Chrome/118.0.0.0Safari/537.36#Origin$www.whbax.cn#Referer$www.whbax.cn#Cookie$PHPSESSID=7da46a353cf8bac46b4f8226f06042ad","免嗅":"0"},"jar":"./Xymz.jar"},
{"key":"夜貓_圣城影视","name":"😾圣城影视","type":3,"api":"csp_XBPQ","searchable":1,"quickSearch":1,"filterable":0,"playerType":1,"ext":{"站名":"圣城影视","主页url":"https://sc1080.top/","简介":"剧情：</span>&&</span>","导演":"导演：&&</div>","主演":"主演：&&</div>","影片状态":"集数：&&</div>","影片类型":"icon-cate-ds\">&&</a>","数组":"module-item-pic\">&&module-item\">","标题":"title=\"&&\"","副标题":"module-item-text\"&&</div>","图片":"data-src=\"&&\"","链接":"href=\"&&\"","搜索url":"/index.php/vod/search.html?wd={wd}","搜索数组":"lazylazyload\"&&<h3>[不包含:肥猫不肥#神秘的哥哥]","搜索标题":"alt=\"&&\"","搜索副标题":"title=*>&&</a>","搜索图片":"data-src=\"&&\"","搜索链接":"href=\"&&\"","线路数组":"data-dropdown-value=&&</div>[排序:蓝光C>蓝光Y[夸克秒播]>夸克专线1][不包含:蓝光Z#备用#鸡儿云#飞速云#新浪云#金鹰云#火狐云#独家蓝光#APP专线#腾讯视频#优酷视频#夸克专线2#芒果TV#乐视云#资源库#爱奇艺]","线路标题":"<span>&&</small>[替换:</span><small>>>共]+集","播放数组":"sort-item\"&&</div>","播放标题":"<span>&&</span>","播放列表":"<a&&</a>","分类url":"https://sc1080.top/index.php/vod/show/area/{area}/by/{by}/class/{class}/id/{cateId}/page/{catePg}/year/{year}.html;;akm","分类":"电视剧$2#电影$1#动漫$4#综艺$3"},"jar":"./Xymz.jar"},
{"key":"夜貓_天天","name":"😾天天影视","type":3,"api":"csp_YMTTian","searchable":1,"quickSearch":1,"ext":"http://op.ysdqjs.cn","jar":"./Xymz.jar"},
{"key":"夜貓_短剧侠","name":"😾爱短剧侠","type":3,"searchable":1,"filterable":1,"quickSearch":1,"playerType":1,"api":"csp_XBPQ","ext":{"站名":"短剧侠","主页url":"https://www.duanjuxia.cn/","分类":"快手$21#抖音$22#都市$23#古装$24#重生$25#逆袭$26#虐恋$27#萌宝$28#言情$29#穿越$30#战神$31#神医$32#赘婿$33#甜宠$34#其他$35","搜索url":"https://www.duanjuxia.cn/index.php/vod/search.html?wd={wd}","分类url":"https://www.duanjuxia.cn/index.php/vod/show/area/{area}/by/{by}/class/{class}/id/{cateId}/lang/{lang}/year/{year}/page/{catePg}.html"},"jar":"./Xymz.jar"},
{"key":"夜貓_茶狐","name":"😾茶狐影视","type":3,"searchable":1,"changeable":0,"quickSearch":1,"playerType":"2","api":"csp_XBPQ","ext":{"嗅探词":"v3.toutiaovod.com#v3-dy-o.zjcdn#.m3u8#/tos/#.mp4","分类url":"https://www.187687.com/vodshow/{cateId}-{area}-{by}-{class}-----{catePg}---{year}.html","分类":"电影$1#剧集$2#动漫$4#综艺$4","搜索模式":"0"},"jar":"./Xymz.jar"},
{"key":"夜貓_csp_xc","name":"😾星辰影视","type":3,"playerType":1,"api":"csp_XBPQ","searchable":1,"quickSearch":1,"filterable":0,"ext":{"作者":"荷城茶秀","站名":"星辰影视","主页url":"http://www.xingchenwu.com/","简介":"video-info-itemvideo-info-contentvod_content\"&&</div>","导演":"导演：&&</p>","主演":"主演：&&</p>","影片状态":"状态：&&</p>","影片类型":"类型：&&</p>","数组":"stui-vodlist__thumblazyload\"&&</a>","标题":"title=\"&&\"","副标题":"text-right\">&&</span>","图片":"data-original=\"&&\"","链接":"href=\"&&\"","搜索url":"http://www.xingchenwu.com/search.php;post;searchword={wd}","搜索数组":"stui-vodlist__thumblazyload\"&&</a>","搜索标题":"title=\"&&\"","搜索副标题":"text-right\">&&</span>","搜索图片":"data-original=\"&&\"","搜索链接":"href=\"&&\"","线路数组":"<h3&&/h3>","线路标题":">&&<","播放链接":"href='&&'","分类url":"http://www.xingchenwu.com/{cateId}/index{catePg}.html[http://www.xingchenwu.com/{cateId}/index.html];;ak","分类":"电影$dianying#电视剧$dianshiju#综艺$zongyi#动漫$dongman"},"jar":"./Xymz.jar"},
{"key":"夜貓_csp_aote","name":"😾奥特影视","type":3,"playerType":2,"api":"csp_XBPQ","searchable":1,"quickSearch":1,"filterable":0,"ext":{"站名":"奥特","主页url":"https://auete.pro/","二次截取":"<divclass=\"picture_list_container\">&&<ulclass=\"paginationmb-3justify-content-centerflex-wrap\">","数组":"<li&&</div>","图片":"src=\"&&\"[替换:/img.php?url=>>空]","标题":"alt=\"&&\"","链接":"href=\"&&\"","副标题":"hdtag\">&&</button>","线路数组":"<divid=\"player_list\"&&<spanstyle=\"color:#ff0000[排序:云播D线>其他]","线路标题":"』&&：<small>","播放数组":"<ul>&&</ul>","状态":"状态:</span><b>&&</b>","导演":"◎影片导演:&&</p>","主演":"◎影片主演:&&</p>","简介":"百度百科\"></a><p>&&</p>","播放列表":"<li&&</li>","倒序":"0","播放标题":"title=\"&&\"","播放链接":"href=\"&&\"","搜索url":"https://www.full66.com/search.html?wd={wd}","搜索模式":"1","搜索二次截取":"<ulclass=\"stui-vodlist__mediacol-pdclearfix\">&&导演","搜索数组":"<li&&</a>","搜索图片":"data-original=\"&&\"","搜索标题":"title=\"&&\"","搜索链接":"https://auete.pro/Tv/neidi/+href=\"/vod&&.html","搜索后缀":"","嗅探词":"adsmind.ugdtimg.com#.mp4?#m3u8?#.m3u8#.mp4#.flv#.mp3#.m4a","过滤词":"51.la#cnzz.com#baidu.com#bilibili.com","播放请求头":"User-Agent$123","免嗅":"0","分类":"电影$Movie#网络电影$qita/wlp#老电影$qita/laodianying#经典片$qita/Jdp#电视剧$Tv#经典剧$qita/Jdj#动漫$Dm#其他$qita#综艺$Zy","分类url":"https://auete.pro/{cateId}/{class}/index{catePg}.html[firstPage=https://auete.pro/{cateId}/{class}/index.html]","筛选":{"Movie":[{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"动作片","v":"dzp"},{"n":"喜剧片","v":"xjp"},{"n":"爱情片","v":"aqp"},{"n":"科幻片","v":"khp"},{"n":"恐怖片","v":"kbp"},{"n":"剧情片","v":"jpp"},{"n":"战争片","v":"zzp"},{"n":"惊悚片","v":"jsp"}]}],"Tv":[{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"大陆","v":"neidi"},{"n":"港剧","v":"tvbgj"},{"n":"韩剧","v":"hanju"},{"n":"美剧","v":"oumei"},{"n":"日剧","v":"24"},{"n":"台剧","v":"25"},{"n":"泰剧","v":"26"}]}]}},"jar":"./Xymz.jar"},
{"key":"夜貓_电影狗","name":"😾电影狗影视","type":3,"playerType":2,"api":"csp_AppYsV2","searchable":1,"quickSearch":1,"filterable":1,"ext":"http://app.88dyg.com:80/icciu_api.php/v1.vod","categories":["短剧","电影","连续剧","动漫","综艺"],"jar":"./Xymz.jar"},
{"key":"夜貓_dr_sk100","name":"😾SK100影视","type":3,"api":"./lib/drpy2.min.js","searchable":1,"quickSearch":1,"filterable":1,"ext":"./js/18哈2.js"},
{"key":"夜貓_csp_XBPQ_kan","name":"😾爱看影院","type":3,"api":"csp_XBPQ","searchable":1,"quickSearch":1,"filterable":0,"ext":"{\"主演\":\"主演：&&</div>\",\"简介\":\"<p>&&<p>\",\"副标题\":\"class=\\\"module-item-note\\\">&&</div>\",\"线路数组\":\"class=\\\"module-tab-itemtab-item&&</div>\",\"线路标题\":\"<span>&&</small>[不包含:夸克4K]\",\"播放数组\":\"class=\\\"module-play-list&&</div>\",\"分类\":\"电影$1#电视剧$2#动漫$4#综艺$3\",\"分类url\":\"https://www.3ayy.com/vodshow/{cateId}-{area}-{by}-{class}-{lang}----{catePg}---{year}.html\"}","jar":"./Xymz.jar"},
{"key":"夜貓_csp_Kuaikan","name":"😾快看影视","type":3,"api":"csp_Kuaikan","searchable":1,"quickSearch":1,"filterable":1,"jar":"./Xymz.jar"},
{"key":"夜貓_saohuo","name":"😾骚火影视","type":3,"searchable":1,"changeable":0,"quickSearch":1,"playerType":"2","api":"csp_XBPQ","ext":{"嗅探词":".m3u8#.mp4#.m3u8?#freeok.mp4","分类url":"https://saohuo.tv/list/{cateId}-{catePg}.html;;vr1au0","倒序":"1","分类":"动漫$4#电影$1#电视剧$2#港剧$21#韩剧$22#台剧$26#日剧$24#美剧$23","数组二次截取":"class=\"v_list\">&&</ul>","数组":"\"v_img\"&&/div>","标题":"title=\"&&\"","副标题":"v_note\"&&</div","跳转播放链接":"<iframe*src=\"&&\"","二次跳转播放链接":"https://hhjx.hhplayer.com/api.php;post;url=+varurl*\"&&\"+&t=+vart*\"&&\"+&key=+varkey*\"&&\"+&act=0+&play=1","三次跳转播放链接":"\"url\"*\"&&\""},"jar":"./Xymz.jar"},
{"key":"夜貓_热播库","name":"😾热播库影","type":3,"searchable":1,"changeable":1,"api":"csp_XBPQ","playerType":"1","ext":{"主页url":"https://rebozj.pro","数组":"class=\"stui-vodlist__thumblazyload&&</a>","图片":"data-original=\"&&\"","标题":"title=\"&&\"","链接":"href=\"&&\"","副标题":"class=\"pic-texttext-right\"><b>&&</span>","搜索模式":"1","嗅探词":".m3u8#video_mp4#tos-#.mp4#cdn.123pan.cn#huoshanvod.com","搜索url":"https://rebozj.pro/type/id-.html?wd={wd}","线路数组":"<h4class=\"title&&/h4>[不包含:夸克4K]","线路标题":">&&<","播放列表":"<a&&/a>","播放标题":">&&<","影片类型":"类型：&&</p>","导演":"导演：&&</p>","主演":"主演：&&</p>","简介":"display:none;\">&&</span>","分类":"电视剧$2#电影$1#综艺$3#动漫$4","分类url":"https://rebozj.pro/show/{cateId}--{area}------{catePg}---{year}.html;;a","跳转播放链接":"urlDecode(vod_class*url\":\"&&\")"},"jar":"./Xymz.jar"},
{"key":"夜貓_新视觉","name":"😾新视觉影院","type":3,"api":"csp_Web608","searchable":1,"quickSearch":0,"filterable":0,"ext":"https://www.80yy3.com","jar":"./Xymz.jar"},
{"key":"夜貓_49zy","name":"😾49资源2K","type":1,"api":"https://49zyw.com/api.php/provide/vod/?ac=list","searchable":1,"quickSearch":1,"filterable":1,"changeable":1,"categories":["短剧","国产剧","纪录片","欧美剧","香港剧","动作片","爱情片","科幻片","恐怖片","剧情片","战争片","喜剧片","动画片","犯罪片","韩国剧","动漫","电影","大陆综艺","港台综艺","日韩综艺","欧美综艺","台湾剧","国产动漫","日本动漫","欧美动漫","泰国剧","日剧","电影解说","奇幻片","灾难片","悬疑片","其他片","体育赛事","海外剧"]},
{"key":"夜貓_黑狐","name":"😾黑狐影视","type":3,"searchable":1,"quickSearch":1,"changeable":1,"playerType":"2","api":"csp_XBPQ","ext":{"站名":"黑狐影院","主页url":"http://fagmn.com","数组":"class=\"stui-vodlist__box\"&&</a","图片":"data-original=\"&&\"","标题":"title=\"&&\"","链接":"href=\"&&\"","嗅探词":".m3u8#v3.huoshanvod.com#v3-dy-o.zjcdn#sf16-sg.larksuitecdn.com#v.kd1.qq.com#.mp4","过滤词":"/hls/#php","副标题":"<spanclass=\"pic-texttext-right\">&&</span>","搜索url":"http://fagmn.com/search.php;post;searchword={wd}","搜索模式":"1","搜索数组":"<aclass=\"v-thumbstui-vodlist__thumb&&</a>","搜索图片":"data-original=\"&&\"","搜索标题":"title=\"&&\"","搜索链接":"href=\"&&\"","搜索副标题":"<spanclass=\"pic-texttext-right\">&&</span>","搜索后缀":"/view/","线路数组":"href=\"#down&&/a>[替换:奇异视频>>黑狐一线#优酷视频>>黑狐二线#搜狐视频>>黑狐三线#咪咕视频>>黑狐四线]","线路标题":">&&<","播放数组":"class=\"stui-content__playlistclearfix&&</ul>","状态":"地区：&&</p>","导演":"导演：&&</p>","主演":"主演：&&</p>","简介":"简介：&&</div>","播放列表":"<a&&/a>","播放标题":">&&<","播放链接":"href=\"&&\"","免嗅":"0","分类":"电影$1#电视剧$2#动漫$3#综艺$4","分类url":"http://fagmn.com/list/{cateId}_{catePg}.html?order=time"},"jar":"./Xymz.jar"},
{"key":"易看","name":"🌕易看♒yk","api":"https://api.yikanapi.com/api.php/provide/vod","type":1,"searchable":1,"quickSearch":1,"filterable":1},
{"key":"新浪","name":"🌕新浪xl","type":0,"api":"https://api.xinlangapi.com/xinlangapi.php/provide/vod/at/xml/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"鱼乐網","name":"🌕鱼乐le","type":1,"api":"https://api.ylzy1.com/api.php/provide/vod/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"金鷹网","name":"🌕金鷹jyz","type":0,"api":"https://jyzyapi.com/provide/vod/from/jinyingm3u8/at/xml/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"快车網","name":"😰快车kc","type":1,"api":"https://caiji.kczyapi.com/api.php/provide/vod/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"CK采集网","name":"😰CK采集网","type":1,"api":"https://ckzy.me/api.php/provide/vod/?ac=list","searchable":1,"quickSearch":1,"filterable":1},
{"key":"CK(VPN)","name":"🛩CK(VPN)","type":3,"api":"./lib/drpy2.min.js","ext":"./js/ck.js"},
{"key":"UM电影[V2]","name":"UM电影[V2]🏆索尼","type":3,"api":"./lib/drpy2.min.js","ext":"./js/UM电影[V2].js"},
{"key":"555影视[V2]","name":"555影视[V2]🏆大漠","type":3,"api":"./lib/drpy2.min.js","ext":"./js/555影视[V2].js"},
{"key":"宝片[V2]","name":"宝片[V2]🏆种子","type":3,"api":"./lib/drpy2.min.js","ext":"./js/宝片[V2].js"},
{"key":"起飞影院","name":"起飞影院","type":3,"api":"./lib/drpy2.min.js","ext":"./js/起飞影院.js"},
{"key":"北极狐[V2]","name":"北极狐[V2]","type":3,"api":"./lib/drpy2.min.js","ext":"./js/北极狐[V2].js"},
{"key":"厂长","name":"🎯厂长","type":3,"api":"./lib/drpy2.min.js","ext":"./js/厂长.js"},
{"key":"电影先生","name":"🎯电影先生","type":3,"api":"./lib/drpy2.min.js","ext":"./js/电影先生.js"},
{"key":"南瓜影视","name":"🎯南瓜影视","type":3,"api":"./lib/drpy2.min.js","ext":"./js/南瓜影视.js"},
{"key":"77韩剧","name":"🌕77韩剧","api":"https://www.77hanju.com/api.php/provide/vod","type":1,"searchable":1,"quickSearch":1,"filterable":1},
{"key":"韩剧","name":"🌕韩剧","api":"http://www.hanjuzy.com/inc/apijson_vod.php","type":1,"searchable":1,"quickSearch":1,"filterable":1},
{"key":"shoujihanju資源f","name":"🌕shoujihanju(韓劇)","type":1,"api":"https://77hanju.com/api.php/provide/vod/from/mkm3u8/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"百度网","name":"🏆百度db","type":0,"api":"https://api.apibdzy.com/api.php/provide/vod/from/dbm3u8/at/xml/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"速影","name":"😰速影動漫wj","type":1,"api":"https://速影128.xyz/inc/apijson.php","searchable":1,"quickSearch":1,"filterable":1},
{"key":"闪电","name":"😰闪电sd","type":1,"api":"http://sdzyapi.com/api.php/provide/vod/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"金鹰影视e","name":"😰金鹰影视","type":1,"api":"https://jinyingzy.com/provide/vod/from/jinyingm3u8/","searchable":1,"quickSearch":1,"filterable":1},
{"key":"无尽网","name":"🌟无尽wj","type":0,"api":"https://api.wujinapi.me/api.php/provide/vod/from/wjm3u8/at/xml/","searchable":1,"quickSearch":1,"filterable":1},
{"key": "Youtube台灣新聞","name": "😰YouTube台灣新聞","type": 3,"style":{ "type":"oval" },"api": "./Mud.js","ext": "./YouTube.txt"},
{"key":"直播转点播","name":"❤💻網路第四台txt格式","type":3,"style":{ "type":"oval" },"api":"./lib/live2cms.js","ext":"./live2tv_sq.txt"},
{"key":"ikanbot3","name":"爱看机器人3","type":3,"api":"./lib/drpy2.min.js","ext":"./js/ikanbot3.js"}
],
"parses":[
{"name":"解析聚合","type":3,"url":"Demo"},
{"name":"Json并发","type":2,"url":"Parallel"},
{"name":"Json轮询","type":2,"url":"Sequence"},
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