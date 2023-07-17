package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/archive/ArchivedLocationGroup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ArchivedLocationGroupExpressions {
  @javax.annotation.Generated("config/web/pcf/archive/ArchivedLocationGroup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ArchivedLocationGroupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    // 'acceleratedMenuActions' attribute on LocationGroup (id=ArchivedLocationGroup) at ArchivedLocationGroup.pcf: line 10, column 69
    function acceleratedMenuActions_onEnter_4 (def :  pcf.ArchivedPolicyFileAcceleratedMenuActions) : void {
      def.onEnter(policyPeriod, asOfDate)
    }
    
    // 'acceleratedMenuActions' attribute on LocationGroup (id=ArchivedLocationGroup) at ArchivedLocationGroup.pcf: line 10, column 69
    function acceleratedMenuActions_refreshVariables_5 (def :  pcf.ArchivedPolicyFileAcceleratedMenuActions) : void {
      def.refreshVariables(policyPeriod, asOfDate)
    }
    
    // 'location' attribute on LocationGroup (id=ArchivedLocationGroup) at ArchivedLocationGroup.pcf: line 21, column 58
    function action_1 () : void {
      pcf.ArchivedPolicyPeriodPage.go(policyPeriod)
    }
    
    // 'location' attribute on LocationGroup (id=ArchivedLocationGroup) at ArchivedLocationGroup.pcf: line 21, column 58
    function action_dest_2 () : pcf.api.Destination {
      return pcf.ArchivedPolicyPeriodPage.createDestination(policyPeriod)
    }
    
    // LocationGroup (id=ArchivedLocationGroup) at ArchivedLocationGroup.pcf: line 10, column 69
    static function firstVisitableChildDestinationMethod_11 (policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.ArchivedPolicyPeriodPage.createDestination(policyPeriod)
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // 'infoBar' attribute on LocationGroup (id=ArchivedLocationGroup) at ArchivedLocationGroup.pcf: line 10, column 69
    function infoBar_onEnter_6 (def :  pcf.PolicyFileMenuInfoBar) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'infoBar' attribute on LocationGroup (id=ArchivedLocationGroup) at ArchivedLocationGroup.pcf: line 10, column 69
    function infoBar_refreshVariables_7 (def :  pcf.PolicyFileMenuInfoBar) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'initialValue' attribute on Variable at ArchivedLocationGroup.pcf: line 19, column 30
    function initialValue_0 () : java.util.Date {
      return policyPeriod.EditEffectiveDate
    }
    
    /**
     *  LocationGroup (id=ArchivedLocationGroup) at ArchivedLocationGroup.pcf: line 21, column 58
     * This expression is directly copied from the title expression on ArchivedPolicyPeriodPage because the LocationRef has no label attribute
     * If it fails to compile in this context, the label on the LocationRef should be explicitly specified
     */
    function label_3 () : java.lang.Object {
      return DisplayKey.get('Web.PolicyFile.PolicySummary', policyPeriod.PolicyNumberDisplayString)
    }
    
    // 'parent' attribute on LocationGroup (id=ArchivedLocationGroup) at ArchivedLocationGroup.pcf: line 10, column 69
    static function parent_8 (policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(policyPeriod.PolicyNumber)
    }
    
    // 'tabBar' attribute on LocationGroup (id=ArchivedLocationGroup) at ArchivedLocationGroup.pcf: line 10, column 69
    function tabBar_onEnter_9 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=ArchivedLocationGroup) at ArchivedLocationGroup.pcf: line 10, column 69
    function tabBar_refreshVariables_10 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.ArchivedLocationGroup {
      return super.CurrentLocation as pcf.ArchivedLocationGroup
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