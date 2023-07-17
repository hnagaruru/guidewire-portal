package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cp/policy/PolicyLineSummaryPanelSet.CPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyLineSummaryPanelSet_CPLineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/PolicyLineSummaryPanelSet.CPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyLineSummaryPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at PolicyLineSummaryPanelSet.CPLine.pcf: line 24, column 93
    function def_onEnter_0 (def :  pcf.CPBuildingsAndLocationsLV) : void {
      def.onEnter(line as CommercialPropertyLine, false, null)
    }
    
    // 'def' attribute on PanelRef at PolicyLineSummaryPanelSet.CPLine.pcf: line 38, column 76
    function def_onEnter_2 (def :  pcf.CPBlanketPanelSet) : void {
      def.onEnter(line as CommercialPropertyLine, false, null)
    }
    
    // 'def' attribute on PanelRef at PolicyLineSummaryPanelSet.CPLine.pcf: line 24, column 93
    function def_refreshVariables_1 (def :  pcf.CPBuildingsAndLocationsLV) : void {
      def.refreshVariables(line as CommercialPropertyLine, false, null)
    }
    
    // 'def' attribute on PanelRef at PolicyLineSummaryPanelSet.CPLine.pcf: line 38, column 76
    function def_refreshVariables_3 (def :  pcf.CPBlanketPanelSet) : void {
      def.refreshVariables(line as CommercialPropertyLine, false, null)
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