package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cpp/policyfile/InlandMarine_PolicyFilePart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class InlandMarine_PolicyFilePartExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cpp/policyfile/InlandMarine_PolicyFilePart.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InlandMarine_PolicyFilePartExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date, part :  IMCoveragePart) : int {
      return 0
    }
    
    // 'def' attribute on ScreenRef at InlandMarine_PolicyFilePart.pcf: line 22, column 33
    function def_onEnter_0 (def :  pcf.IMPolicyFilePartScreen_ContractorsEquipPart) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on ScreenRef at InlandMarine_PolicyFilePart.pcf: line 22, column 33
    function def_onEnter_2 (def :  pcf.IMPolicyFilePartScreen_IMAccountsRecPart) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on ScreenRef at InlandMarine_PolicyFilePart.pcf: line 22, column 33
    function def_onEnter_4 (def :  pcf.IMPolicyFilePartScreen_IMSignPart) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on ScreenRef at InlandMarine_PolicyFilePart.pcf: line 22, column 33
    function def_refreshVariables_1 (def :  pcf.IMPolicyFilePartScreen_ContractorsEquipPart) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on ScreenRef at InlandMarine_PolicyFilePart.pcf: line 22, column 33
    function def_refreshVariables_3 (def :  pcf.IMPolicyFilePartScreen_IMAccountsRecPart) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on ScreenRef at InlandMarine_PolicyFilePart.pcf: line 22, column 33
    function def_refreshVariables_5 (def :  pcf.IMPolicyFilePartScreen_IMSignPart) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'mode' attribute on ScreenRef at InlandMarine_PolicyFilePart.pcf: line 22, column 33
    function mode_6 () : java.lang.Object {
      return part.Subtype.Code
    }
    
    // 'parent' attribute on Page (id=InlandMarine_PolicyFilePart) at InlandMarine_PolicyFilePart.pcf: line 8, column 38
    static function parent_7 (asOfDate :  java.util.Date, part :  IMCoveragePart, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.InlandMarineLinks.createDestination(policyPeriod, asOfDate)
    }
    
    // 'title' attribute on Page (id=InlandMarine_PolicyFilePart) at InlandMarine_PolicyFilePart.pcf: line 8, column 38
    static function title_8 (asOfDate :  java.util.Date, part :  IMCoveragePart, policyPeriod :  PolicyPeriod) : java.lang.Object {
      return part.Subtype.DisplayName
    }
    
    override property get CurrentLocation () : pcf.InlandMarine_PolicyFilePart {
      return super.CurrentLocation as pcf.InlandMarine_PolicyFilePart
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get part () : IMCoveragePart {
      return getVariableValue("part", 0) as IMCoveragePart
    }
    
    property set part ($arg :  IMCoveragePart) {
      setVariableValue("part", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}