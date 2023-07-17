package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/WarningsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WarningsPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/WarningsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends WarningsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on Verbatim (id=Warning) at WarningsPanelSet.pcf: line 19, column 27
    function label_0 () : java.lang.String {
      return warning
    }
    
    property get warning () : java.lang.String {
      return getIteratedValue(1) as java.lang.String
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/WarningsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WarningsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PanelIterator at WarningsPanelSet.pcf: line 13, column 58
    function value_1 () : java.util.List<java.lang.String> {
      return warnings
    }
    
    property get warnings () : List<String> {
      return getRequireValue("warnings", 0) as List<String>
    }
    
    property set warnings ($arg :  List<String>) {
      setRequireValue("warnings", 0, $arg)
    }
    
    
  }
  
  
}