package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/parts/signs/IMPartReviewPanelSet.IMSignPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IMPartReviewPanelSet_IMSignPartExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/parts/signs/IMPartReviewPanelSet.IMSignPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IMPartReviewPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at IMPartReviewPanelSet.IMSignPart.pcf: line 14, column 33
    function initialValue_0 () : entity.IMSignPart {
      return imLine.IMSignPart
    }
    
    // 'sortBy' attribute on IteratorSort at IMPartReviewPanelSet.IMSignPart.pcf: line 26, column 28
    function sortBy_1 (sign :  entity.IMSign) : java.lang.Object {
      return sign.SignNumber
    }
    
    // 'value' attribute on PanelIterator (id=IMSignsIter) at IMPartReviewPanelSet.IMSignPart.pcf: line 23, column 39
    function value_5 () : entity.IMSign[] {
      return imSignPart.IMSigns
    }
    
    property get imLine () : InlandMarineLine {
      return getRequireValue("imLine", 0) as InlandMarineLine
    }
    
    property set imLine ($arg :  InlandMarineLine) {
      setRequireValue("imLine", 0, $arg)
    }
    
    property get imSignPart () : entity.IMSignPart {
      return getVariableValue("imSignPart", 0) as entity.IMSignPart
    }
    
    property set imSignPart ($arg :  entity.IMSignPart) {
      setVariableValue("imSignPart", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/parts/signs/IMPartReviewPanelSet.IMSignPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends IMPartReviewPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at IMPartReviewPanelSet.IMSignPart.pcf: line 28, column 68
    function def_onEnter_3 (def :  pcf.CoverageSummaryLV) : void {
      def.onEnter(sign.Coverages.toList(), sign)
    }
    
    // 'def' attribute on PanelRef at IMPartReviewPanelSet.IMSignPart.pcf: line 28, column 68
    function def_refreshVariables_4 (def :  pcf.CoverageSummaryLV) : void {
      def.refreshVariables(sign.Coverages.toList(), sign)
    }
    
    // 'label' attribute on Verbatim (id=signdisplayname) at IMPartReviewPanelSet.IMSignPart.pcf: line 31, column 41
    function label_2 () : java.lang.String {
      return sign.DisplayName
    }
    
    property get sign () : entity.IMSign {
      return getIteratedValue(1) as entity.IMSign
    }
    
    
  }
  
  
}