package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/EditProgramPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditProgramPageExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/EditProgramPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditProgramPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (program :  RIProgram) : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=EditProgramPage) at EditProgramPage.pcf: line 11, column 75
    static function canVisit_2 (program :  RIProgram) : java.lang.Boolean {
      return perm.System.viewreinsuranceforpolicy
    }
    
    // 'def' attribute on ScreenRef at EditProgramPage.pcf: line 18, column 37
    function def_onEnter_0 (def :  pcf.ProgramScreen) : void {
      def.onEnter(program)
    }
    
    // 'def' attribute on ScreenRef at EditProgramPage.pcf: line 18, column 37
    function def_refreshVariables_1 (def :  pcf.ProgramScreen) : void {
      def.refreshVariables(program)
    }
    
    // 'parent' attribute on Page (id=EditProgramPage) at EditProgramPage.pcf: line 11, column 75
    static function parent_3 (program :  RIProgram) : pcf.api.Destination {
      return pcf.ProgramSearchPage.createDestination()
    }
    
    override property get CurrentLocation () : pcf.EditProgramPage {
      return super.CurrentLocation as pcf.EditProgramPage
    }
    
    property get program () : RIProgram {
      return getVariableValue("program", 0) as RIProgram
    }
    
    property set program ($arg :  RIProgram) {
      setVariableValue("program", 0, $arg)
    }
    
    
  }
  
  
}