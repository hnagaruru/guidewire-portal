package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPSwimmingPoolInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HOPSwimmingPoolInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPSwimmingPoolInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HOPSwimmingPoolInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on BooleanRadioInput (id=ApprovedFence_Input) at HOPSwimmingPoolInputSet.pcf: line 44, column 52
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.SwimmingPool.ApprovedFence = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=DivingBoard_Input) at HOPSwimmingPoolInputSet.pcf: line 50, column 50
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.SwimmingPool.DivingBoard = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Slide_Input) at HOPSwimmingPoolInputSet.pcf: line 56, column 44
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.SwimmingPool.Slide = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=SwimmingPool_Input) at HOPSwimmingPoolInputSet.pcf: line 27, column 31
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      hasSwimmingPool = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=AdditionalInformation_Input) at HOPSwimmingPoolInputSet.pcf: line 62, column 60
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.SwimmingPool.AdditionalInformation = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at HOPSwimmingPoolInputSet.pcf: line 38, column 48
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.SwimmingPool.PoolType = (__VALUE_TO_SET as typekey.HOPSwimmingPoolType)
    }
    
    // 'initialValue' attribute on Variable at HOPSwimmingPoolInputSet.pcf: line 20, column 23
    function initialValue_0 () : boolean {
      return dwelling.SwimmingPool != null
    }
    
    // 'onChange' attribute on PostOnChange at HOPSwimmingPoolInputSet.pcf: line 29, column 121
    function onChange_1 () : void {
      if (hasSwimmingPool) { dwelling.createAndAddSwimmingPool() } else { dwelling.removeSwimmingPool() }
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at HOPSwimmingPoolInputSet.pcf: line 38, column 48
    function valueRoot_8 () : java.lang.Object {
      return dwelling.SwimmingPool
    }
    
    // 'value' attribute on BooleanRadioInput (id=ApprovedFence_Input) at HOPSwimmingPoolInputSet.pcf: line 44, column 52
    function value_12 () : java.lang.Boolean {
      return dwelling.SwimmingPool.ApprovedFence
    }
    
    // 'value' attribute on BooleanRadioInput (id=DivingBoard_Input) at HOPSwimmingPoolInputSet.pcf: line 50, column 50
    function value_18 () : java.lang.Boolean {
      return dwelling.SwimmingPool.DivingBoard
    }
    
    // 'value' attribute on CheckBoxInput (id=SwimmingPool_Input) at HOPSwimmingPoolInputSet.pcf: line 27, column 31
    function value_2 () : java.lang.Boolean {
      return hasSwimmingPool
    }
    
    // 'value' attribute on BooleanRadioInput (id=Slide_Input) at HOPSwimmingPoolInputSet.pcf: line 56, column 44
    function value_24 () : java.lang.Boolean {
      return dwelling.SwimmingPool.Slide
    }
    
    // 'value' attribute on TextInput (id=AdditionalInformation_Input) at HOPSwimmingPoolInputSet.pcf: line 62, column 60
    function value_30 () : java.lang.String {
      return dwelling.SwimmingPool.AdditionalInformation
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at HOPSwimmingPoolInputSet.pcf: line 38, column 48
    function value_6 () : typekey.HOPSwimmingPoolType {
      return dwelling.SwimmingPool.PoolType
    }
    
    property get dwelling () : entity.HOPDwelling {
      return getRequireValue("dwelling", 0) as entity.HOPDwelling
    }
    
    property set dwelling ($arg :  entity.HOPDwelling) {
      setRequireValue("dwelling", 0, $arg)
    }
    
    property get hasSwimmingPool () : boolean {
      return getVariableValue("hasSwimmingPool", 0) as java.lang.Boolean
    }
    
    property set hasSwimmingPool ($arg :  boolean) {
      setVariableValue("hasSwimmingPool", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get openForEdit () : java.lang.Boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  java.lang.Boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    
  }
  
  
}