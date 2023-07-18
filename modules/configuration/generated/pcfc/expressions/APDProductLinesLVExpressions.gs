package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDProductLinesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDProductLinesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDProductLinesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDProductLinesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDProductLinesLV.pcf: line 32, column 30
    function sortValue_0 (line :  APDProductLine) : java.lang.Object {
      return line.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDProductLinesLV.pcf: line 36, column 37
    function sortValue_1 (line :  APDProductLine) : java.lang.Object {
      return line.Description
    }
    
    // 'value' attribute on RowIterator (id=ProductLinesLV) at APDProductLinesLV.pcf: line 25, column 36
    function value_10 () : APDProductLine[] {
      return product.ProductLines*.ProductLine
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
  
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDProductLinesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends APDProductLinesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at APDProductLinesLV.pcf: line 32, column 30
    function action_2 () : void {
      APDCoverablePopup.push(line, policyPeriod.ManualLine?.getLine(line).APDEdition, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at APDProductLinesLV.pcf: line 32, column 30
    function action_dest_3 () : pcf.api.Destination {
      return pcf.APDCoverablePopup.createDestination(line, policyPeriod.ManualLine?.getLine(line).APDEdition, openForEdit)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDProductLinesLV.pcf: line 32, column 30
    function valueRoot_5 () : java.lang.Object {
      return line
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at APDProductLinesLV.pcf: line 32, column 30
    function value_4 () : java.lang.String {
      return line.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDProductLinesLV.pcf: line 36, column 37
    function value_7 () : java.lang.String {
      return line.Description
    }
    
    property get line () : APDProductLine {
      return getIteratedValue(1) as APDProductLine
    }
    
    
  }
  
  
}