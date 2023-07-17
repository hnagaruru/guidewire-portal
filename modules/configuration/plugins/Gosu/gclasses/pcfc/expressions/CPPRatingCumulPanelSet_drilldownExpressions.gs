package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cpp/policy/CPPRatingCumulPanelSet.drilldown.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CPPRatingCumulPanelSet_drilldownExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cpp/policy/CPPRatingCumulPanelSet.drilldown.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CPPRatingCumulPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at CPPRatingCumulPanelSet.drilldown.pcf: line 33, column 32
    function sortBy_0 (line :  entity.PolicyLine) : java.lang.Object {
      return line.Pattern.Priority
    }
    
    // 'value' attribute on TextCell (id=linedescription_Cell) at CPPRatingCumulPanelSet.drilldown.pcf: line 40, column 45
    function sortValue_1 (line :  entity.PolicyLine) : java.lang.Object {
      return line.DisplayName
    }
    
    // 'value' attribute on MonetaryAmountCell (id=linePremium_Cell) at CPPRatingCumulPanelSet.drilldown.pcf: line 46, column 85
    function sortValue_2 (line :  entity.PolicyLine) : java.lang.Object {
      return line.Costs.AmountSum(period.PreferredSettlementCurrency)
    }
    
    // 'value' attribute on RowIterator at CPPRatingCumulPanelSet.drilldown.pcf: line 30, column 47
    function value_10 () : entity.PolicyLine[] {
      return period.Lines
    }
    
    property get isEditable () : boolean {
      return getRequireValue("isEditable", 0) as java.lang.Boolean
    }
    
    property set isEditable ($arg :  boolean) {
      setRequireValue("isEditable", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cpp/policy/CPPRatingCumulPanelSet.drilldown.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CPPRatingCumulPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=linedescription_Cell) at CPPRatingCumulPanelSet.drilldown.pcf: line 40, column 45
    function action_3 () : void {
      CPPRatingCumulPopup.push(period, line, isEditable, jobWizardHelper)
    }
    
    // 'action' attribute on TextCell (id=linedescription_Cell) at CPPRatingCumulPanelSet.drilldown.pcf: line 40, column 45
    function action_dest_4 () : pcf.api.Destination {
      return pcf.CPPRatingCumulPopup.createDestination(period, line, isEditable, jobWizardHelper)
    }
    
    // 'value' attribute on TextCell (id=linedescription_Cell) at CPPRatingCumulPanelSet.drilldown.pcf: line 40, column 45
    function valueRoot_6 () : java.lang.Object {
      return line
    }
    
    // 'value' attribute on TextCell (id=linedescription_Cell) at CPPRatingCumulPanelSet.drilldown.pcf: line 40, column 45
    function value_5 () : java.lang.String {
      return line.DisplayName
    }
    
    // 'value' attribute on MonetaryAmountCell (id=linePremium_Cell) at CPPRatingCumulPanelSet.drilldown.pcf: line 46, column 85
    function value_8 () : gw.pl.currency.MonetaryAmount {
      return line.Costs.AmountSum(period.PreferredSettlementCurrency)
    }
    
    property get line () : entity.PolicyLine {
      return getIteratedValue(1) as entity.PolicyLine
    }
    
    
  }
  
  
}