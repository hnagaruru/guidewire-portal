package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDProductLinesCV.multi.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDProductLinesCV_multiExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDProductLinesCV.multi.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDProductLinesCVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=NewLine) at APDProductLinesCV.multi.pcf: line 49, column 96
    function action_3 () : void {
      APDNewProductLinePopup.push(product)
    }
    
    // 'action' attribute on MenuItem (id=NewLine) at APDProductLinesCV.multi.pcf: line 49, column 96
    function action_dest_4 () : pcf.api.Destination {
      return pcf.APDNewProductLinePopup.createDestination(product)
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=RemoveLink) at APDProductLinesCV.multi.pcf: line 56, column 100
    function checkedRowAction_6 (element :  APDProductLine, CheckedValue :  APDProductLine) : void {
      product.removeProductLine(CheckedValue, false)
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=DeleteLine) at APDProductLinesCV.multi.pcf: line 62, column 97
    function checkedRowAction_7 (element :  APDProductLine, CheckedValue :  APDProductLine) : void {
      product.removeProductLine(CheckedValue, true)
    }
    
    // 'def' attribute on PanelRef (id=ProductLines) at APDProductLinesCV.multi.pcf: line 23, column 27
    function def_onEnter_8 (def :  pcf.APDProductLinesLV) : void {
      def.onEnter(product, policyPeriod, openForEdit)
    }
    
    // 'def' attribute on PanelRef (id=ProductLines) at APDProductLinesCV.multi.pcf: line 23, column 27
    function def_refreshVariables_9 (def :  pcf.APDProductLinesLV) : void {
      def.refreshVariables(product, policyPeriod, openForEdit)
    }
    
    // 'value' attribute on MenuItemIterator at APDProductLinesCV.multi.pcf: line 39, column 46
    function value_2 () : APDProductLine[] {
      return product.UnusedProductLines
    }
    
    // 'visible' attribute on ToolbarButton (id=AddButton) at APDProductLinesCV.multi.pcf: line 32, column 80
    function visible_5 () : java.lang.Boolean {
      return product.isMultiline() or product.ProductLines.Count == 0
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
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
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDProductLinesCV.multi.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends APDProductLinesCVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=Unusedline) at APDProductLinesCV.multi.pcf: line 43, column 44
    function action_0 () : void {
      product.createAndAddLineLink(unusedLine)
    }
    
    // 'label' attribute on MenuItem (id=Unusedline) at APDProductLinesCV.multi.pcf: line 43, column 44
    function label_1 () : java.lang.Object {
      return unusedLine.Name
    }
    
    property get unusedLine () : APDProductLine {
      return getIteratedValue(1) as APDProductLine
    }
    
    
  }
  
  
}