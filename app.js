const drawer=document.getElementById('drawer');
const backdrop=document.getElementById('backdrop');
const toast=document.getElementById('toast');
const count=document.getElementById('cartCount');
let cart=0;
function setDrawer(open){drawer.classList.toggle('open',open);backdrop.classList.toggle('show',open);drawer.setAttribute('aria-hidden',String(!open));}
function showToast(msg){toast.textContent=msg;toast.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>toast.classList.remove('show'),1800);}
document.getElementById('menuBtn').onclick=()=>setDrawer(true);
document.getElementById('closeDrawer').onclick=()=>setDrawer(false);
backdrop.onclick=()=>setDrawer(false);
drawer.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setDrawer(false)));
document.querySelectorAll('.add-btn').forEach(btn=>btn.addEventListener('click',()=>{cart++;count.textContent=cart;showToast(`${btn.dataset.item} adicionado ao pedido`);}));
document.querySelectorAll('.category').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.category').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const el=document.getElementById(btn.dataset.target);if(el)el.scrollIntoView({behavior:'smooth',block:'start'});else showToast('Categoria em preparação para a demonstração');}));
document.getElementById('searchBtn').onclick=()=>showToast('Busca do cardápio');
document.getElementById('cartBtn').onclick=()=>showToast(cart?`${cart} item(ns) no pedido`:'Seu pedido está vazio');
document.getElementById('ordersBtn').onclick=()=>showToast('Área de pedidos da demonstração');