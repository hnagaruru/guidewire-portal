package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/Team.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TeamExpressions {
  @javax.annotation.Generated("config/web/pcf/team/Team.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on LocationGroup (id=Team) at Team.pcf: line 11, column 57
    static function canVisit_0 () : java.lang.Boolean {
      return perm.User.viewteam
    }
    
    // LocationGroup (id=Team) at Team.pcf: line 11, column 57
    static function firstVisitableChildDestinationMethod_8 () : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.TeamGroup.createDestination(com.guidewire.pc.web.team.PCTeamModelFactory.getInstance().createRootTeamModel() as gw.api.web.team.PCTeamModel)
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // 'menuLinks' attribute on LocationGroup (id=Team) at Team.pcf: line 11, column 57
    function menuLinks_onEnter_1 (def :  pcf.BlankMenuLinks) : void {
      def.onEnter()
    }
    
    // 'menuLinks' attribute on LocationGroup (id=Team) at Team.pcf: line 11, column 57
    function menuLinks_refreshVariables_2 (def :  pcf.BlankMenuLinks) : void {
      def.refreshVariables()
    }
    
    // 'menuTree' attribute on LocationGroup (id=Team) at Team.pcf: line 11, column 57
    function menuTree_onEnter_3 (def :  pcf.TeamMenuTree) : void {
      def.onEnter()
    }
    
    // 'menuTree' attribute on LocationGroup (id=Team) at Team.pcf: line 11, column 57
    function menuTree_refreshVariables_4 (def :  pcf.TeamMenuTree) : void {
      def.refreshVariables()
    }
    
    // 'parent' attribute on LocationGroup (id=Team) at Team.pcf: line 11, column 57
    static function parent_5 () : pcf.api.Destination {
      return pcf.TeamForward.createDestination("", new gw.api.web.team.PCRootTeamModel())
    }
    
    // 'tabBar' attribute on LocationGroup (id=Team) at Team.pcf: line 11, column 57
    function tabBar_onEnter_6 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=Team) at Team.pcf: line 11, column 57
    function tabBar_refreshVariables_7 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.Team {
      return super.CurrentLocation as pcf.Team
    }
    
    
  }
  
  
}