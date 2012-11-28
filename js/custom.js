$(function(){
	
	$male = "<div class='sub-questions option_one'> \
				<h4>Male - Kindly check the things that you do?</h4> \
				<p><input type='checkbox' />Read Newspaper</p> \
				<p><input type='checkbox' />Play Games</p> \
				<p><input type='checkbox' />Own playing consoles</p> \
				<p><input type='checkbox' />Drive motorcycles</p> \
				<p><input type='checkbox' />Drive car</p> \
			</div>";
			
	$female = "<div class='sub-questions option_one'> \
				<h4>Female - Kindly check the things that you do?</h4> \
				<p><input type='checkbox' />Shopping</p> \
				<p><input type='checkbox' />Read Books</p> \
				<p><input type='checkbox' />Hangout</p> \
				<p><input type='checkbox' />Drive bikes</p> \
				<p><input type='checkbox' />Drive car</p> \
			</div>";
			
	$age_one = "<div class='sub-questions option_two'> \
				<h4>15 to 25</h4> \
				<p><input type='radio' name='15' />In school</p> \
				<p><input type='radio' name='15' />In college</p> \
			</div>";
			
	$age_two = "<div class='sub-questions option_two'> \
				<h4>25 to 35</h4> \
				<p><input type='radio' name='25' />Working in an office</p> \
				<p><input type='radio' name='25' />Self Employed</p> \
			</div>";
	
	$age_three = "<div class='sub-questions option_two'> \
				<h4>35 to 45</h4> \
				<p><input type='radio' name='35' />Single</p> \
				<p><input type='radio' name='35' />Married</p> \
			</div>";
	
	$('.gender').change(function(){
		if($(this).val() == "Male"){
			$('.option_one').remove();
			$(this).parent().after($male);
		} else if($(this).val() == "Female"){
			$('.option_one').remove();
			$(this).parent().after($female);
		}
	});
	
	$('.age').change(function(){
		if($(this).val() == "15-25"){
			$('.option_two').remove();
			$(this).parent().after($age_one);
		} else if($(this).val() == "25-35"){
			$('.option_two').remove();
			$(this).parent().after($age_two);
		} else if($(this).val() == "35-45"){
			$('.option_two').remove();
			$(this).parent().after($age_three);
		}
	});
	
});