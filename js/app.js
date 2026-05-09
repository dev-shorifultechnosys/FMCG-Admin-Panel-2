const modules = {
  dashboard:{label:'Dashboard',icon:'DB',sector:'All Allowed Sectors'},
  procurement:{label:'Procurement',icon:'PF',sector:'Procurement & Farmers'},
  production:{label:'Production',icon:'PR',sector:'Production Processing'},
  inventory:{label:'Inventory',icon:'IN',sector:'Inventory Tracking'},
  orders:{label:'Sales & Orders',icon:'SO',sector:'Sales & Order Processing'},
  logistics:{label:'Logistics & Gate',icon:'LG',sector:'Logistics & Gate'},
  qc:{label:'QC Processing',icon:'QC',sector:'Quality Control'},
  warehouse:{label:'Warehouse',icon:'WH',sector:'Warehouse Management'},
  maintenance:{label:'Maintenance',icon:'MT',sector:'Maintenance & Facility'},
  reports:{label:'Reports',icon:'RE',sector:'Reports & Exports'},
  users:{label:'Users & RBAC',icon:'UR',sector:'User and Permission Control'},
  requests:{label:'Approval Requests',icon:'AR',sector:'Permission Approval'},
  settings:{label:'Settings',icon:'ST',sector:'System Settings'}
};

const sectorModules = ['procurement','production','inventory','orders','logistics','qc','warehouse','maintenance'];
const sectorLabels = {
  procurement:'Procurement & Farmers', production:'Production Processing', inventory:'Inventory Tracking', orders:'Sales & Order Processing', logistics:'Logistics & Gate', qc:'Quality Control', warehouse:'Warehouse Management', maintenance:'Maintenance & Facility', users:'User Activity'
};
const actions = ['view','create','edit','delete','export','approve'];
const actionLabels = {view:'View',create:'Create/Add',edit:'Edit/Change',delete:'Delete',export:'Export',approve:'Approve'};

const systemUsersSeed = [
  {id:'u-main',name:'Main Admin',email:'admin@agriflow.local',type:'main_admin',roleLabel:'Main Admin',modules:['*'],permissions:{'*':['*']},status:'Active'},
  {id:'u-sub-ops',name:'Operations Sub Admin',email:'subadmin@agriflow.local',type:'sub_admin',roleLabel:'Sub Admin',modules:['dashboard','procurement','production','inventory','warehouse','reports','requests'],permissions:{procurement:['view','create','edit','export','approve'],production:['view','create','edit','export'],inventory:['view','create','edit','export','approve'],warehouse:['view','create','edit','export'],reports:['view','export'],requests:['view','approve']},status:'Active'},
  {id:'u-sub-fin',name:'Finance Sub Admin',email:'finance.sub@agriflow.local',type:'sub_admin',roleLabel:'Sub Admin',modules:['dashboard','orders','reports'],permissions:{orders:['view','create','edit','export','approve'],reports:['view','export']},status:'Active'},
  {id:'u-proc',name:'Procurement Admin',email:'procurement@agriflow.local',type:'sector_admin',roleLabel:'Procurement Sector Admin',sector:'procurement',modules:['dashboard','procurement','reports'],permissions:{procurement:['view','create'],reports:['view','export']}},
  {id:'u-prod',name:'Production Admin',email:'production@agriflow.local',type:'sector_admin',roleLabel:'Production Sector Admin',sector:'production',modules:['dashboard','production','reports'],permissions:{production:['view','create'],reports:['view','export']}},
  {id:'u-inv',name:'Inventory Admin',email:'inventory@agriflow.local',type:'sector_admin',roleLabel:'Inventory Sector Admin',sector:'inventory',modules:['dashboard','inventory','reports'],permissions:{inventory:['view','create'],reports:['view','export']}},
  {id:'u-sales',name:'Sales Admin',email:'sales@agriflow.local',type:'sector_admin',roleLabel:'Sales Sector Admin',sector:'orders',modules:['dashboard','orders','reports'],permissions:{orders:['view','create'],reports:['view','export']}},
  {id:'u-gate',name:'Gate Admin',email:'gate@agriflow.local',type:'sector_admin',roleLabel:'Gate Sector Admin',sector:'logistics',modules:['dashboard','logistics','reports'],permissions:{logistics:['view','create'],reports:['view','export']}},
  {id:'u-qc',name:'QC Admin',email:'qc@agriflow.local',type:'sector_admin',roleLabel:'QC Sector Admin',sector:'qc',modules:['dashboard','qc','reports'],permissions:{qc:['view','create'],reports:['view','export']}},
  {id:'u-wh',name:'Warehouse Admin',email:'warehouse@agriflow.local',type:'sector_admin',roleLabel:'Warehouse Sector Admin',sector:'warehouse',modules:['dashboard','warehouse','reports'],permissions:{warehouse:['view','create'],reports:['view','export']}},
  {id:'u-mt',name:'Maintenance Admin',email:'maintenance@agriflow.local',type:'sector_admin',roleLabel:'Maintenance Sector Admin',sector:'maintenance',modules:['dashboard','maintenance','reports'],permissions:{maintenance:['view','create'],reports:['view','export']}},
  {id:'u-exec',name:'Executive Viewer',email:'executive@agriflow.local',type:'viewer',roleLabel:'Executive Viewer',modules:['dashboard','reports'],permissions:{reports:['view'],procurement:['view'],production:['view'],inventory:['view'],orders:['view'],logistics:['view'],qc:['view'],warehouse:['view'],maintenance:['view']},status:'Active'}
];

const defaultInventory = [
  {id:'BCH-AVO-2408',item:'Hass Avocado Raw',location:'Cold Zone A-02',qty:18400,min:12000,status:'Healthy',qc:'Passed',supplier:'Nakuru Green Farms',reserved:0,sector:'inventory'},
  {id:'BCH-AVO-2396',item:'Fuerte Avocado Raw',location:'Cold Zone B-04',qty:6200,min:9000,status:'Low Stock',qc:'Passed',supplier:'Red Road Coop',reserved:0,sector:'inventory'},
  {id:'TANK-OIL-041',item:'Crude Avocado Oil',location:'Tank T-04',qty:12800,min:10000,status:'Reserved',qc:'In Process',supplier:'Production Line 1',reserved:8000,sector:'inventory'},
  {id:'SP-VALVE-09',item:'Steam Valve Spare',location:'Maintenance Cage',qty:7,min:10,status:'Reorder',qc:'NA',supplier:'Parts Vendor',reserved:0,sector:'maintenance'}
];
const defaultReports = [
  {sector:'procurement',ref:'REQ-2415',title:'Farmer response comparison',status:'Open',amount:'24,000 kg',owner:'Procurement Team',date:'2026-05-09'},
  {sector:'production',ref:'BATCH-4401',title:'Yield performance report',status:'In Progress',amount:'18.6% yield',owner:'Line 1',date:'2026-05-09'},
  {sector:'inventory',ref:'INV-LOW-2396',title:'Low stock alert',status:'Critical',amount:'6,200 kg',owner:'Warehouse',date:'2026-05-09'},
  {sector:'orders',ref:'ORD-8801',title:'Buyer order dispatch',status:'Allocated',amount:'8,000 L',owner:'Sales Team',date:'2026-05-09'},
  {sector:'logistics',ref:'GPN-29014',title:'Inbound truck movement',status:'Verified',amount:'27,800 kg',owner:'Gate Team',date:'2026-05-09'},
  {sector:'qc',ref:'QC-7719',title:'QC pass rate log',status:'Passed',amount:'DM 24.8%',owner:'QC Team',date:'2026-05-09'},
  {sector:'warehouse',ref:'GRN-58421',title:'Goods receipt note',status:'Posted',amount:'18,400 kg',owner:'Warehouse',date:'2026-05-09'},
  {sector:'maintenance',ref:'MT-5520',title:'Crusher downtime incident',status:'Open',amount:'14 min',owner:'Maintenance',date:'2026-05-09'},
  {sector:'users',ref:'AUD-1008',title:'Permission change audit',status:'Logged',amount:'1 change',owner:'Main Admin',date:'2026-05-09'}
];

let state = {
  users: clone(systemUsersSeed),
  currentUserId:'u-main',
  active:'dashboard',
  live:true,
  inventory: clone(defaultInventory),
  reports: clone(defaultReports),
  audit: [],
  requests: [],
  reportSector:'all',
  productionProgress:62,
  counters:{procurement:34,production:7,inventory:4,orders:12,logistics:18,qc:93,warehouse:74,maintenance:5}
};

const $ = id => document.getElementById(id);
function clone(data){ return JSON.parse(JSON.stringify(data)); }
function uid(prefix='id'){ return `${prefix}-${Date.now()}-${Math.floor(Math.random()*9999)}`; }
function fmt(n){ return new Intl.NumberFormat('en-US').format(Number(n)||0); }
function currentUser(){ return state.users.find(u=>u.id===state.currentUserId) || state.users[0]; }
function isMain(){ return currentUser().type === 'main_admin'; }
function isSub(){ return currentUser().type === 'sub_admin'; }
function isSectorAdmin(){ return currentUser().type === 'sector_admin'; }
function hasWildcardPermission(user=currentUser()){ return user.permissions?.['*']?.includes('*'); }
function hasModule(module){ const u=currentUser(); return u.modules?.includes('*') || u.modules?.includes(module); }
function can(module, action='view'){
  const u = currentUser();
  if(hasWildcardPermission(u)) return true;
  if(action === 'view' && u.permissions?.[module]?.includes('view')) return true;
  if(u.permissions?.[module]?.includes(action)) return true;
  if(module === 'reports' && u.permissions?.reports?.includes(action)) return true;
  return false;
}
function canReportSector(sector){
  const u = currentUser();
  if(isMain()) return true;
  if(u.permissions?.[sector]?.includes('view')) return true;
  if(isSectorAdmin() && u.sector === sector) return true;
  return false;
}
function allowedSectors(){ return sectorModules.filter(s => canReportSector(s)); }
function save(){ localStorage.setItem('agriflow_complete_rbac_v1', JSON.stringify(state)); }
function load(){
  const cached = localStorage.getItem('agriflow_complete_rbac_v1');
  if(!cached) return;
  try{
    const data = JSON.parse(cached);
    state = {...state,...data};
    if(!state.users?.length) state.users = clone(systemUsersSeed);
  }catch(e){}
}

function init(){
  load();
  fillLoginUsers();
  bindEvents();
  runClock();
}
function fillLoginUsers(){
  $('loginUser').innerHTML = state.users.map(u=>`<option value="${u.id}" ${u.id===state.currentUserId?'selected':''}>${u.name} · ${u.roleLabel || u.type}</option>`).join('');
}
function bindEvents(){
  $('loginForm').addEventListener('submit', e=>{
    e.preventDefault();
    if($('loginPassword').value !== 'password123') return toast('Wrong password. Use password123 for this demo.', 'danger');
    state.currentUserId = $('loginUser').value;
    state.active = 'dashboard';
    addAudit('login', `${currentUser().name} logged in as ${currentUser().roleLabel}`);
    showApp();
  });
  $('logoutBtn').addEventListener('click',()=>{
    addAudit('logout', `${currentUser().name} logged out`);
    $('appShell').classList.add('hidden');
    $('loginScreen').classList.remove('hidden');
    document.body.classList.remove('sidebar-open');
    fillLoginUsers();
  });
  $('mobileMenuBtn').addEventListener('click',()=>document.body.classList.toggle('sidebar-open'));
  $('modalClose').addEventListener('click', closeModal);
  $('modalOverlay').addEventListener('click', e=>{ if(e.target.id === 'modalOverlay') closeModal(); });
  $('liveToggle').addEventListener('click',()=>{ state.live=!state.live; $('liveToggle').textContent=state.live?'Pause Live':'Resume Live'; toast(state.live?'Live dashboard resumed.':'Live dashboard paused.'); save(); });
  $('quickActionBtn').addEventListener('click', quickActionModal);
  $('reportShortcutBtn').addEventListener('click',()=>navigate('reports'));
  document.body.addEventListener('click', e=>{
    const nav=e.target.closest('[data-nav]');
    if(nav) return navigate(nav.dataset.nav);
    const action=e.target.closest('[data-action]');
    if(action) return handleAction(action.dataset.action, action.dataset);
  });
  document.body.addEventListener('change', e=>{
    const input=e.target.closest('[data-permission-checkbox]');
    if(input) updatePermissionFromCheckbox(input);
  });
}
function showApp(){
  $('loginScreen').classList.add('hidden');
  $('appShell').classList.remove('hidden');
  updateUserUI();
  renderNav();
  render();
}
function updateUserUI(){
  const u=currentUser();
  $('sidebarRole').textContent = u.roleLabel || u.type;
  $('userName').textContent = u.name;
  $('userType').textContent = u.roleLabel || u.type;
  $('userInitial').textContent = u.name.charAt(0).toUpperCase();
  $('permissionSummary').innerHTML = permissionSummaryText(u);
}
function permissionSummaryText(u){
  if(u.type==='main_admin') return `<b>Main Admin</b><br>Full system control, user control, permissions, settings, reports and approval requests.`;
  if(u.type==='sub_admin') return `<b>Sub Admin</b><br>Can control only the sectors and actions granted by Main Admin.`;
  if(u.type==='sector_admin') return `<b>Sector Admin</b><br>Can create/add in ${sectorLabels[u.sector]}. Edit/delete/change needs Main Admin approval.`;
  return `<b>Viewer</b><br>Read-only dashboard and allowed reports.`;
}
function allowedModulesForNav(){
  const u=currentUser();
  const result = ['dashboard'];
  sectorModules.forEach(m=>{ if(hasModule(m) && can(m,'view')) result.push(m); });
  if(hasModule('reports') && can('reports','view')) result.push('reports');
  if(isMain() || (hasModule('requests') && can('requests','view'))) result.push('requests');
  if(isMain() || (hasModule('users') && can('users','view'))) result.push('users');
  if(isMain() || (hasModule('settings') && can('settings','view'))) result.push('settings');
  return [...new Set(result)];
}
function renderNav(){
  const navs = allowedModulesForNav();
  $('mainNav').innerHTML = navs.map(id=>`<button class="nav-btn ${state.active===id?'active':''}" data-nav="${id}"><span class="nav-icon">${modules[id].icon}</span><span>${modules[id].label}</span></button>`).join('');
}
function navigate(id){
  if(!allowedModulesForNav().includes(id)){
    addAudit('blocked', `${currentUser().name} tried to open blocked module: ${modules[id]?.label || id}`);
    return toast('Access blocked by RBAC. Main Admin must grant this module permission.', 'danger');
  }
  state.active=id;
  document.body.classList.remove('sidebar-open');
  renderNav();
  render();
}
function render(){
  if(!allowedModulesForNav().includes(state.active)) state.active='dashboard';
  const map={dashboard:dashboardView,procurement:sectorView,production:sectorView,inventory:inventoryView,orders:sectorView,logistics:sectorView,qc:sectorView,warehouse:sectorView,maintenance:sectorView,reports:reportsView,users:usersView,requests:requestsView,settings:settingsView};
  $('pageTitle').textContent = modules[state.active].label;
  $('pageSubtitle').textContent = state.active==='dashboard' ? 'Sector-wise live panel based on login permission.' : modules[state.active].sector;
  $('content').innerHTML = (map[state.active] || dashboardView)(state.active);
  updateUserUI();
  renderNav();
  save();
}

function pageHead(eyebrow,title,subtitle,actions=''){
  return `<div class="page-head"><div><p class="eyebrow">${eyebrow}</p><h1 class="page-title">${title}</h1><p class="subtext">${subtitle}</p></div><div class="action-row">${actions}</div></div>`;
}
function kpi(label,value,desc,delta='Live'){
  return `<div class="kpi card"><small>${label}</small><strong>${value}</strong><p class="subtext" style="margin-top:6px">${desc}</p><span>● ${delta}</span></div>`;
}
function sectionCard(title,desc,body,actions=''){
  return `<section class="card section-card"><div class="section-head"><div><h3>${title}</h3><p>${desc}</p></div><div class="action-row">${actions}</div></div>${body}</section>`;
}
function permissionBadges(sector){
  return actions.map(a=>`<span class="badge ${can(sector,a)?'badge-success':'badge-dark'}">${actionLabels[a]} ${can(sector,a)?'✓':'×'}</span>`).join(' ');
}
function statusBadge(status){
  const s = String(status).toLowerCase();
  const cls = s.includes('critical') || s.includes('low') || s.includes('blocked') ? 'badge-danger' : s.includes('open') || s.includes('pending') || s.includes('progress') || s.includes('reserved') ? 'badge-amber' : s.includes('verified') || s.includes('passed') || s.includes('posted') || s.includes('healthy') || s.includes('approved') ? 'badge-success' : 'badge-blue';
  return `<span class="badge ${cls}">${status}</span>`;
}

function dashboardView(){
  const sectors = allowedSectors();
  const pending = state.requests.filter(r=>r.status==='Pending' && (isMain() || canReportSector(r.sector))).length;
  return `
    ${pageHead('RBAC Sector Dashboard', `${currentUser().roleLabel || currentUser().name} Panel`, isMain() ? 'Main Admin can control all sectors, approve requests, assign permissions to Sub Admin and manage complete system.' : isSub() ? 'Sub Admin can control only the sectors and action permissions assigned by Main Admin.' : isSectorAdmin() ? 'Sector Admin can create/add in own sector. Any edit/delete/major change sends approval request to Main Admin.' : 'Viewer account can only see allowed dashboard and reports.', `<button class="btn btn-primary" data-action="quickCreate">Create/Add</button><button class="btn btn-ghost" data-nav="requests">Approval Requests (${pending})</button>`)}
    <div class="grid four">
      ${kpi('Allowed Sectors', sectors.length, 'Sectors visible for this login', 'Permission based')}
      ${kpi('Pending Requests', pending, 'Change requests waiting for approval', isMain()?'Approve now':'Requested')}
      ${kpi('Live Inventory Alerts', state.inventory.filter(i=>i.qty<i.min).length, 'Low stock and reorder states', 'Live')}
      ${kpi('Report Access', isMain()?'All':sectors.length, 'Sector reports available for this role', 'RBAC')}
    </div>
    <div style="height:16px"></div>
    <div class="grid ${sectors.length>1?'three':'two'}">
      ${sectors.map(sectorCard).join('') || `<div class="lock-card"><b>No sector assigned.</b><p class="subtext">Main Admin must assign sector view permission.</p></div>`}
    </div>
    <div style="height:16px"></div>
    <div class="grid sidebar-layout">
      ${sectionCard('Recent Activities', 'Allowed and blocked actions are logged for RBAC audit.', auditList(7))}
      ${sectionCard('Permission Status', 'Current login permission summary by sector.', permissionTable())}
    </div>`;
}
function sectorCard(sector){
  const count = state.counters[sector] || 0;
  const openReports = state.reports.filter(r=>r.sector===sector).length;
  return `<div class="sector-card card"><span class="badge badge-blue">${sectorLabels[sector]}</span><h3>${modules[sector].label} Panel</h3><p>${sectorDescription(sector)}</p><div class="sector-stats"><div class="mini-stat"><small>Live records</small><b>${count}</b></div><div class="mini-stat"><small>Reports</small><b>${openReports}</b></div></div><div class="action-row"><button class="btn btn-primary btn-small" data-nav="${sector}">Open Panel</button><button class="btn btn-ghost btn-small" data-action="createRecord" data-sector="${sector}">Create/Add</button><button class="btn btn-ghost btn-small" data-action="changeRecord" data-sector="${sector}">Change</button></div></div>`;
}
function sectorDescription(sector){
  const d={procurement:'Farmer requirement, broadcast, response and order confirmation.',production:'Batch planning, crushing, extraction, yield and tank allocation.',inventory:'Stock levels, movement, reserve, reorder and batch drill-down.',orders:'Buyer order, reservation, delivery slot and dispatch document.',logistics:'Digital GPN, gate entry, QR scan and weighbridge.',qc:'Sampling, DM/FFA, approve/reject and QC reports.',warehouse:'GRN, storage location, labels and internal movement.',maintenance:'Incident, preventive task, spare parts and closure approval.'};
  return d[sector] || 'Sector operation panel.';
}
function permissionTable(){
  const sectors = isMain()?sectorModules:allowedSectors();
  return `<div class="table-wrap"><table><thead><tr><th>Sector</th>${actions.map(a=>`<th>${actionLabels[a]}</th>`).join('')}</tr></thead><tbody>${sectors.map(s=>`<tr><td><b>${sectorLabels[s]}</b></td>${actions.map(a=>`<td>${can(s,a)?statusBadge('Allowed'):statusBadge('Blocked')}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}

function sectorView(sector){
  const created = can(sector,'create');
  return `
    ${pageHead('Sector Admin Panel', modules[sector].sector, `${sectorDescription(sector)} Permission is enforced at menu, button, report and action level.`, `<button class="btn btn-primary" data-action="createRecord" data-sector="${sector}">Create/Add</button><button class="btn btn-amber" data-action="changeRecord" data-sector="${sector}">Edit/Change</button><button class="btn btn-ghost" data-action="exportSector" data-sector="${sector}">Export Report</button>`)}
    <div class="card section-card"><div class="section-head"><div><h3>Permission for this sector</h3><p>Sector Admin can normally create/add. Edit/delete/major change needs Main Admin approval unless granted.</p></div></div><div class="action-row">${permissionBadges(sector)}</div></div>
    <div style="height:16px"></div>
    <div class="grid four">
      ${kpi('Open Items', state.counters[sector] || 0, `${modules[sector].label} live records`, 'Live')}
      ${kpi('Created Today', created ? '8' : '0', created ? 'Create/Add allowed' : 'Create permission blocked', created?'Allowed':'Blocked')}
      ${kpi('Pending Changes', state.requests.filter(r=>r.sector===sector && r.status==='Pending').length, 'Waiting for Main Admin approval', 'Approval')}
      ${kpi('Reports', state.reports.filter(r=>r.sector===sector).length, 'Visible sector reports', can('reports','export')?'Export allowed':'View only')}
    </div>
    <div style="height:16px"></div>
    <div class="grid sidebar-layout">
      ${sectionCard(`${modules[sector].label} Work Queue`, 'Create actions are instant if allowed. Change actions are guarded by RBAC.', genericSectorTable(sector))}
      ${sectionCard('Approval Workflow', 'If permission is missing, a request is created for Main Admin approval.', approvalWorkflow(sector))}
    </div>`;
}
function genericSectorTable(sector){
  const rows = state.reports.filter(r=>r.sector===sector);
  return `<div class="table-wrap"><table><thead><tr><th>Ref</th><th>Title</th><th>Status</th><th>Amount</th><th>Owner</th><th>Actions</th></tr></thead><tbody>${rows.map(r=>`<tr><td><b>${r.ref}</b></td><td>${r.title}</td><td>${statusBadge(r.status)}</td><td>${r.amount}</td><td>${r.owner}</td><td><div class="action-row"><button class="btn btn-primary btn-small" data-action="createRecord" data-sector="${sector}">Add</button><button class="btn btn-amber btn-small" data-action="changeRecord" data-sector="${sector}" data-ref="${r.ref}">Change</button><button class="btn btn-danger btn-small" data-action="deleteRecord" data-sector="${sector}" data-ref="${r.ref}">Delete</button></div></td></tr>`).join('')}</tbody></table></div>`;
}
function approvalWorkflow(sector){
  return `<div class="timeline"><div class="timeline-item"><strong>1. Sector Admin creates or adds new item</strong><span>Create/Add is allowed for assigned sector by default.</span></div><div class="timeline-item"><strong>2. Change requires permission</strong><span>If edit/delete/change is not granted, system sends a request to Main Admin.</span></div><div class="timeline-item"><strong>3. Main Admin approves or denies</strong><span>Approval updates the request and logs the action in audit.</span></div><div class="timeline-item"><strong>4. Sub Admin works by granted permission</strong><span>Main Admin can give Sub Admin view, create, edit, delete, export and approve permissions sector-wise.</span></div></div>`;
}

function inventoryView(){
  const rows = state.inventory.map(item=>{
    const pct = Math.max(3, Math.min(100, (item.qty/(item.min*1.7))*100));
    const danger = item.qty < item.min ? 'danger' : item.reserved ? 'warn' : '';
    return `<tr><td><b>${item.id}</b><br><small>${item.item}</small></td><td>${item.location}</td><td>${fmt(item.qty)}</td><td>${fmt(item.reserved)}</td><td>${fmt(item.min)}</td><td><div class="progress ${danger}" style="--value:${pct}%"><i></i></div></td><td>${statusBadge(item.qty < item.min ? 'Low Stock' : item.status)}</td><td><div class="action-row"><button class="btn btn-ghost btn-small" data-action="inventoryDetail" data-id="${item.id}">View</button><button class="btn btn-primary btn-small" data-action="inventoryCreate" data-id="${item.id}">Add</button><button class="btn btn-amber btn-small" data-action="inventoryEdit" data-id="${item.id}">Change</button></div></td></tr>`;
  }).join('');
  return `
    ${pageHead('Inventory Sector Panel', 'Inventory Tracking & Stock Control', 'Stock monitoring, add/receive, transfer, reserve, adjust, reorder and batch drill-down. Edit-level actions require permission approval.', `<button class="btn btn-primary" data-action="inventoryCreate">Receive/Add Stock</button><button class="btn btn-amber" data-action="inventoryEdit">Adjust/Change</button><button class="btn btn-ghost" data-action="exportInventory">Export Inventory</button>`)}
    <div class="grid four">
      ${kpi('Total Raw Stock', `${fmt(state.inventory.filter(i=>i.id.includes('BCH')).reduce((s,i)=>s+i.qty,0))} kg`, 'Raw avocado stock', 'Live')}
      ${kpi('Low Stock Items', state.inventory.filter(i=>i.qty<i.min).length, 'Below minimum level', 'Alert')}
      ${kpi('Reserved Stock', `${fmt(state.inventory.reduce((s,i)=>s+i.reserved,0))}`, 'Reserved for production/orders', 'Live')}
      ${kpi('Change Requests', state.requests.filter(r=>r.sector==='inventory' && r.status==='Pending').length, 'Inventory edit approvals', 'RBAC')}
    </div>
    <div style="height:16px"></div>
    ${sectionCard('Working Inventory Table', 'All inventory buttons are active. Create/Add is allowed if granted. Change/Edit sends approval if permission is missing.', `<div class="table-wrap"><table><thead><tr><th>Batch/SKU</th><th>Location</th><th>On Hand</th><th>Reserved</th><th>Min</th><th>Health</th><th>Status</th><th>Action</th></tr></thead><tbody>${rows}</tbody></table></div>`)}
    <div style="height:16px"></div>
    <div class="grid two">
      ${sectionCard('Supply Chain Movement', 'Farm to gate to QC to storage to production to dispatch.', `<div class="timeline"><div class="timeline-item"><strong>Farm Network</strong><span>Requirement broadcast and farmer delivery slot.</span></div><div class="timeline-item"><strong>Gate & Weighbridge</strong><span>GPN scan and gross/tare weight.</span></div><div class="timeline-item"><strong>QC Approval</strong><span>Sampling and approve/reject decision.</span></div><div class="timeline-item"><strong>Warehouse & Production</strong><span>Batch ID, storage, FEFO/FIFO, issue to line.</span></div></div>`)}
      ${sectionCard('Inventory Permission Logic', 'Receive/Add, edit/change, export and approve states are separated.', `<div class="action-row">${permissionBadges('inventory')}</div><br><div class="lock-card"><b>Important:</b><p class="subtext">If Inventory Admin tries to adjust stock without edit permission, a Main Admin approval request is generated instead of directly changing stock.</p></div>`)}
    </div>`;
}

function reportsView(){
  const sectors = isMain()?['all',...sectorModules,'users']:['all',...allowedSectors()];
  const selected = state.reportSector;
  const visibleReports = state.reports.filter(r => (selected==='all' || r.sector===selected) && (isMain() || canReportSector(r.sector) || r.sector==='users' && canReportSector('users')));
  return `
    ${pageHead('Reports', 'All Allowed Sector Reports', 'Reports are filtered by login permission. Main Admin sees every sector. Sub Admin and Sector Admin see only granted sectors.', `<button class="btn btn-primary" data-action="exportReports">Export CSV</button><button class="btn btn-ghost" data-action="printReports">Print / Save PDF</button>`)}
    <div class="card section-card"><div class="section-head"><div><h3>Report Sector Filter</h3><p>Select sector report. Unallowed sectors are hidden by RBAC.</p></div></div><div class="tabs">${sectors.map(s=>`<button class="tab-btn ${state.reportSector===s?'active':''}" data-action="setReportSector" data-sector="${s}">${s==='all'?'All Allowed':(sectorLabels[s]||s)}</button>`).join('')}</div></div>
    <div style="height:16px"></div>
    <div class="grid four">
      ${kpi('Visible Reports', visibleReports.length, 'Current report rows', 'Filtered')}
      ${kpi('Export Permission', can('reports','export')?'Allowed':'Blocked', 'CSV export state', can('reports','export')?'Ready':'Need permission')}
      ${kpi('Sectors Available', sectors.length-1, 'Report sectors for this role', 'RBAC')}
      ${kpi('User Activity', isMain()?'Visible':'Restricted', 'Audit and permission history', isMain()?'Admin':'Hidden')}
    </div>
    <div style="height:16px"></div>
    ${sectionCard('Sector Reports Table', 'Export this exact filtered report as CSV or print/save as PDF.', reportTable(visibleReports))}`;
}
function reportTable(rows){
  return `<div class="table-wrap"><table><thead><tr><th>Sector</th><th>Ref</th><th>Title</th><th>Status</th><th>Amount</th><th>Owner</th><th>Date</th><th>Action</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${sectorLabels[r.sector]||r.sector}</td><td><b>${r.ref}</b></td><td>${r.title}</td><td>${statusBadge(r.status)}</td><td>${r.amount}</td><td>${r.owner}</td><td>${r.date}</td><td><button class="btn btn-ghost btn-small" data-action="viewReport" data-ref="${r.ref}">View</button></td></tr>`).join('') || `<tr><td colspan="8">No reports available for this permission level.</td></tr>`}</tbody></table></div>`;
}

function usersView(){
  if(!isMain() && !can('users','view')) return noAccess('Users & RBAC');
  const usersRows = state.users.map(u=>`<tr><td><b>${u.name}</b><br><small>${u.email}</small></td><td>${u.roleLabel}</td><td>${u.type}</td><td>${u.sector?sectorLabels[u.sector]:'Multiple / All'}</td><td>${u.status||'Active'}</td><td><button class="btn btn-primary btn-small" data-action="openPermissionEditor" data-user="${u.id}">Permissions</button></td></tr>`).join('');
  return `
    ${pageHead('Main Admin Control', 'Users, Sub Admin & RBAC Permission Control', 'Main Admin can create Sub Admins and define exactly which sectors and actions they can control. Sector Admin default create/add only.', `<button class="btn btn-primary" data-action="addSubAdmin">Add Sub Admin</button><button class="btn btn-ghost" data-action="resetDemo">Reset Demo Data</button>`)}
    <div class="grid two">
      ${sectionCard('RBAC Control Rule', 'Permission model used in this package.', `<div class="timeline"><div class="timeline-item"><strong>Main Admin</strong><span>Full control. Can approve requests and assign Sub Admin permission.</span></div><div class="timeline-item"><strong>Sub Admin</strong><span>Can control only sectors and actions granted by Main Admin.</span></div><div class="timeline-item"><strong>Sector Admin</strong><span>Can view and create/add inside own sector. Change/edit/delete needs permission or approval.</span></div></div>`)}
      ${sectionCard('Pending Approval Requests', 'Main Admin can approve or deny sector change requests.', requestList(true))}
    </div>
    <div style="height:16px"></div>
    ${sectionCard('User Accounts', 'Open permission editor to give or remove sector-level control.', `<div class="table-wrap"><table><thead><tr><th>User</th><th>Role</th><th>Type</th><th>Sector</th><th>Status</th><th>Permission</th></tr></thead><tbody>${usersRows}</tbody></table></div>`)}`;
}
function settingsView(){
  if(!isMain() && !can('settings','view')) return noAccess('Settings');
  return `
    ${pageHead('System Settings', 'Main Admin Settings Panel', 'Only Main Admin can control global settings, module rules, export settings, security and theme options.', `<button class="btn btn-primary" data-action="saveSettings">Save Settings</button>`)}
    <div class="grid two">
      ${sectionCard('Company Profile', 'Factory identity and operating profile.', `<div class="form-grid"><div class="field"><label>Company Name<input value="AgriFlow FMCG Factory"></label></div><div class="field"><label>Country/Region<input value="African Avocado Processing Region"></label></div><div class="field full"><label>Operational Theme<textarea>African farms, avocado sourcing, processing factory and distribution.</textarea></label></div></div>`)}
      ${sectionCard('Permission Policy', 'Main Admin can change permission behavior.', `<div class="form-grid"><div class="field"><label>Sector Admin Edit Rule<select><option>Requires Main Admin approval</option><option>Allow if explicitly granted</option></select></label></div><div class="field"><label>Export Rule<select><option>Based on report export permission</option><option>Main Admin only</option></select></label></div><div class="field"><label>Audit Log<select><option>Track allowed and blocked actions</option><option>Track blocked only</option></select></label></div><div class="field"><label>Theme<select><option>Red Soil + Avocado Green</option><option>Factory Dark</option></select></label></div></div>`)}
      ${sectionCard('Notification Settings', 'Permission requests and sector alerts.', `<div class="permission-grid"><label class="permission-item"><input type="checkbox" checked>Main Admin approval alerts</label><label class="permission-item"><input type="checkbox" checked>Inventory low stock alerts</label><label class="permission-item"><input type="checkbox" checked>QC reject alerts</label><label class="permission-item"><input type="checkbox" checked>Gate mismatch alerts</label><label class="permission-item"><input type="checkbox" checked>Export audit alerts</label></div>`)}
      ${sectionCard('Security Settings', 'Prototype settings for dev handoff.', `<div class="permission-grid"><label class="permission-item"><input type="checkbox" checked>Role-based menu</label><label class="permission-item"><input type="checkbox" checked>Action guard</label><label class="permission-item"><input type="checkbox" checked>Approval request flow</label><label class="permission-item"><input type="checkbox" checked>Audit trail</label><label class="permission-item"><input type="checkbox" checked>Local demo persistence</label></div>`) }
    </div>`;
}
function requestsView(){
  return `
    ${pageHead('Approval Requests', 'Main Admin Permission Approval Center', isMain() ? 'Approve or deny change requests from Sector Admins and Sub Admins.' : 'Your pending permission requests and approval status.', `<button class="btn btn-ghost" data-action="refreshRequests">Refresh</button>`)}
    <div class="grid four">
      ${kpi('Pending', state.requests.filter(r=>r.status==='Pending' && (isMain() || r.userId===currentUser().id)).length, 'Waiting approval', 'RBAC')}
      ${kpi('Approved', state.requests.filter(r=>r.status==='Approved' && (isMain() || r.userId===currentUser().id)).length, 'Permission granted', 'Done')}
      ${kpi('Denied', state.requests.filter(r=>r.status==='Denied' && (isMain() || r.userId===currentUser().id)).length, 'Request denied', 'Closed')}
      ${kpi('My Role', currentUser().roleLabel, 'Current login type', 'Active')}
    </div>
    <div style="height:16px"></div>
    ${sectionCard('Request List', 'Change/edit/delete actions without permission create requests here.', requestList(false))}`;
}
function requestList(compact=false){
  const list = state.requests.filter(r=>isMain() || r.userId===currentUser().id || canReportSector(r.sector));
  if(!list.length) return `<div class="lock-card"><b>No request yet.</b><p class="subtext">Try a Change or Delete action without permission to create a request.</p></div>`;
  if(compact) return `<div class="timeline">${list.slice(0,4).map(r=>`<div class="timeline-item"><strong>${r.action.toUpperCase()} · ${sectorLabels[r.sector]||r.sector}</strong><span>${r.message} · ${r.status}</span></div>`).join('')}</div>`;
  return `<div class="table-wrap"><table><thead><tr><th>Request ID</th><th>User</th><th>Sector</th><th>Action</th><th>Message</th><th>Status</th><th>Admin Action</th></tr></thead><tbody>${list.map(r=>`<tr><td><b>${r.id}</b></td><td>${r.userName}</td><td>${sectorLabels[r.sector]||r.sector}</td><td>${actionLabels[r.action]||r.action}</td><td>${r.message}</td><td>${statusBadge(r.status)}</td><td>${isMain() && r.status==='Pending' ? `<div class="action-row"><button class="btn btn-primary btn-small" data-action="approveRequest" data-id="${r.id}">Approve</button><button class="btn btn-danger btn-small" data-action="denyRequest" data-id="${r.id}">Deny</button></div>` : `<button class="btn btn-ghost btn-small" data-action="viewRequest" data-id="${r.id}">View</button>`}</td></tr>`).join('')}</tbody></table></div>`;
}
function noAccess(name){
  return `${pageHead('Access Blocked', `${name} Restricted`, 'This screen is not granted for your role. Ask Main Admin for permission.', `<button class="btn btn-amber" data-action="requestModuleAccess" data-sector="${state.active}">Request Access</button>`)}<div class="lock-card"><b>RBAC blocked this panel.</b><p class="subtext">Main Admin must add module and view permission to your user account.</p></div>`;
}

function handleAction(action, data){
  const map = {
    quickCreate:()=>quickActionModal(),
    createRecord:()=>createRecord(data.sector),
    changeRecord:()=>changeRecord(data.sector, data.ref),
    deleteRecord:()=>deleteRecord(data.sector, data.ref),
    exportSector:()=>exportSector(data.sector),
    inventoryDetail:()=>inventoryDetail(data.id),
    inventoryCreate:()=>inventoryCreate(data.id),
    inventoryEdit:()=>inventoryEdit(data.id),
    exportInventory:()=>exportInventory(),
    setReportSector:()=>{ state.reportSector=data.sector; render(); },
    exportReports:()=>exportReports(),
    printReports:()=>window.print(),
    viewReport:()=>toast(`Report ${data.ref} opened in prototype detail view.`),
    addSubAdmin:()=>addSubAdminModal(),
    openPermissionEditor:()=>permissionEditor(data.user),
    approveRequest:()=>approveRequest(data.id),
    denyRequest:()=>denyRequest(data.id),
    viewRequest:()=>viewRequest(data.id),
    requestModuleAccess:()=>requestPermission(state.active,'view',`Needs access to ${modules[state.active]?.label}`),
    saveSettings:()=>{ addAudit('settings','Main Admin saved settings'); toast('Settings saved in prototype.', 'success'); },
    resetDemo:()=>resetDemo(),
    closeAndRender:()=>{ closeModal(); toast('Permission settings saved.', 'success'); },
    refreshRequests:()=>{ toast('Request list refreshed.'); render(); }
  };
  if(map[action]) return map[action]();
}
function createRecord(sector){
  sector = sector || firstAllowedSector();
  if(!can(sector,'create')) return requestPermission(sector,'create',`Needs create/add permission in ${sectorLabels[sector]}`);
  const ref = `${sector.slice(0,3).toUpperCase()}-${Math.floor(1000+Math.random()*8999)}`;
  state.reports.unshift({sector,ref,title:`New ${modules[sector].label} record created`,status:'Open',amount:'New item',owner:currentUser().name,date:new Date().toISOString().slice(0,10)});
  state.counters[sector]=(state.counters[sector]||0)+1;
  addAudit('create', `${currentUser().name} created ${ref} in ${sectorLabels[sector]}`);
  toast(`Created new ${sectorLabels[sector]} record: ${ref}`, 'success');
  render();
}
function changeRecord(sector, ref='selected record'){
  if(!can(sector,'edit')) return requestPermission(sector,'edit',`Wants to change ${ref} in ${sectorLabels[sector]}`);
  const target = state.reports.find(r=>r.ref===ref && r.sector===sector) || state.reports.find(r=>r.sector===sector);
  if(target) target.status = 'Changed';
  addAudit('edit', `${currentUser().name} changed ${ref} in ${sectorLabels[sector]}`);
  toast(`Change applied in ${sectorLabels[sector]}.`, 'success');
  render();
}
function deleteRecord(sector, ref='selected record'){
  if(!can(sector,'delete')) return requestPermission(sector,'delete',`Wants to delete ${ref} from ${sectorLabels[sector]}`);
  state.reports = state.reports.filter(r=>r.ref!==ref);
  addAudit('delete', `${currentUser().name} deleted ${ref} in ${sectorLabels[sector]}`);
  toast(`${ref} deleted.`, 'success');
  render();
}
function exportSector(sector){
  if(!can('reports','export') && !can(sector,'export')) return requestPermission(sector,'export',`Needs export permission for ${sectorLabels[sector]} report`);
  const rows = state.reports.filter(r=>r.sector===sector);
  downloadCSV(`${sector}-report.csv`, rows);
  addAudit('export', `${currentUser().name} exported ${sectorLabels[sector]} report`);
  toast(`${sectorLabels[sector]} report exported.`, 'success');
}
function inventoryCreate(){
  if(!can('inventory','create')) return requestPermission('inventory','create','Needs receive/add stock permission');
  const id = `BCH-AVO-${Math.floor(3000+Math.random()*6999)}`;
  state.inventory.unshift({id,item:'New Avocado Raw Batch',location:'Cold Zone C-01',qty:5000,min:3000,status:'Healthy',qc:'Pending',supplier:'New Farmer Group',reserved:0,sector:'inventory'});
  state.reports.unshift({sector:'inventory',ref:`INV-${id}`,title:'New stock received',status:'Posted',amount:'5,000 kg',owner:currentUser().name,date:new Date().toISOString().slice(0,10)});
  addAudit('inventory.create', `${currentUser().name} received stock ${id}`);
  toast(`Stock received: ${id}`, 'success');
  render();
}
function inventoryEdit(id){
  if(!can('inventory','edit')) return requestPermission('inventory','edit',`Wants to adjust/change inventory ${id || 'selected batch'}`);
  const item = id ? state.inventory.find(i=>i.id===id) : state.inventory[0];
  if(item){ item.qty += 250; item.status = item.qty < item.min ? 'Low Stock' : 'Adjusted'; }
  addAudit('inventory.edit', `${currentUser().name} adjusted ${item?.id || 'inventory'}`);
  toast(`Inventory changed: ${item?.id || 'selected batch'}`, 'success');
  render();
}
function inventoryDetail(id){
  const item = state.inventory.find(i=>i.id===id);
  if(!item) return;
  openModal(item.id, 'Batch drill-down and traceability', `<div class="grid two"><div class="section-card card"><h3>${item.item}</h3><p class="subtext">Supplier: ${item.supplier}</p><p class="subtext">Location: ${item.location}</p><p class="subtext">QC: ${item.qc}</p><p class="subtext">Reserved: ${fmt(item.reserved)}</p></div><div class="section-card card"><h3>Actions</h3><div class="action-row"><button class="btn btn-primary" data-action="inventoryCreate">Receive Similar</button><button class="btn btn-amber" data-action="inventoryEdit" data-id="${item.id}">Adjust/Change</button><button class="btn btn-ghost" data-action="exportInventory">Export</button></div><br><div class="action-row">${permissionBadges('inventory')}</div></div></div>`);
}
function exportInventory(){
  if(!can('inventory','export') && !can('reports','export')) return requestPermission('inventory','export','Needs inventory export permission');
  downloadCSV('inventory-export.csv', state.inventory);
  addAudit('inventory.export', `${currentUser().name} exported inventory`);
  toast('Inventory exported as CSV.', 'success');
}
function exportReports(){
  if(!can('reports','export')) return requestPermission('reports','export','Needs report export permission');
  const rows = state.reports.filter(r => (state.reportSector==='all'||r.sector===state.reportSector) && (isMain() || canReportSector(r.sector)));
  downloadCSV('sector-reports.csv', rows);
  addAudit('reports.export', `${currentUser().name} exported reports`);
  toast('Reports exported as CSV.', 'success');
}
function requestPermission(sector, action, message){
  const duplicate = state.requests.find(r=>r.userId===currentUser().id && r.sector===sector && r.action===action && r.status==='Pending');
  if(duplicate){ toast('Permission request already pending for Main Admin.', 'amber'); navigate('requests'); return; }
  const req = {id:uid('REQ'),userId:currentUser().id,userName:currentUser().name,sector,action,message,status:'Pending',created:new Date().toLocaleString(),resolved:''};
  state.requests.unshift(req);
  addAudit('permission.request', `${currentUser().name} requested ${action} permission for ${sectorLabels[sector]||sector}`);
  toast('Permission request sent to Main Admin. Change was not applied yet.', 'amber');
  save();
  navigate('requests');
}
function approveRequest(id){
  if(!isMain()) return toast('Only Main Admin can approve requests.', 'danger');
  const req = state.requests.find(r=>r.id===id); if(!req) return;
  req.status='Approved'; req.resolved=new Date().toLocaleString();
  const user = state.users.find(u=>u.id===req.userId);
  if(user){ grantPermission(user, req.sector, req.action); }
  addAudit('permission.approve', `Main Admin approved ${req.action} for ${req.userName} in ${sectorLabels[req.sector]||req.sector}`);
  toast(`Approved. ${req.userName} now has ${req.action} permission for ${sectorLabels[req.sector]||req.sector}.`, 'success');
  fillLoginUsers();
  render();
}
function denyRequest(id){
  if(!isMain()) return toast('Only Main Admin can deny requests.', 'danger');
  const req = state.requests.find(r=>r.id===id); if(!req) return;
  req.status='Denied'; req.resolved=new Date().toLocaleString();
  addAudit('permission.deny', `Main Admin denied ${req.action} for ${req.userName}`);
  toast('Request denied.', 'danger');
  render();
}
function viewRequest(id){
  const r=state.requests.find(x=>x.id===id); if(!r) return;
  openModal(r.id, 'Permission request detail', `<div class="table-wrap"><table><tbody><tr><th>User</th><td>${r.userName}</td></tr><tr><th>Sector</th><td>${sectorLabels[r.sector]||r.sector}</td></tr><tr><th>Action</th><td>${actionLabels[r.action]||r.action}</td></tr><tr><th>Status</th><td>${statusBadge(r.status)}</td></tr><tr><th>Message</th><td>${r.message}</td></tr><tr><th>Created</th><td>${r.created}</td></tr></tbody></table></div>`);
}

function permissionEditor(userId){
  if(!isMain()) return toast('Only Main Admin can edit permissions.', 'danger');
  const u=state.users.find(x=>x.id===userId); if(!u) return;
  const body = `<div class="lock-card"><b>${u.name}</b><p class="subtext">${u.roleLabel}. Main Admin can grant exact sector-wise controls. Sub Admin can only control checked permissions.</p></div><br><div class="table-wrap"><table><thead><tr><th>Sector</th>${actions.map(a=>`<th>${actionLabels[a]}</th>`).join('')}</tr></thead><tbody>${sectorModules.map(s=>`<tr><td><b>${sectorLabels[s]}</b></td>${actions.map(a=>`<td><label class="permission-item"><input type="checkbox" data-permission-checkbox="1" data-user="${u.id}" data-sector="${s}" data-perm="${a}" ${hasUserPerm(u,s,a)?'checked':''}> ${actionLabels[a]}</label></td>`).join('')}</tr>`).join('')}<tr><td><b>Reports</b></td>${['view','export'].map(a=>`<td><label class="permission-item"><input type="checkbox" data-permission-checkbox="1" data-user="${u.id}" data-sector="reports" data-perm="${a}" ${hasUserPerm(u,'reports',a)?'checked':''}> ${actionLabels[a]}</label></td>`).join('')}<td colspan="4"></td></tr></tbody></table></div><br><button class="btn btn-primary" data-action="closeAndRender">Save Permission</button>`;
  openModal('Permission Editor', 'Main Admin sector-wise control center', body);
}
function hasUserPerm(u, sector, perm){ return u.permissions?.['*']?.includes('*') || u.permissions?.[sector]?.includes(perm); }
function grantPermission(user, sector, perm){
  user.permissions = user.permissions || {};
  user.permissions[sector] = user.permissions[sector] || [];
  if(!user.permissions[sector].includes('view') && sector !== 'reports') user.permissions[sector].push('view');
  if(!user.permissions[sector].includes(perm)) user.permissions[sector].push(perm);
  user.modules = user.modules || ['dashboard'];
  if(sectorModules.includes(sector) && !user.modules.includes(sector)) user.modules.push(sector);
  if((sector==='reports' || perm==='export') && !user.modules.includes('reports')) user.modules.push('reports');
  if(!user.modules.includes('dashboard')) user.modules.unshift('dashboard');
}
function removePermission(user, sector, perm){
  if(!user.permissions?.[sector]) return;
  user.permissions[sector] = user.permissions[sector].filter(p=>p!==perm);
  if(sectorModules.includes(sector) && !user.permissions[sector].length){
    user.modules = (user.modules||[]).filter(m=>m!==sector);
  }
}
function updatePermissionFromCheckbox(input){
  if(!isMain()) return;
  const user=state.users.find(u=>u.id===input.dataset.user); if(!user) return;
  if(input.checked) grantPermission(user,input.dataset.sector,input.dataset.perm);
  else removePermission(user,input.dataset.sector,input.dataset.perm);
  addAudit('permission.update', `Main Admin ${input.checked?'granted':'removed'} ${input.dataset.perm} for ${user.name} in ${input.dataset.sector}`);
  toast(`Permission ${input.checked?'granted':'removed'} for ${user.name}.`, input.checked?'success':'amber');
  fillLoginUsers(); save(); renderNav();
}
function addSubAdminModal(){
  if(!isMain()) return toast('Only Main Admin can add Sub Admin.', 'danger');
  openModal('Add Sub Admin', 'Create a Sub Admin and then assign permissions.', `<div class="form-grid"><div class="field"><label>Name<input id="newSubName" value="New Sub Admin"></label></div><div class="field"><label>Email<input id="newSubEmail" value="new.subadmin@agriflow.local"></label></div></div><br><button class="btn btn-primary" data-action="createSubAdminNow">Create Sub Admin</button>`);
  const handler = e=>{
    const btn=e.target.closest('[data-action="createSubAdminNow"]'); if(!btn) return;
    const name=$('newSubName').value.trim()||'New Sub Admin'; const email=$('newSubEmail').value.trim()||'new.subadmin@agriflow.local';
    const user={id:uid('u-sub'),name,email,type:'sub_admin',roleLabel:'Sub Admin',modules:['dashboard','reports'],permissions:{reports:['view']},status:'Active'};
    state.users.push(user); addAudit('user.create', `Main Admin created Sub Admin ${name}`); fillLoginUsers(); closeModal(); toast('Sub Admin created. Open permission editor to assign sectors.', 'success'); render(); document.body.removeEventListener('click',handler);
  };
  document.body.addEventListener('click',handler);
}
function quickActionModal(){
  const sectors=allowedSectors();
  openModal('Quick Action', 'Actions shown according to current RBAC permission.', `<div class="grid two">${sectors.map(s=>`<div class="card section-card"><h3>${sectorLabels[s]}</h3><p class="subtext">${permissionBadges(s)}</p><div class="action-row"><button class="btn btn-primary btn-small" data-action="createRecord" data-sector="${s}">Create/Add</button><button class="btn btn-amber btn-small" data-action="changeRecord" data-sector="${s}">Change</button><button class="btn btn-ghost btn-small" data-action="exportSector" data-sector="${s}">Export</button></div></div>`).join('')}</div>`);
}
function firstAllowedSector(){ return allowedSectors()[0] || 'procurement'; }

function auditList(limit=10){
  const rows = state.audit.slice(0,limit);
  if(!rows.length) return `<div class="lock-card"><b>No audit yet.</b><p class="subtext">Actions will appear here.</p></div>`;
  return `<div class="timeline">${rows.map(a=>`<div class="timeline-item"><strong>${a.type}</strong><span>${a.message} · ${a.time}</span></div>`).join('')}</div>`;
}
function addAudit(type,message){ state.audit.unshift({type,message,time:new Date().toLocaleString(),user:currentUser().name}); state.audit=state.audit.slice(0,100); save(); }
function openModal(title,subtitle,body){ $('modalTitle').textContent=title; $('modalSubtitle').textContent=subtitle; $('modalBody').innerHTML=body; $('modalOverlay').classList.remove('hidden'); }
function closeModal(){ $('modalOverlay').classList.add('hidden'); $('modalBody').innerHTML=''; render(); }
function toast(message,type='success'){
  const root=$('toastRoot'); const el=document.createElement('div'); el.className=`toast ${type}`; el.innerHTML=`<strong>${type==='danger'?'Blocked':type==='amber'?'Notice':'Success'}</strong><p>${message}</p>`; root.appendChild(el); setTimeout(()=>el.remove(),4200);
}
function downloadCSV(filename, rows){
  rows = rows || [];
  const headers = rows[0] ? Object.keys(rows[0]) : ['message'];
  const csv = [headers.join(','), ...rows.map(r=>headers.map(h=>`"${String(r[h]??'').replaceAll('"','""')}"`).join(','))].join('\n');
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href=url; a.download=filename; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}
function resetDemo(){
  if(!isMain()) return;
  if(!confirm('Reset demo data and permissions?')) return;
  localStorage.removeItem('agriflow_complete_rbac_v1');
  state = {users:clone(systemUsersSeed),currentUserId:'u-main',active:'dashboard',live:true,inventory:clone(defaultInventory),reports:clone(defaultReports),audit:[],requests:[],reportSector:'all',productionProgress:62,counters:{procurement:34,production:7,inventory:4,orders:12,logistics:18,qc:93,warehouse:74,maintenance:5}};
  addAudit('reset','Main Admin reset demo data'); fillLoginUsers(); toast('Demo data reset.', 'success'); render();
}
function runClock(){
  setInterval(()=>{
    if(!state.live || $('appShell').classList.contains('hidden')) return;
    state.productionProgress = Math.min(100, state.productionProgress + (Math.random()>.55?1:0));
    if(Math.random()>.72) state.counters.inventory = Math.max(0, (state.counters.inventory||4) + (Math.random()>.5?1:-1));
    if(state.active==='dashboard') render();
  }, 3500);
}

init();
