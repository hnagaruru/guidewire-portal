package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPDwellingPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HOPDwellingPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPDwellingPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HOPDwellingPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at HOPDwellingPanelSet.pcf: line 22, column 83
    function def_onEnter_0 (def :  pcf.HOPDwellingDetailsDV) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at HOPDwellingPanelSet.pcf: line 28, column 114
    function def_onEnter_2 (def :  pcf.HOPDwellingAdditionalInterestDetailsDV) : void {
      def.onEnter(policyPeriod.HOPLine.HOPDwellings.single(), openForEdit)
    }
    
    // 'def' attribute on PanelRef at HOPDwellingPanelSet.pcf: line 30, column 85
    function def_onEnter_4 (def :  pcf.AdditionalInsuredsDV) : void {
      def.onEnter(policyPeriod.HOPLine, openForEdit, true, true)
    }
    
    // 'def' attribute on PanelRef at HOPDwellingPanelSet.pcf: line 22, column 83
    function def_refreshVariables_1 (def :  pcf.HOPDwellingDetailsDV) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at HOPDwellingPanelSet.pcf: line 28, column 114
    function def_refreshVariables_3 (def :  pcf.HOPDwellingAdditionalInterestDetailsDV) : void {
      def.refreshVariables(policyPeriod.HOPLine.HOPDwellings.single(), openForEdit)
    }
    
    // 'def' attribute on PanelRef at HOPDwellingPanelSet.pcf: line 30, column 85
    function def_refreshVariables_5 (def :  pcf.AdditionalInsuredsDV) : void {
      def.refreshVariables(policyPeriod.HOPLine, openForEdit, true, true)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get openForEdit () : Boolean {
      return getRequireValue("openForEdit", 0) as Boolean
    }
    
    property set openForEdit ($arg :  Boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}