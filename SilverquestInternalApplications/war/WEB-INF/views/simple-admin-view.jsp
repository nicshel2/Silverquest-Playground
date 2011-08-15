<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core" %>

<html>
<head>

<link rel="stylesheet" href="/style.css" type="text/css"></link>

</head>
<body>
    <h1>Admin Console</h1>
    
  <div>
    <div id="usefulLinks">
    
      <ul>
        <li>
           <a href="/_ah/admin/" target="_blank">Database Admin Console</a>
        </li>
      </ul>
       <form id="createForm" name="input" action="/simple-admin/createTestData" method="post" enctype="multipart/form-data">
      <ul>
        <li>
         
			 
             <span>Upload Test Data CSV file</span>
        </li>
        <li>
           <select name = "type">
             <option value=></option>
           </select>
        </li>
        <li>
             
             <input type="file" name="file" id="file"/>
             <input type="button" name="buttonCreate" value="Create Test Data" onclick="document.getElementById('createForm').submit()"/>
     
        </li>
      </ul>
            </form>
    
    </div>
	<div id="createConsultant" class="CREATE">
	  <h2>Create Consultant</h2>
		<form name="input" action="/simple-admin/saveconsultant.htm" method="post">

			<ul>
				<li><label><span>First Name</span></label> <input type="text" id="firstName"
					name="firstName" /></li>
				<li><label><span>Last Name</span></label><input type="text" id="lastName"
					name="lastName" />
				</li>
				<li><label><span>User Id</span></label> <input type="text" id="userId"
					name="id" />
				</li>
				<li><label><span>Middle Name</span></label><input type="text" id="middleName"
					name="middleName" />
				</li>
				<li><label><span>Company</span></label><select name="companyId">
				   <c:forEach var="item" items="${model.companies}">
						<option value="${item.id}"><c:out value="${item.companyName}"/></option>
					</c:forEach>
	  			 </select></li>

			</ul>
			
			<input type="submit" name="submit" value="Create Consultant"/>


			<b> <c:out value="${model.message}"/> </b>

		</form>
	</div>
	<div id="createCompany" class="CREATE">
	  <h2>Create Company</h2>
		<form name="input" action="/simple-admin/savecompany.htm" method="post">

			<ul>
				
	<li><label><span>Company Name</span></label> <input type="text" id="companyName"
					name="companyName" />
				<li>	
				<li><label><span>Type</span></label> 
				<select name="type">
				  <option value="PARENT">Silverquest</option>
				  <option value="CLIENT">Client</option>"
				</select>
			    </li>
				<li><label><span>Addr 1</span></label> <input type="text" id="address.addressLine1"
								name="address.addressLine1" /></li>
			
				<li><label><span>Addr 2</span></label> <input type="text" id="address.addressLine2"
								name="address.addressLine2" /></li>
			
				<li><label><span>Addr 3</span></label> <input type="text" id="address.addressLine3"
								name="address.addressLine3" /></li>
			
				<li><label><span>Addr 4</span></label> <input type="text" id="address.addressLine4"
								name="address.addressLine4" /></li>
			
				<li><label><span>Addr 5</span></label> <input type="text" id="address.addressLine5"
								name="address.addressLine5" /></li>
			
				<li><label><span>State</span></label> <input type="text" id="address.state"
								name="address.state" /></li>
			
				<li><label><span>City</span></label> <input type="text" id="address.city"
								name="address.city" /></li>
			
				<li><label><span>Zip Code</span></label> <input type="text" id="address.zipCode"
								name="address.zipCode" /></li>

			</ul>
			
			<input type="submit" name="submit" value="Create Company"/>


			<b> <c:out value="${model.message}"/> </b>

		</form>
	</div>
	
	<div id="" class="CREATE">
	   <h2>Create assignment</h2>
		<form name="input" action="/simple-admin/saveAssignment.htm" method="post">
		   <ul>
		     <li>
		       <select name="clientCompanyId">
		       
		          <c:forEach var="item" items="${model.clientCompanies}">
						<option value="${item.id}"><c:out value="${item.companyName}"/></option>
					</c:forEach>
		       </select>
		     </li>
		     <li>
		       <select name="consultantId">
		       
		          <c:forEach var="item" items="${model.consultants}">
						<option value="${item.id}"><c:out value="${item.firstName}"/> - <c:out value="${item.lastName}"/></option>
					</c:forEach>
		       </select>
		     </li>
		     Assignment Id <c:out value="${model.assingmentId}"/>
		   
		   	 <li><label><span>Hourly rate</span></label> <input type="text" id="hourlyRateCharged"
								name="hourlyRateCharged" />
					<input type="hidden" name="currency" value="AUD"/>			
								</li>
		   
		   <li><label><span>Project Name</span></label> <input type="text" id="projectName"
								name="projectName" /></li>
		   </ul>
			<input type="submit" name="submit" value="Create Assignment"/>
		</form>
	   
	</div>

</div>

<%@ include file="userdetails.jsp" %>

</body>
</html>