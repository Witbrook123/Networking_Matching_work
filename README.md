<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Overall Networking Dashboard HH : BH Matching</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #f4f6fa;
            min-height: 100vh;
            color: #222;
        }

        .header {
            background: linear-gradient(90deg, #a18cd1 0%, #fbc2eb 100%);
            padding: 32px 24px 24px 24px;
            box-shadow: 0 4px 24px rgba(60,72,88,0.07);
            border-radius: 0 0 24px 24px;
            position: relative;
        }

        .header h1 {
            font-size: 2rem;
            font-weight: 700;
            color: #fff;
            letter-spacing: 1px;
            text-shadow: 0 2px 8px #a18cd1cc;
        }

        .header p {
            color: #f3e8ff;
            margin-top: 8px;
            font-size: 1rem;
            font-weight: 400;
            text-shadow: 0 1px 6px #a18cd1cc;
        }

        .mockup-badge {
            position: absolute;
            top: 24px;
            right: 32px;
            background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);
            color: #7c4700;
            padding: 8px 18px;
            border-radius: 20px;
            font-weight: 700;
            font-size: 1rem;
            box-shadow: 0 2px 8px rgba(255, 193, 7, 0.18);
            border: 1.5px solid #ffe259;
        }

        .main-container {
            display: flex;
            flex-wrap: wrap;
            gap: 24px;
            margin-top: 32px; /* Add space between header and map */
            align-items: flex-start;
        }

        .map-section {
            flex: 1 1 350px;
            /* width: 2000px; */
            background: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            margin-bottom: 0;
            height: 70vh;
            min-height: 600px;
        }

        .map-bg {
            background: #fff;
            border-radius: 24px;
            box-shadow: 0 4px 24px rgba(60,72,88,0.10);
            padding: 18px 18px 0 18px;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .map-topic {
            font-size: 1.7rem;
            font-weight: 800;
            color: #1d4ed8;
            margin-bottom: 12px;
            margin-top: 0;
            letter-spacing: 0.5px;
            text-align: center;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .map-embed-container {
            width: 90%;
            flex: 1 1 auto;
            display: flex;
            flex-direction: column;
            justify-content: stretch;
            height: 100%;
            min-height: 500px;
        }

        .map-embed-container iframe {
            width: 100%;
            height: 100%;
            min-height: 500px;
            border-radius: 12px;
            border: 0;
            flex: 1 1 auto;
        }

        .filters-section {
            flex: 1.2 1 400px;
            min-width: 340px;
            background: #fff;
            padding: 32px 24px 24px 24px;
            border-radius: 18px;
            box-shadow: 0 4px 24px rgba(60,72,88,0.07);
            display: flex;
            flex-direction: column;
            gap: 24px;
            height: 100%;
            margin-left: 32px;
            margin-right: 32px;
        }

        .hh-filters, .bh-filters {
            background: #f8fafc;
            border-radius: 12px;
            padding: 20px 16px 14px 16px;
            box-shadow: 0 2px 8px rgba(60,72,88,0.04);
            border: 1px solid #e5e7eb;
        }

        .hh-filters h3, .bh-filters h3 {
            color: #2563eb;
            margin-bottom: 14px;
            font-size: 1.08rem;
            font-weight: 700;
            font-family: 'Segoe UI', Arial, sans-serif;
            display: flex;
            align-items: center;
            gap: 10px;
            background: none;
            padding: 0;
            border-radius: 0;
            box-shadow: none;
        }

        .hh-filters h3::before {
            content: 'HH';
            background: #2563eb;
            color: #fff;
            padding: 2px 10px;
            border-radius: 6px;
            font-size: 0.95rem;
            font-weight: 700;
        }

        .bh-filters h3::before {
            content: 'BH';
            background: #0ea5e9;
            color: #fff;
            padding: 2px 10px;
            border-radius: 6px;
            font-size: 0.95rem;
            font-weight: 700;
        }

        .filter-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-bottom: 10px;
        }

        .filter-item label {
            font-weight: 600;
            color: #2563eb;
            font-size: 0.98rem;
            font-family: 'Segoe UI', Arial, sans-serif;
        }

        .filter-item input,
        .filter-item select {
            padding: 10px 12px;
            border: 1.5px solid #e5e7eb;
            border-radius: 6px;
            font-size: 1rem;
            font-family: 'Segoe UI', Arial, sans-serif;
            background: #fff;
            transition: all 0.2s;
            box-shadow: none;
        }

        .filter-item input:focus,
        .filter-item select:focus {
            outline: none;
            border-color: #2563eb;
            box-shadow: 0 0 0 2px #2563eb22;
        }

        .status-filter {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
        }

        .status-button {
            padding: 10px 12px;
            border: 1.5px solid #e5e7eb;
            border-radius: 6px;
            background: #f4f6fa;
            cursor: pointer;
            text-align: center;
            font-size: 0.98rem;
            font-weight: 600;
            color: #2563eb;
            transition: all 0.2s;
            position: relative;
            box-shadow: none;
        }

        .status-button.active {
            background: #2563eb;
            color: #fff;
            border-color: #2563eb;
        }

        .status-button.scgj {
            border-color: #0ea5e9;
        }

        .status-button.scgj.active {
            background: #0ea5e9;
            border-color: #0ea5e9;
        }

        .status-button.queue {
            border-color: #64748b;
        }

        .status-button.queue.active {
            background: #64748b;
            border-color: #64748b;
        }

        .status-button.no-in {
            border-color: #f59e42;
        }

        .status-button.no-in.active {
            background: #f59e42;
            border-color: #f59e42;
        }

        .status-button.no-out {
            border-color: #a78bfa;
        }

        .status-button.no-out.active {
            background: #a78bfa;
            border-color: #a78bfa;
        }

        .data-table {
            background: #fff;
            border-radius: 12px;
            overflow-x: auto;
            box-shadow: 0 2px 8px rgba(60,72,88,0.04);
            margin-top: 10px;
            border: 1px solid #e5e7eb;
            padding: 0;
            height: 50vh;
            min-height: 350px;
            max-height: 50vh;
            display: flex;
            flex-direction: column;
            margin-left: 32px;
            margin-right: 32px;
        }
        .data-table table {
            height: 100%;
        }
        .data-table tbody {
            display: block;
            overflow-y: auto;
            max-height: calc(50vh - 60px);
        }
        .data-table thead, .data-table tbody tr {
            display: table;
            width: 100%;
            table-layout: fixed;
        }

        .table-header {
            background: #2563eb;
            color: #fff;
            padding: 10px 0px; /* Remove side padding so header aligns with table */
            font-weight: 700;
            font-size: 1.08rem;
            font-family: 'Segoe UI', Arial, sans-serif;
            letter-spacing: 0.5px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            table-layout: fixed;
        }

        th, td {
            padding: 8px 4px; /* Reduce side padding for all cells */
            text-align: left;
            border-bottom: 1px solid #e5e7eb;
            font-size: 0.98rem;
            font-family: 'Segoe UI', Arial, sans-serif;
            background: #fff;
            position: relative;
            z-index: 1;
        }

        th:last-child, td:last-child {
            padding-right: 0; /* Remove right padding for last column */
        }

        th {
            background: #f4f6fa;
            font-weight: 700;
            color: #2563eb;
            z-index: 2;
        }

        tr:hover td {
            background: #e3e7ef;
            color: #222;
        }

        td {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 110px;
        }

        td:last-child {
            max-width: 60px;
            text-align: center;
        }

        .status-badge {
            padding: 3px 8px;
            border-radius: 10px;
            font-size: 0.92rem;
            font-weight: 500;
        }

        .status-match {
            background: #e0f7fa;
            color: #2563eb;
        }

        .status-no-match {
            background: #ffe4e6;
            color: #b91c1c;
        }

        .status-hh {
            background: #e0e7ff;
            color: #2563eb;
        }

        .status-bh {
            background: #fef9c3;
            color: #b45309;
        }

        .detail-button {
            background: #2563eb;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.92rem;
            transition: all 0.2s;
            box-shadow: none;
        }

        .detail-button:hover {
            background: #1d4ed8;
            transform: translateY(-1px) scale(1.05);
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 10px;
            margin-bottom: 16px;
            margin-left: 32px;
            margin-right: 32px;
        }

        .stat-card {
            padding: 14px 0 10px 0;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 2px 8px rgba(60,72,88,0.04);
            border: 1px solid #e5e7eb;
            transition: transform 0.15s, box-shadow 0.15s;
        }

        .stat-card.total-truck {
            background: #e0f2fe;
        }

        .stat-card.truck-active {
            background: #dcfce7;
        }

        .stat-card.truck-inactive {
            background: #fee2e2;
        }

        .stat-card.hh {
            background: #ede9fe;
        }

        .stat-card.bh-matching {
            background: #fef9c3;
        }

        .stat-card.no-assign {
            background: #f0f9ff;
        }

        .stat-card h4 {
            color: #2563eb;
            font-size: 0.98rem;
            margin-bottom: 4px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .stat-card .number {
            font-size: 1.5rem;
            font-weight: 700;
            color: #222;
            text-shadow: none;
        }

        .stat-card:hover {
            transform: translateY(-2px) scale(1.03);
            box-shadow: 0 4px 16px rgba(60,72,88,0.08);
        }

        @media (max-width: 1200px) {
            .main-container {
                flex-direction: column;
                height: auto;
            }
            
            .map-section {
                height: 340px;
            }
            
            .filter-row {
                grid-template-columns: 1fr;
            }
            
            .status-filter {
                grid-template-columns: 1fr;
            }
        }
        @media (max-width: 900px) {
            .filters-section,
            .stats-grid,
            .data-table {
                margin-left: 8px;
                margin-right: 8px;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <div style="display: flex; align-items: center; gap: 18px;">
            <img src="SCGJWD_Logo.png" alt="SCGJWD Logo" style="height: 64px; width: auto; background: #fff; border-radius: 14px; padding: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.10); display: inline-block; vertical-align: middle;">
            <div>
                <h1 style="display: inline-block; vertical-align: middle; margin: 0;">Overall Networking Dashboard HH : BH Matching</h1>
                <p style="margin: 4px 0 0 0; color: #f3e8ff; font-size: 1rem; font-weight: 400; text-shadow: 0 1px 6px #a18cd1cc;">Visualize and manage truck-carrier matching in logistics transportation activities</p>
            </div>
        </div>
        <div class="mockup-badge">Mockup</div>
    </div>

    <!-- Section 1: Thailand Networking Map (Top) -->
    <div class="map-section" style="margin-bottom: 32px;">
        <div class="map-bg">
            <div style="width:100%;display:flex;flex-direction:column;align-items:center;">
                <div class="map-topic">🗺️ Thailand Networking Map (แสดงงาน)</div>
                <div class="map-embed-container" style="height: 100%; min-height: 400px;">
                    <!-- Google Maps Embed for Thailand -->
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54301894.393137775!2d73.499413!3d13.736717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed1c1b7a6b1%3A0x40100b25de28a60!2sThailand!5e0!3m2!1sen!2sth!4v1716440000000!5m2!1sen!2sth"
                        style="width: 100%; height: 100%; min-height: 400px; border:0; border-radius: 12px; display: block;"
                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>

    <!-- Section 2: Filters (Head-Haul & Back-Haul) -->
    <div class="filters-section" style="margin-bottom: 32px;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 0;">
            <div class="hh-filters">
                <h3>Head-Haul Filters</h3>
                
                <div class="filter-row">
                    <div class="filter-item">
                        <label>Date</label>
                        <input type="date" id="hh-date-filter" value="2025-05-22">
                    </div>
                    <div class="filter-item">
                        <label>Truck Type</label>
                        <select id="hh-truck-type">
                            <option>Select Truck Type</option>
                            <option>6 ล้อ</option>
                            <option>8 ล้อ</option>
                            <option>10 ล้อ</option>
                            <option>18 ล้อ</option>
                            <option>รถตู้ 20 ฟุต</option>
                            <option>รถตู้ 40 ฟุต</option>
                        </select>
                    </div>
                </div>

                <div class="filter-row">
                    <div class="filter-item">
                        <label>Head-Haul Zone</label>
                        <select id="hh-zone">
                            <option>Select Zone</option>
                            <option>ภาคกลาง</option>
                            <option>ภาคเหนือ</option>
                            <option>ภาคใต้</option>
                            <option>ภาคตะวันออกเฉียงเหนือ</option>
                            <option>ภาคตะวันออก</option>
                            <option>ภาคตะวันตก</option>
                        </select>
                    </div>
                    <div class="filter-item">
                        <label>Province</label>
                        <select id="hh-province">
                            <option>Select Province</option>
                            <option>กรุงเทพมหานคร</option>
                            <option>กระบี่</option>
                            <option>กาญจนบุรี</option>
                            <option>กาฬสินธุ์</option>
                            <option>กำแพงเพชร</option>
                            <option>ขอนแก่น</option>
                            <option>จันทบุรี</option>
                            <option>ฉะเชิงเทรา</option>
                            <option>ชลบุรี</option>
                            <option>ชัยนาท</option>
                            <option>ชัยภูมิ</option>
                            <option>ชุมพร</option>
                            <option>เชียงราย</option>
                            <option>เชียงใหม่</option>
                            <option>ตรัง</option>
                            <option>ตราด</option>
                            <option>ตาก</option>
                            <option>นครนายก</option>
                            <option>นครปฐม</option>
                            <option>นครพนม</option>
                            <option>นครราชสีมา</option>
                            <option>นครศรีธรรมราช</option>
                            <option>นครสวรรค์</option>
                            <option>นนทบุรี</option>
                            <option>นราธิวาส</option>
                            <option>น่าน</option>
                            <option>บึงกาฬ</option>
                            <option>บุรีรัมย์</option>
                            <option>ปทุมธานี</option>
                            <option>ประจวบคีรีขันธ์</option>
                            <option>ปราจีนบุรี</option>
                            <option>ปัตตานี</option>
                            <option>พระนครศรีอยุธยา</option>
                            <option>พะเยา</option>
                            <option>พังงา</option>
                            <option>พัทลุง</option>
                            <option>พิจิตร</option>
                            <option>พิษณุโลก</option>
                            <option>เพชรบุรี</option>
                            <option>เพชรบูรณ์</option>
                            <option>แพร่</option>
                            <option>พะเยา</option>
                            <option>ภูเก็ต</option>
                            <option>มหาสารคาม</option>
                            <option>มุกดาหาร</option>
                            <option>แม่ฮ่องสอน</option>
                            <option>ยโสธร</option>
                            <option>ยะลา</option>
                            <option>ร้อยเอ็ด</option>
                            <option>ระนอง</option>
                            <option>ระยอง</option>
                            <option>ราชบุรี</option>
                            <option>ลพบุรี</option>
                            <option>ลำปาง</option>
                            <option>ลำพูน</option>
                            <option>เลย</option>
                            <option>ศรีสะเกษ</option>
                            <option>สกลนคร</option>
                            <option>สงขลา</option>
                            <option>สตูล</option>
                            <option>สมุทรปราการ</option>
                            <option>สมุทรสงคราม</option>
                            <option>สมุทรสาคร</option>
                            <option>สระแก้ว</option>
                            <option>สระบุรี</option>
                            <option>สิงห์บุรี</option>
                            <option>สุโขทัย</option>
                            <option>สุพรรณบุรี</option>
                            <option>สุราษฎร์ธานี</option>
                            <option>สุรินทร์</option>
                            <option>หนองคาย</option>
                            <option>หนองบัวลำภู</option>
                            <option>อ่างทอง</option>
                            <option>อำนาจเจริญ</option>
                            <option>อุดรธานี</option>
                            <option>อุตรดิตถ์</option>
                            <option>อุทัยธานี</option>
                            <option>อุบลราชธานี</option>
                        </select>
                    </div>
                </div>

                <div class="filter-row">
                    <div class="filter-item" style="grid-column: span 2;">
                        <label>Amphur (District)</label>
                        <select id="hh-amphur">
                            <option>Select Amphur(District)</option>
                        </select>
                    </div>
                </div>

                <button style="background: #6366f1; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: 500; cursor: pointer; margin-top: 15px; width: 100%;" onclick="resetFilters('hh')">Reset Head-Haul Filters</button>
            </div>

            <div class="bh-filters">
                <h3>Back-Haul Filters</h3>
                
                <div class="filter-row">
                    <div class="filter-item">
                        <label>Date</label>
                        <input type="date" id="bh-date-filter" value="2025-05-22">
                    </div>
                    <div class="filter-item">
                        <label>Truck Type</label>
                        <select id="bh-truck-type">
                            <option>Select Truck Type</option>
                            <option>6 ล้อ</option>
                            <option>8 ล้อ</option>
                            <option>10 ล้อ</option>
                            <option>18 ล้อ</option>
                            <option>รถตู้ 20 ฟุต</option>
                            <option>รถตู้ 40 ฟุต</option>
                        </select>
                    </div>
                </div>

                <div class="filter-row">
                    <div class="filter-item">
                        <label>Back-Haul Zone</label>
                        <select id="bh-zone">
                            <option>Select Zone</option>
                            <option>ภาคกลาง</option>
                            <option>ภาคเหนือ</option>
                            <option>ภาคใต้</option>
                            <option>ภาคตะวันออกเฉียงเหนือ</option>
                            <option>ภาคตะวันออก</option>
                            <option>ภาคตะวันตก</option>
                        </select>
                    </div>
                    <div class="filter-item">
                        <label>Province</label>
                        <select id="bh-province">
                            <option>Select Province</option>
                            <option>กรุงเทพมหานคร</option>
                            <option>กระบี่</option>
                            <option>กาญจนบุรี</option>
                            <option>กาฬสินธุ์</option>
                            <option>กำแพงเพชร</option>
                            <option>ขอนแก่น</option>
                            <option>จันทบุรี</option>
                            <option>ฉะเชิงเทรา</option>
                            <option>ชลบุรี</option>
                            <option>ชัยนาท</option>
                            <option>ชัยภูมิ</option>
                            <option>ชุมพร</option>
                            <option>เชียงราย</option>
                            <option>เชียงใหม่</option>
                            <option>ตรัง</option>
                            <option>ตราด</option>
                            <option>ตาก</option>
                            <option>นครนายก</option>
                            <option>นครปฐม</option>
                            <option>นครพนม</option>
                            <option>นครราชสีมา</option>
                            <option>นครศรีธรรมราช</option>
                            <option>นครสวรรค์</option>
                            <option>นนทบุรี</option>
                            <option>นราธิวาส</option>
                            <option>น่าน</option>
                            <option>บึงกาฬ</option>
                            <option>บุรีรัมย์</option>
                            <option>ปทุมธานี</option>
                            <option>ประจวบคีรีขันธ์</option>
                            <option>ปราจีนบุรี</option>
                            <option>ปัตตานี</option>
                            <option>พระนครศรีอยุธยา</option>
                            <option>พะเยา</option>
                            <option>พังงา</option>
                            <option>พัทลุง</option>
                            <option>พิจิตร</option>
                            <option>พิษณุโลก</option>
                            <option>เพชรบุรี</option>
                            <option>เพชรบูรณ์</option>
                            <option>แพร่</option>
                            <option>พะเยา</option>
                            <option>ภูเก็ต</option>
                            <option>มหาสารคาม</option>
                            <option>มุกดาหาร</option>
                            <option>แม่ฮ่องสอน</option>
                            <option>ยโสธร</option>
                            <option>ยะลา</option>
                            <option>ร้อยเอ็ด</option>
                            <option>ระนอง</option>
                            <option>ระยอง</option>
                            <option>ราชบุรี</option>
                            <option>ลพบุรี</option>
                            <option>ลำปาง</option>
                            <option>ลำพูน</option>
                            <option>เลย</option>
                            <option>ศรีสะเกษ</option>
                            <option>สกลนคร</option>
                            <option>สงขลา</option>
                            <option>สตูล</option>
                            <option>สมุทรปราการ</option>
                            <option>สมุทรสงคราม</option>
                            <option>สมุทรสาคร</option>
                            <option>สระแก้ว</option>
                            <option>สระบุรี</option>
                            <option>สิงห์บุรี</option>
                            <option>สุโขทัย</option>
                            <option>สุพรรณบุรี</option>
                            <option>สุราษฎร์ธานี</option>
                            <option>สุรินทร์</option>
                            <option>หนองคาย</option>
                            <option>หนองบัวลำภู</option>
                            <option>อ่างทอง</option>
                            <option>อำนาจเจริญ</option>
                            <option>อุดรธานี</option>
                            <option>อุตรดิตถ์</option>
                            <option>อุทัยธานี</option>
                            <option>อุบลราชธานี</option>
                        </select>
                    </div>
                </div>

                <div class="filter-row">
                    <div class="filter-item" style="grid-column: span 2;">
                        <label>Amphur (District)</label>
                        <select id="bh-amphur">
                            <option>Select Amphur</option>
                        </select>
                    </div>
                </div>

                <button style="background: #6366f1; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: 500; cursor: pointer; margin-top: 15px; width: 100%;" onclick="resetFilters('bh')">Reset Back-Haul Filters</button>
            </div>
        </div>
    </div>

    <!-- Section 3: Card Number Visualizer -->
    <div class="stats-grid" style="margin-bottom: 32px;">
        <div class="stat-card total-truck">
            <h4><span style="font-size:1.2em;vertical-align:middle;">🚚</span> Total Truck</h4>
            <div class="number">247</div>
            <div style="font-size:0.92em; margin-top:4px; color:#0284c7; font-weight:500;"></div>
        </div>
        <div class="stat-card truck-active">
            <h4><span style="font-size:1.2em;vertical-align:middle;">🟢</span> Active</h4>
            <div class="number">189</div>
            <div style="font-size:0.92em; margin-top:4px; color:#22c55e; font-weight:500;"></div>
        </div>
        <div class="stat-card truck-inactive">
            <h4><span style="font-size:1.2em;vertical-align:middle;">🔴</span> Inactive</h4>
            <div class="number">58</div>
            <div style="font-size:0.92em; margin-top:4px; color:#ef4444; font-weight:500;"></div>
        </div>
        <div class="stat-card hh">
            <h4><span style="font-size:1.2em;vertical-align:middle;">🅷</span> HH</h4>
            <div class="number">95</div>
            <div style="font-size:0.92em; margin-top:4px; color:#7c3aed; font-weight:500;"></div>
        </div>
        <div class="stat-card bh-matching">
            <h4><span style="font-size:1.2em;vertical-align:middle;">🅱️</span> BH</h4>
            <div class="number">72</div>
            <div style="font-size:0.92em; margin-top:4px; color:#eab308; font-weight:500;"></div>
        </div>
        <div class="stat-card no-assign">
            <h4><span style="font-size:1.2em;vertical-align:middle;">📋</span> No Assign</h4>
            <div class="number">23</div>
            <div style="font-size:0.92em; margin-top:4px; color:#0ea5e9; font-weight:500;"></div>
        </div>
    </div>

    <!-- Section 4: Truck Matching Details Table -->
    <div class="data-table">
        <div class="table-header">Truck Matching Details</div>
        <table>
            <thead>
                <tr>
                    <th>ลำดับ</th>
                    <th>ทะเบียนรถ</th>
                    <th>ผู้รับเหมา</th>
                    <th>Load HH</th>
                    <th>Load BH</th>
                    <th>Assign</th>
                    <th>Status</th>
                    <th>Detail</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>76กข4647</td>
                    <td>กท001</td>
                    <td>BKK-SRB</td>
                    <td>SRB-BKK</td>
                    <td><span class="status-badge status-match">Match</span></td>
                    <td><span class="status-badge status-bh">BH</span></td>
                    <td><button class="detail-button"onclick="showDetails(1)">Click</button></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>23กข5380</td>
                    <td>กท002</td>
                    <td>BKK-CNX</td>
                    <td>-</td>
                    <td><span class="status-badge status-no-match">No Match</span></td>
                    <td><span class="status-badge status-hh">HH</span></td>
                    <td><button class="detail-button"onclick="showDetails(2)">Click</button></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>12กข2441</td>
                    <td>กท003</td>
                    <td>SRB-HKT</td>
                    <td>HKT-BKK</td>
                    <td><span class="status-badge status-match">Match</span></td>
                    <td><span class="status-badge status-hh">HH</span></td>
                    <td><button class="detail-button"onclick="showDetails(3)">Click</button></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>16กข3924</td>
                    <td>กท004</td>
                    <td>BKK-KKC</td>
                    <td>KKC-BKK</td>
                    <td><span class="status-badge status-match">Match</span></td>
                    <td><span class="status-badge status-bh">BH</span></td>
                    <td><button class="detail-button"onclick="showDetails(4)">Click</button></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>25กข2408</td>
                    <td>กท005</td>
                    <td>CNX-BKK</td>
                    <td>-</td>
                    <td><span class="status-badge status-no-match">No Match</span></td>
                    <td><span class="status-badge status-hh">HH</span></td>
                    <td><button class="detail-button"onclick="showDetails(5)">Click</button></td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>74กข1234</td>
                    <td>กท006</td>
                    <td>BKK-SGK</td>
                    <td>SGK-SRB</td>
                    <td><span class="status-badge status-match">Match</span></td>
                    <td><span class="status-badge status-bh">BH</span></td>
                    <td><button class="detail-button"onclick="showDetails(6)">Click</button></td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>78กข2402</td>
                    <td>กท007</td>
                    <td>SRB-CNX</td>
                    <td>-</td>
                    <td><span class="status-badge status-no-match">No Match</span></td>
                    <td><span class="status-badge status-hh">HH</span></td>
                    <td><button class="detail-button"onclick="showDetails(7)">Click</button></td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>45กข1239</td>
                    <td>กท008</td>
                    <td>BKK-KKC</td>
                    <td>KKC-CNX</td>
                    <td><span class="status-badge status-match">Match</span></td>
                    <td><span class="status-badge status-bh">BH</span></td>
                    <td><button class="detail-button"onclick="showDetails(8)">Click</button></td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>1076กย2346</td>
                    <td>กท009</td>
                    <td>HKT-BKK</td>
                    <td>BKK-SRB</td>
                    <td><span class="status-badge status-match">Match</span></td>
                    <td><span class="status-badge status-hh">HH</span></td>
                    <td><button class="detail-button"onclick="showDetails(9)">Click</button></td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>13ดน4239</td>
                    <td>กท010</td>
                    <td>CNX-KKC</td>
                    <td>-</td>
                    <td><span class="status-badge status-no-match">No Match</span></td>
                    <td><span class="status-badge status-hh">HH</span></td>
                    <td><>Click</button></td>
                </tr>
            </tbody>
        </table>
    </div>

    <script>
        // Full province to amphur mapping for all 77 provinces
var provinceToAmphur = {
    'กรุงเทพมหานคร': ['เขตพระนคร', 'เขตดุสิต', 'เขตหนองจอก', 'เขตบางรัก', 'เขตบางเขน', 'เขตบางกะปิ', 'เขตปทุมวัน', 'เขตป้อมปราบศัตรูพ่าย', 'เขตพระโขนง', 'เขตมีนบุรี', 'เขตลาดกระบัง', 'เขตยานนาวา', 'เขตสัมพันธวงศ์', 'เขตพญาไท', 'เขตธนบุรี', 'เขตบางกอกใหญ่', 'เขตห้วยขวาง', 'เขตคลองสาน', 'เขตตลิ่งชัน', 'เขตบางกอกน้อย', 'เขตบางขุนเทียน', 'เขตภาษีเจริญ', 'เขตหนองแขม', 'เขตราษฎร์บูรณะ', 'เขตบางพลัด', 'เขตดินแดง', 'เขตบึงกุ่ม', 'เขตสาทร', 'เขตบางซื่อ', 'เขตจตุจักร', 'เขตบางคอแหลม', 'เขตประเวศ', 'เขตคลองเตย', 'เขตสวนหลวง', 'เขตจอมทอง', 'เขตดอนเมือง', 'เขตราชเทวี', 'เขตลาดพร้าว', 'เขตวัฒนา', 'เขตบางแค', 'เขตหลักสี่', 'เขตสายไหม', 'เขตคันนายาว', 'เขตสะพานสูง', 'เขตวังทองหลาง', 'เขตคลองสามวา', 'เขตบางนา', 'เขตทวีวัฒนา', 'เขตทุ่งครุ', 'เขตบางบอน'],
    'กระบี่': ['เมืองกระบี่', 'เขาพนม', 'เกาะลันตา', 'คลองท่อม', 'อ่าวลึก', 'ปลายพระยา', 'ลำทับ', 'เหนือคลอง'],
    'กาญจนบุรี': ['เมืองกาญจนบุรี', 'ไทรโยค', 'บ่อพลอย', 'ศรีสวัสดิ์', 'ท่ามะกา', 'ท่าม่วง', 'ทองผาภูมิ', 'สังขละบุรี', 'ด่านมะขามเตี้ย', 'หนองปรือ', 'ห้วยกระเจา'],
    'กาฬสินธุ์': ['เมืองกาฬสินธุ์', 'นามน', 'กมลาไสย', 'ร่องคำ', 'กุฉินารายณ์', 'เขาวง', 'ยางตลาด', 'ห้วยเม็ก', 'สหัสขันธ์', 'คำม่วง', 'ท่าคันโท', 'หนองกุงศรี', 'สมเด็จ', 'ห้วยผึ้ง', 'สามชัย', 'นาคู', 'ดอนจาน', 'ฆ้องชัย'],
    'กำแพงเพชร': ['เมืองกำแพงเพชร', 'ไทรงาม', 'คลองลาน', 'ขาณุวรลักษบุรี', 'คลองขลุง', 'พรานกระต่าย', 'ลานกระบือ', 'ทรายทองวัฒนา', 'ปางศิลาทอง', 'บึงสามัคคี', 'โกสัมพีนคร'],
    'ขอนแก่น': ['เมืองขอนแก่น', 'บ้านฝาง', 'พระยืน', 'หนองเรือ', 'ชุมแพ', 'สีชมพู', 'น้ำพอง', 'อุบลรัตน์', 'กระนวน', 'บ้านไผ่', 'เปือยน้อย', 'พล', 'แวงใหญ่', 'แวงน้อย', 'หนองสองห้อง', 'ภูเวียง', 'มัญจาคีรี', 'ชนบท', 'เขาสวนกวาง', 'ภูผาม่าน', 'ซำสูง', 'โคกโพธิ์ไชย', 'หนองนาคำ', 'บ้านแฮด', 'บ้านแหลม', 'โนนศิลา', 'เวียงเก่า'],
    'จันทบุรี': ['เมืองจันทบุรี', 'ขลุง', 'เกาะขาม', 'ท่าใหม่', 'สอยดาว', 'โป่งน้ำร้อน', 'มะขาม', 'เขาคิชฌกูฏ'],
    'ฉะเชิงเทรา': ['เมืองฉะเชิงเทรา', 'บางคล้า', 'บางน้ำเปรี้ยว', 'พนมสารคาม', 'ราชสาส์น', 'สนามชัยเขต', 'แปลงยาว', 'คลองเขื่อน'],
    'ชลบุรี': ['เมืองชลบุรี', 'บ้านบึง', 'หนองใหญ่', 'บางละมุง', 'พานทอง', 'ศรีราชา'],
    'ชัยนาท': ['เมืองชัยนาท', 'มโนรมย์', 'วัดสิงห์', 'สรรคบุรี', 'บรรพตพิสัย', 'เนินขาม', 'ห้วยกรด'],
    'ชัยภูมิ': ['เมืองชัยภูมิ', 'จัตุรัส', 'คอนสวรรค์', 'บำเหน็จณรงค์', 'ภูเขียว', 'ซับใหญ่', 'หนองบัวแดง', 'หนองบัวลำภู'],
    'ชุมพร': ['เมืองชุมพร', 'ท่าแซะ', 'ปะทิว', 'หลังสวน', 'พะโต๊ะ', 'สวี', 'บางสะพาน', 'บางสะพานน้อย'],
    'เชียงราย': ['เมืองเชียงราย', 'แม่สาย', 'เชียงของ', 'ดอยหลวง', 'เวียงเชียงรุ้ง', 'ป่าแดด', 'แม่จัน', 'แม่ฟ้าหลวง'],
    'เชียงใหม่': ['เมืองเชียงใหม่', 'จอมทอง', 'แม่แจ่ม', 'เชียงดาว', 'ดอยสะเก็ด', 'แม่แตง'],
    'ตรัง': ['เมืองตรัง', 'กันตัง', 'ย่านตาขาว', 'ปะเหลียน', 'รัษฎา', 'สิเกา', 'ห้วยยอด'],
    'ตราด': ['เมืองตราด', 'คลองใหญ่', 'เกาะช้าง', 'เกาะกูด', 'เกาะหมาก'],
    'ตาก': ['เมืองตาก', 'แม่สอด', 'พบพระ', 'อุ้มผาง', 'สามเงา', 'แม่ระมาด', 'ท่าสองยาง'],
    'นครนายก': ['เมืองนครนายก', 'บ้านนา', 'ปากพลี', 'องครักษ์', 'เขาพระ', 'สีคิ้ว'],
    'นครปฐม': ['เมืองนครปฐม', 'กระทุ่มแบน', 'สามพราน', 'นครชัยศรี', 'พุทธมณฑล'],
    'นครพนม': ['เมืองนครพนม', 'ท่าอุเทน', 'นครเจริญ', 'โพนสวรรค์', 'บ้านแพง', 'ศรีสงคราม', 'ดอนตาล'],
    'นครราชสีมา': ['เมืองนครราชสีมา', 'ครบุรี', 'เสิงสาง', 'คง', 'บ้านเหลื่อม', 'จักราช'],
    'นครศรีธรรมราช': ['เมืองนครศรีธรรมราช', 'ขนอม', 'ดอนสัก', 'ท่าศาลา', 'พระพรหม', 'ลานสกา', 'สิชล', 'หนองใหญ่'],
    'นครสวรรค์': ['เมืองนครสวรรค์', 'ชุมแสง', 'ตากฟ้า', 'ตากแดง', 'นครไทย', 'พยุห์', 'ลานสัก'],
    'นนทบุรี': ['เมืองนนทบุรี', 'บางกรวย', 'บางใหญ่', 'ปากเกร็ด', 'รัตนาธิเบศร์'],
    'นราธิวาส': ['เมืองนราธิวาส', 'ตากใบ', 'บาเจาะ', 'ระแงะ', 'รือเสาะ', 'สุไหงปาดี'],
    'น่าน': ['เมืองน่าน', 'เชียงกลาง', 'นาน้อย', 'บ่อเกลือ', 'ท่าวังผา', 'สว่างแดนดิน'],
    'บึงกาฬ': ['เมืองบึงกาฬ', 'เซกา', 'ปากคาด', 'บึงโขงหลง', 'โซ่พิสัย', 'สว่างแดนดิน'],
    'บุรีรัมย์': ['เมืองบุรีรัมย์', 'คูเมือง', 'กระสัง', 'นางรอง', 'ประโคนชัย', 'ลำปลายมาศ', 'สตึก', 'หนองกี่'],
    'ปทุมธานี': ['เมืองปทุมธานี', 'คลองหลวง', 'ธัญบุรี', 'ลำลูกกา', 'หนองเสือ'],
    'ประจวบคีรีขันธ์': ['เมืองประจวบคีรีขันธ์', 'บางสะพาน', 'บางสะพานน้อย', 'ปราณบุรี', 'หัวหิน', 'เดิมบางนางบวช'],
    'ปราจีนบุรี': ['เมืองปราจีนบุรี', 'บ้านสร้าง', 'บ้านเป้า', 'ประจันตคาม', 'ศรีมหาโพธิ', 'สระแก้ว'],
    'ปัตตานี': ['เมืองปัตตานี', 'ทุ่งยางแดง', 'ปะนาเระ', 'มายอ', 'ยะรัง', 'ยะหา'],
    'พระนครศรีอยุธยา': ['เมืองพระนครศรีอยุธยา', 'บางปะอิน', 'บางไทร', 'บางบาล', 'ภาชี', 'ผักไห่', 'อุทัย', 'หนองจอก'],
    'พะเยา': ['เมืองพะเยา', 'จุน', 'เชียงคำ', 'ดอกคำใต้', 'แม่ใจ', 'แม่ลาว', 'ภูซาง'],
    'พังงา': ['เมืองพังงา', 'เกาะยาว', 'ตะกั่วป่า', 'คุระบุรี', 'ปะเหลียน'],
    'พัทลุง': ['เมืองพัทลุง', 'กงหรา', 'เขาชัยสลาง', 'ปากพะยูน', 'ศรีบรรพต', 'สุโขทัย'],
    'พิจิตร': ['เมืองพิจิตร', 'ตะพานหิน', 'โพธิ์ประทับช้าง', 'วังทรายพูน', 'สามง่าม'],
    'พิษณุโลก': ['เมืองพิษณุโลก', 'บางระกำ', 'บางกระทุ่ม', 'บึงนาราง', 'พรหมพิราม', 'วังทอง', 'เนินมะปราง'],
    'เพชรบุรี': ['เมืองเพชรบุรี', 'ชะอำ', 'หัวหิน', 'ท่ายาง', 'บ้านลาด', 'บ้านแหลม'],
    'เพชรบูรณ์': ['เมืองเพชรบูรณ์', 'ชนแดน', 'บึงสามพัน', 'หนองไผ่', 'หล่มสัก', 'วิเชียรบุรี'],
    'แพร่': ['เมืองแพร่', 'ร้องกวาง', 'สูงเม่น', 'ลอง', 'เด่นชัย', 'แม่จริม'],
    'พะเยา': ['เมืองพะเยา', 'จุน', 'เชียงคำ', 'ดอกคำใต้', 'แม่ใจ', 'แม่ลาว', 'ภูซาง'],
    'ภูเก็ต': ['เมืองภูเก็ต', 'กะทู้', 'ถลาง'],
    'มหาสารคาม': ['เมืองมหาสารคาม', 'แกดำ', 'โกสุมพิสัย', 'นาดูน', 'พยัคฆภูมิ', 'วาปีปทุม'],
    'มุกดาหาร': ['เมืองมุกดาหาร', 'ดอนตาล', 'คำชะอี', 'หนองสูง', 'เมืองไผ่', 'โพนสวรรค์'],
    'แม่ฮ่องสอน': ['เมืองแม่ฮ่องสอน', 'ขุนยวม', 'ปาย', 'แม่สะเรียง', 'แม่ลาน้อย', 'สบเมย'],
    'ยโสธร': ['เมืองยโสธร', 'กุดชุม', 'ค้อวัง', 'ทรายมูล', 'ป่าติ้ว', 'พนมไพร'],
    'ยะลา': ['เมืองยะลา', 'เบตง', 'บันนังสตา', 'แม่ลาน', 'รามัน', 'สะบ้าย้อย'],
    'ร้อยเอ็ด': ['เมืองร้อยเอ็ด', 'จตุรพักตรพิมาน', 'ทุ่งเขาหลวง', 'หนองพอก', 'หนองฮี', 'เสลภูมิ'],
    'ระนอง': ['เมืองระนอง', 'กระบุรี', 'ละอุ่น', 'บางริ้น', 'พะยูน'],
    'ระยอง': ['เมืองระยอง', 'บ้านฉาง', 'ปลวกแดง', 'พัทยา', 'เขาชะเมา'],
    'ราชบุรี': ['เมืองราชบุรี', 'จอมบึง', 'ดำเนินสะดวก', 'ปากท่อ', 'โพธาราม', 'วัดเพลง'],
    'ลพบุรี': ['เมืองลพบุรี', 'บ้านหมี่', 'ลำสนธิ', 'ท่าวุ้ง', 'โคกสำโรง'],
    'ลำปาง': ['เมืองลำปาง', 'แม่ทะ', 'ลำปลายมาศ', 'งาว', 'เสริมงาม'],
    'ลำพูน': ['เมืองลำพูน', 'บ้านธิ', 'ลี้', 'ป่าซาง', 'แม่ทา'],
    'เลย': ['เมืองเลย', 'เชียงคาน', 'ด่านซ้าย', 'นาแห้ว', 'ภูหลวง'],
    'ศรีสะเกษ': ['เมืองศรีสะเกษ', 'กันทรลักษ์', 'ขุขันธ์', 'ปราสาท', 'ราษีไศล', 'วังหิน'],
    'สกลนคร': ['เมืองสกลนคร', 'กุสุมาลย์', 'พรรณานิคม', 'ภูพาน', 'วารินชำราบ'],
    'สงขลา': ['เมืองสงขลา', 'หาดใหญ่', 'ควนลัง', 'บางกล่ำ', 'สิงหนคร'],
    'สตูล': ['เมืองสตูล', 'ละงู', 'ควนโดน', 'ท่าแพ', 'หรัญญา'],
    'สมุทรปราการ': ['เมืองสมุทรปราการ', 'บางพลี', 'พระประแดง', 'เมืองสมุทรสาคร', 'คลองด่าน'],
    'สมุทรสงคราม': ['เมืองสมุทรสงคราม', 'บางคนที', 'อัมพวา', 'แม่กลอง'],
    'สมุทรสาคร': ['เมืองสมุทรสาคร', 'กระทุ่มแบน', 'บ้านแพ้ว', 'พุทธมณฑล'],
    'สระแก้ว': ['เมืองสระแก้ว', 'เขาฉกรรจ์', 'คลองหาด', 'ตาพระยา', 'วังสมบูรณ์'],
    'สระบุรี': ['เมืองสระบุรี', 'แก่งคอย', 'คูเมือง', 'หนองแค', 'พระพุทธบาท'],
    'สิงห์บุรี': ['เมืองสิงห์บุรี', 'บางระจัน', 'บางยี่ขัน', 'ป่าโมก', 'โพธิ์ทอง'],
    'สุโขทัย': ['เมืองสุโขทัย', 'คีรีมาศ', 'ตากลาง', 'ทุ่งเสลี่ยม', 'บ้านด่านลานหอย'],
    'สุพรรณบุรี': ['เมืองสุพรรณบุรี', 'เดิมบางนางบวช', 'ด่านช้าง', 'บางปลาม้า', 'สามชุก'],
    'สุราษฎร์ธานี': ['เมืองสุราษฎร์ธานี', 'กาญจนดิษฐ์', 'ดอนสัก', 'พุนพิน', 'เกาะสมุย'],
    'สุรินทร์': ['เมืองสุรินทร์', 'ชุมพลบุรี', 'คูเมือง', 'ปราสาท', 'สังขะ'],
    'หนองคาย': ['เมืองหนองคาย', 'ท่าบ่อ', 'โพนพิสัย', 'สระใคร', 'หนองหาน'],
    'หนองบัวลำภู': ['เมืองหนองบัวลำภู', 'โนนสัง', 'หนองบัว', 'หนองบัวแดง'],
    'อ่างทอง': ['เมืองอ่างทอง', 'บางเสาธง', 'ค่ายบางระจัน', 'โพธิ์ทอง'],
    'อำนาจเจริญ': ['เมืองอำนาจเจริญ', 'ชานุมาน', 'ปทุมราชวงศา', 'พนา', 'ราษฎร์บูรณะ'],
    'อุดรธานี': ['เมืองอุดรธานี', 'กุดจับ', 'หนองแสง', 'วังสามหมอ', 'บ้านดุง'],
    'อุตรดิตถ์': ['เมืองอุตรดิตถ์', 'ทองแสนขัน', 'ฟากท่า', 'บ้านโคก'],
    'อุทัยธานี': ['เมืองอุทัยธานี', 'บ้านไร่', 'หนองขาหย่าง', 'สว่างอารมณ์'],
    'อุบลราชธานี': ['เมืองอุบลราชธานี', 'เขมราฐ', 'เดชอุดม', 'ตระการพืชผล', 'สิรินธร'],
};

function populateAmphurDropdown(provinceSelectId, amphurSelectId) {
    const province = document.getElementById(provinceSelectId).value;
    const amphurSelect = document.getElementById(amphurSelectId);
    amphurSelect.innerHTML = '<option>Select Amphur</option>';
    if (provinceToAmphur[province]) {
        provinceToAmphur[province].forEach(amphur => {
            const opt = document.createElement('option');
            opt.value = amphur;
            opt.textContent = amphur;
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
        document.getElementById('bh-zone').selectedIndex = 0;
        document.getElementById('bh-province').selectedIndex = 0;
        document.getElementById('bh-amphur').innerHTML = '<option>Select Amphur</option>';
        document.getElementById('bh-product-type').selectedIndex = 0;
        document.getElementById('bh-plant').selectedIndex = 0;
    }
    updateFilters();
}

// Zone to Province mapping for Head-Haul
const hhZoneToProvince = {
    'ภาคกลาง': [
        'กรุงเทพมหานคร','กาญจนบุรี','ชัยนาท','นครนายก','นครปฐม','นครสวรรค์','นนทบุรี','ปทุมธานี','พระนครศรีอยุธยา','ราชบุรี','ลพบุรี','สมุทรปราการ','สมุทรสงคราม','สมุทรสาคร','สิงห์บุรี','สุโขทัย','สุพรรณบุรี','อ่างทอง','อุทัยธานี','เพชรบุรี','ประจวบคีรีขันธ์'
    ],
    'ภาคเหนือ': [
        'เชียงราย','เชียงใหม่','น่าน','พะเยา','แพร่','แม่ฮ่องสอน','ลำปาง','ลำพูน','อุตรดิตถ์','ตาก','กำแพงเพชร','พิษณุโลก','พิจิตร','สุโขทัย'
    ],
    'ภาคใต้': [
        'กระบี่','ชุมพร','ตรัง','นครศรีธรรมราช','นราธิวาส','ปัตตานี','พังงา','พัทลุง','ภูเก็ต','ระนอง','สตูล','สงขลา','สุราษฎร์ธานี','ยะลา'
    ],
    'ภาคตะวันออกเฉียงเหนือ': [
        'กาฬสินธุ์','ขอนแก่น','ชัยภูมิ','นครพนม','นครราชสีมา','บึงกาฬ','บุรีรัมย์','มหาสารคาม','มุกดาหาร','ยโสธร','ร้อยเอ็ด','เลย','ศรีสะเกษ','สกลนคร','สุรินทร์','หนองคาย','หนองบัวลำภู','อำนาจเจริญ','อุดรธานี','อุบลราชธานี'
    ],
    'ภาคตะวันออก': [
        'จันทบุรี','ฉะเชิงเทรา','ชลบุรี','ตราด','ปราจีนบุรี','ระยอง','สระแก้ว'
    ],
    'ภาคตะวันตก': [
        'กาญจนบุรี','ตาก','ประจวบคีรีขันธ์','เพชรบุรี','ราชบุรี'
    ]
};

// Save all province options for reset
const hhProvinceSelect = document.getElementById('hh-province');
const allHHProvinceOptions = Array.from(hhProvinceSelect.options).map(opt => ({value: opt.value, text: opt.text}));

function filterHHProvinceByZone() {
    const zone = document.getElementById('hh-zone').value;
    const provinceSelect = document.getElementById('hh-province');
    const amphurSelect = document.getElementById('hh-amphur');
    provinceSelect.innerHTML = '';
    amphurSelect.innerHTML = '<option>Select Amphur</option>';
    if (hhZoneToProvince[zone]) {
        provinceSelect.appendChild(new Option('Select Province', 'Select Province'));
        allHHProvinceOptions.forEach(opt => {
            if (hhZoneToProvince[zone].includes(opt.value)) {
                provinceSelect.appendChild(new Option(opt.text, opt.value));
            }
        });
    } else {
        // Restore all
        allHHProvinceOptions.forEach(opt => {
            provinceSelect.appendChild(new Option(opt.text, opt.value));
        });
    }
}

document.getElementById('hh-zone').addEventListener('change', function() {
    filterHHProvinceByZone();
    // Reset province and amphur selection
    document.getElementById('hh-province').selectedIndex = 0;
    document.getElementById('hh-amphur').innerHTML = '<option>Select Amphur</option>';
    updateFilters();
});

// Zone to Province mapping for Back-Haul
const bhZoneToProvince = {
    'ภาคกลาง': [
        'กรุงเทพมหานคร','นนทบุรี','ปทุมธานี','สมุทรปราการ','สมุทรสาคร','สมุทรสงคราม','นครปฐม','พระนครศรีอยุธยา','สระบุรี','ลพบุรี','อ่างทอง','สิงห์บุรี','ชัยนาท','สุพรรณบุรี'
    ],
    'ภาคเหนือ': [
        'เชียงราย','เชียงใหม่','น่าน','พะเยา','แพร่','แม่ฮ่องสอน','ลำปาง','ลำพูน','อุตรดิตถ์','ตาก','กำแพงเพชร','พิษณุโลก','พิจิตร','สุโขทัย'
    ],
    'ภาคใต้': [
        'กระบี่','ชุมพร','ตรัง','นครศรีธรรมราช','นราธิวาส','ปัตตานี','พังงา','พัทลุง','ภูเก็ต','ระนอง','สตูล','สงขลา','สุราษฎร์ธานี','ยะลา'
    ],
    'ภาคตะวันออกเฉียงเหนือ': [
        'กาฬสินธุ์','ขอนแก่น','ชัยภูมิ','นครพนม','นครราชสีมา','บึงกาฬ','บุรีรัมย์','มหาสารคาม','มุกดาหาร','ยโสธร','ร้อยเอ็ด','เลย','ศรีสะเกษ','สกลนคร','สุรินทร์','หนองคาย','หนองบัวลำภู','อำนาจเจริญ','อุดรธานี','อุบลราชธานี'
    ],
    'ภาคตะวันออก': [
        'จันทบุรี','ฉะเชิงเทรา','ชลบุรี','ตราด','ปราจีนบุรี','ระยอง','สระแก้ว'
    ],
    'ภาคตะวันตก': [
        'กาญจนบุรี','ตาก','ประจวบคีรีขันธ์','เพชรบุรี','ราชบุรี'
    ]
};

// Save all province options for reset (Back-Haul)
const bhProvinceSelect = document.getElementById('bh-province');
const allBHProvinceOptions = Array.from(bhProvinceSelect.options).map(opt => ({value: opt.value, text: opt.text}));

function filterBHProvinceByZone() {
    const zone = document.getElementById('bh-zone').value;
    const provinceSelect = document.getElementById('bh-province');
    const amphurSelect = document.getElementById('bh-amphur');
    provinceSelect.innerHTML = '';
    amphurSelect.innerHTML = '<option>Select Amphur</option>';
    if (bhZoneToProvince[zone]) {
        provinceSelect.appendChild(new Option('Select Province', 'Select Province'));
        allBHProvinceOptions.forEach(opt => {
            if (bhZoneToProvince[zone].includes(opt.value)) {
                provinceSelect.appendChild(new Option(opt.text, opt.value));
            }
        });
    } else {
        // Restore all
        allBHProvinceOptions.forEach(opt => {
            provinceSelect.appendChild(new Option(opt.text, opt.value));
        });
    }
}

document.getElementById('bh-zone').addEventListener('change', function() {
    filterBHProvinceByZone();
    // Reset province and amphur selection
    document.getElementById('bh-province').selectedIndex = 0;
    document.getElementById('bh-amphur').innerHTML = '<option>Select Amphur</option>';
    updateFilters();
});
    </script>
</body>
</html>
