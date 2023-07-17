package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPDwellingConstructionPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HOPDwellingConstructionPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPDwellingConstructionPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HOPDwellingConstructionPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at HOPDwellingConstructionPanelSet.pcf: line 17, column 91
    function def_onEnter_0 (def :  pcf.HOPDwellingConstructionDetailsDV) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at HOPDwellingConstructionPanelSet.pcf: line 17, column 91
    function def_refreshVariables_1 (def :  pcf.HOPDwellingConstructionDetailsDV) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper)
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