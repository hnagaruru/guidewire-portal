package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDProductScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDProductScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDProductScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDProductScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=Validate) at APDProductScreen.pcf: line 60, column 23
    function action_10 () : void {
      APDValidationResultsPopup.push(new gw.apd.model.generate.ProductGeneratorHelper(product, null))
    }
    
    // 'action' attribute on ToolbarButton (id=Save) at APDProductScreen.pcf: line 29, column 32
    function action_3 () : void {
      CurrentLocation.commit(); CurrentLocation.startEditing()
    }
    
    // 'action' attribute on ToolbarButton (id=Cancel) at APDProductScreen.pcf: line 36, column 41
    function action_5 () : void {
      CurrentLocation.cancel(); APDProductManagementPage.go()
    }
    
    // 'action' attribute on MenuItem (id=GenerateAllMenuItem) at APDProductScreen.pcf: line 45, column 99
    function action_6 () : void {
      CurrentLocation.commit(); CurrentLocation.startEditing(); GenerateSourceCodePopup.push(product, ALL)
    }
    
    // 'action' attribute on MenuItem (id=GenerateBaseCodeMenuItem) at APDProductScreen.pcf: line 49, column 104
    function action_7 () : void {
      CurrentLocation.commit(); CurrentLocation.startEditing(); GenerateSourceCodePopup.push(product, BASE_CODE)
    }
    
    // 'action' attribute on MenuItem (id=GenerateExternalMenuItem) at APDProductScreen.pcf: line 53, column 104
    function action_8 () : void {
      CurrentLocation.commit(); CurrentLocation.startEditing(); GenerateSourceCodePopup.push(product, EXTERNAL)
    }
    
    // 'action' attribute on ToolbarButton (id=Validate) at APDProductScreen.pcf: line 60, column 23
    function action_dest_11 () : pcf.api.Destination {
      return pcf.APDValidationResultsPopup.createDestination(new gw.apd.model.generate.ProductGeneratorHelper(product, null))
    }
    
    // 'def' attribute on InputSetRef at APDProductScreen.pcf: line 66, column 61
    function def_onEnter_12 (def :  pcf.APDProductInputSet) : void {
      def.onEnter(product, inDevelopMode)
    }
    
    // 'def' attribute on PanelRef (id=ProductLocalizedValues) at APDProductScreen.pcf: line 72, column 36
    function def_onEnter_16 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(product, {"Name", "Description"}, {DisplayKey.get("Web.APDProductScreen.APDProduct.Name"), DisplayKey.get("Web.APDProductScreen.APDProduct.Description")})
    }
    
    // 'def' attribute on PanelRef at APDProductScreen.pcf: line 76, column 74
    function def_onEnter_19 (def :  pcf.APDProductLinesCV_multi) : void {
      def.onEnter(product, policyPeriod, openForEdit)
    }
    
    // 'def' attribute on PanelRef at APDProductScreen.pcf: line 76, column 74
    function def_onEnter_21 (def :  pcf.APDProductLinesCV_single) : void {
      def.onEnter(product, policyPeriod, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at APDProductScreen.pcf: line 66, column 61
    function def_refreshVariables_13 (def :  pcf.APDProductInputSet) : void {
      def.refreshVariables(product, inDevelopMode)
    }
    
    // 'def' attribute on PanelRef (id=ProductLocalizedValues) at APDProductScreen.pcf: line 72, column 36
    function def_refreshVariables_17 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(product, {"Name", "Description"}, {DisplayKey.get("Web.APDProductScreen.APDProduct.Name"), DisplayKey.get("Web.APDProductScreen.APDProduct.Description")})
    }
    
    // 'def' attribute on PanelRef at APDProductScreen.pcf: line 76, column 74
    function def_refreshVariables_20 (def :  pcf.APDProductLinesCV_multi) : void {
      def.refreshVariables(product, policyPeriod, openForEdit)
    }
    
    // 'def' attribute on PanelRef at APDProductScreen.pcf: line 76, column 74
    function def_refreshVariables_22 (def :  pcf.APDProductLinesCV_single) : void {
      def.refreshVariables(product, policyPeriod, openForEdit)
    }
    
    // 'initialValue' attribute on Variable at APDProductScreen.pcf: line 16, column 23
    function initialValue_0 () : Boolean {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser().inDevelopMode()
    }
    
    // 'initialValue' attribute on Variable at APDProductScreen.pcf: line 21, column 23
    function initialValue_1 () : Boolean {
      return policyPeriod != null ? policyPeriod.OpenForEdit : CurrentLocation.InEditMode
    }
    
    // 'mode' attribute on PanelRef at APDProductScreen.pcf: line 76, column 74
    function mode_23 () : java.lang.Object {
      return product.Multiline ? "multi" : "single"
    }
    
    // 'visible' attribute on ToolbarButton (id=Save) at APDProductScreen.pcf: line 29, column 32
    function visible_2 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'visible' attribute on ToolbarButton (id=Cancel) at APDProductScreen.pcf: line 36, column 41
    function visible_4 () : java.lang.Boolean {
      return policyPeriod == null
    }
    
    // 'visible' attribute on ToolbarButton (id=Generate) at APDProductScreen.pcf: line 41, column 33
    function visible_9 () : java.lang.Boolean {
      return inDevelopMode
    }
    
    property get inDevelopMode () : Boolean {
      return getVariableValue("inDevelopMode", 0) as Boolean
    }
    
    property set inDevelopMode ($arg :  Boolean) {
      setVariableValue("inDevelopMode", 0, $arg)
    }
    
    property get openForEdit () : Boolean {
      return getVariableValue("openForEdit", 0) as Boolean
    }
    
    property set openForEdit ($arg :  Boolean) {
      setVariableValue("openForEdit", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get product () : APDProduct {
      return getRequireValue("product", 0) as APDProduct
    }
    
    property set product ($arg :  APDProduct) {
      setRequireValue("product", 0, $arg)
    }
    
    
  }
  
  
}