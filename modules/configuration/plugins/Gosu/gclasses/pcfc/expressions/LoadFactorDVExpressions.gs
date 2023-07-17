package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/loadandvacation/LoadFactorDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LoadFactorDVExpressions {
  @javax.annotation.Generated("config/web/pcf/loadandvacation/LoadFactorDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LoadFactorDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput at LoadFactorDV.pcf: line 22, column 98
    function def_onEnter_6 (def :  pcf.EditableLoadFactorsLV) : void {
      def.onEnter(group.MembersNoSystemUsers)
    }
    
    // 'def' attribute on ListViewInput at LoadFactorDV.pcf: line 22, column 98
    function def_refreshVariables_7 (def :  pcf.EditableLoadFactorsLV) : void {
      def.refreshVariables(group.MembersNoSystemUsers)
    }
    
    // 'value' attribute on TextInput (id=GroupLoadFactor_Input) at LoadFactorDV.pcf: line 18, column 40
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      group.LoadFactor = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'validationExpression' attribute on TextInput (id=GroupLoadFactor_Input) at LoadFactorDV.pcf: line 18, column 40
    function validationExpression_0 () : java.lang.Object {
      return !(group.LoadFactor < 0 || group.LoadFactor > 100) ? null : DisplayKey.get("Web.LoadAndVacation.LoadFactorDV.GroupLoadFactor.OutOfRange")
    }
    
    // 'value' attribute on TextInput (id=GroupLoadFactor_Input) at LoadFactorDV.pcf: line 18, column 40
    function valueRoot_3 () : java.lang.Object {
      return group
    }
    
    // 'value' attribute on TextInput (id=GroupLoadFactor_Input) at LoadFactorDV.pcf: line 18, column 40
    function value_1 () : java.lang.Integer {
      return group.LoadFactor
    }
    
    property get group () : Group {
      return getRequireValue("group", 0) as Group
    }
    
    property set group ($arg :  Group) {
      setRequireValue("group", 0, $arg)
    }
    
    
  }
  
  
}