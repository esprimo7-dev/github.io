// ===================================
// 大阪出張旅行計画 - App.js
// ===================================

// Category Configuration
const categories = {
    takoyaki: { emoji: '🐙', label: 'たこ焼き', color: '#ff6b6b' },
    okonomiyaki: { emoji: '🥞', label: 'お好み焼き', color: '#feca57' },
    kushikatsu: { emoji: '🍢', label: '串かつ', color: '#ff9f43' },
    ramen: { emoji: '🍜', label: 'ラーメン', color: '#ee5a24' },
    iekei: { emoji: '🍜', label: '家系ラーメン', color: '#b33939' },
    sushi: { emoji: '🍣', label: '寿司', color: '#f368e0' },
    udon: { emoji: '🍲', label: 'うどん・そば', color: '#c8d6e5' },
    yakiniku: { emoji: '🥩', label: '焼肉', color: '#e74c3c' },
    steak: { emoji: '🥩', label: 'ステーキ', color: '#8b0000' },
    seafood: { emoji: '🦐', label: '海鮮', color: '#00cec9' },
    fugu: { emoji: '🦀', label: 'ふぐ・かに', color: '#0984e3' },
    izakaya: { emoji: '🍺', label: '居酒屋', color: '#fdcb6e' },
    sweets: { emoji: '🍰', label: 'スイーツ', color: '#fd79a8' },
    curry: { emoji: '🍛', label: 'カレー', color: '#d35400' },
    chinese: { emoji: '🥟', label: '中華', color: '#e17055' },
    washoku: { emoji: '🍱', label: '和食', color: '#81ecec' },
    western: { emoji: '🍝', label: '洋食', color: '#a29bfe' },
    cafe: { emoji: '☕', label: 'カフェ', color: '#6c5ce7' },
    bread: { emoji: '🍞', label: 'パン', color: '#fab1a0' },
    bar: { emoji: '🍸', label: 'バー', color: '#2d3436' },
    sightseeing: { emoji: '🏯', label: '観光スポット', color: '#00b894' }
};

// Spots Data - Extended with Tabelog & Official URLs
const spots = [
    // ========== たこ焼き ==========
    { id: 1, name: 'わなか 千日前本店', category: 'takoyaki', area: '道頓堀', lat: 34.6685, lng: 135.5015, description: '外はカリッと中はトロトロの人気たこ焼き店', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001247/', official: 'https://takoyaki-wanaka.com/' },
    { id: 2, name: 'たこ家道頓堀くくる 本店', category: 'takoyaki', area: '道頓堀', lat: 34.6690, lng: 135.5020, description: '大粒のタコが自慢の老舗', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27000572/', official: 'https://www.shirohato.com/kukuru/' },
    { id: 3, name: '甲賀流 本店', category: 'takoyaki', area: 'アメ村', lat: 34.6725, lng: 135.4985, description: 'アメ村発祥の人気店', tabelog: 'https://tabelog.com/osaka/A2701/A270201/27001601/', official: 'https://kougaryu.jp/' },
    { id: 4, name: 'はなだこ', category: 'takoyaki', area: '梅田', lat: 34.7045, lng: 135.4985, description: '新梅田食道街の人気店、ネギマヨが絶品', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27000185/', official: 'https://shinume.com/' },
    { id: 5, name: 'あべのたこやき やまちゃん', category: 'takoyaki', area: '阿倍野', lat: 34.6455, lng: 135.5125, description: '阿倍野の老舗たこ焼き店', tabelog: 'https://tabelog.com/osaka/A2701/A270203/27001380/', official: '' },
    { id: 6, name: 'たこ焼十八番', category: 'takoyaki', area: '道頓堀', lat: 34.6682, lng: 135.5012, description: '大阪ミナミの人気たこ焼き店', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27000584/', official: 'https://tako18.com/' },

    // ========== お好み焼き ==========
    { id: 7, name: '千房 道頓堀店', category: 'okonomiyaki', area: '道頓堀', lat: 34.6680, lng: 135.5025, description: '大阪を代表するお好み焼きチェーン', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001270/', official: 'https://www.chibo.com/' },
    { id: 8, name: '鶴橋風月 本店', category: 'okonomiyaki', area: 'なんば', lat: 34.6630, lng: 135.5010, description: 'ふわふわ食感が人気の名店', tabelog: 'https://tabelog.com/osaka/A2701/A270206/27001628/', official: 'https://www.ideaosaka.co.jp/fugetsu/' },
    { id: 9, name: '福太郎 本店', category: 'okonomiyaki', area: '福島', lat: 34.6925, lng: 135.4820, description: '食べログ百名店選出の人気店', tabelog: 'https://tabelog.com/osaka/A2701/A270108/27000468/', official: '' },
    { id: 10, name: 'きじ 本店', category: 'okonomiyaki', area: '梅田', lat: 34.7055, lng: 135.4980, description: 'ふわとろお好み焼きで有名', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27001645/', official: '' },
    { id: 11, name: 'ねぎ焼やまもと 本店', category: 'okonomiyaki', area: '十三', lat: 34.7175, lng: 135.4820, description: 'ねぎ焼き発祥の店', tabelog: 'https://tabelog.com/osaka/A2701/A270302/27001621/', official: 'https://www.negiyaki-yamamoto.co.jp/' },
    { id: 12, name: '時分時', category: 'okonomiyaki', area: '本町', lat: 34.6835, lng: 135.4995, description: '予約困難な超人気店', tabelog: 'https://tabelog.com/osaka/A2701/A270106/27002047/', official: '' },
    { id: 13, name: '美津の', category: 'okonomiyaki', area: '道頓堀', lat: 34.6688, lng: 135.5022, description: '山芋たっぷりのふわふわお好み焼き', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001576/', official: 'https://www.mizuno-osaka.com/' },

    // ========== 串かつ ==========
    { id: 14, name: '串かつ だるま 新世界総本店', category: 'kushikatsu', area: '新世界', lat: 34.6525, lng: 135.5060, description: '新世界で生まれた串かつの名店', tabelog: 'https://tabelog.com/osaka/A2701/A270406/27000456/', official: 'https://www.kushikatu-daruma.com/' },
    { id: 15, name: '八重勝', category: 'kushikatsu', area: '新世界', lat: 34.6520, lng: 135.5065, description: '地元民に愛される老舗', tabelog: 'https://tabelog.com/osaka/A2701/A270406/27000583/', official: '' },
    { id: 16, name: '串かつ じゃんじゃん', category: 'kushikatsu', area: '新世界', lat: 34.6530, lng: 135.5055, description: 'リーズナブルな人気店', tabelog: 'https://tabelog.com/osaka/A2701/A270406/27015259/', official: '' },
    { id: 17, name: '六覺燈', category: 'kushikatsu', area: '北新地', lat: 34.6985, lng: 135.4965, description: '高級串かつの名店', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27002115/', official: '' },
    { id: 18, name: '串かつ だいぼん', category: 'kushikatsu', area: '新世界', lat: 34.6528, lng: 135.5062, description: '新世界の行列店', tabelog: 'https://tabelog.com/osaka/A2701/A270406/27064523/', official: '' },
    { id: 19, name: '五條家', category: 'kushikatsu', area: '天満', lat: 34.7050, lng: 135.5110, description: '天満の人気串かつ店', tabelog: 'https://tabelog.com/osaka/A2701/A270103/27080612/', official: '' },

    // ========== ラーメン ==========
    { id: 20, name: 'ラーメン人生ジェット', category: 'ramen', area: '福島', lat: 34.6915, lng: 135.4850, description: '濃厚鶏白湯の鶏煮込みそばが名物', tabelog: 'https://tabelog.com/osaka/A2701/A270108/27056143/', official: '' },
    { id: 21, name: 'らーめん弥七', category: 'ramen', area: '梅田', lat: 34.7030, lng: 135.4980, description: '食べログ百名店8年連続選出', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27003461/', official: '' },
    { id: 22, name: '群青', category: 'ramen', area: '天満', lat: 34.7055, lng: 135.5120, description: '日替わりメニューが特徴のつけ麺店', tabelog: 'https://tabelog.com/osaka/A2701/A270103/27080459/', official: '' },
    { id: 23, name: '燃えよ麺助', category: 'ramen', area: '福島', lat: 34.6920, lng: 135.4855, description: '紀州鴨そばと金色貝そばが人気', tabelog: 'https://tabelog.com/osaka/A2701/A270108/27083049/', official: '' },
    { id: 24, name: '麦と麺助', category: 'ramen', area: '梅田', lat: 34.7025, lng: 135.4975, description: '蔵出し醤油そばが看板メニュー', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27092147/', official: '' },
    { id: 25, name: '金久右衛門 本店', category: 'ramen', area: '天王寺', lat: 34.6470, lng: 135.5140, description: '大阪ブラックで有名', tabelog: 'https://tabelog.com/osaka/A2701/A270203/27048818/', official: 'https://kinkuemon.com/' },
    { id: 26, name: '龍旗信', category: 'ramen', area: '堺筋本町', lat: 34.6820, lng: 135.5085, description: '塩ラーメンの名店', tabelog: 'https://tabelog.com/osaka/A2701/A270106/27010093/', official: '' },

    // ========== 寿司 ==========
    { id: 27, name: '鮨 たけうち', category: 'sushi', area: 'なんば', lat: 34.6650, lng: 135.5005, description: '2022年オープンの江戸前寿司', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27125681/', official: '' },
    { id: 28, name: '裏難波スシトフジ', category: 'sushi', area: 'なんば', lat: 34.6645, lng: 135.4995, description: '産直鮮魚を楽しめるカジュアル寿司店', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27124587/', official: '' },
    { id: 29, name: '春駒 本店', category: 'sushi', area: '天神橋筋', lat: 34.7070, lng: 135.5125, description: '行列必至の人気回転寿司', tabelog: 'https://tabelog.com/osaka/A2701/A270103/27001599/', official: '' },
    { id: 30, name: '杉玉 難波店', category: 'sushi', area: 'なんば', lat: 34.6640, lng: 135.5010, description: '大衆寿司居酒屋', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27109654/', official: 'https://sugidama-sushiizakaya.jp/' },
    { id: 31, name: '寿司 まつもと', category: 'sushi', area: '北新地', lat: 34.6990, lng: 135.4970, description: '北新地の本格寿司', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27065987/', official: '' },

    // ========== うどん ==========
    { id: 32, name: '道頓堀今井 本店', category: 'udon', area: '道頓堀', lat: 34.6695, lng: 135.5030, description: '創業70年以上の老舗うどん店', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001615/', official: 'https://d-imai.com/' },
    { id: 33, name: '千とせ 本店', category: 'udon', area: 'なんば', lat: 34.6635, lng: 135.4985, description: '肉吸い発祥の店として有名', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001594/', official: '' },
    { id: 34, name: 'うどん 棒や', category: 'udon', area: '梅田', lat: 34.7040, lng: 135.4990, description: '自家製麺のコシが自慢', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27059087/', official: '' },
    { id: 35, name: '踊るうどん 梅田店', category: 'udon', area: '梅田', lat: 34.7035, lng: 135.4985, description: 'もちもち讃岐うどん', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27055743/', official: '' },

    // ========== 焼肉 ==========
    { id: 36, name: '白雲台 鶴橋駅前店', category: 'yakiniku', area: '鶴橋', lat: 34.6680, lng: 135.5310, description: 'A5ランク黒毛和牛を堪能', tabelog: 'https://tabelog.com/osaka/A2701/A270206/27013008/', official: 'https://www.hakuundai.jp/' },
    { id: 37, name: '焼肉うしごろ 梅田店', category: 'yakiniku', area: '梅田', lat: 34.7025, lng: 135.4990, description: '上質な焼肉を楽しめる人気店', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27112893/', official: 'https://www.ushigoro.com/' },
    { id: 38, name: '神戸あぶり牧場 梅田本店', category: 'yakiniku', area: '梅田', lat: 34.7015, lng: 135.4975, description: '神戸牛をリーズナブルに', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27084237/', official: '' },
    { id: 39, name: '焼肉ホルモン 龍の巣', category: 'yakiniku', area: '梅田', lat: 34.7020, lng: 135.4988, description: '山形牛とホルモンが人気', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27058941/', official: 'https://www.tatsunisu.co.jp/' },
    { id: 40, name: '北新地 神威', category: 'yakiniku', area: '北新地', lat: 34.6988, lng: 135.4960, description: 'A5黒毛和牛の高級焼肉', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27099645/', official: '' },
    { id: 41, name: '万両 南森町店', category: 'yakiniku', area: '南森町', lat: 34.6935, lng: 135.5095, description: '人気の焼肉店', tabelog: 'https://tabelog.com/osaka/A2701/A270103/27056893/', official: 'https://www.manryo.com/' },

    // ========== ステーキ ==========
    { id: 42, name: 'ベンジャミンステーキハウス KITTE大阪', category: 'steak', area: '梅田', lat: 34.7005, lng: 135.4955, description: 'NYスタイルの本格ステーキ', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27116879/', official: 'https://benjaminsteakhouse.jp/' },
    { id: 43, name: 'ロウリーズ・ザ・プライムリブ 大阪', category: 'steak', area: '心斎橋', lat: 34.6745, lng: 135.5010, description: 'プライムリブの名門', tabelog: 'https://tabelog.com/osaka/A2701/A270201/27053685/', official: 'https://www.lawrys.jp/' },
    { id: 44, name: 'ニュー松坂 難波御堂筋店', category: 'steak', area: 'なんば', lat: 34.6655, lng: 135.5015, description: '松阪牛・神戸牛を堪能', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001429/', official: '' },
    { id: 45, name: 'サクレフルール makibi', category: 'steak', area: '本町', lat: 34.6830, lng: 135.4990, description: '食べログ高評価のステーキ', tabelog: 'https://tabelog.com/osaka/A2701/A270106/27107234/', official: '' },
    { id: 46, name: '源兵衛 なんば店', category: 'steak', area: 'なんば', lat: 34.6648, lng: 135.5008, description: '黒毛和牛ステーキの人気店', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27096456/', official: '' },

    // ========== 海鮮 ==========
    { id: 47, name: 'ジャンボ釣船 つり吉 新世界店', category: 'seafood', area: '新世界', lat: 34.6535, lng: 135.5070, description: '店内で釣った魚をその場で調理', tabelog: 'https://tabelog.com/osaka/A2701/A270406/27087654/', official: 'https://tsurikichi.com/' },
    { id: 48, name: '玄品 梅田東通', category: 'seafood', area: '梅田', lat: 34.7040, lng: 135.5005, description: 'ふぐ・うなぎ・かに料理の専門店', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27018975/', official: 'https://www.tettiri.com/' },
    { id: 49, name: 'うしQかきQ', category: 'seafood', area: 'なんば', lat: 34.6640, lng: 135.5020, description: '浜焼きと和牛を楽しめる', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27097854/', official: '' },
    { id: 50, name: '黒門市場 まぐろや黒銀', category: 'seafood', area: '黒門市場', lat: 34.6670, lng: 135.5065, description: '新鮮なマグロの刺身と寿司', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27055681/', official: '' },
    { id: 51, name: '居酒屋 大興寿司', category: 'seafood', area: '新世界', lat: 34.6522, lng: 135.5058, description: 'コスパ抜群の海鮮居酒屋', tabelog: 'https://tabelog.com/osaka/A2701/A270406/27001583/', official: '' },

    // ========== ふぐ・かに ==========
    { id: 52, name: '大阪 かに蔵 梅田店', category: 'fugu', area: '梅田', lat: 34.7035, lng: 135.4985, description: '新鮮なかに料理の専門店', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27069854/', official: '' },
    { id: 53, name: '蟹吉 なんば道頓堀', category: 'fugu', area: '道頓堀', lat: 34.6688, lng: 135.5035, description: 'かに・ふぐ専門店', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27098541/', official: '' },
    { id: 54, name: 'かに道楽 道頓堀本店', category: 'fugu', area: '道頓堀', lat: 34.6692, lng: 135.5028, description: '動くカニ看板で有名な老舗', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001459/', official: 'https://douraku.co.jp/' },
    { id: 55, name: 'づぼらや 道頓堀店', category: 'fugu', area: '道頓堀', lat: 34.6685, lng: 135.5018, description: 'ふぐ料理の老舗', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001632/', official: '' },
    { id: 56, name: 'ふぐ料理 玄品 道頓堀', category: 'fugu', area: '道頓堀', lat: 34.6687, lng: 135.5025, description: 'ふぐ料理専門チェーン', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27018974/', official: 'https://www.tettiri.com/' },

    // ========== 居酒屋 ==========
    { id: 57, name: '地酒蔵大阪 梅田DDハウス店', category: 'izakaya', area: '梅田', lat: 34.7020, lng: 135.4995, description: '地酒と海鮮料理を楽しめる', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27045896/', official: '' },
    { id: 58, name: '酒場ニホレモ', category: 'izakaya', area: 'なんば', lat: 34.6625, lng: 135.5000, description: 'レモンサワーと創作料理', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27115478/', official: '' },
    { id: 59, name: '赤垣屋 梅田店', category: 'izakaya', area: '梅田', lat: 34.7028, lng: 135.4992, description: '大阪の老舗大衆居酒屋', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27001598/', official: '' },
    { id: 60, name: '立ち飲み じんべえ', category: 'izakaya', area: '天満', lat: 34.7052, lng: 135.5115, description: '天満の人気立ち飲み', tabelog: 'https://tabelog.com/osaka/A2701/A270103/27089654/', official: '' },
    { id: 61, name: 'ウラなんば らくがき酒場', category: 'izakaya', area: 'なんば', lat: 34.6632, lng: 135.4998, description: 'ウラなんばの隠れ家居酒屋', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27095874/', official: '' },

    // ========== スイーツ ==========
    { id: 62, name: '名東 なんば店', category: 'sweets', area: 'なんば', lat: 34.6660, lng: 135.5005, description: '台南の老舗台湾カステラ', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27125874/', official: '' },
    { id: 63, name: 'りくろーおじさんの店 なんば本店', category: 'sweets', area: 'なんば', lat: 34.6665, lng: 135.4998, description: 'ふわふわチーズケーキの名店', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001612/', official: 'https://www.rikuro.co.jp/' },
    { id: 64, name: 'パブロ 心斎橋店', category: 'sweets', area: '心斎橋', lat: 34.6740, lng: 135.5015, description: '焼きたてチーズタルト専門店', tabelog: 'https://tabelog.com/osaka/A2701/A270201/27070951/', official: 'https://www.pablo3.com/' },
    { id: 65, name: '喜八洲総本舗', category: 'sweets', area: '十三', lat: 34.7180, lng: 135.4815, description: 'みたらし団子の名店', tabelog: 'https://tabelog.com/osaka/A2701/A270302/27001606/', official: 'https://kiyasu.jp/' },
    { id: 66, name: '夫婦善哉', category: 'sweets', area: '法善寺横丁', lat: 34.6680, lng: 135.5040, description: '法善寺横丁の名物ぜんざい', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001617/', official: '' },
    { id: 67, name: '堂島ロール 本店', category: 'sweets', area: '北新地', lat: 34.6955, lng: 135.4935, description: '生クリームたっぷりのロールケーキ', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27041587/', official: 'https://www.mon-cher.com/' },

    // ========== 観光スポット ==========
    { id: 68, name: '大阪城', category: 'sightseeing', area: '大阪城公園', lat: 34.6873, lng: 135.5262, description: '豊臣秀吉が築いた日本を代表する名城', tabelog: '', official: 'https://www.osakacastle.net/' },
    { id: 69, name: '道頓堀 グリコ看板', category: 'sightseeing', area: '道頓堀', lat: 34.6687, lng: 135.5017, description: '大阪のシンボル・グリコの巨大看板', tabelog: '', official: 'https://www.dotonbori.or.jp/' },
    { id: 70, name: 'あべのハルカス', category: 'sightseeing', area: '阿倍野', lat: 34.6463, lng: 135.5130, description: '日本第2位の高さを誇る展望台', tabelog: '', official: 'https://www.abenoharukas-300.jp/' },
    { id: 71, name: '梅田スカイビル 空中庭園', category: 'sightseeing', area: '梅田', lat: 34.7052, lng: 135.4901, description: '世界の建築トップ20に選出された展望台', tabelog: '', official: 'https://www.skybldg.co.jp/' },
    { id: 72, name: 'ユニバーサル・スタジオ・ジャパン', category: 'sightseeing', area: 'USJ', lat: 34.6654, lng: 135.4323, description: '世界的人気のテーマパーク', tabelog: '', official: 'https://www.usj.co.jp/' },
    { id: 73, name: '海遊館', category: 'sightseeing', area: '天保山', lat: 34.6545, lng: 135.4290, description: '世界最大級の水族館', tabelog: '', official: 'https://www.kaiyukan.com/' },
    { id: 74, name: 'なんばグランド花月', category: 'sightseeing', area: 'なんば', lat: 34.6595, lng: 135.5040, description: 'お笑いの聖地・吉本新喜劇', tabelog: '', official: 'https://ngk.yoshimoto.co.jp/' },
    { id: 75, name: 'グラングリーン大阪', category: 'sightseeing', area: '梅田', lat: 34.7045, lng: 135.4920, description: '2024年開業の大型複合施設', tabelog: '', official: 'https://www.grandgreen-osaka.com/' },
    { id: 76, name: '通天閣', category: 'sightseeing', area: '新世界', lat: 34.6526, lng: 135.5064, description: '新世界のシンボル・展望塔', tabelog: '', official: 'https://www.tsutenkaku.co.jp/' },
    { id: 77, name: '新世界', category: 'sightseeing', area: '新世界', lat: 34.6520, lng: 135.5055, description: 'レトロな雰囲気の繁華街', tabelog: '', official: '' },
    { id: 78, name: '黒門市場', category: 'sightseeing', area: '日本橋', lat: 34.6670, lng: 135.5065, description: '大阪の台所・食べ歩きスポット', tabelog: '', official: 'https://kuromon.com/' },
    { id: 79, name: '法善寺横丁', category: 'sightseeing', area: '難波', lat: 34.6680, lng: 135.5045, description: '石畳の風情ある路地', tabelog: '', official: '' },
    { id: 80, name: '心斎橋筋商店街', category: 'sightseeing', area: '心斎橋', lat: 34.6740, lng: 135.5020, description: '大阪を代表するショッピング街', tabelog: '', official: 'https://www.shinsaibashi.or.jp/' },

    // ========== カレー（NEW） ==========
    { id: 81, name: '旧ヤム鐵道', category: 'curry', area: '梅田', lat: 34.7048, lng: 135.4965, description: 'カレー百名店選出、あいがけカレーが人気', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27080523/', official: '' },
    { id: 82, name: 'カシミール 本町店', category: 'curry', area: '本町', lat: 34.6832, lng: 135.5002, description: '老舗インドカレー店', tabelog: 'https://tabelog.com/osaka/A2701/A270106/27001485/', official: '' },
    { id: 83, name: 'コロンビア8', category: 'curry', area: '北浜', lat: 34.6895, lng: 135.5055, description: 'スパイスカレーの人気店', tabelog: 'https://tabelog.com/osaka/A2701/A270104/27076541/', official: '' },
    { id: 84, name: '2Ghar', category: 'curry', area: '肥後橋', lat: 34.6885, lng: 135.4935, description: 'カレー百名店2024選出', tabelog: 'https://tabelog.com/osaka/A2701/A270103/27095874/', official: '' },
    { id: 85, name: 'ボタニカリー', category: 'curry', area: '西天満', lat: 34.6975, lng: 135.5085, description: '野菜たっぷりのスパイスカレー', tabelog: 'https://tabelog.com/osaka/A2701/A270103/27089541/', official: '' },
    { id: 86, name: 'スパイスカリー大陸', category: 'curry', area: '谷町四丁目', lat: 34.6815, lng: 135.5175, description: '本格スパイスカレーの名店', tabelog: 'https://tabelog.com/osaka/A2701/A270104/27087452/', official: '' },

    // ========== 中華（NEW） ==========
    { id: 87, name: '中国菜 オイル', category: 'chinese', area: '福島', lat: 34.6918, lng: 135.4845, description: '四川麻婆豆腐が絶品の人気店', tabelog: 'https://tabelog.com/osaka/A2701/A270108/27085412/', official: '' },
    { id: 88, name: '蓬莱本館', category: 'chinese', area: 'なんば', lat: 34.6658, lng: 135.5012, description: '551蓬莱の本店、豚まんで有名', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001623/', official: 'https://www.551horai.co.jp/' },
    { id: 89, name: '大阪王将 道頓堀本店', category: 'chinese', area: '道頓堀', lat: 34.6683, lng: 135.5018, description: '餃子チェーンの原点', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001587/', official: 'https://www.osaka-ohsho.com/' },
    { id: 90, name: '眞 中華そば', category: 'chinese', area: '天満', lat: 34.7058, lng: 135.5118, description: '本格中華そばの人気店', tabelog: 'https://tabelog.com/osaka/A2701/A270103/27092145/', official: '' },
    { id: 91, name: '龍門', category: 'chinese', area: '心斎橋', lat: 34.6738, lng: 135.5008, description: '老舗中華料理店', tabelog: 'https://tabelog.com/osaka/A2701/A270201/27001452/', official: '' },
    { id: 92, name: '點心甜心', category: 'chinese', area: '梅田', lat: 34.7032, lng: 135.4978, description: '本格飲茶と点心', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27098541/', official: '' },

    // ========== 和食（NEW） ==========
    { id: 93, name: '炭焼きうなぎの魚伊本店', category: 'washoku', area: '旭区', lat: 34.7125, lng: 135.5345, description: '創業100年以上の老舗うなぎ店', tabelog: 'https://tabelog.com/osaka/A2701/A270305/27001589/', official: '' },
    { id: 94, name: '増井屋', category: 'washoku', area: '城東区', lat: 34.7015, lng: 135.5425, description: '人気のとんかつ専門店', tabelog: 'https://tabelog.com/osaka/A2701/A270305/27085412/', official: '' },
    { id: 95, name: '手打ちそば 守破離 谷町店', category: 'washoku', area: '谷町', lat: 34.6785, lng: 135.5165, description: '本格手打ちそばの名店', tabelog: 'https://tabelog.com/osaka/A2701/A270104/27078541/', official: '' },
    { id: 96, name: '活 伊勢海老料理 中納言 道頓堀本店', category: 'washoku', area: '道頓堀', lat: 34.6678, lng: 135.5022, description: '伊勢海老料理の専門店', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001598/', official: 'https://www.chunagon.com/' },
    { id: 97, name: '割烹 味菜', category: 'washoku', area: '北新地', lat: 34.6992, lng: 135.4965, description: '季節の懐石料理', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27065874/', official: '' },
    { id: 98, name: 'だいぜん', category: 'washoku', area: '福島', lat: 34.6912, lng: 135.4848, description: '新鮮な刺身と和食', tabelog: 'https://tabelog.com/osaka/A2701/A270108/27078965/', official: '' },
    { id: 99, name: 'とんかつ KYK 本店', category: 'washoku', area: '心斎橋', lat: 34.6735, lng: 135.5012, description: '大阪発祥のとんかつチェーン', tabelog: 'https://tabelog.com/osaka/A2701/A270201/27001574/', official: 'https://www.tonkatu-kyk.co.jp/' },
    { id: 100, name: '天ぷら大吉 本店', category: 'washoku', area: '福島', lat: 34.6922, lng: 135.4852, description: '行列必至の天ぷら専門店', tabelog: 'https://tabelog.com/osaka/A2701/A270108/27001587/', official: '' },

    // ========== 洋食（NEW） ==========
    { id: 101, name: '北極星 心斎橋本店', category: 'western', area: '心斎橋', lat: 34.6732, lng: 135.5015, description: 'オムライス発祥の店', tabelog: 'https://tabelog.com/osaka/A2701/A270201/27001589/', official: 'https://hokkyokusei.jp/' },
    { id: 102, name: '自由軒 難波本店', category: 'western', area: 'なんば', lat: 34.6652, lng: 135.5008, description: '名物カレー「インディアンカレー」', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001596/', official: '' },
    { id: 103, name: 'グリル梵 心斎橋店', category: 'western', area: '心斎橋', lat: 34.6745, lng: 135.5018, description: 'ビフカツが名物の老舗洋食店', tabelog: 'https://tabelog.com/osaka/A2701/A270201/27045874/', official: '' },
    { id: 104, name: '明治軒', category: 'western', area: '心斎橋', lat: 34.6728, lng: 135.5020, description: '創業70年のオムライスの名店', tabelog: 'https://tabelog.com/osaka/A2701/A270201/27001582/', official: '' },
    { id: 105, name: 'レストラン はなふさ', category: 'western', area: '梅田', lat: 34.7038, lng: 135.4985, description: '老舗洋食レストラン', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27001598/', official: '' },
    { id: 106, name: 'グリル ロン', category: 'western', area: '堺筋本町', lat: 34.6825, lng: 135.5088, description: '本格洋食とハンバーグ', tabelog: 'https://tabelog.com/osaka/A2701/A270106/27065874/', official: '' },

    // ========== 追加のお店（既存カテゴリ） ==========
    // たこ焼き追加
    { id: 107, name: 'たこ梅 本店', category: 'takoyaki', area: '道頓堀', lat: 34.6678, lng: 135.5025, description: '明治18年創業の老舗', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001245/', official: '' },
    { id: 108, name: '道頓堀コナモンミュージアム', category: 'takoyaki', area: '道頓堀', lat: 34.6688, lng: 135.5015, description: 'たこ焼き体験もできる', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27015874/', official: '' },

    // お好み焼き追加
    { id: 109, name: 'ぼてぢゅう 本店', category: 'okonomiyaki', area: '道頓堀', lat: 34.6682, lng: 135.5028, description: '老舗お好み焼きチェーン', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001578/', official: 'https://www.botejyu.co.jp/' },
    { id: 110, name: '味乃家', category: 'okonomiyaki', area: 'なんば', lat: 34.6638, lng: 135.5015, description: '豚玉が人気のお好み焼き店', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001598/', official: '' },

    // ラーメン追加
    { id: 111, name: '麺屋 えぐち', category: 'ramen', area: '福島', lat: 34.6925, lng: 135.4848, description: '鶏白湯ラーメンの名店', tabelog: 'https://tabelog.com/osaka/A2701/A270108/27092541/', official: '' },
    { id: 112, name: '無鉄砲 大阪店', category: 'ramen', area: '吹田', lat: 34.7585, lng: 135.5185, description: '超濃厚豚骨ラーメン', tabelog: 'https://tabelog.com/osaka/A2706/A270601/27045874/', official: '' },
    { id: 113, name: '神座 道頓堀店', category: 'ramen', area: '道頓堀', lat: 34.6685, lng: 135.5020, description: '白菜たっぷりのおいしいラーメン', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001589/', official: 'https://kamukura.co.jp/' },

    // 焼肉追加
    { id: 114, name: '焼肉 力丸 梅田店', category: 'yakiniku', area: '梅田', lat: 34.7018, lng: 135.4982, description: '黒毛和牛の人気焼肉店', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27078541/', official: '' },
    { id: 115, name: '鶴橋 焼肉の老舗 空', category: 'yakiniku', area: '鶴橋', lat: 34.6675, lng: 135.5305, description: '鶴橋コリアンタウンの名店', tabelog: 'https://tabelog.com/osaka/A2701/A270206/27015874/', official: '' },

    // 居酒屋追加
    { id: 116, name: '銀座屋', category: 'izakaya', area: '梅田', lat: 34.7025, lng: 135.4988, description: 'コスパ抜群の大衆居酒屋', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27045874/', official: '' },
    { id: 117, name: 'ダイニングステージ 佐海屋', category: 'izakaya', area: 'なんば', lat: 34.6628, lng: 135.5005, description: '大阪の家庭料理が楽しめる', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27095421/', official: '' },
    { id: 118, name: '酒房 若ー', category: 'izakaya', area: '天満', lat: 34.7055, lng: 135.5112, description: '天満の人気居酒屋', tabelog: 'https://tabelog.com/osaka/A2701/A270103/27078541/', official: '' },

    // スイーツ追加
    { id: 119, name: 'グランマーブル 心斎橋店', category: 'sweets', area: '心斎橋', lat: 34.6742, lng: 135.5012, description: 'マーブルデニッシュの名店', tabelog: 'https://tabelog.com/osaka/A2701/A270201/27065874/', official: '' },
    { id: 120, name: 'カフェ英國屋 心斎橋本店', category: 'sweets', area: '心斎橋', lat: 34.6738, lng: 135.5008, description: '老舗カフェでケーキを', tabelog: 'https://tabelog.com/osaka/A2701/A270201/27001589/', official: '' },
    { id: 121, name: 'Salon de Mon Cher', category: 'sweets', area: '心斎橋', lat: 34.6730, lng: 135.5018, description: '堂島ロールのカフェ', tabelog: 'https://tabelog.com/osaka/A2701/A270201/27058741/', official: '' },

    // 寿司追加
    { id: 122, name: '大起水産 回転寿司 道頓堀店', category: 'sushi', area: '道頓堀', lat: 34.6680, lng: 135.5022, description: '新鮮なネタの回転寿司', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27045874/', official: '' },
    { id: 123, name: '元禄寿司 千日前店', category: 'sushi', area: '千日前', lat: 34.6675, lng: 135.5010, description: '回転寿司発祥の店', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001598/', official: '' },

    // うどん・そば追加
    { id: 124, name: '手打ちうどん 釜たけ流 うめだ製麺', category: 'udon', area: '梅田', lat: 34.7042, lng: 135.4992, description: '本格手打ちうどん', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27078541/', official: '' },
    { id: 125, name: 'そば処 とう庵', category: 'udon', area: '本町', lat: 34.6828, lng: 135.4998, description: '香り高い手打ちそば', tabelog: 'https://tabelog.com/osaka/A2701/A270106/27065874/', official: '' },

    // ========== カフェ（NEW） ==========
    { id: 126, name: '五感 北浜本館', category: 'cafe', area: '北浜', lat: 34.6908, lng: 135.5065, description: 'レトロ建築で楽しむ絶品スイーツ', tabelog: 'https://tabelog.com/osaka/A2701/A270102/27003447/', official: 'https://www.patisserie-gokan.co.jp/' },
    { id: 127, name: '北浜レトロ', category: 'cafe', area: '北浜', lat: 34.6915, lng: 135.5070, description: '英国風ティールーム', tabelog: 'https://tabelog.com/osaka/A2701/A270102/27000121/', official: 'https://www.kitahama-retro.co.jp/' },
    { id: 128, name: '山口果物', category: 'cafe', area: '谷町六丁目', lat: 34.6755, lng: 135.5155, description: 'フルーツかき氷が人気', tabelog: 'https://tabelog.com/osaka/A2701/A270204/27044439/', official: 'https://www.fruit-garden.net/' },
    { id: 129, name: '餅匠しづく 新町店', category: 'cafe', area: '西大橋', lat: 34.6765, lng: 135.4945, description: 'モダンな和菓子カフェ', tabelog: 'https://tabelog.com/osaka/A2701/A270201/27042898/', official: 'https://mochi-shizuku.jp/' },
    { id: 130, name: 'SOT COFFEE ROASTER', category: 'cafe', area: '天満橋', lat: 34.6885, lng: 135.5185, description: 'こだわりの自家焙煎コーヒー', tabelog: 'https://tabelog.com/osaka/A2701/A270104/27091245/', official: '' },
    { id: 131, name: 'ホワイトバード コーヒー', category: 'cafe', area: '梅田', lat: 34.7005, lng: 135.5015, description: '隠れ家的な人気カフェ', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27083049/', official: '' },
    { id: 132, name: 'ドレ', category: 'cafe', area: '梅田', lat: 34.7045, lng: 135.4938, description: 'ピーナッツカフェ', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27092147/', official: '' },
    { id: 133, name: 'ロンドンティールーム', category: 'cafe', area: '堂島', lat: 34.6965, lng: 135.4955, description: '本格的な英国紅茶', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27001452/', official: 'https://www.london-tearoom.co.jp/' },
    { id: 134, name: '喫茶サンシャイン', category: 'cafe', area: '梅田', lat: 34.7008, lng: 135.5002, description: '老舗の純喫茶', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27000121/', official: 'https://kissa-sunshine.jp/' },
    { id: 135, name: 'MONDIAL KAFFEE 328', category: 'cafe', area: '北堀江', lat: 34.6735, lng: 135.4940, description: '自家焙煎スペシャルティコーヒー', tabelog: 'https://tabelog.com/osaka/A2701/A270201/27076541/', official: '' },
    { id: 136, name: 'タカムラ ワイン＆コーヒー', category: 'cafe', area: '肥後橋', lat: 34.6890, lng: 135.4915, description: 'ワインとコーヒーの専門店', tabelog: 'https://tabelog.com/osaka/A2701/A270102/27072145/', official: 'https://takamuranet.com/' },
    { id: 137, name: 'パティスリー ラヴィルリエ', category: 'cafe', area: '中崎町', lat: 34.7075, lng: 135.5065, description: '大阪屈指の人気ケーキ店', tabelog: 'https://tabelog.com/osaka/A2701/A270103/27044985/', official: '' },
    { id: 138, name: 'アシッドラシーヌ', category: 'cafe', area: '天満橋', lat: 34.6875, lng: 135.5145, description: '行列のできるパティスリー', tabelog: 'https://tabelog.com/osaka/A2701/A270104/27071345/', official: 'https://acidracines.com/' },
    { id: 139, name: 'カカオティエ ゴカン', category: 'cafe', area: '高麗橋', lat: 34.6895, lng: 135.5045, description: 'チョコレート専門店', tabelog: 'https://tabelog.com/osaka/A2701/A270102/27089541/', official: 'https://cacaotier-gokan.co.jp/' },
    { id: 140, name: 'マロニエ', category: 'cafe', area: '本町', lat: 34.6815, lng: 135.5005, description: 'レトロな雰囲気の純喫茶', tabelog: 'https://tabelog.com/osaka/A2701/A270106/27001485/', official: '' },

    // ========== 家系ラーメン（NEW） ==========
    { id: 251, name: '麺家 よし川', category: 'iekei', area: '心斎橋', lat: 34.6735, lng: 135.5015, description: '京都の人気店「あくた川」系譜の本格家系', tabelog: 'https://tabelog.com/osaka/A2701/A270201/27124967/', official: '' },
    { id: 252, name: '町田商店 北新地店', category: 'iekei', area: '北新地', lat: 34.6970, lng: 135.5015, description: '深夜まで営業、活気ある家系チェーン', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27085731/', official: 'https://www.eak-ramen.jp/' },
    { id: 253, name: '横浜家系ラーメン 本田家', category: 'iekei', area: '本町', lat: 34.6835, lng: 135.5005, description: 'ビジネス街で人気の家系ラーメン', tabelog: 'https://tabelog.com/osaka/A2701/A270106/27118432/', official: '' },
    { id: 254, name: '梅田 魂心家', category: 'iekei', area: '東梅田', lat: 34.7015, lng: 135.5025, description: 'ライスおかわり自由、濃厚クリーミー', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27069152/', official: 'http://www.konshinya.com/' },
    { id: 255, name: 'そらの星', category: 'iekei', area: '千林', lat: 34.7215, lng: 135.5515, description: '大阪家系のパイオニア（少し遠方）', tabelog: 'https://tabelog.com/osaka/A2701/A270304/27044606/', official: '' },

    // ========== パン（NEW） ==========
    { id: 141, name: 'Route271', category: 'bread', area: '梅田', lat: 34.7055, lng: 135.4965, description: '行列の絶えない人気パン屋', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27087145/', official: '' },
    { id: 142, name: 'パネ・ポルチーニ', category: 'bread', area: '福島', lat: 34.6945, lng: 135.4865, description: 'モチモチパンが人気', tabelog: 'https://tabelog.com/osaka/A2701/A270108/27045874/', official: 'https://www.porcini.jp/' },
    { id: 143, name: 'ル・シュクレ・クール', category: 'bread', area: '北新地', lat: 34.6955, lng: 135.4925, description: '食べログパン百名店', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27092147/', official: 'https://lesucrecoeur.com/' },
    { id: 144, name: 'ブーランジェリー パリゴ', category: 'bread', area: '天王寺', lat: 34.6525, lng: 135.5185, description: '天王寺の実力派ベーカリー', tabelog: 'https://tabelog.com/osaka/A2701/A270203/27011245/', official: '' },
    { id: 145, name: 'パンデュース', category: 'bread', area: '本町', lat: 34.6845, lng: 135.5025, description: '野菜を使ったパンが豊富', tabelog: 'https://tabelog.com/osaka/A2701/A270106/27001452/', official: 'https://www.painduce.com/' },
    { id: 146, name: 'ブーランジェリー タカギ', category: 'bread', area: '肥後橋', lat: 34.6915, lng: 135.4935, description: '日常使いしたい人気のパン屋', tabelog: 'https://tabelog.com/osaka/A2701/A270102/27001589/', official: '' },
    { id: 147, name: 'foodscape!', category: 'bread', area: '福島', lat: 34.6935, lng: 135.4825, description: 'カフェ併設のおしゃれパン屋', tabelog: 'https://tabelog.com/osaka/A2701/A270108/27085412/', official: '' },
    { id: 148, name: 'まん福ベーカリー', category: 'bread', area: '北浜', lat: 34.6905, lng: 135.5085, description: '夜遅くまで営業しているパン屋', tabelog: 'https://tabelog.com/osaka/A2701/A270102/27060589/', official: '' },
    { id: 149, name: 'コバトパン工場', category: 'bread', area: '天満橋', lat: 34.6885, lng: 135.5165, description: 'コッペパン専門店', tabelog: 'https://tabelog.com/osaka/A2701/A270104/27078541/', official: 'https://batongroup.jp/' },
    { id: 150, name: 'ブランジュリ P&B', category: 'bread', area: '北堀江', lat: 34.6725, lng: 135.4925, description: 'ハード系パンのおいしいお店', tabelog: 'https://tabelog.com/osaka/A2701/A270201/27065874/', official: '' },

    // ========== バー（NEW） ==========
    { id: 151, name: 'サンボア 北新地', category: 'bar', area: '北新地', lat: 34.6975, lng: 135.4985, description: '老舗オーセンティックバー', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27000121/', official: 'https://samboa.co.jp/' },
    { id: 152, name: 'バー オーガスタ', category: 'bar', area: '梅田', lat: 34.6995, lng: 135.4955, description: 'カクテルコンペ優勝のカクテル', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27001452/', official: '' },
    { id: 153, name: 'CRAFT BEER BASE', category: 'bar', area: '梅田', lat: 34.7055, lng: 135.4905, description: 'クラフトビール専門店', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27065874/', official: 'https://www.craftbeerbase.com/' },
    { id: 154, name: 'バー K', category: 'bar', area: '北新地', lat: 34.6985, lng: 135.4965, description: '落ち着いた大人のバー', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27003456/', official: '' },
    { id: 155, name: '40 Sky Bar & Lounge', category: 'bar', area: '梅田', lat: 34.7052, lng: 135.4901, description: '空中庭園近くの絶景バー', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27092147/', official: '' },
    { id: 156, name: 'Bar Nayuta', category: 'bar', area: 'アメ村', lat: 34.6720, lng: 135.4995, description: '隠れ家のようなミクソロジーバー', tabelog: 'https://tabelog.com/osaka/A2701/A270201/27083049/', official: '' },
    { id: 157, name: 'スリーモンキーズカフェ', category: 'bar', area: 'なんば', lat: 34.6685, lng: 135.5005, description: 'ダーツも楽しめる賑やかなバー', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27015874/', official: '' },
    { id: 158, name: 'ニッカバー', category: 'bar', area: '北新地', lat: 34.6970, lng: 135.5005, description: 'ウイスキーの種類が豊富', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27001589/', official: '' },
    { id: 159, name: 'Bar 華', category: 'bar', area: 'ミナミ', lat: 34.6705, lng: 135.5035, description: '女性バーテンダーの人気店', tabelog: 'https://tabelog.com/osaka/A2701/A270201/27045874/', official: '' },
    { id: 160, name: 'PC and Retro Bar', category: 'bar', area: '日本橋', lat: 34.6615, lng: 135.5065, description: 'レトロゲームができるバー', tabelog: '', official: '' },

    // ========== エリア強化：天満・京橋・福島（多数追加） ==========
    // 天満（はしご酒の聖地）
    { id: 161, name: '鳥匠 いし井', category: 'izakaya', area: '天満', lat: 34.6965, lng: 135.5055, description: '★ミシュラン獲得の焼き鳥', tabelog: 'https://tabelog.com/osaka/A2701/A270103/27001452/', official: '' },
    { id: 162, name: '旨い酒と肴 呑喜', category: 'izakaya', area: '天満', lat: 34.7065, lng: 135.5125, description: '魚が美味い人気居酒屋', tabelog: 'https://tabelog.com/osaka/A2701/A270103/27045874/', official: '' },
    { id: 163, name: '春駒 支店', category: 'sushi', area: '天満', lat: 34.7075, lng: 135.5120, description: '本店同様に行列のできる寿司店', tabelog: 'https://tabelog.com/osaka/A2701/A270103/27001599/', official: '' },
    { id: 164, name: 'すし政 中店', category: 'sushi', area: '天満', lat: 34.7070, lng: 135.5130, description: '安くて美味い大衆寿司', tabelog: 'https://tabelog.com/osaka/A2701/A270103/27001598/', official: '' },
    { id: 165, name: '上海食苑', category: 'chinese', area: '天満', lat: 34.7060, lng: 135.5115, description: '本格点心が楽しめる', tabelog: 'https://tabelog.com/osaka/A2701/A270103/27015874/', official: '' },
    { id: 166, name: '裏ヒロヤ', category: 'western', area: '天満', lat: 34.7068, lng: 135.5118, description: 'コスパ最強のイタリアン食堂', tabelog: 'https://tabelog.com/osaka/A2701/A270103/27045874/', official: '' },
    { id: 167, name: 'アネロ', category: 'western', area: '天満', lat: 34.7072, lng: 135.5122, description: '予約必須の人気イタリアン', tabelog: 'https://tabelog.com/osaka/A2701/A270103/27078541/', official: '' },
    { id: 168, name: '天満酒蔵', category: 'izakaya', area: '天満', lat: 34.7062, lng: 135.5128, description: '昼から飲める老舗大衆酒場', tabelog: 'https://tabelog.com/osaka/A2701/A270103/27001452/', official: '' },
    { id: 169, name: 'ブギウギ', category: 'izakaya', area: '天満', lat: 34.7058, lng: 135.5135, description: '路地裏の隠れ家立ち飲み', tabelog: '', official: '' },
    { id: 170, name: 'ダイワ食堂', category: 'izakaya', area: '天満', lat: 34.7065, lng: 135.5110, description: 'エビ平が名物の居酒屋', tabelog: 'https://tabelog.com/osaka/A2701/A270103/27001589/', official: '' },

    // 京橋（立ち飲みの聖地）
    { id: 171, name: '居酒屋 とよ', category: 'izakaya', area: '京橋', lat: 34.6975, lng: 135.5345, description: 'Netflixでも紹介された路上の名店', tabelog: 'https://tabelog.com/osaka/A2701/A270107/27002951/', official: '' },
    { id: 172, name: '京橋 庶民', category: 'izakaya', area: '京橋', lat: 34.6965, lng: 135.5335, description: '驚異のコスパ立ち飲み', tabelog: 'https://tabelog.com/osaka/A2701/A270107/27095421/', official: '' },
    { id: 173, name: 'まつい', category: 'kushikatsu', area: '京橋', lat: 34.6970, lng: 135.5340, description: '駅前の人気串かつ・おでん', tabelog: 'https://tabelog.com/osaka/A2701/A270107/27001452/', official: '' },
    { id: 174, name: '京松蘭 本店', category: 'yakiniku', area: '京橋', lat: 34.6980, lng: 135.5325, description: 'コースのボリュームがすごい焼肉店', tabelog: 'https://tabelog.com/osaka/A2701/A270107/27058741/', official: '' },
    { id: 175, name: '富鶴', category: 'yakiniku', area: '京橋', lat: 34.6955, lng: 135.5355, description: '老舗の焼肉・ホルモン店', tabelog: 'https://tabelog.com/osaka/A2701/A270107/27001589/', official: '' },
    { id: 176, name: '丸一屋', category: 'izakaya', area: '京橋', lat: 34.6968, lng: 135.5330, description: '昭和レトロな大衆酒場', tabelog: 'https://tabelog.com/osaka/A2701/A270107/27001598/', official: '' },
    { id: 177, name: '七津屋 京橋店', category: 'izakaya', area: '京橋', lat: 34.6972, lng: 135.5338, description: '朝から飲める立ち飲み', tabelog: 'https://tabelog.com/osaka/A2701/A270107/27045874/', official: '' },
    { id: 178, name: '京橋二刀流', category: 'izakaya', area: '京橋', lat: 34.6960, lng: 135.5348, description: '日本酒とアテが旨い店', tabelog: 'https://tabelog.com/osaka/A2701/A270107/27065874/', official: '' },

    // 福島（グルメ激戦区）
    { id: 179, name: '亜州食堂 チョウク', category: 'curry', area: '福島', lat: 34.6935, lng: 135.4835, description: 'アジア各国のエスニック料理', tabelog: 'https://tabelog.com/osaka/A2701/A270108/27058741/', official: '' },
    { id: 180, name: '大洋軒', category: 'chinese', area: '福島', lat: 34.6925, lng: 135.4855, description: 'から揚げマウンテンが名物', tabelog: 'https://tabelog.com/osaka/A2701/A270108/27001589/', official: '' },
    { id: 181, name: '烈志笑魚油 麺香房 三く', category: 'ramen', area: '福島', lat: 34.6940, lng: 135.4840, description: '魚介出汁の絶品ラーメン', tabelog: 'https://tabelog.com/osaka/A2701/A270108/27058965/', official: '' },
    { id: 182, name: '藤家 セカンド', category: 'izakaya', area: '福島', lat: 34.6930, lng: 135.4850, description: 'おしゃれなバル風居酒屋', tabelog: 'https://tabelog.com/osaka/A2701/A270108/27045874/', official: '' },
    { id: 183, name: '福島壱麺', category: 'ramen', area: '福島', lat: 34.6950, lng: 135.4860, description: 'ホテル地下の人気ラーメン', tabelog: 'https://tabelog.com/osaka/A2701/A270108/27078541/', official: '' },
    { id: 184, name: 'ポルチーニ', category: 'western', area: '福島', lat: 34.6942, lng: 135.4862, description: '予約の取れないイタリアン', tabelog: 'https://tabelog.com/osaka/A2701/A270108/27015874/', official: '' },
    { id: 185, name: '炭火焼鳥 とり藤', category: 'izakaya', area: '福島', lat: 34.6938, lng: 135.4845, description: 'こだわりの炭火焼き鳥', tabelog: 'https://tabelog.com/osaka/A2701/A270108/27065874/', official: '' },

    // ========== その他エリア・ジャンル追加 ==========
    // 新大阪・西中島南方（ビジネス街のグルメ）
    { id: 186, name: '人類みな麺類', category: 'ramen', area: '西中島', lat: 34.7255, lng: 135.5005, description: '大阪No.1とも言われる行列店', tabelog: 'https://tabelog.com/osaka/A2701/A270301/27064584/', official: '' },
    { id: 187, name: '塩元帥 西中島店', category: 'ramen', area: '西中島', lat: 34.7265, lng: 135.4985, description: '天然素材にこだわった塩ラーメン', tabelog: 'https://tabelog.com/osaka/A2701/A270301/27058741/', official: '' },

    // 鶴橋（コリアンタウン）
    { id: 188, name: '鶴橋 風月 本店', category: 'okonomiyaki', area: '鶴橋', lat: 34.6665, lng: 135.5315, description: 'ここが発祥の本店', tabelog: 'https://tabelog.com/osaka/A2701/A270205/27001452/', official: '' },
    { id: 189, name: 'アジヨシ 総本店', category: 'yakiniku', area: '鶴橋', lat: 34.6660, lng: 135.5310, description: '鶴橋駅前の大型焼肉店', tabelog: 'https://tabelog.com/osaka/A2701/A270205/27001589/', official: '' },
    { id: 190, name: '豊田商店', category: 'kushikatsu', area: '鶴橋', lat: 34.6655, lng: 135.5320, description: 'キムチの名店（テイクアウト）', tabelog: '', official: 'https://www.toyoda-shouten.com/' },

    // ミナミ・アメ村追加
    { id: 191, name: 'レッドロック アメ村店', category: 'western', area: 'アメ村', lat: 34.6715, lng: 135.4985, description: 'ローストビーフ丼が人気', tabelog: 'https://tabelog.com/osaka/A2701/A270201/27083049/', official: '' },
    { id: 192, name: 'ニューライト', category: 'western', area: 'アメ村', lat: 34.6725, lng: 135.4990, description: 'セイロンライスが名物のレトロ店', tabelog: 'https://tabelog.com/osaka/A2701/A270201/27001452/', official: '' },
    { id: 193, name: '味穂', category: 'takoyaki', area: 'アメ村', lat: 34.6710, lng: 135.4995, description: 'だしで食べる明石焼き風たこ焼き', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001589/', official: '' },

    // 梅田・キタ追加
    { id: 194, name: '揚子江ラーメン', category: 'ramen', area: '梅田', lat: 34.7035, lng: 135.4995, description: '透き通ったスープの塩ラーメン', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27001598/', official: '' },
    { id: 195, name: 'お初天神', category: 'sightseeing', area: '梅田', lat: 34.6995, lng: 135.5010, description: '縁結びの神社・裏参道はグルメ街', tabelog: '', official: 'https://www.ohatsutenjin.or.jp/' },
    { id: 196, name: '亀すし 総本店', category: 'sushi', area: '梅田', lat: 34.7015, lng: 135.5005, description: '大衆寿司の名店', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27001452/', official: '' },
    { id: 197, name: 'ぶどう亭', category: 'western', area: '梅田', lat: 34.6990, lng: 135.4975, description: 'ハンバーグが人気の行列店', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27001589/', official: '' },

    // その他追加（200〜250を目指して）
    { id: 198, name: 'カドヤ食堂 総本店', category: 'ramen', area: '西長堀', lat: 34.6755, lng: 135.4850, description: '大阪ラーメン界の至宝', tabelog: 'https://tabelog.com/osaka/A2701/A270105/27001452/', official: '' },
    { id: 199, name: 'マダムシンコ 箕面本店', category: 'sweets', area: '箕面', lat: 34.8285, lng: 135.4705, description: 'マダムブリュレで有名（少し遠方）', tabelog: 'https://tabelog.com/osaka/A2706/A270603/27004452/', official: 'https://madameshinco.jp/' },
    { id: 200, name: '551蓬莱 本店', category: 'chinese', area: 'なんば', lat: 34.6655, lng: 135.5015, description: 'レストラン併設の本店', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001452/', official: 'https://www.551horai.co.jp/' },
    { id: 201, name: 'りくろーおじさん 大丸梅田店', category: 'sweets', area: '梅田', lat: 34.7020, lng: 135.4955, description: 'お土産に最適なチーズケーキ', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27058741/', official: 'https://www.rikuro.co.jp/' },
    { id: 202, name: '阪神名物 いか焼き', category: 'takoyaki', area: '梅田', lat: 34.7015, lng: 135.4965, description: '阪神百貨店名物いか焼き', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27001589/', official: '' },
    { id: 203, name: '御座候 大阪駅店', category: 'sweets', area: '梅田', lat: 34.7025, lng: 135.4958, description: '回転焼き（今川焼き）の名店', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27045874/', official: 'https://www.gozasoro.co.jp/' },
    { id: 204, name: '天神橋筋商店街', category: 'sightseeing', area: '天満', lat: 34.7095, lng: 135.5115, description: '日本一長い商店街', tabelog: '', official: '' },
    { id: 205, name: '四天王寺', category: 'sightseeing', area: '天王寺', lat: 34.6540, lng: 135.5165, description: '聖徳太子建立の古刹', tabelog: '', official: 'https://www.shitennoji.or.jp/' },
    { id: 206, name: '住吉大社', category: 'sightseeing', area: '住吉', lat: 34.6125, lng: 135.4935, description: '初詣客数大阪No.1の神社', tabelog: '', official: 'https://www.sumiyoshitaisha.net/' },
    { id: 207, name: 'エキスポシティ', category: 'sightseeing', area: '万博公園', lat: 34.8055, lng: 135.5325, description: '大型複合施設とニフレル', tabelog: '', official: 'https://www.expocity-mf.com/' },
    { id: 208, name: '太陽の塔', category: 'sightseeing', area: '万博公園', lat: 34.8095, lng: 135.5325, description: '岡本太郎作の芸術作品', tabelog: '', official: 'https://taiyounotou-expo70.jp/' },
    { id: 209, name: 'カップヌードルミュージアム', category: 'sightseeing', area: '池田', lat: 34.8185, lng: 135.4265, description: 'インスタントラーメンの発明記念館', tabelog: '', official: 'https://www.cupnoodles-museum.jp/' },
    { id: 210, name: '箕面大滝', category: 'sightseeing', area: '箕面', lat: 34.8550, lng: 135.4715, description: '日本の滝百選の一つ', tabelog: '', official: '' },
    { id: 211, name: 'ひらパー', category: 'sightseeing', area: '枚方', lat: 34.8065, lng: 135.6385, description: 'ひらかたパーク、通称ひらパー', tabelog: '', official: 'http://www.hirakatapark.co.jp/' },
    { id: 212, name: 'スパワールド', category: 'sightseeing', area: '新世界', lat: 34.6495, lng: 135.5065, description: '世界の大温泉', tabelog: '', official: 'https://www.spaworld.co.jp/' },

    // グルメ（ラストスパート）
    { id: 213, name: 'グリル欧風軒', category: 'western', area: '梅田', lat: 34.7005, lng: 135.4965, description: 'オムライスとカキフライ', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27001452/', official: '' },
    { id: 214, name: 'インデアンカレー 阪急三番街', category: 'curry', area: '梅田', lat: 34.7045, lng: 135.4985, description: '大阪カレーの代表格', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27001589/', official: 'https://www.indiancurry.jp/' },
    { id: 215, name: 'ピッコロ カリー', category: 'curry', area: '梅田', lat: 34.7035, lng: 135.4990, description: '濃厚ソースの欧風カレー', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27001598/', official: 'https://www.piccolo.ne.jp/' },
    { id: 216, name: '大阪トンテキ', category: 'western', area: '梅田', lat: 34.7005, lng: 135.4975, description: 'ボリューム満点トンテキ', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27045874/', official: '' },
    { id: 217, name: 'はなみち', category: 'ramen', area: '天王寺', lat: 34.6485, lng: 135.5145, description: '豊潤豚骨ラーメン', tabelog: 'https://tabelog.com/osaka/A2701/A270203/27015874/', official: '' },
    { id: 218, name: '古潭ラーメン', category: 'ramen', area: '阿倍野', lat: 34.6465, lng: 135.5135, description: '創業50年の老舗ラーメン', tabelog: 'https://tabelog.com/osaka/A2701/A270203/27001452/', official: 'https://ramen-kotan.co.jp/' },
    { id: 219, name: '赤白（コウハク）', category: 'western', area: '梅田', lat: 34.7025, lng: 135.4965, description: 'フレンチおでんが大人気', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27065874/', official: '' },
    { id: 220, name: '天ぷら まきの', category: 'washoku', area: '天神橋', lat: 34.7105, lng: 135.5125, description: '揚げたて天ぷら定食', tabelog: 'https://tabelog.com/osaka/A2701/A270103/27085412/', official: '' },
    { id: 221, name: 'うどん 兎麦', category: 'udon', area: '梅田', lat: 34.7038, lng: 135.4978, description: '阪急三番街の人気うどん', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27001452/', official: '' },
    { id: 222, name: '梅田 釜たけうどん', category: 'udon', area: '梅田', lat: 34.7095, lng: 135.4955, description: 'ちく玉天ぶっかけ', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27001589/', official: '' },
    { id: 223, name: 'つるとんたん 北新地店', category: 'udon', area: '北新地', lat: 34.6975, lng: 135.4965, description: '創作うどんの有名店', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27001598/', official: 'https://www.tsurutontan.co.jp/' },
    { id: 224, name: 'がんこ寿司 道頓堀店', category: 'sushi', area: '道頓堀', lat: 34.6685, lng: 135.5030, description: '大阪の和食・寿司チェーン', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001578/', official: 'https://www.gankofood.co.jp/' },
    { id: 225, name: '市場ずし', category: 'sushi', area: '難波', lat: 34.6655, lng: 135.5015, description: 'ネタが大きい大衆寿司', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001452/', official: '' },
    { id: 226, name: 'ときすし', category: 'sushi', area: '難波', lat: 34.6645, lng: 135.5035, description: '焼き寿司が名物', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27045874/', official: '' },
    { id: 227, name: '焼肉 たむら', category: 'yakiniku', area: '蒲生四丁目', lat: 34.7015, lng: 135.5485, description: 'たむらけんじの焼肉店', tabelog: 'https://tabelog.com/osaka/A2701/A270305/27015874/', official: 'https://www.yakiniku-tamura.com/' },
    { id: 228, name: '松阪牛焼肉 M', category: 'yakiniku', area: '法善寺', lat: 34.6680, lng: 135.5042, description: 'インバウンドにも人気の松阪牛', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001589/', official: 'https://matsusaka-projects.com/' },
    { id: 229, name: 'かどや', category: 'yakiniku', area: '難波', lat: 34.6640, lng: 135.4985, description: '豚足と焼肉のディープな店', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001598/', official: '' },
    { id: 230, name: 'ニューミュンヘン 本店', category: 'izakaya', area: '東梅田', lat: 34.7005, lng: 135.5015, description: '唐揚げとビールが最高', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27001452/', official: 'https://newmunchen.co.jp/' },
    { id: 231, name: 'ミュンヘン', category: 'izakaya', area: '難波', lat: 34.6645, lng: 135.5025, description: '南の大衆ビアホール', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001589/', official: '' },
    { id: 232, name: '美々卯 本店', category: 'washoku', area: '本町', lat: 34.6855, lng: 135.5005, description: 'うどんすき発祥の店', tabelog: 'https://tabelog.com/osaka/A2701/A270106/27001452/', official: 'https://www.mimiu.co.jp/' },
    { id: 233, name: '吉野寿司', category: 'sushi', area: '本町', lat: 34.6845, lng: 135.5015, description: '大阪寿司（箱寿司）の老舗', tabelog: 'https://tabelog.com/osaka/A2701/A270106/27001589/', official: 'https://www.yoshino-sushi.co.jp/' },
    { id: 234, name: 'たこやき座', category: 'takoyaki', area: '難波', lat: 34.6660, lng: 135.5030, description: '演芸場の近くのたこ焼き', tabelog: '', official: '' },
    { id: 235, name: '会津屋 本店', category: 'takoyaki', area: '玉出', lat: 34.6255, lng: 135.4945, description: 'たこ焼き発祥の店（ソースなし）', tabelog: 'https://tabelog.com/osaka/A2701/A270404/27001598/', official: 'https://www.aiduya.com/' },
    { id: 236, name: 'あっちち本舗', category: 'takoyaki', area: '道頓堀', lat: 34.6688, lng: 135.5038, description: '道頓堀川沿いの行列店', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27045874/', official: 'http://www.acchichi.com/' },
    { id: 237, name: '金龍ラーメン', category: 'ramen', area: '道頓堀', lat: 34.6685, lng: 135.5040, description: '巨大な龍の看板と畳席', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001452/', official: '' },
    { id: 238, name: 'どうとんぼり神座 千日前店', category: 'ramen', area: '千日前', lat: 34.6675, lng: 135.5035, description: '野菜いっぱいスープ', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001589/', official: 'https://kamukura.co.jp/' },
    { id: 239, name: '一蘭 道頓堀店', category: 'ramen', area: '道頓堀', lat: 34.6688, lng: 135.5025, description: '天然とんこつラーメン専門店', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001598/', official: 'https://ichiran.com/' },
    { id: 240, name: '作ノ作', category: 'ramen', area: '千日前', lat: 34.6672, lng: 135.5028, description: '肉バカ盛りラーメン', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001452/', official: '' },
    { id: 241, name: '北極星 堀江店', category: 'western', area: '堀江', lat: 34.6715, lng: 135.4955, description: 'アメリカ村近くの北極星', tabelog: 'https://tabelog.com/osaka/A2701/A270201/27001589/', official: 'https://hokkyokusei.jp/' },
    { id: 242, name: 'とんかつ マンジェ', category: 'washoku', area: '八尾', lat: 34.6325, lng: 135.5915, description: '全国的に有名なとんかつの名店', tabelog: 'https://tabelog.com/osaka/A2707/A270705/27013624/', official: '' }, /* 少し遠いが有名なので追加 */
    { id: 243, name: 'エピキュース', category: 'western', area: '北新地', lat: 34.6975, lng: 135.4975, description: '野菜フレンチの名店', tabelog: 'https://tabelog.com/osaka/A2701/A270101/27001452/', official: '' },
    { id: 244, name: 'カグノミ堂', category: 'sweets', area: '西大橋', lat: 34.6755, lng: 135.4935, description: '一口サイズのケーキ専門店', tabelog: 'https://tabelog.com/osaka/A2701/A270201/27001589/', official: '' },
    { id: 245, name: 'パティスリー アクイーユ', category: 'sweets', area: '北堀江', lat: 34.6745, lng: 135.4945, description: '洗練されたケーキ', tabelog: 'https://tabelog.com/osaka/A2701/A270201/27001598/', official: '' },
    { id: 246, name: '千成屋珈琲', category: 'cafe', area: '新世界', lat: 34.6515, lng: 135.5060, description: 'ミックスジュース発祥の店', tabelog: 'https://tabelog.com/osaka/A2701/A270206/27092147/', official: 'https://sennariya-coffee.jp/' },
    { id: 247, name: 'スマート珈琲店', category: 'cafe', area: '梅田', lat: 34.7025, lng: 135.4985, description: '京都の名店が大阪にも', tabelog: '', official: '' },
    { id: 248, name: 'アラビヤコーヒー', category: 'cafe', area: '難波', lat: 34.6675, lng: 135.5020, description: '創業1951年の老舗喫茶', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001452/', official: 'http://arabiyacoffee.com/' },
    { id: 249, name: '純喫茶 アメリカン', category: 'cafe', area: '難波', lat: 34.6672, lng: 135.5025, description: '豪華な内装の純喫茶', tabelog: 'https://tabelog.com/osaka/A2701/A270202/27001589/', official: 'https://www.jun-kissa-american.com/' },
    { id: 250, name: 'ハードロックカフェ 大阪', category: 'bar', area: '本町', lat: 34.6825, lng: 135.5005, description: '世界的チェーンのロックカフェ', tabelog: 'https://tabelog.com/osaka/A2701/A270106/27001598/', official: 'https://hardrockjapan.com/' }
];
let map;
let markers = [];
let activeFilters = new Set(Object.keys(categories));

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initMap();
    initFilters();
    initSpotsList();
    initLegend();
    initEventListeners();
    renderMarkers();
});

// Initialize Leaflet Map
function initMap() {
    // Center on Osaka
    map = L.map('map', {
        center: [34.6937, 135.5023],
        zoom: 13,
        zoomControl: true
    });

    // Light tile layer - OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(map);
}

// Create Custom Marker Icon
function createMarkerIcon(category) {
    const cat = categories[category];
    return L.divIcon({
        className: 'custom-marker-wrapper',
        html: `<div class="custom-marker" style="background: ${cat.color};">${cat.emoji}</div>`,
        iconSize: [36, 36],
        iconAnchor: [18, 18],
        popupAnchor: [0, -20]
    });
}

// Render Markers
function renderMarkers() {
    // Clear existing markers
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];

    // Filter spots based on active filters
    const filteredSpots = spots.filter(spot => activeFilters.has(spot.category));

    // Add markers
    filteredSpots.forEach(spot => {
        const cat = categories[spot.category];
        const marker = L.marker([spot.lat, spot.lng], {
            icon: createMarkerIcon(spot.category)
        });

        // Build links HTML
        let linksHtml = '<div class="popup-links">';
        if (spot.tabelog) {
            linksHtml += `<a href="${spot.tabelog}" target="_blank" class="popup-link tabelog-link">🍽️ 食べログ</a>`;
        }
        if (spot.official) {
            linksHtml += `<a href="${spot.official}" target="_blank" class="popup-link official-link">🌐 公式サイト</a>`;
        }
        linksHtml += '</div>';

        const popupContent = `
            <div class="popup-content">
                <h3>${cat.emoji} ${spot.name}</h3>
                <span class="category-badge category-${spot.category}">${cat.label}</span>
                <p class="area">📍 ${spot.area}</p>
                <p class="description">${spot.description}</p>
                ${linksHtml}
            </div>
        `;

        marker.bindPopup(popupContent);
        marker.addTo(map);
        markers.push(marker);
    });

    // Update spot count
    document.getElementById('spotCount').textContent = `(${filteredSpots.length})`;
}

// Initialize Filters
function initFilters() {
    const filterGrid = document.getElementById('filterGrid');
    filterGrid.innerHTML = '';

    Object.entries(categories).forEach(([key, cat]) => {
        const count = spots.filter(s => s.category === key).length;
        const filterItem = document.createElement('div');
        filterItem.className = 'filter-item active';
        filterItem.dataset.category = key;
        filterItem.innerHTML = `
            <span class="emoji">${cat.emoji}</span>
            <span class="label">${cat.label}</span>
            <span class="count">${count}</span>
        `;
        filterItem.addEventListener('click', () => toggleFilter(key, filterItem));
        filterGrid.appendChild(filterItem);
    });
}

// Toggle Filter
function toggleFilter(category, element) {
    if (activeFilters.has(category)) {
        activeFilters.delete(category);
        element.classList.remove('active');
    } else {
        activeFilters.add(category);
        element.classList.add('active');
    }
    renderMarkers();
    renderSpotsList();
}

// Initialize Spots List
function initSpotsList() {
    renderSpotsList();
}

// Render Spots List
function renderSpotsList() {
    const spotsList = document.getElementById('spotsList');
    spotsList.innerHTML = '';

    const filteredSpots = spots.filter(spot => activeFilters.has(spot.category));

    // Render each spot
    filteredSpots.forEach(spot => {
        const cat = categories[spot.category];
        const card = document.createElement('div');
        card.className = 'spot-card';
        card.innerHTML = `
            <div class="spot-card-header">
                <span class="emoji">${cat.emoji}</span>
                <span class="name">${spot.name}</span>
                <span class="category category-${spot.category}">${cat.label}</span>
            </div>
            <div class="area">📍 ${spot.area}</div>
        `;
        card.addEventListener('click', () => focusOnSpot(spot));
        spotsList.appendChild(card);
    });
}

// Focus on Spot
function focusOnSpot(spot) {
    map.setView([spot.lat, spot.lng], 16);

    // Find and open the marker popup
    markers.forEach(marker => {
        const markerLatLng = marker.getLatLng();
        if (markerLatLng.lat === spot.lat && markerLatLng.lng === spot.lng) {
            marker.openPopup();
        }
    });
}

// Initialize Legend
function initLegend() {
    const legendItems = document.getElementById('legendItems');
    legendItems.innerHTML = '';

    Object.entries(categories).forEach(([key, cat]) => {
        const item = document.createElement('div');
        item.className = 'legend-item';
        item.innerHTML = `
            <div class="legend-color" style="background: ${cat.color};"></div>
            <span>${cat.emoji} ${cat.label}</span>
        `;
        legendItems.appendChild(item);
    });
}

// Initialize Event Listeners
function initEventListeners() {
    // Toggle Sidebar
    const toggleBtn = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('sidebarOpenBtn');

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.add('collapsed');
        openBtn.style.display = 'flex';
        // Trigger map resize after transition
        setTimeout(() => map.invalidateSize(), 300);
    });

    openBtn.addEventListener('click', () => {
        sidebar.classList.remove('collapsed');
        openBtn.style.display = 'none';
        // Trigger map resize after transition
        setTimeout(() => map.invalidateSize(), 300);
    });

    // Select All Filters
    document.getElementById('selectAll').addEventListener('click', () => {
        activeFilters = new Set(Object.keys(categories));
        document.querySelectorAll('.filter-item').forEach(item => {
            item.classList.add('active');
        });
        renderMarkers();
        renderSpotsList();
    });

    // Deselect All Filters
    document.getElementById('deselectAll').addEventListener('click', () => {
        activeFilters.clear();
        document.querySelectorAll('.filter-item').forEach(item => {
            item.classList.remove('active');
        });
        renderMarkers();
        renderSpotsList();
    });
}
