*************Adding Script for Bootstrapping**************
<script
  id="sap-ui-bootstrap"
  src="resources/sap-ui-core.js"
  data-sap-ui-theme="sap_fiori_3"
  data-sap-ui-libs="sap.m"
  data-sap-ui-compatVersion="edge"
></script>


*********adding Text control******** 
Now create a sap.m.Text UI element with the text Hello Word and place it in the <body> of the HTML page using the id of the <body>. For this purpose, create the following <script> tag as another child of the <head> tag directly behind the bootstrap script created above:
<script>
  var oText = new sap.m.Text({text: "Hello World"});
  oText.placeAt("content");
</script>
****Body Tag*********
Add the class="sapUiBody" and id="content" attributes to the <body> tag.
