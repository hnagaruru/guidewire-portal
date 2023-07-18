package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cp/policyfile/PolicyFile_CPBuildingsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_CPBuildingsScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cp/policyfile/PolicyFile_CPBuildingsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_CPBuildingsScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_CPBuildingsScreen.pcf: line 18, column 77
    function def_onEnter_0 (def :  pcf.CPBuildingsAndLocationsLV) : void {
      def.onEnter(cpLine, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_CPBuildingsScreen.pcf: line 18, column 77
    function def_refreshVariables_1 (def :  pcf.CPBuildingsAndLocationsLV) : void {
      def.refreshVariables(cpLine, openForEdit, jobWizardHelper)
    }
    
    property get cpLine () : CommercialPropertyLine {
      return getRequireValue("cpLine", 0) as CommercialPropertyLine
    }
    
    property set cpLine ($arg :  CommercialPropertyLine) {
      setRequireValue("cpLine", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    
  }
  
  
}