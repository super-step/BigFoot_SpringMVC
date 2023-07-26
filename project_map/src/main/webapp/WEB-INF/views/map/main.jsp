<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<article class="main_first_section">
	<div class="main_intro">여행 발자국 웹 페이지 입니다.</div>
	<div class="main_to_map">
		<img src="${rootPath}/static/image/down-arrow.png" alt="" />
	</div>
</article>
<article class="main_map_container">
	<div class="main_tabs">
		<div class="main_items">
			<div class="map_whole_img main_item">
				<div class="map_container">
					<img src="${rootPath}/static/image/map/전국지도.png"
						class="whole_map_img" usemap="#image-map" /> <img
						src="${rootPath}/static/image/map/전라남도.png" alt="" id="map_jn" />
					<img src="${rootPath}/static/image/map/광주.png" alt="" id="map_gj" />
					<img src="${rootPath}/static/image/map/전라북도.png" alt="" id="map_jb" />
					<img src="${rootPath}/static/image/map/충청남도.png" alt="" id="map_cn" />
					<img src="${rootPath}/static/image/map/대전.png" alt="" id="map_dj" />
					<img src="${rootPath}/static/image/map/세종.png" alt="" id="map_sj" />
					<img src="${rootPath}/static/image/map/충청북도.png" alt="" id="map_cb" />
					<img src="${rootPath}/static/image/map/경상남도.png" alt="" id="map_gn" />
					<img src="${rootPath}/static/image/map/부산.png" alt="" id="map_bs" />
					<img src="${rootPath}/static/image/map/대구.png" alt="" id="map_dg" />
					<img src="${rootPath}/static/image/map/경상북도.png" alt="" id="map_gb" />
					<img src="${rootPath}/static/image/map/울산.png" alt="" id="map_us" />
					<img src="${rootPath}/static/image/map/경기도.PNG" alt="" id="map_gg" />
					<img src="${rootPath}/static/image/map/서울.png" alt="" id="map_su" />
					<img src="${rootPath}/static/image/map/인천.png" alt="" id="map_ic" />
					<img src="${rootPath}/static/image/map/강원도.png" alt="" id="map_go" />
					<img src="${rootPath}/static/image/map/제주도.png" alt="" id="map_jj" />
				</div>
			</div>
		</div>
	</div>

	<map name="image-map" id="main_ImageMap">
		<area target="" alt="gj" title="gj"
			coords="223,622,192,617,177,623,172,641,194,653,219,655,233,646,238,632"
			shape="poly" data-level="1" />
		<area target="" alt="jn" title="jn"
			coords="187,614,172,624,169,640,191,655,217,659,234,648,241,631,226,620,192,613,183,601,194,586,212,586,223,596,234,588,237,611,279,616,296,608,310,622,318,645,334,679,321,691,309,692,335,705,336,751,301,741,294,700,278,710,274,724,290,747,258,771,254,763,237,752,263,722,238,724,213,742,204,763,201,782,197,821,186,817,156,821,135,813,142,784,131,742,118,765,94,773,79,759,113,735,77,735,54,699,73,673,95,651,83,638,124,622,146,582,165,609,182,601"
			shape="poly" data-level="2" />
		<area target="" alt="jb" title="jb"
			coords="150,580,165,601,189,590,199,578,222,585,237,582,242,607,276,612,296,602,312,613,321,599,318,577,335,531,368,508,363,493,337,491,299,494,287,474,253,476,245,466,226,464,221,481,177,490,183,505,216,501,196,514,183,527,159,550,190,565,167,569"
			shape="poly" data-level="2" />
		<area target="" alt="gn" title="gn"
			coords="369,517,341,533,323,577,332,597,316,621,341,683,351,693,343,707,351,728,375,732,379,713,402,723,428,733,455,745,481,714,478,691,488,672,490,657,520,648,555,622,525,601,527,585,513,582,494,592,458,583,456,572,435,582,399,568,410,555,394,532,376,532"
			shape="poly" data-level="2" />
		<area target="" alt="bs" title="bs"
			coords="555,629,528,648,498,659,491,675,519,685,541,675,561,654,568,638,565,630"
			shape="poly" data-level="1" />
		<area target="" alt="us" title="us"
			coords="545,567,531,581,526,599,547,612,561,620,577,640,582,618,600,601,599,583,586,573,562,568"
			shape="poly" data-level="1" />
		<area target="" alt="dg" title="dg"
			coords="492,502,465,511,445,516,433,558,434,573,458,565,483,559,496,529,497,514"
			shape="poly" data-level="1" />
		<area target="" alt="gb" title="gb"
			coords="403,529,414,551,407,562,429,564,440,514,491,496,504,514,488,559,463,569,494,582,522,575,542,562,583,567,594,576,618,507,595,522,583,512,600,496,588,467,603,435,601,404,613,384,597,307,573,321,497,316,463,353,452,359,437,346,409,357,404,374,388,366,368,391,382,405,368,441,397,450,390,466,369,494,372,516,381,527"
			shape="poly" data-level="2" />
		<area target="" alt="cb" title="cb"
			coords="365,489,337,482,332,450,321,447,328,420,319,403,307,402,292,371,312,358,300,327,333,310,364,289,392,291,447,283,438,298,488,313,455,350,427,341,398,359,381,364,363,391,376,407,364,447,392,453"
			shape="poly" data-level="2" />
		<area target="" alt="dj" title="dj"
			coords="303,409,296,419,285,420,281,441,291,454,307,455,318,449,321,419,318,407"
			shape="poly" data-level="1" />
		<area target="" alt="sj" title="sj"
			coords="274,362,272,379,280,412,290,414,301,402,288,368" shape="poly" data-level="1" />
		<area target="" alt="cn" title="cn"
			coords="325,455,332,481,299,486,289,468,256,468,246,458,222,459,216,473,197,477,170,456,149,401,119,341,151,304,181,292,216,305,228,327,269,316,295,329,307,353,292,365,268,357,265,376,281,422,274,443,295,459"
			shape="poly" data-level="2" />
		<area target="" alt="su" title="su"
			coords="268,181,256,185,231,195,235,215,249,227,273,232,286,222,288,207,280,185"
			shape="poly" data-level="1" />
		<area target="" alt="ic" title="ic"
			coords="213,184,198,198,203,227,221,239,229,224,231,199" shape="poly" data-level="1" />
		<area target="" alt="gg" title="gg"
			coords="234,222,222,245,209,265,216,281,238,317,270,309,295,325,362,283,382,216,344,197,341,162,355,154,352,140,335,109,315,107,289,76,224,129,203,159,197,190,218,180,231,190,273,176,290,188,295,212,279,236,254,234"
			shape="poly" data-level="2" />
		<area target="" alt="go" title="go"
			coords="291,75,316,102,340,103,364,154,344,167,349,191,388,216,369,280,386,285,455,279,445,293,568,316,595,302,598,286,552,194,499,120,474,30,453,75,428,83,377,72"
			shape="poly" data-level="2" />
		<area target="" alt="jj" title="jj"
			coords="641,680,677,656,742,647,761,662,761,676,747,696,698,709,660,711,640,695"
			shape="poly" data-level="1" />
		<area target="" alt="ud" title="ud"
			coords="643,290,643,309,672,335,678,328,667,292" shape="poly" data-level="1" />
	</map>


</article>