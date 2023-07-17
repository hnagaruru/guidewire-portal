package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/losshistory/LossHistoryInputSet.man.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LossHistoryInputSet_manExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/losshistory/LossHistoryInputSet.man.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LossHistoryInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput at LossHistoryInputSet.man.pcf: line 24, column 25
    function def_onEnter_5 (def :  pcf.ManualLossHistoryLV) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on ListViewInput at LossHistoryInputSet.man.pcf: line 24, column 25
    function def_refreshVariables_6 (def :  pcf.ManualLossHistoryLV) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'value' attribute on TypeKeyInput (id=NewLossesCurrency_Input) at LossHistoryInputSet.man.pcf: line 20, column 65
    function valueRoot_2 () : java.lang.Object {
      return policyPeriod
    }
    
    // 'value' attribute on TypeKeyInput (id=NewLossesCurrency_Input) at LossHistoryInputSet.man.pcf: line 20, column 65
    function value_1 () : typekey.Currency {
      return policyPeriod.PreferredCoverageCurrency
    }
    
    // 'visible' attribute on TypeKeyInput (id=NewLossesCurrency_Input) at LossHistoryInputSet.man.pcf: line 20, column 65
    function visible_0 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}