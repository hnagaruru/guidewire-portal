package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/NewProgramPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewProgramPageExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/NewProgramPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewProgramPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=NewProgramPage) at NewProgramPage.pcf: line 13, column 74
    function afterCancel_3 () : void {
      Reinsurance.go()
    }
    
    // 'afterCancel' attribute on Page (id=NewProgramPage) at NewProgramPage.pcf: line 13, column 74
    function afterCancel_dest_4 () : pcf.api.Destination {
      return pcf.Reinsurance.createDestination()
    }
    
    // 'afterCommit' attribute on Page (id=NewProgramPage) at NewProgramPage.pcf: line 13, column 74
    function afterCommit_5 (TopLocation :  pcf.api.Location) : void {
      EditProgramPage.go(program)
    }
    
    // 'canVisit' attribute on Page (id=NewProgramPage) at NewProgramPage.pcf: line 13, column 74
    static function canVisit_6 () : java.lang.Boolean {
      return perm.System.editreinsuranceprogram
    }
    
    // 'def' attribute on ScreenRef at NewProgramPage.pcf: line 19, column 37
    function def_onEnter_1 (def :  pcf.ProgramScreen) : void {
      def.onEnter(program)
    }
    
    // 'def' attribute on ScreenRef at NewProgramPage.pcf: line 19, column 37
    function def_refreshVariables_2 (def :  pcf.ProgramScreen) : void {
      def.refreshVariables(program)
    }
    
    // 'initialValue' attribute on Variable at NewProgramPage.pcf: line 17, column 25
    function initialValue_0 () : RIProgram {
      return gw.web.admin.ReinsuranceUIHelper.initProgram()
    }
    
    // 'parent' attribute on Page (id=NewProgramPage) at NewProgramPage.pcf: line 13, column 74
    static function parent_7 () : pcf.api.Destination {
      return pcf.Reinsurance.createDestination()
    }
    
    override property get CurrentLocation () : pcf.NewProgramPage {
      return super.CurrentLocation as pcf.NewProgramPage
    }
    
    property get program () : RIProgram {
      return getVariableValue("program", 0) as RIProgram
    }
    
    property set program ($arg :  RIProgram) {
      setVariableValue("program", 0, $arg)
    }
    
    function initProgram() : RIProgram {
      var prog = new RIProgram()
      prog.Currency = gw.api.util.CurrencyUtil.getDefaultCurrency()
      return prog
    }
    
    
  }
  
  
}