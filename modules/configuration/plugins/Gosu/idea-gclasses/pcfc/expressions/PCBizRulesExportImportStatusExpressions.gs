package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/PCBizRulesExportImportStatus.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PCBizRulesExportImportStatusExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/PCBizRulesExportImportStatus.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PCBizRulesExportImportStatusExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=PCBizRulesExportImportStatus) at PCBizRulesExportImportStatus.pcf: line 10, column 75
    static function canVisit_2 () : java.lang.Boolean {
      return perm.System.uwruleview or perm.Rule.view
    }
    
    // 'def' attribute on ScreenRef at PCBizRulesExportImportStatus.pcf: line 12, column 93
    function def_onEnter_0 (def :  pcf.RuleExportImportStatusScreen) : void {
      def.onEnter(gw.bizrules.PCBizRulesNavigationSupport.Instance)
    }
    
    // 'def' attribute on ScreenRef at PCBizRulesExportImportStatus.pcf: line 12, column 93
    function def_refreshVariables_1 (def :  pcf.RuleExportImportStatusScreen) : void {
      def.refreshVariables(gw.bizrules.PCBizRulesNavigationSupport.Instance)
    }
    
    // 'parent' attribute on Page (id=PCBizRulesExportImportStatus) at PCBizRulesExportImportStatus.pcf: line 10, column 75
    static function parent_3 () : pcf.api.Destination {
      return pcf.UWRules.createDestination()
    }
    
    override property get CurrentLocation () : pcf.PCBizRulesExportImportStatus {
      return super.CurrentLocation as pcf.PCBizRulesExportImportStatus
    }
    
    
  }
  
  
}