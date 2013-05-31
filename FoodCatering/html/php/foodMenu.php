<?php
echo "hi there!";
include 'simple_html_dom.php';

$html = file_get_html('home.html');

$cells = $html->find('td');
foreach($cells as $cell) {
    echo $cell->plaintext;
}
?>

<div id="contact">
		<div id="details">
				<p>Address:
				111, parkway ave,
				North Attleboro, MA 02760</p>
				<p>Phone no: 111-111-1111</p>
				</div>
				
					<div id="total_price">Total price:<textarea id="totalPrice" rows="1" cols="5" readonly></textarea></div>
					<p id="menu_title">Vegetarian curries :</p>
					<div id="order_menu1" class="order_menu1">
        					<select id="curries" name="Vegetarian curries">
                				<option value="Paneer butter masala">Paneer butter masala</option>
                				<option value="Mushroom curry">Mushroom curry</option>
                				<option value="Channa masala">Channa masala</option>
                				<option value="Saag paneer">Saag Paneer</option>
        					</select>
        					<select id="amount" name="amount">
        						<option value="16oz">16 Oz</option>
        						<option value="32oz">32 Oz</option>
        					</select>
        					<label>Price:<textarea id="price" name="price" rows="1" cols="4" readonly></textarea></label>
        					<label>Quantity:<input type="text" id="size" name="quantity" value="0"></label>
					</div>
					<div id="writeroot1">
						
					</div>
					<button type="button" value="add" onclick="addFields(1)" id="addFields">Add</button>
					
					<p id="menu_title">Non-veg curries :</p>
					<div id="order_menu2" class="order_menu2">
        					<select id="non-veg" name="non-veg curries">
                				<option value="Chicken curry">Chicken curry</option>
                				<option value="Mutton curry">Mutton curry</option>
                				<option value="Kongunad chicken kulambu">Kongunad chicken kulambu</option>
                				<option value="Pallipalayam chicken sukka">Pallipalayam chicken sukka</option>
                				<option value="Chettinad chicken">Chettinad chicken</option>
        					</select>
        					<select id="amount" name="amount">
        						<option value="16oz">16 Oz</option>
        						<option value="32oz">32 Oz</option>
        					</select>
        					<label>Price:<textarea id="price" name="price" rows="1" cols="4" readonly></textarea></label>
        					<label>Quantity:<input type="text" id="size" name="quantity" value="0"></label>
					</div>
					<div id="writeroot2">
						
					</div>
					<button type="button" value="add" onclick="addFields(2)" id="addFields">Add</button>
					
					<p id="menu_title">Accompaniments :</p>
					<div id="order_menu3" class="order_menu3">
        					<select id="accompaniments" name="accompaniments">
                				<option value="Dosa">Dosa</option>
                				<option value="Idli">Idli</option>
                				<option value="Chapathi">Chapathi</option>
                				<option value="Rice">Rice</option>
                				<option value="Upma">Upma</option>
        					</select>
        					<select id="amount" name="amount">
        						<option value="16oz">16 Oz</option>
        						<option value="32oz">32 Oz</option>
        					</select>
        					<label>Price:<textarea id="price" name="price" rows="1" cols="4" readonly></textarea></label>
        					<label>Quantity:<input type="text" id="size" name="quantity" value="0"></label>
					</div>
					<div id="writeroot3">
						
					</div>
					<button type="button" value="add" onclick="addFields(3)" id="addFields">Add</button>
					
					<!-- 
					<table id="c_table">
						<tr><td id="fname">First name:</td><td><input type="text" name="fName" align="right"></td>
							<td>Last name:</td><td><input type="text" name="lName" align="right"></td>
						</tr>
						<tr><td id="email">Email:</td><td><input type="text" name="email" align="right"></td></tr>
						<tr><td>Phone:</td><td><input type="text" name="phone" align="right"></td></tr>
						<tr><td>Comments:</td><td><input id="comment" type="text" name="comment" align="right"></td></tr>
					</table><br><br>
					<input id="submit" type="submit" value="Submit">
					 -->
					<!-- <button id="submit" type="button" value="Submit">Submit</button> -->
					<br><button type="button" id="next" name="next" value="Next">Next >></button>
				</div>
