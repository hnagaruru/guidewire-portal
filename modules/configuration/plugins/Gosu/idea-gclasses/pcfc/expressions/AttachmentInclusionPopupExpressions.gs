package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/AttachmentInclusionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AttachmentInclusionPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/AttachmentInclusionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AttachmentInclusionPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (agreement :  RIAgreement, risk :  RIRisk) : int {
      return 0
    }
    
    // 'beforeCommit' attribute on Popup (id=AttachmentInclusionPopup) at AttachmentInclusionPopup.pcf: line 10, column 89
    function beforeCommit_5 (pickedValue :  java.lang.Object) : void {
      agreement.updateInclusion(risk, inclusion)
    }
    
    // 'value' attribute on TypeKeyInput (id=Inclusion_Input) at AttachmentInclusionPopup.pcf: line 35, column 60
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      inclusion = (__VALUE_TO_SET as typekey.RIAttachmentInclusionType)
    }
    
    // 'initialValue' attribute on Variable at AttachmentInclusionPopup.pcf: line 22, column 49
    function initialValue_0 () : typekey.RIAttachmentInclusionType {
      return agreement.getInclusion(risk)
    }
    
    // EditButtons at AttachmentInclusionPopup.pcf: line 25, column 23
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'value' attribute on TypeKeyInput (id=Inclusion_Input) at AttachmentInclusionPopup.pcf: line 35, column 60
    function value_2 () : typekey.RIAttachmentInclusionType {
      return inclusion
    }
    
    override property get CurrentLocation () : pcf.AttachmentInclusionPopup {
      return super.CurrentLocation as pcf.AttachmentInclusionPopup
    }
    
    property get agreement () : RIAgreement {
      return getVariableValue("agreement", 0) as RIAgreement
    }
    
    property set agreement ($arg :  RIAgreement) {
      setVariableValue("agreement", 0, $arg)
    }
    
    property get inclusion () : typekey.RIAttachmentInclusionType {
      return getVariableValue("inclusion", 0) as typekey.RIAttachmentInclusionType
    }
    
    property set inclusion ($arg :  typekey.RIAttachmentInclusionType) {
      setVariableValue("inclusion", 0, $arg)
    }
    
    property get risk () : RIRisk {
      return getVariableValue("risk", 0) as RIRisk
    }
    
    property set risk ($arg :  RIRisk) {
      setVariableValue("risk", 0, $arg)
    }
    
    
  }
  
  
}