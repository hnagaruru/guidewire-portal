package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduleInputSet.false.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ScheduleInputSet_falseExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduleInputSet.false.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScheduleInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get clause () : gw.api.domain.Clause {
      return getRequireValue("clause", 0) as gw.api.domain.Clause
    }
    
    property set clause ($arg :  gw.api.domain.Clause) {
      setRequireValue("clause", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    
  }
  
  
}