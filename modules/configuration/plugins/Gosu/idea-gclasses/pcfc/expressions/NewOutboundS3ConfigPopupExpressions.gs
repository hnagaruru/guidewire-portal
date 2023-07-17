package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/outboundfile/NewOutboundS3ConfigPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewOutboundS3ConfigPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/outboundfile/NewOutboundS3ConfigPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewOutboundS3ConfigPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 1
    }
    
    static function __constructorIndex (outboundFileConfig :  OutboundFileS3Config) : int {
      return 0
    }
    
    // 'value' attribute on TextInput (id=ConfigTemporaryDir_Input) at NewOutboundS3ConfigPopup.pcf: line 46, column 60
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      outboundFileConfig.TemporaryDirectory = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=ConfigBucket_Input) at NewOutboundS3ConfigPopup.pcf: line 52, column 61
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      outboundFileConfig.DestinationS3Bucket = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=ConfigS3Prefix_Input) at NewOutboundS3ConfigPopup.pcf: line 58, column 61
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      outboundFileConfig.DestinationS3Prefix = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=ConfigPrefix_Input) at NewOutboundS3ConfigPopup.pcf: line 64, column 48
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      outboundFileConfig.Prefix = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=ConfigExtension_Input) at NewOutboundS3ConfigPopup.pcf: line 70, column 51
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      outboundFileConfig.Extension = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=ConfigName_Input) at NewOutboundS3ConfigPopup.pcf: line 34, column 46
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      outboundFileConfig.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=HandlerClass_Input) at NewOutboundS3ConfigPopup.pcf: line 78, column 58
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      outboundFileConfig.FileHandlerClass = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=DaysTilPurge_Input) at NewOutboundS3ConfigPopup.pcf: line 85, column 44
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      outboundFileConfig.DaysTillPurge = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=ConfigProfile_Input) at NewOutboundS3ConfigPopup.pcf: line 40, column 53
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      outboundFileConfig.ProfileName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at NewOutboundS3ConfigPopup.pcf: line 17, column 36
    function initialValue_0 () : OutboundFileS3Config {
      return new OutboundFileS3Config()
    }
    
    // EditButtons at NewOutboundS3ConfigPopup.pcf: line 22, column 23
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'validationExpression' attribute on TextInput (id=HandlerClass_Input) at NewOutboundS3ConfigPopup.pcf: line 78, column 58
    function validationExpression_30 () : java.lang.Object {
      return com.guidewire.outboundfile.batch.file.OutboundFileUtils.validateFileHandlerAndDisplayError(outboundFileConfig.FileHandlerClass)
    }
    
    // 'value' attribute on TextInput (id=ConfigName_Input) at NewOutboundS3ConfigPopup.pcf: line 34, column 46
    function valueRoot_4 () : java.lang.Object {
      return outboundFileConfig
    }
    
    // 'value' attribute on TextInput (id=ConfigTemporaryDir_Input) at NewOutboundS3ConfigPopup.pcf: line 46, column 60
    function value_10 () : java.lang.String {
      return outboundFileConfig.TemporaryDirectory
    }
    
    // 'value' attribute on TextInput (id=ConfigBucket_Input) at NewOutboundS3ConfigPopup.pcf: line 52, column 61
    function value_14 () : java.lang.String {
      return outboundFileConfig.DestinationS3Bucket
    }
    
    // 'value' attribute on TextInput (id=ConfigS3Prefix_Input) at NewOutboundS3ConfigPopup.pcf: line 58, column 61
    function value_18 () : java.lang.String {
      return outboundFileConfig.DestinationS3Prefix
    }
    
    // 'value' attribute on TextInput (id=ConfigName_Input) at NewOutboundS3ConfigPopup.pcf: line 34, column 46
    function value_2 () : java.lang.String {
      return outboundFileConfig.Name
    }
    
    // 'value' attribute on TextInput (id=ConfigPrefix_Input) at NewOutboundS3ConfigPopup.pcf: line 64, column 48
    function value_22 () : java.lang.String {
      return outboundFileConfig.Prefix
    }
    
    // 'value' attribute on TextInput (id=ConfigExtension_Input) at NewOutboundS3ConfigPopup.pcf: line 70, column 51
    function value_26 () : java.lang.String {
      return outboundFileConfig.Extension
    }
    
    // 'value' attribute on TextInput (id=HandlerClass_Input) at NewOutboundS3ConfigPopup.pcf: line 78, column 58
    function value_31 () : java.lang.String {
      return outboundFileConfig.FileHandlerClass
    }
    
    // 'value' attribute on TextInput (id=DaysTilPurge_Input) at NewOutboundS3ConfigPopup.pcf: line 85, column 44
    function value_36 () : java.lang.Integer {
      return outboundFileConfig.DaysTillPurge
    }
    
    // 'value' attribute on TextInput (id=ConfigProfile_Input) at NewOutboundS3ConfigPopup.pcf: line 40, column 53
    function value_6 () : java.lang.String {
      return outboundFileConfig.ProfileName
    }
    
    override property get CurrentLocation () : pcf.NewOutboundS3ConfigPopup {
      return super.CurrentLocation as pcf.NewOutboundS3ConfigPopup
    }
    
    property get outboundFileConfig () : OutboundFileS3Config {
      return getVariableValue("outboundFileConfig", 0) as OutboundFileS3Config
    }
    
    property set outboundFileConfig ($arg :  OutboundFileS3Config) {
      setVariableValue("outboundFileConfig", 0, $arg)
    }
    
    
  }
  
  
}