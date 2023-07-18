package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/ValidationPopupErrorsInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ValidationPopupErrorsInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/ValidationPopupErrorsInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ValidationPopupErrorsInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'labelAbove' attribute on TextInput (id=ValidationError_Input) at ValidationPopupErrorsInputSet.pcf: line 42, column 23
    function labelAbove_6 () : java.lang.Boolean {
      return labelAbove
    }
    
    // 'value' attribute on TextInput (id=ValidationError_Input) at ValidationPopupErrorsInputSet.pcf: line 42, column 23
    function value_4 () : java.lang.String {
      return error
    }
    
    property get error () : java.lang.String {
      return getIteratedValue(1) as java.lang.String
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/ValidationPopupErrorsInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ValidationPopupErrorsInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'iconColor' attribute on Link (id=ValidationErrorIcon) at ValidationPopupErrorsInputSet.pcf: line 27, column 35
    function iconColor_1 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'initialValue' attribute on Variable at ValidationPopupErrorsInputSet.pcf: line 17, column 24
    function initialValue_0 () : String[] {
      return argsErrors.length == 0 ? new String[0] : argsErrors
    }
    
    // 'labelAbove' attribute on ContentInput (id=header) at ValidationPopupErrorsInputSet.pcf: line 22, column 36
    function labelAbove_3 () : java.lang.Boolean {
      return labelAbove
    }
    
    // 'value' attribute on InputIterator at ValidationPopupErrorsInputSet.pcf: line 37, column 38
    function value_7 () : java.lang.String[] {
      return errors
    }
    
    // 'visible' attribute on ContentInput (id=header) at ValidationPopupErrorsInputSet.pcf: line 22, column 36
    function visible_2 () : java.lang.Boolean {
      return not errors.IsEmpty
    }
    
    property get argsErrors () : java.lang.String[] {
      return getRequireValue("argsErrors", 0) as java.lang.String[]
    }
    
    property set argsErrors ($arg :  java.lang.String[]) {
      setRequireValue("argsErrors", 0, $arg)
    }
    
    property get errors () : String[] {
      return getVariableValue("errors", 0) as String[]
    }
    
    property set errors ($arg :  String[]) {
      setVariableValue("errors", 0, $arg)
    }
    
    property get labelAbove () : boolean {
      return getRequireValue("labelAbove", 0) as java.lang.Boolean
    }
    
    property set labelAbove ($arg :  boolean) {
      setRequireValue("labelAbove", 0, $arg)
    }
    
    
  }
  
  
}