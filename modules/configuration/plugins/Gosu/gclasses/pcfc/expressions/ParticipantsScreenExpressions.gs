package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/ParticipantsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ParticipantsScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/ParticipantsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ParticipantsScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=Save) at ParticipantsScreen.pcf: line 25, column 25
    function action_1 () : void {
      wizard.saveDraft()
    }
    
    // 'def' attribute on PanelRef at ParticipantsScreen.pcf: line 16, column 36
    function def_onEnter_2 (def :  pcf.JobRolesLV) : void {
      def.onEnter(period.Job)
    }
    
    // 'def' attribute on PanelRef at ParticipantsScreen.pcf: line 16, column 36
    function def_refreshVariables_3 (def :  pcf.JobRolesLV) : void {
      def.refreshVariables(period.Job)
    }
    
    // 'editable' attribute on Screen (id=ParticipantsScreen) at ParticipantsScreen.pcf: line 7, column 29
    function editable_4 () : java.lang.Boolean {
      return perm.System.editjobroles
    }
    
    // 'initialValue' attribute on Variable at ParticipantsScreen.pcf: line 14, column 30
    function initialValue_0 () : pcf.api.Wizard {
      return CurrentLocation as pcf.api.Wizard
    }
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    property get wizard () : pcf.api.Wizard {
      return getVariableValue("wizard", 0) as pcf.api.Wizard
    }
    
    property set wizard ($arg :  pcf.api.Wizard) {
      setVariableValue("wizard", 0, $arg)
    }
    
    
  }
  
  
}