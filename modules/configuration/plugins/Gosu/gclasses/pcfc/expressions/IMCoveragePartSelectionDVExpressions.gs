package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/policy/IMCoveragePartSelectionDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IMCoveragePartSelectionDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/policy/IMCoveragePartSelectionDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IMCoveragePartSelectionDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at IMCoveragePartSelectionDV.pcf: line 52, column 30
    function sortBy_3 (part :  typekey.IMCoveragePart) : java.lang.Object {
      return part.Description
    }
    
    // 'value' attribute on TextCell (id=decription_Cell) at IMCoveragePartSelectionDV.pcf: line 57, column 43
    function sortValue_4 (part :  typekey.IMCoveragePart) : java.lang.Object {
      return part.Description
    }
    
    // 'toRemove' attribute on RowIterator at IMCoveragePartSelectionDV.pcf: line 49, column 50
    function toRemove_8 (part :  typekey.IMCoveragePart) : void {
      imLine.removeCoveragePart( part )
    }
    
    // 'value' attribute on MenuItemIterator at IMCoveragePartSelectionDV.pcf: line 27, column 52
    function value_2 () : typekey.IMCoveragePart[] {
      return imLine.availableParts()
    }
    
    // 'value' attribute on RowIterator at IMCoveragePartSelectionDV.pcf: line 49, column 50
    function value_9 () : typekey.IMCoveragePart[] {
      return imLine.IMCoverageParts*.Subtype
    }
    
    property get imLine () : InlandMarineLine {
      return getRequireValue("imLine", 0) as InlandMarineLine
    }
    
    property set imLine ($arg :  InlandMarineLine) {
      setRequireValue("imLine", 0, $arg)
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
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/policy/IMCoveragePartSelectionDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IMCoveragePartSelectionDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=decription_Cell) at IMCoveragePartSelectionDV.pcf: line 57, column 43
    function valueRoot_6 () : java.lang.Object {
      return part
    }
    
    // 'value' attribute on TextCell (id=decription_Cell) at IMCoveragePartSelectionDV.pcf: line 57, column 43
    function value_5 () : java.lang.String {
      return part.Description
    }
    
    property get part () : typekey.IMCoveragePart {
      return getIteratedValue(1) as typekey.IMCoveragePart
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/policy/IMCoveragePartSelectionDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends IMCoveragePartSelectionDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=eachpart) at IMCoveragePartSelectionDV.pcf: line 31, column 54
    function action_0 () : void {
      imLine.maybeCreateCoveragePart( newcoveragepart )
    }
    
    // 'label' attribute on MenuItem (id=eachpart) at IMCoveragePartSelectionDV.pcf: line 31, column 54
    function label_1 () : java.lang.Object {
      return newcoveragepart.DisplayName
    }
    
    property get newcoveragepart () : typekey.IMCoveragePart {
      return getIteratedValue(1) as typekey.IMCoveragePart
    }
    
    
  }
  
  
}