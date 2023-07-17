package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/policy/PolicyLineSummaryPanelSet.IMLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyLineSummaryPanelSet_IMLineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/policy/PolicyLineSummaryPanelSet.IMLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CardIteratorEntryExpressionsImpl extends PolicyLineSummaryPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at PolicyLineSummaryPanelSet.IMLine.pcf: line 35, column 35
    function def_onEnter_4 (def :  pcf.IMPartReviewPanelSet_ContractorsEquipPart) : void {
      def.onEnter(line as InlandMarineLine)
    }
    
    // 'def' attribute on PanelRef at PolicyLineSummaryPanelSet.IMLine.pcf: line 35, column 35
    function def_onEnter_6 (def :  pcf.IMPartReviewPanelSet_IMAccountsRecPart) : void {
      def.onEnter(line as InlandMarineLine)
    }
    
    // 'def' attribute on PanelRef at PolicyLineSummaryPanelSet.IMLine.pcf: line 35, column 35
    function def_onEnter_8 (def :  pcf.IMPartReviewPanelSet_IMSignPart) : void {
      def.onEnter(line as InlandMarineLine)
    }
    
    // 'def' attribute on PanelRef at PolicyLineSummaryPanelSet.IMLine.pcf: line 35, column 35
    function def_refreshVariables_5 (def :  pcf.IMPartReviewPanelSet_ContractorsEquipPart) : void {
      def.refreshVariables(line as InlandMarineLine)
    }
    
    // 'def' attribute on PanelRef at PolicyLineSummaryPanelSet.IMLine.pcf: line 35, column 35
    function def_refreshVariables_7 (def :  pcf.IMPartReviewPanelSet_IMAccountsRecPart) : void {
      def.refreshVariables(line as InlandMarineLine)
    }
    
    // 'def' attribute on PanelRef at PolicyLineSummaryPanelSet.IMLine.pcf: line 35, column 35
    function def_refreshVariables_9 (def :  pcf.IMPartReviewPanelSet_IMSignPart) : void {
      def.refreshVariables(line as InlandMarineLine)
    }
    
    // 'title' attribute on Card (id=impartCard) at PolicyLineSummaryPanelSet.IMLine.pcf: line 24, column 45
    function title_11 () : java.lang.String {
      return imPartSubtype.DisplayName
    }
    
    // 'value' attribute on HiddenInput (id=impartdisplayname_Input) at PolicyLineSummaryPanelSet.IMLine.pcf: line 30, column 47
    function valueRoot_2 () : java.lang.Object {
      return imPartSubtype
    }
    
    // 'value' attribute on HiddenInput (id=impartdisplayname_Input) at PolicyLineSummaryPanelSet.IMLine.pcf: line 30, column 47
    function value_1 () : java.lang.String {
      return imPartSubtype.Code
    }
    
    property get imPartSubtype () : typekey.IMCoveragePart {
      return getIteratedValue(1) as typekey.IMCoveragePart
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/policy/PolicyLineSummaryPanelSet.IMLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyLineSummaryPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyLineSummaryPanelSet.IMLine.pcf: line 21, column 26
    function sortBy_0 (imPartSubtype :  typekey.IMCoveragePart) : java.lang.Object {
      return imPartSubtype.DisplayName
    }
    
    // 'value' attribute on CardIterator at PolicyLineSummaryPanelSet.IMLine.pcf: line 18, column 46
    function value_12 () : typekey.IMCoveragePart[] {
      return (line as InlandMarineLine).IMCoverageParts*.Subtype
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get line () : PolicyLine {
      return getRequireValue("line", 0) as PolicyLine
    }
    
    property set line ($arg :  PolicyLine) {
      setRequireValue("line", 0, $arg)
    }
    
    
  }
  
  
}