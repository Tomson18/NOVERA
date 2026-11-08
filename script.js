/* ---------- Novera catalogue (prices in GEL ₾) ----------
   Every category has 4 men's + 4 women's pieces, so the grid fills complete rows
   in the "All", "Women" and "Men" views (4 columns on desktop, 2 on mobile).
   `was` = the previous price (shown crossed out) on items that were already in the shop. */
const C = {
  cream:'#e9e2d8', black:'#3a3631', sage:'#7d8f88', white:'#ffffff', blush:'#e3cfd0',
  tan:'#c2a482', taupe:'#b9a99b', navy:'#2f3a4a', denim:'#5b6a80', ldenim:'#8d99ab',
  stone:'#c3b9a9', charcoal:'#4d4842', brown:'#7a6553', rose:'#b98d8f', grey:'#a9b3bd',
  sand:'#e5d8c7', camel:'#a67c5b', olive:'#6b7058', ink:'#2b2825', slate:'#67717c',
  mdenim:'#3c4757', wdenim:'#7f8fa6', bdenim:'#aeb8c6', oat:'#d6c3b1', ash:'#6f6a63',
  sky:'#9fc3dc', mustard:'#d4a93c', burgundy:'#6e2a35', forest:'#2f4a3a', lilac:'#b9a8d0',
  coral:'#d9775f', rust:'#a5532f', teal:'#2f6f73', silver:'#d3d3d1', red:'#b3342f', cobalt:'#2d5aa8', ecru:'#e8dfcc'
};
const COLOR_NAME = Object.fromEntries(Object.entries(C).map(([k,v]) => [v,k]));
const PRODUCTS = [];
/* row: [id, name, price, was|null, [colours], badge?, typeOverride?] */
function add(cat, aud, type, rows){
  rows.forEach(r => PRODUCTS.push({
    id:r[0], name:r[1], price:r[2], was:r[3] || null, cat:[cat], aud:[aud],
    colors:r[4].map(k => C[k]), badge:r[5] || '', type:r[6] || type
  }));
}

/* ---- T-Shirts ---- */
add('tshirts','men','tee',[
  ['t1','Essential Crew Tee',39,59,['cream','black','sage'],'Best seller'],
  ['t4','Classic Pocket Tee',35,null,['white','navy','stone']],
  ['t5','Heavyweight Box Tee',45,null,['black','cream','olive'],'New'],
  ['t6','Striped Breton Tee',42,null,['white','navy','rose']]
]);
add('tshirts','women','tee',[
  ['t2','Relaxed Fit Tee',42,65,['white','blush','tan']],
  ['t3','Oversized Boxy Tee',49,75,['cream','taupe','black']],
  ['t7','Cropped Baby Tee',32,null,['white','rose','sage'],'New'],
  ['t8','Slim V-Neck Tee',35,null,['black','cream','blush']]
]);

/* ---- Long Sleeves ---- */
add('longsleeves','men','ls',[
  ['l1','Waffle Long-Sleeve Tee',59,89,['sand','ash','black'],'New'],
  ['l3','Heavy Cotton Long-Sleeve',65,99,['stone','charcoal']],
  ['l4','Henley Long-Sleeve',62,null,['cream','olive','navy']],
  ['l5','Pocket Long-Sleeve',55,null,['white','ash','denim']]
]);
add('longsleeves','women','ls',[
  ['l2','Fitted Rib Long-Sleeve',55,85,['white','oat','rose']],
  ['l6','Boat-Neck Long-Sleeve',58,null,['cream','navy','blush']],
  ['l7','Mock-Neck Long-Sleeve',59,null,['black','taupe','sage'],'Best seller'],
  ['l8','Relaxed Slub Long-Sleeve',52,null,['sand','rose','charcoal']]
]);

/* ---- Jeans ---- */
add('jeans','men','jeans',[
  ['j1','Straight-Leg Jeans',99,149,['denim','mdenim','ldenim'],'Best seller'],
  ['j3','Slim Tapered Jeans',95,139,['mdenim','navy']],
  ['j4','Relaxed Carpenter Jeans',109,null,['wdenim','ink','tan'],'New'],
  ['j5','Black Slim Jeans',92,null,['ink','charcoal']]
]);
add('jeans','women','jeans',[
  ['j2','High-Rise Wide Jeans',105,159,['wdenim','mdenim','bdenim']],
  ['j6','Mom Fit Jeans',99,null,['ldenim','denim','white']],
  ['j7','Straight Crop Jeans',95,null,['bdenim','mdenim','black']],
  ['j8','Barrel-Leg Jeans',109,null,['denim','ink','cream'],'New']
]);

/* ---- Shorts ---- */
add('shorts','men','shorts',[
  ['s1','Cotton Chino Shorts',49,79,['tan','ash','black']],
  ['s3','Sweat Shorts',45,69,['grey','black','charcoal']],
  ['s4','Denim Shorts',55,null,['wdenim','mdenim','white'],'','dshorts'],
  ['s5','Cargo Shorts',59,null,['olive','stone','black'],'New']
]);
add('shorts','women','shorts',[
  ['s2','Linen Wide Shorts',55,89,['cream','taupe','brown']],
  ['s6','Tailored Bermuda Shorts',59,null,['sand','navy','sage']],
  ['s7','Ribbed Biker Shorts',35,null,['black','rose','cream'],'','boxer'],
  ['s8','Denim Cut-Off Shorts',52,null,['bdenim','white','ldenim'],'Best seller','dshorts']
]);

/* ---- Shoes ---- */
add('shoes','men','sneaker',[
  ['sh1','Leather Sneakers',159,249,['white','black','tan'],'New'],
  ['sh3','Suede Chelsea Boots',229,349,['brown','black'],'', 'boot'],
  ['sh5','Retro Runner Sneakers',139,null,['grey','cream','navy']],
  ['sh6','Canvas Low-Top Sneakers',89,null,['white','black','olive'],'Best seller']
]);
add('shoes','women','sneaker',[
  ['sh2','Canvas Platform Sneakers',145,219,['white','blush','taupe']],
  ['sh4','Slide Sandals',55,89,['black','stone','rose'],'','sandal'],
  ['sh7','Leather Ankle Boots',199,null,['black','brown','taupe'],'', 'boot'],
  ['sh8','Minimal Court Sneakers',129,null,['white','cream','sage'],'New']
]);

/* ---- Underwear ---- */
add('underwear','men','boxer',[
  ['u2','Classic Boxer Briefs',25,39,['black','ash','navy']],
  ['u4','Cotton Trunks',22,null,['navy','charcoal','sage']],
  ['u5','Boxer Brief 3-Pack',59,null,['black','ash','navy'],'Best value','pack'],
  ['u6','Seamless Briefs',24,null,['cream','black','grey'],'New','briefs']
]);
add('underwear','women','briefs',[
  ['u1','Everyday Cotton Briefs',22,35,['cream','black','rose']],
  ['u3','Soft Cotton 3-Pack',59,89,['cream','black','sage'],'Best value','pack'],
  ['u7','High-Rise Briefs',24,null,['blush','black','cream']],
  ['u8','Seamless Bikini',20,null,['rose','cream','charcoal'],'New']
]);

/* ---- Sweaters ---- */
add('sweaters','men','sweater',[
  ['sw1','Merino Crew Sweater',119,179,['oat','camel','charcoal'],'Best seller'],
  ['sw4','Lambswool V-Neck',109,null,['navy','olive','stone'],'','cardigan'],
  ['sw5','Half-Zip Knit',125,null,['ash','cream','black']],
  ['sw6','Ribbed Roll-Neck',105,null,['brown','black','oat'],'New']
]);
add('sweaters','women','sweater',[
  ['sw2','Cashmere-Blend Sweater',135,199,['cream','rose','sage']],
  ['sw3','Chunky Cable Knit',125,189,['taupe','brown','black'],'New'],
  ['sw7','Mohair-Blend Crew',115,null,['blush','stone','navy']],
  ['sw8','Cropped Knit Sweater',99,null,['white','sage','camel']]
]);

/* ---- Outerwear ---- */
add('outerwear','men','jacket',[
  ['p2','Wool Overcoat',229,349,['charcoal','ink'],'','coat'],
  ['p7','Utility Jacket',179,269,['grey','slate','olive']],
  ['o3','Bomber Jacket',159,null,['ink','olive','navy'],'New'],
  ['o4','Quilted Liner Jacket',149,null,['sand','charcoal','sage']]
]);
add('outerwear','women','jacket',[
  ['p1','Linen Overshirt',95,139,['sand','tan','ash']],
  ['o5','Belted Trench Coat',189,null,['tan','black','cream'],'Best seller','coat'],
  ['o6','Short Puffer Jacket',169,null,['cream','black','rose']],
  ['o7','Tailored Wool Blazer',149,null,['charcoal','taupe','navy'],'New']
]);

/* ---- Knitwear ---- */
add('knitwear','men','hoodie',[
  ['p12','Heavyweight Hoodie',99,149,['ash','black','oat'],'Best seller'],
  ['k2','Zip-Up Hoodie',95,null,['grey','charcoal','navy'],'','hoodie'],
  ['k3','Knit Cardigan',105,null,['olive','brown','cream'],'','cardigan'],
  ['k4','Crew Sweatshirt',79,null,['stone','black','sage'],'New','sweater']
]);
add('knitwear','women','cardigan',[
  ['p6','Chunky Cardigan',135,199,['taupe','brown']],
  ['k5','Oversized Hoodie',95,null,['cream','blush','charcoal'],'','hoodie'],
  ['k6','Ribbed Knit Cardigan',99,null,['rose','cream','sage']],
  ['k7','Cropped Sweatshirt',75,null,['white','taupe','black'],'New','sweater']
]);

let io; /* declared early: renderProducts() calls observeReveal() on first load */

/* ---------- Extra colours: every product gets up to 6 colourways ---------- */
const POOLS = {
  tshirts:['white','black','cream','navy','sage','rose','olive','mustard','sky','burgundy','silver','coral','lilac'],
  longsleeves:['white','black','cream','navy','sage','rose','olive','mustard','sky','burgundy','silver','coral','lilac'],
  jeans:['denim','mdenim','ldenim','wdenim','bdenim','ink','ecru','white','tan','olive','burgundy'],
  shorts:['tan','olive','navy','black','stone','sky','mustard','white','sage','rust','cobalt'],
  shoes:['white','black','tan','navy','silver','olive','brown','cream','burgundy','sand','red'],
  underwear:['black','white','navy','silver','cream','rose','sage','burgundy','sky','charcoal','teal'],
  sweaters:['cream','camel','charcoal','navy','olive','burgundy','rust','forest','sky','silver','rose','lilac'],
  knitwear:['cream','camel','charcoal','navy','olive','burgundy','rust','forest','sky','silver','rose','lilac'],
  outerwear:['black','navy','olive','tan','charcoal','camel','cream','forest','burgundy','silver','rust']
};
PRODUCTS.forEach((p,i) => {
  const pool = POOLS[p.cat[0]].map(k => C[k]).filter(h => !p.colors.includes(h));
  for(let n = 0; p.colors.length < 6 && n < pool.length; n++){
    p.colors.push(pool[(i*2 + n) % pool.length]);
    pool.splice((i*2 + n) % pool.length, 1); n--;
  }
});

const money = n => '\u20BE' + n.toLocaleString('en-US');

/* ---------- Realistic garment renderer (inline SVG: shading, fabric texture, seams, stitching) ---------- */
const hexRGB = h => { const n = parseInt(h.slice(1),16); return [n>>16,(n>>8)&255,n&255]; };
const mixTo = (h,t,to) => '#' + hexRGB(h).map(v => Math.round(v+(to-v)*t).toString(16).padStart(2,'0')).join('');
const dk = (h,t) => mixTo(h,t,0), lt = (h,t) => mixTo(h,t,255);
const lum = h => { const [r,g,b] = hexRGB(h); return (0.299*r+0.587*g+0.114*b)/255; };
const stitchOf = c => lum(c) < 0.45 ? 'rgba(255,255,255,.4)' : 'rgba(30,22,15,.34)';
const st = (d,col) => `<path d="${d}" fill="none" stroke="${col}" stroke-width="1.3" stroke-dasharray="4 3" stroke-linecap="round"/>`;
const fold = (d,o=1) => (o*=.6) ? (
  `<path d="${d}" fill="none" stroke="#000" stroke-opacity="${.04*o}" stroke-width="18" stroke-linecap="round"/>` +
  `<path d="${d}" fill="none" stroke="#000" stroke-opacity="${.05*o}" stroke-width="9" stroke-linecap="round"/>` +
  `<path d="${d}" fill="none" stroke="#000" stroke-opacity="${.10*o}" stroke-width="2.4" stroke-linecap="round"/>` +
  `<path d="${d}" fill="none" stroke="#fff" stroke-opacity="${.20*o}" stroke-width="2" stroke-linecap="round" transform="translate(3 2)"/>`) : '';

const LENS = 'M95 70 Q150 58 205 70 Q150 108 95 70Z';
const LS_BODY = 'M95 70 L58 90 L30 298 L66 306 L86 168 L86 330 Q150 345 214 330 L214 168 L234 306 L270 298 L242 90 L205 70 Q150 108 95 70Z';
const SL_L = 'M95 70 L58 90 L30 298 L66 306 L86 168 Q90 110 95 76Z';
const SL_R = 'M205 70 L242 90 L270 298 L234 306 L214 168 Q210 110 205 76Z';
const JEANS_BODY = 'M92 46 H208 L218 110 L228 346 H158 L150 162 L142 346 H72 L82 110Z';
const SHORTS_BODY = 'M88 98 H212 L228 262 H158 L150 180 L142 262 H72Z';
const BOXER_BODY = 'M70 110 H230 L236 252 Q236 274 208 274 H166 L150 198 L134 274 H92 Q64 274 64 252Z';
const BRIEFS_BODY = 'M62 136 H238 L234 200 Q214 214 200 244 Q186 282 150 284 Q114 282 100 244 Q86 214 66 200Z';
const SNEAKER_U = 'M40 128 L35 82 Q34 60 54 58 Q74 58 90 74 L112 60 Q118 54 128 60 L176 96 Q214 104 246 110 Q276 118 276 130Z';
const BOOT_U = 'M90 56 H190 L192 190 Q196 214 236 222 Q274 232 276 264 V292 H64 V276 Q64 258 78 238 L88 190Z';

const SHAPES = {
  tee:[ 'M95 70 L60 92 L28 150 L64 172 L85 148 L85 330 Q150 345 215 330 L215 148 L236 172 L272 150 L240 92 L205 70 Q150 108 95 70Z', LENS ],
  ls:[ LS_BODY, LENS ],
  sweater:[ LS_BODY, LENS ],
  cardigan:[ 'M95 70 L58 90 L30 298 L66 306 L86 168 L86 330 Q150 345 214 330 L214 168 L234 306 L270 298 L242 90 L205 70 L150 138Z', 'M95 70 Q150 50 205 70 L150 138Z' ],
  hoodie:[ 'M104 80 L58 94 L30 296 L66 304 L86 170 L86 336 Q150 350 214 336 L214 170 L234 304 L270 296 L242 94 L196 80 Q150 104 104 80Z', 'M98 86 Q90 12 150 8 Q210 12 202 86 Q150 116 98 86Z' ],
  jacket:[ 'M104 66 L58 88 L30 296 L66 304 L88 170 L88 336 H212 L212 170 L234 304 L270 296 L242 88 L196 66 Q150 96 104 66Z', 'M104 62 L128 108 L150 92 L172 108 L196 62 Q150 92 104 62Z' ],
  coat:[ 'M100 58 L58 80 L34 300 L72 306 L88 170 L88 372 H212 L212 170 L228 306 L266 300 L242 80 L200 58 L150 124Z', 'M100 58 Q150 34 200 58 L150 124Z' ],
  jeans:[ JEANS_BODY ],
  shorts:[ SHORTS_BODY ],
  boxer:[ BOXER_BODY ],
  briefs:[ BRIEFS_BODY ],
  sneakerU:[ SNEAKER_U ],
  bootU:[ BOOT_U ]
};

function installDefs(){
  if(document.getElementById('garmentDefs')) return;
  const clips = Object.entries(SHAPES).map(([k,ps]) => `<clipPath id="cp-${k}">${ps.map(d=>`<path d="${d}"/>`).join('')}</clipPath>`).join('');
  document.body.insertAdjacentHTML('afterbegin', `<svg id="garmentDefs" width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
  <linearGradient id="gSide" gradientUnits="userSpaceOnUse" x1="28" y1="0" x2="272" y2="0">
    <stop offset="0" stop-color="#000" stop-opacity=".20"/><stop offset=".2" stop-color="#000" stop-opacity=".02"/>
    <stop offset=".5" stop-color="#fff" stop-opacity=".07"/><stop offset=".8" stop-color="#000" stop-opacity=".03"/><stop offset="1" stop-color="#000" stop-opacity=".22"/></linearGradient>
  <linearGradient id="gLight" gradientUnits="userSpaceOnUse" x1="70" y1="40" x2="230" y2="360">
    <stop offset="0" stop-color="#fff" stop-opacity=".30"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".18"/></linearGradient>
  <linearGradient id="gShoe" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".34"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".26"/></linearGradient>
  <radialGradient id="rFade"><stop offset="0" stop-color="#fff" stop-opacity=".20"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
  <pattern id="pJersey" width="3" height="4" patternUnits="userSpaceOnUse"><path d="M0 0 L1.5 4 L3 0" fill="none" stroke="#000" stroke-opacity=".08" stroke-width=".7"/></pattern>
  <pattern id="pKnit" width="6" height="8" patternUnits="userSpaceOnUse"><path d="M1.5 0V8" stroke="#000" stroke-opacity=".13" stroke-width="1.7"/><path d="M4.5 0V8" stroke="#fff" stroke-opacity=".13" stroke-width="1.7"/></pattern>
  <pattern id="pRib" width="4" height="6" patternUnits="userSpaceOnUse"><path d="M1 0V6" stroke="#000" stroke-opacity=".22" stroke-width="1.6"/><path d="M3 0V6" stroke="#fff" stroke-opacity=".16" stroke-width="1.2"/></pattern>
  <pattern id="pDenim" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(58)"><path d="M0 1.5H3" stroke="#000" stroke-opacity=".15" stroke-width="1"/><path d="M0 0H3" stroke="#fff" stroke-opacity=".10" stroke-width=".8"/></pattern>
  <pattern id="pTwill" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 1.5H3" stroke="#000" stroke-opacity=".08" stroke-width="1"/></pattern>
  <pattern id="pFleece" width="4" height="4" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".6" fill="#000" fill-opacity=".09"/><circle cx="3" cy="3" r=".6" fill="#fff" fill-opacity=".12"/></pattern>
  <pattern id="pWool" width="4" height="4" patternUnits="userSpaceOnUse"><path d="M0 0L4 4M4 0L0 4" stroke="#000" stroke-opacity=".08" stroke-width=".7"/></pattern>
  <pattern id="pSuede" width="5" height="5" patternUnits="userSpaceOnUse"><circle cx="1" cy="1.5" r=".7" fill="#000" fill-opacity=".12"/><circle cx="3.6" cy="3.8" r=".7" fill="#fff" fill-opacity=".14"/></pattern>
  <filter id="dshadow" x="-25%" y="-15%" width="150%" height="145%"><feDropShadow dx="0" dy="10" stdDeviation="7" flood-color="#2a1f14" flood-opacity=".32"/></filter>
  <filter id="blur6" x="-20%" y="-100%" width="140%" height="300%"><feGaussianBlur stdDeviation="5"/></filter>
  ${clips}</defs></svg>`);
}
installDefs();

function layer(type,c,tex,extras){
  const ps = SHAPES[type];
  return `<g filter="url(#dshadow)">${ps.map(d=>`<path d="${d}" fill="${c}"/>`).join('')}</g>` +
    `<g clip-path="url(#cp-${type})"><rect width="300" height="400" fill="url(#${tex})"/>${extras}` +
    `<rect width="300" height="400" fill="url(#gSide)"/><rect width="300" height="400" fill="url(#gLight)"/></g>` +
    ps.map(d=>`<path d="${d}" fill="none" stroke="rgba(20,17,15,.42)" stroke-width="1.6" stroke-linejoin="round"/>`).join('');
}
const tag = `<rect x="139" y="57" width="22" height="9" rx="1" fill="#f3f0ea" fill-opacity=".93"/><text x="150" y="63.8" font-size="5.4" text-anchor="middle" fill="#6b655d" font-family="Inter,Arial,sans-serif" letter-spacing=".8">NOVERA</text>`;
const sleeves = `<path d="${SL_L}" fill="#000" fill-opacity=".07"/><path d="${SL_R}" fill="#000" fill-opacity=".07"/>`;
const ribBand = (d,c) => `<path d="${d}" fill="${dk(c,.07)}"/><path d="${d}" fill="url(#pRib)"/>`;
const btn = (x,y,col,r=4.6) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${col}" stroke="rgba(0,0,0,.4)" stroke-width="1"/><circle cx="${x-1}" cy="${y-1}" r="${r*.35}" fill="#fff" fill-opacity=".35"/><circle cx="${x}" cy="${y}" r="${r*.55}" fill="none" stroke="rgba(0,0,0,.25)" stroke-width=".8"/>`;

const R = {
  tee: cols => { const c=cols[0], s=stitchOf(c);
    return layer('tee',c,'pJersey', sleeves +
      `<path d="${LENS}" fill="#000" fill-opacity=".26"/>${tag}` +
      `<path d="M95 70 Q150 108 205 70" fill="none" stroke="${dk(c,.15)}" stroke-width="10"/><path d="M95 70 Q150 108 205 70" fill="none" stroke="url(#pRib)" stroke-width="10"/>` +
      st('M99 78 Q150 114 201 78',s) + st('M88 150 Q91 112 97 80',s) + st('M212 150 Q209 112 203 80',s) +
      st('M88 321 Q150 335 212 321',s) + st('M36 148 L70 167',s) + st('M264 148 L230 167',s) +
      fold('M96 215 Q132 238 120 292') + fold('M206 186 Q180 232 198 280',.8) + fold('M62 122 Q56 138 50 150',.7) + fold('M238 122 Q244 138 250 150',.7)); },
  ls: cols => { const c=cols[0], s=stitchOf(c);
    return layer('ls',c,'pJersey', sleeves +
      `<path d="${LENS}" fill="#000" fill-opacity=".26"/>${tag}` +
      `<path d="M95 70 Q150 108 205 70" fill="none" stroke="${dk(c,.15)}" stroke-width="10"/><path d="M95 70 Q150 108 205 70" fill="none" stroke="url(#pRib)" stroke-width="10"/>` +
      st('M99 78 Q150 114 201 78',s) + st('M88 168 Q90 120 97 80',s) + st('M212 168 Q210 120 203 80',s) +
      st('M86 320 Q150 334 214 320',s) + st('M34 284 L68 292',s) + st('M266 284 L232 292',s) +
      fold('M60 130 Q52 200 46 266') + fold('M240 130 Q248 200 254 266') + fold('M100 220 Q134 244 122 296') + fold('M206 200 Q182 240 198 288',.8)); },
  sweater: cols => { const c=cols[0], s=stitchOf(c);
    return layer('sweater',c,'pKnit', sleeves + `<path d="${LENS}" fill="#000" fill-opacity=".38"/>` +
      `<path d="M100 66 Q150 106 200 66" fill="none" stroke="${dk(c,.12)}" stroke-width="13"/><path d="M100 66 Q150 106 200 66" fill="none" stroke="url(#pRib)" stroke-width="13"/>` +
      ribBand('M86 311 Q150 326 214 311 L214 332 Q150 348 86 332Z',c) +
      ribBand('M33 278 L69 286 L66 307 L30 299Z',c) + ribBand('M267 278 L231 286 L234 307 L270 299Z',c) +
      fold('M60 130 Q52 200 46 262') + fold('M240 130 Q248 200 254 262') + fold('M102 200 Q130 240 118 296',.9) + fold('M204 190 Q184 236 196 290',.8)); },
  cardigan: cols => { const c=cols[0];
    return layer('cardigan',c,'pKnit', sleeves + `<path d="M95 70 Q150 50 205 70 L150 138Z" fill="#000" fill-opacity=".4"/>` +
      `<path d="M95 70 L150 138 L205 70" fill="none" stroke="${dk(c,.12)}" stroke-width="11" stroke-linejoin="round"/><path d="M95 70 L150 138 L205 70" fill="none" stroke="url(#pRib)" stroke-width="11" stroke-linejoin="round"/>` +
      ribBand('M142 138 H158 V338 H142Z',c) + ribBand('M86 311 Q150 326 214 311 L214 332 Q150 348 86 332Z',c) +
      ribBand('M33 278 L69 286 L66 307 L30 299Z',c) + ribBand('M267 278 L231 286 L234 307 L270 299Z',c) +
      [168,208,248,288].map(y=>btn(150,y,cols[1]||dk(c,.45))).join('') +
      fold('M60 130 Q52 200 46 262') + fold('M240 130 Q248 200 254 262') + fold('M104 200 Q128 244 116 300',.9)); },
  hoodie: cols => { const c=cols[0], s=stitchOf(c);
    return layer('hoodie',c,'pFleece', sleeves +
      `<path d="M114 82 Q110 34 150 30 Q190 34 186 82 Q150 102 114 82Z" fill="${dk(c,.55)}"/>` +
      `<path d="M98 86 Q90 12 150 8 Q210 12 202 86 Q150 116 98 86Z" fill="none" stroke="${dk(c,.22)}" stroke-width="3"/>` +
      `<path d="M114 82 Q110 34 150 30 Q190 34 186 82 Q150 102 114 82Z" fill="none" stroke="${dk(c,.3)}" stroke-width="2.5"/>` +
      ribBand('M86 322 Q150 336 214 322 L214 338 Q150 352 86 338Z',c) +
      ribBand('M33 278 L69 286 L66 305 L30 297Z',c) + ribBand('M267 278 L231 286 L234 305 L270 297Z',c) +
      `<path d="M96 244 Q150 258 204 244 L214 314 Q150 326 86 314Z" fill="${dk(c,.05)}"/>` + st('M98 248 Q150 262 202 248',s) + st('M92 310 Q150 322 208 310',s) +
      `<path d="M136 100 V160" stroke="${lt(c,.55)}" stroke-width="3.2" stroke-linecap="round"/><path d="M164 100 V150" stroke="${lt(c,.55)}" stroke-width="3.2" stroke-linecap="round"/><circle cx="136" cy="162" r="3" fill="${dk(c,.5)}"/><circle cx="164" cy="152" r="3" fill="${dk(c,.5)}"/>` +
      fold('M60 130 Q52 200 46 262') + fold('M240 130 Q248 200 254 262') + fold('M100 190 Q130 232 112 244',.8)); },
  jacket: cols => { const c=cols[0], s=stitchOf(c);
    return layer('jacket',c,'pTwill', `<path d="M104 66 L58 88 L30 296 L66 304 L88 170 Q94 110 104 66Z" fill="#000" fill-opacity=".07"/><path d="M196 66 L242 88 L270 296 L234 304 L212 170 Q206 110 196 66Z" fill="#000" fill-opacity=".07"/>` +
      `<path d="M104 62 L128 108 L150 92 L172 108 L196 62 Q150 92 104 62Z" fill="${dk(c,.1)}"/>` +
      `<path d="M104 66 Q150 96 196 66" fill="none" stroke="rgba(0,0,0,.35)" stroke-width="1.5"/>` +
      ribBand('M88 322 H212 V338 H88Z',c) + ribBand('M33 280 L69 288 L66 306 L30 298Z',c) + ribBand('M267 280 L231 288 L234 306 L270 298Z',c) +
      `<path d="M150 92 V338" stroke="#cfc8bb" stroke-width="4" stroke-dasharray="1.6 1.6"/><path d="M150 92 V338" stroke="rgba(0,0,0,.35)" stroke-width="1"/><rect x="146" y="96" width="8" height="14" rx="2" fill="#bdb6a8" stroke="rgba(0,0,0,.4)"/>` +
      `<rect x="98" y="188" width="42" height="34" rx="2" fill="${dk(c,.08)}"/><rect x="98" y="188" width="42" height="12" fill="${dk(c,.16)}"/>` + st('M100 204 H138',s) + btn(119,198,dk(c,.5),2.8) +
      `<rect x="160" y="188" width="42" height="34" rx="2" fill="${dk(c,.08)}"/><rect x="160" y="188" width="42" height="12" fill="${dk(c,.16)}"/>` + st('M162 204 H200',s) + btn(181,198,dk(c,.5),2.8) +
      st('M90 160 Q88 240 90 320',s) + st('M210 160 Q212 240 210 320',s) +
      fold('M60 130 Q52 200 46 262') + fold('M240 130 Q248 200 254 262') + fold('M104 240 Q126 280 112 314',.8)); },
  coat: cols => { const c=cols[0], s=stitchOf(c);
    return layer('coat',c,'pWool', `<path d="M100 58 Q150 34 200 58 L150 124Z" fill="#000" fill-opacity=".4"/>` +
      `<path d="M100 58 L58 80 L34 300 L72 306 L88 170 Q90 100 100 58Z" fill="#000" fill-opacity=".07"/><path d="M200 58 L242 80 L266 300 L228 306 L212 170 Q210 100 200 58Z" fill="#000" fill-opacity=".07"/>` +
      `<path d="M100 58 L150 128 L132 190 L88 112Z" fill="${lt(c,.07)}" stroke="rgba(0,0,0,.4)" stroke-width="1.4" stroke-linejoin="round"/>` +
      `<path d="M200 58 L150 128 L168 190 L212 112Z" fill="${lt(c,.07)}" stroke="rgba(0,0,0,.4)" stroke-width="1.4" stroke-linejoin="round"/>` +
      st('M104 66 L148 128 L134 182',s) + st('M196 66 L152 128 L166 182',s) +
      `<path d="M150 128 L132 190 L150 212 L168 190Z" fill="${dk(c,.06)}"/><path d="M150 128 V372" stroke="rgba(0,0,0,.25)" stroke-width="1.3"/>` +
      btn(150,214,dk(c,.5),5.6) + btn(150,270,dk(c,.5),5.6) +
      `<rect x="100" y="262" width="36" height="9" fill="${dk(c,.2)}"/><rect x="164" y="262" width="36" height="9" fill="${dk(c,.2)}"/>` +
      st('M88 366 H212',s) + fold('M100 230 Q118 300 106 360') + fold('M200 220 Q186 300 196 356',.8) + fold('M58 120 Q50 200 44 270') + fold('M242 120 Q250 200 256 270')); },
  jeans: (cols,denim=true) => { const c=cols[0], o='#d9a24e';
    return layer('jeans',c,denim?'pDenim':'pTwill',
      `<path d="M92 46 H208 L209 72 H91Z" fill="${dk(c,.1)}"/>` +
      [100,126,168,192].map(x=>`<rect x="${x}" y="44" width="8" height="26" rx="1" fill="${dk(c,.16)}" stroke="rgba(0,0,0,.2)"/>`).join('') +
      `<ellipse cx="114" cy="140" rx="32" ry="46" fill="url(#rFade)"/><ellipse cx="186" cy="140" rx="32" ry="46" fill="url(#rFade)"/>` +
      `<ellipse cx="104" cy="254" rx="26" ry="34" fill="url(#rFade)"/><ellipse cx="196" cy="254" rx="26" ry="34" fill="url(#rFade)"/>` +
      st('M150 74 V150 Q150 168 136 162',o) + st('M94 78 Q98 120 130 126 Q142 100 134 76',o) + st('M206 78 Q202 120 170 126 Q158 100 166 76',o) +
      st('M92 72 H208',o) + st('M74 334 H141',o) + st('M159 334 H226',o) + st('M85 118 L76 330',o) + st('M215 118 L224 330',o) +
      `<circle cx="150" cy="60" r="5.2" fill="#c9a46a" stroke="#7d5f2e" stroke-width="1"/><circle cx="149" cy="59" r="1.8" fill="#fff" fill-opacity=".5"/>` +
      `<circle cx="94" cy="80" r="2" fill="#c9a46a"/><circle cx="206" cy="80" r="2" fill="#c9a46a"/><circle cx="132" cy="78" r="2" fill="#c9a46a"/><circle cx="168" cy="78" r="2" fill="#c9a46a"/>` +
      fold('M112 184 Q108 262 104 330',.8) + fold('M188 184 Q192 262 196 330',.8) + fold('M120 210 Q150 190 176 214',.5)); },
  shorts: (cols,denim=false) => { const c=cols[0], s=denim?'#d9a24e':stitchOf(c);
    return layer('shorts',c,denim?'pDenim':'pTwill',
      `<path d="M88 98 H212 L213 122 H87Z" fill="${dk(c,.1)}"/>` +
      [98,124,170,196].map(x=>`<rect x="${x}" y="96" width="8" height="24" rx="1" fill="${dk(c,.16)}" stroke="rgba(0,0,0,.2)"/>`).join('') +
      `<path d="M72 246 H142 L143 262 H72Z" fill="${dk(c,.08)}"/><path d="M158 246 H228 L229 262 H158Z" fill="${dk(c,.08)}"/>` +
      st('M150 124 V176 Q150 190 138 184',s) + st('M90 128 Q108 166 134 146',s) + st('M210 128 Q192 166 166 146',s) + st('M72 246 H142',s) + st('M158 246 H228',s) +
      `<circle cx="150" cy="110" r="5" fill="#c9a46a" stroke="#7d5f2e"/><circle cx="149" cy="109" r="1.7" fill="#fff" fill-opacity=".5"/>` +
      fold('M112 150 Q108 210 104 244',.8) + fold('M188 150 Q192 210 196 244',.8)); },
  boxer: cols => { const c=cols[0], band=lum(c)<.4?lt(c,.28):dk(c,.25), s=stitchOf(c);
    return layer('boxer',c,'pJersey',
      `<path d="M70 110 H230 L231 140 H69Z" fill="${band}"/><path d="M70 110 H230 L231 140 H69Z" fill="url(#pRib)" opacity=".7"/>` +
      `<text x="150" y="129" font-size="9" text-anchor="middle" fill="${lum(band)<.5?'rgba(255,255,255,.8)':'rgba(30,22,15,.7)'}" font-family="Inter,Arial,sans-serif" font-weight="600" letter-spacing="2.4">NOVERA</text>` +
      st('M150 142 V196 Q150 210 138 204',s) + st('M94 262 H134',s) + st('M166 262 H206',s) + st('M70 150 Q66 210 66 250',s) + st('M230 150 Q234 210 234 250',s) +
      fold('M90 160 Q110 210 100 256',.8) + fold('M208 160 Q196 214 204 254',.8)); },
  briefs: cols => { const c=cols[0], band=lum(c)<.4?lt(c,.28):dk(c,.25), s=stitchOf(c);
    return layer('briefs',c,'pJersey',
      `<path d="M62 136 H238 L236 162 H64Z" fill="${band}"/><path d="M62 136 H238 L236 162 H64Z" fill="url(#pRib)" opacity=".7"/>` +
      `<text x="150" y="154" font-size="9" text-anchor="middle" fill="${lum(band)<.5?'rgba(255,255,255,.8)':'rgba(30,22,15,.7)'}" font-family="Inter,Arial,sans-serif" font-weight="600" letter-spacing="2.4">NOVERA</text>` +
      st('M70 196 Q94 210 106 244',s) + st('M230 196 Q206 210 194 244',s) + st('M150 166 V282',s) + fold('M96 176 Q112 220 124 262',.8) + fold('M204 176 Q188 220 176 262',.8)); },
  sneaker: cols => { const c=cols[0], acc = lum(c)>.7 ? dk(c,.06) : (lum(c)<.3 ? lt(c,.22) : dk(c,.28)), lace=cols[2]&&lum(cols[2])>.6?cols[2]:'#f7f4ee', s=stitchOf(c);
    const laces = [0,1,2,3,4].map(i=>{ const x=116+i*13.5, y=70+i*6.4;
      return `<path d="M${x-8} ${y+6} L${x+8} ${y-4}" stroke="rgba(0,0,0,.35)" stroke-width="4.6" stroke-linecap="round"/><path d="M${x-8} ${y+6} L${x+8} ${y-4}" stroke="${lace}" stroke-width="3.2" stroke-linecap="round"/><circle cx="${x-8}" cy="${y+6}" r="1.8" fill="#2b2825"/><circle cx="${x+8}" cy="${y-4}" r="1.8" fill="#2b2825"/>`; }).join('');
    return `<g transform="translate(-5 128)"><ellipse cx="156" cy="158" rx="122" ry="9" fill="#2a1f14" opacity=".30" filter="url(#blur6)"/>` +
      `<g filter="url(#dshadow)"><path d="${SNEAKER_U}" fill="${c}"/><path d="M34 126 H280 Q284 150 262 153 H52 Q34 152 34 138Z" fill="#f4f0e8"/></g>` +
      `<path d="M36 144 H280 Q278 153 262 153 H52 Q38 153 36 144Z" fill="#cfc6b6"/>` +
      `<path d="M34 126 H280 Q284 150 262 153 H52 Q34 152 34 138Z" fill="url(#gShoe)"/>` + st('M44 134 H272','rgba(0,0,0,.2)') +
      `<g clip-path="url(#cp-sneakerU)">` +
        `<path d="M40 128 L35 82 Q34 60 54 58 Q70 58 82 70 Q78 100 86 128Z" fill="${acc}"/>` +
        `<path d="M212 100 Q276 112 276 130 H224 Q230 114 212 100Z" fill="${acc}"/>` +
        `<path d="M52 58 Q72 56 92 74 Q76 68 56 70Z" fill="#26211d" opacity=".6"/>` +
        `<path d="M100 66 Q104 46 124 54 L134 76 L108 80Z" fill="${lt(c,.1)}" stroke="rgba(0,0,0,.3)"/>` +
        `<path d="M96 114 L120 92 L126 114 L150 90" fill="none" stroke="${lum(c)>.6?dk(c,.5):'#f4f0e8'}" stroke-width="3.6" stroke-linejoin="round" stroke-linecap="round"/>` +
        st('M40 120 L36 86',s) + st('M84 124 Q80 100 82 72',s) + st('M216 102 Q258 114 270 128',s) +
        `<rect width="300" height="200" fill="url(#gShoe)"/>` +
        `<ellipse cx="236" cy="108" rx="26" ry="9" fill="#fff" opacity=".18"/>` +
      `</g>` + laces +
      `<path d="${SNEAKER_U}" fill="none" stroke="rgba(20,17,15,.45)" stroke-width="1.5" stroke-linejoin="round"/>` +
      `<path d="M34 126 H280 Q284 150 262 153 H52 Q34 152 34 138Z" fill="none" stroke="rgba(20,17,15,.4)" stroke-width="1.5"/></g>`; },
  boot: cols => { const c=cols[0], s=stitchOf(c);
    return `<g transform="translate(15 54) scale(.8)"><ellipse cx="170" cy="334" rx="124" ry="9" fill="#2a1f14" opacity=".30" filter="url(#blur6)"/>` +
      `<g filter="url(#dshadow)"><path d="${BOOT_U}" fill="${c}"/><path d="M60 290 H280 V306 Q280 316 268 316 H72 Q60 316 60 306Z" fill="#1f1b18"/><path d="M60 304 H128 V332 H66 Q60 332 60 324Z" fill="#2b2623"/></g>` +
      `<g clip-path="url(#cp-bootU)"><rect width="300" height="400" fill="url(#pSuede)"/>` +
        `<path d="M89 148 Q140 172 191 150 L192 196 Q140 220 88 196Z" fill="${dk(c,.5)}"/><path d="M89 148 Q140 172 191 150 L192 196 Q140 220 88 196Z" fill="url(#pRib)"/>` +
        `<path d="M124 60 V40 H152 V60Z" fill="${dk(c,.18)}"/>` +
        st('M92 100 V146',s) + st('M92 202 L78 240',s) + st('M208 226 Q236 238 240 264',s) + st('M66 280 H274','rgba(255,255,255,.25)') +
        `<rect width="300" height="400" fill="url(#gSide)"/><rect width="300" height="400" fill="url(#gShoe)"/>` +
      `</g><path d="M124 62 V40 Q124 34 130 34 H146 Q152 34 152 40 V62" fill="${dk(c,.2)}" stroke="rgba(20,17,15,.45)" stroke-width="1.5"/>` +
      `<path d="${BOOT_U}" fill="none" stroke="rgba(20,17,15,.45)" stroke-width="1.5" stroke-linejoin="round"/>` +
      `<path d="M60 290 H280" stroke="rgba(255,255,255,.2)" stroke-width="1.4"/></g>`; },
  sandal: cols => { const c=cols[0], fb = lum(c)>.6 ? '#bfb4a2' : '#e9e1d3';
    const FB='M40 200 Q8 200 8 160 Q8 110 22 72 Q30 40 44 40 Q70 40 72 82 Q76 140 72 168 Q70 200 40 200Z';
    const ST='M11 104 Q40 78 73 100 L74 138 Q42 116 10 144Z';
    const one = (tf) => `<g transform="${tf}"><g filter="url(#dshadow)"><path d="${FB}" transform="translate(0 7)" fill="${dk(fb,.3)}"/><path d="${FB}" fill="${fb}"/></g>` +
      `<path d="${FB}" fill="url(#gShoe)"/><path d="M26 186 Q40 192 56 184 Q64 160 58 140" fill="none" stroke="rgba(0,0,0,.14)" stroke-width="2"/><path d="M20 70 Q40 52 58 66" fill="none" stroke="rgba(0,0,0,.1)" stroke-width="2"/>` +
      `<path d="${FB}" fill="none" stroke="rgba(20,17,15,.4)" stroke-width="1.2"/>` +
      `<path d="${ST}" fill="${c}" stroke="rgba(20,17,15,.45)" stroke-width="1.3"/><path d="${ST}" fill="url(#gShoe)"/>` +
      `<path d="M16 108 Q42 86 70 104" fill="none" stroke="#fff" stroke-opacity=".3" stroke-width="2"/>` +
      `<text x="42" y="126" font-size="6.5" text-anchor="middle" fill="${lum(c)<.5?'rgba(255,255,255,.75)':'rgba(30,22,15,.7)'}" font-family="Inter,Arial,sans-serif" font-weight="600" letter-spacing="1.4" transform="rotate(4 42 126)">NOVERA</text></g>`;
    return one('translate(43 38) scale(1.35) rotate(-6 42 120)') + one('translate(143 38) scale(1.35) rotate(6 42 120)'); }
};
R.pack = cols => [[-10,40,cols[0]],[118,40,cols[1]||cols[0]],[54,160,cols[2]||cols[0]]]
  .map(([x,y,col]) => `<g transform="translate(${x} ${y}) scale(.6)">${R.boxer([col])}</g>`).join('');
R.dshorts = cols => R.shorts(cols,true);

const SHOE_TYPES = { sneaker:1, boot:1, sandal:1 };
function garmentSVG(type, cols){
  cols = Array.isArray(cols) ? cols : [cols];
  const body = (R[type] || R.tee)(cols);
  const inner = SHOE_TYPES[type] ? body : `<g transform="translate(150 200) scale(.84) translate(-150 -200)">${body}</g>`;
  return `<svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid meet" aria-hidden="true">${inner}</svg>`;
}
function fillGarments(root=document){
  root.querySelectorAll('[data-garment]').forEach(el => {
    el.innerHTML = garmentSVG(el.dataset.garment, el.dataset.color.split(','));
  });
}
fillGarments();

/* ---------- Render products ---------- */
const grid = document.getElementById('productGrid');
function renderProducts(audience='all', category='all'){
  grid.innerHTML = '';
  const list = PRODUCTS.filter(p =>
    (audience === 'all' || p.aud.includes(audience)) &&
    (category === 'all' || p.cat.includes(category))
  );
  if(list.length === 0){
    grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--ink-soft);padding:40px 0">No items in this filter yet.</p>';
    return;
  }
  list.forEach(p => {
    const el = document.createElement('article');
    el.className = 'product reveal';
    el.dataset.id = p.id;
    el.innerHTML = `
      <div class="product-img">
        <div class="ph">${garmentSVG(p.type, p.colors)}<img class="photo" src="images/${p.id}.jpg" alt="${p.name}" loading="lazy" onerror="this.remove()"></div>
        ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
        <button class="wish" aria-label="Save ${p.name}">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10Z"/></svg>
        </button>
        <button class="add" data-add="${p.id}">Add to cart</button>
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <div class="price">${p.was ? `<s>${money(p.was)}</s>` : ''}${money(p.price)}</div>
        <div class="swatches">${p.colors.map((c,i)=>`<i data-sw="${i}" style="background:${c}" title="${(COLOR_NAME[c]||'')}"></i>`).join('')}</div>
      </div>`;
    grid.appendChild(el);
  });
  observeReveal();
}

/* ---------- Active filters ---------- */
let activeAudience = 'all';
let activeCategory = 'all';
function applyFilters(){ renderProducts(activeAudience, activeCategory); }
applyFilters();

/* audience tabs */
document.getElementById('audienceTabs').addEventListener('click', e => {
  const btn = e.target.closest('.chip');
  if(!btn) return;
  activeAudience = btn.dataset.audience;
  document.querySelectorAll('#audienceTabs .chip').forEach(c => c.classList.remove('is-active'));
  btn.classList.add('is-active');
  applyFilters();
});

/* category filters */
document.getElementById('filters').addEventListener('click', e => {
  const btn = e.target.closest('.chip');
  if(!btn) return;
  activeCategory = btn.dataset.filter;
  document.querySelectorAll('#filters .chip').forEach(c => c.classList.remove('is-active'));
  btn.classList.add('is-active');
  applyFilters();
});

/* colour swatch preview */
grid.addEventListener('click', e => {
  const sw = e.target.closest('[data-sw]');
  if(!sw) return;
  const card = sw.closest('.product');
  if(card.querySelector('.photo')) return; /* real photo loaded: keep it */
  const p = PRODUCTS.find(x => x.id === card.dataset.id);
  const order = [p.colors[+sw.dataset.sw], ...p.colors.filter((_,i) => i !== +sw.dataset.sw)];
  card.querySelector('.ph').innerHTML = garmentSVG(p.type, order);
});

/* ---------- Collection shortcuts ---------- */
document.querySelectorAll('[data-collection]').forEach(a => {
  a.addEventListener('click', () => {
    const c = a.dataset.collection;
    activeCategory = c;
    document.querySelectorAll('#filters .chip').forEach(x => x.classList.toggle('is-active', x.dataset.filter === c));
    applyFilters();
  });
});

/* ---------- Cart ---------- */
let cart = [];
const cartBtn = document.getElementById('cartBtn');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');

function openCart(){ cartDrawer.classList.add('open'); cartOverlay.classList.add('open'); }
function closeCart(){ cartDrawer.classList.remove('open'); cartOverlay.classList.remove('open'); }
cartBtn.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);
document.addEventListener('keydown', e => { if(e.key==='Escape') closeCart(); });

function renderCart(){
  if(cart.length === 0){
    cartItems.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
  } else {
    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="ci-img">${garmentSVG(item.type, item.colors)}<img class="photo" src="images/${item.id}.jpg" alt="" onerror="this.remove()"></div>
        <div class="ci-info">
          <h4>${item.name}</h4>
          <p>${money(item.price)}</p>
          <div class="qty">
            <button data-dec="${item.id}" aria-label="Decrease">−</button>
            <span>${item.qty}</span>
            <button data-inc="${item.id}" aria-label="Increase">+</button>
          </div>
          <button class="ci-remove" data-remove="${item.id}">Remove</button>
        </div>
      </div>`).join('');
  }
  const total = cart.reduce((s,i) => s + i.price*i.qty, 0);
  const count = cart.reduce((s,i) => s + i.qty, 0);
  cartTotal.textContent = money(total);
  cartCount.textContent = count;
  cartCount.style.display = count ? 'grid' : 'none';
}
renderCart();

function addToCart(id){
  const p = PRODUCTS.find(x => x.id === id);
  if(!p) return;
  const existing = cart.find(x => x.id === id);
  if(existing) existing.qty++;
  else cart.push({ ...p, qty:1 });
  renderCart();
  showToast(`${p.name} added to cart`);
  openCart();
}

grid.addEventListener('click', e => {
  const add = e.target.closest('[data-add]');
  if(add) addToCart(add.dataset.add);
});

cartItems.addEventListener('click', e => {
  const inc = e.target.closest('[data-inc]');
  const dec = e.target.closest('[data-dec]');
  const rem = e.target.closest('[data-remove]');
  if(inc){ cart.find(x=>x.id===inc.dataset.inc).qty++; renderCart(); }
  if(dec){
    const it = cart.find(x=>x.id===dec.dataset.dec);
    it.qty--; if(it.qty<=0) cart = cart.filter(x=>x.id!==it.id);
    renderCart();
  }
  if(rem){ cart = cart.filter(x=>x.id!==rem.dataset.remove); renderCart(); }
});

/* ---------- Checkout (demo) ---------- */
document.getElementById('checkoutBtn').addEventListener('click', () => {
  if(cart.length === 0){ showToast('Your cart is empty'); return; }
  showToast('Demo checkout — connect Stripe/Shopify to go live');
});

/* ---------- Toast ---------- */
let toastTimer;
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2400);
}

/* ---------- Newsletter ---------- */
const nlForm = document.getElementById('newsletterForm');
const nlMsg = document.getElementById('newsletterMsg');
nlForm.addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('newsletterEmail').value.trim();
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if(!ok){ nlMsg.textContent = 'Please enter a valid email address.'; nlMsg.classList.add('err'); return; }
  nlMsg.classList.remove('err');
  nlMsg.textContent = 'You\'re in! Check your inbox for 10% off.';
  nlForm.reset();
});

/* ---------- Mobile menu ---------- */
const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');
menuBtn.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mainNav.classList.remove('open')));

/* ---------- Header scroll ---------- */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 12);
}, { passive:true });

/* ---------- Reveal on scroll ---------- */
function observeReveal(){
  if(!('IntersectionObserver' in window)){
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
    return;
  }
  if(io) io.disconnect();
  io = new IntersectionObserver(entries => {
    entries.forEach(en => { if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold:.12, rootMargin:'0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}
observeReveal();
