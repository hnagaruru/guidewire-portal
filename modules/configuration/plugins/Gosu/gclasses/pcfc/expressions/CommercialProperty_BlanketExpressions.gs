package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cpp/policyfile/CommercialProperty_Blanket.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CommercialProperty_BlanketExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cpp/policyfile/CommercialProperty_Blanket.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CommercialProperty_BlanketExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (period :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'def' attribute on ScreenRef (id=PolicyFile_CPBlanketScreen) at CommercialProperty_Blanket.pcf: line 19, column 40
    function def_onEnter_0 (def :  pcf.PolicyFile_CPBlanketScreen) : void {
      def.onEnter(period.CPLine, false)
    }
    
    // 'def' attribute on ScreenRef (id=PolicyFile_CPBlanketScreen) at CommercialProperty_Blanket.pcf: line 19, column 40
    function def_refreshVariables_1 (def :  pcf.PolicyFile_CPBlanketScreen) : void {
      def.refreshVariables(period.CPLine, false)
    }
    
    // 'parent' attribute on Page (id=CommercialProperty_Blanket) at CommercialProperty_Blanket.pcf: line 8, column 65
    static function parent_2 (asOfDate :  java.util.Date, period :  PolicyPeriod) : pcf.api.Destination {
      return pcf.CommercialPropertyLinks.createDestination(period, asOfDate)
    }
    
    override property get CurrentLocation () : pcf.CommercialProperty_Blanket {
      return super.CurrentLocation as pcf.CommercialProperty_Blanket
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getVariableValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setVariableValue("period", 0, $arg)
    }
    
    
  }
  
  
}