package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Audits.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_AuditsExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Audits.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_AuditsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'afterEnter' attribute on Page (id=PolicyFile_Audits) at PolicyFile_Audits.pcf: line 11, column 69
    function afterEnter_2 () : void {
      gw.api.web.PebblesUtil.addWebMessages(CurrentLocation, policyPeriod.getSlice(asOfDate).PolicyFileMessages)
    }
    
    // 'canEdit' attribute on Page (id=PolicyFile_Audits) at PolicyFile_Audits.pcf: line 11, column 69
    function canEdit_3 () : java.lang.Boolean {
      return perm.PolicyPeriod.audit(policyPeriod)
    }
    
    // 'canVisit' attribute on Page (id=PolicyFile_Audits) at PolicyFile_Audits.pcf: line 11, column 69
    static function canVisit_4 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.PolicyPeriod.view(policyPeriod) and policyPeriod.IsAuditable
    }
    
    // 'def' attribute on ScreenRef at PolicyFile_Audits.pcf: line 21, column 51
    function def_onEnter_0 (def :  pcf.AuditInformationScreen) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on ScreenRef at PolicyFile_Audits.pcf: line 21, column 51
    function def_refreshVariables_1 (def :  pcf.AuditInformationScreen) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // Page (id=PolicyFile_Audits) at PolicyFile_Audits.pcf: line 11, column 69
    static function parent_5 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod,asOfDate)
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_Audits {
      return super.CurrentLocation as pcf.PolicyFile_Audits
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}