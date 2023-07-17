package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/AdminMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AdminMenuActionsExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/AdminMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdminMenuActionsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=AdminMenuActions_NewUser) at AdminMenuActions.pcf: line 16, column 23
    function action_0 () : void {
      NewUser.go()
    }
    
    // 'action' attribute on MenuItem (id=AdminMenuActions_ValidateFormPatterns) at AdminMenuActions.pcf: line 47, column 44
    function action_11 () : void {
      FormPatternsValidation.go(); gw.admin.FormPatternValidation.validateAll(); gw.api.util.LocationUtil.addRequestScopedInfoMessage(DisplayKey.get("Web.Admin.FormPatternsValidationSuccessful"))
    }
    
    // 'action' attribute on MenuItem (id=AdminMenuActions_NewGroup) at AdminMenuActions.pcf: line 21, column 23
    function action_2 () : void {
      NewGroup.go()
    }
    
    // 'action' attribute on MenuItem (id=AdminMenuActions_NewOrganization) at AdminMenuActions.pcf: line 26, column 23
    function action_4 () : void {
      NewOrganization.go()
    }
    
    // 'action' attribute on MenuItem (id=AdminMenuActions_NewProducerCode) at AdminMenuActions.pcf: line 31, column 23
    function action_6 () : void {
      NewProducerCode.go()
    }
    
    // 'action' attribute on MenuItem (id=AdminMenuActions_NewAffinityGroup) at AdminMenuActions.pcf: line 36, column 23
    function action_8 () : void {
      NewAffinityGroup.go()
    }
    
    // 'action' attribute on MenuItem (id=AdminMenuActions_NewUser) at AdminMenuActions.pcf: line 16, column 23
    function action_dest_1 () : pcf.api.Destination {
      return pcf.NewUser.createDestination()
    }
    
    // 'action' attribute on MenuItem (id=AdminMenuActions_NewGroup) at AdminMenuActions.pcf: line 21, column 23
    function action_dest_3 () : pcf.api.Destination {
      return pcf.NewGroup.createDestination()
    }
    
    // 'action' attribute on MenuItem (id=AdminMenuActions_NewOrganization) at AdminMenuActions.pcf: line 26, column 23
    function action_dest_5 () : pcf.api.Destination {
      return pcf.NewOrganization.createDestination()
    }
    
    // 'action' attribute on MenuItem (id=AdminMenuActions_NewProducerCode) at AdminMenuActions.pcf: line 31, column 23
    function action_dest_7 () : pcf.api.Destination {
      return pcf.NewProducerCode.createDestination()
    }
    
    // 'action' attribute on MenuItem (id=AdminMenuActions_NewAffinityGroup) at AdminMenuActions.pcf: line 36, column 23
    function action_dest_9 () : pcf.api.Destination {
      return pcf.NewAffinityGroup.createDestination()
    }
    
    // 'visible' attribute on MenuItem (id=AdminMenuActions_ValidateFormPatterns) at AdminMenuActions.pcf: line 47, column 44
    function visible_10 () : java.lang.Boolean {
      return perm.System.formpatedit
    }
    
    
  }
  
  
}