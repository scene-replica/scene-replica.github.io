const purchase_obj_links = {
	'master chef can':	'https://www.amazon.com/Maxwell-Medium-Ground-Coffee-Canister/dp/B00MBEJFQS/ref=sr_1_2_sspa?crid=23XMMDAHV50PV&keywords=maxwell+house+coffee+ground+original+roast&qid=1679460590&rdc=1&s=home-garden&sprefix=maxwell+house+coffee+ground+original+roast%2Cgarden%2C88&sr=1-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExUTRXTkFWQUdNM0wwJmVuY3J5cHRlZElkPUExMDM2NDI3MThZRFI1TFQxVDNUVyZlbmNyeXB0ZWRBZElkPUEwNTY2NDk4M0RHSDJSWjdGS0NWRCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
    'banana':	'https://www.amazon.com/Melissa-Doug-Playtime-Produce-Fruits/dp/B001613Q8A/ref=sr_1_66?keywords=plastic+fruit+set&qid=1679461525&sr=8-66',
    'sugar box':	'https://www.amazon.com/Domino-Premium-Pure-Granulated-Sugar/dp/B003WBSTUC/ref=sr_1_12?keywords=domino+sugar&qid=1679461740&sprefix=domino+su%2Caps%2C104&sr=8-12',
    'Bow and mug':	'https://www.homedepot.com/p/Coleman-Enamel-Dinnerware-Set-in-Red-24-Piece-2000016407/316118493',
    'sissors':	'https://www.amazon.com/Westcott-13901-Straight-Titanium-Scissors/dp/B000P0LNRE/ref=sr_1_1_sspa?keywords=scissors+westcott&qid=1679462654&sprefix=sissors+west%2Caps%2C107&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExTFJFTFRRWlpITTdVJmVuY3J5cHRlZElkPUExMDE4NzUxMVJMVjRSTlRBODZURCZlbmNyeXB0ZWRBZElkPUEwODA3ODg2MUhYMVJRSzgwQ05ISyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
    'power drill':	'https://www.amazon.com/BLACK-DECKER-BDCD8HDPK-Home-Project/dp/B079WGV6FB/ref=sr_1_8?keywords=power+drill+black+and+decker&qid=1679463158&sprefix=powerdrill+bl%2Caps%2C108&sr=8-8',
    'clamp':	'https://www.amazon.com/gp/product/B07NS3MC73/ref=ppx_od_dt_b_asin_title_s00?ie=UTF8&psc=1',
    'mustard bottle':	'https://www.amazon.com/Frenchs-Classic-Yellow-Mustard-Natural/dp/B000WG65W4/ref=sr_1_19_f3_0o_fs_sspa?keywords=mustard+french&qid=1679519371&sprefix=mustard+fre%2Caps%2C117&sr=8-19-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzR0xENzBFNVo5N01NJmVuY3J5cHRlZElkPUEwMDkyNDg2VzZPSkNHWVlSRzAzJmVuY3J5cHRlZEFkSWQ9QTA1MTIwNjNHQ1BWT1o1SUo2TFUmd2lkZ2V0TmFtZT1zcF9tdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl',
    'cracker box':	'https://www.amazon.com/Cheez-Baked-Cheese-Crackers-Whole/dp/B003YE3TNE/ref=sr_1_1_f3?crid=3VWSYUDVOKHEB&keywords=cheeseit+12.4oz&qid=1686846895&sprefix=cheeseit+12.4oz%2Caps%2C208&sr=8-1',
    'tomato soup':	'https://www.amazon.com/Campbells-Condensed-Old-Fashioned-Tomato-Rice-Soup/dp/B006JW4STM/ref=sr_1_6?crid=113MRO5XMJ6RW&keywords=tomato+soup+can&qid=1679519457&rdc=1&sprefix=tomato+soup+can%2Caps%2C106&sr=8-6',
    'tuna can':	'https://www.amazon.com/Starkist-Sodium-Solid-Albacore-Water/dp/B01B55HPQK/ref=sxin_17_fs_dsk_ap_sira_f3_0o_fs?almBrandId=QW1hem9uIEZyZXNo&content-id=amzn1.sym.6e1b260d-d2b6-40fc-b645-33f45118201a%3Aamzn1.sym.6e1b260d-d2b6-40fc-b645-33f45118201a&crid=3IZXZOJJORQ7S&cv_ct_cx=tuna+can&fpw=alm&keywords=tuna+can&pd_rd_i=B01B55HPQK&pd_rd_r=c8b3b688-ab67-4c3c-b88e-f0d0b7a62ef6&pd_rd_w=JPdTc&pd_rd_wg=sxyk2&pf_rd_p=6e1b260d-d2b6-40fc-b645-33f45118201a&pf_rd_r=QJ6RAAGPVPYXFT86V37J&qid=1679519488&sbo=m6DjfpMzMLDmL8pSMKX8hw%3D%3D&sprefix=tuna+can%2Caps%2C104&sr=1-4-de796a8d-a42f-4211-bede-243b78faef8a',
    'gelatin box':	'https://www.amazon.com/JELL-Cherry-Gelatin-Dessert-Mix/dp/B00U6EFOVA/ref=sr_1_2_f3_wg?almBrandId=QW1hem9uIEZyZXNo&fpw=alm&keywords=jello%2BCherry%2BGelatin%2BBox&qid=1685557872&s=amazonfresh&sr=1-2&th=1',
    'pudding box':	'https://www.amazon.com/Jell-Instant-Chocolate-Pudding-Filling/dp/B000R96E54/ref=sr_1_4_f3_wg?almBrandId=QW1hem9uIEZyZXNo&fpw=alm&keywords=jello+chocolate+pudding&qid=1679519573&s=amazonfresh&sprefix=jello+ch%2Camazonfresh%2C102&sr=1-4',
    'spam can':	'https://www.amazon.com/SPAM-30074-Classic-12-oz/dp/B0014CYNCY/ref=sr_1_2_f3_wg_sspa?almBrandId=QW1hem9uIEZyZXNo&crid=3738L3X1XH2ZQ&fpw=alm&keywords=spam+can&qid=1679519594&s=amazonfresh&sprefix=spam+can%2Camazonfresh%2C108&sr=1-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExSE5IM0xFNVcxRlFSJmVuY3J5cHRlZElkPUEwODAyMTIxM01BRDJYNkNESzIzNiZlbmNyeXB0ZWRBZElkPUEwMTc0NDI0MkxQNTFMM0o0NEhURSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
    'bleach bottle':	'https://www.amazon.com/Soft-Scrub-Cleanser-Bleach-24/dp/B000RPU8R8/ref=sr_1_3_f3_wg?almBrandId=QW1hem9uIEZyZXNo&crid=1Y2P0MPSLRHCC&fpw=alm&keywords=soft+scrub&qid=1679519635&s=amazonfresh&sprefix=soft+scrub%2Camazonfresh%2C104&sr=1-3',
    'marker':	'https://www.amazon.com/80661-Low-Odor-Markers-Chisel-4-Count/dp/B0019DEBS4/ref=sr_1_7?crid=10LTCIOE98MLV&keywords=expo&qid=1679519781&sprefix=expo%2Caps%2C133&sr=8-7',
}

const white_table_cloth_link = `https://www.amazon.com/White-60x102-Rectangle-Tablecloth-6ft/dp/B07HR2MKXN/ref=sxin_15_pa_sp_search_thematic_sspa?content-id=amzn1.sym.711b623b-fef6-4340-9590-f21d01371ab3%3Aamzn1.sym.711b623b-fef6-4340-9590-f21d01371ab3&crid=383Y4PFIR44RH&cv_ct_cx=table%2Bcloth&keywords=table%2Bcloth&pd_rd_i=B07HR2MKXN&pd_rd_r=595c7c3b-618b-4d6b-a81f-3350b13a49a2&pd_rd_w=vWC7U&pd_rd_wg=Yp9LB&pf_rd_p=711b623b-fef6-4340-9590-f21d01371ab3&pf_rd_r=RRGSF3W343QPX3YPTZ71&qid=1679460021&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=table%2Bcloth%2Caps%2C106&sr=1-3-2b34d040-5c83-4b7f-ba01-15975dfb8828-spons&smid=A2Y2FQZ44I846V&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyUFEzN01VSjBZVFo3JmVuY3J5cHRlZElkPUEwNzkwMjM2MUNJSTVMM1BITjE4OSZlbmNyeXB0ZWRBZElkPUEwOTA3NzU3RkZVN0swUENPWUFaJndpZGdldE5hbWU9c3Bfc2VhcmNoX3RoZW1hdGljJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&th=1`

$(document).ready(function () {
    let tr_contents=``
    let index=1
    for(obj_link in purchase_obj_links){
        tr_contents += `<tr><td>${index}. <a href="${purchase_obj_links[obj_link]}" target="_blank">${obj_link} <span class="icon"><i class="fas fa-link"></i></span><span></a></td></tr>`
        index += 1
    }
    $('#purchase-items-body').html(tr_contents);
    $('#white-table-cloth-href').attr('href', white_table_cloth_link);
    
});