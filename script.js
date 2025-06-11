// ...existing code from <script> tag in HH-BH Matching(Work).html...
// Full province to amphur mapping for all 77 provinces
var provinceToAmphur = {
    'กรุงเทพมหานคร': ['เขตพระนคร', 'เขตดุสิต', /* ...etc... */],
    // ... (ข้อมูล mapping จังหวัด-อำเภอทั้งหมด) ...
};

function populateAmphurDropdown(provinceSelectId, amphurSelectId) {
    const province = document.getElementById(provinceSelectId).value;
    const amphurSelect = document.getElementById(amphurSelectId);
    amphurSelect.innerHTML = '<option>Select Amphur</option>';
    if (provinceToAmphur[province]) {
        provinceToAmphur[province].forEach(amphur => {
            amphurSelect.appendChild(opt);
        });
    }
}

document.getElementById('hh-province').addEventListener('change', function() {
    populateAmphurDropdown('hh-province', 'hh-amphur');
    updateFilters();
});
document.getElementById('bh-province').addEventListener('change', function() {
    populateAmphurDropdown('bh-province', 'bh-amphur');
    updateFilters();
});

document.getElementById('hh-amphur').addEventListener('change', updateFilters);
document.getElementById('bh-amphur').addEventListener('change', updateFilters);

// Reset filters function
function resetFilters(type) {
    if (type === 'hh') {
        document.getElementById('hh-date-filter').value = new Date().toISOString().split('T')[0];
        document.getElementById('hh-truck-type').selectedIndex = 0;
        document.getElementById('hh-zone').selectedIndex = 0;
        document.getElementById('hh-province').selectedIndex = 0;
        document.getElementById('hh-amphur').innerHTML = '<option>Select Amphur</option>';
        document.getElementById('hh-product-type').selectedIndex = 0;
        document.getElementById('hh-plant').selectedIndex = 0;
    } else if (type === 'bh') {
        document.getElementById('bh-date-filter').value = new Date().toISOString().split('T')[0];
        document.getElementById('bh-truck-type').selectedIndex = 0;
    }
    updateFilters();
}

// Zone to Province mapping for Head-Haul
const hhZoneToProvince = {
    'ภาคกลาง': [
        'กรุงเทพมหานคร','กาญจนบุรี','ชัยนาท','นครนายก','นครปฐม','นครสวรรค์','นนทบุรี','ปทุมธานี','พระนครศรีอยุธยา','ราชบุรี','ลพบุรี','สมุทรปราการ','สมุทรสงคราม','สมุทรสาคร','สิงห์บุรี','สุโขทัย','สุพรรณบุรี','อ่างทอง','อุทัยธานี','เพชรบุรี','ประจวบคีรีขันธ์'
    ],
    // ...etc...
};

// Save all province options for reset
const hhProvinceSelect = document.getElementById('hh-province');
const allHHProvinceOptions = Array.from(hhProvinceSelect.options).map(opt => ({value: opt.value, text: opt.text}));

function filterHHProvinceByZone() { /* ... */ }

document.getElementById('hh-zone').addEventListener('change', function() {
    updateFilters();
});

// Zone to Province mapping for Back-Haul
const bhZoneToProvince = { /* ... */ };
// ...existing code from <script> tag in HH-BH Matching(Work).html...
