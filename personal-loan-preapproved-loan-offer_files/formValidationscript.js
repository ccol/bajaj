$(document).ready(function () {
	
	 $('#FRMVD input').bind("paste", function(e){
		 e.preventDefault();
	 });
	 
 function fildValidation(th,VDclass,ErrMSG){  
     if(ErrMSG){ 
	      $(th).siblings(".errormsg").text(ErrMSG);
	 }
 }
     

 //input lable transition
 
    $(".form-group label").click(function () {
        $(this).siblings("input").focus();
    });
	
    $(".form-group input").each(function () {
        $(this).on('focus', function () {
            if($(this).val() == ""){
                $(this).siblings("label").addClass("active");
             }
            
        });
        if ($(this).val() != "") {
            $(this).siblings("label").addClass("active");
        }
        $(this).on('blur', function () {
            if ($(this).val() == "") {
                $(this).siblings("label").removeClass("active");
            }

        });
    });
   
   
    
   
	
	function allFormFieldValidationCheck(ThisObj,eventType){ 
		
	      var parent = ThisObj.parents("form").attr("id");
          var error = 0;
        $("#"+parent+" "+".form-group input").each(function () {
             
            if (!$(this).hasClass("nomandetory")) {
                if (!$(this).attr('disabled')) {
                    if ($(this).val() == "") {
								
                           $(this).siblings(".errormsg").show();
                           fildValidation(this,"VDfalse");
						 
                    }
                    else {
                       					
							if ($(this).hasClass('FirstNameVD')) {
								
								  if (!/^[a-zA-Z]*$/g.test($(this).val())) {
										$(this).siblings(".errormsg").show();
										fildValidation(this,"VDfalse","Only alphabets are allowed");
										if($(this).val().indexOf(" ")!= -1){
										   $(this).siblings(".errormsg").show();
										   fildValidation(this,"VDfalse","Only alphabets are allowed");
										 }
								   }else{$(this).siblings(".errormsg").hide();}
								     minMaxLengthVD(this);
							}
							else if ($(this).hasClass('LastNameVD')) {
								 
								  if (!/^[a-zA-Z]*$/g.test($(this).val())) {
									   $(this).siblings(".errormsg").show();
										fildValidation(this,"VDfalse","Only alphabets are allowed");
								  }else{$(this).siblings(".errormsg").hide();}
								   minMaxLengthVD(this);
							}
							else if ($(this).hasClass('PinCodeVD')) {
								 
								   if(!/^[0-9]+$/.test($(this).val())){
									    $(this).siblings(".errormsg").show();
									    fildValidation(this,"VDfalse","Please enter 6 digit Pin Code, only digits");
									
									}else{$(this).siblings(".errormsg").hide();}
								 minMaxLengthVD(this);
							}
							   
							else if ($(this).hasClass('mobileVD')) {
		                       
								var value = $(this).val();
							 
								  if (value.length < 10 ||value.length > 10  ) {
									   if(eventType==1){	
										   $(this).siblings(".errormsg").show();
										   fildValidation(this,"VDfalse","Please enter your 10 digit mobile number");
									   }
									}
								   else{ 
								      if(value.indexOf('.') > -1){
									     $(this).siblings(".errormsg").show();
										   fildValidation(this,"VDfalse","Please enter your 10 digit mobile number");
										}
									  else if(value.substr(0, 1) == 9 || value.substr(0, 1) == 8 || value.substr(0, 1) == 7) { 
										  $(this).siblings(".errormsg").hide();
										  fildValidation(this,"VDtrue");
									   } else{
										   $(this).siblings(".errormsg").show();
											fildValidation(this,"VDfalse","Mobile number should start with 9 or 8 or 7");
										}
									}
		
							}
							
							else if ($(this).hasClass('datepickerVD')) { 
								if($(this).val()){
									  $(this).siblings(".errormsg").hide();
									  fildValidation(this,"VDtrue");
									  $(this).siblings("label").addClass("active");
								}
								else{
									  $(this).siblings(".errormsg").show();
									  fildValidation(this,"VDfalse");
									  $(this).siblings("label").removeClass("active");
								 }
							}
							else if ($(this).hasClass('AddressVD')) {
                                   
									var value = $(this).val();
								   if(!/[`~,.<>;':"\/\[\]\|{}()=_+-]/.test($(this).val())){
									  $(this).siblings(".errormsg").show();
									  fildValidation(this,"VDfalse","Please"); 
									}else{
										    $(this).siblings(".errormsg").hide();
											fildValidation(this,"VDtrue");
										}
								 minMaxLengthVD(this);
								 		
							}else if ($(this).hasClass('PanVD')) {
							      
								  var value = $(this).val();
								  if (value.length < 10 ||value.length > 10  ) { 
								     if(eventType==1){
									   $(this).siblings(".errormsg").show();
									   fildValidation(this,"VDfalse","PAN number should be of 10 characters");
									 }
									 error++;
								   } 
								   if(!/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/.test($(this).val())){
									   
									  $(this).siblings(".errormsg").show();
									  fildValidation(this,"VDfalse","Please enter your valid PAN number; eg: ABCHE9999A"); 
									}else{
										  $(this).siblings(".errormsg").hide();
										  fildValidation(this,"VDtrue");
									}
								
							}	
							
						  else  if ($(this).hasClass('emailVD')) {
								var a = $(this).val();
								var filter = /^[A-Za-z0-9!#$%&\'*+-/=?^_`{|}~]+@[A-Za-z0-9-]+(\.[AZa-z0-9-]+)+[A-Za-z]$/;
								if (filter.test(a)) {
										   $(this).siblings(".errormsg").hide();
										  fildValidation(this,"VDtrue");
								}
								else {
									 $(this).siblings(".errormsg").show();
									 fildValidation(this,"VDfalse","Please enter your valid email ID");
								}
							}
						
							 else  if ($(this).hasClass('numberVD')) {
							     
									if(!/^[0-9]+$/.test($(this).val())){
										 $(this).siblings(".errormsg").show();
									      fildValidation(this,"VDfalse");
										
									}
							       minMaxLengthVD(this);
							}
							else if ($(this).hasClass('FullNameVD')) {
								
								  if (!/^[a-zA-Z ]*$/g.test($(this).val())) {
									  $(this).siblings(".errormsg").show();
									   fildValidation(this,"VDfalse","Only alphabets are allowed");
									 
								  }else {$(this).siblings(".errormsg").hide();
										  fildValidation(this,"VDtrue");}
							}
                    }
              
                }
            }
            
        });
        $("#" + parent + " " + ".form-group select").each(function () {
            if (!$(this).hasClass("nomandetory")) {
                if (!$(this).attr('disabled')) {
                    if ($(this).val() == "select") {
						  $(this).siblings(".errormsg").show();
                          fildValidation(this,"VDfalse");
					 }
                    else{
                        $(this).siblings(".errormsg").hide();
                        fildValidation(this,"VDtrue");
                    }
                }
            }
        });
        
      
		
	}
	
  
	
	
 function minMaxLengthVD(th){	
   if ($(th).attr('minlength') && $(th).attr('maxlength')) { 
		var len = $(th).val().length;
		var minLen = $(th).attr('minlength');
		var maxLen = $(th).attr('maxlength');
		  
		  if (len >= minLen && len <= maxLen ) {
			  //  $(th).siblings(".errormsg").hide();
				// fildValidation(th,"VDtrue");
			}
			else if(len < minLen) {
				  $(th).siblings(".errormsg").show();
				   fildValidation(th,"VDfalse","Minimum "+minLen+" character required");
				 
           }else if(len > maxLen){
			       $(th).siblings(".errormsg").show();
				   fildValidation(th,"VDfalse","Maximum "+maxLen+" character required");
			   }
	}
  else if ($(th).attr('minlength')) { 
		var len = $(th).val().length;
		var minLen = $(th).attr('minlength');
		
		  if (len < minLen) {
				$(th).siblings(".errormsg").show();
				  fildValidation(th,"VDfalse","Minimum "+minLen+" character required");
			}
			else {
			//	$(th).siblings(".errormsg").hide();
			//	 fildValidation(th,"VDtrue");
           }
	}
   else	if ($(th).attr('maxlength')) {
		var len = $(th).val().length;
		var maxLen = $(th).attr('maxlength');
		  if (len > maxLen) {
				$(th).siblings(".errormsg").show();
				  fildValidation(th,"VDfalse","Maximum "+maxLen+" character required");
			}
			else {
			//	$(this).siblings(".errormsg").hide();
			//	 fildValidation(th,"VDtrue");
           }
	}
	
 }
	
	
	 $(".Subbutton").click(function () { 
            var ThisObj =   $(this);
			var NoError =  allFormFieldValidationCheck(ThisObj,1);
			if (NoError == 0) {
			  // ThisObj.removeAttr("disabled");
			}else{ 
				//ThisObj.attr("disabled","disabled");
			}	
    });
	
	
	
	
	
 
    $(".form-group input").blur(function () { 
             var ThisObj =   $(this);
			   
			   if (!$(this).hasClass("nomandetory")) {
                if (!$(this).attr('disabled')) {
                    if ($(this).val() == "") {
						   $(this).siblings(".errormsg").show();
                           fildValidation(this,"VDfalse");
						
                    }
                    else {
                       					
							if ($(this).hasClass('FirstNameVD')) {
								 
								  if (!/^[a-zA-Z]*$/g.test($(this).val())) {
									    $(this).siblings(".errormsg").show();
										fildValidation(this,"VDfalse","Only alphabets are allowed");
										if($(this).val().indexOf(" ")!= -1){
										   $(this).siblings(".errormsg").show();
										   fildValidation(this,"VDfalse","Space is not allowed");
										 }
								  }else{$(this).siblings(".errormsg").hide();}
								   minMaxLengthVD(this);
								  
							}
							else if ($(this).hasClass('LastNameVD')) {
								
								  if (!/^[a-zA-Z]*$/g.test($(this).val())) {
									    $(this).siblings(".errormsg").show();
										fildValidation(this,"VDfalse","Only alphabets are allowed");
								  }else{$(this).siblings(".errormsg").hide();}
								   minMaxLengthVD(this); 
							}
							else if ($(this).hasClass('PinCodeVD')) {
								
								  if(!/^[0-9]+$/.test($(this).val())){
									  $(this).siblings(".errormsg").show();
									    fildValidation(this,"VDfalse");
									}else{$(this).siblings(".errormsg").hide();}
								 minMaxLengthVD(this);
							}
							   
							else if ($(this).hasClass('mobileVD')) {
		
								var value = $(this).val();
							 
								  if (value.length < 10 ||value.length > 10  ) {
									  	   $(this).siblings(".errormsg").show();
										   fildValidation(this,"VDfalse","Please enter your 10 digit mobile number");
									}
								   else{ 
								       if(value.indexOf('.') > -1){
									       $(this).siblings(".errormsg").show();
										   fildValidation(this,"VDfalse","Please enter your 10 digit mobile number");
										}
									  else if(value.substr(0, 1) == 9 || value.substr(0, 1) == 8 || value.substr(0, 1) == 7) { 
										  $(this).siblings(".errormsg").hide();
										  fildValidation(this,"VDtrue");
									   } else{
										    $(this).siblings(".errormsg").show();
											fildValidation(this,"VDfalse","Mobile number should start with 9 or 8 or 7");
										}
									}
		
							}
							else if ($(this).hasClass('datepickerVD')) { 
								if($(this).val()){
									  $(this).siblings(".errormsg").hide();
									  fildValidation(this,"VDtrue");
									  $(this).siblings("label").addClass("active");
								}
								else{
									
									  $(this).siblings(".errormsg").show();
									  fildValidation(this,"VDfalse");
									  $(this).siblings("label").removeClass("active");
									 
								 }
							}
							else if ($(this).hasClass('AddressVD')) {
                                   	
									var value = $(this).val();
								   	
								   if(/[`~,.<>;':"\/\[\]\|{}()=_+-]/g.test($(this).val())){
									   
									  $(this).siblings(".errormsg").show();
									  fildValidation(this,"VDfalse","<>?'=+-_^`~  not allowed"); 
									}else{
										    $(this).siblings(".errormsg").hide();
											fildValidation(this,"VDtrue");
										}
								 minMaxLengthVD(this);
							}
							
							
						else if ($(this).hasClass('PanVD')) {
							var value = $(this).val();
								  if (value.length < 10 ||value.length > 10  ) { 
								     $(this).siblings(".errormsg").show();
									   fildValidation(this,"VDfalse","PAN number should be of 10 characters");
									} 
								   if(!/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/.test($(this).val())){
									   $(this).siblings(".errormsg").show();
									    fildValidation(this,"VDfalse","Please enter your valid PAN number; eg: ABCHE9999A");
									}else{
										$(this).siblings(".errormsg").hide();
										  fildValidation(this,"VDtrue");
									}
								
							}	
							
						  else  if ($(this).hasClass('emailVD')) {
								var a = $(this).val();
								var filter = /^[A-Za-z0-9!#$%&\'*+-/=?^_`{|}~]+@[A-Za-z0-9-]+(\.[AZa-z0-9-]+)+[A-Za-z]$/;
								if (filter.test(a)) {
										   $(this).siblings(".errormsg").hide();
										  fildValidation(this,"VDtrue");
								}
								else {
									
									 $(this).siblings(".errormsg").show();
									 fildValidation(this,"VDfalse","Please enter your valid email ID");
									
								}
							}
						   else  if ($(this).hasClass('numberVD')) { alert();
							       minMaxLengthVD(this);
									if(!/^[0-9]+$/.test($(this).val())){
										 $(this).siblings(".errormsg").show();
									      fildValidation(this,"VDfalse");
										
									}
										  
							   
							}else if ($(this).hasClass('FullNameVD')) {
								
								  if (!/^[a-zA-Z ]*$/g.test($(this).val())) {
									  $(this).siblings(".errormsg").show();
									   fildValidation(this,"VDfalse","Only alphabets are allowed");
									 
								  }else {$(this).siblings(".errormsg").hide();
										  fildValidation(this,"VDtrue");}
							}
                    }
              
                }
            }
			 
			
			 
	 });
	
	
    $(".form-group select").change(function () {
            
			 if (!$(this).hasClass("nomandetory")) {
                if (!$(this).attr('disabled')) {
                    if ($(this).val() == "select") {
						  $(this).siblings(".errormsg").show();
                          fildValidation(this,"VDfalse");
					 }
                    else{
                        $(this).siblings(".errormsg").hide();
                        fildValidation(this,"VDtrue");
                    }
                }
            }
			 
			 
    });
	
	

	
  
    $('.number').keypress(function (e) {
        var regex = new RegExp("^[0-9\b]*$");
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) {
            return true;
        }
        else {
            e.preventDefault();

            return false;
        }
    });
	
    $('.alpha').keypress(function (e) {
        var regex = new RegExp("^[a-zA-Z \b]+$");
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) {
            return true;
        }
        else {
            e.preventDefault();

            return false;
        }
    });
    $('.address').keypress(function (e) {
        var regex = new RegExp("^[A-Za-z0-9-, \b]+$");
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) {
             return true;
        }
        else {
            e.preventDefault();
            return false;
        }
    });
	
	
});