package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/policyfile/PolicyFile_IMBuildingsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_IMBuildingsScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/policyfile/PolicyFile_IMBuildingsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_IMBuildingsScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_IMBuildingsScreen.pcf: line 18, column 77
    function def_onEnter_0 (def :  pcf.IMBuildingsAndLocationsLV) : void {
      def.onEnter(imLine, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_IMBuildingsScreen.pcf: line 18, column 77
    function def_refreshVariables_1 (def :  pcf.IMBuildingsAndLocationsLV) : void {
      def.refreshVariables(imLine, openForEdit, jobWizardHelper)
    }
    
    property get imLine () : InlandMarineLine {
      return getRequireValue("imLine", 0) as InlandMarineLine
    }
    
    property set imLine ($arg :  InlandMarineLine) {
      setRequireValue("imLine", 0, $arg)
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