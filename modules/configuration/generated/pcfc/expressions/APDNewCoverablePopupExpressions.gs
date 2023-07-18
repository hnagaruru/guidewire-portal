package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDNewCoverablePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDNewCoverablePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDNewCoverablePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDNewCoverablePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (lineContainer :  APDManualPolicyLine) : int {
      return 1
    }
    
    static function __constructorIndex (parent :  APDRiskCoverable) : int {
      return 0
    }
    
    // 'beforeCommit' attribute on Popup (id=APDNewCoverablePopup) at APDNewCoverablePopup.pcf: line 11, column 67
    function beforeCommit_8 (pickedValue :  java.lang.Object) : void {
      if(parent == null) (cbl as APDProductLine).buildRiskPolicyLine(lineContainer) else cbl.buildRiskCoverable(parent)
    }
    
    // 'def' attribute on InputSetRef at APDNewCoverablePopup.pcf: line 38, column 73
    function def_onEnter_3 (def :  pcf.APDCoverableInputSet_default) : void {
      def.onEnter(cbl)
    }
    
    // 'def' attribute on InputSetRef at APDNewCoverablePopup.pcf: line 38, column 73
    function def_onEnter_5 (def :  pcf.APDCoverableInputSet_line) : void {
      def.onEnter(cbl)
    }
    
    // 'def' attribute on InputSetRef at APDNewCoverablePopup.pcf: line 38, column 73
    function def_refreshVariables_4 (def :  pcf.APDCoverableInputSet_default) : void {
      def.refreshVariables(cbl)
    }
    
    // 'def' attribute on InputSetRef at APDNewCoverablePopup.pcf: line 38, column 73
    function def_refreshVariables_6 (def :  pcf.APDCoverableInputSet_line) : void {
      def.refreshVariables(cbl)
    }
    
    // 'initialValue' attribute on Variable at APDNewCoverablePopup.pcf: line 25, column 26
    function initialValue_0 () : APDProduct {
      return lineContainer.Branch.Policy.APDProduct
    }
    
    // 'initialValue' attribute on Variable at APDNewCoverablePopup.pcf: line 29, column 28
    function initialValue_1 () : APDCoverable {
      return parent == null ? product.createAndAddProductLine() : parent.Coverable.addCoverable()
    }
    
    // EditButtons at APDNewCoverablePopup.pcf: line 32, column 23
    function label_2 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'mode' attribute on InputSetRef at APDNewCoverablePopup.pcf: line 38, column 73
    function mode_7 () : java.lang.Object {
      return cbl typeis APDProductLine ? "line" : null
    }
    
    override property get CurrentLocation () : pcf.APDNewCoverablePopup {
      return super.CurrentLocation as pcf.APDNewCoverablePopup
    }
    
    property get cbl () : APDCoverable {
      return getVariableValue("cbl", 0) as APDCoverable
    }
    
    property set cbl ($arg :  APDCoverable) {
      setVariableValue("cbl", 0, $arg)
    }
    
    property get lineContainer () : APDManualPolicyLine {
      return getVariableValue("lineContainer", 0) as APDManualPolicyLine
    }
    
    property set lineContainer ($arg :  APDManualPolicyLine) {
      setVariableValue("lineContainer", 0, $arg)
    }
    
    property get parent () : APDRiskCoverable {
      return getVariableValue("parent", 0) as APDRiskCoverable
    }
    
    property set parent ($arg :  APDRiskCoverable) {
      setVariableValue("parent", 0, $arg)
    }
    
    property get product () : APDProduct {
      return getVariableValue("product", 0) as APDProduct
    }
    
    property set product ($arg :  APDProduct) {
      setVariableValue("product", 0, $arg)
    }
    
    
  }
  
  
}