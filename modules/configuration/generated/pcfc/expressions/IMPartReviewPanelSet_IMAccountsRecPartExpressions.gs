package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/parts/accountsrec/IMPartReviewPanelSet.IMAccountsRecPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IMPartReviewPanelSet_IMAccountsRecPartExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/parts/accountsrec/IMPartReviewPanelSet.IMAccountsRecPart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IMPartReviewPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at IMPartReviewPanelSet.IMAccountsRecPart.pcf: line 21, column 148
    function def_onEnter_1 (def :  pcf.CoverageSummaryLV) : void {
      def.onEnter(accountsRecPart.IMAccountsRecPartCovs?.toList() as java.util.List<gw.api.domain.Clause>, accountsRecPart)
    }
    
    // 'def' attribute on PanelRef at IMPartReviewPanelSet.IMAccountsRecPart.pcf: line 26, column 64
    function def_onEnter_5 (def :  pcf.IMARItemDV) : void {
      def.onEnter(accountsRecPart, false, null)
    }
    
    // 'def' attribute on PanelRef at IMPartReviewPanelSet.IMAccountsRecPart.pcf: line 21, column 148
    function def_refreshVariables_2 (def :  pcf.CoverageSummaryLV) : void {
      def.refreshVariables(accountsRecPart.IMAccountsRecPartCovs?.toList() as java.util.List<gw.api.domain.Clause>, accountsRecPart)
    }
    
    // 'def' attribute on PanelRef at IMPartReviewPanelSet.IMAccountsRecPart.pcf: line 26, column 64
    function def_refreshVariables_6 (def :  pcf.IMARItemDV) : void {
      def.refreshVariables(accountsRecPart, false, null)
    }
    
    // 'initialValue' attribute on Variable at IMPartReviewPanelSet.IMAccountsRecPart.pcf: line 14, column 33
    function initialValue_0 () : IMAccountsRecPart {
      return imLine.IMAccountsRecPart
    }
    
    // 'visible' attribute on PanelRef at IMPartReviewPanelSet.IMAccountsRecPart.pcf: line 16, column 68
    function visible_3 () : java.lang.Boolean {
      return accountsRecPart.IMAccountsRecPartCovs.Count > 0
    }
    
    // 'visible' attribute on PanelRef at IMPartReviewPanelSet.IMAccountsRecPart.pcf: line 26, column 64
    function visible_4 () : java.lang.Boolean {
      return !accountsRecPart.IMAccountsReceivables.IsEmpty
    }
    
    property get accountsRecPart () : IMAccountsRecPart {
      return getVariableValue("accountsRecPart", 0) as IMAccountsRecPart
    }
    
    property set accountsRecPart ($arg :  IMAccountsRecPart) {
      setVariableValue("accountsRecPart", 0, $arg)
    }
    
    property get imLine () : InlandMarineLine {
      return getRequireValue("imLine", 0) as InlandMarineLine
    }
    
    property set imLine ($arg :  InlandMarineLine) {
      setRequireValue("imLine", 0, $arg)
    }
    
    
  }
  
  
}