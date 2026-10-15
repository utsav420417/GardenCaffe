/* ===== EDIT ME ===== */
const CONFIG={
  wa:"",                         // optional: WhatsApp number with country code, e.g. 9779812345678. If empty, it is made from phone below.
  /* Street names shown on the Find Us map. Replace every [ ... ] with the real names. */
  location:{street:"[STREET NAME]",landmark:"[NEAREST CHOWK / LANDMARK]",cross:"[CROSS STREET NAME]",town:"[TOWN, DISTRICT]"},
  mapQuery:"",   // optional: exact text to search on Google Maps
  mapEmbed:"",   // optional: the link from Google Maps > Share > Embed a map (the src="..." part)
  deliveryArea:"town",   // where you deliver, e.g. "Butwal"
  open:"08:00", close:"21:00",   // 24-hour format. SAMPLE hours: replace with the real ones
  phone:"9867481398",   // e.g. 9812345678 (used for the call link and, if wa is empty, for WhatsApp)
  /* Payment details shown on the order section. qr: optional image path, e.g. "assets/images/qr-esewa.png" */
  pay:{
    esewa:{id:"[eSewa ID / NUMBER]",qr:""},
    khalti:{id:"[Khalti ID / NUMBER]",qr:""},
    bank:{id:"[BANK, ACCOUNT NAME AND NUMBER]",qr:""}
  }
};
/* Gallery photos: put files in assets/gallery/ (or assets/images/) and list them here. */
const S=(k,n)=>`https://loremflickr.com/800/600/${k}?lock=${n}`;
/* Photos by category (c). The three local files are your own photos. The S(...) links are TEMPORARY sample photos
   (random stock photos by keyword): replace each with your own file, e.g. src:"assets/gallery/lobby1.jpg". */
const GALLERY=[
{c:"Garden",src:"assets/images/garden.jpg",alt:"The café at sunset with green buildings and prayer flags"},
{c:"Tables",src:"assets/images/table.jpg",alt:"A wooden table under the trees with a menu"},
{c:"Entrance",src:"assets/images/entrance.jpg",alt:"The café entrance with the Cafe The Garden sign"},
{c:"Garden",src:S("garden,cafe",11),alt:"Sample photo: garden seating"},
{c:"Garden",src:S("outdoor,cafe",12),alt:"Sample photo: outdoor café"},
{c:"Tables",src:S("cafe,table",13),alt:"Sample photo: café table"},
{c:"Tables",src:S("outdoor,table",14),alt:"Sample photo: outdoor table"},
{c:"Entrance",src:S("cafe,entrance",15),alt:"Sample photo: café entrance"},
{c:"Lobby",src:S("cafe,interior",16),alt:"Sample photo: lobby"},
{c:"Lobby",src:S("coffeeshop",17),alt:"Sample photo: lobby seating"},
{c:"Cabins",src:S("wooden,cabin",18),alt:"Sample photo: cabin"},
{c:"Cabins",src:S("cabin,interior",19),alt:"Sample photo: cabin seating"}
];
/* Sample items and prices in NPR. Replace with the real menu. cat order sets the tab order. */
const MENU=[
{id:1,cat:"Hot Drinks",n:"Milk Tea",d:"Classic Nepali chiya.",p:50},
{id:2,cat:"Hot Drinks",n:"Masala Tea",d:"Spiced tea with ginger.",p:70},
{id:3,cat:"Hot Drinks",n:"Black Coffee",d:"Strong and simple.",p:120},
{id:4,cat:"Hot Drinks",n:"Cappuccino",d:"Espresso with milk foam.",p:180},
{id:5,cat:"Cold Drinks",n:"Cold Coffee",d:"Chilled coffee with ice cream.",p:220},
{id:6,cat:"Cold Drinks",n:"Lemon Soda",d:"Fresh lemon, sweet or salty.",p:100},
{id:7,cat:"Cold Drinks",n:"Banana Shake",d:"Thick and creamy.",p:150},
{id:8,cat:"Cold Drinks",n:"Mango Shake",d:"Seasonal mango and milk.",p:180},
{id:9,cat:"Snacks",n:"Veg Momo",d:"Steamed, with spicy achar.",p:150},
{id:10,cat:"Snacks",n:"Chicken Momo",d:"Steamed, with spicy achar.",p:200},
{id:11,cat:"Snacks",n:"French Fries",d:"Crisp and salted.",p:150},
{id:12,cat:"Snacks",n:"Chilli Potato",d:"Spicy fried potato.",p:180},
{id:13,cat:"Food",n:"Veg Chowmein",d:"Stir-fried noodles with vegetables.",p:150},
{id:14,cat:"Food",n:"Chicken Chowmein",d:"Stir-fried noodles with chicken.",p:200},
{id:15,cat:"Food",n:"Veg Sandwich",d:"Toasted, with fries.",p:150},
{id:16,cat:"Food",n:"Chicken Fried Rice",d:"Wok-fried rice with egg and chicken.",p:250},
{id:19,cat:"Food",n:"Veg Burger",d:"Crispy veg patty, lettuce and sauce.",p:180},
{id:20,cat:"Food",n:"Chicken Burger",d:"Grilled chicken patty with fries.",p:250},
{id:21,cat:"Food",n:"Cheese Pizza",d:"Mozzarella on a thin crust.",p:450},
{id:22,cat:"Food",n:"Chicken Pizza",d:"Chicken, capsicum and cheese.",p:520},
{id:23,cat:"Food",n:"White Sauce Pasta",d:"Creamy pasta with herbs.",p:300},
{id:24,cat:"Food",n:"Chicken Sandwich",d:"Toasted, with salad and fries.",p:220},
{id:25,cat:"Food",n:"Veg Fried Rice",d:"Wok-fried rice with vegetables.",p:200},
{id:26,cat:"Food",n:"Chicken Thukpa",d:"Hot noodle soup with chicken.",p:220},
{id:27,cat:"Food",n:"Egg Fried Rice",d:"Wok-fried rice with egg.",p:210},
{id:17,cat:"Desserts",n:"Chocolate Brownie",d:"Rich and fudgy.",p:180},
{id:18,cat:"Desserts",n:"Ice Cream Scoop",d:"Vanilla, chocolate or strawberry.",p:120}];


/* Temporary food photos (random stock photos by keyword). Replace by adding img:"assets/food/momo.jpg" to an item. */
const KW={"Milk Tea":"tea","Masala Tea":"chai","Black Coffee":"coffee","Cappuccino":"cappuccino","Cold Coffee":"icedcoffee","Lemon Soda":"lemonade","Banana Shake":"milkshake","Mango Shake":"mango","Veg Momo":"dumplings","Chicken Momo":"dumplings","French Fries":"fries","Chilli Potato":"potato","Veg Chowmein":"noodles","Chicken Chowmein":"noodles","Veg Sandwich":"sandwich","Chicken Sandwich":"sandwich","Chicken Fried Rice":"friedrice","Veg Fried Rice":"friedrice","Egg Fried Rice":"friedrice","Chocolate Brownie":"brownie","Ice Cream Scoop":"icecream","Veg Burger":"burger","Chicken Burger":"burger","Cheese Pizza":"pizza","Chicken Pizza":"pizza","White Sauce Pasta":"pasta","Chicken Thukpa":"soup"};
const foodImg=m=>m.img||`https://loremflickr.com/480/360/${KW[m.n]||"food"}?lock=${m.id+40}`;
const CATS=["Food","Snacks","Hot Drinks","Cold Drinks","Desserts"];
MENU.sort((a,b)=>CATS.indexOf(a.cat)-CATS.indexOf(b.cat));
const ICON={
"Hot Drinks":'<path d="M14 26h30v12a14 14 0 0 1-14 14h-2a14 14 0 0 1-14-14z"/><path d="M44 30h4a6 6 0 0 1 0 12h-5"/><path d="M24 8c-3 4 3 6 0 10M34 8c-3 4 3 6 0 10"/>',
"Cold Drinks":'<path d="M16 14h32l-4 38a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4z"/><path d="M18 28h28"/><path d="M36 14l6-8"/>',
"Snacks":'<path d="M10 42a22 20 0 0 1 44 0z"/><path d="M20 42l2-14M28 42l1-18M36 42l-1-18M44 42l-2-14"/><path d="M8 48h48"/>',
"Food":'<path d="M12 28a20 14 0 0 1 40 0z"/><path d="M10 34l5 4 5-4 5 4 5-4 5 4 5-4 5 4 5-4"/><path d="M12 43h40"/><path d="M14 48h36v2a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4z"/>',
"Desserts":'<path d="M20 28l12 28 12-28"/><circle cx="32" cy="20" r="12"/><path d="M26 18a6 6 0 0 1 6-6"/>'};
const $=s=>document.querySelector(s);
const io="IntersectionObserver" in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.15}):null;
function watch(){document.querySelectorAll(".reveal:not(.in)").forEach(el=>io?io.observe(el):el.classList.add("in"))}
const money=n=>"NPR "+n.toLocaleString("en-US");
(()=>{if(/^\d{10,15}$/.test(CONFIG.wa))return;const d=CONFIG.phone.replace(/\D/g,"");if(/^9\d{9}$/.test(d))CONFIG.wa="977"+d;else if(/^977\d{10}$/.test(d))CONFIG.wa=d})();
const waReady=()=>/^\d{10,15}$/.test(CONFIG.wa);

let cart={};try{cart=JSON.parse(localStorage.getItem("gc-cart")||"{}")}catch(e){}
const save=()=>{try{localStorage.setItem("gc-cart",JSON.stringify(cart))}catch(e){}};
const byId=id=>MENU.find(m=>m.id==id);
const qty=id=>cart[id]||0;
const count=()=>Object.values(cart).reduce((a,b)=>a+b,0);
const total=()=>Object.entries(cart).reduce((s,[id,q])=>s+byId(id).p*q,0);

/* menu */
let cat="All";
const ctl=id=>qty(id)?`<div class="step"><button data-dec="${id}" aria-label="Remove one ${byId(id).n}">&minus;</button><span aria-live="polite">${qty(id)}</span><button data-inc="${id}" aria-label="Add one ${byId(id).n}">+</button></div>`:`<button class="add" data-inc="${id}" aria-label="Add ${byId(id).n} to order">Add</button>`;
function drawChips(){
  $("#chips").innerHTML=["All",...CATS].map(c=>`<button class="chip" aria-pressed="${c===cat}">${c}</button>`).join("");
}
function drawGrid(){
  $("#grid").innerHTML=MENU.filter(m=>cat==="All"||m.cat===cat).map((m,i)=>`<article class="item reveal" style="--i:${i%8}"><div class="tile t${CATS.indexOf(m.cat)}" aria-hidden="true"><svg viewBox="0 0 64 64">${ICON[m.cat]}</svg><img src="${foodImg(m)}" alt="" loading="lazy" onerror="this.remove()"></div><div class="info"><h3>${m.n}</h3><p>${m.d}</p><div class="row"><span class="price">${money(m.p)}</span><span id="ctl-${m.id}">${ctl(m.id)}</span></div></div></article>`).join("");watch();
}
$("#chips").onclick=e=>{if(!e.target.classList.contains("chip"))return;cat=e.target.textContent;drawChips();drawGrid()};

/* cart */
function drawOrder(){
  const ids=Object.keys(cart).filter(id=>cart[id]>0);
  $("#order-list").innerHTML=ids.length?ids.map(id=>`<div class="line"><span>${byId(id).n}<br><small>${money(byId(id).p)} each</small></span><div class="step"><button data-dec="${id}" aria-label="Remove one ${byId(id).n}">&minus;</button><span>${cart[id]}</span><button data-inc="${id}" aria-label="Add one ${byId(id).n}">+</button></div></div>`).join(""):'<p class="empty">Your order is empty. Add items from the menu.</p>';
  $("#total").textContent=money(total());
  const cb=$("#count");cb.textContent=count();cb.classList.remove("bump");void cb.offsetWidth;cb.classList.add("bump");
  const bar=$("#bar");bar.hidden=!count();document.body.classList.toggle("has-cart",!!count());bar.textContent=`${count()} item${count()>1?"s":""} · ${money(total())} · View order`;
}
function change(id,d,btn){
  cart[id]=Math.max(0,qty(id)+d);if(!cart[id])delete cart[id];save();
  const c=$("#ctl-"+id);if(c)c.innerHTML=ctl(id);
  drawOrder();
  const k=d>0?"inc":"dec";
  const sel=btn.closest("#order-list")?`#order-list [data-${k}="${id}"]`:`#ctl-${id} [data-${k}="${id}"],#ctl-${id} .add`;
  const nb=document.querySelector(sel);if(nb)nb.focus();
}
document.addEventListener("click",e=>{
  const b=e.target.closest("[data-inc],[data-dec]");if(!b)return;
  b.dataset.inc?change(b.dataset.inc,1,b):change(b.dataset.dec,-1,b);
});

/* send on WhatsApp */
$("#f-type").onchange=e=>{$("#l-note").textContent=e.target.value==="Delivery"?"Delivery address":"Table or note (optional)"};
$("#send").onclick=()=>{
  const err=$("#err"),name=$("#f-name").value.trim(),phone=$("#f-phone").value.trim(),type=$("#f-type").value,note=$("#f-note").value.trim();
  err.innerHTML="";
  const pay=$("#f-pay").value,payNote=pay==="Cash at café"?"":`\n\nI will pay by ${pay} and send the screenshot after you confirm.`;
  if(!count())return err.textContent="Add at least one item from the menu.";
  if(name.length<2)return err.textContent="Enter your name.";
  if(!/^\+?\d[\d\s-]{6,}$/.test(phone))return err.textContent="Enter a valid phone number.";
  if(type==="Delivery"&&!note)return err.textContent="Enter your delivery address.";
  if(!waReady())return err.textContent="The café's WhatsApp number is not set up yet. Please call the café to order.";
  const lines=Object.keys(cart).map(id=>`- ${cart[id]} x ${byId(id).n} (${money(byId(id).p*cart[id])})`).join("\n");
  const msg=`Hello The Garden Café!\n\nI would like to place an order.\n\nName: ${name}\nPhone: ${phone}\nOrder type: ${type}\nPayment: ${pay}\n\nItems:\n${lines}\n\nTotal: ${money(total())}${note?`\n\n${type==="Delivery"?"Address":"Note"}: ${note}`:""}${payNote}\n\nPlease confirm my order. Thank you!`;
  const url=`https://wa.me/${CONFIG.wa}?text=${encodeURIComponent(msg)}`;
  const w=window.open(url,"_blank","noopener");
  err.style.color="#1B4332";
  err.innerHTML=w?"WhatsApp opened. Review the message and press send. Your order is not confirmed until the café replies.":`Pop-up blocked. <a href="${url}" target="_blank" rel="noopener">Open WhatsApp</a>.`;
};

/* nav + footer info */
const burger=$("#burger"),nav=$("#nav");
burger.onclick=()=>{const o=nav.classList.toggle("open");burger.setAttribute("aria-expanded",o)};
nav.onclick=e=>{if(e.target.closest("a")){nav.classList.remove("open");burger.setAttribute("aria-expanded",false)}};
$("#c-addr").textContent=[CONFIG.location.street,CONFIG.location.town].join(", ");$("#c-hours").textContent=fmt12(CONFIG.open)+" to "+fmt12(CONFIG.close);$("#c-phone").textContent=CONFIG.phone;$("#yr").textContent=new Date().getFullYear();
Object.keys(cart).forEach(id=>{if(!byId(id))delete cart[id]});

/* header, contact links, payments */
const hdr=$("#top");const sc=()=>hdr.classList.toggle("sm",scrollY>30);sc();addEventListener("scroll",sc,{passive:true});
document.querySelectorAll("[data-wa]").forEach(a=>{if(waReady()){a.href=`https://wa.me/${CONFIG.wa}?text=${encodeURIComponent("Hello The Garden Café!")}`;a.target="_blank";a.rel="noopener"}});
document.querySelectorAll("[data-tel]").forEach(a=>{a.querySelector("span").textContent=CONFIG.phone;if(/\d{7,}/.test(CONFIG.phone))a.href="tel:"+CONFIG.phone.replace(/[^\d+]/g,"")});
$("#pay").innerHTML=[["eSewa",CONFIG.pay.esewa,"#60BB46"],["Khalti",CONFIG.pay.khalti,"#5C2D91"],["Mobile Banking",CONFIG.pay.bank,"#2F8CFF"]].map(([n,p,c])=>`<div class="pc" style="--c:${c}"><b>${n}</b><span>${p.id.includes("[")?"Details shared on WhatsApp":p.id}</span>${p.qr?`<img src="${p.qr}" alt="${n} QR code" width="120" height="120">`:""}</div>`).join("");

/* gallery + lightbox + owner upload (preview only) */
let extra=[];try{extra=JSON.parse(localStorage.getItem("gc-photos")||"[]")}catch(e){}
let all=[],cur=0;
const lb=document.createElement("div");lb.className="lb";lb.setAttribute("role","dialog");lb.setAttribute("aria-modal","true");lb.setAttribute("aria-label","Photo viewer");
lb.innerHTML='<button aria-label="Close photo viewer">&times;</button><img alt="">';document.body.append(lb);
const show=i=>{cur=(i+all.length)%all.length;const im=lb.querySelector("img");im.src=all[cur].src;im.alt=all[cur].alt;lb.classList.add("open")};
lb.onclick=e=>{if(e.target.tagName!=="IMG")lb.classList.remove("open")};
lb.querySelector("img").onclick=()=>show(cur+1);
let tx=0;lb.addEventListener("touchstart",e=>{tx=e.touches[0].clientX},{passive:true});
lb.addEventListener("touchend",e=>{const d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>50)show(cur+(d<0?1:-1))});
addEventListener("keydown",e=>{if(!lb.classList.contains("open"))return;if(e.key==="Escape")lb.classList.remove("open");if(e.key==="ArrowRight")show(cur+1);if(e.key==="ArrowLeft")show(cur-1)});
let gcat="All";
function drawGallery(){
  const items=[...GALLERY,...extra.map(s=>({c:"Added",src:s,alt:"Photo added by the café"}))];
  if(!items.some(p=>p.c===gcat))gcat="All";
  $("#gal-chips").innerHTML=["All",...new Set(items.map(p=>p.c))].map(c=>`<button class="chip" aria-pressed="${c===gcat}">${c}</button>`).join("");
  all=items.filter(p=>gcat==="All"||p.c===gcat);
  $("#gallery").innerHTML=all.map((p,i)=>`<button class="gi" data-i="${i}" aria-label="Open ${p.c} photo ${i+1} of ${all.length}"><img loading="lazy" src="${p.src}" alt="${p.alt}" onerror="this.closest('.gi').style.display='none'"><span class="gc">${p.c}</span></button>`).join("");
}
$("#gal-chips").onclick=e=>{if(e.target.classList.contains("chip")){gcat=e.target.textContent;drawGallery()}};
$("#gallery").onclick=e=>{const b=e.target.closest(".gi");if(b)show(+b.dataset.i)};
const shrink=f=>new Promise(res=>{const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const s=Math.min(1,900/Math.max(im.width,im.height)),c=document.createElement("canvas");c.width=im.width*s;c.height=im.height*s;c.getContext("2d").drawImage(im,0,0,c.width,c.height);res(c.toDataURL("image/jpeg",.72))};im.src=r.result};r.readAsDataURL(f)});
$("#up").onchange=async e=>{for(const f of e.target.files){if(extra.length>=10)break;extra.push(await shrink(f))}
  try{localStorage.setItem("gc-photos",JSON.stringify(extra))}catch(x){extra.pop();alert("Browser storage is full. Remove some added photos first.")}
  drawGallery();e.target.value=""};
$("#clr").onclick=()=>{extra=[];try{localStorage.removeItem("gc-photos")}catch(e){}drawGallery()};
if(/admin/.test(location.search+location.hash))$("#admin").hidden=false;
drawGallery();

/* opening hours */
function fmt12(t){const[h,m]=t.split(":").map(Number);return`${h%12||12}:${String(m).padStart(2,"0")} ${h<12?"AM":"PM"}`}
const toMin=t=>{const[h,m]=t.split(":").map(Number);return h*60+m};
function nepal(){const d=new Date(),[h,m]=d.toLocaleTimeString("en-GB",{timeZone:"Asia/Kathmandu",hourCycle:"h23",hour:"2-digit",minute:"2-digit"}).split(":").map(Number);return{day:d.toLocaleDateString("en-US",{timeZone:"Asia/Kathmandu",weekday:"short"}),mins:h*60+m}}
function drawHours(){
  const n=nepal(),o=toMin(CONFIG.open),c=toMin(CONFIG.close),open=o<c?(n.mins>=o&&n.mins<c):(n.mins>=o||n.mins<c),st=$("#h-state");
  $("#h-open").textContent=fmt12(CONFIG.open);$("#h-close").textContent=fmt12(CONFIG.close);
  st.className="state "+(open?"on":"off");st.textContent=open?"Open now":"Closed now";
}
drawHours();setInterval(drawHours,60000);
$("#deliver").textContent=`Home delivery is available in ${CONFIG.deliveryArea}. Choose Delivery below and add your address.`;

/* Find Us map */
function drawMap(){
  const L=CONFIG.location,addr=[L.street,L.town].join(", "),unset=[L.street,L.town].some(x=>x.includes("[")),q=CONFIG.mapQuery||`The Garden Café, ${addr}`;
  $("#where").innerHTML=[["Street",L.street],["Near",L.landmark],["Cross street",L.cross],["Town",L.town]].map(([k,v])=>`<li><b>${k}</b><span>${v}</span></li>`).join("");
  const box=$("#mapbox"),dir=$("#dir"),fake=unset&&!CONFIG.mapEmbed;
  dir.hidden=unset&&!CONFIG.mapQuery;$("#map-note").hidden=!fake;
  dir.href=`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(q)}`;
  box.innerHTML=fake?`<svg viewBox="0 0 600 380" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Sample map. Street names will appear here."><rect width="600" height="380" fill="#E3F1E8"/><rect y="300" width="600" height="80" fill="#CFE6F7"/><path d="M0 150H600M0 250H600M180 0V380M430 0V380" stroke="#fff" stroke-width="24"/><text x="20" y="156" font-size="15" font-weight="700" fill="#0A2F4F">${L.street}</text><text x="196" y="32" font-size="14" fill="#0A2F4F">${L.cross}</text><path d="M305 150c-14-18-22-30-22-42a22 22 0 0 1 44 0c0 12-8 24-22 42z" fill="#12803F"/><circle cx="305" cy="108" r="8" fill="#fff"/><text x="300" y="350" text-anchor="middle" font-size="15" fill="#0A2F4F">${L.landmark}</text></svg>`:`<iframe title="Map showing The Garden Café" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="${CONFIG.mapEmbed||`https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`}"></iframe>`;
}
drawMap();
drawChips();drawGrid();drawOrder();
document.querySelectorAll("section h2,.pair img,.panel,.facts li").forEach((el,i)=>{el.classList.add("reveal");if(el.tagName==="LI")el.style.setProperty("--i",i%4)});watch();
