package perm

uses java.lang.Object
uses javax.annotation.Generated

@Generated("security-config-app.xml;security-config-pl.xml;security-config.xml", "", "com.guidewire.pl.permissions.codegen.EntityPermissionsGenerator")
class Issuance {
  static function advance (object :  Object) : boolean {
    return com.guidewire._generated.security.IssuancePermKeys.ADVANCE.hasPermission(entity.User.util.CurrentUser, object)
  }
  
  static function bind (object :  Object) : boolean {
    return com.guidewire._generated.security.IssuancePermKeys.BIND.hasPermission(entity.User.util.CurrentUser, object)
  }
  
  static function edit (object :  Object) : boolean {
    return com.guidewire._generated.security.IssuancePermKeys.EDIT.hasPermission(entity.User.util.CurrentUser, object)
  }
  
  static function issue (object :  Object) : boolean {
    return com.guidewire._generated.security.IssuancePermKeys.ISSUE.hasPermission(entity.User.util.CurrentUser, object)
  }
  
  static function quote (object :  Object) : boolean {
    return com.guidewire._generated.security.IssuancePermKeys.QUOTE.hasPermission(entity.User.util.CurrentUser, object)
  }
  
  static function view (object :  Object) : boolean {
    return com.guidewire._generated.security.IssuancePermKeys.VIEW.hasPermission(entity.User.util.CurrentUser, object)
  }
  
  static function withdraw (object :  Object) : boolean {
    return com.guidewire._generated.security.IssuancePermKeys.WITHDRAW.hasPermission(entity.User.util.CurrentUser, object)
  }
  
  static property get create () : boolean {
    return com.guidewire._generated.security.IssuancePermKeys.CREATE.hasPermission(entity.User.util.CurrentUser, null)
  }
  
  
}